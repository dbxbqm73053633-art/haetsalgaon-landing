import { useEffect, useRef, useState } from "react";

const PHONE_NUMBER = "01082366672";

const LOCATION = {
  name: "햇살가온 1동",
  address: "파주시 상지석동 651번지",
  lat: 37.759,
  lng: 126.78,
};

const KAKAO_MAP_URL = `https://map.kakao.com/link/to/햇살가온,${LOCATION.lat},${LOCATION.lng}`;

type KakaoLatLng = new (lat: number, lng: number) => unknown;
type KakaoMap = new (
  container: HTMLElement,
  options: { center: unknown; level: number },
) => unknown;
type KakaoMarker = new (options: { position: unknown; map: unknown }) => unknown;

type KakaoMaps = {
  LatLng: KakaoLatLng;
  Map: KakaoMap;
  Marker: KakaoMarker;
  load: (callback: () => void) => void;
};

type KakaoGlobal = {
  maps: KakaoMaps;
};

declare global {
  interface Window {
    kakao?: KakaoGlobal;
  }
}

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [hasMapError, setHasMapError] = useState(false);

  useEffect(() => {
    const mapKey = import.meta.env.VITE_KAKAO_MAP_KEY;

    if (!mapKey || !mapRef.current) {
      setHasMapError(true);
      return;
    }

    const renderMap = () => {
      if (!window.kakao || !mapRef.current) {
        setHasMapError(true);
        return;
      }

      const center = new window.kakao.maps.LatLng(LOCATION.lat, LOCATION.lng);
      const map = new window.kakao.maps.Map(mapRef.current, {
        center,
        level: 4,
      });

      new window.kakao.maps.Marker({
        position: center,
        map,
      });
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      "script[data-kakao-map-sdk='true']",
    );

    if (existingScript && window.kakao) {
      window.kakao.maps.load(renderMap);
      return;
    }

    const script = document.createElement("script");
    script.dataset.kakaoMapSdk = "true";
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${mapKey}&autoload=false`;
    script.onload = () => window.kakao?.maps.load(renderMap);
    script.onerror = () => setHasMapError(true);

    document.head.appendChild(script);
  }, []);

  return (
    <section className="section section--soft" id="location">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Location</span>
          <h2>오시는 길</h2>
          <p>서울 접근성과 생활 인프라를 모두 갖춘 햇살가온의 위치를 확인해보세요.</p>
        </div>

        <div className="location-layout">
          <article className="location-card">
            <span className="location-card__label">현장 주소</span>
            <h3>{LOCATION.name}</h3>
            <p className="location-card__address">{LOCATION.address}</p>
            <p className="location-card__notice">
              방문 전 잔여세대 및 상담 가능 시간을 확인해주세요.
            </p>

            <div className="location-card__actions">
              <a className="button button--gold" href={KAKAO_MAP_URL} target="_blank" rel="noreferrer">
                카카오맵 길찾기
              </a>

              <a className="button button--outline button--outline-dark" href={`tel:${PHONE_NUMBER}`}>
                전화 문의하기
              </a>
            </div>
          </article>

          <div className="map-card">
            <div className="kakao-map" ref={mapRef} aria-label={`${LOCATION.name} 지도`} />

            {hasMapError ? (
              <div className="map-fallback">
                <p>지도를 불러오지 못했습니다. 카카오맵에서 위치를 확인해주세요.</p>
                <a className="button button--gold" href={KAKAO_MAP_URL} target="_blank" rel="noreferrer">
                  카카오맵 길찾기
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

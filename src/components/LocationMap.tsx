import { useEffect, useRef, useState } from "react";

const PHONE_NUMBER = "01082366672";

const LOCATION = {
  name: "햇살가온 1동",
  address: "파주시 상지석동 651번지",
};

const KAKAO_MAP_URL = `https://map.kakao.com/link/search/${encodeURIComponent(
  LOCATION.address,
)}`;

type KakaoLatLng = new (lat: number, lng: number) => unknown;
type KakaoMapInstance = {
  setCenter: (latLng: unknown) => void;
};
type KakaoMap = new (
  container: HTMLElement,
  options: { center: unknown; level: number },
) => KakaoMapInstance;
type KakaoMarkerInstance = {
  setPosition: (latLng: unknown) => void;
};
type KakaoMarker = new (options: {
  position: unknown;
  map: KakaoMapInstance;
}) => KakaoMarkerInstance;
type KakaoGeocoder = {
  addressSearch: (
    address: string,
    callback: (
      result: Array<{ x: string; y: string }>,
      status: string,
    ) => void,
  ) => void;
};

type KakaoMaps = {
  LatLng: KakaoLatLng;
  Map: KakaoMap;
  Marker: KakaoMarker;
  load: (callback: () => void) => void;
  services: {
    Geocoder: new () => KakaoGeocoder;
    Status: {
      OK: string;
    };
  };
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

    if (!mapKey) {
      console.error(
        "Kakao map failed to load: VITE_KAKAO_MAP_KEY is missing. Add it to Cloudflare Pages environment variables.",
      );
      setHasMapError(true);
      return;
    }

    if (!mapRef.current) {
      console.error("Kakao map failed to load: map container was not found.");
      setHasMapError(true);
      return;
    }

    const renderMap = () => {
      if (!window.kakao || !mapRef.current) {
        console.error("Kakao map failed to load: Kakao Maps SDK is unavailable.");
        setHasMapError(true);
        return;
      }

      const fallbackCenter = new window.kakao.maps.LatLng(37.759, 126.78);
      const map = new window.kakao.maps.Map(mapRef.current, {
        center: fallbackCenter,
        level: 4,
      });
      const marker = new window.kakao.maps.Marker({
        position: fallbackCenter,
        map,
      });
      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(LOCATION.address, (result, status) => {
        if (status !== window.kakao?.maps.services.Status.OK || result.length === 0) {
          console.error(
            `Kakao map failed to geocode address: "${LOCATION.address}". Status: ${status}`,
          );
          setHasMapError(true);
          return;
        }

        const { x, y } = result[0];
        const searchedPosition = new window.kakao!.maps.LatLng(
          Number(y),
          Number(x),
        );

        map.setCenter(searchedPosition);
        marker.setPosition(searchedPosition);
        setHasMapError(false);
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
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${mapKey}&libraries=services&autoload=false`;
    script.onload = () => window.kakao?.maps.load(renderMap);
    script.onerror = () => {
      console.error(
        "Kakao map failed to load: SDK script request failed. Check the Kakao JavaScript key, allowed domains, and Cloudflare Pages environment variable.",
      );
      setHasMapError(true);
    };

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

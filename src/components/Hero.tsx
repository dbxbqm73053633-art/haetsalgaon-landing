const PHONE_NUMBER = "01082366672";

export default function Hero() {
  return (
    <section className="hero" aria-label="햇살가온 분양 메인">
      <div className="hero__overlay" />

      <div className="container hero__content">
        <p className="eyebrow">잔여세대 빠르게 소진 중</p>
        <h1>햇살이 머무는 따뜻한 보금자리, 햇살가온</h1>
        <p className="hero__subtitle">
          파주 상지석동 실거주 중심 신축 빌라
          <br />
          테라스 세대 포함, 잔여세대 한정 분양 중
        </p>

        <div className="hero__badges" aria-label="핵심 안내">
          <span>현재 잔여세대 한정 분양</span>
          <span>방문 전 잔여세대 확인 필수</span>
        </div>

        <div className="hero__actions">
          <a className="button button--gold" href={`tel:${PHONE_NUMBER}`}>
            📞 1초 상담 연결
          </a>

          <a className="button button--outline" href="#location">
            📍 현장 위치 확인
          </a>
        </div>

        <p className="hero__urgent">테라스 세대는 조기 마감될 수 있습니다</p>
      </div>
    </section>
  );
}

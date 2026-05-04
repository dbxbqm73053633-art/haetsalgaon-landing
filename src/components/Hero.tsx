const PHONE_NUMBER = "01082366672";

export default function Hero() {
  return (
    <section className="hero" aria-label="햇살가온 분양 메인">
      <div className="hero__overlay" />

      <div className="container hero__content">
        <p className="eyebrow">잔여 세대 마감 임박 · 테라스 세대 한정</p>
        <h1>햇살가온 빌라 6월 분양 예정</h1>
        <p className="hero__subtitle">
          남향 설계와 프리미엄 무상 옵션을 갖춘 실거주 중심 분양
        </p>

        <div className="hero__badges" aria-label="핵심 안내">
          <span>잔여 세대 마감 임박</span>
          <span>테라스 세대 한정</span>
        </div>

        <div className="hero__actions">
          <a className="button button--gold" href={`tel:${PHONE_NUMBER}`}>
            실시간 분양 문의
          </a>

          <a className="button button--outline" href="#price">
            잔여 세대 확인
          </a>
        </div>
      </div>
    </section>
  );
}

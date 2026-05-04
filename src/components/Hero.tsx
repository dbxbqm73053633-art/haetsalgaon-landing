const PHONE_NUMBER = "01082366672";

export default function Hero() {
  return (
    <section className="hero" aria-label="햇살가온 분양 메인">
      <div className="hero__overlay" />

      <div className="container hero__content">
        <p className="eyebrow">잔여세대 한정 분양 중 · 테라스 세대 한정</p>
        <h1>햇살이 머무는 따뜻한 보금자리</h1>
        <p className="hero__subtitle">
          파주 상지석동에서 만나는 실거주 중심 신축 빌라
        </p>

        <div className="hero__badges" aria-label="핵심 안내">
          <span>테라스 세대 포함</span>
          <span>생활 인프라 인접</span>
          <span>서울 접근성 고려</span>
        </div>

        <div className="hero__actions">
          <a className="button button--gold" href="#price">
            잔여세대 확인하기
          </a>

          <a className="button button--outline" href={`tel:${PHONE_NUMBER}`}>
            방문 상담 예약하기
          </a>
        </div>
      </div>
    </section>
  );
}

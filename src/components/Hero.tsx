const PHONE_NUMBER = "01082366672";

export default function Hero() {
  return (
    <section className="hero" aria-label="해살가온 분양 메인">
      <div className="hero__overlay" />

      <div className="container hero__content">
        <p className="eyebrow">6월 분양 예정 · 사전 상담 진행 중</p>
        <h1>해살가온 빌라 6월 분양 예정</h1>
        <p className="hero__subtitle">테라스 세대 포함 / 사전 상담 진행 중</p>

        <div className="hero__actions">
          <a className="button button--gold" href={`tel:${PHONE_NUMBER}`}>
            전화 문의하기
          </a>

          <a className="button button--outline" href="#price">
            분양가 확인
          </a>
        </div>
      </div>
    </section>
  );
}

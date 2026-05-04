const benefits = [
  {
    title: "전 세대 남향 설계",
    description: "하루 종일 밝은 채광을 기대할 수 있는 실거주 중심 설계입니다.",
  },
  {
    title: "101호·102호 테라스",
    description: "테라스 세대는 한정되어 조기 마감될 수 있습니다.",
  },
  {
    title: "설문IC 인접",
    description: "서울문산고속도로 접근성을 고려한 파주 생활권 입지입니다.",
  },
  {
    title: "생활 인프라 도보권",
    description: "생활 편의시설을 가까이 누릴 수 있는 실속형 주거 환경입니다.",
  },
];

export default function Benefits() {
  return (
    <section className="section section--navy" id="benefits">
      <div className="container">
        <div className="section-heading section-heading--light">
          <span className="section-kicker">Premium Points</span>
          <h2>햇살가온 핵심 장점</h2>
          <p>방문 전 꼭 확인해야 할 분양 포인트만 간결하게 정리했습니다.</p>
        </div>

        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <article className="benefit-card" key={benefit.title}>
              <span className="benefit-card__number">0{index + 1}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    title: "남향 설계",
    description: "채광과 통풍을 고려한 배치로 하루의 생활 만족도를 높였습니다.",
  },
  {
    title: "테라스 세대",
    description: "한정 세대에 제공되는 테라스 공간으로 실내외 활용도를 넓혔습니다.",
  },
  {
    title: "서울 접근성",
    description: "운정 생활권과 서울 이동 동선을 함께 고려한 입지입니다.",
  },
  {
    title: "생활 인프라",
    description: "마트, 학교, 병원 등 일상 편의시설을 가깝게 누릴 수 있습니다.",
  },
];

export default function Benefits() {
  return (
    <section className="section section--navy" id="benefits">
      <div className="container">
        <div className="section-heading section-heading--light">
          <span className="section-kicker">Premium Points</span>
          <h2>전단지 핵심 장점</h2>
          <p>분양 문의 전 가장 많이 확인하는 장점을 카드형으로 정리했습니다.</p>
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

const benefits = [
  {
    title: "전 세대 남향 설계",
    description: "하루 종일 밝은 채광을 고려한 실거주 중심 구조입니다.",
  },
  {
    title: "테라스 세대 한정",
    description: "101호·102호는 테라스 세대로 한정 분양 중입니다.",
  },
  {
    title: "서울 접근성 우수",
    description: "서울문산고속도로 설문IC 인접 생활권을 누릴 수 있습니다.",
  },
  {
    title: "생활 인프라 도보권",
    description: "마트, 학교, 병원 등 생활 편의시설을 가깝게 이용할 수 있습니다.",
  },
];

export default function Benefits() {
  return (
    <section className="section section--navy" id="benefits">
      <div className="container">
        <div className="section-heading section-heading--light">
          <span className="section-kicker">Premium Points</span>
          <h2>왜 햇살가온인가?</h2>
          <p>잔여세대 빠르게 소진 중입니다. 방문 전 상담으로 가능 호실을 확인하세요.</p>
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

        <p className="section-note section-note--light">
          실거주와 투자 모두 고려 가능한 구조
        </p>
      </div>
    </section>
  );
}

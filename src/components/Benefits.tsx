const benefits = [
  {
    title: "테라스 세대 구성",
    description:
      "선호도 높은 테라스 세대를 포함해 실거주 만족도와 희소가치를 높였습니다.",
  },
  {
    title: "다양한 구조 선택",
    description:
      "호실별 구조와 층별 조건을 비교해 가족 구성에 맞는 선택이 가능합니다.",
  },
  {
    title: "생활 인프라 접근성",
    description:
      "주변 생활권의 편의시설과 이동 동선을 고려한 입지 장점을 갖췄습니다.",
  },
  {
    title: "사전 문의 고객 우선 안내",
    description:
      "분양 일정, 잔여 호실, 방문 상담 가능 시간을 먼저 안내드립니다.",
  },
];

export default function Benefits() {
  return (
    <section className="section section--navy" id="benefits">
      <div className="container">
        <div className="section-heading section-heading--light">
          <span className="section-kicker">Benefits</span>
          <h2>햇살가온 핵심 장점</h2>
          <p>문의 전 꼭 필요한 장점을 간결하게 정리했습니다.</p>
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

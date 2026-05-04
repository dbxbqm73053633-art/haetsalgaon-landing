const environments = [
  { icon: "🛒", title: "대형마트/상권", distance: "생활 편의시설 인접" },
  { icon: "🏫", title: "학교/학원가", distance: "교육 생활권" },
  { icon: "🏥", title: "병원/의료시설", distance: "근거리 이용" },
  { icon: "🌳", title: "공원/산책로", distance: "여유로운 생활 환경" },
  { icon: "🚉", title: "운정역/버스노선", distance: "대중교통 생활권" },
];

export default function Environment() {
  return (
    <section className="section" id="environment">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Living Infra</span>
          <h2>생활 인프라</h2>
          <p>마트, 학교, 병원, 공원, 대중교통까지 가까운 생활권</p>
        </div>

        <div className="environment-grid">
          {environments.map((item) => (
            <article className="environment-card" key={item.title}>
              <span className="environment-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.distance}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

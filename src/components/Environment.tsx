const environments = [
  { icon: "🚉", title: "운정역", distance: "1km" },
  { icon: "🛒", title: "마트", distance: "생활권 인접" },
  { icon: "🏫", title: "학교", distance: "통학권" },
  { icon: "🏥", title: "병원", distance: "근거리" },
];

export default function Environment() {
  return (
    <section className="section" id="environment">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Location</span>
          <h2>거리로 확인하는 주변환경</h2>
          <p>실거주자가 매일 이용하는 생활 인프라를 아이콘과 거리 정보로 정리했습니다.</p>
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

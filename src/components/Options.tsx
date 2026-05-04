const options = [
  "시스템 에어컨 5대",
  "빌트인 냉장고 3대",
  "추가 비용 없음",
];

export default function Options() {
  return (
    <section className="section section--soft" id="options">
      <div className="container option-panel">
        <div className="section-heading">
          <span className="section-kicker">Premium Options</span>
          <h2>추가 비용 없는 프리미엄 옵션</h2>
          <p>입주 초기 부담을 낮추는 고급 옵션을 기본 제공 조건으로 강조했습니다.</p>
        </div>

        <div className="option-grid">
          {options.map((option) => (
            <article className="option-card" key={option}>
              <span aria-hidden="true">✓</span>
              <strong>{option}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

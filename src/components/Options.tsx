const options = [
  "시스템 에어컨 5대",
  "빌트인 냉장고 3대",
  "입주 부담을 줄이는 기본 옵션",
];

export default function Options() {
  return (
    <section className="section section--soft" id="options">
      <div className="container option-panel">
        <div className="section-heading">
          <span className="section-kicker">Premium Options</span>
          <h2>기본 옵션까지 갖춘 실속형 신축</h2>
          <p>시스템 에어컨 5대와 빌트인 냉장고 3대 제공으로 입주 부담을 줄였습니다.</p>
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

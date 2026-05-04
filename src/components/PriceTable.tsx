const PHONE_NUMBER = "01082366672";

type PriceRow = {
  unit: string;
  price: string;
  note: string;
};

const prices: PriceRow[] = [
  { unit: "101호", price: "37,900", note: "테라스 세대" },
  { unit: "102호", price: "39,400", note: "테라스 세대" },
  { unit: "201호", price: "34,400", note: "실속형" },
  { unit: "202호", price: "34,900", note: "실속형" },
  { unit: "301호", price: "35,100", note: "선호층" },
  { unit: "302호", price: "35,600", note: "선호층" },
  { unit: "401호", price: "35,500", note: "상층부" },
  { unit: "402호", price: "36,000", note: "상층부" },
];

export default function PriceTable() {
  return (
    <section className="section" id="price">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Remaining Units</span>
          <h2>잔여세대 및 분양가 안내</h2>
          <p>관심 호실은 빠르게 상담 받아보세요.</p>
        </div>

        <p className="urgency-line">현재 잔여세대 한정 분양</p>

        <div className="price-card-grid">
          {prices.map((row) => (
            <article className="price-card" key={row.unit}>
              <div>
                <span className="price-card__note">{row.note}</span>
                <h3>{row.unit}</h3>
                <p>
                  <strong>{row.price}</strong>
                  <span>만원</span>
                </p>
              </div>

              <div className="price-card__actions">
                <a className="button button--gold button--compact" href={`tel:${PHONE_NUMBER}`}>
                  이 호실 상담하기
                </a>
                <a className="button button--outline button--outline-dark button--compact" href={`tel:${PHONE_NUMBER}`}>
                  잔여 여부 문의
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="price-cta">
          <p>원하시는 호실은 빠르게 상담 받아보세요.</p>
          <a className="button button--gold" href={`tel:${PHONE_NUMBER}`}>
            📞 잔여세대 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}

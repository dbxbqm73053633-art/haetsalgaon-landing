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
          <p>호실별 면적과 분양가를 확인하시고, 관심 세대는 빠르게 상담 받아보세요.</p>
        </div>

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

              <a className="button button--gold button--compact" href={`tel:${PHONE_NUMBER}`}>
                이 호실 상담하기
              </a>
            </article>
          ))}
        </div>

        <p className="section-note">방문 전 잔여세대 확인은 필수입니다.</p>
      </div>
    </section>
  );
}

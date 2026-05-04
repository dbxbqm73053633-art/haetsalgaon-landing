type PriceRow = {
  unit: string;
  price: string;
};

const prices: PriceRow[] = [
  { unit: "101호(테라스)", price: "37,900" },
  { unit: "102호(테라스)", price: "39,400" },
  { unit: "201호", price: "34,400" },
  { unit: "202호", price: "34,900" },
  { unit: "301호", price: "35,100" },
  { unit: "302호", price: "35,600" },
  { unit: "401호", price: "35,500" },
  { unit: "402호", price: "36,000" },
];

export default function PriceTable() {
  return (
    <section className="section" id="price">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Price</span>
          <h2>세대별 분양가</h2>
          <p>잔여 호실과 상세 조건은 전화 상담으로 가장 빠르게 안내드립니다.</p>
        </div>

        <div className="price-wrap">
          <table className="price-table">
            <thead>
              <tr>
                <th scope="col">세대</th>
                <th scope="col">분양가</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row) => (
                <tr key={row.unit}>
                  <td>{row.unit}</td>
                  <td>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

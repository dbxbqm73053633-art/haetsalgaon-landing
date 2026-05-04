const PHONE_NUMBER = "01082366672";
const KAKAO_MAP_URL = "https://map.kakao.com/link/search/%ED%8C%8C%EC%A3%BC%EC%8B%9C%20%EC%83%81%EC%A7%80%EC%84%9D%EB%8F%99%20651%EB%B2%88%EC%A7%80";

export default function FinalCTA() {
  return (
    <section className="section final-cta" aria-label="분양 문의">
      <div className="container final-cta__inner">
        <span className="section-kicker">Limited Offer</span>
        <h2>잔여세대 한정 분양 중</h2>
        <p className="final-cta__phone">📞 010-8236-6672</p>
        <p>지금 바로 상담 받아보세요.</p>

        <div className="final-cta__actions">
          <a className="button button--gold" href={`tel:${PHONE_NUMBER}`}>
            📞 상담 연결
          </a>
          <a className="button button--outline" href={KAKAO_MAP_URL} target="_blank" rel="noreferrer">
            📍 위치 확인
          </a>
        </div>
      </div>
    </section>
  );
}

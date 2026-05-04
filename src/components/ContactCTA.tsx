const PHONE_NUMBER = "01082366672";
const DISPLAY_PHONE = "010-8236-6672";

export default function ContactCTA() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <div>
          <span className="section-kicker">Consulting</span>
          <h2>분양 상담</h2>
          <p>
            이재은 실장이 잔여세대, 방문 예약, 계약 절차까지 친절하게 안내드립니다.
            테라스 세대는 조기 마감될 수 있으니 방문 전 확인해주세요.
          </p>
        </div>

        <div className="contact-card">
          <dl>
            <div>
              <dt>담당자</dt>
              <dd>이재은 실장</dd>
            </div>

            <div>
              <dt>분양문의</dt>
              <dd>{DISPLAY_PHONE}</dd>
            </div>

            <div>
              <dt>상담 안내</dt>
              <dd>잔여세대 확인 및 방문 예약</dd>
            </div>
          </dl>

          <a className="button button--gold button--wide" href={`tel:${PHONE_NUMBER}`}>
            지금 바로 상담하기
          </a>

          <a className="button button--outline button--wide" href={`tel:${PHONE_NUMBER}`}>
            방문 예약 문의
          </a>
        </div>
      </div>
    </section>
  );
}

const PHONE_NUMBER = "01082366672";
const DISPLAY_PHONE = "010-8236-6672";

export default function ContactCTA() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <div>
          <span className="section-kicker">Manager</span>
          <h2>이재은 실장 직접 상담</h2>
          <p>
            잔여 세대, 테라스 가능 여부, 방문 상담 일정을 정확하게 확인해 드립니다.
            허위 정보 없이 실제 상담 가능한 조건만 안내합니다.
          </p>
        </div>

        <div className="contact-card">
          <dl>
            <div>
              <dt>담당자</dt>
              <dd>이재은 실장</dd>
            </div>

            <div>
              <dt>전화번호</dt>
              <dd>{DISPLAY_PHONE}</dd>
            </div>

            <div>
              <dt>상담 안내</dt>
              <dd>잔여 세대 우선 확인</dd>
            </div>
          </dl>

          <a className="button button--gold button--wide" href={`tel:${PHONE_NUMBER}`}>
            실시간 분양 문의
          </a>
        </div>
      </div>
    </section>
  );
}

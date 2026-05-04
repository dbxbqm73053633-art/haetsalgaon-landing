const PHONE_NUMBER = "01082366672";
const DISPLAY_PHONE = "010-8236-6672";

export default function ContactCTA() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <div>
          <span className="section-kicker">Consulting</span>
          <h2>지금 상담하기</h2>
          <p>6월 분양 예정 물량은 사전 문의 고객에게 우선 안내합니다.</p>
        </div>

        <div className="contact-card">
          <dl>
            <div>
              <dt>담당자</dt>
              <dd>이재성 실장</dd>
            </div>

            <div>
              <dt>전화번호</dt>
              <dd>{DISPLAY_PHONE}</dd>
            </div>
          </dl>

          <a className="button button--gold button--wide" href={`tel:${PHONE_NUMBER}`}>
            전화하기
          </a>
        </div>
      </div>
    </section>
  );
}

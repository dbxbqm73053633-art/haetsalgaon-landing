const PHONE_NUMBER = "01082366672";
const DISPLAY_PHONE = "010-8236-6672";
const KAKAO_TALK_URL = "https://open.kakao.com/o/sF1Nbrti";

export default function ContactCTA() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <div>
          <span className="section-kicker">Consulting</span>
          <h2>분양 상담</h2>
          <p>
            이재은 실장이 잔여세대, 방문 예약, 계약까지 직접 안내드립니다.
            방문 전 잔여세대 확인은 필수입니다.
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
              <dd>실제 방문 상담 가능</dd>
            </div>

            <div>
              <dt>진행 안내</dt>
              <dd>계약 진행까지 책임 안내</dd>
            </div>
          </dl>

          <a className="button button--gold button--wide" href={`tel:${PHONE_NUMBER}`}>
            📞 지금 상담하기
          </a>

          <a className="button button--outline button--wide" href={KAKAO_TALK_URL} target="_blank" rel="noopener noreferrer">
            💬 카카오톡 문의
          </a>
        </div>
      </div>
    </section>
  );
}

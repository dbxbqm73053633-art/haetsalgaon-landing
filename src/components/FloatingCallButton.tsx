const PHONE_NUMBER = "01082366672";

export default function FloatingCallButton() {
  return (
    <a className="floating-call" href={`tel:${PHONE_NUMBER}`} aria-label="이재은 실장에게 전화하기">
      전화 상담 바로 연결
    </a>
  );
}

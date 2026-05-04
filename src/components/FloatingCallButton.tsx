const PHONE_NUMBER = "01082366672";

export default function FloatingCallButton() {
  return (
    <a
      className="floating-call"
      href={`tel:${PHONE_NUMBER}`}
      aria-label="이재은 실장에게 전화하기"
    >
      📞 010-8236-6672 잔여세대 문의
    </a>
  );
}

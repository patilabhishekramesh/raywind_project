export function SuccessMark({ size = 80 }) {
  return (
    <svg
      className="success-mark"
      viewBox="0 0 52 52"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <circle className="success-mark__circle" cx="26" cy="26" r="23" fill="none" />
      <path className="success-mark__check" fill="none" d="M14.5 26.5 22 34 37.5 18.5" />
    </svg>
  );
}

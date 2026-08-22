import { useCallback, useRef } from "react";
import { scrollToTop } from "../hooks/useSmoothScroll.js";
import { useLenisScrollFrame } from "../hooks/useLenisScrollFrame.js";
import { IconChevronUp } from "./Icons.jsx";

const RING_R = 18;
const RING_C = 2 * Math.PI * RING_R;

export function ScrollToTop() {
  const buttonRef = useRef(null);
  const progressRef = useRef(null);
  const visibleRef = useRef(false);

  const onFrame = useCallback(({ scroll, progress }) => {
    if (progressRef.current) {
      progressRef.current.style.strokeDashoffset = `${RING_C * (1 - progress)}`;
    }

    const show = scroll > 320;
    if (show === visibleRef.current || !buttonRef.current) return;

    visibleRef.current = show;
    buttonRef.current.classList.toggle("is-visible", show);
  }, []);

  useLenisScrollFrame(onFrame);

  return (
    <button
      ref={buttonRef}
      type="button"
      className="scroll-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg className="scroll-top__ring" viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="22" cy="22" r={RING_R} className="scroll-top__track" />
        <circle
          ref={progressRef}
          cx="22"
          cy="22"
          r={RING_R}
          className="scroll-top__progress"
          strokeDasharray={RING_C}
          strokeDashoffset={RING_C}
        />
      </svg>
      <IconChevronUp size={18} />
    </button>
  );
}

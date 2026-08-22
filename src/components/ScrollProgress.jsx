import { useCallback, useRef } from "react";
import { useLenisScrollFrame } from "../hooks/useLenisScrollFrame.js";

export function ScrollProgress() {
  const barRef = useRef(null);

  const onFrame = useCallback(({ progress }) => {
    if (barRef.current) {
      barRef.current.style.transform = `scaleX(${progress})`;
    }
  }, []);

  useLenisScrollFrame(onFrame);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}

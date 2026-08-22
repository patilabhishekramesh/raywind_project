import { useEffect } from "react";
import { getLenis } from "./useSmoothScroll.js";

function readScroll() {
  const lenis = getLenis();
  if (lenis) {
    return { scroll: lenis.scroll, progress: lenis.progress };
  }

  const limit = document.documentElement.scrollHeight - window.innerHeight;
  const scroll = window.scrollY;
  return {
    scroll,
    progress: limit > 0 ? scroll / limit : 0,
  };
}

export function useLenisScrollFrame(onFrame) {
  useEffect(() => {
    let frame = 0;
    let detachLenis = () => {};
    let usingWindow = false;
    let waitId = 0;

    const tick = () => {
      onFrame(readScroll());
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(tick);
    };

    const bindLenis = () => {
      const lenis = getLenis();
      if (!lenis) return false;

      lenis.on("scroll", onScroll);
      detachLenis = () => lenis.off("scroll", onScroll);

      if (usingWindow) {
        window.removeEventListener("scroll", onScroll);
        usingWindow = false;
      }

      if (waitId) {
        window.clearInterval(waitId);
        waitId = 0;
      }

      onScroll();
      return true;
    };

    if (!bindLenis()) {
      usingWindow = true;
      window.addEventListener("scroll", onScroll, { passive: true });
      waitId = window.setInterval(bindLenis, 40);
      onScroll();
    }

    return () => {
      if (waitId) window.clearInterval(waitId);
      if (usingWindow) window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      detachLenis();
    };
  }, [onFrame]);
}

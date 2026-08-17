import { useEffect } from "react";
import Lenis from "lenis";

let instance = null;

export function setScrollLocked(locked) {
  if (!instance) return;
  if (locked) instance.stop();
  else instance.start();
}

export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.6,
    });
    instance = lenis;

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    const onAnchorClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;

      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      const header = document.querySelector(".site-header");
      const offset = header ? header.offsetHeight + 12 : 0;
      lenis.scrollTo(target, { offset: -offset, duration: 1.3 });
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
      instance = null;
    };
  }, [enabled]);
}

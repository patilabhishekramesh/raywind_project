import { useEffect } from "react";
import Lenis from "lenis";

let instance = null;

export function setScrollLocked(locked) {
  if (!instance) return;
  if (locked) instance.stop();
  else instance.start();
}

export function getLenis() {
  return instance;
}

export function scrollToTop() {
  if (instance) {
    instance.scrollTo(0, { duration: 1.05, easing: (t) => 1 - (1 - t) ** 3 });
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.1,
      allowNestedScroll: true,
      autoRaf: true,
    });
    instance = lenis;

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
      lenis.scrollTo(target, {
        offset: -offset,
        duration: 1.05,
        easing: (t) => 1 - (1 - t) ** 3,
      });
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
      instance = null;
    };
  }, [enabled]);
}

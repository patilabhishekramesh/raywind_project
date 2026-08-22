import { useEffect, useState } from "react";
import { getLenis } from "./useSmoothScroll.js";

export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = false;
    let detach = () => {};

    const update = () => {
      const lenis = getLenis();
      const y = lenis ? lenis.scroll : window.scrollY;
      const next = y > offset;
      if (next === last) return;
      last = next;
      setScrolled(next);
    };

    const bind = () => {
      const lenis = getLenis();
      if (!lenis) return false;
      lenis.on("scroll", update);
      detach = () => lenis.off("scroll", update);
      update();
      return true;
    };

    if (!bind()) {
      const wait = window.setInterval(() => {
        if (bind()) window.clearInterval(wait);
      }, 40);
      window.addEventListener("scroll", update, { passive: true });
      update();

      return () => {
        window.clearInterval(wait);
        window.removeEventListener("scroll", update);
        detach();
      };
    }

    return detach;
  }, [offset]);

  return scrolled;
}

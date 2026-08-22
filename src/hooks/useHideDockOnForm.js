import { useEffect } from "react";

function isFormField(el) {
  if (!el || el === document.body || el === document.documentElement) return false;
  const tag = el.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
    return el.type !== "hidden" && el.type !== "button" && el.type !== "submit";
  }
  if (el.closest?.(".recaptcha, .g-recaptcha, .contact-band__form, .contact-band__main, .select, .select__menu")) return true;
  return false;
}

export function useHideDockOnForm(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;
    const sync = () => {
      const focused = isFormField(document.activeElement);
      const keyboard =
        Boolean(window.visualViewport) &&
        window.innerHeight - window.visualViewport.height > 140;
      document.body.classList.toggle("is-filling-form", focused || keyboard);
    };

    const onBlur = () => window.requestAnimationFrame(sync);

    document.addEventListener("focusin", sync);
    document.addEventListener("focusout", onBlur);
    window.visualViewport?.addEventListener("resize", sync);

    return () => {
      document.removeEventListener("focusin", sync);
      document.removeEventListener("focusout", onBlur);
      window.visualViewport?.removeEventListener("resize", sync);
      document.body.classList.remove("is-filling-form");
    };
  }, [enabled]);
}

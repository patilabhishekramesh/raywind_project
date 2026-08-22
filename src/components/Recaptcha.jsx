import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const SCRIPT_ID = "google-recaptcha-v2";

let loadPromise;

function loadRecaptcha() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("reCAPTCHA is only available in the browser."));
  }
  if (window.grecaptcha?.render) {
    return Promise.resolve();
  }
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    const finish = () => {
      if (window.grecaptcha?.ready) {
        window.grecaptcha.ready(resolve);
        return;
      }
      resolve();
    };

    if (document.getElementById(SCRIPT_ID)) {
      const wait = () => (window.grecaptcha?.render ? finish() : window.setTimeout(wait, 40));
      wait();
      return;
    }

    window.__onRecaptchaReady = finish;
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://www.google.com/recaptcha/api.js?onload=__onRecaptchaReady&render=explicit";
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      loadPromise = null;
      reject(new Error("Could not load reCAPTCHA. Check your connection and try again."));
    };
    document.head.appendChild(script);
  });

  return loadPromise;
}

export const Recaptcha = forwardRef(function Recaptcha({ onChange, compact = false }, ref) {
  const hostRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useImperativeHandle(ref, () => ({
    getToken() {
      if (widgetIdRef.current == null || !window.grecaptcha?.getResponse) return "";
      return window.grecaptcha.getResponse(widgetIdRef.current);
    },
    reset() {
      if (widgetIdRef.current == null || !window.grecaptcha?.reset) return;
      window.grecaptcha.reset(widgetIdRef.current);
      onChangeRef.current?.("");
    },
  }));

  useEffect(() => {
    const host = hostRef.current;
    let cancelled = false;

    loadRecaptcha()
      .then(() => {
        if (cancelled || !host || !window.grecaptcha?.render) return;
        host.replaceChildren();
        const widgetId = window.grecaptcha.render(host, {
          sitekey: SITE_KEY,
          theme: "light",
          callback: (token) => onChangeRef.current?.(token),
          "expired-callback": () => onChangeRef.current?.(""),
          "error-callback": () => onChangeRef.current?.(""),
        });
        widgetIdRef.current = widgetId;
      })
      .catch((err) => {
        console.error(err);
        onChangeRef.current?.("");
      });

    return () => {
      cancelled = true;
      widgetIdRef.current = null;
      if (host) host.replaceChildren();
    };
  }, []);

  if (!SITE_KEY) {
    return <p className="recaptcha__missing">reCAPTCHA is not configured.</p>;
  }

  return (
    <div className={`recaptcha${compact ? " recaptcha--compact" : ""}`}>
      <div className="recaptcha__widget" ref={hostRef} />
      {!compact ? (
        <p className="recaptcha__legal">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      ) : null}
    </div>
  );
});

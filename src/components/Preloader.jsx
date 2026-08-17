import { useEffect, useRef, useState } from "react";
import { Lottie } from "lottie-react";
import { SITE } from "../config/site.js";
import { asset } from "../utils/asset.js";

const easeOutCubic = (t) => 1 - (1 - t) ** 3;

export function Preloader({ onComplete }) {
  const [anim, setAnim] = useState(null);
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);
  const completeRef = useRef(onComplete);
  completeRef.current = onComplete;

  useEffect(() => {
    document.body.classList.add("is-loading");

    let cancelled = false;
    let frame = 0;
    let exitTimer = 0;
    let doneTimer = 0;

    fetch(asset("windmill.json"))
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setAnim(data);
      })
      .catch(() => {});

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 600 : 2400;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setProgress(Math.round(easeOutCubic(t) * 100));

      if (t < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }

      exitTimer = setTimeout(() => setExit(true), 350);
      doneTimer = setTimeout(() => {
        document.body.classList.remove("is-loading");
        completeRef.current();
      }, 1000);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.classList.remove("is-loading");
    };
  }, []);

  return (
    <div
      className={`preloader${exit ? " preloader--exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Loading ${progress} percent`}
    >
      <div className="preloader__content">
        <div className="preloader__mark">
          {anim ? (
            <Lottie animationData={anim} loop className="preloader__lottie" />
          ) : (
            <div className="preloader__fallback" aria-hidden="true" />
          )}
        </div>

        <img
          src={asset(SITE.logo)}
          alt={SITE.name}
          className="preloader__logo"
          width={260}
          height={78}
        />

        <div className="preloader__progress">
          <div className="preloader__track" aria-hidden="true">
            <span style={{ transform: `scaleX(${progress / 100})` }} />
          </div>
          <div className="preloader__meta" aria-hidden="true">
            <span className="preloader__label">Loading</span>
            <span className="preloader__pct">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

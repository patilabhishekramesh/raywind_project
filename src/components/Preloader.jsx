import { useEffect, useRef, useState } from "react";
import { SITE } from "../config/site.js";
import { asset } from "../utils/asset.js";

const easeOutCubic = (t) => 1 - (1 - t) ** 3;

// The bar creeps to this point on its own, then waits for the real load.
const HOLD_AT = 92;
const CREEP_MS = 2000;
const FINISH_MS = 500;

export function Preloader({ onComplete }) {
  const [artLoaded, setArtLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  const completeRef = useRef(onComplete);
  completeRef.current = onComplete;

  const readyRef = useRef(false);
  readyRef.current = artLoaded || failed;

  useEffect(() => {
    document.body.classList.add("is-loading");

    let frame = 0;
    let exitTimer = 0;
    let doneTimer = 0;
    let releasedAt = null;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const creep = reduce ? 500 : CREEP_MS;
    const finish = reduce ? 200 : FINISH_MS;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const creepValue = easeOutCubic(Math.min(elapsed / creep, 1)) * HOLD_AT;

      // Only run the last stretch once the artwork is actually on screen.
      if (readyRef.current && releasedAt === null && creepValue >= HOLD_AT - 0.5) {
        releasedAt = now;
      }

      if (releasedAt === null) {
        setProgress(Math.round(creepValue));
        frame = requestAnimationFrame(tick);
        return;
      }

      const tail = Math.min((now - releasedAt) / finish, 1);
      setProgress(Math.round(HOLD_AT + (100 - HOLD_AT) * easeOutCubic(tail)));

      if (tail < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }

      exitTimer = setTimeout(() => setExit(true), 320);
      doneTimer = setTimeout(() => {
        document.body.classList.remove("is-loading");
        completeRef.current();
      }, 1000);
    };

    frame = requestAnimationFrame(tick);

    // Never trap the visitor if the artwork stalls on a slow connection.
    const bailout = setTimeout(() => setFailed(true), 6000);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(bailout);
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
        <div className={`preloader__art${artLoaded ? " is-loaded" : ""}`}>
          <img
            src={asset("preloader.svg")}
            alt=""
            aria-hidden="true"
            className="preloader__svg"
            onLoad={() => setArtLoaded(true)}
            onError={() => setFailed(true)}
          />
          {!artLoaded && !failed && <span className="preloader__spinner" aria-hidden="true" />}
          {failed && <span className="preloader__spinner" aria-hidden="true" />}
        </div>

        <div className="preloader__logo-wrap">
          <img
            src={asset(SITE.logo)}
            alt={SITE.name}
            className="preloader__logo"
            width={260}
            height={78}
          />
        </div>

        <div className="preloader__progress">
          <div className="preloader__track" aria-hidden="true">
            <span
              className="preloader__fill"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>
          <div className="preloader__meta" aria-hidden="true">
            <span className="preloader__label">
              {progress < 100 ? "Loading" : "Ready"}
            </span>
            <span className="preloader__pct">
              <span className="preloader__num">{progress}</span>
              <span className="preloader__sym">%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

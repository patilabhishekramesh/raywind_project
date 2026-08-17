import { useState } from "react";
import { SOLAR_TYPES } from "../data/content.js";
import { openWhatsApp } from "../utils/whatsapp.js";
import { Reveal } from "./Reveal.jsx";
import { IconArrow } from "./Icons.jsx";
import { asset } from "../utils/asset.js";

export function SolarSolutions() {
  const [activeId, setActiveId] = useState(SOLAR_TYPES[0].id);
  const active = SOLAR_TYPES.find((t) => t.id === activeId) ?? SOLAR_TYPES[0];

  return (
    <section id="solutions" className="section solutions">
      <div className="wrap">
        <Reveal className="section__head">
          <p className="kicker">Solutions</p>
          <h2>Find the right system</h2>
          <p className="lede">
            On-grid, off-grid or hybrid — each serves a different need. We help you choose and size
            it correctly.
          </p>
        </Reveal>

        <Reveal className="sol">
          <div className="sol__picks" role="tablist" aria-label="Solar system types">
            {SOLAR_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                role="tab"
                aria-selected={type.id === activeId}
                className={type.id === activeId ? "is-active" : ""}
                onClick={() => setActiveId(type.id)}
              >
                {type.title}
              </button>
            ))}
          </div>

          <div className="sol__panel">
            <div className="sol__image">
              <img
                src={asset(active.image)}
                alt={active.imageAlt}
                width={1100}
                height={780}
                loading="lazy"
              />
            </div>
            <div className="sol__info">
              <h3>{active.title}</h3>
              <p>{active.summary}</p>
              <div className="sol__cols">
                <div>
                  <h4>Best for</h4>
                  <ul>
                    {active.bestFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Benefits</h4>
                  <ul>
                    {active.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => openWhatsApp(active.serviceTitle)}
              >
                Enquire about {active.title}
                <IconArrow />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useState } from "react";
import { SOLAR_TYPES } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";
import { IconArrow } from "./Icons.jsx";
import { asset } from "../utils/asset.js";

export function SolarSolutions() {
  const [activeId, setActiveId] = useState(SOLAR_TYPES[0].id);
  const active = SOLAR_TYPES.find((t) => t.id === activeId) ?? SOLAR_TYPES[0];

  return (
    <section id="solutions" className="section solutions">
      <div className="wrap">
        <Reveal className="section__head solutions__head">
          <p className="kicker">Solutions</p>
          <h2>Find the right system</h2>
          <p className="lede">
            On-grid, off-grid or hybrid — each serves a different need. We help you choose and size
            it correctly.
          </p>
        </Reveal>

        <Reveal className="sol-layout" delay={60}>
          <div className="sol-nav" role="tablist" aria-label="Solar system types">
            {SOLAR_TYPES.map((type, index) => {
              const isActive = type.id === activeId;
              return (
                <button
                  key={type.id}
                  id={`sol-tab-${type.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`sol-nav__item${isActive ? " is-active" : ""}`}
                  onClick={() => setActiveId(type.id)}
                >
                  <span className="sol-nav__num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="sol-nav__text">
                    <strong>{type.title}</strong>
                    <small>{type.tagline}</small>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="sol-stage"
            role="tabpanel"
            aria-labelledby={`sol-tab-${active.id}`}
            id={`sol-panel-${active.id}`}
          >
            <div className="sol-stage__visual" key={active.id}>
              <img
                src={asset(active.image)}
                alt={active.imageAlt}
                width={1100}
                height={780}
                loading="lazy"
              />
            </div>

            <div className="sol-stage__body">
              <h3>{active.title}</h3>
              <p className="sol-stage__summary">{active.summary}</p>

              <div className="sol-stage__facts">
                <div className="sol-fact">
                  <h4>Best for</h4>
                  <ul>
                    {active.bestFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="sol-fact">
                  <h4>Benefits</h4>
                  <ul>
                    {active.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <a className="card-link sol-stage__link" href="#contact">
                Enquire about {active.title}
                <IconArrow size={15} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

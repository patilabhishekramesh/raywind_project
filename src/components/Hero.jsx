import { SITE } from "../config/site.js";
import { IconArrow } from "./Icons.jsx";
import { asset } from "../utils/asset.js";

const HERO_STATS = [
  // { value: "100+", label: "Projects delivered" },
  // { value: "\u20B978,000", label: "Max home subsidy" },
  // { value: SITE.city, label: "Based in" },
];

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <a className="hero__badge" href="#subsidy">
            <span>New</span>
            Government subsidy up to &#8377;78,000
            <IconArrow size={14} />
          </a>

          <p className="hero__kicker">{SITE.taglineSub}</p>

          <h1>
            Reliable solar for{" "}
            <span className="hero__accent">homes &amp; businesses</span>
          </h1>

          <p className="hero__lede">
            Professional solar, wind and electrical solutions in {SITE.city} — from site survey to
            installation, subsidy paperwork and long-term care.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href="#contact">
              Get a free quote
              <IconArrow />
            </a>
            <a className="btn btn--secondary btn--lg" href="#packages">
              See 2, 3 &amp; 5 kW prices
            </a>
          </div>

          <ul className="hero__stats">
            {HERO_STATS.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__frame">
            <img
              src={asset("images/hero.jpg")}
              alt="Solar panels and wind turbine renewable energy system"
              width={900}
              height={1100}
              fetchPriority="high"
            />
          </div>

          {/* <div className="hero__float-card">
            <p className="hero__float-label">PM Surya Ghar subsidy</p>
            <p className="hero__float-value">Up to &#8377;78,000</p>
            <p className="hero__float-note">We handle the paperwork with your quote.</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

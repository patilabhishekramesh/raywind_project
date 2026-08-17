import { SITE } from "../config/site.js";
import { IconArrow, IconWhatsApp } from "./Icons.jsx";
import { openWhatsApp } from "../utils/whatsapp.js";
import { asset } from "../utils/asset.js";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">{SITE.taglineSub}</p>
          <h1>
            Reliable solar for{" "}
            <span className="hero__accent">homes &amp; businesses</span>
          </h1>
          <p className="hero__lede">
            Professional solar, wind and electrical solutions in {SITE.city} — from site survey to
            installation and long-term care.
          </p>
          <div className="hero__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => openWhatsApp("a free consultation")}
            >
              Get started
              <IconArrow />
            </button>
            <a className="btn btn--secondary" href="#services">
              View services
            </a>
          </div>
          <button
            type="button"
            className="hero__wa"
            onClick={() => openWhatsApp("solar, wind or electrical services")}
          >
            <IconWhatsApp />
            Chat on WhatsApp
          </button>
        </div>

        <div className="hero__visual">
          <img
            src={asset("images/hero.jpg")}
            alt="Solar panels and wind turbine renewable energy system"
            width={900}
            height={1100}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

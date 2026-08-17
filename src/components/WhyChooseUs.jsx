import { WHY_US } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";
import { BadgeIcon, IconArrow } from "./Icons.jsx";
import { openWhatsApp } from "../utils/whatsapp.js";
import { asset } from "../utils/asset.js";

const HIGHLIGHTS = WHY_US.slice(0, 4);

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section section--soft why">
      <div className="wrap">
        <Reveal className="section__head section__head--center">
          <p className="kicker">Why us</p>
          <h2>Built on trust and quality</h2>
          <p className="lede">
            Reliable equipment, skilled installation, subsidy paperwork handled, and support you
            can actually reach.
          </p>
        </Reveal>

        <div className="card-grid card-grid--4 why__cards">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal className="card-cell" key={item.title} delay={i * 50}>
              <article className="wcard">
                <span className="wcard__icon" aria-hidden="true">
                  <BadgeIcon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="wcard__tag">{item.highlight}</span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="why__banner" delay={80}>
          <img
            src={asset("images/panels.jpg")}
            alt="Solar panel array in open landscape"
            width={1200}
            height={800}
            loading="lazy"
          />
          <div className="why__banner-body">
            <h3>Not sure what your roof can take?</h3>
            <p>Send a photo of the roof and a recent bill — we will size it and quote properly.</p>
            <button
              type="button"
              className="btn btn--white"
              onClick={() => openWhatsApp("a free solar consultation")}
            >
              Get a free assessment
              <IconArrow />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

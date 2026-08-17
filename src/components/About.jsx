import { SITE } from "../config/site.js";
import { STATS } from "../data/content.js";
import { openWhatsApp } from "../utils/whatsapp.js";
import { Reveal } from "./Reveal.jsx";
import { IconArrow } from "./Icons.jsx";
import { useCountUp } from "../hooks/useCountUp.js";
import { useInView } from "../hooks/useInView.js";
import { asset } from "../utils/asset.js";

function Counter({ value, suffix, label }) {
  const [ref, visible] = useInView();
  const count = useCountUp(value, visible);

  return (
    <div className="about__counter" ref={ref}>
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap about__grid">
        <Reveal className="about__media">
          <img
            src={asset("images/engineer.jpg")}
            alt="Solar technician installing panels on a rooftop"
            width={1400}
            height={933}
            loading="lazy"
          />
          <div className="about__badge">
            <Counter value={100} suffix="+" label="Projects in Raigad" />
          </div>
        </Reveal>

        <Reveal className="about__copy" delay={100}>
          <p className="kicker">About us</p>
          <h2>Clean energy, built for Indian conditions</h2>
          <p className="lede">
            Raywind Powertech brings solar, wind and electrical expertise to {SITE.city} — helping
            homes, shops and industry move to reliable, cost-effective power.
          </p>
          <p className="about__text">
            From site assessment and professional installation to net-meter support and long-term
            maintenance, one team handles the full lifecycle of your system.
          </p>
          <div className="about__counters">
            <Counter value={STATS[1].value} suffix="+" label={STATS[1].label} />
            <Counter value={STATS[0].value} suffix="+" label="Installations" />
          </div>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => openWhatsApp("speaking with a technical expert")}
          >
            Talk to an expert
            <IconArrow />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

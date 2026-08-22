import { SITE } from "../config/site.js";
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
        <Reveal className="about__media reveal--scale">
          <img
            src={asset("images/engineer.jpg")}
            alt="Solar technician installing panels on a rooftop"
            width={1400}
            height={933}
            loading="lazy"
          />
          <div className="about__badge">
            <Counter value={50} suffix="+" label="Projects in Raigad" />
          </div>
        </Reveal>

        <Reveal className="about__copy" delay={80}>
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
          <a className="btn btn--primary" href="#contact">
            Talk to an expert
            <IconArrow />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

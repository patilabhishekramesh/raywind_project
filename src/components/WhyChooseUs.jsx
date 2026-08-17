import { WHY_US } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";
import { asset } from "../utils/asset.js";

const HIGHLIGHTS = WHY_US.slice(0, 3);

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section section--soft why">
      <div className="wrap">
        <Reveal className="section__head section__head--center">
          <p className="kicker">Why us</p>
          <h2>Built on trust and quality</h2>
          <p className="lede">
            We focus on what matters — reliable equipment, skilled installation and support you can
            reach when you need it.
          </p>
        </Reveal>

        <div className="card-grid card-grid--3 why__cards">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal className="card-cell" key={item.title} delay={i * 50}>
              <article className="wcard">
                <span className="wcard__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="why__visual" delay={80}>
          <img
            src={asset("images/panels.jpg")}
            alt="Solar panel array in open landscape"
            width={1200}
            height={800}
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}

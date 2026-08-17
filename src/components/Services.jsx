import { useState } from "react";
import { FEATURED_SERVICES, SERVICE_CATEGORIES, SERVICES } from "../data/content.js";
import { ServiceCard } from "./ServiceCard.jsx";
import { Reveal } from "./Reveal.jsx";
import { openWhatsApp } from "../utils/whatsapp.js";
import { FeaturedIcon, IconArrow } from "./Icons.jsx";

export function Services() {
  const [category, setCategory] = useState("solar");
  const items = SERVICES.filter((s) => s.category === category);

  return (
    <section id="services" className="section section--soft services">
      <div className="wrap">
        <Reveal className="section__head section__head--center">
          <p className="kicker">Services</p>
          <h2>Everything you need for clean power</h2>
          <p className="lede">
            Solar, wind and electrical solutions — designed, installed and maintained by one team.
          </p>
        </Reveal>

        <div className="card-grid card-grid--4 featured">
          {FEATURED_SERVICES.map((item, i) => (
            <Reveal className="card-cell" key={item.title} delay={i * 60}>
              <article className="fcard">
                <div className="fcard__icon">
                  <FeaturedIcon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button type="button" className="fcard__link" onClick={() => openWhatsApp(item.service)}>
                  Enquire
                  <IconArrow />
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="services__more" delay={100}>
          <h3 className="services__subtitle">Browse by category</h3>
          <div className="tabs" role="tablist" aria-label="Service categories">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={category === cat.id}
                className={category === cat.id ? "is-active" : ""}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="card-grid card-grid--3">
            {items.map((service, i) => (
              <Reveal className="card-cell" key={service.id} delay={i * 35}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

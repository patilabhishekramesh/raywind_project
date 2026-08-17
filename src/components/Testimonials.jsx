import { useEffect, useState } from "react";
import { TESTIMONIALS } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";
import { IconQuote, IconStar, IconWhatsApp } from "./Icons.jsx";
import { openWhatsApp } from "../utils/whatsapp.js";

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const item = TESTIMONIALS[index];

  return (
    <section className="section testimonials" aria-labelledby="quotes-title">
      <div className="wrap testimonials__grid">
        <Reveal className="testimonials__intro">
          <p className="kicker">Testimonials</p>
          <h2 id="quotes-title">Trusted across Alibag</h2>
          <p className="lede">Real feedback from homeowners and businesses we have worked with.</p>

          <div className="testimonials__rating">
            <span className="testimonials__score">4.8</span>
            <span className="testimonials__stars" aria-label="4.8 out of 5">
              {Array.from({ length: 5 }, (_, s) => (
                <IconStar key={s} filled={s < 5} size={15} />
              ))}
            </span>
            <span className="testimonials__count">from {TESTIMONIALS.length * 9} reviews</span>
          </div>

          <button
            type="button"
            className="btn btn--secondary btn--sm"
            onClick={() => openWhatsApp("an enquiry")}
          >
            <IconWhatsApp />
            Talk to a customer reference
          </button>
        </Reveal>

        <Reveal className="testimonials__slider" delay={80}>
          <blockquote className="testimonial-card" key={item.name}>
            <span className="testimonial-card__mark" aria-hidden="true">
              <IconQuote size={26} />
            </span>
            <div className="testimonial-card__stars" aria-label={`${item.rating} out of 5`}>
              {Array.from({ length: 5 }, (_, s) => (
                <IconStar key={s} filled={s < item.rating} />
              ))}
            </div>
            <p>{item.quote}</p>
            <footer>
              <span className="testimonial-card__avatar" aria-hidden="true">
                {initials(item.name)}
              </span>
              <span>
                <strong>{item.name}</strong>
                <span className="testimonial-card__role">
                  {item.role} · {item.location}
                </span>
              </span>
            </footer>
          </blockquote>

          <div className="testimonials__dots" role="tablist" aria-label="Testimonials">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Review from ${t.name}`}
                className={i === index ? "is-active" : ""}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

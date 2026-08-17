import { useState } from "react";
import { FAQS } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";
import { IconMinus, IconPlus } from "./Icons.jsx";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section--soft faq" aria-labelledby="faq-title">
      <div className="wrap faq__layout">
        <Reveal className="section__head">
          <p className="kicker">FAQ</p>
          <h2 id="faq-title">Common questions</h2>
          <p className="lede">
            Straight answers about solar, wind and electrical work in Alibag. For site-specific
            questions, WhatsApp is fastest.
          </p>
        </Reveal>

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`faq__item${isOpen ? " is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {item.q}
                    <span aria-hidden="true">{isOpen ? <IconMinus size={14} /> : <IconPlus size={14} />}</span>
                  </button>
                </h3>
                <div className="faq__panel" aria-hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

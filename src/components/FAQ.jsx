import { useState } from "react";
import { FAQS } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";
import { IconMinus, IconPlus } from "./Icons.jsx";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section--soft faq" aria-labelledby="faq-title">
      <div className="wrap">
        <Reveal className="faq__top">
          <div>
            <p className="kicker">FAQ</p>
            <h2 id="faq-title">Common questions</h2>
            <p className="lede">
              Straight answers about subsidy, solar, wind and electrical work in Alibag.
            </p>
          </div>
          <div className="faq__aside">
            <h3>Still have a question?</h3>
            <p>Send a bill and roof photo — we usually reply the same day.</p>
            <a className="btn btn--primary btn--sm" href="#contact">
              Send an enquiry
            </a>
          </div>
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
                    <span aria-hidden="true">{isOpen ? <IconMinus size={16} /> : <IconPlus size={16} />}</span>
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

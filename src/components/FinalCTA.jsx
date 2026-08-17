import { openWhatsApp } from "../utils/whatsapp.js";
import { Reveal } from "./Reveal.jsx";

export function FinalCTA() {
  return (
    <section className="cta-banner">
      <div className="wrap">
        <Reveal className="cta-banner__inner reveal--fade">
          <p className="kicker">Get started</p>
          <h2>
            Ready to switch to <span>clean energy?</span>
          </h2>
          <button
            type="button"
            className="btn btn--white"
            onClick={() => openWhatsApp("a free consultation")}
          >
            Book a free consultation
          </button>
        </Reveal>
      </div>
    </section>
  );
}

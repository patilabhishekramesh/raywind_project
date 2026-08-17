import { openWhatsApp } from "../utils/whatsapp.js";
import { IconArrow, IconWhatsApp } from "./Icons.jsx";

export function SavingsCTA() {
  return (
    <section className="band">
      <div className="wrap band__inner">
        <div>
          <h2>Turn Sunlight Into Savings</h2>
          <p>See what a right-sized solar system can save at your site in Alibag.</p>
        </div>
        <div className="band__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => openWhatsApp("a free solar consultation")}
          >
            Free Solar Consultation
          </button>
          <button
            type="button"
            className="btn btn--secondary btn--on-dark"
            onClick={() => openWhatsApp("solar energy savings for my site")}
          >
            <IconWhatsApp />
            WhatsApp
            <IconArrow />
          </button>
        </div>
      </div>
    </section>
  );
}

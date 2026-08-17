import { openWhatsApp } from "../utils/whatsapp.js";
import { IconArrow } from "./Icons.jsx";
import { asset } from "../utils/asset.js";

export function ServiceCard({ service }) {
  return (
    <article className="scard">
      <div className="scard__media">
        <img src={asset(service.image)} alt={service.imageAlt} width={800} height={560} loading="lazy" />
      </div>
      <div className="scard__body">
        <h3>{service.title}</h3>
        <p className="scard__desc">{service.description}</p>
        <p className="scard__benefit">{service.benefit}</p>
        <button
          type="button"
          className="scard__cta"
          onClick={() => openWhatsApp(service.title)}
        >
          Enquire Now
          <IconArrow />
        </button>
      </div>
    </article>
  );
}

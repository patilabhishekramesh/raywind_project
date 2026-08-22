import { IconArrow } from "./Icons.jsx";
import { asset } from "../utils/asset.js";

export function ServiceCard({ service }) {
  return (
    <article className="scard">
      <div className="scard__media">
        <img src={asset(service.image)} alt={service.imageAlt} width={800} height={560} loading="lazy" />
        <span className="scard__tag">{service.benefit}</span>
      </div>
      <div className="scard__body">
        <h3>{service.title}</h3>
        <p className="scard__desc">{service.description}</p>
        <a className="card-link" href="#contact">
          Get a quote for this
          <IconArrow size={15} />
        </a>
      </div>
    </article>
  );
}

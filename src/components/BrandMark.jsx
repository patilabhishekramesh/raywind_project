import { SITE } from "../config/site.js";
import { asset } from "../utils/asset.js";

export function BrandMark({ light = false }) {
  return (
    <a href="#home" className={`brand${light ? " brand--light" : ""}`}>
      <img src={asset(SITE.logo)} alt={SITE.name} className="brand__logo" width={200} height={58} />
    </a>
  );
}

import { SITE } from "../config/site.js";
import { IconPhone, IconWhatsApp } from "./Icons.jsx";
import { openWhatsApp } from "../utils/whatsapp.js";

export function MobileDock() {
  return (
    <div className="dock">
      <button type="button" onClick={() => openWhatsApp("a renewable energy consultation")}>
        <IconWhatsApp />
        WhatsApp
      </button>
      <a href={SITE.phoneHref}>
        <IconPhone />
        Call Now
      </a>
    </div>
  );
}

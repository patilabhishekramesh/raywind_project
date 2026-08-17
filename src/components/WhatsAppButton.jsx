import { IconWhatsApp } from "./Icons.jsx";
import { openWhatsApp } from "../utils/whatsapp.js";

export function WhatsAppButton() {
  return (
    <button
      type="button"
      className="wa-float"
      onClick={() => openWhatsApp("a renewable energy consultation")}
      aria-label="Enquire on WhatsApp"
    >
      <IconWhatsApp size={26} />
    </button>
  );
}

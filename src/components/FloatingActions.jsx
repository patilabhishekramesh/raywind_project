import { IconWhatsApp } from "./Icons.jsx";
import { openWhatsApp } from "../utils/whatsapp.js";
import { ScrollToTop } from "./ScrollToTop.jsx";

export function FloatingActions() {
  return (
    <div className="float-stack" aria-label="Quick actions">
      <button
        type="button"
        className="float-stack__wa"
        onClick={() => openWhatsApp("a renewable energy consultation")}
        aria-label="Enquire on WhatsApp"
      >
        <IconWhatsApp size={26} />
      </button>
      <ScrollToTop />
    </div>
  );
}

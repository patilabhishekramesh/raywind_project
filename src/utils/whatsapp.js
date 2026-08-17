import { SITE } from "../config/site.js";

const SERVICE_MESSAGES = {
  "On-Grid Solar":
    "Hello, I am interested in your On-Grid Solar service. I would like to know more about the installation process, pricing and available options.",
  "Off-Grid Solar":
    "Hello, I am interested in your Off-Grid Solar service. Please share details on battery backup, pricing and site requirements.",
  "Hybrid Solar":
    "Hello, I am interested in your Hybrid Solar service. I would like to understand solar + grid + battery options, pricing and installation.",
  "Windmill Solutions":
    "Hello, I am interested in your Windmill/Wind Energy services. Please share more details, pricing and project requirements.",
  "Wind Energy Installation":
    "Hello, I am interested in your Windmill/Wind Energy services. Please share more details, pricing and project requirements.",
  "Wind Energy Maintenance":
    "Hello, I am interested in your Windmill/Wind Energy services. Please share more details, pricing and project requirements.",
  "Electrical Maintenance":
    "Hello, I am interested in your Electrical Maintenance service. Please contact me with more details.",
  "a free consultation":
    "Hello, I would like a free consultation for renewable energy solutions. Please share the next steps.",
  "a free solar consultation":
    "Hello, I would like a free solar consultation. Please share how we can estimate savings, system size and next steps.",
  "speaking with a technical expert":
    "Hello, I would like to talk to a technical expert about a solar, wind or electrical project.",
  "a renewable energy consultation":
    "Hello, I am interested in your solar, wind and electrical services. Please share more details.",
  "an enquiry":
    "Hello, I would like to enquire about your renewable energy and electrical services.",
  "solar, wind or electrical services":
    "Hello, I am interested in your solar, wind and electrical services. Please share more details.",
  "renewable energy services":
    "Hello, I am interested in your renewable energy services. Please share more details.",
  "solar energy savings for my site":
    "Hello, I would like to understand solar energy savings for my site. Please share a consultation slot.",
};

export function generateWhatsAppMessage(serviceName, extra = "") {
  const base =
    SERVICE_MESSAGES[serviceName] ||
    `Hello, I am interested in your ${serviceName} service. Please share more details, pricing and available options.`;
  return extra ? `${base}\n\n${extra}` : base;
}

export function getWhatsAppUrl(serviceName, extra) {
  const message = generateWhatsAppMessage(serviceName, extra);
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(serviceName, extra) {
  window.open(getWhatsAppUrl(serviceName, extra), "_blank", "noopener,noreferrer");
}

export function openWhatsAppMessage(message) {
  const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

import { BrandMark } from "./BrandMark.jsx";
import { NAV_LINKS, SITE } from "../config/site.js";
import { openWhatsApp } from "../utils/whatsapp.js";

const FOOTER_SERVICES = [
  { label: "On-Grid Solar", service: "On-Grid Solar" },
  { label: "Off-Grid Solar", service: "Off-Grid Solar" },
  { label: "Wind Energy", service: "Windmill Solutions" },
  { label: "Solar Maintenance", service: "Solar Maintenance" },
  { label: "Electrical Services", service: "Electrical Installation" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <BrandMark light />
          <p>Empowering your world with solar, wind and electrical innovation across Alibag.</p>
        </div>

        <div>
          <h2>Quick Links</h2>
          <ul>
            {NAV_LINKS.filter((l) =>
              ["#home", "#about", "#services", "#projects", "#contact"].includes(l.href)
            ).map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Services</h2>
          <ul>
            {FOOTER_SERVICES.map((item) => (
              <li key={item.label}>
                <button type="button" onClick={() => openWhatsApp(item.service)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Location &amp; Contact</h2>
          <ul className="footer__contact">
            <li>{SITE.address}</li>
            <li>
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__base wrap">
        <p>
          © {year} {SITE.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

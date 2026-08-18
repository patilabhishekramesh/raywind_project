import { BrandMark } from "./BrandMark.jsx";
import { NAV_LINKS, SITE } from "../config/site.js";
import { openWhatsApp } from "../utils/whatsapp.js";
import { IconArrow, IconClock, IconMail, IconPhone, IconPin, IconWhatsApp } from "./Icons.jsx";

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
          <button
            type="button"
            className="btn btn--wa btn--sm"
            onClick={() => openWhatsApp("a free solar consultation")}
          >
            <IconWhatsApp />
            Free consultation
          </button>
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
            <li>
              <IconPin size={15} />
              {SITE.address}
            </li>
            <li>
              <IconPhone size={15} />
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </li>
            <li>
              <IconMail size={15} />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <IconClock size={15} />
              {SITE.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap">
        <div className="footer__strip">
          <p>Check what the government subsidy brings your rooftop system down to.</p>
          <a className="btn btn--white btn--sm" href="#subsidy">
            Open subsidy calculator
            <IconArrow />
          </a>
        </div>
      </div>

      <div className="footer__base wrap">
        <p>
          © {year} {SITE.legalName}. All rights reserved.
        </p>
        <p className="footer__credit">
          Developed by{" "}
          <a href="https://patilabhishek.site" target="_blank" rel="noopener noreferrer">
            patilabhishek
          </a>
        </p>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { TopBar } from "./TopBar.jsx";
import { BrandMark } from "./BrandMark.jsx";
import { IconClose, IconMenu, IconWhatsApp } from "./Icons.jsx";
import { NAV_LINKS, SITE } from "../config/site.js";
import { useScrolled } from "../hooks/useScrolled.js";
import { setScrollLocked } from "../hooks/useSmoothScroll.js";
import { openWhatsApp } from "../utils/whatsapp.js";

export function Navbar() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    setScrollLocked(open);
    return () => {
      document.body.style.overflow = "";
      setScrollLocked(false);
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " site-header--fixed" : ""}${open ? " is-open" : ""}`}>
      <TopBar />
      <div className={`nav${scrolled ? " nav--shadow" : ""}`}>
        <div className="nav__bar wrap">
          <BrandMark />

          <nav className="nav__links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={close}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a className="btn btn--primary btn--sm" href="#contact">
              Enquire
            </a>
            <button
              type="button"
              className="btn btn--wa btn--sm btn--icon"
              onClick={() => openWhatsApp("a renewable energy consultation")}
              aria-label="WhatsApp"
            >
              <IconWhatsApp />
            </button>
            <button
              type="button"
              className="nav__toggle"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        <div id="mobile-nav" className={`nav__drawer${open ? " is-open" : ""}`} hidden={!open}>
          <nav aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={close}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="btn btn--primary" href="#contact" onClick={close}>
            Send enquiry
          </a>
          <a className="btn btn--secondary" href={SITE.phoneHref} onClick={close}>
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </header>
  );
}

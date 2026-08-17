import { useState } from "react";
import { SITE } from "../config/site.js";
import { FORM_SERVICES } from "../data/content.js";
import { openWhatsApp, openWhatsAppMessage } from "../utils/whatsapp.js";
import { IconClock, IconMail, IconPhone, IconPin, IconWhatsApp } from "./Icons.jsx";
import { Reveal } from "./Reveal.jsx";

const EMPTY = { name: "", phone: "", email: "", service: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.service) {
      setError("Please add your name, phone number and the service you need.");
      return;
    }
    const extra = [
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.email.trim() ? `Email: ${form.email.trim()}` : null,
      form.message.trim() ? `Message: ${form.message.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    openWhatsApp(form.service, extra);
    setSent(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <Reveal className="section__head">
          <p className="kicker">Contact</p>
          <h2>Tell us about the site. We will come back with a clear next step.</h2>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__aside">
            <p className="lede">
              WhatsApp is the fastest way to reach an engineer. Call if you prefer to talk
              through the load and the roof first.
            </p>
            <ul className="contact__list">
              <li>
                <IconPhone />
                <div>
                  <span>Phone</span>
                  <a href={SITE.phoneHref}>{SITE.phone}</a>
                </div>
              </li>
              <li>
                <IconWhatsApp />
                <div>
                  <span>WhatsApp</span>
                  <button type="button" onClick={() => openWhatsApp("an enquiry")}>
                    Chat with us
                  </button>
                </div>
              </li>
              <li>
                <IconMail />
                <div>
                  <span>Email</span>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </li>
              <li>
                <IconPin />
                <div>
                  <span>Address</span>
                  <p>{SITE.address}</p>
                </div>
              </li>
              <li>
                <IconClock />
                <div>
                  <span>Business hours</span>
                  <p>
                    {SITE.hours}
                    <br />
                    {SITE.hoursNote}
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal className="contact__form" delay={80}>
            <form onSubmit={onSubmit} noValidate>
              <label>
                Name
                <input
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </label>
              <label>
                Phone Number
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={onChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={onChange}
                />
              </label>
              <label>
                Service Required
                <select name="service" value={form.service} onChange={onChange} required>
                  <option value="">Select a service</option>
                  {FORM_SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>
              <label className="contact__full">
                Message
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Location, monthly bill or sanctioned load, and what you want the system to do."
                />
              </label>
              {error ? <p className="contact__error">{error}</p> : null}
              {sent ? (
                <p className="contact__ok">WhatsApp should now be open with your enquiry.</p>
              ) : null}
              <div className="contact__actions">
                <button type="submit" className="btn btn--primary">
                  Send Enquiry
                </button>
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() =>
                    openWhatsAppMessage(
                      "Hello, I would like to request a quotation for a renewable energy system."
                    )
                  }
                >
                  <IconWhatsApp />
                  WhatsApp instead
                </button>
              </div>
            </form>
          </Reveal>
        </div>

        <Reveal className="contact__map">
          <iframe
            title={`${SITE.name} office location in ${SITE.city}`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&z=14&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}

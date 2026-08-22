import { useRef, useState } from "react";
import { SITE } from "../config/site.js";
import { FORM_SERVICES } from "../data/content.js";
import { submitEnquiry } from "../utils/enquiry.js";
import { openWhatsApp } from "../utils/whatsapp.js";
import { IconClock, IconMail, IconPhone, IconPin, IconWhatsApp } from "./Icons.jsx";
import { Recaptcha } from "./Recaptcha.jsx";
import { Reveal } from "./Reveal.jsx";
import { SelectField } from "./SelectField.jsx";
import { SuccessMark } from "./SuccessMark.jsx";

const CONTACT_HIGHLIGHTS = [
  {
    title: "Same-day callback",
    text: "We call back on working days once your enquiry is in.",
  },
  {
    title: "Free site visit",
    text: "Walk the roof with you before you decide anything.",
  },
  {
    title: "Subsidy handled",
    text: "Paperwork and portal steps included with your quote.",
  },
];

const EMPTY = { name: "", phone: "", email: "", service: "", message: "", website: "" };

export function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [sentEmail, setSentEmail] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setError("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (busy) return;
    if (!form.name.trim() || !form.phone.trim() || !form.service) {
      setError("Please add your name, phone number and the service you need.");
      return;
    }
    const token = captchaRef.current?.getToken() || captchaToken;
    if (!token) {
      setError("Please confirm you are not a robot.");
      return;
    }
    setError("");
    setBusy(true);
    try {
      await submitEnquiry({
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.service,
        message: form.message,
        website: form.website,
        captchaToken: token,
      });
      setSent(true);
      setSentEmail(form.email.trim());
      setForm(EMPTY);
      setCaptchaToken("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your enquiry.");
      captchaRef.current?.reset();
    } finally {
      setBusy(false);
    }
  };

  return (
    <section id="contact" className="contact-band" aria-labelledby="contact-title">
      <div className="wrap">
        <Reveal className="contact-band__head">
          <p className="kicker">Contact</p>
          <h2 id="contact-title">Request your site quote</h2>
          <p className="lede">
            Share a few details. An engineer from {SITE.shortName} will call with system size,
            subsidy and a clear next step — usually the same working day.
          </p>

          <div className="contact-band__highlights">
            {CONTACT_HIGHLIGHTS.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="contact-band__panel" delay={70}>
          <aside className="contact-band__side" aria-label="Contact options">
            <p className="contact-band__eyebrow">Prefer to talk first?</p>

            <a className="contact-band__action contact-band__action--primary" href={SITE.phoneHref}>
              <span className="contact-band__action-icon">
                <IconPhone size={20} />
              </span>
              <span className="contact-band__action-text">
                <strong>{SITE.phone}</strong>
                <small>Call the Alibag office</small>
              </span>
            </a>

            <button
              type="button"
              className="contact-band__action"
              onClick={() => openWhatsApp("an enquiry")}
            >
              <span className="contact-band__action-icon contact-band__action-icon--wa">
                <IconWhatsApp size={20} />
              </span>
              <span className="contact-band__action-text">
                <strong>WhatsApp</strong>
                <small>Fastest for photos &amp; bills</small>
              </span>
            </button>

            <a className="contact-band__action" href={`mailto:${SITE.email}`}>
              <span className="contact-band__action-icon">
                <IconMail size={20} />
              </span>
              <span className="contact-band__action-text">
                <strong>{SITE.email}</strong>
                <small>Email the team</small>
              </span>
            </a>

            <div className="contact-band__meta">
              <p>
                <IconPin size={16} />
                {SITE.address}
              </p>
              <p>
                <IconClock size={16} />
                {SITE.hours}. {SITE.hoursNote}.
              </p>
            </div>
          </aside>

          <div className="contact-band__main">
            {sent ? (
              <div className="contact-band__success" role="status">
                <SuccessMark />
                <h3>Thank you!</h3>
                <p>
                  Your enquiry was sent successfully. We&apos;ll call you shortly.
                  {sentEmail ? " A confirmation email is on its way." : ""}
                </p>
                <button
                  type="button"
                  className="btn btn--secondary"
                  onClick={() => {
                    setSent(false);
                    setSentEmail("");
                  }}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form className="contact-band__form" onSubmit={onSubmit} noValidate>
                <div className="contact-band__form-head">
                  <h3>Tell us what you need</h3>
                  <p>Takes under a minute. We only use this to follow up on your enquiry.</p>
                </div>

                <div className="contact-band__row contact-band__row--2">
                  <label className="field">
                    <span className="field__label">Full name</span>
                    <input
                      className="field__input"
                      name="name"
                      autoComplete="name"
                      placeholder="e.g. Your Name Here"
                      value={form.name}
                      onChange={onChange}
                      required
                    />
                  </label>
                  <label className="field">
                    <span className="field__label">Mobile number</span>
                    <input
                      className="field__input"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      placeholder="10-digit number"
                      value={form.phone}
                      onChange={onChange}
                      required
                    />
                  </label>
                </div>

                <label className="field">
                  <span className="field__label">
                    Email <span className="field__optional">optional</span>
                  </span>
                  <input
                    className="field__input"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="For a copy of this enquiry"
                    value={form.email}
                    onChange={onChange}
                  />
                </label>

                <SelectField
                  label="Service needed"
                  value={form.service}
                  onChange={(service) => {
                    setForm((f) => ({ ...f, service }));
                    setError("");
                  }}
                  options={FORM_SERVICES}
                  placeholder="Choose a service"
                />

                <label className="field">
                  <span className="field__label">
                    About your site <span className="field__optional">optional</span>
                  </span>
                  <textarea
                    className="field__input field__input--area"
                    name="message"
                    rows={3}
                    placeholder="Location, monthly bill, roof type, or backup needs."
                    value={form.message}
                    onChange={onChange}
                  />
                </label>

                <label className="contact-band__hp" aria-hidden="true">
                  Company
                  <input
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={onChange}
                  />
                </label>

                <Recaptcha ref={captchaRef} onChange={setCaptchaToken} compact />

                {error ? <p className="contact-band__error">{error}</p> : null}

                <button type="submit" className="btn btn--primary contact-band__submit" disabled={busy}>
                  {busy ? "Sending…" : "Send enquiry"}
                </button>
                <p className="contact-band__fine">No spam — just one call to discuss your site.</p>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal className="contact-band__map" delay={120}>
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

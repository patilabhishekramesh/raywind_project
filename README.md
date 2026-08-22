# Raywind Powertech Solutions

React + Vite website for a renewable energy company covering solar, wind and electrical work in Alibag, Raigad.

**Live site:** https://raywindsolution.com

## Quick start (Windows)

Double-click **`startup.bat`** — it installs dependencies if needed, starts the dev server, and opens [http://localhost:5173/](http://localhost:5173/).

## Run manually

```bash
npm install
npm run dev
```

## Production build

```bash
npm install
npm run build
npm start
```

The site serves from `dist/` on port **4173** (override with `PORT`). The enquiry form API runs at **`POST /api/enquiry`** on the same server.

Copy `.env.example` to `.env` and set:

| Variable | Purpose |
|----------|---------|
| `SMTP_*`, `MAIL_TO` | Gmail SMTP for enquiry emails |
| `SITE_URL` | `https://raywindsolution.com` |
| `VITE_RECAPTCHA_SITE_KEY` | reCAPTCHA v2 site key (build-time) |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA secret (server only) |

### Before go-live checklist

1. Add **`raywindsolution.com`** and **`www.raywindsolution.com`** to [Google reCAPTCHA admin](https://www.google.com/recaptcha/admin) for your site key.
2. Use a Gmail **App Password** for `SMTP_PASS` (not your normal Gmail password).
3. Run `npm run build` with `VITE_RECAPTCHA_SITE_KEY` set so the widget works in production.
4. Point the domain to your host and run **`npm start`** (Node required — static hosting alone will not send enquiry emails).
5. In GitHub Actions, add repository secret **`VITE_RECAPTCHA_SITE_KEY`** if you deploy via Pages.

## GitHub Pages (static only)

Pushes to `main` can publish the frontend via `.github/workflows/deploy.yml`. **Enquiry email will not work on Pages alone** unless you host the API separately — use `npm start` on a Node server for the full site.

Custom domain: `public/CNAME` is set to `raywindsolution.com`.

## Branding & contact

Company name, phone, email and address live in `src/config/site.js`.

Logo: `public/logo.jpeg` · Social preview: `public/og.jpg`

## Project structure

```
public/          static assets, robots.txt, sitemap.xml
server/          enquiry API, mail, production server
src/components/  page sections and UI
src/config/      company details and nav
src/data/        services, projects, FAQs
src/hooks/       scroll, in-view helpers
src/styles/      global.css
```

# Raywind Powertech Solutions

React + Vite website for a renewable energy company covering solar, wind and electrical work in Alibag, Raigad.

**Live site:** https://patilabhishekramesh.github.io/raywind_project/

## Quick start (Windows)

Double-click **`startup.bat`** — it installs dependencies if needed, starts the dev server, and opens [http://localhost:5173/](http://localhost:5173/).

## Run manually

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

The workflow sets `VITE_BASE` to the repository name so assets resolve correctly under the Pages sub-path. Locally the base stays `/`, so nothing changes during development.

One-time setup in the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Branding & logo

Company name and contact details live in `src/config/site.js`.

The logo is served from `public/logo.jpeg` and is used in the preloader, navbar, and footer.

## Change the WhatsApp number

Edit `src/config/site.js` and set `whatsappNumber` to country code + number with no plus sign or spaces:

```js
whatsappNumber: "917066569822",
```

All Enquire Now buttons, forms and CTAs read from that single value.

## Project structure

```
public/          logo, windmill Lottie, section images
src/components/  page sections and UI pieces
src/config/      company details and nav links
src/data/        services, projects, testimonials, FAQs
src/hooks/       scroll, in-view and count-up helpers
src/styles/      global.css design system
src/utils/       WhatsApp links and asset path resolution
```

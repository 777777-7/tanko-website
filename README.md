# Tanko Malaysia — Website

A bilingual (English / 中文) corporate + product-catalog website for the **Tanko Malaysia**
branch, modelled on [tanko.com.tw](https://www.tanko.com.tw/en/) with the same product range,
localized for the Malaysia market.

See [PROJECT_SPECIFICATION.md](PROJECT_SPECIFICATION.md) for the full analysis and spec.

## Highlights

- **Bilingual**: English + Traditional Chinese, switchable in the top bar (choice saved in the browser).
- **Full catalog**: all 11 Tanko product categories with subcategories and product detail pages.
- **Sections**: Home, Products, Applications (case studies), News, Download center, About, Contact.
- **Lead generation**: quote/enquiry form (pre-fills the product model) + WhatsApp click-to-chat.
- **Responsive**: desktop mega-menu → mobile burger menu.
- **Zero build step / zero dependencies**: plain HTML + CSS + vanilla JS. Works offline;
  images are generated as inline SVG so nothing external is required.

## Run it

**Option A — just open it:** double-click `index.html`. (Uses hash routing, so it works from `file://`.)

**Option B — local server (recommended, no Node/Python needed):**

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1 -Port 8123
# then open http://localhost:8123/
```

In Claude Code the server is defined in `.claude/launch.json` and can be started from the preview panel.

## Project structure

```
index.html            App shell (header / main / footer / floating WhatsApp)
css/styles.css        Design system (Tanko red + charcoal/steel), responsive
js/i18n.js            UI strings (en / zh) + language state helpers  t() / L()
js/data.js            Catalog: categories, products, applications, news, downloads, company
js/app.js             Hash router + all views + header/footer + enquiry form
serve.ps1             Tiny static file server (PowerShell HttpListener)
.claude/launch.json   Preview server config
PROJECT_SPECIFICATION.md   Full project specification
```

## Editing content

- **Products / categories** → `js/data.js` (`CATEGORIES`, `PRODUCTS`). Each text field is
  `{ en: '...', zh: '...' }`. Add a product by appending an object with a unique `slug`.
- **Applications, News, Downloads** → same file (`APPLICATIONS`, `NEWS`, `DOWNLOADS`).
- **Company / contact details** → `COMPANY` object at the bottom of `js/data.js`.
- **UI labels / buttons** → `js/i18n.js`.

## Real data in place

- **Product photos**: official Tanko catalog images, downloaded to `assets/products/` (self-hosted).
- **Contact**: Primaxs Marketing — WhatsApp +60 12-616 3088, sales@storagesystem.my,
  showroom at No. 39, Jalan Balakong Jaya 4, Taman Industri Balakong Jaya, 43300 Seri Kembangan, Selangor.
- **Branding**: "Tanko Malaysia" storefront, "Primaxs Marketing (M) Sdn Bhd — Authorised Tanko distributor".

## ⚠️ Still to finalise before going live

- **Verify the showroom address** (sourced from public directories — confirm the exact unit).
- **Catalog & assembly PDFs** — the Download page buttons are placeholders; drop real PDFs in and link them.
- **Product specs** — dimensions/loads are representative; confirm exact figures against the official catalog.
- **Enquiry form backend** — currently prepares a pre-filled `mailto:`; wire to a real endpoint (Formspree/SES/API) for production.
- **Company registration number** for the footer, if you want it shown.
- Optional: embed a live Google Map on the Contact page (currently a "View on Google Maps" link).

## Notes

- Product images are **generated placeholders**, not real photos — swap in real imagery when available.
- This is a **static demo build**. The production recommendation in the spec (Next.js + headless
  CMS) remains the path if you need server-side SEO rendering, editor workflows and a contact-form
  backend. The current codebase is structured (data / i18n / views separated) to make that port straightforward.
- The enquiry form has no backend: on submit it validates and prepares a pre-filled email
  (`mailto:`) — wire it to a real endpoint (e.g. Formspree, SES, or an API route) for production.

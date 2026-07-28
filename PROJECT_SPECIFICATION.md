# Tanko Malaysia — Website Project Specification

**Version:** 1.0
**Date:** 2026-07-04
**Reference site:** https://www.tanko.com.tw/en/ (Tanko Taiwan HQ)
**Deliverable:** Localized corporate + product-catalog website for the Malaysia branch/market.

---

## 1. Executive Summary

Tanko (天鋼 / Tanko Enterprise Co., Ltd.) is a Taiwanese manufacturer of industrial and
commercial **storage solutions**, founded in 1975 with ~50 years of manufacturing history.
Its product line covers workstations, workbenches, tool cabinets, racking, lockers, parts
cabinets and household storage. In Malaysia the brand is served through the authorised
distributor **Primaxs Marketing (M) Sdn Bhd**.

This project delivers a **Malaysia-market website** that mirrors the Taiwan HQ site's
information architecture and full product catalog, but is localized for Malaysia:
local contact/office details, MYR-oriented commercial framing, Malaysia-relevant
applications/case studies, English as the primary language (with Bahasa Malaysia and
Chinese as secondary), and lead-generation (quote/inquiry) rather than online checkout.

The site is **B2B lead-generation and catalog**, not e-commerce. The primary conversion is
a **quote / product inquiry**, not an online purchase.

---

## 2. Goals & Success Metrics

| Goal | Description | Success Metric |
|---|---|---|
| Brand presence | Establish Tanko's official Malaysia web presence | Site live, indexed, ranking for "tanko malaysia", "industrial workbench malaysia" |
| Lead generation | Capture B2B quote/product inquiries | ≥ X qualified inquiries/month via forms |
| Product discovery | Let buyers browse the full catalog and download specs | Catalog fully browsable; catalog PDF downloads tracked |
| Localization | Serve Malaysia context (contact, language, currency framing) | Local office details, EN/BM/中文 toggle, MYR framing |
| Credibility | Communicate 50-yr heritage, 5S methodology, quality | About + Applications pages complete with case studies |

**Non-goals (v1):** online payment/checkout, real-time stock, customer accounts, ERP integration.

---

## 3. Target Audience & Personas

1. **Procurement / purchasing officer** (manufacturing, automotive, aerospace, electronics)
   — needs specs, models, catalog PDFs, fast quote request.
2. **Workshop / production manager / engineer** — evaluates workbench & tool-storage
   configurations, 5S workplace layout.
3. **Facilities / education buyers** — schools, vocational/technical training labs, campus racing teams.
4. **SME / retail owners** — bicycle shops, home gyms, kitchens (household range).
5. **Distributors / resellers** — partnership inquiries.

---

## 4. Malaysia Localization Requirements

| Aspect | Taiwan HQ | Malaysia branch |
|---|---|---|
| Primary language | Chinese / English | **English (primary)**, Bahasa Malaysia, Chinese (secondary) |
| Company / contact | Tanko Enterprise, New Taipei / Taichung / Kaohsiung | **Tanko Malaysia** (via Primaxs Marketing, Klang Valley / Selangor) — *placeholder address & phone to be confirmed* |
| Currency framing | TWD | **MYR (RM)** — prices on quote; no public price list required |
| Phone format | +886… | **+60…** |
| Email | intl@tanko.com.tw | e.g. `enquiry@tanko.com.my` *(to be confirmed)* |
| Applications | Taiwan case studies (Nezha film, NTHU/NCKU racing) | Malaysia-relevant case studies (to be supplied); keep global ones as "Worldwide" |
| Maps | Taiwan offices | Google Map embed of Malaysia office |
| Business hours / timezone | GMT+8 | GMT+8 (MYT) |
| Compliance | — | PDPA 2010 (Malaysia) privacy notice + cookie consent |

> **Content placeholders:** Any Malaysia-specific data not yet confirmed (exact address,
> phone, registration no., case studies) is marked `TODO:` in the CMS and must be supplied
> by the client before launch. Do **not** invent legal/registration details.

---

## 5. Information Architecture (Site Map)

```
Home
├── Products
│   ├── Workstation
│   │   ├── Professional Workstation
│   │   └── Classic Workstation
│   ├── Workbench
│   │   ├── Heavy-Duty Workbench
│   │   ├── Benchwork Workbench
│   │   ├── Standard Workbench
│   │   ├── Stainless Steel Workbench
│   │   ├── Performance Workbench
│   │   └── Accessories
│   ├── Tool Cabinet
│   │   ├── Standard Tool Cabinet
│   │   ├── Heavy-Duty Tool Cabinet
│   │   ├── Trolley
│   │   └── Tilt-Out Bins Cart (EKC Cart)
│   ├── CNC Tool Cabinet
│   ├── Mould Rack
│   ├── Hanger Rack
│   │   ├── Shelf
│   │   └── Display
│   ├── Locker
│   ├── Parts Cabinet
│   │   ├── Team Bin
│   │   ├── Team Case
│   │   └── Parts
│   ├── Documents Cabinet
│   │   ├── Series 122
│   │   └── Series 123
│   ├── Perforated Board
│   │   ├── Board
│   │   ├── Hooks
│   │   └── Hanger
│   └── For Home (Household)
│       ├── Chest
│       └── Box
├── Applications
│   ├── Media
│   ├── Industry Applications
│   ├── Campus Facilities
│   └── Others
├── News
├── Download (Catalogs & Assembly Instructions)
├── About Us
│   ├── The Tanko Story (history, 5S philosophy, manufacturing)
│   └── Locations / Global Network
└── Contact Us (Quote / Inquiry)
```

**Global navigation:** Products (mega-menu), Applications, News, Download, About Us, Contact.
**Utility nav:** Language switcher (EN / BM / 中文), Search, "Request a Quote" CTA button.
**Footer:** product category links, applications, quick links, Malaysia office contact block,
social icons, PDPA/privacy, copyright.

---

## 6. Product Catalog — Data Model

Products are presented in a **filterable card grid** per category, each linking to a
**product detail page**. Model numbers use Tanko's alphanumeric codes (e.g. `RY`, `RA-9201`,
`EGA`, `EA/EB`).

### 6.1 Content types

**Category**
- `slug`, `name` (i18n), `description` (i18n), `heroImage`, `order`, `parent` (nullable), `icon`

**Product**
- `slug`, `name` (i18n), `series` (e.g. "Professional Workstation")
- `modelNumber` (e.g. `RA-9201`)
- `category` (ref), `subcategory` (ref)
- `shortDescription` (i18n), `longDescription` (i18n, rich text)
- `images[]` (gallery, with alt text i18n)
- `specifications[]` — key/value list: dimensions (W×D×H mm), drawer count, load capacity (kg),
  material, colour options, weight
- `features[]` (i18n bullet list)
- `variants[]` (optional: e.g. H700 / H1000 / H1200 heights)
- `relatedProducts[]` (refs), `applications[]` (refs)
- `datasheetPdf` (file), `assemblyPdf` (file)
- `seo` (title, description, ogImage)

**Application / Case Study**
- `slug`, `title` (i18n), `category` (Media / Industry / Campus / Others)
- `client`, `location`, `heroImage`, `gallery[]`, `body` (i18n), `productsUsed[]` (refs)

**News / Article**
- `slug`, `title` (i18n), `date`, `excerpt`, `body` (i18n), `coverImage`, `tags[]`

**Download**
- `title`, `type` (Catalog / Assembly Instruction), `file` (PDF), `thumbnail`, `category` (ref, optional), `language`

**Global settings / Contact**
- office name, address, phone, WhatsApp, email, business hours, map embed, social links

### 6.2 Known catalog seed data (from reference site)

> Full model numbers should come from the official Malaysia catalog PDF. Below is the
> confirmed structure and representative models observed on the HQ site — use to seed and validate.

- **Professional Workstation:** RY (Combination), RFC (Modular Rack), RFA/RFB (Drawer Rack),
  RA-9201 / RA-6201 / RA-9091 / RA-6091 (Storage Cabinet), RE-6201 (Clothes Locker),
  RD-6091 (Sink Cabinet), RG-6091 (Wastebin Cabinet), RC-6094 & RB-6098 (Tool Cabinet).
- **Tool Cabinet (Standard):** EGA, EGL, EGM, ELA, ELS (incl. mobile), Trolley EKA / EKB.
- **Tool Cabinet (Heavy-Duty):** H700 / H1000 / H1200 heights, models EA / EB / ED, plus mobile.
- **Parts Cabinet:** Team Bin, Team Case, Parts.
- **Documents Cabinet:** Series 122, Series 123.

---

## 7. Page-by-Page Specification

### 7.1 Home
- Hero carousel (3–5 slides): brand tagline ("Your partner for storage solutions"), featured
  products, promotions, "Request a Quote" CTA.
- Product category grid (11 categories with icon/image, linking to category pages).
- Featured / new products section (carousel).
- Applications teaser (4 category tiles: Media / Industry / Campus / Others).
- "50 Years of Innovation" / About teaser strip.
- 5S methodology highlight.
- Latest News (3 cards).
- Trust bar: heritage, automated manufacturing, worldwide distribution, Malaysia support.
- Contact / quote CTA band + footer.

### 7.2 Product category page
- Breadcrumb, category hero + intro copy.
- Left sidebar filters by subcategory (All + subcategories).
- Responsive card grid: image, series name, model number, "View" link.
- Pagination or lazy-load.
- Related applications / catalog download CTA.

### 7.3 Product detail page
- Breadcrumb, image gallery (zoom, thumbnails).
- Title (series + model), short description.
- Specification table, features list, variant selector (if applicable).
- Datasheet / assembly PDF download buttons.
- **"Request a Quote / Inquire about this product"** button (pre-fills model into form).
- Related products, applications using this product.

### 7.4 Applications (index + category + detail)
- Grid of case studies filterable by 4 categories.
- Detail page: hero, client/location, narrative, gallery, "products used" links.

### 7.5 News (index + article)
- Chronological cards, tag filter, article detail with share.

### 7.6 Download
- Grid/list of catalog & assembly-instruction PDFs, filter by type/category/language,
  file size + language shown, download tracked in analytics.

### 7.7 About Us
- The Tanko Story: founding (1975), 50-year timeline/milestones, business philosophy
  (continuous innovation, customer R&D), automated manufacturing, **5S workplace methodology**
  explainer, worldwide distribution.
- Locations: Malaysia office (map + details) as primary; global network (Taiwan HQ,
  Shanghai, HK/Macau, Malaysia, Thailand) as secondary.

### 7.8 Contact Us / Request a Quote
- Inquiry form: name, company, email, phone, product/model of interest (optional prefill),
  quantity, message, consent checkbox (PDPA).
- Malaysia office block: address, phone, WhatsApp, email, business hours.
- Google Map embed. Spam protection (honeypot + reCAPTCHA/Turnstile). Email + CMS record on submit.

---

## 8. Functional Requirements

- **FR-1** Multilingual UI + content (EN default, BM, 中文) with `hreflang` + language switcher.
- **FR-2** Product catalog browsing with category/subcategory filtering and pagination.
- **FR-3** Full-text site search (products, applications, news, downloads).
- **FR-4** Quote/inquiry forms with server-side validation, spam protection, email + CMS storage.
- **FR-5** PDF download center with tracking.
- **FR-6** News/blog with tagging.
- **FR-7** CMS-managed content for all types in §6.1 (non-technical editors).
- **FR-8** Responsive mega-menu navigation.
- **FR-9** WhatsApp click-to-chat (common in Malaysia B2B).
- **FR-10** Cookie consent + PDPA privacy policy.
- **FR-11** Sitemap.xml + robots.txt auto-generation; per-page SEO metadata.
- **FR-12** 301 redirect map should HQ URL patterns be reused.

---

## 9. Non-Functional Requirements

- **Performance:** Lighthouse ≥ 90 (Perf/SEO/Best-Practices/A11y); LCP < 2.5s; image
  optimization (WebP/AVIF, responsive `srcset`, lazy-load); CDN.
- **Accessibility:** WCAG 2.1 AA — alt text, keyboard nav, focus states, colour contrast, ARIA on menus.
- **SEO:** SSR/SSG, semantic HTML, structured data (`Organization`, `Product`, `BreadcrumbList`),
  canonical + hreflang, XML sitemap, OG/Twitter cards.
- **Security:** HTTPS/HSTS, form validation + rate limiting, CAPTCHA, security headers (CSP),
  no secrets in client, dependency scanning.
- **Browser support:** latest 2 versions of Chrome/Edge/Safari/Firefox + mobile Safari/Chrome.
- **Availability:** ≥ 99.9% (managed hosting/CDN).
- **Analytics:** GA4 + optional Google Tag Manager; conversion events on form submit, PDF download, WhatsApp click.
- **Maintainability:** component library, typed codebase, documented CMS schema.

---

## 10. Design System

- **Brand:** carry Tanko's industrial, clean, trust-oriented look. Primary accent from HQ brand
  (red/orange industrial tone) + neutral greys; strong product photography.
- **Typography:** legible sans-serif with CJK support (e.g. Inter / Noto Sans + Noto Sans SC/TC).
- **Layout:** 12-col responsive grid, generous whitespace, card-based catalog.
- **Components:** header + mega-menu, footer, hero carousel, category card, product card,
  spec table, image gallery/lightbox, filter sidebar, breadcrumb, pagination, CTA band,
  form fields, language switcher, WhatsApp float button, cookie banner, news card, PDF card.
- **Deliverable:** Figma design system + key page mockups (Home, Category, Product detail,
  Application detail, Contact) at desktop + mobile breakpoints before build.

---

## 11. Recommended Technology Stack

> Recommendation optimized for SEO, i18n, editor-friendliness, and low maintenance. Alternatives noted.

| Layer | Recommendation | Rationale / Alternatives |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | SSG/SSR for SEO, built-in i18n & image opt. *Alt: Astro (content-heavy, lighter), Nuxt.* |
| Styling | **Tailwind CSS** + component lib (shadcn/ui) | Fast, consistent design system. |
| CMS | **Headless: Sanity** (or Payload CMS self-hosted) | Structured content, i18n, media, editor UX. *Alt: Strapi, Contentful, WordPress headless.* |
| i18n | `next-intl` / built-in i18n routing | EN/BM/中文 with locale-prefixed routes + hreflang. |
| Forms | Server actions/API route + email (Resend/SES) + Turnstile | Store in CMS + notify sales. |
| Search | CMS query or Algolia/Meilisearch (if catalog large) | Start simple, scale if needed. |
| Hosting | **Vercel** (or Netlify) + CDN | Zero-config Next.js, global edge. *Alt: Cloudflare Pages, containerized.* |
| Analytics | GA4 + GTM | Conversion tracking. |
| Media | CMS CDN / Cloudinary | Responsive images, transformations. |

**If a simpler/cheaper stack is preferred:** WordPress + WPML (multilingual) + a custom
theme is a valid alternative — most familiar to non-technical marketing teams, weaker on
performance/DX. Decision to be confirmed with client (see Open Questions).

---

## 12. Content Migration Plan

1. Obtain official Malaysia product catalog (PDF) + high-res product imagery from Tanko/Primaxs.
2. Map HQ catalog taxonomy (§5/§6) into CMS categories/subcategories.
3. Enter products with model numbers, specs, images, PDFs.
4. Localize copy to English (Malaysia), then translate to BM + 中文.
5. Gather Malaysia case studies (or reuse global with permission).
6. Confirm office/contact/legal details.
7. QA against reference site for completeness.

---

## 13. Project Phases & Timeline (indicative)

| Phase | Deliverables | Est. |
|---|---|---|
| 0. Discovery | Confirm content, brand assets, contact/legal, stack decision, open questions | 1 wk |
| 1. Design | IA sign-off, Figma design system + key mockups | 2 wks |
| 2. Setup | Repo, CMS schema, hosting, CI/CD, i18n scaffold | 1 wk |
| 3. Build | Components, templates, catalog, forms, search, integrations | 3–4 wks |
| 4. Content | Catalog + copy entry, translations, media | 2 wks (parallel) |
| 5. QA & SEO | Cross-browser, a11y, performance, structured data, redirects | 1 wk |
| 6. Launch | DNS, analytics, sitemap submit, monitoring, handover docs | 0.5 wk |
| 7. Post-launch | Bug-fix window, editor training | ongoing |

---

## 14. Deliverables

- Responsive, multilingual website (source in Git).
- Headless CMS with documented schema + editor guide.
- Figma design system + mockups.
- Seeded product catalog matching HQ taxonomy.
- SEO baseline (sitemap, structured data, metadata).
- Analytics + conversion tracking configured.
- Deployment pipeline + hosting.
- Handover documentation + training session.

## 15. Acceptance Criteria

- All §5 pages implemented and populated; catalog matches HQ taxonomy.
- EN/BM/中文 switching works with correct hreflang.
- Quote/contact forms deliver email + store record + pass spam protection.
- Lighthouse ≥ 90 across categories on key pages.
- WCAG 2.1 AA validated on key templates.
- All Malaysia contact/legal placeholders replaced with client-confirmed data.

---

## 16. Open Questions (need client input)

1. **CMS/stack preference** — Next.js + headless CMS (recommended) vs WordPress?
2. **Languages at launch** — EN only, or EN + BM + 中文 from day one?
3. **Exact Malaysia entity** — "Tanko Malaysia" branding vs "distributed by Primaxs Marketing"?
   Confirmed office address, phone, WhatsApp, email, company registration for footer/legal.
4. **Pricing** — quote-only (recommended) or show indicative MYR prices?
5. **Product data source** — official catalog PDF + image assets availability.
6. **Case studies** — Malaysia-specific available, or reuse global with attribution?
7. **Domain** — `tanko.com.my`? DNS access.
8. **E-commerce** — needed later (phase 2) or never?

---

## Appendix A — Reference Site Analysis Summary

- **Brand:** Tanko / 天鋼, est. 1975, Taiwan; ~50 yrs; "your partner for storage solutions."
- **Industry:** industrial/commercial steel storage & workshop equipment (B2B).
- **Nav:** Products, Applications, News, Download, About Us, Contact; EN/中文.
- **11 product categories** with subcategories and alphanumeric model system (§5, §6).
- **4 application categories:** Media, Industry Applications, Campus Facilities, Others.
- **Philosophy:** continuous innovation, customer-focused R&D, automated manufacturing,
  5S workplace methodology, worldwide distribution.
- **Global network:** Taiwan (Taipei/Taichung/Kaohsiung), Shanghai, HK/Macau (Apis Technology),
  **Malaysia (Primaxs Marketing)**, Thailand (KVB Global).
- **Model:** catalog + inquiry/quote (no online checkout observed).

**Sources:**
- [Tanko Taiwan (EN)](https://www.tanko.com.tw/en/)
- [Tanko Products](https://www.tanko.com.tw/en/products/)
- [Tool Cabinet category](https://www.tanko.com.tw/en/products/tool-cabinet/)
- [Contact / Locations](https://www.tanko.com.tw/en/contact/)
- [Primaxs Marketing (Malaysia distributor)](https://4617-my.all.biz/)

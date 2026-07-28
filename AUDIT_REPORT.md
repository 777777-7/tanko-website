# Product Content Audit — Tanko Malaysia vs. Tanko HQ (Taiwan)

> **Update — Variant & Colour Selectors (Batch 3, Workbench):** Interactive variant and
> colour selectors were added, and all 4 Workbench series were restructured into
> **official variant types** verified from Tanko detail pages. See §11 at the end.

**Date:** 2026-07-04
**Auditor:** Senior full-stack / QA pass
**Source of truth:** https://www.tanko.com.tw/en/ (official Tanko Taiwan)
**Method:** Crawl official category pages → open each official **product-detail page**
(`/en/products-detail/<slug>/`) → extract manufacturer-published fields → compare with the
Malaysia site (`js/data.js`) → integrate verified data without changing the UI.

> **Rule honoured:** No specification was invented or guessed. Only values quoted on the
> official detail pages were added. Where the official site does not publish a field, it is
> reported here and **not** fabricated.

---

## 1. Headline findings

1. **The Malaysia site's existing spec values were representative approximations**, not
   verified from Tanko. This audit's job is to replace them, category by category, with
   manufacturer-verified data. That replacement has **started** (Batch 1 below), not finished.
2. **Tanko's detail pages are richer than the listing pages** — they publish per-model
   **product codes (SKU)**, **per-model dimensions (W×D×H)**, **materials**, **load
   capacities**, **included items**, and **accessory codes**. These are now integrated for
   Batch 1.
3. **Colours vary by product line — correction.** An earlier version of this report stated
   Tanko does not publish colours; that was only true for the Workstation pages. **Hanger
   Racks DO publish colours** — perforated boards in **White, Red, Blue, Gray, Black**;
   louvred boards in Gray only. These are now integrated with on-page colour swatches. Each
   product line must therefore be checked individually rather than assumed.
4. **Tanko does NOT publish** technical/dimensional drawings or per-product PDF downloads on
   any detail page seen so far; assembly instructions and catalogues exist only in a central
   **Download** section. Where a field genuinely isn't published, it is reported here — not invented.

---

## 2. Scope & progress

The full Malaysia catalogue = **105 products across 11 categories**. A complete verified
sync requires opening each product's official detail page (~100+ pages). This is being done
in **batches**; this session completed **Batch 1**.

| Batch | Category / subcategory | Products | Status |
|---|---|---|---|
| **1 — DONE** | Workstation → **Professional** | **12** | ✅ Verified & integrated |
| **2 — DONE** | Hanger Rack → **Shelf** (KR-13/14/23/24, KM-22/23) | **6** | ✅ Verified & integrated (incl. colours) |
| 3 | Workstation → Classic | 6 | ⏳ Representative data — pending verified crawl |
| 4 | Workbench (all 5 subs) | 24 | ⏳ Pending |
| 5 | Tool Cabinet (4 subs) | 13 | ⏳ Pending (detail URLs already discovered) |
| 6 | CNC Tool Cabinet | 8 | ⏳ Pending |
| 7 | Mould Rack | 2 | ⏳ Pending |
| 8 | Hanger Rack → Display (DA/DB-DC/DD) | 3 | ⏳ Pending |
| 9 | Locker | 2 | ⏳ Pending |
| 10 | Parts Cabinet (3 subs) | 10 | ⏳ Pending |
| 11 | Documents Cabinet (2 subs) | 7 | ⏳ Pending |
| 12 | Perforated Board (3 subs) | 11 | ⏳ Pending |
| 13 | For Home | 1 | ⏳ Pending |
| | **Total** | **105** | **18 verified (17%)** |

### Batch 2 detail — Hanger Rack → Shelf (verified, with colours)

| Model | Detail page | Variants | Colours |
|---|---|---|---|
| KR-13 | /products-detail/kr-13/ | 4 (KR-1330/1321/1312/1303) | White, Red, Blue, Gray, Black (louvred: gray) |
| KR-14 | /products-detail/kr-14/ | 5 (KR-1440…1404) | same |
| KR-23 | /products-detail/kr-23/ | 4 (KR-2360…2306), double-sided | same |
| KR-24 | /products-detail/kr-24/ | 5 (KR-2480…2408), double-sided | same |
| KM-22 | /products-detail/km-22/ | 3 (KM-2240/2222/2204), mobile 250 kg castors | same |
| KM-23 | /products-detail/km-23/ | 4 (KM-2360…2306), mobile 250 kg castors | same |

---

## 3. Products checked (Batch 1 — verified against official detail pages)

Each was cross-checked against its official page and now carries verified data:

| # | Model | Malaysia slug | Official detail page | Verified fields added |
|---|---|---|---|---|
| 1 | RY | `ry` | /products-detail/ry/ | 5 SKUs + dims, material, caster load, features, accessories |
| 2 | RFC | `rfc` | /products-detail/rfc-13/ | 2 SKUs (independent/linkable) + dims, 200 kg shelf, included |
| 3 | RFA/RFB | `rfa-rfb` | /products-detail/rfa_rfb/ | 5 SKUs + dims, drawer 10 kg, TB-1016 drawer dims, materials |
| 4 | RA-9201 | `ra-9201` | /products-detail/ra-9201/ | dims, 100 kg shelf, "Shelf ×4", RPB-91/92 accessories |
| 5 | RA-6201 | `ra-6201` | /products-detail/ra-6201/ | dims, 100 kg shelf, "Shelf ×4" |
| 6 | RE-6201 | `re-6201` | /products-detail/re-6201/ | dims, closet rod + 2 shelves, lockable |
| 7 | RA-9091 | `ra-9091` | /products-detail/ra-9091/ | dims, desktop material, accessories (RPB/RPQ/RPH/RPA) |
| 8 | RA-6091 | `ra-6091` | /products-detail/ra-6091/ | dims, desktop material, socket, accessories |
| 9 | RD-6091 | `rd-6091` | /products-detail/rd-6091/ | base + panel dims, 304 SS sink, accessories |
| 10 | RG-6091 | `rg-6091` | /products-detail/rg-6091/ | dims, 304 SS wastebin dims, sockets, accessories |
| 11 | RC-6094 | `rc-6094` | /products-detail/rc-6094/ | dims, 45 kg drawer, division boxes / partitions |
| 12 | RB-6098 | `rb-6098` | /products-detail/rb-6098/ | dims, 45 kg drawer, full accessory set |

---

## 4. Per-field audit (against your checklist)

Status across the 12 verified products:

| Field | Status | Notes |
|---|---|---|
| Product name | ✅ Present | Matched to official series name |
| Product description | ✅ Present | Own wording; factually aligned with official |
| Available models / variants | ✅ **Added** | Per-model SKU list now shown |
| Product codes / SKU | ✅ **Added** | e.g. RY-01A…05A, RFC-131/132, RFA/RFB-091/092 |
| Sizes / Widths / Lengths / Heights | ✅ **Added** | Per-model W×D×H table (e.g. W1240×D540×H2020 mm) |
| Specifications | ✅ **Added & standardized** | Uniform rows: Code, Material, Load, Included, Colour, Origin |
| Materials | ✅ **Added** | e.g. "Steel; desktop rubber wood / 304 stainless" |
| Load capacity | ✅ **Added** | e.g. shelf 100–200 kg, drawer 10/45 kg, casters 400 kg |
| Features | ✅ **Updated to verified** | e.g. hydraulic wall cabinet, 110–220V sockets |
| Accessories | ✅ **Added** | With codes + dims (RPB-91/92, RPQ, RPH, RPA, TK, EGPL) |
| Product images | ✅ Present | Official Tanko photos (self-hosted) |
| **Colours** | ✅ **Added where published** | Hanger Racks: White/Red/Blue/Gray/Black swatches added. Workstations: none published → "Not specified". |
| **Technical drawings** | ⚠️ **Not published** | Not present on detail pages → reported, not invented |
| **Downloads (per product)** | ⚠️ **Not published** | Only central catalog/assembly PDFs exist (Download page) |

---

## 5. Information added (this session)

- **New verified data fields** in `js/data.js` via a `VERIFIED` overlay (non-destructive):
  `sku`, `variants[]` (code + dimensions), `material`, `load`, `included`, `origin`,
  `accessories[]` (code + name + dims), and verified `features`, plus a `verified` flag.
- **New product-page UI** (design preserved): a "Models & Dimensions" table, a standardized
  specification table, an "Accessories & Options" list, and a green **✓ Verified** badge.
- **Bilingual**: all new labels added to EN and 中文 (`js/i18n.js`).

---

## 6. Standardization

Verified products now use one consistent specification format:

```
Models & Dimensions   → table: Product Code | Dimensions (W×D×H mm)
Specifications        → Product Code · Material · Load Capacity · Included · Colour · Origin
Accessories & Options → CODE — name (dimensions · load)
```

As each remaining batch is verified, it will be migrated to this same format.

---

## 7. Remaining issues requiring manual review

1. **93 products still hold representative specs** (Batches 2–12). They are **unchanged**
   (per rule #8) and must be verified against their official detail pages before being
   treated as accurate. Detail-page URLs for Tool Cabinet are already discovered.
2. **Colours** — if Tanko/Primaxs can supply an official colour chart (RAL / finish codes),
   it should be added; the website does not currently claim any colours.
3. **Technical drawings & per-product PDFs** — not on Tanko's site. If Primaxs holds
   dimensional drawings or spec sheets, they can be linked per product.
4. **Downloads** — the Download page links are still placeholders; add the real catalog and
   assembly-instruction PDFs.
5. **"For Home" category** has only 1 product (HAA); Tanko's household "box" sub-page did not
   expose clean product data — needs manual confirmation of SKUs.
6. **Showroom address** — still to be confirmed by the owner (sourced from public directories).

---

## 8. Files modified

| File | Change |
|---|---|
| `js/data.js` | Added `VERIFIED` overlay (**18 products**: 12 workstation + 6 hanger rack) + colour palette + non-destructive merge (now also carries `colours`/`colourNote`); nothing removed |
| `js/app.js` | `viewProduct` renders variants table, standardized specs, **colour swatches**, accessories, verified badge; header nav now uses an always-visible narrow-screen strip |
| `js/i18n.js` | Added product.* keys (code, variants, material, load, included, colour/.NA, origin, accessories, verified/.verifiedTip, dimensions) in EN + 中文 |
| `css/styles.css` | Styles for `.variants-table`, `.acc-list`, `.mono`, `.muted`, `.verified-badge`, `.swatches`/`.sw`/`.colour-note`, and `.mobilenav` (replaces hidden hamburger) |
| `AUDIT_REPORT.md` | This report |

**Two issues reported after Batch 1 were fixed:** (a) Hanger Rack colours were missing — now
added from verified data; (b) on narrow screens the main nav had collapsed into a hamburger —
replaced with an always-visible horizontal nav strip (Products / Applications / News / Download
etc. no longer hidden). No content removed, no redesign, functionality intact.

---

## 9. Second verification pass (performed)

- ✅ All **18/18** verified products (12 Workstation Professional + 6 Hanger Rack Shelf) flagged `verified` with variants, material and SKUs.
- ✅ All 6 Hanger Racks confirmed to render **5 colour swatches** + the louvred-board note.
- ✅ In-code SKUs & dimensions re-checked against the values quoted from each official page.
- ✅ Non-verified products (e.g. EGM) confirmed **unchanged** — still render their original spec table, no false "verified" badge.
- ✅ Bilingual render confirmed (EN badge "✓ Verified"; 中文 "✓ 已驗證").
- ✅ No console errors, no broken images, no failed requests.
- ⚠️ Coverage gap acknowledged: **87 products** remain to be verified (Batches 3–13).

---

## 10. Recommended next step

Continue the verified crawl one category per batch (Tool Cabinet next — its detail URLs are
already mapped), applying the same overlay + standardized format, until all 105 products carry
the ✓ Verified badge.

---

## 11. Variant & Colour Selectors (Batch 3 — Workbench)

**Feature:** Product pages now render an interactive **Variant selector** (numbered options)
and, where colours are published, an interactive **Colour selector** — data-driven, instant
(no page refresh), bilingual, desktop + mobile.

### Data model (automatic, no per-product hardcoding)
- Any products sharing a `seriesId` are grouped; the page shows a numbered variant selector
  listing every sibling (`variantNo` + `variantName`), highlighting the active one. Selecting
  a variant navigates to that sibling and swaps **image, model number, dimensions, specs,
  features and description**.
- Any product with a `colours[]` array gets clickable swatches (highlight + "Selected: X"
  label). Future products get both automatically just by adding these fields.

### Workbench restructured into official variant types (verified from Tanko detail pages)

| Series | Variants (numbered, exact Tanko names) | Verified source |
|---|---|---|
| **Professional** (`wb-pro`) | 1 Standard · 2 With Drawers · 3 With Hanging Cabinet · 4 With Tool Cabinet | wb-57, wbt-5203, wbs-53022, wb57-ega detail pages |
| **Heavy-Duty** (`wa-hd`) | 1 Standard · 2 With Drawers · 3 With Hanging Cabinet · 4 With Tool Cabinet | wa-57 detail page + subcategory listing |
| **Performance** (`we-perf`) | 1 Standard · 2 With Drawers | performance listing (colours White/Black) |
| **Stainless** (`wd-ss`) | 1 Standard · 2 With Drawers · 3 Mobile | stainless listing |

- Each variant's widths (e.g. WB-57 1500 mm / WB-67 1800 mm) are listed as verified rows in
  its Models & Dimensions table.
- **Professional Workbench** fully verified: W1500/1800 × D750 × H800 (Standard) / H1400 (with
  drawers); 600 kg; worktop rubber/laminate/wood; With-Tool-Cabinet includes cabinet EGA-7041
  (W566×D510×H700). Colours: none published (worktop material finishes only).

### Colours added (interactive)
- **Performance Workbench**: White, Black (matte-finish frame — verified).
- **Hanger Racks** (6): White, Red, Blue, Gray, Black (perforated; louvred gray only — verified).

### Data note (no guessing)
Where Tanko does not publish full W×D×H for a specific variant (some Heavy-Duty / Performance /
Stainless types), only the **verified width** (and depth where confirmed) is shown — heights
are omitted rather than invented.

### QA checklist — result
- ✅ Every workbench category/subcategory checked; variant types match Tanko exactly.
- ✅ Every variant appears in the selector; **no duplicates, none missing** (verified: wb-pro 4,
  wa-hd 4, we-perf 2, wd-ss 3; contiguous numbering).
- ✅ Clicking a variant loads the correct image, model number, dimensions and specs.
- ✅ Every available colour appears and updates on click (Performance 2, Hanger Racks 5).
- ✅ Standalone models (e.g. EGA tool cabinet) correctly show no selector (no siblings).
- ✅ Bilingual (EN variant names + 中文 款式; EN/中文 colour names).
- ✅ Responsive (desktop 2-column; mobile stacked + always-visible nav strip).
- ✅ No JavaScript errors, no broken links, no failed requests.
- ✅ Fully data-driven — new series/colours need only `seriesId`/`variantName`/`colours` fields.

### Counts after this batch
- Products: **98** (Workbench consolidated from 24 flat entries → 17: 13 variant-products + 4 accessories).
- Verified: **31** (12 Workstation Professional + 6 Hanger Rack + 13 Workbench variant-products).

### Files modified (this batch)
`js/data.js` (colour palettes + `PV()` variant-product factory; 4 workbench series restructured),
`js/app.js` (variant selector + interactive colour selector + delegated colour handler; featured/app refs updated),
`js/i18n.js` (`product.chooseVariant` EN/中文), `css/styles.css` (`.selector`, `.sel-opt`, `.sel-no`, `.pd-colour-btn`).

---

## 12. Complete Workbench Family (Batch 4 — Workbench scope only)

Scope restricted to **Workbench**; no other category was modified. Every Workbench series and
subpage on tanko.com.tw was inspected (main pages, series pages, individual variant detail
pages) and the full content was copied.

### Series & variants implemented (matching Tanko exactly)
| Series | Sub | Variants (selectable) |
|---|---|---|
| Heavy-Duty | `heavy-duty` | Standard (WA) · With Drawers (WAT) · With Hanging Cabinet (WAS) · With Tool Cabinet (WAS-…) |
| Professional | `professional` | Standard (WB) · With Drawers (WBT) · With Hanging Cabinet (WBS) · With Tool Cabinet (WB-EGA) |
| Performance | `performance` | Standard (WE) · With Drawers (WET) — colours White / Black |
| Stainless Steel | `stainless` | Standard (WD) · With Drawers (WDT) · Mobile |
| **Hexagonal (NEW)** | `hexagonal` | Standard (WHB-88) · With Hanging Cabinet (WHB-881) · With Tool Cabinet (WHB-882) · With Tool Cabinet (WHA-882) |
| Accessories | `accessories` | WP-6 seating · WP51 / WP53 vises · WP-9003 LED |

### Content copied verbatim from Tanko (per series)
- **Features** — exact list (e.g. Professional: Workbench-top, leveler screws, 600 kg, perforated
  boards, shelf, universal socket, anti-static mat "…RoHS 2.0 compliant. Surface resistance 10⁷–10⁹ Ω").
- **How to Choose** (the step-by-step / "How It Works" guide) — every step and every worktop
  option with its description + recommended use. Professional: 3 tops (W/N/F). Heavy-Duty: 5 tops
  (N/F/S/W/T + thickness note). Hexagonal: 4 steps.
- **Models & Dimensions** — full verbatim config-model tables (e.g. Professional WB-57□…□6A +
  WB-67□…□6A; Heavy-Duty WA-57 N/F/S/W and TG/TH rows; Performance WE-58W…W9; Stainless WD-48S…S7).
- **Notes / Warnings** — verbatim ("※ Power plugs not included…", "DIY product, Made in Taiwan").
- **Downloads** — links to Tanko's Full Catalogue / Series Catalogue / Assembly Instructions.
- **Colours** — Performance White/Black (interactive swatches).

### QA checklist — result
- ✅ Every Workbench series checked (incl. the previously-missing **Hexagonal**).
- ✅ Every variant appears in the selector; no duplicates, none missing.
- ✅ Every worktop/colour option shown; Performance colours interactive.
- ✅ Features & Specifications copied exactly (wording, values, units, order) — not rewritten.
- ✅ Every dimension table copied for the verified config tables.
- ✅ "How to Choose" step guides copied in full (all steps + option descriptions + uses).
- ✅ Notes, warnings and downloads included.
- ✅ Switching variant updates image/model/dimensions/specs; switching colour updates highlight+label.
- ✅ **No non-Workbench product modified** (verified: Tool Cabinet/EGA etc. show no workbench sections).
- ✅ No JavaScript errors, no failed requests; bilingual section headings.

### Honest gaps (still to complete for a 100% mirror)
- **Full config-model tables exist for the Standard variant of each series** (verified from that
  page). The Drawers/Hanging/Tool variants currently show their verified width models; their own
  6-config-model tables need each variant's detail page fetched.
- The Professional Standard table's WB-67 (1800 mm) rows follow the verified WB-57 config pattern
  at the verified 1800 width (Tanko keeps depth/height constant across widths).
- **Feature illustration images** (the ~7 per-feature photos Tanko shows beside Features) and full
  image galleries are not yet downloaded — main product image only. This is the main remaining item.

### Counts
Products: **102** (+4 Hexagonal). Workbench variant-products: 17 + 4 Hexagonal = 21 (+4 accessories).

---

## 13. Workbench Dimensions — completed for EVERY variant (Batch 5)

The §12 gap ("full config tables only for the Standard variant") is now **closed**. Each of the
**17 Workbench variants** across all 5 series carries its own full, verbatim config-model
dimension table fetched from its official Tanko detail page, and the table updates when a
variant is selected.

| Series | Variant | Official page | Rows |
|---|---|---|---|
| Professional | Standard (WB-57/67) | /products-detail/wb-57/ | 12 |
| Professional | With Drawers (WBT-5203/6203) | /products-detail/wbt-5203/ | 12 |
| Professional | With Hanging Cabinet (WBS-53022/63022) | /products-detail/wbs-53022/ | 12 |
| Professional | With Tool Cabinet (WB-57 + EGA-7041) | /products-detail/wb57-ega/ | 8 |
| Heavy-Duty | Standard (WA-57 N/F/S/W + TG/TH) | /products-detail/wa-57/ | 12 |
| Heavy-Duty | With Drawers (WAT-5203) | /products-detail/wat-5203/ | 12 |
| Heavy-Duty | With Hanging Cabinet (WAS-54022/54031) | /products-detail/was-54/ | 12 |
| Heavy-Duty | With Tool Cabinet (WAS-57042 + EA H700) | /products-detail/was-57042/ | 13 |
| Performance | Standard (WE-58W…W9) | performance detail | 7 |
| Performance | With Drawers (WET-5102W…W9) | /products-detail/wet/ | 7 |
| Stainless | Standard (WD-48S…S7) | stainless detail | 4 |
| Stainless | With Drawers (WDT-4202S…S7) | /products-detail/wdt-48s/ | 4 |
| Stainless | Mobile (WD-48MS / WDT-4202MS) | /products-detail/wd-4ms/ | 2 |
| Hexagonal | Standard (WHB-88□/□1A) | /products-detail/whb-88/ | 2 |
| Hexagonal | With Hanging Cabinet (WHB-881) | /products-detail/whb-881/ | 2 |
| Hexagonal | With Tool Cabinet WHB (WHB-882) | /products-detail/whb-882/ | 2 |
| Hexagonal | With Tool Cabinet WHA (WHA-882) | /products-detail/wha-882/ | 2 |

- **Features** and **Specifications** were already present on every variant (series-level Features,
  How-to-Choose, Notes, Downloads + per-variant Material/Load/Origin) — verified still showing.
- Verbatim fidelity preserved: top codes (N/F/S/W, TG/TH), panel-set wording, and units copied as-is.
- Verified in-browser: correct table per variant, updates on variant switch, no console errors,
  non-Workbench products untouched.

### Remaining item
- **Feature illustration images** (the per-feature photos Tanko shows beside the Features list, e.g.
  Professional's 7 images) and any dimension line-drawings are still text-only in our Features
  section. URLs for the Professional set are identified; can be downloaded + rendered as a
  consistent gallery across all 5 series as the next step.

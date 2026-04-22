# Biasana Website — Design Spec

**Date:** 2026-04-21
**Status:** Draft for review
**Owner:** Matej (client-side lead, Claude collaborator)
**Stakeholders:** Polona Skerbinek Miklavčič, Sabina Skerbinek Miklavčič (Biasana co-founders, life + business partners)

---

## 1. Purpose

A Slovenian-language marketing website for **Biasana**, a holistic wellbeing center in Zagorje ob Savi operating since 2012. The site's primary job is to earn enough trust from a new referral that they send an SMS to book a session. Its secondary job is to describe the online course offerings well enough that interested visitors email for details.

The site is explicitly **not** a booking engine, a course platform, a content hub, or a self-edit CMS.

## 2. Goals and non-goals

### Goals

1. **Trust and credibility** — A stranger who heard about Biasana from a friend should arrive, confirm it's legitimate, understand what craniosacral therapy and Pedosana actually are, and feel safe enough to SMS Polona for a first session.
2. **Service clarity** — A visitor should find their situation (pregnancy, newborn, older child, chronic tension, sports recovery, online-from-home) in the navigation within one click.
3. **Online course awareness** — Each of the five online offerings has a dedicated landing that converts to an email inquiry. No checkout.
4. **Local and organic discoverability** — Rank in Slovenian search for audience + location queries ("kraniosakralna terapija Zagorje", "pomoč dojenčku pri spanju Zasavje") and be readable/citable by generative search engines (ChatGPT Search, Perplexity, Claude, Gemini).

### Non-goals (v1)

- Online booking, calendar integration, payment processing.
- Paid course delivery (accounts, login, video hosting).
- English or other languages.
- Blog / journal / dated posts.
- Standalone FAQ page.
- Newsletter signup.
- Contact forms (`mailto:`and `sms:` only).
- CMS / owner self-edit.
- Chat widget.
- Cookie consent banner (no non-essential cookies used).

## 3. Audience

Primary: Slovenian-speaking adults, concentrated in Zasavje (Zagorje, Trbovlje, Hrastnik) and the broader SI central region.

Sub-segments, in order of business importance:

1. Pregnant women seeking gentle preparation for birth.
2. New mothers (0–12 months) seeking support for themselves and their infants (simultaneous cranio, Pedosana movement hours, Shiatsu baby-massage).
3. Parents of older children and teens dealing with sleep, emotions, or school stress.
4. Adults with chronic tension, anxiety, insomnia, or seeking post-injury recovery.
5. People outside Zagorje who cannot attend in person, via the online course offerings.

## 4. Brand

### Palette (from client)

- `#005e58` — Teal deep (primary)
- `#38817d` — Teal light (accent)
- `#ffffff` — White (ground)
- `#abcdc3` — Sage mist (derived from logo radial gradients, for subtle layering)
- `#04524c`, `#257066`, `#2f9688` — gradient stops from logo, reserved for hero and key-section backgrounds

### Typography roles

- **Title face:** Harabara Mais Demo (client-owned). 
- **Subtitle / accent face:** Give You Glory (Google Fonts, SIL OFL). Used sparingly for emotional peaks only — estimated 4–8 occurrences total across the site. Over-use degrades the effect.
- **Body face:** Open Sans (Google Fonts, SIL OFL). Full weight range already in `/Fonts`.

### Voice

Poetic second-person addressing the visitor ("ti"). Slogan-led at emotional peaks ("Prisluhni. Začuti. Zaupaj si."), warm and personal everywhere else, institutional only in legal/contact boilerplate.

The co-founder partnership (Polona and Sabina are life partners and business partners, with a son born 2024) is **present but not headlined** — visible on `/o-naju` through shared surname, natural paired photography, and one direct mention; never the marketing hook.

### Visual direction — starting point

Intensity **B (Uravnoteženo / Balanced)**: teal-gradient heroes and key section headers, white body pages. This is a **starting point that will evolve during the build** — specific treatments, animations, and motion vocabulary develop iteratively as pages are implemented. The spec does not lock visual details beyond the palette, type, and intensity level.

## 5. Information architecture

Audience-first structure — Slovenian clients in this niche search by who they are more than by modality.

```
/                        Domov
/o-naju                  O naju
/za-nosecnice            Za nosečnice
/za-mamice-in-dojencke   Za mamice in dojenčke         (flagship)
/za-otroke               Za otroke in mladostnike
/za-odrasle              Za odrasle in športnike
/pilates                 Pilates                        (parallel track)
/spletni-tecaji          Spletni tečaji
/cenik                   Cenik + Prvi obisk
/kontakt                 Kontakt
```

### Page roles

| Path                     | Role                                                                                                                                                                                                                                                | Approximate length                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `/`                      | Orientation hub: hero, philosophy, three-up service gateway, two testimonials, co-founder preview, SMS CTA.                                                                                                                                         | ≤500 words                                       |
| `/o-naju`                | Paired intro, then individual blocks for Polona and Sabina (credentials, methods, focus areas). Partnership present without headlining. "V medijih" block links the three external articles.                                                        | 700–900 words                                    |
| `/za-nosecnice`          | Pain-point opener, what cranio offers in pregnancy, online prenatal option, first-session expectations, typical course, one local testimonial, SMS CTA.                                                                                             | 600–800 words                                    |
| `/za-mamice-in-dojencke` | Flagship. Opens with the unique simultaneous-two-therapist offering. Four sub-sections: simultaneous cranio, Pedosana gibalne urice (Mikro / Mini / Midi / Maxi), Shiatsu baby-massage online, individual first-4-weeks support.                    | 900–1100 words                                   |
| `/za-otroke`             | Softer tone for emotionally loaded parenting contexts (sleep, emotions, school stress).                                                                                                                                                             | 500–700 words                                    |
| `/za-odrasle`            | Adults, seniors, athletes grouped under "ko telo nosi preveč".                                                                                                                                                                                      | 500–700 words                                    |
| `/pilates`               | Classical Contrology, max 3, apparatus. Photo-driven. Small-group positioning, Sabina credentials, first-visit note, schedule note, online pilates link.                                                                                            | 500–700 words                                    |
| `/spletni-tecaji`        | Four-to-five cards (one per online offering), each linking to a short sub-page with "Želim sodelovati" `mailto:` CTA.                                                                                                                               | Index: ≤300 words; sub-pages: 400–600 words each |
| `/cenik`                 | Price list rendered dynamically from a Google Sheet (one tab per section, see §8). "Prvi obisk" explainer (what to wear, duration, what to bring, parking, what to expect) as static content above the price tables. BiaBon gift voucher at bottom. | Explainer: 400–600 words; price tables: dynamic  |
| `/kontakt`               | Phone (SMS only), both emails routed by topic, address, embedded map, opening-hours narrative, social links.                                                                                                                                        | ≤300 words                                       |

### Navigation

- **Header (mobile-first):** Logo + hamburger (opens sheet with all links grouped). Desktop: logo + primary items (O naju / Storitve dropdown / Spletni tečaji / Kontakt) + phone number on the right (SMS action).
- **Footer:** Address, phone (SMS action), both emails, social links, sitemap, `Impressum` / imetnik, copyright, GDPR one-liner.
- **"Prvi korak" CTA block:** Appended to every audience/service page, above the footer.

## 6. Conversion paths

**All CTAs are SMS or email. No call actions anywhere on the site.**

- Phone number (`+386 40 454 462`) throughout the site is rendered as `sms:+38640454462` with a prefilled body message ("Pozdrav, zanima me termin za..."). The number is visually displayed but never invokes a call.
- **SMS prefill by page context:**
  - Generic (homepage, kontakt, footer): "Pozdrav, zanima me termin v Biasani."
  - Pregnancy: "Pozdrav, zanima me kraniosakralna terapija v nosečnosti."
  - Mamice + dojenčki: "Pozdrav, zanima me termin za kraniosakralno terapijo za mamico in dojenčka."
  - Children / teens: "Pozdrav, zanima me termin za otroka."
  - Adults / athletes: "Pozdrav, zanima me kraniosakralna terapija zame."
  - Pilates: "Pozdrav, zanima me pilates v studiu."
- **Email routing:**
  - `polona.biasana@gmail.com` — therapies, gibalne urice, masaže za dojenčke.
  - `biasana.sabina@gmail.com` — pilates, Chi Nei Tsang, BiaBon.
  - Each `mailto:` link carries a prefilled subject corresponding to the page.
- Online course pages: "Želim sodelovati" button → `mailto:` with subject prefilled per course.

## 7. Content

### Source material

- `business.md`, `services.md` (in repo, canonical).
- `dataset_facebook-posts-scraper_2026-03-23_12-45-09-495.json` (voice samples, event posts, testimonials).
- `dataset_facebook-pages-scraper_2026-03-23_12-41-22-878.json` (page metadata, reviews).
- `/Photos` (hero, service, and portrait imagery).
- **Google Sheet (pricing)** — owner-maintained spreadsheet that is the single source of truth for `/cenik`. Details in §8.
- **External articles** (fetch in Phase 2; linked as "V medijih" on `/o-naju`):
  - Svet24.si — *"Bitka Sabine Miklavčič: 'Moja pot iz brezna …'"*
  - Bibaleze.si — *"Prednosti kraniosakralne terapije za dojenčke"*
  - Zon.si — *"Bolezni izhajajo tudi iz naše nepovezanosti s samim seboj"*

### Content production workflow

Copy is drafted by an AI copywriter agent from the source material in Biasana's voice, delivered as MDX drafts for Polona and Sabina to edit and approve. No page ships with placeholder or Lorem text.

### Assets still needed from the owners

- Populated Google Sheet for pricing (structure in §8).
- Written consent from named testimonial authors (GDPR).
- Parental photo releases for any recognizable minor.
- Confirmation of BiaBon fulfillment process (email-to-purchase vs. printable voucher).

## 8. Technical architecture

- **Framework:** Next.js 15 (App Router), TypeScript, React Server Components default.
- **Styling:** Tailwind CSS with CSS custom properties for brand tokens. shadcn/ui components pulled selectively and restyled to brand (Button, Sheet for mobile nav, Dialog reserve).
- **Content:** MDX files under `/content/` mirroring URL structure. Frontmatter: `title`, `description`, `heroImage`, `ogImage`, `smsPrefill`.
- **Fonts:**
  - `next/font/local` — Harabara Mais Demo (from `/Fonts`), Give You Glory (from `/Fonts`, self-hosted to avoid third-party loads).
  - `next/font/google` — Open Sans.
  - All with `display: swap`, preload on route hero.
- **Images:** `next/image` with local files under `/public/photos/`. Build-time AVIF + WebP generation. Hero images priority-loaded.
- **Motion:** Framer Motion (or equivalent) available. **Motion vocabulary evolves during the build** and is not locked in this spec.
- **Deployment:** Vercel Hobby tier. GitHub repo as source of truth. Preview deploys on every PR. Production on merge to `main`.
- **Analytics:** Plausible (GDPR-friendly, no cookie banner required). Fallback if cost is an issue: Vercel Analytics.
- **Forms:** none. All interaction via `sms:` and `mailto:` URI schemes.
- **Pricing data (Google Sheets):** `/cenik` renders from an owner-maintained Google Sheet — one tab per price-list section, tab name becomes the section heading on the page. See full integration details below.
- **No:** auth, database, API routes beyond OG image generation + Sheets fetch, CMS, newsletter, chat widget, cookie banner.

### Google Sheets integration for `/cenik`

**Source:** A private Google Sheet owned by Biasana, accessed server-side via the official Google Sheets API using a Google Cloud **service account**. The sheet is shared (viewer role) only with the service account's email address; it does not need to be public, published, or link-shared. The sheet is never requested client-side — all access happens on the server.

**Tab-per-section model:**

- Each tab in the sheet represents one section of the price list. Tab names become H2 section headings on `/cenik`, in the order they appear in the sheet.
- Initial tab set is decided by the owners in Phase 0 and can change at any time without a code deploy — the loader discovers tabs dynamically.
- A tab whose name starts with `_` (e.g. `_archive`, `_draft`) is ignored by the loader — lets owners stage drafts, notes, or archived rates without publishing.

**Schema-less columns (header-row driven):**

- **No columns are predefined.** The loader reads row 1 of each tab as the header row and treats every non-empty cell in that row as a column name.
- Each subsequent row becomes a record with keys taken from the header row. Empty trailing columns are trimmed.
- The renderer displays every tab as a table: header row as `<th>` cells, data rows as `<tr>` cells, in the left-to-right order the owner chose in the sheet.
- This means owners can introduce, rename, or remove columns per tab at any time with zero code change. `Kraniosakralna terapija` can have `Storitev / Trajanje / Cena / Opombe`; `BiaBon` can have `Vrednost bona / Cena`; `Pilates` can have `Paket / Število obiskov / Cena / Veljavnost`. Each tab renders on its own terms.
- **Formatting conventions** (surfaced to owners in the Phase 0 Sheet-owner guide, not enforced in code):
  - Leave a cell empty to render an empty `<td>`.
  - First column is visually emphasized as the row label.
  - A row that is entirely empty terminates the table for that tab (stops reading below it) — lets owners leave whitespace between logical groups.
  - A single-cell row whose value starts with `# ` is rendered as an in-tab subheading instead of a table row.

**Fetch strategy:** The loader calls `spreadsheets.get` once to list tabs, then `spreadsheets.values.batchGet` to fetch all non-ignored tabs in a single round trip. Runs in a Next.js Server Component for `/cenik`. No client-side Sheets call ever happens. The API client is `googleapis` (official SDK).

**Revalidation:** ISR with `revalidate: 3600` (one hour). A protected on-demand endpoint (`/api/revalidate?path=/cenik`, shared-secret header) lets owners force an immediate refresh after an edit.

**Failure handling:** If the Sheets API call fails (auth, rate limit, network, sheet deleted), the page does **not** error out. It falls back to the last-known-good snapshot committed to the repo at `/content/cenik.fallback.json` (refreshed nightly by a GitHub Action — see below). A muted notice is rendered ("Cenik se trenutno osvežuje — za aktualne cene pošlji SMS na 040 454 462" — wording final in content phase).

**Fallback snapshot refresh:** A scheduled GitHub Action (nightly) fetches the sheet using the same service account and commits `/content/cenik.fallback.json` if it changed. This guarantees the fallback is never more than ~24h stale. If the snapshot file is unchanged, no commit.

**Validation at build:** Non-fatal warnings (printed to build logs, never fail the build) for: tab with no header row, duplicate column names within a tab, row counts >100 (sanity check). Malformed rows are skipped in rendering but logged.

**Credentials + env vars:**

- `GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL` — the service account's email.
- `GOOGLE_SHEETS_SERVICE_ACCOUNT_PRIVATE_KEY` — the service account's private key (base64-encoded in the env; decoded at runtime).
- `BIASANA_PRICING_SHEET_ID` — the Google Sheet's document ID.
- `REVALIDATION_SECRET` — shared secret for the on-demand revalidation endpoint.

All four stored in Vercel environment variables (Production + Preview). The service account JSON key is generated in Google Cloud Console; only the private key and email are exported to env. The full JSON file is never committed.

**Sheet access and rotation:** The sheet ID is env-driven — owners can swap to a new sheet without a deploy. Service-account key rotation is a normal Google Cloud operation and requires only an env-var update on Vercel.

**Out of scope for v1:** Two-way sync, edit-from-site, preview branches, multi-language tabs, image-per-row, cell-level formatting (bold/italic) preserved from the sheet, formulas re-evaluated client-side.

## 9. Mobile-first design

The site is designed mobile-first in both the design and the build.

- Every page is drafted, mocked, and implemented for a 375px-wide viewport first. Desktop treatment is derived from the mobile version, not the other way around.
- Breakpoints: mobile (base), `md:` (≥768px tablet), `lg:` (≥1024px desktop). No separate `xl:` or `2xl:` unless a specific page demands it.
- Touch targets ≥44px. SMS and email CTAs get full-width buttons on mobile.
- Hero imagery is portrait-crop-safe; never rely on landscape-only composition.
- Typography scale is set from mobile body (16px / 1rem base) up, not from desktop down.
- Navigation: hamburger + sheet pattern on mobile; progressive reveal to horizontal nav at `md:`.
- Real-device QA (iOS Safari + Android Chrome) is a Phase 5 gate.

## 10. SEO and Generative Engine Optimization (GEO)

### Classic SEO

- Per-page metadata via Next Metadata API (title, description, canonical, locale `sl-SI`).
- Auto-generated `sitemap.xml` and `robots.txt`.
- JSON-LD structured data:
  - `LocalBusiness` + `HealthAndBeautyBusiness` on `/` and `/kontakt` (name, address, geo, phone, hours, `sameAs` socials).
  - `Person` for Polona and Sabina on `/o-naju` (name, jobTitle, knowsAbout).
  - `Service` schema for each service audience page.
  - `Offer` schema on `/spletni-tecaji` sub-pages.
- OpenGraph and Twitter Card metadata per page; OG images generated at build (teal-branded, logo + page title).
- Slovenian-locale meta (`<html lang="sl">`, hreflang not needed for single-language).
- Human-reviewed Slovenian meta descriptions per page (not auto-generated).

### GEO — Generative Engine Optimization

The site must be first-class citizen-readable by LLM-backed search (ChatGPT Search, Perplexity, Claude, Gemini, Google AI Overviews). This means providing clean, structured, machine-accessible content in addition to the HTML.

- **`/llms.txt`** — Root-level index in the llms.txt standard format ([llmstxt.org](https://llmstxt.org)). Lists site sections with one-line summaries and links to the plain-text Markdown versions of each page. Example structure:
  
  ```
  # Biasana
  > Celosten center za telesno in duševno dobro počutje v Zagorju ob Savi. Kraniosakralna terapija, klasični pilates, gibalno-razvojne urice za dojenčke.
  
  ## Storitve
  - [Za nosečnice](/za-nosecnice.md): ...
  - [Za mamice in dojenčke](/za-mamice-in-dojencke.md): ...
  ...
  
  ## O Biasani
  - [O naju](/o-naju.md): ...
  - [Kontakt](/kontakt.md): ...
  ```

- **`/llms-full.txt`** — Single-file concatenation of all page Markdown for LLMs that prefer one-shot ingestion.

- **`.md` companion per page** — Every public page is also served as plain Markdown at the same path with `.md` suffix (e.g. `/za-nosecnice` and `/za-nosecnice.md`). These are derived directly from the MDX source, stripped of components, with frontmatter rendered as a header block. Generated at build time.

- **Stable, semantic HTML** — Each page uses a single `<h1>`, logical heading hierarchy, descriptive link text. No content hidden behind interactions (accordions for anything an LLM should read).

- **FAQ-shaped content** where natural — e.g., on `/cenik` the "Prvi obisk" explainer uses clear question-answer phrasing, and is emitted with `FAQPage` JSON-LD.

- **Citable facts** — Dates (est. 2012), credentials (Upledger, Pedosana, Contrology), location (Zagorje ob Savi), service-group counts (max 3 pilates, max 4 gibalne urice) appear in page body text, not only in marketing copy, so LLMs can extract and cite them accurately.

- **Author and entity disambiguation** — Polona's and Sabina's full names, roles, and `sameAs` links (Facebook, Instagram) are in `Person` schema; Biasana's legal name and VAT / matična številka (if applicable) are in `LocalBusiness` schema.

- **Open robots policy** — `robots.txt` explicitly allows LLM/AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, etc.) for the public site.

## 11. Success criteria

### Technical

- All 10 routes live at production domain.
- Lighthouse ≥95 (Performance / SEO / Accessibility) on `/` and `/za-mamice-in-dojencke`.
- LCP <2.0s on simulated 4G for the homepage.
- Zero runtime console errors.
- Full Slovenian diacritic rendering across all fonts actually shipped.
- `/llms.txt`, `/llms-full.txt`, and at least one `.md` companion are fetchable and well-formed.
- `/cenik` renders live data from the Google Sheet via the service account; an edit in the sheet appears on the site within one hour (ISR) or immediately via on-demand revalidation. Owners can add, rename, or remove columns per tab without any code change. Fallback snapshot renders correctly if the Sheets API call fails.

### Brand

- Palette tokens used consistently; no off-brand colors.
- Give You Glory used at 4–8 emotional-peak moments total across the site (audit by grep).
- Photos warm-graded consistently.
- Co-founder partnership present but not headlined.

### Business

- SMS tap-to-message works on iOS and Android with prefilled body.
- Email routing correct (Polona for therapies, Sabina for pilates/BiaBon), prefilled subjects present.
- Google Business Profile links to the new site.
- Facebook and Instagram bios updated with the new URL on launch day.

### Content

- Every page has original, voice-correct Slovenian copy reviewed and approved by Polona or Sabina.
- No Lorem. No placeholder testimonials. No uncredentialed claims.

### Legal

- Impressum visible in footer.
- No non-essential cookies in use → no consent banner.
- Testimonials have written consent on file.
- Parental photo releases on file for minors.

## 12. Phasing

| Phase                           | Scope                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0. Foundations**              | Verify Harabara Mais Demo license + Slovenian diacritics. Confirm domain ownership (e.g. `biasana.si`). Set up GitHub repo + Vercel + Plausible. Create Google Cloud project, enable Sheets API, create service account + private key, store credentials in Vercel env. Create Biasana pricing Google Sheet, share viewer access with service account, populate tabs + header rows (owner-chosen, schema-less). Collect testimonial consents, photo releases. |
| **1. Scaffold + design system** | Next.js 15 + Tailwind + shadcn scaffold. Brand tokens in CSS. Typography primitives. Base shared components (Header, Footer, Hero, CTA, Testimonial, PhotoCaption, CredentialRow, PrviKorak). Mobile-first layouts.                                                                                                                                                                                                                                           |
| **2. Content generation**       | Copywriter agent drafts all pages from source material. Owners review and edit. (Runs in parallel with Phase 1.)                                                                                                                                                                                                                                                                                                                                              |
| **3. Photography prep**         | Select, crop, warm-grade, export AVIF/WebP. Generate OG images.                                                                                                                                                                                                                                                                                                                                                                                               |
| **4. Page implementation**      | Build order: `/`, `/o-naju`, `/za-mamice-in-dojencke`, remaining audience pages, `/pilates`, `/spletni-tecaji`, `/cenik` (with Sheets loader, fallback snapshot, and on-demand revalidation endpoint), `/kontakt`.                                                                                                                                                                                                                                            |
| **5. SEO + GEO + polish**       | Metadata, JSON-LD, sitemap, robots, `/llms.txt`, `/llms-full.txt`, `.md` companions, Lighthouse passes, real-device QA, Slovenian proofing.                                                                                                                                                                                                                                                                                                                   |
| **6. Launch**                   | DNS cutover. Google Search Console verification. Social bios updated. Post-launch monitoring.                                                                                                                                                                                                                                                                                                                                                                 |

## 13. Open items and risks

1. **BiaBon fulfillment flow** — confirm whether it's email-invoice, printable voucher, or mailed physical item
2. **Animation vocabulary** — intentionally left unspecified in this spec. Develops during the build; revisit in a motion addendum after Phase 4 if the team wants a written reference.

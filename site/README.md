# Biasana — web

Next.js 15 + Tailwind site for Biasana, Zagorje ob Savi.

## Stack

- Next.js 15, App Router, TypeScript, React 19
- Tailwind CSS 3.4 with brand tokens
- MDX for editable copy under `content/`
- Motion (Framer Motion fork) for gentle reveals
- Local fonts: Harabara Mais, Give You Glory
- Google font: Open Sans

## Scripts

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run start
npm run typecheck
```

## Structure

```
app/             Route segments + layout + globals.css
  page.tsx         /
  o-naju/          /o-naju
  za-nosecnice/    …
  …
components/      Shared UI (Header, Footer, PageHero, PrviKorak, ServiceCard, …)
lib/             contact.ts (SMS/email helpers), nav.ts, cn.ts
content/         MDX drafts (owner-approved copy replaces ContentPlaceholder blocks)
public/
  brand/           logo SVGs
  fonts/           local font files
  photos/          renamed hero/service imagery
```

## Content workflow

Each `app/**/page.tsx` ships with `ContentPlaceholder` markers. These are
visible in development only and never render in production. As the AI
copywriter drafts land and get approved by Polona or Sabina, replace each
marker with the MDX body (or inline JSX if brevity wins).

No Lorem. No placeholder copy ships to production.

## Brand

- `teal-deep` `#005e58` · primary
- `teal-light` `#38817d` · accent
- `sage-mist` `#abcdc3` · soft layering
- `sage-paper` `#f5f8f6` · alternate ground

Display face `font-display` (Harabara). Emotional-peak face `.glory` (Give You
Glory) — reserved for 4–8 moments across the site. Body `font-body` (Open Sans).

## Conversion paths

All CTAs are `sms:` or `mailto:`. See `lib/contact.ts` for SMS prefill contexts
and email routing (Polona for therapies, Sabina for pilates / BiaBon).

## Todo after content is in

- Wire Google Sheets loader for `/cenik` (Phase 4)
- JSON-LD: LocalBusiness, Person, Service, Offer
- `/llms.txt`, `/llms-full.txt`, per-page `.md` companions
- OG images at build
- Real-device QA

# Biasana — Content Sources

Raw material the copywriter agent mines for voice, bios, testimonials, and service-page drafts.

## In-repo

- `business.md` — positioning, services, philosophy, team bios (verified)
- `services.md` — short-form service list
- `dataset_facebook-posts-scraper_2026-03-23_12-45-09-495.json` — historical FB posts (voice samples, event announcements, testimonials)
- `dataset_facebook-pages-scraper_2026-03-23_12-41-22-878.json` — FB page metadata, reviews
- `Photos/` — hero, service, and portrait imagery (Naslovna, Sabina, Pilates, Kranio*, Gibalne urice, Nosečnice vadba, foto-*)

## External articles (to fetch during content phase)

1. **Svet24.si** — *"Bitka Sabine Miklavčič: 'Moja pot iz brezna …'"* — personal story / long-form interview with Sabina. Likely source for "O naju" narrative voice and resilience framing.
2. **Bibaleze.si** — *"Prednosti kraniosakralne terapije za dojenčke"* — authority piece on craniosacral benefits for infants. Source for "Za mamice in dojenčke" service page.
3. **Zon.si (Zasavske onlajn novice)** — *"Bolezni izhajajo tudi iz naše nepovezanosti s samim seboj"* — interview touching on Biasana's philosophy. Source for homepage / philosophy copy.

During implementation the copywriter agent should fetch these via WebFetch, quote accurately, and link them in the "V medijih" section (if we add one) or use as paraphrased source.

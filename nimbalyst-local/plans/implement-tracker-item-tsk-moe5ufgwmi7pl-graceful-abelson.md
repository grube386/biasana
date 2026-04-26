---
tracker: tsk_moe5ufgwmi7pl9
title: Fix the look of the stripes
status: planned
---
# Fix the look of the stripes (CourseCard + MediaItem)

## Context

The "stripe" card components on `/spletni-tecaji` (course list) currently render an uppercase eyebrow (the `.eyebrow` class) above the heading and push the "Preberi več →" link to the bottom of each card with `mt-auto pt-6`. The result is a card layout where the small label on top adds visual noise and the read-more link sits visually disconnected from the body copy.

The user wants:
1. The eyebrow on these stripes **fully removed** (the small uppercase label above the title).
2. The "Read more" link to sit **closer to the body of the text** instead of being floated to the card's bottom.

The `.eyebrow` CSS class itself stays — it's still used by `Program`, `EmailContact`, and `PricingTables`. We're only stopping its use inside the stripe components.

## Files to modify

Only one file is touched:

- `site/mdx-components.tsx`
  - `CourseCard` (currently lines 548–572) — used at `site/app/spletni-tecaji/page.mdx` (5 cards, lines 31–54)

No other components, MDX content, or CSS files need to change.

## Changes

### 1. `CourseCard` — `site/mdx-components.tsx` (~lines 548–572)

**Remove** the entire eyebrow row (the `<div className="flex items-center justify-between">` block at lines 556–561) and **replace** it with a teacher-only row. The eyebrow is the `<span className="eyebrow text-teal-light">{tag}</span>`; the right-aligned `z {teacher}` label is plain `text-xs` and is **not** an eyebrow — keep that information by aligning it to the right of the card on its own row.

**Adjust spacing** so the title is no longer offset from a (now-gone) eyebrow, and the "Preberi več →" link sits close to the body instead of being pushed to the card bottom:

- Title: change `mt-4` → no top margin (it's the first content element now).
- Description: keep `mt-3` (12 px from title — unchanged).
- "Preberi več →": change `mt-auto pt-6` → `mt-3` (12 px from body, no longer floated to bottom).

The card keeps `flex h-full flex-col` and the grid still matches row heights — only the link moves up.

The `tag` prop becomes unused inside the component but is still passed by the MDX pages. Leave the `tag?: string` prop in the type signature so MDX content (which still passes `tag="..."`) doesn't break, and so removing it from MDX is a separate cleanup the user can do later if desired. (We are not asked to edit the MDX pages.)

## What we are NOT doing

- Not touching `PageHero`, `HomeHero`, or `PrviKorak` `MediaItem` — those have eyebrow + CTA buttons (no "Read more" link), and the user excluded them from scope.
- Not touching `ServiceCard` (home-page service cards) — user excluded it.
- Not removing the `.eyebrow` / `.eyebrow-white` classes from `globals.css` — they're still used by `Program`, `EmailContact`, `PricingTables`.
- Not removing `tag=` / `publisher=` props from MDX pages.

## Verification

1. Start the dev server: `pnpm --filter biasana-site dev` (or `cd site && pnpm dev`).
2. Visit `http://localhost:3000/spletni-tecaji`:
  - Each of the 5 course cards no longer shows the small uppercase tag (e.g. "4-TEDENSKI TEČAJ", "POSTPARTUM").
  - The teacher label ("z Polona", "z Sabina") still shows, right-aligned at the top of each card.
  - "Preberi več →" sits ~12 px under the description, not at the card bottom.
3. Visit `http://localhost:3000/o-naju`:
  - The 3 media-mention items no longer show the publisher eyebrow ("SVET24.SI" etc.) above the title.
  - "Preberi članek →" sits ~12 px under the body copy.
4. Use `mcp__nimbalyst-mcp__capture_editor_screenshot` (or the `browse` skill) to take a before/after screenshot of `/spletni-tecaji` and `/o-naju` and visually confirm.
5. Run `pnpm --filter biasana-site typecheck` and `pnpm --filter biasana-site lint` to confirm no regressions.
6. After verification, mark the tracker item done with `tracker_update id="tsk_moe5ufgwmi7pl9" status="done"`.

# Fix tall, unbalanced bio descriptions on About Us (`/o-naju`)

**Tracker:** `tsk_mofpiowxsmftga` — *"Check out the About Us page and figure out why the descriptions are so tall and don't fill the page properly."*

## Context

The About Us page (`/o-naju`) renders Polona's and Sabina's bios with the
`<PersonBlock>` MDX component (`site/mdx-components.tsx:281–336`). Visually
the descriptions feel oversized and the side-by-side columns don't balance:
the text column stretches taller than the portrait image, producing dead
space next to the photo and a sparse, stretched feel — exactly what the
tracker reports.

Three compounding causes drive this:

1. **The `<h2>` inside `<PersonBlock>` uses the global `MdxH2` styling**
   (`mdx-components.tsx:752–759`), which is `text-display-lg`
   (`clamp(2.25rem, 5.5vw, 4rem)` ≈ 36–64 px). That heading is sized for
   full-width section titles; inside a 7/12-column bio block (~640 px wide
   on desktop) it dominates and pushes the bio tall.
2. **Vertical rhythm compounds**: the text column has `space-y-5` (20 px
   between every child) AND the `<h3>` brings its own `mt-8` (32 px) /
   `mb-3`. The cumulative gaps between the name, role, paragraphs, and
   bullet list make the column read very tall relative to its word count.
3. **The image is a fixed `aspect-[4/5]`** (`mdx-components.tsx:312`). At
   col-span-5 (~440 px wide) it ends up ~550 px tall. The text column lands
   at ~640–700 px tall, so the photo never reaches the bottom of the
   row → that's the "doesn't fill the page properly" gap below the photo.

## Goal

Tighten the bio block so:

- The two bios feel proportioned to the column, not hero-scale.
- The image and text column finish at roughly the same height on desktop.
- No regressions on mobile (single column stack — must still breathe).

## Recommended approach

All changes are scoped to `<PersonBlock>` in
`site/mdx-components.tsx` (lines 281–336). No content changes needed in
`site/app/o-naju/page.mdx`.

### 1. Scope down typography inside the bio column

Update the text-column wrapper (currently line 327) to override the global
heading sizes only inside `<PersonBlock>`:

```tsx
'space-y-4 text-[1.02rem] leading-[1.65] text-ink-soft',
'[&_h2]:text-display-md [&_h2]:mb-1',
'[&_h3]:text-xl [&_h3]:mt-1 [&_h3]:mb-2 [&_h3]:font-display [&_h3]:text-teal-mid [&_h3]:tracking-normal',
'[&_p]:max-w-none [&_ul]:max-w-none',
```

Why each change:
- `space-y-4` (was `space-y-5`): drops 20 → 16 px between children.
- `leading-[1.65]` (was `1.7`): subtle line-height tightening — keeps
  comfortable reading but reclaims vertical space.
- `[&_h2]:text-display-md` swaps the 36–64 px hero scale for
  `clamp(1.75rem, 4vw, 2.75rem)` ≈ 28–44 px, appropriate for an in-column
  heading.
- `[&_h2]:mb-1` lets the role subtitle (`<h3>`) sit close to the name.
- `[&_h3]:mt-1` removes the global `mt-8` shove so the role line hugs the
  name. `text-xl` (20 px) is right for a subtitle vs. `text-2xl` (24 px).
- `[&_p]:max-w-none [&_ul]:max-w-none` neutralizes the global
  `max-w-reading` (46 rem = 736 px) — it's larger than the 640 px column
  anyway, but explicit beats implicit and prevents future width drift.

### 2. Let the photo stretch to fill the row

Replace the image wrapper (line 312) so the image matches the text-column
height instead of locking to a 4:5 aspect ratio.

Current:
```tsx
<div className="relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-card">
```

New:
```tsx
<div className="relative aspect-[4/5] md:aspect-auto md:h-full md:min-h-[32rem] overflow-hidden rounded-[24px] shadow-card">
```

Why:
- Mobile keeps the `aspect-[4/5]` portrait — single column stack still
  needs a sensible photo height.
- Desktop drops the aspect lock and uses `h-full` so the column flex/grid
  cell defines the height. Result: the image grows to match text height
  with `object-cover` cropping gracefully.
- `min-h-[32rem]` (512 px) is a floor so a very short bio (e.g. Sabina's
  if shortened later) still presents a substantial portrait.

### 3. (No-op verification) confirm grid stays as-is

Keep `md:col-span-5` (image) / `md:col-span-7` (text) and `gap-14` — the
balance issue is fixed by the height change above, not by re-splitting
columns.

## Files to modify

- `site/mdx-components.tsx` — `PersonBlock` only (lines 281–336). Two
  small edits: image wrapper className and text-column className.

No new files. No changes to `o-naju/page.mdx`. No content rewrites.

## Verification

1. **Build/typecheck**:
   ```bash
   cd site && npm run lint && npm run build
   ```
2. **Visual check (dev server)**:
   ```bash
   cd site && npm run dev
   ```
   Open http://localhost:3000/o-naju and confirm:
   - **Desktop ≥ 1024 px**: Polona's photo and bio finish at the same
     height — no large empty space below the photo. Bio name/role read
     proportional to the column (not hero-scale). Same for Sabina (mirror
     layout via `align="right"`).
   - **Tablet 768–1024 px**: still side-by-side, image stretches to text
     height, no overflow.
   - **Mobile < 768 px**: stacks image-then-text. Image keeps the 4:5
     portrait crop (no over-tall image, no awkward stretch).
3. **No regression on other pages**: the `<PersonBlock>` is only used on
   `/o-naju` (verified — only `o-naju/page.mdx` references it), so risk is
   isolated.
4. **Tracker update**: on completion, `tracker_update id="tsk_mofpiowxsmftga" status="done"`.

## Out of scope

- Bio copy edits (length/tone) — that's an editorial decision for Polona
  and Sabina, not a layout fix.
- Any redesign of `<Hero>` or the `<Section variant="sage">` "Skupaj"
  block lower on the page — those don't use `<PersonBlock>` and the
  tracker is specifically about the bio descriptions.

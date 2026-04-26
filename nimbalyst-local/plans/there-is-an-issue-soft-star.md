# Fix: Button hover text turns teal — global `a:hover` overrides button text color

## Root cause

In `site/app/globals.css` line 67, the global link hover rule excludes only `.btn-shimmer`:

```css
a:not(.btn-shimmer):hover {
  color: var(--teal-dark);
}
```

The header button works because it uses `btn-shimmer`. But PageHero and HomeHero buttons use `btn-primary`, `btn-white`, `btn-outline-white` — none of which are excluded. On hover, their text color flips from white to teal-dark. Since the shimmer gradient uses `currentColor`, the pattern also turns teal-dark instead of white, making it nearly invisible against the dark button background.

## Fix — one line change

**`site/app/globals.css`, line 67**

Expand the `:not()` selector to exclude all button variants:

```css
/* BEFORE */
a:not(.btn-shimmer):hover {

/* AFTER */
a:not(.btn-shimmer, .btn-primary, .btn-ghost, .btn-white, .btn-outline-white):hover {
```

This keeps the global link hover color for regular text links while leaving button text colors untouched.

## Why this is the right fix

- The global `a` base style (line 61) also sets `color: var(--teal-deep)`, but the button variants override that with their own `@apply text-white` / `@apply text-teal-deep`. The base color isn't the issue — it's the `:hover` override that the buttons can't beat because `@layer base` specificity + `:hover` pseudo-class wins over the non-hovered `@apply`.
- The header button already established the pattern of excluding button classes from this rule — the fix just extends it to cover all variants.
- No opacity, blend-mode, or z-index changes needed. The shimmer at 0.75 opacity is intentionally strong for the vzorec pattern reveal.

## Verification

1. Open any subpage (e.g. `/za-odrasle`) — hover the `btn-primary` CTA in PageHero: text stays white, white vzorec pattern sweeps through visibly
2. Open homepage — hover `btn-white` and `btn-outline-white` on dark hero: text color stays correct on hover
3. Header SMS button (`btn-shimmer`): still works as before (already excluded)
4. Regular text links (prose, nav): still transition to `var(--teal-dark)` on hover
5. `btn-ghost` on any page: text stays `teal-deep` (its intended color), not overridden to `teal-dark`

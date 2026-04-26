# Plan: Header Logo Hover Animation

## Context

The header logo currently uses a static SVG image (`logo.svg`). An animated version (`logo-animated.svg`) exists and is used in the homepage hero — it reveals the logo piece by piece using SVG clip-path masks with SMIL `<animate>` elements.

The goal: use that same reveal animation in the header, but **only on hover** (not on page load). The logo should appear fully visible immediately, then play the reveal animation at **2x speed** when the user hovers over the logo or the "Biasana" text.

## Approach

Replace the static `<Image>` in `Logo.tsx` with an inline SVG React component that has SMIL animations controlled via JavaScript.

### How it works

1. **On load**: Clip-path shapes are set to their final values (fully revealed) — the logo is immediately visible
2. **On hover**: JavaScript resets clip-path shapes to their initial (hidden) values, then calls `beginElement()` on each `<animate>` with staggered `setTimeout` delays — producing the reveal animation at 2x speed
3. **On re-hover**: Previous animations are ended, shapes reset, and the animation replays cleanly

### 2x speed timing

| Clip | Shape | Duration | Stagger delay |
|------|-------|----------|---------------|
| clip-1a | circle r: 0→19 | 0.35s | 0ms |
| clip-1b | circle r: 0→34 | 0.35s | 150ms |
| clip-2 | circle r: 0→55 | 0.4s | 275ms |
| clip-3 | rect x: 140→75, w: 0→65 | 0.35s | 375ms |
| clip-4 | rect w: 0→75 | 0.35s | 700ms |

## File changes

### 1. Create `site/components/LogoMark.tsx` (new)

Client component containing the inline SVG with:
- All gradient definitions from `logo-animated.svg` (converted to JSX camelCase)
- 5 clip-path definitions with shapes at **final** values and `<animate begin="indefinite" fill="freeze">` at halved durations
- 5 path elements with `clipPath` references
- `useRef` for each shape element and each `<animate>` element
- `useId()` prefix on all IDs to avoid conflicts (Logo renders in both Header and Footer)
- Props: `{ animating: boolean; className?: string }`
- `useEffect` watching `animating` → when true: `endElement()` on all animates, reset shape attributes to hidden values, then `beginElement()` with staggered `setTimeout` calls

### 2. Modify `site/components/Logo.tsx`

- Add `'use client'` directive
- Replace `<Image>` with `<LogoMark>`
- Add `useState` for `animating`
- Add `onMouseEnter` / `onMouseLeave` on the `<Link>` to toggle `animating`

The Logo component API (`variant`, `invert`, `className`) stays identical — Header.tsx and Footer.tsx need zero changes.

## Key files

- `site/components/Logo.tsx` — modify
- `site/components/LogoMark.tsx` — create
- `site/public/brand/logo-animated.svg` — reference (path data, gradients, clip-path values)
- `site/components/Header.tsx` — verify no regressions (no changes needed)
- `site/components/Footer.tsx` — verify no regressions (no changes needed)

## Verification

1. Run `npm run dev` and open the site
2. On page load, the header logo should appear fully visible with no animation
3. Hover over the logo mark — the reveal animation plays at 2x speed
4. Hover over the "Biasana" text — same animation triggers
5. Move mouse away and hover again — animation replays cleanly
6. Scroll down (header background changes) — logo still works correctly
7. Check the footer logo — same hover animation works there too
8. Check mobile hamburger menu — no regressions

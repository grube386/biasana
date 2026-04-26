# Touch Vzorec Ripple Animation

## Context

On mobile, when a user touches the screen, we want a circular ripple animation to bloom from the touch point, revealing the vzorec pattern in teal. The animation is **touch-duration-dependent**: it expands while the finger is held down and fades out when released. A quick tap produces a brief flash; a long press holds the pattern visible.

## Approach

Three files touched: one new component, two small edits.

### 1. New file: `site/components/TouchVzorec.tsx`

Client component with two-phase touch tracking:

**Phase 1 — Expand (touchstart):**
- Creates a `<div>` with class `vzorec-ripple` at the touch point
- `clip-path: circle()` animates from 0 to 180px over ~500ms
- Opacity rises to 0.25
- Animation uses `forwards` fill — stays at full size if finger is still held

**Phase 2 — Release (touchend / touchcancel):**
- Adds class `releasing` to the ripple element
- Opacity fades to 0 over ~300ms
- On `animationend` of the fade, removes the element from DOM

**For a tap** (~100ms touch): the circle barely starts expanding before the fade kicks in — results in a small, brief flash. **For a long press**: the circle fully expands, pattern stays visible, then fades on lift.

Implementation details:
- Renders a fixed, full-viewport `<div>` container (`pointer-events: none`, `z-30`)
- Tracks each touch by `Touch.identifier` in a `Map<number, HTMLElement>` so multi-touch works correctly (each finger's ripple fades independently on its own `touchend`)
- Listens on `document` with `{ passive: true }` — never blocks scrolling or taps
- Caps concurrent ripples at 5
- Bails out if `prefers-reduced-motion: reduce` or no touch support
- Direct DOM manipulation (no React state/re-renders)

### 2. Modify: `site/app/globals.css`


### 3. Modify: `site/app/layout.tsx`

Import and mount `<TouchVzorec />` before `<Header />` inside `<body>`.

## Why this works well

- **Touch-responsive**: animation duration mirrors the physical gesture — tap = flash, hold = sustained
- **Teal on light**: mask-image + teal fill means the pattern is visible on light backgrounds
- **No scroll interference**: `passive: true` listener, `pointer-events: none` container
- **Multi-touch correct**: tracks each finger by `Touch.identifier`, independent lifecycle per ripple
- **Performance**: reuses cached SVG, GPU-composited `clip-path`, max 5 DOM nodes
- **Zero bundle cost**: no new dependencies, ~60 lines of vanilla React

## Verification

1. Start dev server, open on mobile or Chrome DevTools touch simulation
2. **Quick tap** on light section — small brief teal pattern flash at touch point
3. **Long press** on light section — pattern expands fully, holds while finger is down, fades on release
4. Touch on dark/teal section — ripple fires (subtler teal-on-teal)
5. Scroll the page — not blocked or delayed
6. Tap links/buttons — work normally, ripple appears alongside
7. Multi-finger touch — each finger gets its own ripple, each fades independently
8. `prefers-reduced-motion` — no ripples spawn

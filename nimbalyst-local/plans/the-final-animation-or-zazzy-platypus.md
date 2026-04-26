# Touch Vzorec Ripple — Refinements

## Context

The initial ripple animation (180px radius, 500ms expand, no tracking) was too large, slow, and static. This plan shrinks the max circle to 50px, adds a soft vignette edge, speeds up the animation, and makes the ripple follow the finger during scroll/drag.

## Changes

### 1. `site/app/globals.css` — `.vzorec-ripple` and `@keyframes vzorec-expand`

**Element size:** 110×110px (down from 360×360 — only needs to fit a 50px radius)

**Soft edge:** Replace `background-color: var(--teal-base)` with a radial gradient that is solid teal from 0→40px, then fades to transparent at 50px. This creates a 10px soft vignette at the outer ring:

```css
background: radial-gradient(circle at 50% 50%,
  var(--teal-base) 0,
  var(--teal-base) 40px,
  transparent 50px
);
```

**Mask tile size:** Reduce from `140px auto` → `70px auto` so the vzorec pattern tiles proportionally within the smaller element.

**Expand duration:** `500ms` → `200ms` (snappier response, quicker flash on tap)

**Keyframe endpoint:** `circle(180px at 50% 50%)` → `circle(50px at 50% 50%)`

### 2. `site/components/TouchVzorec.tsx`

**Add `touchmove` tracking:** New handler reads `touch.clientX/Y` for each active ripple and updates `el.style.left/top`. Since the container is `position:fixed` and coordinates are viewport-relative, this moves the ripple with the finger during scroll or drag.

```ts
function onTouchMove(e: TouchEvent) {
  for (const touch of Array.from(e.changedTouches)) {
    const el = ripples.get(touch.identifier);
    if (!el) continue;
    el.style.left = `${touch.clientX}px`;
    el.style.top = `${touch.clientY}px`;
  }
}
document.addEventListener('touchmove', onTouchMove, { passive: true });
// + remove in cleanup
```

**Faster release transition:** `300ms` → `180ms`

## Verification

1. Dev server: `cd site && npm run dev`
2. Chrome DevTools → enable touch simulation
3. **Quick tap** — small (~20px) teal flash appears instantly then vanishes
4. **Long press** — circle expands to ~50px, soft edge visible, holds while finger is down, fades on release
5. **Scroll while holding** — ripple tracks the finger up/down the page
6. **Multi-touch** — each finger gets its own ripple, independent lifecycle
7. `prefers-reduced-motion` — no ripples

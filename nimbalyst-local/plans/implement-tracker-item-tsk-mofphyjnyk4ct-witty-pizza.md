# Hero pattern minimum size

Tracker: `tsk_mofphyjnyk4cto` — "The pattern on the page hero doesn't become too small."

## Context

The `PageHero` component (used on every subpage — `/o-naju`, `/za-nosecnice`, `/za-odrasle`, etc.) renders the flagship vzorec motif as a `background-image` on a left column that spans 50% of the viewport. Its tile is sized purely as a percentage:

```tsx
// site/components/PageHero.tsx:60–75
<div
  aria-hidden
  className="pointer-events-none absolute inset-y-0 left-0 w-1/2"
  style={{
    backgroundImage: 'url(/brand/vzorec-clean-rotated-90.svg)',
    backgroundRepeat: 'repeat-y',
    backgroundSize: '35% auto',
    ...
  }}
/>
```

Because the column is `w-1/2`, the rendered tile width is `viewport × 0.5 × 0.35 = viewport × 0.175`. At common mobile widths the motif collapses well below the threshold where it reads as the Biasana pattern:

| Viewport | Tile width |
| --- | --- |
| 320 px (small phone) | ~56 px |
| 375 px (iPhone) | ~66 px |
| 420 px | ~74 px |
| 571 px | 100 px ← target floor |

The user wants the tile to stop shrinking at **100 px**, while keeping the existing fluid `35%` behavior on wider viewports where the motif looks right.

The other pattern surfaces are already sized in absolute units and don't suffer from this:
- `.vz` overlay (`site/app/globals.css:308`) — fixed `360px auto`
- `.vzorec-ripple` (touch effect, `globals.css:239`) — fixed `150px` mask
- Button shimmer mask, `.divider-pattern` — fixed sizes

So the change is scoped to `PageHero` only.

## Approach

Replace the static `35% auto` with `max(100px, 35%) auto`. The CSS `max()` function is valid inside `background-size` and is supported in all evergreen browsers (Chrome 79+, Firefox 75+, Safari 13.1+). It keeps fluid scaling above the threshold and clamps at 100 px below it — exactly the requested behavior, without media queries or extra component logic.

## Change

**File:** `site/components/PageHero.tsx` (line 68)

```diff
-          backgroundSize: '35% auto',
+          backgroundSize: 'max(100px, 35%) auto',
```

That's the entire functional change.

## Verification

1. Run the site dev server: `cd site && pnpm dev` (or `npm run dev` — match what the project uses).
2. Open a subpage that uses `PageHero` — e.g. `/o-naju` or `/za-nosecnice`.
3. Use DevTools responsive mode to check tile width at:
   - **1440 px** desktop — pattern tile should be ~252 px (unchanged from before).
   - **768 px** tablet — pattern tile should be ~134 px (still in `35%` regime).
   - **571 px** — exactly at the crossover; tile = 100 px.
   - **375 px** iPhone — tile should now be **100 px** (was ~66 px).
   - **320 px** smallest — tile should still be **100 px** (was ~56 px).
4. Inspect the left pattern column element and confirm the computed `background-size` is `max(100px, 35%) auto` and the rendered tile measures ≥100 px wide.
5. Sanity-check the `tone="deep"` variant on whichever subpage uses it (e.g. any page that passes `tone="deep"` to `Hero`) — opacity/blend logic is untouched but worth a glance.
6. Confirm `HomeHero` is unchanged (no regression on `/`).

## After completion

Update the tracker item:

```
tracker_update id="tsk_mofphyjnyk4cto" status="done"
```

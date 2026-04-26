# Add dropdown to "Spletni tečaji" navigation menu

## Context

The "Spletni tečaji" (Online Courses) nav item currently links directly to `/spletni-tecaji`. There are 5 individual course pages under `/spletni-tecaji/<slug>`, but users can't discover them from the header. This task adds a hover dropdown on desktop and an expandable submenu on mobile to surface the individual courses.

## Files to modify

| File | Change |
| --- | --- |
| `site/components/Header.tsx` | Add dropdown (desktop) and expandable submenu (mobile) for the courses nav item |

No changes to `site/lib/nav.ts` or `site/lib/courses.ts` — the nav data structure stays flat, and course data is imported as-is.

## Implementation

### 1. Add imports and state

In `Header.tsx`:
- Import `useRef, useCallback` from React alongside existing imports
- Import `COURSES` from `@/lib/courses`
- Add constant: `const DROPDOWN_HREF = '/spletni-tecaji'`
- Add state: `dropdownOpen` (desktop hover), `mobileCoursesOpen` (mobile expand)
- Add ref: `dropdownTimeout` for hover intent delay (prevents flicker when mouse moves from trigger to panel)

### 2. Fix `isActive` for child routes

Currently `pathname === item.href` misses child course pages. Add helper:
```ts
const isActive = (href: string) => {
  if (href === DROPDOWN_HREF) {
    return pathname === href || (pathname?.startsWith(href + '/') ?? false);
  }
  return pathname === href;
};
```
Replace both usages of `pathname === item.href` (desktop line 81, mobile line 195) with `isActive(item.href)`.

### 3. Fix `overflow-hidden` clipping issue

The `tealTop` header state applies `overflow-hidden` (line 48), which would clip the dropdown panel. The `.vz` pattern overlay already uses `position: absolute; inset: 0` and is self-contained, so `overflow-hidden` on the header is unnecessary. Remove it from the tealTop class string.

### 4. Desktop dropdown (inside `NAV_PRIMARY.map()`)

When `item.href === DROPDOWN_HREF`, render a wrapper `<div className="relative">` instead of a plain `<Link>`:

- **Wrapper**: `onMouseEnter` opens dropdown (clears any pending close timeout), `onMouseLeave` closes with 150ms delay. Also handles `onFocusCapture`/`onBlurCapture` for keyboard users.
- **Trigger**: Still a `<Link>` to `/spletni-tecaji` (clicking navigates). Add small chevron SVG that rotates when open. Carries `aria-haspopup="true"`, `aria-expanded`.
- **Panel**: Absolutely positioned below trigger. Shows/hides with opacity + translate-y transition (200ms). Contains:
  - 5 course links showing `title` and `tag`
  - "Vsi tečaji →" link at bottom
- **Styling**: `bg-white shadow-card rounded-xl border border-rule` — always light background regardless of header color mode. Width ~340px.

### 5. Mobile submenu (inside mobile `NAV_PRIMARY.map()`)

When `item.href === DROPDOWN_HREF`, render a flex row with:
- `<Link>` to `/spletni-tecaji` (flex-1, clicking navigates and closes menu)
- `<button>` with chevron toggle (expands/collapses submenu)

Expanded content uses CSS grid-rows transition (`grid-rows-[0fr]` → `grid-rows-[1fr]`, 300ms) containing the 5 course links indented with `pl-5`, smaller text (`text-lg` vs parent `text-2xl`).

### 6. Reset state on route change

Update the existing `pathname` effect to also reset `dropdownOpen` and `mobileCoursesOpen`.

## Accessibility

- Desktop trigger: `aria-haspopup="true"`, `aria-expanded`, `aria-controls`
- Desktop panel: `role="menu"`, items get `role="menuitem"`
- `Escape` key closes dropdown and returns focus to trigger
- `onBlurCapture` closes dropdown when focus leaves the wrapper entirely
- Mobile toggle: `aria-expanded`, descriptive `aria-label`
- `prefers-reduced-motion` already handled by existing global CSS rule

## Verification

1. Run dev server (`npm run dev` in `site/`)
2. **Desktop (lg+ viewport)**:
  - Hover over "Spletni tečaji" — dropdown appears with 5 courses + "Vsi tečaji" link
  - Move mouse from trigger into dropdown — no flicker
  - Mouse leaves dropdown — closes after brief delay
  - Click "Spletni tečaji" text — navigates to `/spletni-tecaji`
  - Click a course item — navigates to that course page
  - Tab through nav — dropdown opens on focus, closes when focus leaves
  - Press Escape — dropdown closes
  - Test in all 3 header states: transparent (homepage), tealTop (other pages, not scrolled), scrolled
3. **Mobile (<lg viewport)**:
  - Open hamburger menu
  - Tap chevron next to "Spletni tečaji" — submenu expands/collapses
  - Tap "Spletni tečaji" text — navigates to listing page
  - Tap a course — navigates to course page
4. Verify no visual regression on other nav items
5. Verify active state highlights correctly on course child pages

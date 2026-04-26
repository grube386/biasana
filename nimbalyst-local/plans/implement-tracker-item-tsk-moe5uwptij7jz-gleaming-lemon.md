# Plan: Mobile Menu — Home/Close Buttons + Hamburger Fixes

## Context

Three issues with the mobile menu in `Header.tsx`:

1. **White-on-white X button:** When the menu is open, the toggle button stays white (because `lightText` is true on certain pages), making it invisible against the `#fbfbf9` menu background.
2. **No Home link:** There's no "Domov" link in `NAV_PRIMARY` — on desktop the logo serves that purpose, but mobile users have no obvious way to get home from the menu.
3. **Bad hamburger icon:** Currently two 1px-tall lines — too thin and non-standard. Should be a classic 3-line hamburger.

## Changes

**Single file:** `site/components/Header.tsx`

### 1. Fix toggle button visibility when menu is open

The toggle button color class (line 143-148) currently depends only on `lightText`. When `open` is true, force dark styling regardless of `lightText`:

```
lightText && !open  →  white text/border (over teal/transparent header)
open                →  teal-deep text/border (over white menu background)
otherwise           →  teal-deep text/border (scrolled state)
```

### 2. Replace hamburger with 3-line classic icon

Replace the current two `<span>` lines (lines 151-152) with three lines:
- Each line: `h-0.5 w-5 bg-current` (2px tall instead of 1px)
- Spacing: `gap-[5px]` on the container
- When open, top line rotates +45° and translates down, bottom line rotates -45° and translates up, middle line fades to `opacity-0`

### 3. Add Home + Close toolbar inside the mobile menu

Insert a `flex justify-between` row at the top of the menu content (before `<nav>`):

- **Left:** `<Link href="/">` with house SVG icon + "Domov" label
- **Right:** `<button onClick={() => setOpen(false)}>` with "Zapri" label + X SVG icon

Both styled as pill-shaped bordered buttons matching the design language: `rounded-full border border-teal-deep/15 px-4 py-2.5 text-teal-deep text-sm font-semibold`

### 4. Adjust top padding

Change `pt-24` → `pt-20` on the inner container (line 162) since the toolbar adds its own spacing via `mb-6`.

### What stays unchanged

- All nav links, SMS CTA, info text unchanged
- `useEffect` hooks (pathname close, body overflow lock) unchanged
- No new imports needed

## Verification

1. Run `cd site && npm run dev`
2. Open the site on a mobile viewport
3. **Hamburger:** Verify 3-line icon appears, lines are clearly visible
4. Open the menu — verify the hamburger X is visible (teal on white, not white on white)
5. Verify "Domov" and "Zapri" buttons appear at top of menu content
6. Click "Zapri" — menu closes
7. Click "Domov" — navigates to `/`, menu closes
8. Test on homepage (transparent header) and inner pages (teal header) to confirm the toggle button colors are correct in all states

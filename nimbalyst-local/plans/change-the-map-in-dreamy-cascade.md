# Contact Form: Switch Map to Google Maps

## Context

The contact page (`/kontakt`) currently embeds an OpenStreetMap iframe showing Biasana's location in Zagorje ob Savi. The user wants to switch to Google Maps and update the address to the specific street address: **Cesta Borisa Kidriča 17, 1410 Zagorje ob Savi**.

## Approach

Use Google Maps' free iframe embed (no API key required). This matches the current pattern — just swap the iframe `src` URL. No new dependencies needed.

## Changes

### 1. Update the `Map` component — `site/mdx-components.tsx` (lines 489–501)

Replace the OpenStreetMap iframe URL with a Google Maps embed URL:
```
https://maps.google.com/maps?q=Cesta+Borisa+Kidriča+17,+1410+Zagorje+ob+Savi&t=&z=16&ie=UTF8&iwloc=&output=embed
```

Also update `referrerPolicy` to omit or keep as-is (Google Maps embeds work fine with it).

### 2. Update the contact page address — `site/app/kontakt/page.mdx` (line 71–72, 74)

- Change displayed address text from "Zagorje ob Savi, 1410" to "Cesta Borisa Kidriča 17, 1410 Zagorje ob Savi"
- Update the `<Map>` component's `address` prop to the full address

### 3. Update the address constant — `site/lib/contact.ts` (line 8)

- Change `ADDRESS_LINE` from `'Zagorje ob Savi, 1410, Slovenija'` to `'Cesta Borisa Kidriča 17, 1410 Zagorje ob Savi, Slovenija'`

## Verification

1. Run `npm run dev` in the `site/` directory
2. Open `/kontakt` in browser
3. Confirm the Google Maps embed loads with a marker at Cesta Borisa Kidriča 17
4. Confirm the displayed address text is updated
5. Check the map is responsive and renders within the rounded container

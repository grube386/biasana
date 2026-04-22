# /content

MDX copy for each route lives here during the content phase. Each file mirrors
the URL path and is imported by the corresponding `app/**/page.tsx` once
the draft is approved.

Planned structure (created as content is drafted):

```
content/
  home.mdx
  o-naju.mdx
  za-nosecnice.mdx
  za-mamice-in-dojencke.mdx
  za-otroke.mdx
  za-odrasle.mdx
  pilates.mdx
  spletni-tecaji.mdx
  spletni-tecaji/
    shiatsu-masaza-za-dojencke.mdx
    nosecnice.mdx
    mamice-po-porodu.mdx
    pilates-za-hrbtenico.mdx
    pilates-studijski.mdx
  cenik.mdx
  kontakt.mdx
```

Frontmatter convention:

```yaml
---
title: Za nosečnice
description: …
heroImage: /photos/kranio-nosecnice.jpg
ogImage: /og/za-nosecnice.png
smsPrefill: pregnancy
---
```

No Lorem. No placeholders ship to production. Replace `ContentPlaceholder`
blocks in the page shells with the MDX bodies as they land.

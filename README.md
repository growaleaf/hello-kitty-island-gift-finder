# Hello Kitty Island Adventure Gift Finder

Static page. Type an item to see which of the 13 characters wants it and at what star
tier, or pick a character to see their full 3-star / 2-star / 1-star gift lists.

Data source: pcgamer.com Hello Kitty Island Adventure gifts guide, published 2025-01-31,
re-fetched and confirmed 2026-11-23. Single source — other guides (Pocket Gamer, Prima)
disagree on some top gifts, and this may predate later game patches.

Files:
- `index.html` — page and UI logic
- `data.js` — parsed gift data plus `hkiaSearchItem` / `hkiaGetCharacter` lookups
- `test.js` — known-answer tests, run with `node test.js`

No game assets, logos, or Sanrio artwork. Plain text only.

# Content needed

Everything below is either a placeholder or an assumption made to ship a
complete page. Nothing fake-looking (no invented names, dates, or numbers)
was used — gaps are bracketed placeholders instead. Replace before final
submission where you can; the rest can ship as-is if the deadline is close.

## Blocking (visibly a placeholder on the page)

- **About → Mission / Vision** (`src/components/sections/about.tsx`) — shows
  `[NACOS Nile chapter mission statement]` / `[...vision statement]`. Needs
  real copy, or an official source to quote/paraphrase.
- **Community → Email** (`src/components/sections/community.tsx`) — shows
  `[NACOS Nile chapter email]`. No official address was supplied.
- **Community → social links** (`src/components/sections/community.tsx`) —
  WhatsApp, Discord, and Instagram cards currently link to `#`. Need real
  URLs for whichever channels the chapter actually runs.

## Not blocking, but worth deciding

- **Real events** — Initiatives currently describes *categories* (bootcamps,
  hackathon/Tech Week, mentorship, tutorials) per the README's own listing,
  deliberately without specific dates/names, since none were supplied. If the
  chapter has actually run named events, swap this section for real ones —
  it will read as more credible than categories.
- **Deadline** — never found in the upstream repo, its history, or its
  issues/PRs. Confirm you know it from elsewhere.
- **`provost.jpg` and `dtd.jpg`** in the executive council still show visible
  artifacts of their source photos (a steep camera angle on one, a busy
  textured wall on the other) — the duotone treatment hides most of it, but a
  reshoot would be a clean upgrade if there's time before submission.
- **Site URL** — `layout.tsx`, `robots.ts`, and `sitemap.ts` currently assume
  `https://nacos-nile.vercel.app`. Update all three once the real deployment
  URL is known (or point them at the eventual custom domain).

## Already handled, no action needed

- Exco names/roles/photos — from the README table, photos individually
  re-cropped and colour-corrected (see `DESIGN.md`).
- Six disciplines — from the README's required-sections list.
- Chapter address (Nile University of Nigeria, Abuja, FCT) — from the README.

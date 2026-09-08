# NACOS Nile — Landing Page

A modern, fully responsive landing page for the NACOS Nile chapter, built on the
provided Next.js 16 + TypeScript + Tailwind CSS v4 starter.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Both of these must pass cleanly before submitting:

```bash
npm run build
npm run lint
```

> `npm run build` downloads the Geist font from Google Fonts on the first run.
> If you are offline it fails on that step only — it is not a code error.

## Features

- **Sections**: sticky navbar, hero, about (mission/vision), the six disciplines,
  programs, the full Executive Council, community channels, and footer.
- **Light / Dark / System theme** — toggle in the navbar, remembered between
  visits, applied before first paint (no flash).
- **Executive Council** — every exec links to their LinkedIn (and GitHub where
  available).
- **Members-only WhatsApp** — opens a short "how to join" dialog instead of a
  raw invite link.
- **Community links** — Instagram, X, TikTok, LinkedIn, and email, each with its
  own brand colour on hover.
- **Footer address** — opens directly in Google Maps or Apple Maps.
- Accessible semantic HTML, alt text on every image, keyboard-friendly nav, and
  `prefers-reduced-motion` respected.

## Structure

```
src/
├─ app/            layout.tsx (metadata, fonts, theme script), page.tsx, globals.css
├─ components/     Navbar, Hero, About, Disciplines, Programs, Excos, Community,
│                  Footer, JoinModal, ThemeToggle, Reveal, icons
└─ lib/data.ts     all content: execs, disciplines, programs, socials, location
```

To update any content (a new exec, a changed link, the WhatsApp email), edit
`src/lib/data.ts` — nothing else needs to change.

## Credits

Built for the NACOS Nile Website Competition — Nile University of Nigeria, Abuja.

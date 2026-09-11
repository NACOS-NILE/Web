# NACOS Nile — Website

Landing page for NACOS Nile (Nile University of Nigeria), built with
Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

The first `npm install` / `npm run build` needs an internet connection once,
to fetch the Fraunces and Inter typefaces via `next/font/google`. After that,
Next.js self-hosts them — no runtime calls to Google Fonts.

## Build

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx       — root layout, fonts, metadata
    page.tsx          — assembles all sections
    globals.css
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Disciplines.tsx
    ExcoSection.tsx
    ExcoCard.tsx
    Programs.tsx
    Events.tsx
    Community.tsx
    Footer.tsx
  data/
    exco.ts           — executive council, disciplines, programs, events, links
public/
  logo.svg
  excos-pics/*.jpg
```

## Content notes / placeholders

A few pieces of content were not supplied in the brief and are clearly
marked as placeholders in the code and UI, ready to be swapped for the
real thing:

- **Event dates** — `src/data/exco.ts` → `events` array, `date` fields.
- **Community links** (Discord, WhatsApp, Telegram, X, Instagram, LinkedIn)
  — `src/data/exco.ts` → `communityLinks`, all currently `href: "#"`.
  The Community section on the page carries a visible note that these are
  placeholders.

Everything else (executive council names, roles, taglines, disciplines,
programs) reflects what was provided in the brief.

# DESIGN.md — Circuit Nile

Locked design direction for the NACOS Nile landing page. Everything ships from
these tokens — no arbitrary one-off colours, sizes, or easings.

## Concept

The NACOS seal draws Nigeria overlaid with circuit traces and junction nodes.
The hero makes that motif literal: PCB-realistic traces draw themselves across
the page on load, terminating in pulsing nodes, with the seal itself as a
slowly-turning watermark. The executive council — nine photos that shared
nothing in common (mixed sizes, one sideways, one tilted 45°, one with a
picture frame baked into the pixels) — is unified with a single duotone
mapping whose shadow tone matches the page's own surface colour, so the
portraits read as part of the design rather than pasted onto it. Hover
reveals full colour.

## Colour

| Token | Value | Use |
|---|---|---|
| `--bg` | `#080D1A` | Page background |
| `--surface` | `#0E1730` | Cards, strips, elevated panels |
| `--surface-2` | `#101C33` | Duotone shadow endpoint — matches `--surface` family so portraits sit in the page |
| `--line` | `rgba(117,185,71,.16)` | Structural hairlines, grid rules |
| `--nile` | `#274193` | Brand — Nile crest blue |
| `--lift` | `#3A5BC7` | Secondary accent, trace gradient tail |
| `--signal` | `#75B947` | Primary accent — NACOS seal green. CTAs, links, active states |
| `--ink` | `#EAF0FB` | Primary text |
| `--muted` | `#8496BE` | Secondary text |
| duotone highlight | `#CDE9AF` | Portrait duotone light endpoint |

Do not use Tailwind's default blue palette (`blue-400`/`500`) — that is not
the brand and is what most other entries in this competition are using.

## Type

- **Display / body:** Space Grotesk (400/500/600/700), `next/font/google`
- **Labels, nav, mono data:** JetBrains Mono (400/500/600), `next/font/google`
- Display sizes use `clamp()` between a mobile floor and a desktop ceiling —
  never a fixed `px`/`rem` that breaks on intermediate widths.
- Headings: `letter-spacing: -0.03em` to `-0.035em`, `line-height: 0.94–1.0`.
- Mono labels: `letter-spacing: 0.08em–0.18em`, uppercase.

## Spacing

Tailwind's default 4px-based scale. Section block padding uses `clamp()`
matching the hero rhythm: `clamp(2.5rem, 6vw, 7rem)` down to
`clamp(3rem, 7vw, 5.5rem)` for tighter bands.

## Radii & shadows

- Radius: `2px` on buttons/chips, `3px` on cards. Sharp, technical — not
  rounded-friendly SaaS.
- Card hover elevation: `0 14px 34px -18px rgba(0,0,0,.9), 0 0 0 1px rgba(117,185,71,.18)`

## Motion

- Easing: `cubic-bezier(.2,.7,.3,1)` everywhere.
- Durations: 180–500ms for interaction states; the hero's one-time trace-draw
  animation runs to ~2.4s but is compositor-only (`stroke-dashoffset`,
  `opacity`) and never blocks input.
- All animation is wrapped in `@media (prefers-reduced-motion: reduce)` and
  disabled outright when set.

## Assets

- Brand mark: `public/brand/nile-crest.svg` (2.1 KB, vector) +
  `public/brand/nacos-seal-{96,192}.webp` (dark-ground) and
  `nacos-seal-light-{96,192}.webp` / `nacos-seal-mint-{96,192}.webp`
  (light-on-dark variants). Replaces the original 1.37 MB `logo.svg`, which
  also carried a hidden signature in its near-white paths — dropped in the
  rebuild.
- Executive portraits: `public/exec/{slug}-300.webp`, individually re-cropped
  to a shared eye-line, de-rotated where needed, and tonally normalised
  (partial autocontrast) so the duotone mapping holds across all nine. ~80 KB
  total for the full council.

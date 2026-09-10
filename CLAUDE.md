# NACOS Nile — Project Context

> **This file is the single source of truth** for any AI coding assistant
> working on this project. Read it before generating any code.

---

## Tech Stack

| Layer       | Technology                          | Version |
| :---------- | :---------------------------------- | :------ |
| Framework   | Next.js (App Router, `src/app/`)    | 16.3.4  |
| Language    | TypeScript (strict mode)            | ^5      |
| Styling     | Tailwind CSS v4 (`@theme inline`)   | ^4      |
| Icons       | lucide-react                        | latest  |
| Animation   | framer-motion                       | latest  |
| Utilities   | clsx, tailwind-merge (`cn()`)       | latest  |
| Linting     | ESLint + eslint-config-next         | ^9      |
| Export Mode | Static (`output: "export"`)         | —       |

## Brand Design Tokens

All tokens are defined in `src/app/globals.css` as CSS custom properties
**and** registered with Tailwind v4 via `@theme inline`.

| Token              | CSS Variable         | Hex       | Tailwind Class  |
| :----------------- | :------------------- | :-------- | :-------------- |
| Spatial Background | `--color-spatial`    | `#0d1733` | `bg-spatial`    |
| Royal Blue         | `--color-primary`    | `#274193` | `bg-primary`    |
| Highlight          | `--color-highlight`  | `#3b82f6` | `text-highlight` |
| Glow               | `--color-glow`       | `#60a5fa` | `text-glow`     |
| Surface Layer      | `--color-surface`    | `#131f42` | `bg-surface`    |
| Foreground         | `--color-foreground` | `#f1f5f9` | `text-foreground`|
| Muted Text         | `--color-muted`      | `#94a3b8` | `text-muted`    |

## File Structure Conventions

```
src/
├── app/
│   ├── globals.css      # Tailwind v4 entry + design tokens
│   ├── layout.tsx        # Root layout (Geist fonts, metadata)
│   ├── page.tsx          # Landing page (composes section components)
│   └── favicon.ico
├── components/           # Reusable UI components (Navbar, Hero, etc.)
├── lib/
│   ├── utils.ts          # cn() utility (clsx + tailwind-merge)
│   └── data.ts           # Typed data: ExcoMember[], Discipline[]
public/
├── excos-pics/           # Exco profile photos (president.jpg, etc.)
└── logo.svg              # Official NACOS Nile logo
```

## Hard Rules

1. **Zero Build Errors**: `npm run build` must complete with 0 TypeScript errors.
2. **Zero Lint Warnings**: `npm run lint` must produce 0 ESLint warnings or errors.
3. **No `any` Types**: TypeScript `any` is strictly prohibited. Use proper types or `unknown`.
4. **Semantic HTML**: Use `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`.
5. **Alt Text Required**: Every `<Image>` / `<img>` must have a meaningful `alt` attribute.
6. **Accessible Contrast**: All text must meet WCAG AA contrast ratios against its background.
7. **Responsive Design**: Mobile-first. Must work on phones, tablets, laptops, and ultra-wide.
8. **Image Optimization**: Route all images through Next.js `<Image>` component.
9. **Import Paths**: Use the `@/` alias (maps to `./src/*`). No relative `../../` chains.
10. **Component Modularity**: Each section is its own file in `src/components/`.

## Allowed Libraries

Only the following runtime libraries may be used (all declared in `package.json`):

- `next`, `react`, `react-dom` (core)
- `framer-motion` (animation)
- `lucide-react` (icons)
- `clsx` (conditional class names)
- `tailwind-merge` (Tailwind dedup)

**Do NOT add any other runtime dependency** without explicit approval.

## Key Patterns

### Class Name Merging
```tsx
import { cn } from "@/lib/utils";
<div className={cn("base-classes", conditional && "active-class", className)} />
```

### Data Usage
```tsx
import { EXCO_MEMBERS, DISCIPLINES } from "@/lib/data";
import type { ExcoMember, Discipline } from "@/lib/data";
```

### Static Export
The project uses `output: "export"` in `next.config.ts`.
Images use `unoptimized: true` since there is no server-side optimization.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

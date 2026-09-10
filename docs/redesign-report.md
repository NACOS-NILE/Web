# NACOS Nile — screenshot-led visual redesign

Completed locally on 8 September 2026. This report describes the latest visual pass; the earlier implementation report documents the preceding content work. No push or deployment was performed. Existing uncommitted work and git history were preserved. No subagents were used.

## Reference mapping and content boundaries

All twelve supplied images were inspected before implementation. The desktop hero established the shared art direction.

| Reference | Existing components | Applied treatment |
| --- | --- | --- |
| Desktop 01 + mobile 01 hero | Navbar, Hero, OrbitalNetwork | Navy atmosphere, blue emphasis, tighter mobile entrance, large shared orbital graphic and CSS horizon |
| Desktop 02 About | About in Sections | Off-white editorial split, existing official logo, real dinner photograph |
| Desktop 03 + mobile 02 disciplines | DisciplineExperience | Compact six-button desktop navigation, two-column mobile controls, selected detail and stationary network |
| Desktop 04 programs | Programs in Sections | Dark two-column composition, existing four disclosures in bordered icon cards |
| Desktop 05 + mobile 03 council | ExecutiveGrid | Consistent framed portraits, secondary filters, compact two-column mobile cards |
| Desktop 06 + mobile 04 dues | Dues, CopyAccountNumber | Dark payment selector, clearer monetary typography and bank card |
| Desktop 07 + mobile 04 community | Community in Sections | Large closing headline, restrained horizon, two real access routes |
| Desktop 08 + mobile 04 footer | Footer in Sections | Dark columns, thin dividers, verified existing links and attribution |
| No dedicated gallery reference | LifeAtNacos, PhotoViewer | Three-photo desktop composition, four-photo mobile strip, existing accessible viewer |

Placeholder-only material was excluded: generated people and portraits, substitute logos, 13,000+ students, 20+ events, 1,000+ students reached, unlimited opportunities, invented membership tiers and prices, synthetic program photos, unsupported payment security/receipt promises, unverified social accounts and phone/device frames. The six disciplines and one community reflect existing verified content. Executive records, quotes, roles, photos, eight LinkedIn URLs, payment constants, bank details, email and form link were retained.

## Changes made

- Added a dedicated art-direction stylesheet loaded after the existing styles. Kept the existing component architecture, section ordering, anchors and dependencies.
- Reused one SVG network in the moving hero and stationary discipline explorer. Added six small discipline icons, a shaded NACOS centre, concentric ellipses and faint connections. CSS drives a slow 75-second orbit; matching counter-rotation keeps text upright and equally spaced.
- Preserved explicit playback control, hover/focus pause, off-screen and hidden-document pause, and reduced-motion support. No canvas, animation package, particle engine or per-frame React state was added.
- Tightened the mobile hero so the network starts within the initial 844px viewport. Added only the factual six-discipline/one-community line.
- Replaced About dead space with existing real dinner photography and retained the official logo and chapter explanation.
- Refined program cards, gallery spacing, portrait framing, executive filters, payment cards, access routes and footer into the same visual family.
- Preserved all four gallery images. Desktop features three; mobile scrolling and the viewer expose all four. Made the mobile strip keyboard-focusable and corrected its hint contrast.
- Separated the naira symbol from digits, corrected inherited small/low-contrast payment styles and made totals readable on dark surfaces.
- Corrected executive/payment filter semantics to pressed-button groups, matching their existing behavior rather than presenting incomplete ARIA tabs.

## Signature moments

1. Learn / Build / Grow entrance with the NACOS orbital system and atmospheric horizon.
2. The same network becoming a focused, stationary discipline explorer.
3. Editorial program disclosures against a quieter technical background.
4. Real community photography, swipeable on mobile and keyboard-accessible in the viewer.
5. Come curious / Leave connected closing composition with clear community access routes.

## Copy changes

Kept the requested student-focused headlines and existing official copy. The hero now says “Your tech community at Nile.” Removed the unsupported “recommended for new students” payment badge in favor of “Dues & one-time shirt.” Instalment wording refers directly to the chapter announcement rather than implying automatic registration clearance. No new facts or biographies were introduced.

## Important files

- `src/app/art-direction.css`: visual system, responsive composition, cards, currency treatment and atmospheric backgrounds.
- `src/app/layout.tsx`: loads the new stylesheet.
- `src/components/NetworkGraphic.tsx`: shared orbital SVG.
- `src/components/DisciplineIcon.tsx`: small inline SVG icons without a dependency.
- `src/components/OrbitalNetwork.tsx`: uses shared graphic while retaining playback logic.
- `src/components/Hero.tsx`: tighter copy/composition and factual community line.
- `src/components/DisciplineExperience.tsx`: compact controls and shared network.
- `src/components/Sections.tsx`: About photograph, program icons and community accents.
- `src/components/ExecutiveGrid.tsx`: accessible filter semantics; real records unchanged.
- `src/components/Dues.tsx`: currency markup, filter semantics and copy refinements.
- `src/components/LifeAtNacos.tsx`: keyboard-focusable photo strip.

No application dependencies were added. Existing official assets and `src/data/content.ts` were not replaced.

## Validation performed

- `npm run lint`: passed, exit 0.
- `npm run build`: passed, exit 0; static export retained.
- Production preview at `http://127.0.0.1:4173/`: no browser console errors or uncaught page errors during the interaction suite.
- Rendered checks at 390×844, 430×932, 768×1024, 1366×768, 1440×900 and 1920×1080. No page horizontal overflow at any tested size. Section screenshots captured at mobile, tablet and desktop sizes and inspected for composition, cropping and wrapping.
- Axe WCAG 2 A/AA and 2.1 AA scans: zero reported violations in final desktop/mobile states and the open gallery dialog. Automated scans do not substitute for a complete accessibility audit.
- All six discipline selections, four executive filters and three payment selections exercised successfully. Nine real profiles and eight LinkedIn actions retained.
- Clipboard success verified against the actual account number; a simulated denied clipboard verified the visible manual-copy fallback.
- Program disclosures and clearance disclosure repeatedly toggled. Internal anchor targets validated; mobile navigation, Escape, focus restoration and dues header offset verified.
- Gallery opening, arrow keys, Escape and trigger focus restoration verified. Chromium touch emulation verified menu taps, native photo-strip swiping and viewer swipe navigation.
- Orbit running, manual pause, hover pause, focus pause, off-screen pause and reduced-motion stop verified. Labels remained upright and in bounds at five sampled positions through the orbit.
- JavaScript-disabled Chromium verified server-rendered headline, all nine executive records and bank account details.

QA scripts and screenshots are local under `output/playwright/`, including `redesign-production.js`, `redesign-touch.js`, `redesign-final-visual.js` and `redesign-final-scan.js`. No personal information or payment was submitted. External profile destinations were retained, not re-authenticated or exhaustively retested in this visual pass.

## Worthwhile final submission checks

Check the production preview on a physical mid-range phone and Safari before submission; this pass used Chromium with mobile/touch emulation. Higher-resolution original executive portraits would improve large-screen sharpness if the chapter can supply them. No invented replacements should be used.

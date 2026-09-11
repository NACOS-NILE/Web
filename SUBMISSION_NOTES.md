# NACOS Nile Competition Submission Notes

## Direction

This landing page is designed as a student-first digital front door for NACOS Nile. The visual system is based on the idea of six computing disciplines connected through one chapter. The aim is to feel specific to NACOS Nile rather than like a generic technology startup template.

## Official content sources used

- Competition brief and starter repository: https://github.com/NACOS-NILE/Web
- Official NACOS Nile website: https://nacos-nile-website.vercel.app/
- Official NACOS Nile community page: https://nacos-nile-website.vercel.app/community
- Official NACOS Nile constitution: https://nacos-nile-website.vercel.app/files/nacos%20nile%20constitution.pdf
- Official NACOS Nile LinkedIn: https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/posts/?feedView=all
- Official NACOS Nile Instagram: https://www.instagram.com/nacosnileuni
- Official NACOS Nile X: https://x.com/NacosNileUni
- Official NACOS Nile TikTok: https://www.tiktok.com/@nacosnileuni
- Official NACOS Nile Notion hub: https://app.notion.com/p/NACOS-NILE-CHAPTER-2e2374d50eeb81969ab6cb677eeb44a8
- Official chapter email: nacosnile@gmail.com
- Nile University Faculty of Computing: https://nileuniversity.edu.ng/faculties/faculty-of-computing-studies/
- NACOS National: https://nacos.org.ng/

## Factual content decisions

- The site uses 2023 as the chapter establishment year because both the official chapter website and LinkedIn list 2023.
- The site does not show an executive session year because the official homepage and team page currently disagree on the session label.
- The motto "Networking The World." is taken from the official NACOS Nile constitution.
- "Learn. Build. Grow." is retained because it is used prominently by the current official chapter site.
- The recent activity section uses only public NACOS Nile activity that could be verified through the official LinkedIn page.
- The national network section uses NACOS National figures only and labels them as national figures: about 1,000,000 members, 250+ local chapters and six geopolitical zones. These figures come from the official NACOS National homepage.
- Discord and Telegram links are not invented because no verified official URLs were found in the supplied material or public chapter pages.
- WhatsApp access goes through the official NACOS Nile community page, which describes student verification and provides the access flow.

## National context

The site includes a compact national context section so students can understand that NACOS Nile is one local chapter within a much wider Nigerian computing student network. It links directly to the official NACOS National website and avoids presenting national membership figures as Nile chapter statistics.

## Image decisions

All nine competition-supplied executive portraits are used. The original files are preserved. Two source portraits were stored sideways, so corrected display copies were generated for the Provost and Director of Socials. The provided 1.4 MB logo SVG is also preserved, while a smaller 512px PNG derivative is used in the interface to reduce transfer cost.

## Design research references

These were studied for principles rather than copied visually:

- VCUarts, 2025 Webby Winner for School/University: student work and institutional character placed first.
- Harvard T.H. Chan School of Public Health, 2025 Webby People's Voice Winner: human-centered information architecture and clear paths from interest to action.
- Brown University case study by Fastspot: user agency and multiple thoughtful paths through institutional content.
- Stonehill College case study by Fastspot: responsive storytelling focused on the needs of its intended audience.
- 2026 CASE Gold, TCU core website redevelopment: mobile-first hierarchy, user research and prominent high-value actions.

## Writing rules

- No em dashes are used in website copy.
- No invented statistics, testimonials, partnerships, events or social URLs.
- No generic "future leaders" style filler was added unless it came from an official source, and official wording was generally rewritten into more specific student-facing language.
- Copy is kept short, direct and connected to real chapter activity.


## V2 visual refinement

- Removed the large hero network diagram after visual QA because it competed with the headline and duplicated the dedicated disciplines section.
- Replaced it with a compact six-discipline faculty rail that keeps the first screen informative without adding decorative complexity.
- Reworked the wider-network section into an institutional ecosystem with clearly labelled relationships: local chapter, host institution, academic home, national umbrella body, NACOS parent professional body, and a verified campus collaborator.
- Added clearer social cards with platform names, account handles and explicit actions so users can tell exactly where each link leads.
- Nigeria Computer Society relationship source: https://nacos.org.ng/association
- Nigeria Computer Society official site: https://www.ncs.org.ng/
- Nile Women in Tech official LinkedIn: https://www.linkedin.com/company/nile-women-in-tech-club-nile-university-of-nigeria
- NACOS Nile and Nile Women in Tech collaboration source: https://ng.linkedin.com/company/nacos-nile-university-of-nigeria-chapter
- NACOS National executive and zonal structure: https://nacos.org.ng/national


## V3 media and mobile decisions

- NACOS National figures are displayed in full as `1,000,000+`, `250+`, and `6` rather than abbreviated oversized shorthand. They are explicitly labelled as national figures.
- The chapter media section uses TikTok's official Creator Profile Embed for `@nacosnileuni`. TikTok documents that creator profile embeds can surface up to ten recent videos.
- The TikTok script is opt-in and lazy loaded only after a visitor taps the load button. This avoids adding third party video weight to the initial page load.
- Mobile CSS includes dynamic viewport handling, safe area padding, 48px touch targets, text size protection, overflow protection and reduced use of backdrop blur on small screens.

## V4 source and interaction audit

This revision was made after another source review of the current NACOS Nile website, NACOS Nile LinkedIn, NACOS National, Nile University and the official NACOS competition brief.

### Institutional relationships shown near the hero

The hero uses the label **Institutional network**, not Sponsors. The relationships shown are deliberately specific:

- Nile University of Nigeria: host institution for NACOS Nile.
- NACOS National: the national association under which the Nile chapter operates.
- Nigeria Computer Society: NACOS National states that NCS endorsed NACOS as its parent organisation.
- Honoris United Universities: Nile University states that it is a member institution of the Honoris network.

Logo sources used by the interface:

- Nile University vertical logo: `https://nunhr.nileuniversity.edu.ng/_app/immutable/assets/nile-logo.CBuOKPpg.webp`
- NACOS National official logo: `https://nacos.org.ng/images/NNL.png`
- Nigeria Computer Society logo: `https://www.ncs.org.ng/wp-content/uploads/2017/06/cropped-NCS_LOGO-7.jpg`
- Honoris United Universities logo: `https://upload.wikimedia.org/wikipedia/commons/6/6d/Honoris_United_Universities%27_Logo.jpg`

### Social icons

No hand drawn or generated social-media logo paths are used. The SVG files in `public/brand-icons/` are copies of the corresponding Font Awesome Free 6.7.2 SVG assets from the official `FortAwesome/Font-Awesome` repository. Font Awesome Free brand icons are licensed under CC BY 4.0. The email icon is from the Font Awesome Free solid icon set.

Included assets:

- Instagram
- TikTok
- LinkedIn
- X
- WhatsApp
- Email

### Chapter media

The TikTok creator feed uses the official `@nacosnileuni` profile. It no longer asks the visitor to press a load button. An IntersectionObserver begins loading the official creator embed when the media section approaches the viewport. This keeps the initial page lighter while making the experience automatic.

### National figures

The national statistics use the figures currently reported by NACOS National on its official website and association page. They are clearly labelled as national rather than Nile chapter figures. The numbers animate once when they become visible using `requestAnimationFrame`, with a reduced-motion fallback that displays the final values immediately.

### Content restrictions

- No em dashes are used in website source copy.
- No placeholder `href="#"` links are used.
- No Discord or Telegram destination is invented because the official NACOS Nile hub currently exposes WhatsApp and Notion as its verified community platforms.
- No organisation is described as a sponsor unless a source specifically supports that relationship.

## V4.2 Hero community image

- Removed the executive passport portrait collage from the hero.
- Added an official NACOS Nile community photograph supplied from the chapter gallery.
- The photograph is optimized to a 1600px WebP and blended directly into the navy hero with restrained color treatment and edge gradients, so it adds real student energy without becoming a separate card.
- Leadership portraits remain reserved for the Leadership section.
- The hero image is decorative in this placement, so it uses an empty alt value and is hidden from assistive technology to avoid duplicate or nonessential narration.
- The CountUp reduced-motion branch was also updated so ESLint does not flag synchronous state updates inside an effect.


## V4.3 Community dock
- Replaced the large footer social grid with a compact floating community control at the bottom left.
- The control expands on click to reveal verified Instagram, TikTok, LinkedIn, X, WhatsApp and email links, and collapses on second click or Escape.
- Discord and Telegram remain visible as Coming Soon with no fake destination URLs.
- Added authentic Font Awesome Free comments and xmark SVG assets with attribution.
- Footer is now significantly shorter while retaining address, official sources, community CTA and legal text.


## V4.5 mobile refinement
- Floating community dock moved to the bottom right with safe-area offsets.
- Social panel closes on outside tap and Escape, and stays within dynamic mobile viewport height.
- Final mobile overrides tighten navigation, hero, section spacing, TikTok width handling, footer clearance, and 320px leadership layout.
- Hero image quality uses Next.js configured quality 75 to avoid the runtime warning.

## V4.9 interaction and media refinement

- Moved both quick actions into the persistent header: Explore NACOS and Join Community.
- Removed the hero paragraph and duplicate hero buttons so the official NACOS community photograph has more visual space.
- Reduced negative tracking on the hero headline, especially IS BETTER, to prevent the two T characters from colliding.
- V4.9 temporarily switched outlined display accents to solid colors. V4.10 restores the original outline treatment.
- Rebuilt Chapter Media around the chapter gallery, the verified Instagram profile link and the official TikTok creator embed.
- Replaced the unrelated LinkedIn callout in Chapter Media with Instagram. LinkedIn remains available through official source links and the community dock.
- Added an animated TikTok loading state that remains visible until the creator embed iframe appears. The loader respects prefers-reduced-motion.
- Retained mobile-first behavior, safe-area handling, responsive media sizing and the bottom-right social dock.


## V4.10 media accuracy and outline restoration

- Restored the original outlined transparent display accents in the hero, Learn Build Grow treatment and ecosystem marks.
- Kept the improved hero tracking from V4.9 so IS BETTER remains readable without the two T characters colliding.
- Removed the implication that the two supplied chapter photographs are Instagram posts. They are now labelled as official chapter photography under Community moments.
- Renamed the local image assets from instagram-campus names to community-moment names so the source code does not imply an Instagram origin.
- Instagram remains represented by its verified official @nacosnileuni profile link and authentic brand icon.
- The official TikTok creator embed and animated loading state remain unchanged.

## V4.12 Android stability pass

- Hardened horizontal overflow protection at the document and section level.
- Added Android-friendly text scaling and touch behavior.
- Added safe-area-aware horizontal padding for the nav, hero, sections, footer, and mobile menu.
- Enforced a 48px minimum mobile menu touch target.
- Constrained TikTok embeds and media grids to the viewport on narrow screens.
- Added extra 350px-and-below typography rules to prevent display headings from clipping.
- Added coarse-pointer hover fallbacks to avoid sticky hover transforms on touch devices.
- No print/page-break CSS rules are present.
- Frosted glass remains removed.

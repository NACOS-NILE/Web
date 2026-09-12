// Tilted ribbon divider between JoinCTA and the Footer — stands in for a
// straight section seam. Pure CSS: the loop is one `transform: translateX`
// keyframe animation (GPU-compositable, defined in globals.css), not
// GSAP/JS — there's nothing here for a scroll listener or ScrollTrigger to
// do, so unlike the page's scroll-tied effects this costs nothing to leave
// running and needs no IntersectionObserver gating. `prefers-reduced-motion`
// is handled via Tailwind's motion-reduce: variant on the animated element.
const MARQUEE_WORDS = [
  "OPEN SOURCE",
  "MENTORSHIP",
  "HACKATHONS",
  "CAREER GROWTH",
  "COLLABORATION",
  "LEADERSHIP",
];

function MarqueeContent() {
  return (
    <div className="flex items-center shrink-0" aria-hidden="true">
      {MARQUEE_WORDS.map((word, i) => (
        <span key={i} className="flex items-center shrink-0">
          <span className="font-deacon text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white whitespace-nowrap px-4 sm:px-6">
            {word}
          </span>
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/40 shrink-0" />
        </span>
      ))}
    </div>
  );
}

export default function MarqueeBand() {
  return (
    // WINDOW: Footer's own grey, with its own diagonal TOP edge — this is
    // what actually tilts "the footer" rather than just decorating a still-
    // rectangular one. Its top-left/top-right points are the same (0, 5vw)
    // / (100%, 0) line the ribbon's top edge uses below, so the two
    // coincide exactly: above that single diagonal line is whatever sits
    // above this block (JoinCTA's white gap), below it is footer-grey the
    // entire width. The window's bottom stays a plain, unclipped edge —
    // it's flush against Footer's own top and the exact same color, so
    // there's nothing there to seam regardless of shape.
    <div
      className="relative z-20 w-full -mt-6 sm:-mt-10 -mb-8 sm:-mb-12 md:-mb-16 bg-[#F6F6F6] overflow-hidden"
      style={{
        height: "clamp(5rem, 11vw, 13rem)",
        clipPath: "polygon(0 5vw, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <h2 className="sr-only">What NACOS Nile is about</h2>

      {/* RIBBON: the blue band crossing that grey, its own parallelogram
          clipped from this fill. Sharing the window's exact top line means
          the ribbon's top edge is invisible as a separate cut — it reads
          as one continuous tilt, with the ribbon just being the colored
          part of it. Its bottom edge (the one still short of the window's
          own bottom by 5vw) is the only edge that shows as a distinct
          line — blue easing back to grey partway down, which is exactly
          the "ribbon crossing the footer" look. */}
      <div
        className="absolute inset-0 bg-[#274193]"
        style={{
          // The rise is in `vw`, not `%` of this box's own (much smaller)
          // height — a %-based rise gives a steeper angle on short/narrow
          // boxes and a shallower one on tall/wide ones, since it's really
          // measuring against the box's own aspect ratio, not the
          // viewport. Tying it to `vw` on both the numerator and the
          // implicit 100vw width keeps the actual angle constant (~3°) at
          // every breakpoint — which matters here because the text below
          // is rotated by a single fixed degree value to match, and that
          // match only holds if the shape's angle isn't secretly moving
          // underneath it.
          clipPath: "polygon(0 5vw, 100% 0, 100% calc(100% - 5vw), 0 100%)",
        }}
      >
        {/* Rotated the same direction as the cut above (right edge
            higher), not counter-rotated — the marquee text runs along the
            slope instead of staying artificially level inside a tilted
            shape. `justify-start` (not `-center`) on this flex parent
            matters for the loop below, not just layout: the animation
            slides the row by exactly `-50%` of ITS OWN width, i.e. exactly
            one copy's width, which is only guaranteed to be a clean,
            gapless loop if that row's rendered width is genuinely fixed at
            "two full copies," not something a flex parent got to shrink.
            `shrink-0` on the row is the other half of that same guarantee
            — without it, this row is a flex item with the default
            flex-shrink:1, so even with `w-max` set, a parent that's
            narrower than the row's natural content width can still
            compress the box flexbox does its own layout/centering math
            against (its children stay `shrink-0` and just overflow that
            shrunk box instead of visually shrinking, so nothing here ever
            looked visibly squeezed) — meaning the "50%" the keyframe
            reads could be less than one true copy-width, landing the loop
            a few pixels short of tiling seams every cycle. That's exactly
            the once-per-loop gap this was fixed for: the text going blank
            partway through, then reappearing once the reset caught back
            up around the middle of the row. */}
        <div className="absolute inset-0 flex items-center justify-start -rotate-3">
          <div className="flex w-max shrink-0 animate-marquee motion-reduce:animate-none">
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>
      </div>
    </div>
  );
}

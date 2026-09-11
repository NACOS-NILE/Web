// Central GSAP entry point: registers the plugins the site actually uses
// exactly once, so every component imports the same configured instance
// instead of re-registering (or forgetting to).
//
// ScrollTrigger and SplitText are part of the standard `gsap` npm package
// (Webflow made every GSAP plugin free in 2025) — no extra install needed.
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

/** Shared reduced-motion check so every component reads it the same way. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Several components each watch their own element with an IntersectionObserver
// and call ScrollTrigger.refresh() to correct a stale measurement once that
// element nears the viewport (see GallerySection's cards, TechIconField,
// useSectionHeaderReveal). ScrollTrigger.refresh() is a *global* recalculation
// of every active trigger on the page, not just the caller's own — so when
// several of those observers fire within the same scroll (e.g. scrolling past
// a whole grid of gallery cards, each with its own observer), calling it once
// per observer fires that global recalculation repeatedly in quick succession,
// which is what read as the images themselves stuttering/flashing while
// scrolling past them. This collapses any number of requests within the same
// frame into a single real refresh.
let refreshQueued = false;
export function scheduleScrollTriggerRefresh() {
  if (typeof window === "undefined") return;
  if (refreshQueued) return;
  refreshQueued = true;
  requestAnimationFrame(() => {
    refreshQueued = false;
    ScrollTrigger.refresh();
  });
}

// The corrective-refresh IntersectionObservers above (TechIconField,
// useSectionHeaderReveal, GallerySection cards, EventsSection, Testimonials)
// only exist to re-measure a ScrollTrigger whose container sits under a
// content-visibility:auto ancestor — that's the only thing that can hand
// ScrollTrigger a collapsed/stale size in the first place. Most of these call
// sites are reused across sections that dropped content-visibility again
// later (see page.tsx), which leaves the observer firing for nothing: an
// IntersectionObserver crossing plus a *global* ScrollTrigger.refresh() (it
// re-measures every active trigger on the page, not just the caller's own)
// on every single section boundary the user scrolls past, all the way down
// the page, fixing a bug that isn't there for that section. That's real,
// repeated main-thread cost during scroll for zero benefit. Gate the
// workaround on the condition that actually causes the bug, so it's free
// wherever content-visibility isn't in play and still self-activates
// wherever (now or later) it is.
export function hasContentVisibilityAncestor(el: Element | null): boolean {
  if (typeof window === "undefined") return false;
  let node: Element | null = el;
  while (node) {
    if (window.getComputedStyle(node).contentVisibility === "auto") return true;
    node = node.parentElement;
  }
  return false;
}

export { gsap, ScrollTrigger, SplitText };
export default gsap;

"use client";

import { RefObject, useEffect } from "react";
import { gsap, SplitText, prefersReducedMotion, scheduleScrollTriggerRefresh, hasContentVisibilityAncestor } from "@/lib/gsap";

/**
 * Scroll-scrubbed parallax for the site's recurring "eyebrow / h2 / subtitle"
 * section header pattern (AboutBento, CoursesGraph, GallerySection,
 * TestimonialsSection, JoinCTA all use it).
 *
 * Elements are found via data attributes inside `containerRef` rather than
 * individual refs, so callers only need to tag their existing markup:
 *   data-reveal="eyebrow"   — real SplitText word-stagger (plain text only)
 *   data-reveal="heading"   — whole-block rise
 *   data-reveal="subtitle"  — whole-block rise, slightly after heading
 *
 * Tied to `scrub` rather than played once: progress is a direct function of
 * scroll position across the trigger's start/end window, so the text moves
 * into place scrolling down and slides back out scrolling back up — same
 * timeline, just driven by scroll offset instead of a play call.
 *
 * The heading is deliberately NOT split into words/chars: several of these
 * headings embed their own bespoke interactive widgets (GeekyComputing,
 * ConvergePhrase, CapturedPhrase, TrustedBuildersHeading) with their own
 * class-based DOM queries — running SplitText over that subtree would
 * re-wrap their text nodes and break those selectors. The eyebrow label is
 * always plain text, so it's the safe (and highest-leverage, most visible)
 * place for the real SplitText treatment.
 */
export function useSectionHeaderReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (typeof window === "undefined") return;
    if (prefersReducedMotion()) return; // leave elements at their natural, fully-visible state

    const eyebrow = container.querySelector<HTMLElement>('[data-reveal="eyebrow"]');
    const heading = container.querySelector<HTMLElement>('[data-reveal="heading"]');
    const subtitle = container.querySelector<HTMLElement>('[data-reveal="subtitle"]');

    let split: SplitText | null = null;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 88%",
          end: "top 45%",
          scrub: true,
          // Sections deep in the page sit under a content-visibility:auto
          // ancestor (see page.tsx) that skips laying out this subtree
          // while it's off-screen. ScrollTrigger's first measurement pass
          // — which runs shortly after load — can land before that skip
          // lifts, baking in a stale/collapsed position for anything still
          // far down the page. invalidateOnRefresh re-resolves these
          // tween values (not just the scroll-pixel range) on every
          // refresh, so the manual refresh below actually corrects it
          // instead of just re-mapping bad numbers.
          invalidateOnRefresh: true,
        },
      });

      if (eyebrow) {
        split = new SplitText(eyebrow, { type: "words", wordsClass: "reveal-word" });
        tl.from(
          split.words,
          { opacity: 0, y: 14, stagger: 0.045, ease: "power1.out" },
          0
        );
      }

      if (heading) {
        tl.from(heading, { opacity: 0, y: 40, ease: "power1.out" }, eyebrow ? 0.05 : 0);
      }

      if (subtitle) {
        tl.from(
          subtitle,
          { opacity: 0, y: 26, ease: "power1.out" },
          eyebrow || heading ? 0.15 : 0
        );
      }
    }, container);

    // content-visibility:auto doesn't fire a resize ScrollTrigger would
    // otherwise auto-refresh on (the ancestor's own box stays a stable
    // reserved size throughout — only its *descendants'* layout gets
    // skipped/restored). So force one fresh, correct measurement right as
    // this section is about to become relevant, instead of waiting on a
    // refresh that may never come on its own.
    // Only needed if something up the tree can actually hand ScrollTrigger a
    // collapsed measurement — otherwise this is a global ScrollTrigger.refresh()
    // fixing a bug that isn't there, once per header the user scrolls past.
    const revealObserver = hasContentVisibilityAncestor(container)
      ? new IntersectionObserver(
          (entries) => {
            if (!entries[0].isIntersecting) return;
            revealObserver?.disconnect();
            scheduleScrollTriggerRefresh();
          },
          { rootMargin: "800px 0px" }
        )
      : null;
    revealObserver?.observe(container);

    return () => {
      revealObserver?.disconnect();
      split?.revert();
      ctx.revert();
    };
  }, [containerRef]);
}

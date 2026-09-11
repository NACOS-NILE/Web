"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, prefersReducedMotion, scheduleScrollTriggerRefresh, hasContentVisibilityAncestor } from "@/lib/gsap";
import { useSectionHeaderReveal } from "@/lib/useSectionHeaderReveal";
import useIsomorphicLayoutEffect from "@/lib/useIsomorphicLayoutEffect";
import { TechIconField, buildTechIcons, type TechIconSpec } from "./TechIconField";
import { events, type EventItem } from "@/data/events";
import { WHATSAPP_URL } from "@/data/links";

const HEADER_TECH_ICONS = buildTechIcons(["cpu", "terminal", "gitBranch", "cloud", "code", "database"]);

// Confined to the upper band of the spotlight card (shorter than a full
// section), same idea as JoinCTA's own custom icon rig.
const SPOTLIGHT_TECH_ICONS: TechIconSpec[] = [
  { id: "code", type: "code", side: "left", inset: 3, top: 14, size: 26, rotate: -8, driftPercent: 8, mouseFactor: 0.7 },
  { id: "terminal", type: "terminal", side: "left", inset: 5, top: 68, size: 22, rotate: 5, driftPercent: -7, mouseFactor: 1.0 },
  { id: "cpu", type: "cpu", side: "right", inset: 2, top: 16, size: 24, rotate: 7, driftPercent: -8, mouseFactor: 0.85 },
  { id: "database", type: "database", side: "right", inset: 5, top: 70, size: 22, rotate: -5, driftPercent: 6, mouseFactor: 0.5 },
];

const TimeIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

// ── Kinetic "Events" heading ─────────────────────────────────────────────
// A hand-drawn circle draws itself around the word, like circling a date on
// a wall calendar — the concrete gesture people actually use for "mark your
// calendar" — rather than a generic letter-entrance effect. Same shape as
// the site's other bespoke kinetic headline widgets (TrustedBuildersHeading,
// CapturedPhrase, HeartbeatWord): builds a paused timeline once the word
// scrolls into view, plays it, and replays on hover/click. Used in place of
// the plain "Events" span in both header variants.
//
// The path is measured and dash-drawn at runtime (getTotalLength), so the
// draw-on animation works regardless of the loose oval's exact shape — the
// standard technique for a self-drawing SVG line.
function KineticEventsWord() {
  const containerRef = useRef<HTMLSpanElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion()) return;

    let ctx: gsap.Context | null = null;
    let isBuilt = false;

    const buildTimeline = () => {
      if (isBuilt) return;
      isBuilt = true;
      const path = pathRef.current;
      if (!path) return;

      ctx = gsap.context(() => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        const tl = gsap.timeline({ paused: true });
        tlRef.current = tl;

        tl.to(path, {
          strokeDashoffset: 0,
          duration: 0.7,
          ease: "power2.inOut",
        });
      }, containerRef);
    };

    let observer: IntersectionObserver | null = null;
    if (containerRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!isBuilt) buildTimeline();
            tlRef.current?.restart();
          }
        },
        { rootMargin: "150px" }
      );
      observer.observe(containerRef.current);
    }

    return () => {
      observer?.disconnect();
      ctx?.revert();
    };
  }, []);

  return (
    <span
      ref={containerRef}
      onMouseEnter={() => tlRef.current?.restart()}
      onClick={() => tlRef.current?.restart()}
      className="relative inline-flex items-center px-1.5 py-0.5 cursor-pointer select-none text-[#274193]"
      title="Hover to replay"
    >
      Events
      <svg
        aria-hidden="true"
        className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+1.5rem)] h-[calc(100%+1rem)] pointer-events-none overflow-visible"
        viewBox="0 0 150 100"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M14,52 C9,24 42,4 72,4 C103,4 132,12 137,46 C142,78 103,96 66,95 C31,94 17,76 14,52 Z"
          fill="none"
          stroke="#178F04"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

// Parses a "YYYY-MM-DD" date-only string as a LOCAL date (never UTC — see
// the note in data/events.ts on why `new Date("2026-10-18")` is the wrong
// tool here), then labels it relative to today. Only ever runs after mount
// (see the `countdown` state below): if this ran during the static-export
// build too, the label baked into the prerendered HTML would drift out of
// sync with whatever "today" actually is by the time someone visits,
// mismatching what the client then computes on hydration.
function daysUntilLabel(dateISO: string): string {
  const [y, m, d] = dateISO.split("-").map(Number);
  const target = new Date(y, m - 1, d);
  target.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.round((target.getTime() - today.getTime()) / 86_400_000);
  if (diffDays < 0) return "Past event";
  if (diffDays === 0) return "Happening today";
  if (diffDays === 1) return "Tomorrow";
  return `In ${diffDays} days`;
}

// ── "Next up" spotlight — the dark editorial-bookend treatment JoinCTA
// already established for this site, now with a real photo behind the
// brand-blue wash instead of gradient alone. Used both as the mobile
// full-width card and (wrapped by the caller) as the wide first stop in the
// desktop filmstrip below. ────────────────────────────────────────────────
function SpotlightCard({ item }: { item: EventItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [countdown, setCountdown] = useState<string | null>(null);

  useEffect(() => {
    // Deferred a frame rather than called synchronously in the effect body —
    // this is a plain post-mount client computation, not a subscription, so
    // there's nothing to actually synchronize on; the rAF just avoids the
    // same-commit cascading render an inline setState here would trigger.
    const rafId = requestAnimationFrame(() => setCountdown(daysUntilLabel(item.dateISO)));
    return () => cancelAnimationFrame(rafId);
  }, [item.dateISO]);

  useIsomorphicLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.set(card, { opacity: 0, y: 24 });
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative h-full rounded-3xl md:rounded-[2.2rem] text-white overflow-hidden border border-white/10 isolate bg-gray-950"
    >
      {/* BACKDROP PHOTO */}
      <Image
        src={item.image}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 620px"
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/30" />

      {/* BRAND-BLUE AMBIENT WASH, ON TOP OF THE PHOTO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-48 bg-gradient-to-b from-[#274193]/35 via-[#274193]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 inset-x-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      <TechIconField icons={SPOTLIGHT_TECH_ICONS} colorClassName="text-white" minBreakpoint="lg" />

      <div className="relative z-10 flex flex-col h-full p-7 sm:p-10">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-white bg-white/15 px-3 py-1.5 rounded-full">
            Next up
          </span>
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white/80 border border-white/20 px-3 py-1.5 rounded-full">
            {item.tag}
          </span>
        </div>

        <h3 className="font-deacon uppercase text-2xl sm:text-3xl font-black tracking-[-0.03em] leading-[1.1] drop-shadow-lg">
          {item.title}
        </h3>

        <p className="text-sm sm:text-base text-white/80 leading-relaxed mt-3 max-w-lg">
          {item.description}
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 text-sm text-white/85 font-medium">
          <span className="inline-flex items-center gap-1.5">
            <TimeIcon />
            {item.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <PinIcon />
            {item.location}
          </span>
        </div>

        <div className="mt-auto pt-7 flex flex-wrap items-center justify-between gap-4">
          <a
            href={item.ctaHref ?? WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-[48px] px-7 rounded-full bg-white text-gray-950 font-bold text-sm hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group/cta"
          >
            <span>{item.ctaLabel ?? "RSVP now"}</span>
            <ArrowIcon />
          </a>

          <div className="flex flex-col items-end leading-none">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
              {item.month} {item.day}
            </span>
            <span className="text-xs font-bold text-white/90 mt-1">{countdown ?? "Save the date"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Standard card for every other event — image up top, details below.
// Used both in the mobile grid and (wrapped by the caller) as a filmstrip
// stop on desktop. ─────────────────────────────────────────────────────────
function EventCard({ item }: { item: EventItem }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.set(card, { opacity: 0, y: 28 });
      gsap.to(card, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 92%",
          end: "top 65%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });

    // Only worth watching if something up the tree can actually hand this a
    // collapsed measurement — otherwise it's a global ScrollTrigger.refresh()
    // on every scroll pass, once per card, fixing a bug that isn't there.
    const revealObserver = hasContentVisibilityAncestor(card)
      ? new IntersectionObserver(() => scheduleScrollTriggerRefresh(), { rootMargin: "800px 0px" })
      : null;
    revealObserver?.observe(card);

    return () => {
      revealObserver?.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group flex flex-col h-full rounded-2xl sm:rounded-3xl border border-gray-200/80 bg-white hover:border-[#274193]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-36 sm:h-40 shrink-0 overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 380px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
        <span className="absolute top-3 left-3 text-[10px] font-mono font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
          {item.tag}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#274193]">
          {item.month} {item.day}
        </span>

        <h3 className="font-deacon uppercase text-base sm:text-lg font-bold text-gray-950 tracking-tight leading-snug mt-1.5">
          {item.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed mt-2 flex-1">
          {item.description}
        </p>

        <div className="flex flex-col gap-1.5 mt-4 text-xs sm:text-sm text-gray-700 font-medium">
          <span className="inline-flex items-center gap-1.5 text-gray-500">
            <TimeIcon />
            {item.time}
          </span>
          <span className="inline-flex items-center gap-1.5 text-gray-500">
            <PinIcon />
            {item.location}
          </span>
        </div>

        <a
          href={item.ctaHref ?? WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold text-[#274193] hover:text-[#1e3478] transition-colors group/cta"
        >
          <span>{item.ctaLabel ?? "Details"}</span>
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
}

// ── Scattered polaroid timeline — the desktop filmstrip's actual stops.
// Each event is a tilted, tape-pinned photo hanging off a thin connector
// above or below a shared thread (PinnedYearStage draws the thread itself),
// alternating sides so consecutive stops don't visually collide. The
// featured/"next up" event gets a bigger, straighter, un-alternated polaroid
// with its own sticker and a live countdown — same idea as the old
// SpotlightCard's emphasis, just in this card's own visual language instead
// of a separate dark full-bleed block. ─────────────────────────────────────
const ROTATIONS = [-6, 5, -4, 6, -5, 4, -3];

function Polaroid({
  item,
  rotate,
  big = false,
  onSelect,
}: {
  item: EventItem;
  rotate: number;
  big?: boolean;
  onSelect: (item: EventItem) => void;
}) {
  const [countdown, setCountdown] = useState<string | null>(null);

  useEffect(() => {
    if (!big) return;
    // Deferred a frame rather than called synchronously in the effect body —
    // see the identical rationale on SpotlightCard's countdown effect above.
    const rafId = requestAnimationFrame(() => setCountdown(daysUntilLabel(item.dateISO)));
    return () => cancelAnimationFrame(rafId);
  }, [big, item.dateISO]);

  // Image height is a fixed pixel value, deliberately NOT aspect-ratio-driven
  // off the card's width — an aspect-[4/5] photo at a "big"-card width scales
  // to ~400px tall on its own, which (plus caption + padding + the
  // connector's own reach from the shared center line) was taller than the
  // filmstrip viewport's own half-height, so the top of every "big" polaroid
  // rendered above y=0 and got clipped by the viewport's overflow-hidden.
  // A fixed height makes the card's total height — and therefore how far it
  // reaches from the center line — a known, budgeted quantity instead of
  // something that grows with width.
  const imageHeight = big ? 230 : 190;

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group/polaroid relative flex flex-col items-center text-left cursor-pointer"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* THE PHYSICAL PROP: tape + white border + photo only — the caption
          now lives outside this, on the page itself (see below), rather
          than squeezed into the polaroid's own bottom margin. */}
      <div
        className={`relative bg-white shadow-[0_18px_35px_-10px_rgba(0,0,0,0.3)] group-hover/polaroid:shadow-[0_26px_50px_-10px_rgba(0,0,0,0.4)] group-hover/polaroid:-translate-y-1 group-hover/polaroid:z-30 transition-all duration-300 ${
          big ? "w-[310px] p-3 pb-4" : "w-[225px] p-2.5 pb-3"
        }`}
      >
        {/* washi tape holding it "up" */}
        <span
          aria-hidden="true"
          className={`absolute -top-3 left-1/2 h-5 bg-[#274193]/80 shadow-sm ${big ? "w-16" : "w-12"}`}
          style={{ transform: "translateX(-50%) rotate(-3deg)" }}
        />

        <div className="relative w-full overflow-hidden bg-gray-100" style={{ height: imageHeight }}>
          <Image
            src={item.image}
            alt=""
            fill
            sizes={big ? "310px" : "225px"}
            className="object-cover group-hover/polaroid:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-2 left-2 text-[9px] font-mono font-bold uppercase tracking-wider text-white bg-gray-950/75 px-1.5 py-0.5 rounded-sm">
            {item.tag}
          </span>
          {big && (
            <span className="absolute top-2 right-2 text-[9px] font-mono font-bold uppercase tracking-wider text-white bg-[#274193] px-1.5 py-0.5 rounded-sm">
              Next up
            </span>
          )}
          {/* Bold date badge, overlaid on the photo — legible at a glance
              while panning, unlike the old tiny gray caption text. */}
          <span className="absolute bottom-2 left-2 flex flex-col items-center justify-center leading-none bg-white text-gray-950 rounded-md px-2 py-1 shadow-sm">
            <span className="text-[8px] font-bold uppercase tracking-wider text-gray-500">{item.month}</span>
            <span className={big ? "text-base font-black" : "text-sm font-black"}>{item.day}</span>
          </span>
        </div>

        {/* TICKET PERFORATION: a dashed tear-line near the card's bottom
            edge (the negative margin cancels this frame's own horizontal
            padding so it spans the card's true full width). Reframes this
            from "photo with tape" to "ticket stub" — reads as an actual
            ticket to the event, not just a snapshot of it, which matters
            most for the upcoming events that don't have a photo memory to
            show yet. (Punched-circle notches at the edges were tried here
            too, but against this card's white frame they just read as
            stray floating circles rather than a cut edge — dropped.) */}
        <div
          aria-hidden="true"
          className={`border-t border-dashed border-gray-300 ${
            big ? "mt-2 -mx-3" : "mt-1.5 -mx-2.5"
          }`}
        />
      </div>

      {/* CAPTION — outside the physical prop, sitting on the page below it. */}
      <div className="mt-2.5 text-center px-1 max-w-full">
        {/* Deliberately NOT font-deacon here, unlike the other three event-
            title spots (featured card, grid card, modal) — those all render
            noticeably larger; at this polaroid caption's small size, Deacon's
            display-weight glyphs packed at font-black + tracking-tight read
            as a dense blur rather than actual words. The default sans at a
            lighter weight and normal tracking is what stays legible this
            small. */}
        <h3
          className={`uppercase font-bold text-gray-950 tracking-normal leading-snug ${
            big ? "text-base line-clamp-2" : "text-sm truncate"
          }`}
        >
          {item.title}
        </h3>
        {big && (
          <span className="inline-flex items-center gap-1 mt-1 text-[11px] font-bold text-[#274193]">
            {countdown ?? "Save the date"} · Details
            <ArrowIcon />
          </span>
        )}
      </div>
    </button>
  );
}

// Dot-on-the-thread + short connector, alternating which side of the
// shared horizontal line the polaroid hangs from. Fixed-length connectors
// (not centered-by-flexbox) are what keep every dot landing on the exact
// same line regardless of a stop being "top" or "bottom" composed — see the
// equivalent note this repo already carries on the timeline-dot pattern.
function TimelineStop({
  item,
  index,
  align,
  big = false,
  onSelect,
}: {
  item: EventItem;
  index: number;
  align: "top" | "bottom";
  big?: boolean;
  onSelect: (item: EventItem) => void;
}) {
  const rotate = ROTATIONS[index % ROTATIONS.length];
  // Regular polaroids reach less far from the thread than the half-box
  // budget allows — a short connector left a big empty gap between the card
  // and the box's own edge, so it's stretched out to actually use that
  // slack instead of floating close to center with dead space beyond it.
  const connectorPx = big ? 24 : 70;

  return (
    <div
      className={`relative shrink-0 ${big ? "w-[330px]" : "w-[240px]"} h-full flex items-center justify-center`}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-3 h-3 rounded-full bg-[#274193] ring-4 ring-white shadow" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 w-px bg-gray-300"
        style={{ height: connectorPx, [align === "top" ? "bottom" : "top"]: "50%" }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ [align === "top" ? "bottom" : "top"]: `calc(50% + ${connectorPx}px)` }}
      >
        <Polaroid item={item} rotate={rotate} big={big} onSelect={onSelect} />
      </div>
    </div>
  );
}

// ── Desktop-only: pin the section and let vertical scroll drive a long
// horizontal pan across the whole year's events, like a real filmstrip.
// Deliberately NOT used below `lg` — pin-and-pan-horizontally is a poor
// pattern on touch (no scroll wheel to "consume" gradually, and it fights
// native swipe-to-go-back gestures) which is why the caller keeps a plain
// stacked layout for smaller breakpoints instead of reusing this.
//
// `panEnabled` starts false (matching a static export's prerendered HTML)
// and flips true post-mount only when motion is allowed — same
// mount-then-upgrade shape as SpotlightCard's countdown, for the same
// hydration reason. Reduced-motion desktop visitors get the identical
// markup but as a plain `overflow-x-auto` strip: no pin, no transform, just
// native horizontal scroll — never a clipped box with only the first stop
// reachable.
// Pin trigger is `stageRef` itself — the WHOLE stage (section header +
// filmstrip together), not just the filmstrip strip. That's the point:
// scrolling to the section title sticks the title in place right along with
// the filmstrip beneath it, instead of the title scrolling away first and
// only the strip pinning afterward. The horizontal tween still only ever
// targets `trackRef`, so the header itself never moves.
//
// The filmstrip viewport (`filmstripBoxRef`) carries its own negative
// margin to bleed past the section's max-w-7xl/px-* container edge-to-edge
// — the header stays inside that container, centered as normal.
function PinnedYearStage({ header, year, children }: { header: React.ReactNode; year?: string; children: React.ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const filmstripBoxRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);
  const [panEnabled, setPanEnabled] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setPanEnabled(!prefersReducedMotion()));
    return () => cancelAnimationFrame(rafId);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!panEnabled) return;
    const stage = stageRef.current;
    const viewport = filmstripBoxRef.current;
    const track = trackRef.current;
    if (!stage || !viewport || !track) return;

    const ctx = gsap.context(() => {
      const getDistance = () => Math.max(0, track.scrollWidth - viewport.offsetWidth);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          // Deliberately generous (`+= distance`, not a fixed vh figure) —
          // wider/more cards means a genuinely longer pinned scroll, so the
          // pan reads as a real journey through the year instead of a quick
          // flick, without hand-tuning a duration number per breakpoint.
          end: () => "+=" + getDistance(),
          // A large scrub value (this was 0.8) eases the pan toward the
          // scroll position rather than tracking it directly — fine for a
          // slow vertical reveal, but on a horizontal drag-like pan it means
          // every short scroll burst (a trackpad flick, a wheel tick) visibly
          // "catches up" once you stop, which reads as a snap/jump rather
          // than smooth motion. `true` ties the pan 1:1 to scroll position
          // with zero lag instead — the standard choice for this pattern.
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Background year: the same scroll range as the card pan above (an
      // identical trigger/start/end pins both to one shared ScrollTrigger
      // internally, so they can't drift out of sync with each other), but
      // travelling a small fixed distance instead of the track's full
      // (often 1000px+) width. Cards up front sweep through their whole
      // journey while this barely drifts — that gap in travel speed is
      // what reads as depth, the year sitting further back than the
      // filmstrip rather than just being a static watermark behind it.
      if (yearRef.current) {
        gsap.to(yearRef.current, {
          x: -70,
          ease: "none",
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: () => "+=" + getDistance(),
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }
    }, stage);

    // Only worth watching if something up the tree can actually hand this a
    // collapsed measurement — otherwise it's a global ScrollTrigger.refresh()
    // (this one also re-measures a `pin`, the priciest kind) fixing a bug
    // that isn't there.
    const revealObserver = hasContentVisibilityAncestor(stage)
      ? new IntersectionObserver(() => scheduleScrollTriggerRefresh(), { rootMargin: "800px 0px" })
      : null;
    revealObserver?.observe(stage);

    return () => {
      revealObserver?.disconnect();
      ctx.revert();
    };
  }, [panEnabled]);

  return (
    <div ref={stageRef} className="relative flex flex-col justify-center gap-6 h-screen py-6">
      {header}

      {/* True full-bleed to the actual browser viewport edge, not just this
          section's own max-w-7xl/px-* container edge — a plain negative
          margin only cancels the section's own padding and still leaves it
          boxed inside max-w-7xl on anything wider than that, which is
          exactly why cards were still visibly clipped short of the real
          window edge on a wide screen. */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div
          ref={filmstripBoxRef}
          className={`relative h-[720px] ${panEnabled ? "overflow-hidden" : "overflow-x-auto"}`}
        >
          {year && (
            <span
              ref={yearRef}
              aria-hidden="true"
              className="absolute top-4 left-8 sm:left-12 text-[9rem] sm:text-[12rem] font-black text-gray-100 select-none pointer-events-none leading-none -z-10 will-change-transform"
            >
              {year}
            </span>
          )}

          {/* Persistent left-edge rail, not a row above the header — sits at
              the left of the timeline itself and stays put while the track
              pans underneath it (it's a sibling of the track, not inside
              it, so the horizontal transform never touches it). */}
          <Link
            href="/events"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2 group"
          >
            <span className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 group-hover:text-[#274193] group-hover:border-[#274193]/30 transition-colors">
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 group-hover:text-[#274193] text-center max-w-[64px] leading-tight transition-colors">
              Past events
            </span>
          </Link>

          <div
            ref={trackRef}
            className="relative flex items-stretch gap-2 sm:gap-4 h-full will-change-transform pl-[6vw] pr-[22vw]"
            style={{ width: "max-content" }}
          >
            {/* the shared thread every polaroid hangs off of */}
            <div aria-hidden="true" className="absolute left-0 right-0 top-1/2 h-px bg-gray-300" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Reads a media query only after mount — defaults to `false` (the
// mobile-safe, unpinned layout) so a static-export prerender never bakes in
// a pin/full-viewport-height structure sized for a desktop that may not be
// there. Genuinely reactive to viewport-crossing the breakpoint afterward
// (e.g. rotating a tablet, resizing a window), via the media query's own
// `change` event rather than a `resize` listener + manual width check.
function useIsDesktopViewport(minWidthPx = 1024): boolean {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${minWidthPx}px)`);
    const update = () => setIsDesktop(mql.matches);
    // Deferred: this first read is a plain post-mount computation, not a
    // subscription firing — see the identical rationale on SpotlightCard's
    // countdown effect above.
    const rafId = requestAnimationFrame(update);
    mql.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(rafId);
      mql.removeEventListener("change", update);
    };
  }, [minWidthPx]);

  return isDesktop;
}

// ── Detail panel — opened by clicking a polaroid instead of jumping
// straight to an external link. Same lock/close pattern Navbar's mobile
// drawer already uses (Escape to close, body scroll locked while open).
export function EventDetailModal({ item, onClose }: { item: EventItem | null; onClose: () => void }) {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-3xl max-w-lg w-full max-h-[88vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="relative h-56 sm:h-64 bg-gray-100 shrink-0">
          <Image src={item.image} alt="" fill sizes="512px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <span className="absolute bottom-3 left-4 text-[11px] font-mono font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {item.tag}
          </span>
        </div>

        <div className="p-6 sm:p-7">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#274193]">
            {item.month} {item.day}, {item.dateISO.slice(0, 4)}
          </p>
          <h3 className="font-deacon uppercase text-xl sm:text-2xl font-black text-gray-950 tracking-tight leading-snug mt-1.5">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mt-3">{item.description}</p>

          <div className="flex flex-col gap-2 mt-5 text-sm text-gray-700 font-medium">
            <span className="inline-flex items-center gap-2">
              <TimeIcon />
              {item.time}
            </span>
            <span className="inline-flex items-center gap-2">
              <PinIcon />
              {item.location}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a
              href={item.ctaHref ?? WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-[46px] px-6 rounded-full bg-[#274193] hover:bg-[#1e3478] text-white font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group/cta"
            >
              <span>{item.ctaLabel ?? "RSVP now"}</span>
              <ArrowIcon />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center h-[46px] px-6 rounded-full bg-[#F6F6F6] hover:bg-gray-200/80 text-gray-900 font-bold text-sm transition-all duration-200 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EventsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  useSectionHeaderReveal(headerRef);
  const isDesktop = useIsDesktopViewport();
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  // Mobile/tablet grid only (the desktop pinned filmstrip already paces
  // itself via horizontal scroll, so it doesn't need this) — collapsed to
  // a first few cards by default so the section doesn't dominate the whole
  // page on a phone, one tap away from the full list.
  const [mobileShowAll, setMobileShowAll] = useState(false);
  const MOBILE_COLLAPSED_COUNT = 3;

  // Full chronological order — past and future both, once past events exist
  // in the data (hence "Events", not "Upcoming events"). `featured` is
  // whichever is the next one from today, not just the earliest entry, so a
  // past event never gets mistakenly highlighted as "Next up" once this list
  // stops being all-future. Computed from `Date.now()` directly in render
  // rather than gated behind an effect: which card is `big` is a layout
  // decision, not just display text, so — unlike the countdown label above,
  // which is deliberately deferred — this can't wait for a post-mount
  // correction without a visible reflow. The one tradeoff is a same-day
  // static-export build vs. view mismatch right at the boundary event's own
  // date, which is rare enough (once per event, at most) to accept.
  const allEvents = [...events].sort((a, b) => a.dateISO.localeCompare(b.dateISO));
  const todayISO = new Date().toISOString().slice(0, 10);
  const featured = allEvents.find((e) => e.dateISO >= todayISO) ?? allEvents[allEvents.length - 1];
  const rest = allEvents.filter((e) => e.id !== featured?.id);
  const startYear = allEvents[0]?.dateISO.slice(0, 4);
  const endYear = allEvents[allEvents.length - 1]?.dateISO.slice(0, 4);
  const yearRangeLabel = startYear && endYear && startYear !== endYear ? `${startYear}–${endYear}` : startYear;

  // Rendered once, then either placed inline (mobile: normal scroll) or
  // handed to PinnedYearStage (desktop: pinned along with the filmstrip) —
  // never duplicated in the DOM. Only one of these two is ever mounted at a
  // time (the isDesktop ternary below), so both safely share `headerRef` /
  // the same single useSectionHeaderReveal call.
  const header = (
    <div className="relative">
      <TechIconField icons={HEADER_TECH_ICONS} />
      <div ref={headerRef} className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <p data-reveal="eyebrow" className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-gray-600 font-bold mb-3 sm:mb-4">
          The Calendar
        </p>
        <h2 data-reveal="heading" className="font-deacon uppercase text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-950 tracking-[-0.035em] leading-[1.08]">
          <KineticEventsWord />
        </h2>
        <p data-reveal="subtitle" className="text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed mt-4 max-w-xl">
          Hackathons, workshops, and chapter gatherings — what NACOS Nile has run, and what&apos;s coming up next.
        </p>
      </div>
    </div>
  );

  // Compact variant for the pinned desktop stage only: eyebrow + heading,
  // no paragraph. A pinned stage has to fit inside one viewport height
  // (position:fixed content taller than the viewport just goes permanently
  // unreachable below the fold for the whole pin duration), so trimming the
  // header's own footprint here is what actually buys room for bigger
  // polaroids in the filmstrip below it — the full header/subtitle stays
  // exactly as-is for the mobile, normal-scroll layout.
  const compactHeader = (
    <div className="relative">
      <TechIconField icons={HEADER_TECH_ICONS} minBreakpoint="lg" />
      <div ref={headerRef} className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <p data-reveal="eyebrow" className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-gray-600 font-bold mb-2">
          The Calendar
        </p>
        <h2 data-reveal="heading" className="font-deacon uppercase text-3xl lg:text-4xl xl:text-5xl font-black text-gray-950 tracking-[-0.035em] leading-[1.08]">
          <KineticEventsWord />
        </h2>
      </div>
    </div>
  );

  return (
    <section
      id="events"
      className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100"
    >
      {/* Mobile/tablet only — desktop gets the persistent left-edge rail on
          the filmstrip itself instead (see PinnedYearStage), since there's
          no "timeline" here to attach it to at these breakpoints. */}
      <div className="relative z-10 mb-6 sm:mb-8 lg:hidden">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#274193] transition-colors group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>See past events</span>
        </Link>
      </div>

      {isDesktop && featured ? (
        // DESKTOP: title pins along with the filmstrip beneath it — scroll
        // reaching the section title is what sticks the whole stage, not
        // just the strip. Filmstrip items escape the section's own
        // max-w-7xl/px-* padding (see PinnedYearStage); the title stays
        // centered in it like every other section header.
        <PinnedYearStage header={compactHeader} year={yearRangeLabel}>
          {allEvents.map((item, i) => (
            <TimelineStop
              key={item.id}
              item={item}
              index={i}
              align={i % 2 === 0 ? "top" : "bottom"}
              big={item.id === featured.id}
              onSelect={setSelectedEvent}
            />
          ))}
        </PinnedYearStage>
      ) : (
        <>
          <div className="mb-14 sm:mb-16">{header}</div>

          {/* MOBILE / TABLET fallback: plain stacked spotlight + grid — no
              pin, no horizontal pan (a poor pattern on touch). Also what a
              desktop viewport renders for one frame before
              useIsDesktopViewport resolves post-mount. */}
          {featured ? (
            <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
              <div className="h-[420px] sm:h-[380px]">
                <SpotlightCard item={featured} />
              </div>

              {rest.length > 0 && (
                <>
                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                    {(mobileShowAll ? rest : rest.slice(0, MOBILE_COLLAPSED_COUNT)).map((item) => (
                      <div key={item.id} className="h-[440px]">
                        <EventCard item={item} />
                      </div>
                    ))}
                  </div>

                  {rest.length > MOBILE_COLLAPSED_COUNT && !mobileShowAll && (
                    <button
                      type="button"
                      onClick={() => setMobileShowAll(true)}
                      className="inline-flex items-center justify-center gap-2 self-center px-6 py-3 rounded-full border border-gray-200 text-sm font-bold text-gray-700 hover:text-[#274193] hover:border-[#274193]/30 active:scale-[0.98] transition-all"
                    >
                      Show {rest.length - MOBILE_COLLAPSED_COUNT} more events
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="relative z-10 text-center py-12 px-6 rounded-2xl sm:rounded-3xl bg-[#F6F6F6]">
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                No events on the calendar right now — join the WhatsApp community to hear about the next one first.
              </p>
            </div>
          )}
        </>
      )}

      <EventDetailModal item={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
}

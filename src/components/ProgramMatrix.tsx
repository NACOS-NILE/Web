"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import gsap from "gsap";
import { PROGRAMS, type Program } from "@/lib/data";
import { BookIcon, BriefcaseIcon, SparkIcon, TrophyIcon } from "@/components/Icons";

/** Seconds each programme stays lit before the matrix moves on. */
const DWELL = 5;
/** How far the panel leans toward the lit quadrant, in degrees. */
const TILT = 6;
/** Circumference of the countdown ring (r = 27). */
const RING = 2 * Math.PI * 27;

type Quadrant = {
  /** Which programme sits here — looked up in PROGRAMS, so copy stays in data.ts. */
  icon: Program["icon"];
  eyebrow: string;
  accent: string;
  row: "top" | "bottom";
  col: "left" | "right";
};

/**
 * The four programmes, placed on two axes: Learn → Build down the side, and
 * On campus → Into industry across the top. Source order is reading order
 * (top-left, top-right, bottom-left, bottom-right), which is also the order
 * the grid lays them out in and the order a screen reader meets them.
 */
const QUADRANTS: Quadrant[] = [
  { icon: "book", eyebrow: "Tutorials", accent: "#60a5fa", row: "top", col: "left" },
  { icon: "briefcase", eyebrow: "Mentorship", accent: "#a78bfa", row: "top", col: "right" },
  { icon: "spark", eyebrow: "Bootcamps", accent: "#22d3ee", row: "bottom", col: "left" },
  { icon: "trophy", eyebrow: "Hackathon", accent: "#818cf8", row: "bottom", col: "right" },
];

const ICONS = { book: BookIcon, briefcase: BriefcaseIcon, spark: SparkIcon, trophy: TrophyIcon };

/** Media queries as React state, without a hydration mismatch: the server
 *  snapshot is `false`, and the real answer arrives on the first client pass. */
function useMedia(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

const subscribeNothing = () => () => {};

/** False during the server render and hydration, true once React owns the page. */
function useHydrated() {
  return useSyncExternalStore(subscribeNothing, () => true, () => false);
}

/* ---------------------------------------------------------- corner visuals */

/** Tutorials: a study checklist ticking itself off. */
function Checklist({ accent }: { accent: string }) {
  return (
    <div className="w-[5.75rem] space-y-1.5 rounded-lg border border-white/10 bg-white/[0.04] p-2">
      {["78%", "58%", "90%"].map((width, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <span
            className="grid size-2.5 shrink-0 place-items-center rounded-[3px] border"
            style={{ borderColor: accent }}
          >
            <span className="mx-tick size-1.5 rounded-[1px]" style={{ background: accent }} />
          </span>
          <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
            <span className="mx-bar block h-full rounded-full" style={{ width, background: accent }} />
          </span>
        </div>
      ))}
    </div>
  );
}

/** Mentorship: a radar sweeping until it finds someone — the match. */
function Radar({ accent }: { accent: string }) {
  return (
    <div className="relative size-16">
      <span className="absolute inset-0 rounded-full border border-white/10" />
      <span className="absolute inset-3 rounded-full border border-white/10" />
      <span
        className="mx-sweep absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(transparent 0deg, transparent 280deg, ${accent}70 360deg)`,
        }}
      />
      {/* Offset with margins, not translate: GSAP owns `transform` on the
          blip and the ping, and would wipe a translate out on its first frame. */}
      <span
        className="absolute top-1/2 left-1/2 -mt-1 -ml-1 size-2 rounded-full"
        style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
      />
      <span
        className="mx-ping absolute top-[30%] left-[70%] -mt-[3px] -ml-[3px] size-1.5 rounded-full border"
        style={{ borderColor: accent }}
      />
      <span className="mx-blip absolute top-[30%] left-[70%] -mt-[3px] -ml-[3px] size-1.5 rounded-full bg-white" />
    </div>
  );
}

/** Bootcamps: a terminal typing out its first lines. */
function Terminal({ accent }: { accent: string }) {
  return (
    <div className="w-[5.75rem] rounded-lg border border-white/10 bg-black/40 p-2">
      <div className="mb-1.5 flex gap-1">
        {[0, 1, 2].map((i) => (
          <span key={i} className="size-1 rounded-full bg-white/25" />
        ))}
      </div>
      {["72%", "48%", "86%"].map((width, i) => (
        <span key={i} className="mt-1 block h-1 rounded-full" style={{ width }}>
          <span
            className="mx-line block h-full rounded-full"
            style={{ background: i === 2 ? accent : "rgba(255,255,255,0.35)" }}
          />
        </span>
      ))}
      <span className="mx-caret mt-1.5 block h-1.5 w-1 rounded-[1px]" style={{ background: accent }} />
    </div>
  );
}

/** Hackathon: the clock running down on the build sprint. */
function Countdown({ accent }: { accent: string }) {
  return (
    <div className="relative grid size-16 place-items-center">
      <svg viewBox="0 0 64 64" className="absolute inset-0 size-16 -rotate-90" aria-hidden="true">
        <circle cx="32" cy="32" r="27" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
        <circle
          className="mx-ring"
          cx="32"
          cy="32"
          r="27"
          fill="none"
          stroke={accent}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={RING}
        />
      </svg>
      <TrophyIcon className="mx-trophy relative size-6" style={{ color: accent }} />
    </div>
  );
}

const VISUALS = { book: Checklist, briefcase: Radar, spark: Terminal, trophy: Countdown };

/**
 * The loop each corner visual runs while its card is lit or open. Called
 * inside a gsap.context scoped to that visual, so moving on reverts every
 * inline style it wrote and the next card starts from clean markup.
 */
const VISUAL_MOTION: Record<Program["icon"], (el: HTMLElement) => void> = {
  book: (el) => {
    const bars = [...el.querySelectorAll(".mx-bar")];
    const ticks = [...el.querySelectorAll(".mx-tick")];
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
    tl.set(bars, { scaleX: 0, transformOrigin: "left center" }).set(ticks, { scale: 0 });
    bars.forEach((bar, i) => {
      tl.to(bar, { scaleX: 1, duration: 0.55, ease: "power2.out" }, i * 0.6).to(
        ticks[i],
        { scale: 1, duration: 0.3, ease: "back.out(3)" },
        i * 0.6 + 0.45,
      );
    });
    tl.to([...bars, ...ticks], { opacity: 0, duration: 0.3 }, "+=0.9").set([...bars, ...ticks], {
      opacity: 1,
    });
  },
  briefcase: (el) => {
    gsap
      .timeline({ repeat: -1 })
      .fromTo(el.querySelector(".mx-sweep"), { rotation: 0 }, { rotation: 360, duration: 2.4, ease: "none" }, 0)
      .fromTo(
        el.querySelector(".mx-ping"),
        { scale: 1, opacity: 0.9 },
        { scale: 4, opacity: 0, duration: 1.1, ease: "power2.out" },
        1.5,
      )
      .fromTo(
        el.querySelector(".mx-blip"),
        { scale: 0.4, opacity: 0.25 },
        { scale: 1, opacity: 1, duration: 0.25, ease: "back.out(3)" },
        1.5,
      );
  },
  spark: (el) => {
    const lines = [...el.querySelectorAll(".mx-line")];
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    tl.set(lines, { scaleX: 0, transformOrigin: "left center" });
    // Stepped, so each line arrives a few characters at a time like typing
    // rather than sliding out like a progress bar.
    lines.forEach((line, i) => tl.to(line, { scaleX: 1, duration: 0.6, ease: "steps(7)" }, i * 0.7));
    tl.to(lines, { opacity: 0, duration: 0.25 }, "+=0.9").set(lines, { opacity: 1 });
    gsap.to(el.querySelector(".mx-caret"), { opacity: 0, duration: 0.5, repeat: -1, yoyo: true, ease: "steps(1)" });
  },
  trophy: (el) => {
    // Drains over exactly one dwell, so the clock runs out as the matrix moves on.
    gsap.fromTo(
      el.querySelector(".mx-ring"),
      { strokeDashoffset: 0 },
      { strokeDashoffset: RING, duration: DWELL, ease: "none", repeat: -1 },
    );
    gsap.to(el.querySelector(".mx-trophy"), { y: -2, duration: 0.8, repeat: -1, yoyo: true, ease: "sine.inOut" });
  },
};

/** The dot field over the panel, lit only in a pool around the active quadrant. */
const DOTS: CSSProperties = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1.5px)",
  backgroundSize: "16px 16px",
  maskImage: "radial-gradient(circle at var(--sx) var(--sy), #000, transparent 45%)",
  WebkitMaskImage: "radial-gradient(circle at var(--sx) var(--sy), #000, transparent 45%)",
};

/**
 * The programmes as a quadrant matrix: a panel leaning toward whichever
 * programme is lit, cycling through them on a timer, with a small live
 * visual in the lit corner.
 *
 * On narrow screens the apparatus drops away and they become an accordion:
 * each card shows its title, and a tap opens it to the description and its
 * visual, closing whichever card was open before.
 */
export default function ProgramMatrix() {
  const desktop = useMedia("(min-width: 48rem)");
  const motion = useMedia("(prefers-reduced-motion: no-preference)");
  const hydrated = useHydrated();

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(false);
  /** The open accordion card on narrow screens. All start closed. */
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const enteredRef = useRef(false);

  const quadrants = QUADRANTS.map((q) => ({ ...q, program: PROGRAMS.find((p) => p.icon === q.icon) })).filter(
    (q): q is Quadrant & { program: Program } => Boolean(q.program),
  );

  /** Whichever card is showing its visual: the lit quadrant, or the open card. */
  const lit = desktop ? active : openIdx;

  // Whether the panel is on screen at all. The timer stops when it is not,
  // so nobody scrolls back to find it three programmes further along.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    io.observe(panel);
    return () => io.disconnect();
  }, []);

  // Entrance, once: the crosshair draws itself, the centre dot lands, the
  // quadrants rise into place and the axis labels fade up last.
  useEffect(() => {
    const root = rootRef.current;
    const panel = panelRef.current;
    if (!root || !panel || !desktop || !motion || enteredRef.current) return;
    if (!document.documentElement.classList.contains("anim-armed")) return;
    if (typeof IntersectionObserver === "undefined") return;

    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ paused: true })
        .fromTo(".mx-hline", { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power3.inOut" }, 0)
        .fromTo(".mx-vline", { scaleY: 0 }, { scaleY: 1, duration: 0.9, ease: "power3.inOut" }, 0.1)
        .fromTo(".mx-center", { scale: 0 }, { scale: 1, duration: 0.5, ease: "back.out(2.5)" }, 0.75)
        // The inner wrapper, not the cell: the cell's own opacity is the
        // dimming, driven by CSS, and an inline opacity here would pin it.
        .fromTo(
          ".mx-inner",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.09, clearProps: "opacity,transform" },
          0.35,
        )
        .fromTo(".mx-axis", { opacity: 0 }, { opacity: 1, duration: 0.6, stagger: 0.06, clearProps: "opacity" }, 0.6);

      const io = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          io.disconnect();
          enteredRef.current = true;
          tl.play();
        },
        { threshold: 0.3 },
      );
      io.observe(panel);
      return () => io.disconnect();
    }, root);

    return () => ctx.revert();
  }, [desktop, motion]);

  // Lean toward the lit quadrant and move the dot pool over it. Back-out, so
  // the panel overshoots a touch and settles — it should feel weighted.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const q = QUADRANTS[active];
    const pool = { "--sx": q.col === "left" ? "25%" : "75%", "--sy": q.row === "top" ? "25%" : "75%" };

    if (!desktop) {
      gsap.set(panel, { clearProps: "transform" });
      return;
    }
    if (!motion) {
      gsap.set(panel, pool);
      return;
    }
    const tween = gsap.to(panel, {
      ...pool,
      rotationX: q.row === "top" ? -TILT : TILT,
      rotationY: q.col === "left" ? TILT : -TILT,
      duration: 0.9,
      ease: "back.out(1.4)",
    });
    return () => {
      tween.kill();
    };
  }, [active, desktop, motion]);

  // The autoplay timer, drawn as the lit quadrant's bottom edge filling up.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const bars = [...panel.querySelectorAll<HTMLElement>(".mx-progress")];
    gsap.set(bars, { scaleX: 0 });
    if (!desktop || !motion || paused || hovering || !inView) return;

    const tween = gsap.fromTo(
      bars[active],
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: DWELL,
        ease: "none",
        onComplete: () => setActive((a) => (a + 1) % QUADRANTS.length),
      },
    );
    return () => {
      tween.kill();
    };
  }, [active, desktop, motion, paused, hovering, inView]);

  // The corner visual of whichever card is lit or open, running only then.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || !motion || lit === null) return;
    const visual = panel.querySelectorAll<HTMLElement>(".mx-cell")[lit]?.querySelector<HTMLElement>(".mx-visual");
    if (!visual) return;
    const ctx = gsap.context(() => VISUAL_MOTION[QUADRANTS[lit].icon](visual), visual);
    return () => ctx.revert();
  }, [lit, motion]);

  const axis = "mx-axis text-[10px] font-semibold tracking-[0.3em] text-brand-100/70 uppercase";

  return (
    <div ref={rootRef} data-ready={desktop} className="group/matrix mx-auto max-w-5xl">
      <div className="md:grid md:grid-cols-[auto_1fr_auto] md:grid-rows-[auto_1fr_auto] md:gap-x-5 md:gap-y-3 md:[perspective:1400px]">
        <span aria-hidden="true" className={`${axis} hidden text-center md:col-start-2 md:row-start-1 md:block`}>
          Learn
        </span>
        <span
          aria-hidden="true"
          className={`${axis} hidden rotate-180 items-center justify-center [writing-mode:vertical-rl] md:col-start-1 md:row-start-2 md:flex`}
        >
          On campus
        </span>

        <div
          ref={panelRef}
          className="relative md:col-start-2 md:row-start-2"
          style={{ "--sx": "25%", "--sy": "25%" } as CSSProperties}
        >
          <ul
            aria-label="Programmes"
            onPointerLeave={() => setHovering(false)}
            className="relative grid gap-4 md:grid-cols-2 md:gap-0 md:overflow-hidden md:rounded-2xl md:border md:border-white/[0.08] md:bg-[#0a1330] md:shadow-[0_50px_120px_rgba(0,0,0,0.55)]"
          >
            {quadrants.map((q, i) => {
              const Icon = ICONS[q.icon];
              const Visual = VISUALS[q.icon];
              const [lead, rest] = q.program.title.split(" & ");
              const corner = `${q.col === "left" ? "0%" : "100%"} ${q.row === "top" ? "0%" : "100%"}`;
              const isOpen = openIdx === i;
              const regionId = `programme-detail-${q.icon}`;
              const title = (
                <>
                  {lead}
                  {rest ? (
                    <>
                      {" "}
                      <span style={{ color: q.accent }}>&amp; {rest}</span>
                    </>
                  ) : null}
                </>
              );

              return (
                <li
                  key={q.icon}
                  // Each screen size reads its own attribute: the lit quadrant
                  // on wide screens, the open card on narrow ones.
                  data-active={desktop ? i === active : undefined}
                  data-open={desktop ? undefined : isOpen}
                  onPointerEnter={(e) => {
                    if (!desktop || e.pointerType !== "mouse") return;
                    setActive(i);
                    setHovering(true);
                  }}
                  onClick={() => desktop && setActive(i)}
                  className="mx-cell group/cell relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-[opacity,border-color,box-shadow] duration-500 has-[button:focus-visible]:outline-2 has-[button:focus-visible]:outline-offset-2 has-[button:focus-visible]:outline-accent md:min-h-[15rem] md:rounded-none md:border-0 md:bg-transparent lg:min-h-[16rem] lg:p-8 group-data-[ready=true]/matrix:data-[active=false]:opacity-45"
                  style={
                    !desktop && isOpen
                      ? { borderColor: `${q.accent}66`, boxShadow: `0 0 36px ${q.accent}22` }
                      : undefined
                  }
                >
                  {/* Accent wash, blooming from the cell's outer corner — for
                      the lit quadrant, or the open card. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-data-[active=true]/cell:opacity-100 group-data-[open=true]/cell:opacity-100"
                    style={{ background: `radial-gradient(120% 130% at ${corner}, ${q.accent}38, transparent 62%)` }}
                  />

                  <div className="mx-inner relative">
                    <div className="flex items-center gap-3">
                      <span
                        className="grid size-9 place-items-center rounded-lg border"
                        style={{ borderColor: `${q.accent}55`, background: `${q.accent}1f`, color: q.accent }}
                      >
                        <Icon className="size-5" />
                      </span>
                      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: q.accent }}>
                        {q.eyebrow}
                      </span>
                    </div>

                    <h3 className="mt-4 max-w-[22rem] pr-8 text-lg leading-snug font-bold text-balance text-white md:pr-0 lg:text-xl">
                      {desktop ? (
                        title
                      ) : (
                        // The heading-wrapped button is the accordion pattern
                        // proper; the stretched ::after makes the whole card
                        // the tap target without making it a button itself.
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={regionId}
                          onClick={() => setOpenIdx((o) => (o === i ? null : i))}
                          className="text-left after:absolute after:-inset-6 after:content-[''] focus-visible:outline-none"
                        >
                          {title}
                        </button>
                      )}
                    </h3>

                    <div
                      id={regionId}
                      data-open={isOpen}
                      // Closed cards leave the accessibility tree along with
                      // the screen. Only once hydrated: before that nothing
                      // could open them, so their copy has to stay reachable.
                      inert={hydrated && !desktop && !isOpen}
                      className="mx-desc"
                    >
                      <div>
                        <p className="mt-2 max-w-[19rem] text-sm leading-relaxed text-pretty text-brand-100/70">
                          {q.program.description}
                        </p>
                        {/* In the flow of the open card on phones; pinned to
                            the lit quadrant's corner on wide screens. */}
                        <div
                          aria-hidden="true"
                          className="mx-visual pointer-events-none mt-4 ml-auto w-fit md:hidden lg:absolute lg:right-5 lg:bottom-5 lg:mt-0 lg:block lg:opacity-0 lg:transition-opacity lg:duration-500 lg:group-data-[active=true]/cell:opacity-100"
                        >
                          <Visual accent={q.accent} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-6 right-6 text-brand-100/60 transition-transform duration-300 group-data-[open=true]/cell:rotate-180 md:hidden"
                  >
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
                      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>

                  <span
                    aria-hidden="true"
                    className="mx-progress absolute inset-x-0 bottom-0 hidden h-[3px] origin-left md:block"
                    style={{ background: q.accent, transform: "scaleX(0)" }}
                  />
                </li>
              );
            })}
          </ul>

          {/* The crosshair and the dot pool sit over the quadrants, never in
              the way of the pointer. */}
          <span
            aria-hidden="true"
            className="mx-hline pointer-events-none absolute inset-x-0 top-1/2 hidden h-px origin-left bg-white/20 md:block"
          />
          <span
            aria-hidden="true"
            className="mx-vline pointer-events-none absolute inset-y-0 left-1/2 hidden w-px origin-top bg-white/20 md:block"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden rounded-2xl md:block"
            style={DOTS}
          />
          <span
            aria-hidden="true"
            className="mx-center pointer-events-none absolute top-1/2 left-1/2 -mt-1.5 -ml-1.5 hidden size-3 rounded-full bg-white ring-4 ring-brand-950 md:block"
          />
        </div>

        <span
          aria-hidden="true"
          className={`${axis} hidden items-center justify-center [writing-mode:vertical-rl] md:col-start-3 md:row-start-2 md:flex`}
        >
          Into industry
        </span>
        <span aria-hidden="true" className={`${axis} hidden text-center md:col-start-2 md:row-start-3 md:block`}>
          Build
        </span>
      </div>

      {/* Anything that moves on its own for more than five seconds needs a way
          to stop it. Only rendered where the autoplay actually runs. */}
      {desktop && motion ? (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-brand-100/80 transition hover:border-white/30 hover:text-white"
          >
            <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden="true">
              {paused ? <path d="M5 3.5v9l7-4.5-7-4.5Z" /> : <path d="M4.5 3h2.5v10H4.5zM9 3h2.5v10H9z" />}
            </svg>
            {paused ? "Resume auto-play" : "Pause auto-play"}
          </button>
        </div>
      ) : null}
    </div>
  );
}

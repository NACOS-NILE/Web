"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "@/components/Icons";
import ThemeToggle from "@/components/ThemeToggle";

/** Where the sliding highlight sits, and whether it should animate getting there. */
type Highlight = { left: number; width: number; shown: boolean; animate: boolean };

const HIDDEN: Highlight = { left: 0, width: 0, shown: false, animate: false };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState<Highlight>(HIDDEN);
  const listRef = useRef<HTMLUListElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /**
   * Moves the highlight under a link. Coming from hidden it jumps into place
   * and only fades in — animating from a collapsed pill at the left edge reads
   * as a glitch — while moving between links slides.
   */
  const moveHighlight = useCallback((target: HTMLElement) => {
    const list = listRef.current;
    if (!list) return;

    // Measure the text, not the link's padding box. The links carry px-3.5, so
    // the box is 28px wider than the word and would leave the underline
    // floating clear of the text it belongs to.
    //
    // A Range over the link's contents measures the glyphs themselves, which
    // avoids wrapping the label in a span purely to have something to measure
    // — an extra element inside a link is one more thing between the text and
    // its accessible name.
    const range = document.createRange();
    range.selectNodeContents(target);
    const { left, width } = range.getBoundingClientRect();
    range.detach();

    const next = { left: left - list.getBoundingClientRect().left, width };

    setHighlight((prev) => ({ ...next, shown: true, animate: prev.shown }));
  }, []);

  // Keep the highlight under the link the pointer is on if the bar reflows.
  useEffect(() => {
    if (!highlight.shown) return;
    const onResize = () => setHighlight(HIDDEN);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [highlight.shown]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scrolling while the mobile sheet is open. The lock itself
  // lives in globals.css behind the same breakpoint as the sheet, so it lifts
  // on its own if the window is widened while the sheet is open.
  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
    return () => document.documentElement.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Move focus into the drawer when it opens and hand it back to the button
  // that opened it on the way out, so keyboard and screen-reader users are not
  // left at the top of the page with no idea what happened.
  useEffect(() => {
    if (!open) return;
    // Captured now: by the time the cleanup runs the ref may point elsewhere.
    const opener = toggleRef.current;
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => opener?.focus();
  }, [open]);

  // The sheet is `lg:hidden`, so widening past that breakpoint hides it without
  // closing it, leaving `aria-expanded` claiming a menu the reader cannot see.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };
    onChange();

    // Safari below 14 and older Android browsers only implement the deprecated
    // addListener. Calling addEventListener there throws, and an exception in
    // an effect takes the whole tree down — which on a phone looks exactly like
    // "the buttons do nothing".
    if (typeof desktop.addEventListener === "function") {
      desktop.addEventListener("change", onChange);
      return () => desktop.removeEventListener("change", onChange);
    }
    desktop.addListener(onChange);
    return () => desktop.removeListener(onChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/*
        Solid at every width below `lg`, where the bar sits directly over hero
        copy on a narrow screen and transparency makes both hard to read. The
        transparent-until-scrolled treatment is a desktop-only flourish, so it
        is applied from `lg` up.
      */}
      <div
        className={`transition-all duration-300 max-lg:border-b max-lg:border-brand-900/10 max-lg:bg-white/95 max-lg:backdrop-blur-xl max-lg:dark:border-white/10 max-lg:dark:bg-brand-950/95 ${
          scrolled
            ? "lg:border-b lg:border-brand-900/10 lg:bg-white/80 lg:backdrop-blur-xl lg:dark:border-white/10 lg:dark:bg-brand-950/80"
            : ""
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
        >
          <a href="#top" className="flex items-center gap-2.5" aria-label="NACOS Nile — home">
            <Image
              src="/logo.svg"
              alt=""
              width={80}
              height={38}
              priority
              className="h-9 w-auto"
            />
            <span className="flex min-w-0 flex-col leading-none">
              <span className="text-base font-bold tracking-tight text-brand-900 dark:text-white">
                NACOS Nile
              </span>
              {/*
                Below ~360px the brand, the toggle and the menu button cannot
                all fit: this line wraps to two rows inside a fixed-height bar
                and squeezes the lot. The chapter name is repeated in the hero
                and the footer, so dropping it here costs nothing.
              */}
              <span className="mt-0.5 hidden text-[11px] font-medium text-brand-600/80 min-[360px]:block dark:text-brand-200/70">
                Nile University Chapter
              </span>
            </span>
          </a>

          <ul
            ref={listRef}
            onPointerLeave={() => setHighlight((prev) => ({ ...prev, shown: false }))}
            onBlur={(e) => {
              // Only drop the highlight once focus has left the list entirely.
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                setHighlight((prev) => ({ ...prev, shown: false }));
              }
            }}
            className="relative hidden items-center gap-1 lg:flex"
          >
            {/*
              A single dot that tracks the pointer across the bar. The outer
              span owns position and width — animated only when travelling
              between links — and centres the dot over whichever label is
              measured. The inner span owns the pop-in, so arriving from
              outside the bar grows the dot in place rather than flying it in
              from wherever it was last left.
            */}
            <span
              aria-hidden="true"
              style={{ transform: `translateX(${highlight.left}px)`, width: highlight.width }}
              className={`pointer-events-none absolute bottom-1 left-0 flex justify-center ${
                highlight.animate ? "transition-[transform,width] duration-300 ease-out" : ""
              }`}
            >
              <span
                style={{
                  opacity: highlight.shown ? 1 : 0,
                  transform: `scale(${highlight.shown ? 1 : 0.2})`,
                }}
                className="block size-1.5 rounded-full bg-brand-600 transition-[opacity,transform] duration-300 ease-out dark:bg-brand-300"
              />
            </span>

            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onPointerEnter={(e) => moveHighlight(e.currentTarget)}
                  onFocus={(e) => moveHighlight(e.currentTarget)}
                  className="group relative block rounded-full px-3.5 py-2 text-sm font-medium text-brand-800/80 dark:text-brand-100/75"
                >
                  {/*
                    Text roll: the label lifts out of a one-line mask while an
                    identical copy rises into its place. The copy is aria-hidden
                    so the link is still announced once, and both sit in the
                    same box so nothing reflows.
                  */}
                  <span className="relative block overflow-hidden">
                    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full group-focus-visible:-translate-y-full">
                      {link.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 block translate-y-full font-semibold text-brand-700 transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0 dark:text-white"
                    >
                      {link.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#community"
              className="hidden items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 hover:shadow-brand-600/40 sm:inline-flex"
            >
              Join Community
              <ArrowRightIcon className="size-4" />
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex size-10 items-center justify-center rounded-full border border-brand-900/10 bg-white/70 text-brand-900 transition hover:bg-white lg:hidden dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/*
        Mobile navigation drawer. It slides in from the right rather than
        pushing the page down, so the content behind keeps its place and the
        panel can hold the full link list at a comfortable tap size.

        `inert` while closed keeps it out of the tab order and the
        accessibility tree without `hidden`, which would kill the slide
        animation by removing the panel outright.
      */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-10 bg-brand-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        className={`fixed inset-y-0 right-0 z-20 flex w-[min(20rem,85vw)] flex-col border-l border-brand-900/10 bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden dark:border-white/10 dark:bg-brand-950 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-18 shrink-0 items-center justify-between border-b border-brand-900/10 px-5 dark:border-white/10">
          <span className="text-sm font-bold tracking-wide text-brand-900 uppercase dark:text-white">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex size-10 items-center justify-center rounded-full border border-brand-900/10 text-brand-900 transition hover:bg-brand-600/10 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-5">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group relative flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-brand-900 transition-colors duration-300 hover:bg-brand-600/10 active:bg-brand-600/15 dark:text-brand-50 dark:hover:bg-white/10 dark:active:bg-white/15"
                >
                  {/*
                    An accent rule that grows from the middle of the row, so the
                    highlight reads as arriving rather than simply appearing.
                    `active:` is carried alongside `hover:` throughout: a drawer
                    is mostly tapped, and a tap gives no hover state to speak of.
                  */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-2 left-0 w-0.5 origin-center scale-y-0 rounded-full bg-brand-600 transition-transform duration-300 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100 group-active:scale-y-100 dark:bg-brand-300"
                  />
                  <span className="transition-transform duration-300 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2 group-active:translate-x-2">
                    {link.label}
                  </span>
                  <ArrowRightIcon className="size-4 opacity-40 transition duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100 group-active:translate-x-1 group-active:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-brand-900/10 p-4 dark:border-white/10">
          <a
            href="#community"
            onClick={() => setOpen(false)}
            className="group flex items-center justify-center gap-1.5 rounded-full bg-brand-600 px-5 py-3.5 text-base font-semibold text-white transition duration-300 hover:bg-brand-700 active:scale-[0.98] active:bg-brand-700"
          >
            Join Community
            <ArrowRightIcon className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-active:translate-x-1" />
          </a>
        </div>
      </div>
    </header>
  );
}

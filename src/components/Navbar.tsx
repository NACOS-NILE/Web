"use client";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Arrow";
const links = [
  ["About", "about"],
  ["Disciplines", "disciplines"],
  ["Programs", "programs"],
  ["Life at NACOS", "life"],
  ["Executive Council", "team"],
  ["Pay Dues", "dues"],
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    let scrolledVal = false;
    const onScroll = () => {
      const isScrolled = window.scrollY > 24;
      if (isScrolled !== scrolledVal) {
        scrolledVal = isScrolled;
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    let observer: IntersectionObserver | undefined;
    const initObserver = () => {
      if (observer || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries)
            if (entry.isIntersecting) setActive(entry.target.id);
        },
        { rootMargin: "-15% 0px -65% 0px" },
      );
      document
        .querySelectorAll("main > section[id]")
        .forEach((section) => observer?.observe(section));
    };

    window.addEventListener("scroll", initObserver, { passive: true, once: true });
    const navIdleTimer = setTimeout(initObserver, 6000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", initObserver);
      clearTimeout(navIdleTimer);
      observer?.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const dialog = menu.current;
    const trigger = toggle.current;
    dialog?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const items = [
          ...Array.from(
            menu.current?.querySelectorAll<HTMLElement>("a, button") ?? [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const first = items[0],
          last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    const wide = window.matchMedia("(min-width: 901px)");
    const onWide = () => {
      if (wide.matches) setOpen(false);
    };
    wide.addEventListener("change", onWide);
    document.addEventListener("keydown", onKey);
    return () => {
      dialog?.close();
      document.body.style.overflow = previous;
      trigger?.focus({ preventScroll: true });
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);
  return (
    <header
      className={`header${scrolled ? " is-scrolled" : ""}${open ? " menu-open" : ""}`}
    >
      <div className="nav-inner wrap">
        <a
          className="brand"
          href="#home"
          onClick={() => setOpen(false)}
        >
          <span className="logo-box">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="" width={80} height={38} />
          </span>
          <span>
            NACOS <b>Nile</b>
            <small>LEARN • BUILD • GROW</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#community">
          Join Community <Arrow diagonal />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
      <dialog
        ref={menu}
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Mobile navigation"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <div className="mobile-menu-heading">
          <a className="brand" href="#home" onClick={() => setOpen(false)}>
            <span className="logo-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="" width={80} height={38} />
            </span>
            <span>NACOS <b>Nile</b><small>LEARN • BUILD • GROW</small></span>
          </a>
          <button className="mobile-menu-close" onClick={() => setOpen(false)} aria-label="Close menu" autoFocus>×</button>
        </div>
        <p className="eyebrow">YOUR COMMUNITY, ONE TAP AWAY</p>
        {[...links, ["Join Community", "community"]].map(
          ([label, id], index) => (
            <a
              key={id}
              href={`#${id}`}
              style={{ "--item-index": index } as React.CSSProperties}
              aria-current={active === id ? "location" : undefined}
              onClick={() => {
                setOpen(false);
                requestAnimationFrame(() =>
                  document.getElementById(id)?.focus({ preventScroll: true }),
                );
              }}
            >
              {label}
              <Arrow diagonal />
            </a>
          ),
        )}
        <p>Nile University of Nigeria · Abuja</p>
      </dialog>
    </header>
  );
}

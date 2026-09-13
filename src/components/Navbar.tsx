"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const links = [["about", "About"], ["disciplines", "Disciplines"], ["events", "Events"], ["excos", "Excos"], ["community", "Community"], ["dues", "Dues"], ["contact", "Contact"]];

export function Navbar() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  function closeMenu() {
    if (menuRef.current) menuRef.current.open = false;
  }

  useEffect(() => {
    const sections = links
      .map(([id]) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 120);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <header className={`site-header ${scrolled ? "scrolled" : ""}`} id="top">
    <div className="site-header-inner">
      <a className="brand" href="#top" aria-label="NACOS Nile home"><Image src="/logo.svg" alt="" width={64} height={31} style={{ height: "auto" }} /><span>NACOS<span className="brand-sub">NILE UNIVERSITY</span></span></a>
      <nav className="desktop-nav" aria-label="Primary">
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={id === active ? "active" : undefined}
            aria-current={id === active ? "location" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions"><ThemeToggle /><a className="button small header-cta" href="#community">Join us <span aria-hidden="true">↗</span></a></div>
      <details className="mobile-menu" ref={menuRef}>
        <summary aria-label="Menu">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </summary>
        <nav aria-label="Mobile">{links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}</nav>
      </details>
    </div>
  </header>;
}

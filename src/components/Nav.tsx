"use client";

import { useEffect, useState } from "react";
import { Mark } from "./Mark";

const links = [
  ["About", "#about"],
  ["Network", "#network"],
  ["Disciplines", "#disciplines"],
  ["Activity", "#activity"],
  ["Leadership", "#leadership"],
  ["Access", "#access"],
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
      <a className="nav-brand" href="#top" onClick={() => setOpen(false)}>
        <Mark />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>

      <div className="nav-actions desktop-cta" aria-label="Quick actions">
        <a className="nav-cta nav-cta-explore" href="#about">
          Explore NACOS <span aria-hidden="true">↓</span>
        </a>
        <a
          className="nav-cta nav-cta-community"
          href="https://nacos-nile-website.vercel.app/community"
          target="_blank"
          rel="noreferrer"
        >
          Join community <span aria-hidden="true">↗</span>
        </a>
      </div>

      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? "CLOSE" : "MENU"}</span>
      </button>

      <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
        <div className="mobile-menu-inner">
          <p className="eyebrow light">Navigation</p>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href], index) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{label}
              </a>
            ))}
          </nav>

          <div className="mobile-nav-actions">
            <a className="mobile-explore" href="#about" onClick={() => setOpen(false)}>
              Explore NACOS <span>↓</span>
            </a>
            <a
              className="mobile-community"
              href="https://nacos-nile-website.vercel.app/community"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Join the community <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

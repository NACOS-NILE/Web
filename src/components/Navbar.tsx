"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { NAV_ITEMS } from "@/data/content";
import { listenToScroll, scrollToSection } from "@/lib/utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Section to scroll to once the mobile menu has closed and scrolling is unlocked
  const pendingScrollRef = useRef<string | null>(null);

  // Navbar background on scroll
  useEffect(
    () => listenToScroll(() => setScrolled(window.scrollY > 24)),
    []
  );

  // Mobile menu: Escape to close, lock page scroll, close if screen becomes desktop width
  useEffect(() => {
    if (!menuOpen) {
      const pending = pendingScrollRef.current;

      if (pending) {
        pendingScrollRef.current = null;
        scrollToSection(pending);
      }

      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const handleViewportChange = () => {
      if (desktopQuery.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleViewportChange);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleViewportChange);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll-spy: highlight the current section's nav link
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /*
    Nav links. If the mobile menu is open, close it first; the effect above
    then unlocks scrolling and moves to the section.
  */
  const handleNavClick = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (!document.getElementById(id)) return;

    event.preventDefault();

    if (menuOpen) {
      pendingScrollRef.current = id;
      setMenuOpen(false);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled || menuOpen ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#" className="brand" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo.svg"
              alt="NACOS Nile logo"
              width={48}
              height={48}
            />

            <div>
              <strong>NACOS</strong>
              <span>Nile University</span>
            </div>
          </a>

          <nav
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "open" : ""}`}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={(event) => handleNavClick(event, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#community"
            className="nav-cta"
            onClick={(event) => handleNavClick(event, "community")}
          >
            Join Community
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Backdrop sits outside the header so it covers the full screen */}
      <div
        className={`nav-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}

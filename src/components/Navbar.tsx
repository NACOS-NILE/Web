"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { smoothScrollTo } from "@/lib/scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const closeMobileMenu = useCallback(() => {
    setMenuOpen(false);
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.remove("active");
    }
    document.body.style.overflow = "";
    setTimeout(() => {
      if (mobileMenuRef.current) mobileMenuRef.current.style.display = "none";
    }, 400);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        if (mobileMenuRef.current) {
          mobileMenuRef.current.style.display = "flex";
          requestAnimationFrame(() => mobileMenuRef.current!.classList.add("active"));
        }
        document.body.style.overflow = "hidden";
      } else {
        closeMobileMenu();
      }
      return next;
    });
  }, [closeMobileMenu]);

  const handleMenuLink = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const wasOpen = menuOpen;
      if (wasOpen) closeMobileMenu();
      if (href.length > 1) {
        e.preventDefault();
        const delay = wasOpen ? 320 : 0;
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) {
            const header = navbarRef.current;
            const offset = (header ? header.offsetHeight : 80) + 20;
            const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
            smoothScrollTo(y, 1000);
          }
        }, delay);
      }
    },
    [menuOpen, closeMobileMenu]
  );

  useEffect(() => {
    const navbar = navbarRef.current;
    const progressFill = document.querySelector<HTMLElement>(".nigeria-stripe .nigeria-stripe-fill");
    if (!navbar) return;

    const onScroll = () => {
      if (window.pageYOffset > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
      if (progressFill) {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(window.pageYOffset / max, 1) : 1;
        progressFill.style.width = progress * 100 + "%";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets: { sec: Element; link: Element | null }[] = [];
    const links = document.querySelectorAll<HTMLAnchorElement>(".nav-links a[href^='#']");
    links.forEach((a) => {
      const sec = document.getElementById(a.getAttribute("href")!.slice(1));
      if (sec) targets.push({ sec, link: a });
    });
    const heroSec = document.querySelector(".hero");
    if (heroSec) targets.push({ sec: heroSec, link: null });
    if (targets.length === 0) return;

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          targets.forEach((t) => {
            if (t.link) {
              t.link.classList.remove("active");
              t.link.removeAttribute("aria-current");
            }
          });
          const hit = targets.find((t) => t.sec === entry.target);
          if (hit && hit.link) {
            hit.link.classList.add("active");
            hit.link.setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    targets.forEach((t) => spyObserver.observe(t.sec));
    return () => spyObserver.disconnect();
  }, []);

  return (
    <>
      <nav className="navbar" ref={navbarRef}>
        <div className="container">
          <a href="#" className="nav-logo">
            <img
              src="/assets/logo.svg"
              alt="NACOS Nile Logo"
              className="nav-logo-img"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="nav-logo-text">
              NACOS <span className="nacos-accent">Nile</span>
              <small>Nigeria Association of Computing Students</small>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => handleMenuLink(e, "#about")}>About</a></li>
            <li><a href="#pillars" onClick={(e) => handleMenuLink(e, "#pillars")}>What We Do</a></li>
            <li><a href="#disciplines" onClick={(e) => handleMenuLink(e, "#disciplines")}>Disciplines</a></li>
            <li><a href="#initiatives" onClick={(e) => handleMenuLink(e, "#initiatives")}>Initiatives</a></li>
            <li><a href="#excosection" onClick={(e) => handleMenuLink(e, "#excosection")}>Executives</a></li>
            <li><a href="#community" className="nav-cta" onClick={(e) => handleMenuLink(e, "#community")}>Join NACOS</a></li>
          </ul>
          <button className="nav-mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className="mobile-menu" ref={mobileMenuRef}>
        <a href="#about" onClick={(e) => handleMenuLink(e, "#about")}>About</a>
        <a href="#pillars" onClick={(e) => handleMenuLink(e, "#pillars")}>What We Do</a>
        <a href="#disciplines" onClick={(e) => handleMenuLink(e, "#disciplines")}>Disciplines</a>
        <a href="#initiatives" onClick={(e) => handleMenuLink(e, "#initiatives")}>Initiatives</a>
        <a href="#excosection" onClick={(e) => handleMenuLink(e, "#excosection")}>Executives</a>
        <a href="#community" onClick={(e) => handleMenuLink(e, "#community")}>Join NACOS</a>
      </div>
    </>
  );
}

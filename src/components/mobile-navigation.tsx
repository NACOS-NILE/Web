"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileNavigation({
  links,
}: {
  links: readonly { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 761px)");
    const resize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);

  return (
    <div className="chapter-mobile-nav" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="chapter-mobile-links"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="t-icon-swap" data-state={open ? "b" : "a"} aria-hidden="true">
          <span className="t-icon" data-icon="a">
            <Menu size={20} />
          </span>
          <span className="t-icon" data-icon="b">
            <X size={20} />
          </span>
        </span>
      </button>
      <div className="chapter-mobile-panel-clip">
        <nav
          id="chapter-mobile-links"
          className="t-panel-slide"
          data-open={open}
          aria-label="Mobile navigation"
          aria-hidden={!open}
          inert={!open}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.9375rem]! leading-[1.125rem]!"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

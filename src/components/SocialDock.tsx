"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { socialLinks } from "@/lib/content";

const actions: Record<string, string> = {
  Instagram: "Follow",
  TikTok: "Watch",
  LinkedIn: "Connect",
  X: "Follow",
  WhatsApp: "Join",
  Email: "Email",
};

export function SocialDock() {
  const [open, setOpen] = useState(false);
  const dockRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);


  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && !dockRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const activeLinks = socialLinks.filter(
    (link) => !("comingSoon" in link && link.comingSoon) && link.href,
  );
  const comingSoonLinks = socialLinks.filter(
    (link) => "comingSoon" in link && link.comingSoon,
  );

  return (
    <aside ref={dockRef} className={`social-dock${open ? " is-open" : ""}`} aria-label="NACOS Nile social channels">
      <div id="social-dock-panel" className="social-dock-panel" hidden={!open}>
        <div className="social-dock-head">
          <div>
            <span>Official channels</span>
            <strong>Find NACOS Nile</strong>
          </div>
          <span className="social-dock-status">Verified links</span>
        </div>

        <div className="social-dock-links">
          {activeLinks.map((link) => (
            <a
              href={link.href ?? undefined}
              key={link.label}
              target={link.href?.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href?.startsWith("mailto") ? undefined : "noreferrer"}
              className="social-dock-link"
              onClick={() => setOpen(false)}
              aria-label={`${actions[link.label] ?? "Open"} ${link.label}: ${link.handle}`}
            >
              <span className="social-dock-icon">
                <Image src={link.icon} alt="" aria-hidden="true" width={18} height={18} />
              </span>
              <span className="social-dock-copy">
                <b>{link.label}</b>
                <small>{link.handle}</small>
              </span>
              <span className="social-dock-action" aria-hidden="true">
                {actions[link.label] ?? "Open"} ↗
              </span>
            </a>
          ))}
        </div>

        {comingSoonLinks.length > 0 && (
          <div className="social-dock-soon" aria-label="Social channels coming soon">
            <span>Coming soon</span>
            <div>
              {comingSoonLinks.map((link) => (
                <span className="social-dock-soon-chip" key={link.label}>
                  <Image src={link.icon} alt="" aria-hidden="true" width={14} height={14} />
                  {link.label}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        type="button"
        className="social-dock-toggle"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="social-dock-panel"
        aria-label={open ? "Close NACOS Nile social channels" : "Open NACOS Nile social channels"}
        title={open ? "Close community links" : "Community links"}
      >
        <Image
          src={open ? "/ui-icons/xmark.svg" : "/ui-icons/comments.svg"}
          alt=""
          aria-hidden="true"
          width={22}
          height={22}
        />
      </button>
    </aside>
  );
}

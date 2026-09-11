import type { ReactNode } from "react";

const ICON_PATHS: Record<string, ReactNode> = {
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),

  layers: (
    <>
      <polygon points="12 2 22 8 12 14 2 8 12 2" />
      <polyline points="2 12 12 18 22 12" />
      <polyline points="2 16 12 22 22 16" />
    </>
  ),

  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,

  monitor: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <line x1="8" y1="22" x2="16" y2="22" />
      <line x1="12" y1="18" x2="12" y2="22" />
    </>
  ),

  network: (
    <>
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <line x1="12" y1="8" x2="12" y2="13" />
      <line x1="5" y1="16" x2="19" y2="16" />
    </>
  ),

  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </>
  ),

  heart: (
    <path d="M19.5 12.6 12 20l-7.5-7.4A4.8 4.8 0 0 1 12 6.3a4.8 4.8 0 0 1 7.5 6.3Z" />
  ),

  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z" />
      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
    </>
  ),

  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.8-3.4 3.3-5.5 6.5-5.5s5.7 2.1 6.5 5.5" />
      <path d="M16 4.8a3.3 3.3 0 0 1 0 6.4" />
      <path d="M18 14.8c1.9.6 3.1 2.4 3.5 5.2" />
    </>
  ),

  chart: (
    <>
      <line x1="4" y1="19" x2="20" y2="19" />
      <polyline points="5 15 9 11 13 14 19 6" />
      <circle cx="5" cy="15" r="1" />
      <circle cx="9" cy="11" r="1" />
      <circle cx="13" cy="14" r="1" />
      <circle cx="19" cy="6" r="1" />
    </>
  ),
};

export function Icon({ type }: { type: string }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICON_PATHS[type]}
    </svg>
  );
}

export function ArrowUpRightIcon() {
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function ArrowUpIcon() {
  return (
    <svg
      className="back-to-top-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}

export function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z" />
    </svg>
  );
}

const SOCIAL_ICON_PATHS: Record<string, ReactNode> = {
  discord: (
    <path d="M7.5 8.5c2.8-1.2 6.2-1.2 9 0M8 16c2.7 1.4 5.3 1.4 8 0M8.3 12h.01M15.7 12h.01M6.5 18.5 5 6.5c3.5-2.3 10.5-2.3 14 0l-1.5 12M7 16.5l-2 2.5M17 16.5l2 2.5" />
  ),

  whatsapp: (
    <path d="M12 3a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.9-1.1A8.5 8.5 0 1 0 12 3Zm-3 5.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.5c.1.3.1.5-.1.7l-.5.6c.6 1.1 1.5 1.9 2.7 2.4l.5-.6c.2-.2.4-.3.7-.2l1.5.7c.3.1.4.3.3.6-.2.8-.8 1.4-1.6 1.5-1.3.2-3.2-.8-4.5-2.1-1.3-1.3-2.2-3.2-1.8-5.1Z" />
  ),

  telegram: (
    <path d="m21 4-3.2 16-5.6-4.2-3 2.9.4-4.8L18.5 6 8 12.3 3 10.5 21 4Z" />
  ),

  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.6" cy="6.5" r=".7" fill="currentColor" stroke="none" />
    </>
  ),

  linkedin: (
    <>
      <path d="M5 8v11M5 5.2v.1M10 19v-6a3 3 0 0 1 6 0v6M10 11V8" />
      <path d="M3 3h18v18H3z" />
    </>
  ),

  x: <path d="m5 4 14 16M19 4 5 20" />,
};

export function SocialIcon({ type }: { type: string }) {
  return (
    <svg
      className="social-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {SOCIAL_ICON_PATHS[type]}
    </svg>
  );
}

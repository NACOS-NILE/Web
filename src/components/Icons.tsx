import type { ReactNode, SVGProps } from "react";

/**
 * Hand-rolled icon set so the page ships zero extra dependencies.
 * Every icon is decorative — labels always live in the surrounding markup.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ---------- Discipline icons ---------- */

export const CodeIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />
  </Base>
);

export const LayersIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 2 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
  </Base>
);

export const ShieldIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
);

export const ServerIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="7" rx="2" />
    <rect x="3" y="14" width="18" height="7" rx="2" />
    <path d="M7 6.5h.01M7 17.5h.01" />
  </Base>
);

export const NetworkIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="5" r="2.5" />
    <circle cx="5" cy="19" r="2.5" />
    <circle cx="19" cy="19" r="2.5" />
    <path d="M12 7.5v4M12 11.5 6.5 17M12 11.5 17.5 17" />
  </Base>
);

export const ChartIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path d="M7 15l3.5-4 3 2.5L20 7" />
  </Base>
);

/* ---------- Program icons ---------- */

export const SparkIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 2.5 14 9l6.5 2-6.5 2-2 6.5-2-6.5L3.5 11 10 9l2-6.5Z" />
    <path d="M19 3v3M20.5 4.5h-3" />
  </Base>
);

export const TrophyIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
    <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
    <path d="M12 14v3M8.5 21h7l-.8-3.2a1 1 0 0 0-1-.8h-3.4a1 1 0 0 0-1 .8L8.5 21Z" />
  </Base>
);

export const BriefcaseIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="2.5" y="7" width="19" height="13" rx="2" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M2.5 12.5h19" />
  </Base>
);

export const BookIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19v15H5.5A1.5 1.5 0 0 0 4 19.5v-15Z" />
    <path d="M4 19.5A1.5 1.5 0 0 1 5.5 18H19v3H5.5A1.5 1.5 0 0 1 4 19.5Z" />
  </Base>
);

/* ---------- UI icons ---------- */

export const ArrowRightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </Base>
);

export const MenuIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
  </Base>
);

export const CloseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Base>
);

export const SunIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Base>
);

export const MoonIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
  </Base>
);

export const MapPinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </Base>
);

export const MailIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Base>
);

export const GlobeIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M2.5 12h19M12 2.5c2.5 2.6 3.8 6 3.8 9.5S14.5 18.9 12 21.5c-2.5-2.6-3.8-6-3.8-9.5S9.5 5.1 12 2.5Z" />
  </Base>
);

/* ---------- Brand glyphs (filled, so they read at small sizes) ---------- */

function Solid({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      {children}
    </svg>
  );
}

export const DiscordIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M19.3 5.4A16.3 16.3 0 0 0 15.2 4l-.3.5c1.4.4 2.6 1 3.7 1.7a13.9 13.9 0 0 0-13.3 0c1.1-.7 2.4-1.4 3.8-1.8L8.8 4a16.3 16.3 0 0 0-4.1 1.4C2.2 9.1 1.5 12.7 1.9 16.3A16.4 16.4 0 0 0 6.9 19l1-1.5c-.8-.3-1.6-.7-2.3-1.2l.5-.4a11.7 11.7 0 0 0 9.9 0l.5.4c-.7.5-1.5.9-2.3 1.2l1 1.5a16.3 16.3 0 0 0 5-2.7c.5-4.2-.7-7.8-2.9-11.1ZM8.6 14.2c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.8 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
  </Solid>
);

export const WhatsAppIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M12 2a9.9 9.9 0 0 0-8.5 15L2 22l5.2-1.4A9.9 9.9 0 1 0 12 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.1Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.3.1-.5.2-.6l.4-.5.2-.4v-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 7.5 7.5 0 0 0 1.5.5 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" />
  </Solid>
);

export const TelegramIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M21.9 4.5 18.8 19c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.8-8c.4-.3-.1-.5-.6-.2L6 12.4l-4.6-1.5c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.5.2 1.3 2Z" />
  </Solid>
);

export const XIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M17.5 3h3.1l-6.8 7.7L22 21h-6.3l-4.9-6.4L5.2 21H2l7.3-8.3L2.3 3h6.4l4.4 5.9L17.5 3Zm-1.1 16.1h1.7L7.7 4.8H5.9l10.5 14.3Z" />
  </Solid>
);

export const InstagramIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9s.7.8.9 1.4c.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4s-.8.7-1.4.9c-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.1-.4-.3-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4s.8-.7 1.4-.9c.4-.1 1-.3 2.2-.4 1.3-.1 1.7-.1 4.9-.1Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.2.8-.4.3-.6.7-.8 1.2-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.3.4.7.6 1.2.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.3.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1a3.3 3.3 0 0 0-.8-1.2 3.3 3.3 0 0 0-1.2-.8c-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Zm6.3-8.2a1.2 1.2 0 1 1-2.3 0 1.2 1.2 0 0 1 2.3 0Z" />
  </Solid>
);

export const LinkedInIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M6.9 21H3.3V9.2h3.6V21ZM5.1 7.6a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM21 21h-3.6v-5.8c0-1.4 0-3.2-1.9-3.2s-2.2 1.5-2.2 3.1V21H9.7V9.2h3.4v1.6h.1a3.8 3.8 0 0 1 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5V21Z" />
  </Solid>
);

export const GitHubIcon = (p: IconProps) => (
  <Solid {...p}>
    <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.8-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.8 1 1.7 1 2.8 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
  </Solid>
);

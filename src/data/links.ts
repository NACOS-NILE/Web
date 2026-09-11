// Single source of truth for external/community links used across
// Navbar, Footer, and JoinCTA.
//
// TODO: WHATSAPP_URL is a placeholder (chat.whatsapp.com with no invite
// code) — replace with the real chapter invite link, e.g.
// "https://chat.whatsapp.com/XXXXXXXXXXXXXXXXXXXXXX".
export const WHATSAPP_URL = "https://chat.whatsapp.com";

export const GITHUB_URL = "https://github.com/nacos-nile";

export const LINKEDIN_URL = "https://ng.linkedin.com/company/nacos-nile-university-of-nigeria-chapter";

// Internal — no payment gateway live yet, this points at the site's own
// "coming soon" page instead of an external URL.
export const PAY_DUES_URL = "/pay-dues";

export interface NavLink {
  name: string;
  href: string;
}

export const primaryNavLinks: NavLink[] = [
  { name: "About", href: "/#about" },
  { name: "Events", href: "/#events" },
  { name: "Featured", href: "/featured" },
  { name: "Gallery", href: "/gallery" },
  { name: "Pay Dues", href: PAY_DUES_URL },
];

export const footerNavLinks: NavLink[] = [
  { name: "About", href: "/#about" },
  { name: "Events", href: "/#events" },
  { name: "Featured Projects", href: "/featured" },
  { name: "Leadership", href: "/#leadership" },
  { name: "Campus Gallery", href: "/gallery" },
  { name: "Pay Dues", href: PAY_DUES_URL },
];

export const socialLinks: NavLink[] = [
  { name: "WhatsApp Community", href: WHATSAPP_URL },
  { name: "GitHub", href: GITHUB_URL },
  { name: "LinkedIn", href: LINKEDIN_URL },
  { name: "Instagram", href: "https://www.instagram.com/nacosnileuni/" },
];

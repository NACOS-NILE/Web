import type { SVGProps } from "react";
import { SOCIAL_LINKS, type SocialLink } from "@/lib/data";

function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.3 5.3A18.2 18.2 0 0 0 15.6 4c-.2.4-.5.9-.6 1.3a17 17 0 0 0-5 0A9 9 0 0 0 9.3 4a18 18 0 0 0-4.7 1.4C1.9 9 1.2 12.6 1.5 16.2a18.3 18.3 0 0 0 5.5 2.7c.4-.6.8-1.2 1.1-1.9a12 12 0 0 1-1.8-.8l.4-.3a13 13 0 0 0 10.6 0l.4.3c-.6.3-1.2.6-1.8.8.3.7.7 1.3 1.1 1.9a18.2 18.2 0 0 0 5.5-2.7c.4-4.2-.7-7.8-2.2-10.9ZM8.7 14c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.7.8 1.6 1.8c0 1-.7 1.8-1.6 1.8Zm6.6 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8Z" />
    </svg>
  );
}

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17 14.2c-.3-.1-1.6-.8-1.8-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1a7.2 7.2 0 0 1-3.6-3.1c-.3-.4.3-.4.7-1.3.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2 0-.2-.2-.2-.4-.3ZM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
    </svg>
  );
}

function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.9 4.3 18.6 20c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.3 13 1.6 11.5c-1-.3-1-1 .2-1.5L20.6 3c.9-.3 1.6.2 1.3 1.3Z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.3 10.6 20.7 2h-1.8l-6.4 7.5L7.4 2H2l7.7 11.2L2 22h1.8l6.8-7.9L16.6 22H22l-8-11.4Zm-2.4 2.8-.8-1.1L4.1 3.3h2.7l5.1 7.2.8 1.1 6.5 9.3h-2.7l-5.4-7.6Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.98h4v10.02H3V9.98Zm7 0h3.8v1.4h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v6.5h-4v-5.8c0-1.4 0-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1v5.9h-4V9.98Z" />
    </svg>
  );
}

const ICONS: Record<SocialLink["icon"], (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  discord: DiscordIcon,
  whatsapp: WhatsAppIcon,
  telegram: TelegramIcon,
  x: XIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

export function SocialLinks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isPlaceholder = SOCIAL_LINKS.every((link) => link.href === "#");

  const base =
    tone === "dark"
      ? "border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
      : "border-nacos-dark/10 bg-white text-nacos-dark hover:bg-nacos-blue/5 hover:border-nacos-blue/30";

  return (
    <ul className="grid w-max grid-cols-3 gap-4" aria-label="NACOS Nile social channels">
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICONS[link.icon];
        return (
          <li key={link.name}>
            <a
              href={link.href}
              aria-label={isPlaceholder ? `${link.name} — link coming soon` : link.name}
              title={isPlaceholder ? `${link.name} — link coming soon` : link.name}
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nacos-accent ${base}`}
            >
              <Icon className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

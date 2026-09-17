import Image from "next/image";
import { Mail } from "lucide-react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaTiktok } from "react-icons/fa6";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Programs", href: "#programs" },
  { label: "Excos", href: "#excos" },
  { label: "Community", href: "#community" },
];

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/nacosnileuni?stkn=MWIuY2xtNHNpbnlvdg==", icon: FaInstagram },
  { name: "Twitter / X", href: "https://x.com/NacosNileUni", icon: FaXTwitter },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/", icon: FaLinkedin },
  { name: "TikTok", href: "https://www.tiktok.com/@nacosnileuni?r=1&_t=ZS-99dvLQr98I8", icon: FaTiktok },
  { name: "Email", href: "mailto:nacosnile@gmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.svg" alt="NACOS Nile logo" width={64} height={31} className="h-7 w-auto" />
              <span className="text-base font-bold text-nacos-navy">NACOS Nile</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Nile University of Nigeria, Abuja, FCT.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={name}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-surface-muted hover:text-nacos-blue"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <nav>
            <span className="text-xs font-medium uppercase tracking-wide text-text-muted">
              Quick links
            </span>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-body transition-colors hover:text-nacos-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border-hairline pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} NACOS Nile. All rights reserved.</p>
          <p>Built for the NACOS Nile Website Competition.</p>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import { CONTACT, NAV_LINKS, SOCIALS, type Social } from "@/lib/data";
import CurrentYear from "@/components/CurrentYear";
import {
  DiscordIcon,
  GitHubIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  TelegramIcon,
  WhatsAppIcon,
  XIcon,
} from "@/components/Icons";

const ICONS: Record<Social["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  discord: DiscordIcon,
  whatsapp: WhatsAppIcon,
  telegram: TelegramIcon,
  x: XIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

export default function Footer() {
  // Evaluated at build time; CurrentYear corrects it in the browser.
  const buildYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-labelledby="footer-heading"
      className="border-t border-white/10 bg-brand-950 text-brand-100"
    >
      <h2 id="footer-heading" className="sr-only">
        Contact and chapter information
      </h2>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-xl bg-white p-2">
                <Image src="/logo.svg" alt="" width={80} height={38} className="h-8 w-auto" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white">NACOS Nile</span>
                <span className="text-xs text-brand-200/70">Nile University of Nigeria</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-pretty text-brand-100/65">
              The Nigeria Association of Computing Students, Nile University of Nigeria Chapter —
              representing Computer Science, Software Engineering, Cyber Security, Information
              Technology, Information Systems and Data Science.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {SOCIALS.map((social) => {
                const Icon = ICONS[social.icon];
                const external = social.href.startsWith("http");
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      aria-label={`NACOS Nile on ${social.name}`}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-100 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">Quick links</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative inline-block text-sm text-brand-100/70 transition-[color,transform] duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span className="relative">
                      {link.label}
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-brand-300 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                      />
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 text-sm text-brand-100/70 transition-colors hover:text-white"
                >
                  <GitHubIcon className="size-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5" />
                  <span className="relative">
                    GitHub
                    <span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-brand-300 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                      />
                  </span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">Find us</h3>
            <address className="mt-5 space-y-4 text-sm not-italic">
              <p className="flex gap-3 text-brand-100/70">
                <MapPinIcon className="mt-0.5 size-5 shrink-0 text-brand-300" />
                <span className="text-pretty">{CONTACT.address}</span>
              </p>
              <p className="flex gap-3">
                <MailIcon className="mt-0.5 size-5 shrink-0 text-brand-300" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group relative break-all text-brand-100/70 transition-colors hover:text-white"
                >
                  <span className="relative">
                    {CONTACT.email}
                    <span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-brand-300 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                      />
                  </span>
                </a>
              </p>
              <p className="flex gap-3">
                <GlobeIcon className="mt-0.5 size-5 shrink-0 text-brand-300" />
                <a
                  href={CONTACT.university}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-brand-100/70 transition-colors hover:text-white"
                >
                  <span className="relative">
                    nileuniversity.edu.ng
                    <span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-brand-300 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                      />
                  </span>
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-brand-100/55">
            &copy; <CurrentYear buildYear={buildYear} /> {CONTACT.chapter}. All rights reserved.
          </p>
          <p className="text-xs text-brand-100/55">
            Built by students of NACOS Nile.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";
import type { IconType } from "react-icons";
import { navLinks, chapterAddress, socials } from "@/data/site";

const socialIconMap: Record<string, IconType> = {
  Instagram: FaInstagram,
  "Twitter / X": FaXTwitter,
  LinkedIn: FaLinkedin,
  Notion: SiNotion,
  TikTok: FaTiktok,
};

const socialColorMap: Record<string, string> = {
  Instagram: "#e84978",
  "Twitter / X": "#ffffff",
  LinkedIn: "#ffffff",
  Notion: "#ffffff",
  TikTok: "#ffffff",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--color--dark)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10 lg:gap-20">
          <div>
            <Link href="#top" className="inline-flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="NACOS Nile logo"
                width={58}
                height={58}
                className="rounded-xl"
              />
              <span className="font-display text-xl font-bold">
                <span className="text-[#00d98b]">NACOS</span>{" "}
                <span className="text-[#60a5fa]">Nile</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-slate-400 sm:text-lg">
              Empowering the next generation of tech leaders at {chapterAddress}.
            </p>
          </div>

          <nav aria-label="Footer" className="md:justify-self-center">
            <p className="mb-5 font-display text-base font-semibold text-slate-200">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-base text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-5 font-display text-base font-semibold text-slate-200">
              Connect With Us
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ label, href }) => {
                const Icon = socialIconMap[label];
                if (!Icon) return null;

                return (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in a new tab)`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-transform hover:-translate-y-1 hover:bg-white/20"
                  >
                    <Icon
                      size={19}
                      color={socialColorMap[label]}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
              <a
                href="mailto:hello@nacosnile.org"
                aria-label="Email NACOS Nile"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-transform hover:-translate-y-1 hover:bg-white/20"
              >
                <Mail size={19} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 font-body text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} NACOS Nile Chapter. All rights reserved.</p>
          <p>Designed &amp; Built by NACOS Nile Chapter</p>
        </div>
      </div>
    </footer>
  );
}

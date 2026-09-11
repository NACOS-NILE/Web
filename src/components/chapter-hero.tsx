import Image from "next/image";
import localFont from "next/font/local";
import { ArrowUpRight } from "lucide-react";
import { MobileNavigation } from "@/components/mobile-navigation";
import { AdaptiveQualityHero } from "@/components/adaptive-quality-hero";

const champBlack = localFont({
  src: "../../public/font/Champ-Black.woff2",
  weight: "900",
  style: "normal",
});

const links = [
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#excos", label: "Excos" },
  { href: "#community", label: "Community" },
];

export function ChapterHero() {
  return (
    <section id="home" className="chapter-hero" aria-labelledby="hero-title">
      <AdaptiveQualityHero />

      <header className="chapter-header">
        <a href="#home" className="chapter-brand" aria-label="NACOS Nile home">
          <span className="chapter-logo">
            <Image src="/logo.webp" alt="NACOS Nile logo" width={36} height={36} />
          </span>
          <span>
            <strong>NACOS Nile</strong>
            <span>University Chapter</span>
          </span>
        </a>
        <nav className="chapter-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.9375rem]! leading-[1.125rem]!"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="chapter-header-actions">
          <a
            href="#community"
            className="chapter-join inline-flex! items-center! gap-[0.4375rem]! text-[0.9375rem]! font-medium!"
          >
            Join community{" "}
            <ArrowUpRight className="block! size-[1.125rem] shrink-0 text-current" />
          </a>
          <MobileNavigation links={links} />
        </div>
      </header>

      <div className="chapter-hero-copy">
        <h1 id="hero-title" className={champBlack.className}>
          Code the future
          <br />
          Together
        </h1>
        <p className="chapter-description text-[0.9375rem]! leading-[1.125rem]!">
          A community of curious minds, building what comes next.
          <br className="hidden sm:block" /> Right here at Nile University.
        </p>
        <div className="chapter-hero-actions" aria-label="Hero actions">
          <a
            href="#community"
            className="chapter-hero-cta chapter-hero-cta--primary !inline-flex !items-center !gap-[0.4375rem] !text-[0.9375rem] !font-medium"
          >
            Join community{" "}
            <ArrowUpRight className="size-[1.125rem] shrink-0 text-current" />
          </a>
          <a
            href="#excos"
            className="chapter-hero-cta chapter-hero-cta--secondary"
          >
            Meet the Excos
          </a>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-white/10 bg-nacos-dark">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="#top" className="flex items-center gap-2.5">
              <Image
                src="/logo.svg"
                alt="NACOS Nile logo"
                width={80}
                height={38}
                className="h-7 w-auto"
              />
              <span className="text-base font-bold tracking-tight text-white">
                NACOS <span className="text-nacos-accent-light">Nile</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/55">
              Nigeria Association of Computing Students — Nile University of Nigeria Chapter.
              <br />
              Abuja, FCT, Nigeria.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
              Community
            </h3>
            <SocialLinks tone="dark" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} NACOS Nile. All rights reserved.</p>
          <p>Designed &amp; built for the NACOS Nile Landing Page Design Challenge.</p>
        </div>
      </div>
    </footer>
  );
}

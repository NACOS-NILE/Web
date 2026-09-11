import Link from "next/link";
import type { SVGProps } from "react";
import { NAV_LINKS } from "@/lib/data";
import { BrandMark } from "./BrandMark";
import { SocialLinks } from "./SocialLinks";

const REPO_URL = "https://github.com/bigbrein/NileNacosWeb";
const CAMPUS_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Nile+University+of+Nigeria%2C+Plot+681%2C+Cadastral+Zone+C-OO%2C+Research+%26+Institution+Area%2C+Jabi+Airport+Bypass%2C+Abuja%2C+Nigeria";

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-white/10 bg-nacos-dark">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link
              href="#top"
              aria-label="NACOS Nile — home"
              className="flex items-center"
            >
              <BrandMark size="md" tone="dark" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/55">
              Nigeria Association of Computing Students — Nile University of
              Nigeria Chapter.
              <br />
              <a
                href={CAMPUS_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/25 underline-offset-2 transition-colors hover:text-white hover:decoration-white/50"
              >
                Abuja, FCT, Nigeria
              </a>
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
          <p>
            Designed &amp; built by Samuel Eke for the NACOS Nile Landing Page
            Design Challenge.
          </p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <GitHubIcon className="h-3.5 w-3.5" aria-hidden="true" />
            View source on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

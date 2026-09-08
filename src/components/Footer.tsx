import Image from "next/image";
import { navLinks, socials, location } from "@/lib/data";
import { SocialIcon, PinIcon } from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white dark:border-white/10 dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.svg"
                alt="NACOS Nile logo"
                width={40}
                height={19}
                className="h-8 w-auto"
              />
              <span className="text-[15px] font-semibold tracking-tight text-navy dark:text-white">
                NACOS Nile
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate dark:text-white/60">
              Nigeria Association of Computing Students — Nile University of
              Nigeria Chapter. Learn · Build · Grow.
            </p>

            <div className="mt-4 flex items-start gap-2 text-sm text-slate dark:text-white/60">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand dark:text-sky" />
              <span>
                {location.label}, {location.address}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={location.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-slate transition-colors hover:border-brand hover:text-brand dark:border-white/15 dark:text-white/70 dark:hover:border-sky dark:hover:text-sky"
              >
                <PinIcon className="h-3.5 w-3.5" />
                Open in Google Maps
              </a>
              <a
                href={location.appleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-slate transition-colors hover:border-brand hover:text-brand dark:border-white/15 dark:text-white/70 dark:hover:border-sky dark:hover:text-sky"
              >
                <PinIcon className="h-3.5 w-3.5" />
                Open in Apple Maps
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy dark:text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate transition-colors hover:text-brand dark:text-white/60 dark:hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy dark:text-white">
              Connect
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target={s.icon === "mail" ? undefined : "_blank"}
                    rel={s.icon === "mail" ? undefined : "noopener noreferrer"}
                    aria-label={s.name}
                    style={{ "--bc": s.color } as React.CSSProperties}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-slate transition-colors hover:border-[var(--bc)] hover:text-[var(--bc)] dark:border-white/15 dark:text-white/70 dark:hover:border-[var(--bc)] dark:hover:text-[var(--bc)]"
                  >
                    <SocialIcon name={s.icon} className="h-4.5 w-4.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
          <p className="text-xs text-slate dark:text-white/50">
            © {year} NACOS Nile, Nile University of Nigeria. All rights reserved.
          </p>
          <p className="text-xs text-slate dark:text-white/50">
            Built by students, for students.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { NAV_LINKS, SITE } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 bg-royal-950 text-royal-100">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Image
              src="/logo.svg"
              alt=""
              width={80}
              height={38}
              loading="lazy"
              className="mb-7 h-8 w-auto"
            />
            <p className="text-[1.35rem] leading-snug text-white">
              Nigeria Association of Computing Students
            </p>
            <p className="label mt-3 text-royal-400">
              Nile University of Nigeria Chapter
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h2 className="label text-royal-400">Sections</h2>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="ui text-royal-100/70 transition-colors duration-200 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="label text-royal-400">Address</h2>
            <address className="mt-5 not-italic">
              {SITE.addressLines.map((line) => (
                <span key={line} className="ui block text-royal-100/70">
                  {line}
                </span>
              ))}
              {SITE.email ? (
                <a
                  href={`mailto:${SITE.email}`}
                  className="ui mt-3 inline-block text-royal-100/70 underline underline-offset-4 transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              ) : null}
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="label leading-[1.9] text-royal-300">
            &copy; {year} NACOS Nile · Not an official publication of Nile
            University of Nigeria
          </p>
          {SITE.builtBy ? (
            <p className="label text-royal-300">Built by {SITE.builtBy}</p>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { excos } from "@/lib/data";
import { LinkedIn, GitHubIcon } from "@/components/icons";

export default function Excos() {
  return (
    <section id="excos" className="bg-mist dark:bg-mist-dark">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-brand">04 / The Council</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy sm:text-4xl dark:text-white">
            The people running the chapter.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate dark:text-white/70">
            Your 2026/2027 Executive Council — students who volunteer their time
            so the rest of us have somewhere to belong.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {excos.map((exco, i) => (
            <Reveal
              as="li"
              key={exco.name}
              delay={(i % 3) * 70}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white dark:border-white/10 dark:bg-surface-dark"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-navy-800">
                <Image
                  src={exco.photo}
                  alt={`${exco.name}, ${exco.role} of NACOS Nile`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand backdrop-blur-sm sm:left-4 sm:top-4 sm:text-[11px]">
                  {exco.short}
                </span>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy/70 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h3 className="text-[15px] font-semibold leading-snug text-navy sm:text-lg dark:text-white">
                  {exco.name}
                </h3>
                <p className="mt-0.5 text-[13px] font-medium text-brand sm:text-sm">
                  {exco.role}
                </p>
                <p className="mt-2.5 hidden text-[14px] leading-6 text-slate sm:block dark:text-white/60">
                  &ldquo;{exco.bio}&rdquo;
                </p>

                {(exco.linkedin || exco.github) && (
                  <div className="mt-auto flex items-center gap-2 pt-3">
                    {exco.linkedin && (
                      <a
                        href={exco.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${exco.name} on LinkedIn`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line text-slate transition-colors hover:border-brand hover:bg-brand hover:text-white dark:border-white/10 dark:text-white/60"
                      >
                        <LinkedIn className="h-4 w-4" />
                      </a>
                    )}
                    {exco.github && (
                      <a
                        href={exco.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${exco.name} on GitHub`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line text-slate transition-colors hover:border-navy hover:bg-navy hover:text-white dark:border-white/10 dark:text-white/60 dark:hover:border-white dark:hover:bg-white dark:hover:text-navy"
                      >
                        <GitHubIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

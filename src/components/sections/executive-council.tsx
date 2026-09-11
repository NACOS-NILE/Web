import Image from "next/image";
import { execs } from "@/content/execs";

// Duotone map: navy #101C33 -> pale-green #CDE9AF. The shadow endpoint
// matches --surface-2 so portraits sit inside the page rather than on it —
// see DESIGN.md and .mockups/duo-test.html for the four mappings compared.
function DuotoneFilter() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <filter id="duotone" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.36 0.5 0.14 0 0  0.36 0.5 0.14 0 0  0.36 0.5 0.14 0 0  0 0 0 1 0"
          />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.063 0.804" />
            <feFuncG type="table" tableValues="0.110 0.914" />
            <feFuncB type="table" tableValues="0.200 0.686" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}

export function ExecutiveCouncil() {
  return (
    <section id="excos" className="relative z-[2] py-[clamp(3.5rem,8vw,6rem)]">
      <DuotoneFilter />
      <div className="mx-auto w-[min(100%-2.5rem,1240px)]">
        <div className="council-lay grid items-start gap-[clamp(2rem,4vw,3.2rem)] max-[1000px]:grid-cols-1 max-[1000px]:gap-[1.8rem] min-[1001px]:grid-cols-[minmax(240px,300px)_1fr]">
          <div className="flex flex-col items-start gap-[.9rem] max-[1000px]:static min-[1001px]:sticky min-[1001px]:top-8">
            <span className="font-mono inline-flex items-center gap-[.6rem] text-[.7rem] uppercase tracking-[.18em] text-signal before:h-px before:w-[26px] before:bg-signal">
              02 / Executive Council
            </span>
            <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.06] tracking-[-.025em]">
              The people running the chapter.
            </h2>
            <p className="max-w-[46ch] text-[.95rem] leading-[1.6] text-muted">
              Nine students holding the chapter together. Every officer is reachable — no
              committee to go through.
            </p>
          </div>

          <div className="council-grid relative grid grid-cols-3 gap-[clamp(.7rem,1.2vw,.95rem)] max-[560px]:grid-cols-2">
            {execs.map((e, i) => (
              <a
                key={e.slug}
                href="#"
                className={`group relative block overflow-hidden rounded-[3px] border border-white/[.08] bg-surface no-underline text-inherit transition-[transform,border-color,box-shadow] duration-300 [transition-timing-function:var(--ease)] hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_14px_34px_-18px_rgba(0,0,0,.9),0_0_0_1px_rgba(117,185,71,.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-signal ${
                  i === 0 ? "max-[560px]:col-span-2" : ""
                }`}
              >
                <span className="font-mono absolute left-[.7rem] top-[.6rem] z-[2] rounded-[2px] bg-[#080D1A]/55 px-[.4rem] py-[.2rem] text-[.58rem] tracking-[.1em] text-ink/55 backdrop-blur-[4px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className={`relative overflow-hidden bg-surface-2 aspect-[4/5] ${
                    i === 0 ? "max-[560px]:aspect-[3/2]" : ""
                  } after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_52%,rgba(8,13,26,.5)_82%,rgba(8,13,26,.92)_100%)]`}
                >
                  <Image
                    src={e.image}
                    alt=""
                    fill
                    sizes="(max-width: 560px) 45vw, (max-width: 1000px) 30vw, 20vw"
                    className={`object-cover ${i === 0 ? "max-[560px]:object-[center_22%]" : ""}`}
                  />
                  <Image
                    src={e.image}
                    alt={`${e.name}, ${e.role}`}
                    fill
                    sizes="(max-width: 560px) 45vw, (max-width: 1000px) 30vw, 20vw"
                    className={`object-cover opacity-100 transition-opacity duration-[400ms] [transition-timing-function:var(--ease)] group-hover:opacity-0 ${
                      i === 0 ? "max-[560px]:object-[center_22%]" : ""
                    }`}
                    style={{ filter: "url(#duotone)" }}
                  />
                </div>
                <div className="p-[.85rem_.9rem_1rem]">
                  <span className="font-mono mb-[.35rem] block text-[.6rem] uppercase tracking-[.14em] text-signal">
                    {e.role}
                  </span>
                  <span className="block text-[.98rem] font-semibold leading-[1.25] tracking-[-.015em]">
                    {e.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

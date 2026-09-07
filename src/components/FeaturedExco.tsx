import Image from "next/image";
import type { Exco } from "@/lib/data";
import { Reveal } from "./Reveal";

export function FeaturedExco({ exco }: { exco: Exco }) {
  return (
    <Reveal>
      <article className="group relative overflow-hidden rounded-3xl border border-nacos-dark/10 bg-nacos-dark">
        <div className="grid grid-cols-1 sm:grid-cols-[360px_1fr] lg:grid-cols-[420px_1fr]">
          <div className="relative h-96 sm:h-full sm:min-h-120">
            <Image
              src={exco.photo}
              alt={`${exco.name}, ${exco.role}`}
              fill
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-nacos-dark via-transparent to-transparent sm:bg-linear-to-r"
            />
          </div>

          <div className="flex flex-col justify-center gap-3 p-8 sm:p-10">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-nacos-accent-light uppercase">
              President
            </span>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">{exco.name}</h3>
            <span className="h-px w-12 origin-left scale-x-75 bg-nacos-accent-light transition-transform duration-300 group-hover:scale-x-100" />
            <p className="max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
              {exco.tagline}
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

import Image from "next/image";
import type { Exco } from "@/lib/data";
import { Reveal } from "./Reveal";

export function ExcoCard({ exco, delay = 0 }: { exco: Exco; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group h-full overflow-hidden rounded-2xl border border-nacos-dark/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-nacos-blue/30 hover:shadow-lg hover:shadow-nacos-blue/10 dark:border-white/10 dark:bg-white/3 dark:hover:border-nacos-accent/40 dark:hover:shadow-black/20">
        <div className="relative aspect-4/5 overflow-hidden bg-nacos-blue/5 dark:bg-white/5">
          <Image
            src={exco.photo}
            alt={`${exco.name}, ${exco.role}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
        <div className="p-4 sm:p-5">
          <h3 className="text-base font-semibold text-nacos-dark sm:text-lg dark:text-white">
            {exco.name}
          </h3>
          <p className="mt-0.5 text-xs font-medium text-nacos-blue sm:text-sm dark:text-nacos-accent-light">
            {exco.role}
          </p>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-nacos-dark/55 sm:text-sm dark:text-white/55">
            {exco.tagline}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

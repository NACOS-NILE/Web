import Image from "next/image";
import type { Exco } from "@/lib/data";

/**
 * Portrait card for one member of the executive council.
 * `priority` is passed for the first row so the LCP image is not lazy-loaded.
 */
export default function ExcoCard({ exco, priority = false }: { exco: Exco; priority?: boolean }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-900/15 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="relative aspect-4/5 overflow-hidden bg-brand-100 dark:bg-brand-900">
        <Image
          src={exco.image}
          alt={`Portrait of ${exco.name}, ${exco.role} of NACOS Nile`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
          priority={priority}
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/*
          Gradient scrim keeps the text legible over any photo. Weighted up
          from 55%/38% now that the role label has no panel of its own — these
          are nine unpredictable photographs, some of them bright, and the
          caption has to hold against all of them.
        */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-brand-950 from-8% via-brand-950/70 via-45% to-transparent to-75%"
        />

        <div className="absolute inset-x-0 bottom-0 p-5">
          {/*
            Same rule-and-caps treatment as the section eyebrows. The chip's
            translucent panel was doing the legibility work here, so the scrim
            above carries a little more weight now to make up for it.
          */}
          <p className="flex items-start gap-2 text-[11px] font-semibold tracking-[0.15em] text-brand-100 uppercase">
            <span aria-hidden="true" className="mt-[0.45rem] h-px w-5 shrink-0 bg-brand-300" />
            <span>{exco.role}</span>
          </p>
          <h3 className="mt-2.5 text-lg leading-tight font-bold text-white">{exco.name}</h3>
          <p className="mt-2 text-sm leading-snug text-pretty text-brand-100/85">
            &ldquo;{exco.bio}&rdquo;
          </p>
        </div>
      </div>
    </article>
  );
}

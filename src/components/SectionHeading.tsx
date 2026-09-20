import type { ReactNode } from "react";
import HoverHeading from "@/components/HoverHeading";
import Reveal from "@/components/Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

/** Shared eyebrow + heading + lede block, so every section is set the same way. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "center",
  tone = "light",
}: Props) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {/*
        Hairlines rather than a chip. The pill read as a button and boxed the
        label away from the heading it belongs to; rules that fade out at the
        far end tie the two together and let long labels wrap instead of
        stretching a capsule off the edge of a narrow screen.
      */}
      <p
        className={`inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] uppercase sm:text-xs ${
          tone === "dark" ? "text-brand-200" : "text-brand-700 dark:text-brand-200"
        }`}
      >
        {centered ? (
          <span
            aria-hidden="true"
            className={`h-px w-6 shrink-0 sm:w-10 ${
              tone === "dark"
                ? "bg-gradient-to-r from-transparent to-brand-300/70"
                : "bg-gradient-to-r from-transparent to-brand-600/50 dark:to-brand-300/60"
            }`}
          />
        ) : null}
        {eyebrow}
        <span
          aria-hidden="true"
          className={`h-px w-6 shrink-0 sm:w-10 ${
            tone === "dark"
              ? "bg-gradient-to-l from-transparent to-brand-300/70"
              : "bg-gradient-to-l from-transparent to-brand-600/50 dark:to-brand-300/60"
          }`}
        />
      </p>
      <HoverHeading
        id={id}
        // On the dark section the soft blue accent barely separates from white,
        // so the highlight there is the leaf green instead.
        glow={tone === "dark" ? "var(--color-leaf)" : undefined}
        className={`mt-5 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-brand-900 dark:text-white"
        }`}
      >
        {title}
      </HoverHeading>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed text-pretty sm:text-lg ${
            tone === "dark" ? "text-brand-100/75" : "text-brand-900/65 dark:text-brand-100/70"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

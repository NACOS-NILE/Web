import { Reveal } from "./Reveal";

export function SectionHeader({
  index,
  label,
  title,
  description,
  tone = "light",
  align = "left",
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  const mutedText = tone === "dark" ? "text-white/60" : "text-nacos-dark/60 dark:text-white/60";
  const headingText = tone === "dark" ? "text-white" : "text-nacos-dark dark:text-white";
  const alignClasses = align === "center" ? "items-center text-center mx-auto" : "items-start";

  return (
    <Reveal>
      <div className={`flex max-w-2xl flex-col gap-4 ${alignClasses}`}>
        <span
          className={`font-mono text-xs font-medium tracking-[0.2em] uppercase ${mutedText}`}
        >
          {index} / {label}
        </span>
        <h2
          className={`text-balance text-3xl font-semibold tracking-tight sm:text-4xl ${headingText}`}
        >
          {title}
        </h2>
        {description ? (
          <p className={`text-balance text-base leading-relaxed sm:text-lg ${mutedText}`}>
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}

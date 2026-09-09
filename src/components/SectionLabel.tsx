export default function SectionLabel({
  index,
  children,
  tone = "dark",
}: {
  index: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p className="label flex items-baseline gap-3">
      <span className={tone === "light" ? "text-royal-300" : "text-royal-600 dark:text-royal-300"}>
        {index}
      </span>
      <span className={tone === "light" ? "text-royal-200/70" : "text-ink-faint"}>
        {children}
      </span>
    </p>
  );
}

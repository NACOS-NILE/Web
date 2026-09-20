const ITEMS = [
  "Hackathons",
  "Code reviews",
  "Study groups",
  "Career talks",
  "Open source",
  "CTF nights",
  "Design jams",
  "Past questions",
  "Internship leads",
  "Demo days",
];

/**
 * Continuously scrolling keyword strip. The list is duplicated so the
 * -50% translation loops seamlessly; the copy is hidden from screen readers.
 */
export default function Marquee() {
  return (
    <div className="relative overflow-hidden bg-white py-4 dark:bg-brand-950">
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex items-center"
          >
            {ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-8 px-8 text-sm font-semibold tracking-wide text-brand-900/80 uppercase dark:text-white/85"
              >
                {item}
                <span aria-hidden="true" className="size-1.5 rounded-full bg-leaf" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

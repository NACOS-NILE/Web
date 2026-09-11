const CHANNELS = [
  {
    label: "WhatsApp community",
    hint: "Fastest way to reach the chapter",
    href: "#", // placeholder — see CONTENT_NEEDED.md
  },
  {
    label: "Discord server",
    hint: "Study rooms, project chat, announcements",
    href: "#", // placeholder — see CONTENT_NEEDED.md
  },
  {
    label: "Instagram",
    hint: "Events, photos, chapter life",
    href: "#", // placeholder — see CONTENT_NEEDED.md
  },
];

export function Community() {
  return (
    <section id="community" className="relative z-[2] border-t border-white/[.07] py-[clamp(3.5rem,8vw,6rem)]">
      <div className="mx-auto w-[min(100%-2.5rem,1240px)]">
        <div className="grid grid-cols-1 gap-[clamp(2rem,4vw,3.5rem)] lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="font-mono mb-[1rem] inline-flex items-center gap-[.6rem] text-[.7rem] uppercase tracking-[.18em] text-signal before:h-px before:w-[26px] before:bg-signal">
              04 / Community
            </span>
            <h2 className="max-w-[16ch] text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.05] tracking-[-.03em]">
              Join the people building this with us.
            </h2>
            <p className="mt-[1.1rem] max-w-[46ch] text-[.98rem] leading-[1.65] text-muted">
              No sign-up form, no gatekeeping — pick a channel and you&apos;re in. Officers
              answer directly.
            </p>

            <dl className="font-mono mt-[2rem] flex flex-col gap-[.5rem] text-[.85rem] text-muted">
              <div className="flex gap-[.6rem]">
                <dt className="text-signal">Email</dt>
                <dd>[NACOS Nile chapter email]</dd>
              </div>
              <div className="flex gap-[.6rem]">
                <dt className="text-signal">Location</dt>
                <dd>Nile University of Nigeria, Abuja, FCT</dd>
              </div>
            </dl>
          </div>

          <ul className="grid list-none grid-cols-1 gap-[.7rem] sm:grid-cols-1">
            {CHANNELS.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className="group flex items-center justify-between gap-4 rounded-[3px] border border-white/[.1] bg-surface px-[1.3rem] py-[1.1rem] no-underline text-inherit transition-[border-color,transform] duration-200 [transition-timing-function:var(--ease)] hover:-translate-y-0.5 hover:border-signal/50"
                >
                  <span>
                    <span className="block text-[1.02rem] font-semibold tracking-[-.01em]">{c.label}</span>
                    <span className="block text-[.82rem] text-muted">{c.hint}</span>
                  </span>
                  <span className="font-mono text-signal transition-transform duration-200 [transition-timing-function:var(--ease)] group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

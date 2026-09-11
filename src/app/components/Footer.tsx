import Image from "next/image";
const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Excos", href: "#excos" },
  { label: "Community", href: "#community" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#091127] pt-20 sm:pt-24"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-600/[0.06] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Chapter information */}
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                NACOS Nile
              </span>
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Building a stronger
              <span className="block text-slate-400">
                computing community.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              NACOS Nile is a student community bringing together computing
              students at Nile University through learning, collaboration,
              innovation, and shared experiences.
            </p>
          </div>

          {/* Chapter information */}
          <div className="lg:justify-self-end lg:min-w-[280px]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Chapter
            </p>

            <div className="mt-5 border-l border-blue-400/20 pl-5">
              <p className="text-lg font-semibold text-white">
                NACOS Nile University
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Nile University of Nigeria
                <br />
                Abuja, FCT, Nigeria
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Stay connected
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Explore the community section to discover the platforms and
                resources available to NACOS Nile students.
              </p>

              <a
                href="#community"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-blue-300"
              >
                Explore community
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4 10h11M11 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5">
              <Image
  src="/logo.svg"
  alt="NACOS Nile logo"
  width={40}
  height={40}
  className="h-full w-full object-contain"
/>
            </div>

            <div>
              <p className="text-sm font-bold tracking-wide text-white">
                NACOS NILE
              </p>

              <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                Nile University Chapter
              </p>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-medium text-slate-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 py-7 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NACOS Nile. All rights reserved.</p>

          <p>
  Designed and developed by{" "}
  <span className="text-slate-400">Peace Idowu</span>.
</p>
        </div>
      </div>
    </footer>
  );
}
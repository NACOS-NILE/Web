import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#0d1733] pt-32 sm:pt-36 lg:pt-40"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 top-40 -z-10 h-80 w-80 rounded-full bg-[#274193]/20 blur-[100px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left content */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]"
              />
              NACOS · Nile University
            </div>

            {/* Main heading */}
            <h1
              id="hero-heading"
              className="text-balance text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
            >
              Where technology
              <span className="block bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                meets community.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              A student community bringing together the computing disciplines
              at Nile University through learning, collaboration, innovation,
              and technology-focused initiatives.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#274193] px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-950/30 transition-all hover:bg-[#3152b3] hover:shadow-blue-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1733] active:scale-[0.98]"
              >
                Explore NACOS Nile
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4 10h11M11 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#disciplines"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/20 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1733]"
              >
                Discover our disciplines
              </a>
            </div>

            {/* Supporting line */}
            <div className="mt-9 flex items-center gap-3 text-xs text-slate-500">
              <span className="h-px w-8 bg-slate-700" />
              <span>Built around students. Driven by technology.</span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:justify-self-end">
            {/* Outer glow */}
            <div
              aria-hidden="true"
              className="absolute inset-10 rounded-[2rem] bg-blue-500/20 blur-3xl"
            />

            {/* Main visual card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101d3d]">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                    </div>

                    <span className="ml-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                      NACOS NILE
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-blue-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    CONNECTED
                  </div>
                </div>

                {/* Visual content */}
                <div className="relative min-h-[390px] overflow-hidden px-6 py-8 sm:min-h-[430px]">
                  {/* Grid */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Central logo */}
                  <div className="relative flex min-h-[300px] items-center justify-center">
                    <div
                      aria-hidden="true"
                      className="absolute h-52 w-52 rounded-full border border-blue-400/10"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute h-40 w-40 rounded-full border border-blue-400/15"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute h-28 w-28 rounded-full bg-blue-500/10 blur-2xl"
                    />

                    <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-white/15 bg-white p-5 shadow-2xl shadow-blue-950/50 sm:h-32 sm:w-32">
                      <Image
                        src="/logo.svg"
                        alt="NACOS Nile"
                        width={128}
                        height={128}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    {/* Community indicators */}
                    <div className="absolute left-0 top-10 rounded-xl border border-white/10 bg-[#0d1733]/90 px-3 py-2 shadow-lg backdrop-blur-md sm:left-4">
                      <span className="text-[10px] font-semibold text-blue-200">
                        LEARN
                      </span>
                    </div>

                    <div className="absolute right-0 top-16 rounded-xl border border-white/10 bg-[#0d1733]/90 px-3 py-2 shadow-lg backdrop-blur-md sm:right-2">
                      <span className="text-[10px] font-semibold text-blue-200">
                        CONNECT
                      </span>
                    </div>

                    <div className="absolute bottom-10 left-4 rounded-xl border border-white/10 bg-[#0d1733]/90 px-3 py-2 shadow-lg backdrop-blur-md sm:left-10">
                      <span className="text-[10px] font-semibold text-blue-200">
                        CREATE
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-2 rounded-xl border border-white/10 bg-[#0d1733]/90 px-3 py-2 shadow-lg backdrop-blur-md sm:right-8">
                      <span className="text-[10px] font-semibold text-blue-200">
                        INNOVATE
                      </span>
                    </div>
                  </div>

                  {/* Bottom information */}
                  <div className="relative grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-slate-500">
                        Focus
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-200">
                        Technology
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-slate-500">
                        Culture
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-200">
                        Collaboration
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-slate-500">
                        Spirit
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-200">
                        Innovation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-full border border-blue-400/10"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d1733] to-transparent"
      />
    </section>
  );
}
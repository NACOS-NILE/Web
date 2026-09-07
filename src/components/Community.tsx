const channels = [
  {
    name: "WhatsApp",
    description: "Stay updated with announcements and community conversations.",
    href: "#",
    symbol: "WA",
  },
  {
    name: "Discord",
    description: "Connect, collaborate, and hang out with fellow builders.",
    href: "#",
    symbol: "DC",
  },
  {
    name: "Telegram",
    description: "Get updates and join the wider NACOS conversation.",
    href: "#",
    symbol: "TG",
  },
  {
    name: "Instagram",
    description: "Follow our activities, events, and community moments.",
    href: "#",
    symbol: "IG",
  },
  {
    name: "X / Twitter",
    description: "Keep up with announcements and what's happening.",
    href: "#",
    symbol: "X",
  },
  {
    name: "LinkedIn",
    description: "Explore professional opportunities and updates.",
    href: "#",
    symbol: "IN",
  },
];

export default function Community() {
  return (
    <section
      id="community"
      className="bg-slate-50 px-6 py-28 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="rounded-[2rem] bg-[#0d1733] px-6 py-14 text-white sm:px-10 lg:px-16">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Join the community
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Don&apos;t just watch
              <span className="block text-blue-400">
                technology happen.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Get involved, meet other computing students, share ideas, and
              build something meaningful together.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel) => (
              <a
                key={channel.name}
                href={channel.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.08]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-xs font-bold">
                    {channel.symbol}
                  </span>

                  <span className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-blue-300">
                    ↗
                  </span>
                </div>

                <h3 className="mt-7 font-semibold">
                  {channel.name}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {channel.description}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Your next opportunity could start with one conversation.
            </p>

            <a
              href="#community"
              className="w-fit rounded-xl bg-[#274193] px-6 py-3 text-sm font-semibold transition hover:bg-blue-600"
            >
              Join NACOS Nile →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

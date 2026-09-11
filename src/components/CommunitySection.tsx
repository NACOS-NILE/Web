const channels = [
  {
    name: "WhatsApp Community",
    description: "Instant announcements, class groups, tutorial alerts, and quick departmental queries.",
    icon: "💬",
    linkText: "Join WhatsApp Group",
    href: "https://chat.whatsapp.com",
    badge: "Most Active",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
  {
    name: "Discord Server",
    description: "Code help channels, voice study rooms, hackathon collabs, and gaming hangouts.",
    icon: "🎮",
    linkText: "Join Discord Server",
    href: "https://discord.com",
    badge: "Devs & Gamers",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  },
  {
    name: "Telegram Channel",
    description: "Official broadcast feed for past papers, lecture slides, and event recordings.",
    icon: "📢",
    linkText: "Join Telegram Channel",
    href: "https://telegram.org",
    badge: "Resource Hub",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  },
  {
    name: "Twitter / X",
    description: "Live event highlights, student showcases, tech threads, and campus tech news.",
    icon: "🐦",
    linkText: "Follow @NACOSNile",
    href: "https://x.com",
    badge: "Social",
    badgeColor: "bg-slate-500/20 text-slate-300 border-slate-500/30",
  },
  {
    name: "LinkedIn Page",
    description: "Professional updates, alumni stories, internship opportunities, and corporate partnerships.",
    icon: "💼",
    linkText: "Connect on LinkedIn",
    href: "https://linkedin.com",
    badge: "Careers",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    name: "Instagram",
    description: "Behind-the-scenes snapshots, photo drops from tech week, and student spotlights.",
    icon: "📸",
    linkText: "Follow on Instagram",
    href: "https://instagram.com",
    badge: "Life @ Nile",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  },
];

const portals = [
  {
    title: "Nile Student Portal",
    description: "Course registrations, grades, and official university credentials.",
    href: "https://portal.nileuniversity.edu.ng",
  },
  {
    title: "Faculty of Computing Portal",
    description: "Departmental announcements, course curriculum, and lecturer contacts.",
    href: "https://nileuniversity.edu.ng",
  },
  {
    title: "NACOS National Secretariat",
    description: "Official national body linking all computing students across Nigeria.",
    href: "https://nacos.org.ng",
  },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 relative bg-[#090f24]/60 border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-4">
            <span>STUDENT COMMUNITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Connect With Nile Computing Minds
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Never code alone. Plug into our vibrant student spaces to collaborate on projects, prepare for exams, find study partners, and stay up to date.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {channels.map((ch) => (
            <div
              key={ch.name}
              className="glass-card p-6 rounded-2xl glass-card-hover border border-blue-900/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2 rounded-xl bg-[#060b18] border border-blue-500/20">
                    {ch.icon}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${ch.badgeColor}`}
                  >
                    {ch.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{ch.name}</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {ch.description}
                </p>
              </div>

              <a
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-900/40 hover:bg-blue-600/70 border border-blue-500/30 transition duration-200"
              >
                {ch.linkText} ↗
              </a>
            </div>
          ))}
        </div>

        {/* Portal Shortcuts Callout */}
        <div className="rounded-2xl glass-card p-8 border border-blue-500/20 bg-gradient-to-r from-blue-950/40 via-[#0d1733]/60 to-indigo-950/40">
          <div className="max-w-3xl mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Essential Student Portals & Quick Links
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Direct access to Nile University academic infrastructure and national body resources.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {portals.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#060b18]/80 hover:bg-blue-900/30 border border-slate-800 hover:border-blue-500/40 transition group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-bold text-white group-hover:text-blue-300 transition">
                    {p.title}
                  </span>
                  <span className="text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs">
                    ↗
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-snug">{p.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

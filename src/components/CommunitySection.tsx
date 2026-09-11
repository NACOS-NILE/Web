const channels = [
  {
    name: "WhatsApp Community",
    description: "Instant announcements, class groups, tutorial alerts, and quick departmental queries.",
    linkText: "Join WhatsApp Group",
    href: "https://chat.whatsapp.com",
    badge: "Official Group",
  },
  {
    name: "Discord Server",
    description: "Code help channels, voice study rooms, hackathon collabs, and technical forums.",
    linkText: "Join Discord Server",
    href: "https://discord.com",
    badge: "Student Hub",
  },
  {
    name: "Telegram Channel",
    description: "Broadcast repository for past exam papers, lecture slides, and event recordings.",
    linkText: "Join Telegram Channel",
    href: "https://telegram.org",
    badge: "Resource Archive",
  },
  {
    name: "X (Formerly Twitter)",
    description: "Live event coverage, student highlights, departmental milestones, and tech announcements.",
    linkText: "Follow @NACOSNile",
    href: "https://x.com",
    badge: "Broadcast",
  },
  {
    name: "LinkedIn Page",
    description: "Professional networking, alumni success stories, internship alerts, and corporate engagements.",
    linkText: "Connect on LinkedIn",
    href: "https://linkedin.com",
    badge: "Professional",
  },
  {
    name: "Instagram",
    description: "Photo highlights, visual stories, campus tech moments, and leadership spotlights.",
    linkText: "Follow on Instagram",
    href: "https://instagram.com",
    badge: "Media",
  },
];

const portals = [
  {
    title: "Nile Student Portal",
    description: "Course registrations, grades, and university student record management.",
    href: "https://portal.nileuniversity.edu.ng",
  },
  {
    title: "Faculty of Computing",
    description: "Departmental curriculum details, academic calendars, and faculty contacts.",
    href: "https://nileuniversity.edu.ng",
  },
  {
    title: "NACOS National Secretariat",
    description: "The national umbrella body for computing students across Nigerian universities.",
    href: "https://nacos.org.ng",
  },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 relative bg-[#060b18] border-t border-slate-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Connect With Nile Computing Students
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Collaborate on academic coursework, prepare for hackathons, exchange technical resources, and stay up to date.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {channels.map((ch) => (
            <div
              key={ch.name}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{ch.name}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {ch.description}
                </p>
              </div>

              <a
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-[#070e24] hover:bg-[#274193] hover:text-white border border-slate-800 hover:border-blue-500 transition duration-200"
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

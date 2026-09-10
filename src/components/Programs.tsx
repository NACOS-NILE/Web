import Link from "next/link";

export default function Programs() {
  return (
    <section className="py-28 bg-white" id="programs">
      <div className="max-w-[1180px] w-[calc(100%-40px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[0.72rem] font-bold tracking-[0.18em] text-[#667085] uppercase mb-2">03 / INITIATIVES</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0f172a]">Learn by <span className="text-[#274193]">doing.</span></h2>
          </div>
          <p className="text-[#667085] max-w-xs">Practical programmes designed around the way students actually grow.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.93fr_1.07fr] gap-4">
          <div className="p-8 rounded-3xl text-white bg-gradient-to-br from-[#0c1733] to-[#1a3375] shadow-xl flex flex-col justify-between min-h-[380px]">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-white/50 uppercase tracking-widest">TECHNICAL GROWTH</span>
              <span className="text-xs font-bold text-white/35">01</span>
            </div>
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-xl">⌘</div>
              <h3 className="text-2xl font-bold">Bootcamps & Coding Workshops</h3>
              <p className="text-sm text-white/60">Build hands-on skills with practical sessions, technical walkthroughs and peer learning.</p>
              <Link href="#community" className="inline-flex items-center gap-2 text-[#a5c9ff] font-bold pt-2">
                Get involved <span>→</span>
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { num: "02", icon: "✦", title: "Annual Hackathon / Tech Week", desc: "Build bold ideas under pressure and celebrate Nile's builders." },
              { num: "03", icon: "◎", title: "Industry Mentorship & Career Talks", desc: "Learn from practitioners and make smarter career moves." },
              { num: "04", icon: "＋", title: "Academic Tutorials & Study Groups", desc: "Make difficult topics easier through collaborative study." },
            ].map((row) => (
              <article key={row.num} className="p-6 rounded-2xl border border-[rgba(39,65,147,0.13)] flex items-center gap-4 hover:translate-x-1.5 transition-transform">
                <span className="text-xs font-bold text-[#a7afbf]">{row.num}</span>
                <div className="w-11 h-11 rounded-xl bg-[#edf3ff] text-[#274193] flex items-center justify-center">{row.icon}</div>
                <div>
                  <h3 className="font-bold text-[#0f172a]">{row.title}</h3>
                  <p className="text-xs text-[#667085]">{row.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
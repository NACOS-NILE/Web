import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white min-h-[720px] flex items-center bg-[radial-gradient(circle_at_75%_12%,rgba(59,130,246,0.25),transparent_25%),radial-gradient(circle_at_15%_80%,rgba(39,65,147,0.3),transparent_32%),linear-gradient(135deg,#091024_0%,#0d1733_48%,#101d43_100%)]"
      id="top"
    >
      <div className="max-w-[1180px] w-[calc(100%-40px)] mx-auto grid grid-cols-1 lg:grid-cols-[1.03fr_0.97fr] items-center gap-12 py-16 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.18em] uppercase opacity-75 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#60a5fa] animate-ping"></span>
            Nile University of Nigeria · Abuja
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[0.98] tracking-tight mb-5">
            Where Nile&apos;s{" "}
            <span className="bg-gradient-to-r from-white via-[#7ab0ff] to-[#d6e5ff] bg-clip-text text-transparent">
              computing community
            </span>{" "}
            becomes future-ready.
          </h1>

          <p className="text-white/70 text-base sm:text-lg max-w-xl mb-8">
            NACOS Nile brings together the students shaping ideas in software,
            security, data, technology and information systems — through
            community, learning and meaningful opportunities.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="#community"
              className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-full font-bold text-sm text-white bg-[#274193] shadow-[0_16px_30px_rgba(39,65,147,0.3)] hover:-translate-y-0.5 hover:bg-[#3150ac] transition-all"
            >
              Join the Community <span>→</span>
            </Link>
            <Link
              href="#programs"
              className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-full font-bold text-sm text-white bg-white/5 border border-white/15 hover:bg-white/10 transition-all"
            >
              Explore What We Do
            </Link>
          </div>

          <div className="flex items-center gap-5 pt-4">
            <div className="flex items-center gap-2.5">
              <strong className="text-2xl font-bold">6</strong>
              <span className="text-[0.66rem] text-white/45 uppercase tracking-wider leading-tight">
                Computing<br />disciplines
              </span>
            </div>
            <div className="w-px h-8 bg-white/15"></div>
            <div className="flex items-center gap-2.5">
              <strong className="text-2xl font-bold">∞</strong>
              <span className="text-[0.66rem] text-white/45 uppercase tracking-wider leading-tight">
                Ideas worth<br />building
              </span>
            </div>
            <div className="w-px h-8 bg-white/15"></div>
            <div className="flex items-center gap-2.5">
              <strong className="text-2xl font-bold">1</strong>
              <span className="text-[0.66rem] text-white/45 uppercase tracking-wider leading-tight">
                Connected<br />community
              </span>
            </div>
          </div>
        </div>

        {/* Floating Code Card + Floating Badges */}
        <div className="relative min-h-[440px] flex items-center justify-center">
          {/* Top Right Badge */}
          <div className="absolute -top-2 right-4 sm:right-10 z-20 px-4 py-2.5 rounded-2xl bg-[#09132d]/90 border border-white/15 backdrop-blur-md shadow-lg animate-bounce flex items-center gap-3">
            <div className="text-blue-400 font-bold text-lg">📊</div>
            <div>
              <div className="text-xs font-bold text-white">Skills → Impact</div>
              <div className="text-[0.65rem] text-white/50">Learn. Connect. Build.</div>
            </div>
          </div>

          {/* Floating Code Window */}
          <div className="w-full max-w-[480px] rounded-2xl border border-white/15 bg-[#060d1f]/85 backdrop-blur-xl shadow-2xl overflow-hidden animate-[float_6s_eaes-in-out_infinite] rotate-1">
            <div className="h-11 px-4 flex items-center justify-between bg-white/5 text-white/40 text-xs font-mono border-b border-white/10">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              </div>
              <span>nacos_nile/community.ts</span>
              <span className="text-[#71d3a0] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71d3a0] animate-ping"></span>
                live
              </span>
            </div>
            <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed text-[#dae6ff] space-y-1">
              <div><span className="text-white/20 mr-4">01</span><span className="text-[#ff84ba]">const</span> <span className="text-[#83b9ff]">community</span> = &#123;</div>
              <div><span className="text-white/20 mr-4">02</span>  <span className="text-[#72dff4]">mission</span>: <span className="text-[#83d9a2]">&quot;grow together&quot;</span>,</div>
              <div><span className="text-white/20 mr-4">03</span>  <span className="text-[#72dff4]">skills</span>: [<span className="text-[#83d9a2]">&quot;build&quot;</span>, <span className="text-[#83d9a2]">&quot;learn&quot;</span>],</div>
              <div><span className="text-white/20 mr-4">04</span>  <span className="text-[#72dff4]">ideas</span>: <span className="text-[#efcb72]">Infinity</span>,</div>
              <div><span className="text-white/20 mr-4">05</span>  <span className="text-[#72dff4]">future</span>: <span className="text-[#83d9a2]">&quot;ours&quot;</span></div>
              <div><span className="text-white/20 mr-4">06</span>&#125;;</div>
              <div className="flex items-center">
                <span className="text-white/20 mr-4">07</span>
                <span className="text-[#ff84ba]">export default</span>
                <span className="text-white ml-1">community;</span>
                <span className="w-2 h-4 bg-[#60a5fa] ml-1 animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Bottom Left Badge */}
          <div className="absolute -bottom-2 left-2 sm:left-6 z-20 px-4 py-2.5 rounded-2xl bg-[#09132d]/90 border border-white/15 backdrop-blur-md shadow-lg animate-bounce flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">✦</div>
            <div>
              <div className="text-xs font-bold text-white">Built by students</div>
              <div className="text-[0.65rem] text-white/50">For students</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
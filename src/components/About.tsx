import Link from "next/link";

export default function About() {
  return (
    <section className="py-28 bg-white" id="about">
      <div className="max-w-[1180px] w-[calc(100%-40px)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[0.72rem] font-bold tracking-[0.18em] text-[#667085] uppercase mb-2">
            01 / ABOUT NACOS NILE
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0f172a] mb-6 leading-tight">
            A community built around <em className="not-italic text-[#274193]">possibility.</em>
          </h2>
          <p className="text-[#667085] mb-4 leading-relaxed">
            We are the NACOS Nile University of Nigeria Chapter — a student community creating space for computing students to learn, collaborate, lead and grow.
          </p>
          <p className="text-[#667085] mb-6 leading-relaxed">
            From the classroom to real-world projects, our goal is simple: make it easier for students to discover their path, sharpen their skills and find people to build with.
          </p>
          <Link href="#community" className="inline-flex items-center gap-2 text-[#274193] font-bold hover:translate-x-1 transition-transform">
            Find your people <span>↗</span>
          </Link>
        </div>

        <div className="grid gap-4">
          <article className="p-7 rounded-3xl text-white bg-gradient-to-br from-[#0d1733] to-[#16295d] shadow-xl flex gap-5">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center font-bold text-lg shrink-0">M</div>
            <div>
              <span className="text-[0.65rem] tracking-widest font-bold text-white/60 uppercase">MISSION</span>
              <h3 className="text-xl font-bold mt-1 mb-2">Make growth collaborative.</h3>
              <p className="text-sm text-white/60">Create practical opportunities for students to learn, connect, contribute and gain confidence in technology.</p>
            </div>
          </article>

          <article className="p-7 rounded-3xl bg-[#f9fbff] border border-[rgba(39,65,147,0.13)] flex gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#60a5fa]/10 text-[#274193] flex items-center justify-center font-bold text-lg shrink-0">V</div>
            <div>
              <span className="text-[0.65rem] tracking-widest font-bold text-[#667085] uppercase">VISION</span>
              <h3 className="text-xl font-bold text-[#0f172a] mt-1 mb-2">A stronger Nile tech ecosystem.</h3>
              <p className="text-sm text-[#667085]">A connected computing community where ideas can move from classroom concepts to meaningful impact.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
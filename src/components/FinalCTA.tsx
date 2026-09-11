import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-nacos-900 section-padding relative overflow-hidden" aria-label="Final call to action">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nacos-600/10 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="container-nacos relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow text-nacos-400 mb-6">Your Next Chapter</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.05] text-balance">
            Your next project
            <br />
            <span className="text-nacos-400">starts here.</span>
          </h2>
          <p className="mt-8 text-lg text-white/50 leading-relaxed max-w-xl mx-auto">
            Learn. Build. Grow. Join a community of computing students who
            are shaping the future of technology at Nile University.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#community" className="btn-primary group">
              Join Community
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
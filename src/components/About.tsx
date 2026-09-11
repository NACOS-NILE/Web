import { Target, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3">
            About NACOS Nile
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Building a Cohesive, Forward-Thinking Tech Community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0d1733]/60 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-6">
              <Target size={26} />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              To nurture technological literacy, promote high-impact student innovation,
              and bridge the gap between academic theory and real-world tech industry
              practice for all computing disciplines at Nile University of Nigeria.
            </p>
          </div>

          <div className="bg-[#0d1733]/60 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-6">
              <Compass size={26} />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              To serve as the premier student tech association in Nigeria, producing
              globally competitive software engineers, cybersecurity experts, and data
              professionals capable of solving pressing societal challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
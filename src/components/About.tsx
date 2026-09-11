import { Target, Eye } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white" aria-label="About NACOS Nile">
      <div className="container-nacos">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">About NACOS Nile</p>
            <h2 className="section-heading text-balance">
              The home of computing students at Nile University.
            </h2>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7 lg:pt-6">
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              NACOS (Nigeria Association of Computing Students) Nile is the
              official student chapter at Nile University of Nigeria. We bring
              together students across all computing disciplines to foster
              collaboration, innovation, and professional growth within a
              vibrant academic community.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Mission */}
              <div className="border border-gray-200 p-6 rounded-sm hover:border-nacos-300 transition-colors duration-300">
                <div className="w-10 h-10 bg-nacos-50 rounded-sm flex items-center justify-center mb-4">
                  <Target size={20} className="text-nacos-600" />
                </div>
                <h3 className="text-base font-bold text-nacos-900 mb-2">Our Mission</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To create an inclusive environment where computing students
                  develop technical excellence, leadership skills, and
                  meaningful connections.
                </p>
              </div>

              {/* Vision */}
              <div className="border border-gray-200 p-6 rounded-sm hover:border-nacos-300 transition-colors duration-300">
                <div className="w-10 h-10 bg-nacos-50 rounded-sm flex items-center justify-center mb-4">
                  <Eye size={20} className="text-nacos-600" />
                </div>
                <h3 className="text-base font-bold text-nacos-900 mb-2">Our Vision</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To be the leading student-driven computing community at Nile
                  University, producing industry-ready graduates and
                  impactful technologists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#040813] border-t border-blue-900/30 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Chapter Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0d1733] border border-blue-500/30 p-1.5 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="NACOS Nile Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight">NACOS </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#274193] text-blue-100 border border-blue-400/30">
                  NILE CHAPTER
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Nigeria Association of Computing Students (NACOS), Nile University of Nigeria Chapter.
              Empowering students in software, systems, cybersecurity, and artificial intelligence.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <p>📍 Plot 681, Cadastral Zone C-OO, Research &amp; Institution Area</p>
              <p>Jabi, Airport Road Bypass, Abuja FCT, Nigeria</p>
              <p>✉️ nacos@nileuniversity.edu.ng</p>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-blue-300 transition">
                  About Association
                </a>
              </li>
              <li>
                <a href="#disciplines" className="hover:text-blue-300 transition">
                  Academic Disciplines
                </a>
              </li>
              <li>
                <a href="#initiatives" className="hover:text-blue-300 transition">
                  Events &amp; Bootcamps
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-blue-300 transition">
                  Executive Council
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-blue-300 transition">
                  Student Channels
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-300 transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Disciplines */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <span className="hover:text-blue-300 transition cursor-default">Computer Science</span>
              </li>
              <li>
                <span className="hover:text-blue-300 transition cursor-default">Software Engineering</span>
              </li>
              <li>
                <span className="hover:text-blue-300 transition cursor-default">Cyber Security</span>
              </li>
              <li>
                <span className="hover:text-blue-300 transition cursor-default">Data Science</span>
              </li>
              <li>
                <span className="hover:text-blue-300 transition cursor-default">Information Technology</span>
              </li>
              <li>
                <span className="hover:text-blue-300 transition cursor-default">Information Systems</span>
              </li>
            </ul>
          </div>

          {/* Col 5: External Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Portals &amp; Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="https://portal.nileuniversity.edu.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition"
                >
                  Nile Student Portal ↗
                </a>
              </li>
              <li>
                <a
                  href="https://nileuniversity.edu.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition"
                >
                  Nile University Website ↗
                </a>
              </li>
              <li>
                <a
                  href="https://nacos.org.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition"
                >
                  NACOS National ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/NACOS-NILE/Web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition"
                >
                  GitHub Repository ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} NACOS Nile University of Nigeria Chapter. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Crafted with passion for Nile Computing Students ⚡</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

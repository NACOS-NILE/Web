import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-nacos-dark border-t border-slate-200 dark:border-white/10 pt-16 pb-8 transition-colors duration-300 relative z-10">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* school Address */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex flex-col justify-center mb-6 hover:opacity-80 transition-opacity">
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white leading-tight">
                NACOS <span className="text-nacos-accent">NILE</span>
              </span>
              <span className="text-[9px] font-bold text-slate-600 dark:text-gray-400 tracking-[0.2em] mt-0.5">
                COMPUTING SOCIETY
              </span>
            </Link>
            <p className="text-slate-700 dark:text-gray-400 text-sm max-w-xs leading-relaxed font-medium">
              Nile University of Nigeria,<br />
              Plot 681, Cadastral Zone C-OO,<br />
              Research & Institution Area, Jabi Airport Bypass,<br />
              Abuja, FCT, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-extrabold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600 dark:text-gray-400">
              <li><Link href="#about" className="hover:text-nacos-accent transition-colors">About Us</Link></li>
              <li><Link href="#disciplines" className="hover:text-nacos-accent transition-colors">Disciplines</Link></li>
              <li><Link href="#programs" className="hover:text-nacos-accent transition-colors">Events & Programs</Link></li>
              <li><Link href="#executives" className="hover:text-nacos-accent transition-colors">Leadership</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} NACOS Nile University Chapter. All rights reserved.</p>
          <p>
            Designed & Built by <span className="text-slate-800 dark:text-gray-300 font-bold">Christian Eke (242120013)</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
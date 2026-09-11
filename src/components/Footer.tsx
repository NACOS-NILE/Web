import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-nacos-900 border-t border-white/10 py-12" role="contentinfo">
      <div className="container-nacos">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4" aria-label="NACOS Nile Home">
              <Image
                src="/logo.svg"
                alt="NACOS Nile Logo"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="text-base font-bold text-white tracking-tight">
                NACOS<span className="text-nacos-400 ml-0.5">Nile</span>
              </span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              The Nigeria Association of Computing Students — Nile University
              of Nigeria Chapter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Disciplines", href: "#disciplines" },
                { label: "Programs", href: "#programs" },
                { label: "Excos", href: "#excos" },
                { label: "Community", href: "#community" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-nacos-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 mb-4">
              Contact
            </h3>
            <div className="space-y-2.5 text-sm text-white/40">
              <p>Nile University of Nigeria</p>
              <p>Abuja, FCT</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 mb-4">
              Community
            </h3>
            <p className="text-sm text-white/40 leading-relaxed">
              Join our Discord, WhatsApp, Telegram, X, Instagram, or LinkedIn
              to stay connected.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} NACOS Nile. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Designed & developed by{" "}
            <span className="text-white/50 font-medium">Alina Yesufu</span>
          </p>
          <p className="text-xs text-white/30">
            Built by NACOS Nile &middot; Nile University of Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
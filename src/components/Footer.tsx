import Image from "next/image";

export default function Footer() {
  const socials = [
    {
      name: "WhatsApp",
      href: "https://chat.whatsapp.com",
      svg: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        />
      ),
    },
    {
      name: "Telegram",
      href: "https://t.me",
      svg: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
        />
      ),
    },
    {
      name: "X (Twitter)",
      href: "https://x.com",
      svg: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4l16 16M4 20L20 4"
        />
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      svg: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
        </>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      svg: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          />
          <rect x="2" y="9" width="4" height="12" strokeWidth="2" />
          <circle cx="4" cy="4" r="2" strokeWidth="2" />
        </>
      ),
    },
  ];

  return (
    <footer id="community" className="bg-[#0d1733] border-t border-white/10 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="NACOS Nile Logo"
                width={36}
                height={36}
                className="w-auto h-8"
              />
              <span className="font-bold text-lg">NACOS Nile Chapter</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              The official association for computing students at Nile University of Nigeria, Abuja, FCT.
            </p>
            <p className="text-xs text-gray-400">
              Plot 681, Cadastral Zone C-OO, Research &amp; Institution Area, Jabi Airport Bypass, Abuja.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#disciplines" className="hover:text-white transition-colors">
                  Disciplines
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Programs &amp; Initiatives
                </a>
              </li>
              <li>
                <a href="#excos" className="hover:text-white transition-colors">
                  Executive Council
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Socials & Community */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-4">
              Join Our Community
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Connect with fellow students, get announcements on workshops, and participate in hackathons.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#274193] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all group"
                >
                  <svg
                    className="w-5 h-5 fill-none stroke-current"
                    viewBox="0 0 24 24"
                  >
                    {item.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} NACOS Nile Chapter. All rights reserved.</p>
          <p>Built for the NACOS Nile Landing Page Challenge.</p>
        </div>
      </div>
    </footer>
  );
}
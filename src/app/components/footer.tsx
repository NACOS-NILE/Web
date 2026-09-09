export default function Footer() {
  return (
    <footer className="w-full max-w-4xl mx-auto bg-black text-white p-8 md:p-12 rounded-3xl font-sans">
      {/* Top Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        
        {/* Left Column: Brand & Info */}
        <div className="space-y-6">
          {/* Logo Placeholder */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-12 bg-gray-200 text-black flex items-center justify-center font-bold rounded text-xs text-center p-1">
              [MAP LOGO]
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-wide">NACOS NATIONAL</h2>
              <p className="text-xs text-gray-400 italic">Networking the world</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Nigeria Association of Computing Students (NACOS) is the Umbrella body for students studying Computer Science, Computer Engineering, Information Systems, Cyber Security and all IT related courses in Nigeria.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 pt-2">
            {['facebook', 'twitter', 'linkedin', 'mail'].map((icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 rounded-full bg-[#1db954] hover:bg-green-600 flex items-center justify-center text-white text-xs transition-colors"
                aria-label={icon}
              >
                {/* SVG icon placeholder or FontAwesome icon */}
                <span className="capitalize">{icon[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Quick Links */}
        <div className="md:pl-12">
          <h3 className="text-base font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About Nile NACOS</a></li>
            <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
            <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-6" />

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-500">
        © 2026 NACOS Portal System. All rights reserved.
      </div>
    </footer>
  );
}
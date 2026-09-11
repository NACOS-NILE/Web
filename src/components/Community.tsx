export default function Community() {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/nacosnileuni",
      bgColor: "bg-[#E4405F]",
      hoverBg: "hover:bg-[#d62e4c]",
      svg: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/NacosNileUni",
      bgColor: "bg-black",
      hoverBg: "hover:bg-neutral-800",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/",
      bgColor: "bg-[#0A66C2]",
      hoverBg: "hover:bg-[#084e96]",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@nacosnileuni",
      bgColor: "bg-black",
      hoverBg: "hover:bg-neutral-800",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.07-1.3 1.8-.24.84-.1 1.77.35 2.51.42.71 1.15 1.23 1.95 1.42.92.22 1.92.07 2.72-.44.75-.46 1.28-1.24 1.44-2.1.13-.7.12-1.42.12-2.13V0z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:nacosnile@gmail.com",
      bgColor: "bg-[#737373]",
      hoverBg: "hover:bg-[#525252]",
      svg: (
        <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="py-28 text-white bg-gradient-to-br from-[#091024] to-[#132862] overflow-hidden"
      id="community"
    >
      <div className="max-w-[1180px] w-[calc(100%-40px)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-[0.72rem] font-bold tracking-[0.18em] text-[#8dbdff] uppercase mb-2">
            05 / COMMUNITY
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Your next project could start{" "}
            <span className="text-[#7ab1ff]">here.</span>
          </h2>
          <p className="text-white/60 mb-8 max-w-md">
            Join the channels where Nile computing students share opportunities,
            ask questions, discover events and meet people to build with.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`w-12 h-12 rounded-full ${social.bgColor} ${social.hoverBg} text-white flex items-center justify-center transition-all transform hover:scale-105 shadow-md`}
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Radar Animation Area */}
        <div className="flex justify-center relative py-8">
          <div className="w-80 h-80 rounded-full border border-white/10 flex items-center justify-center relative bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]">
            <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_8s_linear_infinite]">
              <div className="w-1/2 h-1/2 bg-gradient-to-br from-blue-500/20 to-transparent rounded-tl-full origin-bottom-right"></div>
            </div>

            <div className="w-56 h-56 rounded-full border border-white/15 flex items-center justify-center relative">
              <span className="absolute top-4 left-10 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa] animate-ping"></span>
              <span className="absolute bottom-12 right-6 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]"></span>
              <span className="absolute top-1/2 right-4 w-2 h-2 rounded-full bg-[#71d3a0] shadow-[0_0_8px_#71d3a0]"></span>
              <span className="absolute bottom-6 left-16 w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]"></span>

              <div className="w-28 h-28 rounded-full border border-white/20 bg-[#091024]/80 backdrop-blur-sm flex flex-col items-center justify-center text-center shadow-2xl relative z-10">
                <span className="w-2 h-2 rounded-full bg-blue-400 mb-1 animate-pulse"></span>
                <span className="text-[0.62rem] font-bold tracking-widest text-white/50">
                  CONNECT
                </span>
                <strong className="text-blue-300 font-bold text-sm">
                  + CREATE
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
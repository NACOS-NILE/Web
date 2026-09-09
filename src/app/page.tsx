const navItems = ["About", "Disciplines", "Events", "Excos", "Community"];

const disciplines = [
  "Computer Science",
  "Software Engineering",
  "Cyber Security",
  "Information Technology",
  "Information Systems",
  "Data Science",
];

const initiatives = [
  {
    title: "Coding Bootcamps & Workshops",
    description:
      "Hands-on workshops that turn curiosity into practical software skills and confidence.",
  },
  {
    title: "Hackathons & Tech Week",
    description:
      "Creative problem-solving challenges that connect students with technology, teamwork, and innovation.",
  },
  {
    title: "Mentorship & Career Talks",
    description:
      "Real-world guidance from experienced professionals and senior peers across the tech ecosystem.",
  },
];

const excos = [
  { name: "Zikora Fortune Nwafor", role: "President", image: "/excos-pics/president.jpg" },
  { name: "Abdullah Ali Ahmad", role: "Vice President", image: "/excos-pics/vp.jpg" },
  { name: "Sheila Jato", role: "Secretary General", image: "/excos-pics/sg.jpg" },
  { name: "Amira Ibrahim", role: "Financial Secretary", image: "/excos-pics/fc.jpg" },
  { name: "Elvis Francis", role: "Public Relations Officer", image: "/excos-pics/pro.jpg" },
  { name: "Ivoke Kamsi", role: "DTD", image: "/excos-pics/dtd.jpg" },
  { name: "Zubaida Abdulazeez", role: "Provost", image: "/excos-pics/provost.jpg" },
  { name: "Saidat Ahmed", role: "Director of Socials", image: "/excos-pics/socials.jpg" },
  { name: "Danielle Ekunwe", role: "Director of Welfare", image: "/excos-pics/welfare.jpg" },
];

export default function Home() {
  return (
    <div>

      <main id="top">
        <section className="navbar">
                <header>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img src="./public/logo.svg" alt="NACOS Nile logo" className="h-11 w-11 rounded-full border border-slate-200 bg-white p-1" />
            <div>
              <p className="text-lg font-bold tracking-tight text-[#274193]">NACOS Nile</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Nile University</p>
            </div>
          </a>

          <nav>
            {/* Brand / Logo */}
            <div className="logo"><img src="./public/logo.svg" alt="NACOS Nile logo" /></div>

            {/* Navigation Links */}
            <ul>
              <li><a href="#">How it works</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Mac</a></li>
              <li><a href="#">Journal</a></li>
            </ul>

            {/* Right side: language & CTA */}
            <div className="nav-actions">
              <span className="language">EN</span>
              <a href="#" className="preorder">Log in</a>
            </div>
          </nav>

          <a href="#community" className="rounded-full bg-[#274193] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-[#1b2d63]">
            Join Community
          </a>
        </div>
      </header>

        </section>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.22),_transparent_35%),linear-gradient(135deg,_#edf4ff_0%,_#f8fafc_42%,_#eef6ff_100%)]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
            <div>
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#274193]">
                Computing for impact
              </span>
              <h1 className="mt-6 max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Build boldly. Learn deeply. Grow together.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                NACOS Nile is the student community for tech enthusiasts and future builders at Nile University of Nigeria — where creativity, problem-solving, and collaboration meet.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#community" className="inline-flex items-center justify-center rounded-full bg-[#274193] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-[#1b2d63]">
                  Join Community
                </a>
                <a href="#disciplines" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-[#274193] hover:text-[#274193]">
                  Explore Programs
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-600">
                <div>
                  <p className="text-3xl font-black text-[#274193]">500+</p>
                  <p>Students</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-[#274193]">12+</p>
                  <p>Events yearly</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-[#274193]">6</p>
                  <p>Core disciplines</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[#dbeafe] blur-3xl" />
              <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_-30px_rgba(39,65,147,0.45)]">
                <div className="rounded-[1.5rem] bg-[#0d1733] p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-blue-200">NACOS Nile</p>
                      <h2 className="mt-2 text-2xl font-bold">Student tech community</h2>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-blue-100">Live</span>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Focus</p>
                      <p className="mt-3 text-2xl font-bold">Innovation</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Impact</p>
                      <p className="mt-3 text-2xl font-bold">Leadership</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4 sm:col-span-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Programs</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-sm">
                        {disciplines.slice(0, 4).map((item) => (
                          <span key={item} className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-100">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <img src="/logo.svg" alt="NACOS Nile emblem" className="mx-auto h-28 w-28 rounded-3xl bg-slate-100 p-4" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#274193]">About NACOS Nile</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                A home for ambitious minds in computing.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                NACOS Nile brings together students across computing disciplines to learn, collaborate, and lead. From academic excellence to community-building, we create opportunities for members to innovate, connect, and develop lasting skills.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Through mentorship, technical events, and community-driven initiatives, we empower every member to grow beyond the classroom and into the future of digital transformation.
              </p>
            </div>
          </div>
        </section>

        <section id="disciplines" className="bg-[#0d1733] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">Disciplines</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Driven by the future of technology</h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {disciplines.map((discipline, index) => (
                <div key={discipline} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/20 text-lg font-bold text-blue-200">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{discipline}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Exploring the practical and theoretical foundations shaping modern digital innovation and problem-solving.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#274193]">Initiatives</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Opportunities that move students forward</h2>
            </div>
            <a href="#community" className="text-sm font-semibold text-[#274193] transition hover:text-[#1b2d63]">
              Get involved →
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {initiatives.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg text-[#274193]">✦</div>
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="excos" className="bg-slate-100 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#274193]">Executive Council</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Leaders building the community</h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {excos.map((member) => (
                <article key={member.name} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
                  <img src={member.image} alt={member.name} className="h-72 w-full object-cover" />
                  <div className="p-5">
                    <p className="text-xl font-bold text-slate-900">{member.name}</p>
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-[#274193]">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="community" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-r from-[#274193] to-[#3b82f6] p-8 text-white shadow-[0_30px_80px_-35px_rgba(39,65,147,0.8)] sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Community</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Join a network that keeps building.</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
                  Connect with fellow students, discover opportunities, and stay inspired through our growing network across WhatsApp, Telegram, Discord, and social platforms.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://chat.whatsapp.com/EXBkX1Gq1k80apkd9Pp1y1" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#274193]">WhatsApp</a>
                {/* <a href="https://discord.com" className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white">Discord</a>
                <a href="https://t.me" className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white">Telegram</a> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-bold text-slate-900">NACOS Nile</p>
            <p className="mt-1">Nile University of Nigeria, Abuja, FCT</p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="#about" className="hover:text-[#274193]">About</a>
            <a href="#disciplines" className="hover:text-[#274193]">Disciplines</a>
            <a href="#events" className="hover:text-[#274193]">Events</a>
            <a href="#community" className="hover:text-[#274193]">Community</a>
          </div>

          <p>© 2026 NACOS Nile. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

import Image from "next/image";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Disciplines", href: "#disciplines" },
  { name: "Initiatives", href: "#initiatives" },
  { name: "Excos", href: "#excos" },
  { name: "Community", href: "#community" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1733] px-6 pb-8 pt-16 text-white sm:px-8 lg:px-12">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Image
              src="/logo.svg"
              alt="NACOS Nile logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />

            <h2 className="mt-6 text-xl font-bold">
              NACOS Nile
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Building a stronger computing community at Nile University of
              Nigeria through learning, collaboration, and technology.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-slate-400 transition hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-sm font-semibold">
              Find us
            </p>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              NACOS Nile University Chapter
              <br />
              Nile University of Nigeria
              <br />
              Abuja, FCT, Nigeria
            </p>
          </div>

        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} NACOS Nile. All rights reserved.
          </p>

          <p>
            Built with curiosity & technology.
          </p>

        </div>

      </div>
    </footer>
  );
}

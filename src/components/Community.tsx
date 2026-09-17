import { Mail } from "lucide-react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaTiktok } from "react-icons/fa6";

const channels = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nacosnileuni?stkn=MWIuY2xtNHNpbnlvdg==",
    icon: FaInstagram,
    detail: "Photos from events and workshops",
  },
  {
    name: "Twitter / X",
    href: "https://x.com/NacosNileUni",
    icon: FaXTwitter,
    detail: "Public updates and recaps",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/",
    icon: FaLinkedin,
    detail: "Alumni network and job postings",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@nacosnileuni?r=1&_t=ZS-99dvLQr98I8",
    icon: FaTiktok,
    detail: "Short clips from campus life",
  },
  {
    name: "Email",
    href: "mailto:nacosnile@gmail.com",
    icon: Mail,
    detail: "nacosnile@gmail.com",
  },
];

export default function Community() {
  return (
    <section id="community" className="relative overflow-hidden bg-nacos-navy">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-nacos-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-nacos-green-light/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Join the community
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Follow along on the channels NACOS Nile Excos actually run.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {channels.map(({ name, href, icon: Icon, detail }) => (
            <a
              key={name}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="group flex flex-col gap-3 bg-nacos-navy p-6 transition-colors hover:bg-nacos-blue"
            >
              <Icon size={20} className="text-nacos-accent-light" />
              <span className="text-sm font-semibold text-white">{name}</span>
              <span className="text-sm text-white/60">{detail}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

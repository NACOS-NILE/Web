// Footer.tsx

import Image from "next/image";
import {
  Instagram,
  Linkedin,
  Send,
  MessageCircle,
  Github,
  ArrowUpRight,
} from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Excos", href: "#excos" },
  { label: "Nacosite", href: "#nacosite" },
  { label: "Events", href: "#events" },
  { label: "Community", href: "#community" },
];

const socials = [
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com",
    icon: MessageCircle,
    color: "#25D366",
  },
  {
    label: "Telegram",
    href: "https://t.me",
    icon: Send,
    color: "#229ED9",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
    color: "#E4405F",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    color: "#0A66C2",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-navy-deep
        pt-16
        text-white
        lg:pt-20
      "
    >
      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/4
          h-[350px]
          w-[350px]
          rounded-full
          bg-[rgb(80,200,120)]/[0.045]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-royal/[0.04]
          blur-[120px]
        "
      />

      <div className="container-edge relative z-10 mx-auto max-w-content">

        {/* =================================
            MAIN FOOTER
        ================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            border-b
            border-white/10
            pb-12
            md:grid-cols-3
            lg:gap-20
          "
        >

          {/* =================================
              BRAND
          ================================= */}

          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="NACOS Nile Logo"
                width={42}
                height={42}
                className="
                  h-9
                  w-auto
                  object-contain
                "
              />

              <span className="font-display text-lg">
                NACOS{" "}
                <span className="italic font-bold uppercase text-highlight">
                  Nile
                </span>
              </span>
            </div>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-relaxed
                text-white/55
              "
            >
              The official association for computing students at Nile
              University of Nigeria, Abuja, FCT.
            </p>

            <p
              className="
                mt-4
                max-w-sm
                text-xs
                leading-relaxed
                text-white/30
              "
            >
              Plot 681, Cadastral Zone C-OO, Research & Institution Area,
              Jabi Airport Bypass, Abuja.
            </p>
          </div>

          {/* =================================
              QUICK LINKS
          ================================= */}

          <div>
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-highlight
              "
            >
              Explore NACOS
            </span>

            <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-1.5
                      text-sm
                      text-white/55
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >
                    {link.label}

                    <ArrowUpRight
                      size={13}
                      className="
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================
              COMMUNITY
          ================================= */}

          <div>
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-highlight
              "
            >
              Join Our Community
            </span>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-relaxed
                text-white/55
              "
            >
              Connect with fellow computing students, learn from one
              another, and become part of the NACOS Nile community.
              Join us for workshops, events, hackathons, and initiatives.
            </p>

            {/* Social icons */}

            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      group
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.035]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-white/20
                      hover:bg-white/[0.07]
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.9}
                      style={{
                        color: social.color,
                      }}
                      className="
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </a>
                );
              })}
            </div>

            {/* =================================
                GITHUB
            ================================= */}

            <a
              href="https://github.com/DivineEze-course"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-5
                inline-flex
                items-center
                gap-3
                text-sm
                text-white/45
                transition-colors
                duration-300
                hover:text-white
              "
            >
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.035]
                  transition-all
                  duration-300
                  group-hover:border-white/20
                  group-hover:bg-white/[0.08]
                "
              >
                <Github
                  size={17}
                  className="
                    text-white/60
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    group-hover:text-white
                  "
                />
              </span>

              <span>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-white/25">
                  Built by
                </span>

                <span className="font-medium text-white/60 transition-colors duration-300 group-hover:text-white">
                  Divine Eze
                </span>
              </span>

              <ArrowUpRight
                size={13}
                className="
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:opacity-100
                "
              />
            </a>
          </div>
        </div>

        {/* =================================
            BOTTOM
        ================================= */}

        <div
          className="
            flex
            flex-col
            gap-3
            py-7
            text-xs
            text-white/30
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © 2026 NACOS Nile Chapter. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[rgb(80,200,120)]
                shadow-[0_0_10px_rgba(80,200,120,0.5)]
              "
            />

            <span className="uppercase tracking-[0.14em]">
              Learn · Build · Connect
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
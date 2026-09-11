

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaGithub,
  FaTiktok,
} from "react-icons/fa6";

/* =========================================================
   INSTAGRAM ICON
   Custom SVG for the authentic Instagram gradient
========================================================= */

const InstagramIcon = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => {
  const gradientId = `instagramGradient-${size}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="2"
          y1="22"
          x2="22"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFD600" />
          <stop offset="0.3" stopColor="#FF7A00" />
          <stop offset="0.62" stopColor="#FF0069" />
          <stop offset="1" stopColor="#D300C5" />
        </linearGradient>
      </defs>

      {/* Instagram camera body */}
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5.5"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
      />

      {/* Camera lens */}
      <circle
        cx="12"
        cy="12"
        r="4.25"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
      />

      {/* Camera dot */}
      <circle
        cx="17.4"
        cy="6.6"
        r="1.25"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

/* =========================================================
   SOCIALS
========================================================= */

const socials = [
  {
    name: "LinkedIn",
    handle: "NACOS Nile University",
    href: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter",
    icon: FaLinkedinIn,
    accent: "bg-[#0A66C2]",
    iconColor: "text-[#0A66C2]",
    description: "Follow our professional updates.",
  },
  {
    name: "Instagram",
    handle: "@nacosnileuni",
    href: "https://www.instagram.com/nacosnileuni/p/C7UXTEIsdK1/?locale=ru&hl=am-et",
    icon: InstagramIcon,
    accent: "bg-black",
    iconColor: "",
    description: "See what happens inside the community.",
  },
  {
    name: "Facebook",
    handle: "NACOS Nile",
    href: "https://www.facebook.com/events/nile-university-of-nigeria/nacos-innovation-and-software-summit/1632656686939532/",
    icon: FaFacebookF,
    accent: "bg-[#1877F2]",
    iconColor: "text-[#1877F2]",
    description: "Connect with the wider community.",
  },
  {
    name: "WhatsApp",
    handle: "NACOS Nile Community",
    href: "#",
    icon: FaWhatsapp,
    accent: "bg-[#25D366]",
    iconColor: "text-[#25D366]",
    description: "Stay connected with fellow members.",
    placeholder: true,
  },
  {
    name: "GitHub",
    handle: "NACOS-NILE",
    href: "https://github.com/NACOS-NILE",
    icon: FaGithub,
    accent: "bg-[#24292F]",
    iconColor: "text-[#F0F6FC]",
    description: "Build, collaborate and share projects.",
  },
  {
    name: "TikTok",
    handle: "@nacosnileuni",
    href: "https://www.tiktok.com/@nacosnileuni",
    icon: FaTiktok,
    accent: "bg-black",
    iconColor: "text-white",
    giant: "tiktok",
    description: "Watch, discover and stay in the loop.",
  },
];

/* =========================================================
   COMMUNITY
========================================================= */

export default function Community() {
  const fullText = "Join the community";

  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  /* =======================================================
     TYPING EFFECT
  ======================================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;

    if (displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(
          fullText.slice(0, displayText.length + 1)
        );
      }, 75);

      return () => clearTimeout(timer);
    }
  }, [displayText, started]);

  return (
    <section
      id="community"
      className="relative overflow-hidden bg-navy-deep py-24 text-white lg:py-13"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main blue glow */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[600px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-royal/20
            blur-[160px]
          "
        />

        {/* Green ambient glow */}
        <div
          className="
            absolute
            bottom-[-180px]
            left-[-100px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-highlight/10
            blur-[130px]
          "
        />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.5) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Center glow */}
        <motion.div
          animate={{
            opacity: [0.12, 0.25, 0.12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-highlight/5
            blur-[100px]
          "
        />
      </div>

      <div className="container-edge relative mx-auto max-w-content">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Typed headline */}
          <div className="overflow-hidden">
            <h2
              aria-label={fullText}
              className="
                whitespace-nowrap
                font-display
                text-[clamp(2.4rem,7vw,7.5rem)]
                lg:text-[clamp(2.8rem,7vw,7.5rem)]
                
                leading-[0.95]
                tracking-[-0.045em]
              "
            >
              <span aria-hidden="true">{displayText}</span>

              <motion.span
                aria-hidden="true"
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  ml-1
                  inline-block
                  h-[0.78em]
                  w-[3px]
                  translate-y-[0.08em]
                  bg-highlight
                "
              />
            </h2>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 1.5,
            }}
            className="
              mx-auto
              mt-8
              max-w-xl
              text-[15px]
              leading-relaxed
              text-white/50
              lg:text-[16px]
            "
          >
            Connect with fellow builders, exchange ideas, and
            follow the people, projects, and conversations
            shaping the NACOS Nile community.
          </motion.p>
        </motion.div>

        {/* =====================================================
            SOCIAL CARDS
        ====================================================== */}

        <div className="mx-auto mt-10 max-w-5xl">
          <div
            className="
              grid
              grid-cols-1
              gap-px
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/10
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-disabled={social.placeholder ? true : undefined}
                  onClick={
                    social.placeholder
                      ? (e) => e.preventDefault()
                      : undefined
                  }
                  target={
                    social.href !== "#"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    social.href !== "#"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  whileHover="hover"
                  className="
                    group
                    relative
                    min-h-[215px]
                    overflow-hidden
                    bg-navy-deep
                    p-7
                    transition-colors
                    duration-500
                    hover:bg-white/[0.045]
                    lg:p-8
                  "
                >
                  {/* =================================================
                      GIANT BRAND ICON
                  ================================================== */}

                  <motion.div
                    variants={{
                      hover: {
                        scale: 1.15,
                        rotate: -8,
                        opacity: 0.12,
                      },
                    }}
                    initial={{
                      scale: 1,
                      rotate: 0,
                      opacity: 0.055,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className={`
                      pointer-events-none
                      absolute
                      -right-8
                      -top-8
                      text-[150px]
                      ${social.iconColor}
                    `}
                  >
                    {social.giant === "tiktok" ? (
                      <div className="relative">
                        {/* Cyan offset */}
                        <Icon
                          size={150}
                          className="
                            absolute
                            -left-[5px]
                            -top-[2px]
                            text-[#25F4EE]
                          "
                        />

                        {/* Pink offset */}
                        <Icon
                          size={150}
                          className="
                            absolute
                            left-[5px]
                            top-[2px]
                            text-[#FE2C55]
                          "
                        />

                        {/* Main logo */}
                        <Icon
                          size={150}
                          className="relative text-white"
                        />
                      </div>
                    ) : (
                      <Icon size={150} />
                    )}
                  </motion.div>

                  {/* =================================================
                      TOP
                  ================================================== */}

                  <div className="relative flex items-start justify-between">
                    <motion.div
                      variants={{
                        hover: {
                          scale: 1.08,
                          rotate: -4,
                        },
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className={`
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        ${social.accent}
                      `}
                    >
                      {/* Instagram small icon */}
                      {social.name === "Instagram" ? (
                        <InstagramIcon
                          size={21}
                          className="text-white"
                        />
                      ) : (
                        <Icon
                          size={19}
                          className="text-white"
                        />
                      )}
                    </motion.div>

                    {/* Arrow */}
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        text-white/30
                        transition-all
                        duration-300
                        group-hover:border-highlight/50
                        group-hover:bg-highlight
                        group-hover:text-navy-deep
                      "
                    >
                      <ArrowUpRight
                        size={15}
                        className="
                          transition-transform
                          duration-300
                          group-hover:rotate-45
                        "
                      />
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="relative mt-12">
                    <p
                      className="
                        font-display
                        text-xl
                        text-white
                      "
                    >
                      {social.name}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[12px]
                        font-medium
                        text-highlight/80
                      "
                    >
                      {social.handle}
                    </p>

                    <p
                      className="
                        mt-3
                        max-w-[230px]
                        text-[12px]
                        leading-relaxed
                        text-white/35
                        transition-colors
                        duration-300
                        group-hover:text-white/55
                      "
                    >
                      {social.description}
                    </p>
                  </div>

                  {/* =================================================
                      PLACEHOLDER
                  ================================================== */}

                  {social.placeholder && (
                    <span
                      className="
                        absolute
                        bottom-6
                        right-7
                        text-[9px]
                        uppercase
                        tracking-[0.12em]
                        text-white/20
                      "
                    >
                      Coming soon
                    </span>
                  )}
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            FOOTER LINE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/10
            pt-6
            sm:flex-row
          "
        >
          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-white/25
            "
          >
            NACOS NILE
          </span>

          <div
            className="
              flex
              items-center
              gap-3
              text-[11px]
              text-white/30
            "
          >
            <span>Stay curious.</span>

            <span className="h-px w-8 bg-white/10" />

            <span>Stay connected.</span>
          </div>

          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-white/25
            "
          >
            Nile University
          </span>
        </motion.div>
      </div>
    </section>
  );
}


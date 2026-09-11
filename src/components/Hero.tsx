"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const MotionImage = motion(Image);

const container = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -22,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy text-white"
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute inset-0"
      >
        {/* Technical grid */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.14]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>

          <rect width="1440" height="900" fill="url(#grid)" />
        </svg>

        {/* Data lines + nodes */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g
            stroke="#3b82f6"
            strokeOpacity="0.35"
            strokeWidth="1"
          >
            <path
              d="M120 640 L420 460 L760 560 L1080 320 L1360 420"
              fill="none"
            />

            <path
              d="M60 220 L340 300 L620 180 L980 260 L1300 140"
              fill="none"
            />
          </g>

          <g fill="#60a5fa">
            <circle cx="120" cy="640" r="3.5" />
            <circle cx="420" cy="460" r="3.5" />
            <circle cx="760" cy="560" r="3.5" />
            <circle cx="1080" cy="320" r="3.5" />
            <circle cx="1360" cy="420" r="3.5" />
            <circle cx="340" cy="300" r="3.5" />
            <circle cx="620" cy="180" r="3.5" />
            <circle cx="980" cy="260" r="3.5" />
            <circle cx="1300" cy="140" r="3.5" />
          </g>
        </svg>

        {/* Glows */}
        <div className="absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-royal/40 blur-[120px] animate-drift" />

        <div className="absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-accent/20 blur-[130px]" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/40 to-navy" />
      </motion.div>

      {/* =========================================
          CONTENT
      ========================================= */}
      <div className="relative z-10 flex min-h-screen w-full items-center -mb-10">

        {/* =========================================
            ROBOT — DESKTOP ONLY
        ========================================= */}
        <div
          className="
            absolute
            left-0
            top-0
            hidden
            h-screen
            w-1/2
            xl:block
          "
        >
          <MotionImage
            src="/Images/robot_nobg.webp"
            alt=""
            fill
            sizes="50vw"
            quality={80}
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 0.5,
              x: 0,
            }}
            transition={{
              duration: 1.4,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="object-cover"
          />
        </div>

        {/* =========================================
            TEXT
        ========================================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="
            container-edge
            relative
            z-10
            mx-auto
            w-full
            max-w-content
            pb-20
            pt-40
            xl:ml-[55%]
            xl:w-1/2
            xl:pb-28
            xl:pt-0
            xl:mt-20
          "
        >
          <motion.p
            variants={item}
            className="mb-6 text-[13px] font-medium tracking-[0.14em] text-highlight/90"
          >
            Nile University of Nigeria · NACOS
          </motion.p>

          <motion.h1
            variants={item}
            className="
              max-w-6xl
              text-balance
              text-[2.8rem]
              font-bold
              leading-[1.06]
              uppercase
              sm:text-6xl
              xl:text-[5.25rem]
            "
          >
            Learn
            <br />

            <span className="text-white/90">
              Build
            </span>

            <br />

            <span className="italic text-[rgb(105,191,81)]">
              Connect
              <span className="animate-pulse">.</span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="
              mt-8
              max-w-xl
              text-balance
              text-[17px]
              leading-relaxed
              text-white/70
              lg:text-lg
            "
          >
            The community connecting Nile University’s computing students
            through technology, collaboration, learning and opportunity.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#about"
              role="button"
              aria-label="Explore NACOS"
              title="Explore NACOS"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/25
                px-6
                py-3.5
                text-[14.5px]
                font-semibold
                text-white/90
                transition-colors
                hover:border-white/60
                hover:text-white
              "
            >
              Explore NACOS

              <ArrowDown
                size={16}
                className="
                  transition-transform
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
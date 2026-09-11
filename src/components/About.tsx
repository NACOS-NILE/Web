"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const pillars = [
  {
    number: "01",
    title: "Mission",
    description:
      "To unite computing students and create a community that drives technological, innovative, and entrepreneurial advancement.",
  },
  {
    number: "02",
    title: "Aims",
    description:
      "To promote the study and practice of Computing through knowledge sharing, professional development, seminars, workshops, and opportunities for growth.",
  },
  {
    number: "03",
    title: "Focus",
    description:
      "To expose students to the possibilities of technology, develop future professionals, and empower young people to become contributors and catalysts for change.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#f4f5f1]
        py-24
        text-[#111827]
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      {/* Blue ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-[520px]
          w-[520px]
          rounded-full
          bg-royal/[0.10]
          blur-[140px]
        "
      />

      {/* Green ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-green-400/[0.09]
          blur-[150px]
        "
      />

      {/* Small central glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[250px]
          w-[250px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-royal/[0.035]
          blur-[100px]
        "
      />

      {/* Technical grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,24,39,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,0.8) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="container-edge relative z-10 mx-auto max-w-content">

        {/* =================================================
            TOP — IDENTITY + COMMUNITY PHOTO
        ================================================== */}

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-11 lg:items-center lg:gap-16">

          {/* =================================================
              LEFT — IDENTITY
          ================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative lg:col-span-5"
          >
            {/* Accent label */}
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-royal shadow-[0_0_18px_rgba(80,120,255,0.45)]" />

              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-royal">
                About NACOS Nile
              </span>
            </div>

            {/* Logo */}
            <div className="relative mt-8 inline-flex">
              <div className="absolute inset-0 rounded-full bg-royal/10 blur-3xl" />

              <Image
  src="/logo.svg"
  alt="NACOS logo"
  width={120}
  height={120}
  className="
    relative
    h-auto
    w-[90px]
    object-contain
    sm:w-[105px]
    lg:w-[120px]
  "
/>
            </div>

            {/* Statement */}
            <h2
              className="
                mt-10
                max-w-md
                font-display
                text-balance
                text-4xl
                leading-[1.02]
                tracking-[-0.045em]
                sm:text-5xl
                lg:text-[4.4rem]
              "
            >
              More than a
              <br />

              <span className="relative text-[#111827]/40">
                community.
              </span>
            </h2>

            {/* Accent underline */}
            <div className="mt-7 flex items-center gap-2">
              <div className="h-[3px] w-16 rounded-full bg-royal" />
              <div className="h-[3px] w-3 rounded-full bg-green-400" />
            </div>

            <p className="mt-7 max-w-sm text-[15px] leading-[1.85] text-[#111827]/55">
              A platform for students to discover their potential, develop
              their craft, and contribute to the future of technology.
            </p>

            {/* Bottom identity */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-royal" />
                <span className="h-1.5 w-1.5 rounded-full bg-royal/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
              </div>

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#111827]/35">
                Nile University
              </span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — COMMUNITY IMAGE
          ================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.12 }}
            className="group relative lg:col-span-6"
          >
            {/* Image container */}
            <div
  className="
    relative
    aspect-[4/3]
    overflow-hidden
    rounded-[24px]
    bg-[#111827]
    shadow-[0_30px_80px_rgba(17,24,39,0.12)]
  "
>
              <Image
  src="/Images/final year students at dinner.webp"
  alt="NACOS Nile student community"
  fill
  sizes="(max-width: 1024px) 100vw, 55vw"
  className="
    object-cover
    object-center
    transition-transform
    duration-1000
    ease-out
    group-hover:scale-[1.035]
  "
/>

              {/* Dark gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#111827]/65
                  via-transparent
                  to-transparent
                "
              />

              {/* Top technical detail */}
              <div className="absolute right-5 top-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(105,191,81,0.9)]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  NACOS Nile
                </span>
              </div>

              {/* Bottom image label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-[2px] w-8 rounded-full bg-green-400" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      The Community
                    </span>
                  </div>

                  <p className="max-w-[280px] text-sm font-medium leading-relaxed text-white/90 sm:text-base">
                    Built around people, ideas, and the experiences we share.
                  </p>
                </div>

                {/* Image arrow */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    text-white/70
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:rotate-6
                    group-hover:border-green-400/50
                    group-hover:bg-green-400
                    group-hover:text-[#111827]
                  "
                >
                  <ArrowUpRight
                    size={17}
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </div>
              </div>
            </div>

            {/* Small floating technical accent */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-3
                -right-3
                hidden
                h-16
                w-16
                rounded-full
                border
                border-royal/10
                bg-royal/[0.035]
                lg:block
              "
            />
          </motion.div>
        </div>

        {/* =================================================
            PILLARS
        ================================================== */}

        <div className="mt-24 lg:mt-28">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.12,
              }}
              className="
                group
                relative
                overflow-hidden
                border-t
                border-[#111827]/10
                py-8
                transition-all
                duration-500
                sm:py-10
                lg:py-12
              "
            >
              {/* Hover background */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  inset-y-2
                  -z-10
                  rounded-2xl
                  bg-white/0
                  transition-all
                  duration-500
                  group-hover:bg-white/70
                  group-hover:shadow-[0_20px_60px_rgba(17,24,39,0.06)]
                "
              />

              {/* Giant number */}
              <span
                className="
                  pointer-events-none
                  absolute
                  -right-3
                  top-1/2
                  -translate-y-1/2
                  font-display
                  text-[8rem]
                  font-semibold
                  leading-none
                  tracking-[-0.08em]
                  text-[#111827]/[0.055]
                  transition-all
                  duration-700
                  group-hover:-translate-x-4
                  group-hover:text-royal/[0.11]
                  sm:text-[10rem]
                  lg:text-[11rem]
                "
              >
                {pillar.number}
              </span>

              {/* Content */}
              <div
                className="
                  relative
                  z-10
                  grid
                  grid-cols-1
                  gap-6
                  sm:grid-cols-[150px_1fr]
                  lg:grid-cols-[180px_1fr]
                "
              >
                {/* Title */}
                <div>
                  {/* Mobile number */}
                  <div className="flex items-center gap-3 lg:hidden">
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-royal
                        transition-all
                        duration-300
                        group-hover:scale-150
                        group-hover:bg-green-400
                      "
                    />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111827]/35">
                      {pillar.number}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      font-display
                      text-2xl
                      font-medium
                      tracking-[-0.02em]
                      text-[#111827]
                      transition-all
                      duration-500
                      group-hover:translate-x-2
                      group-hover:text-royal
                      lg:text-3xl
                      lg:text-center
                    "
                  >
                    {pillar.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex items-center">
                  <p
                    className="
                      max-w-xl
                      text-[15px]
                      leading-[1.85]
                      text-[#111827]/50
                      transition-colors
                      duration-500
                      group-hover:text-[#111827]/75
                      lg:text-[16px]
                    "
                  >
                    {pillar.description}
                  </p>

                  {/* Arrow */}
                  <div
                    className="
                      ml-auto
                      hidden
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#111827]/10
                      bg-white/50
                      text-[#111827]/30
                      shadow-sm
                      transition-all
                      duration-500
                      group-hover:rotate-6
                      group-hover:border-royal/30
                      group-hover:bg-royal
                      group-hover:text-white
                      group-hover:shadow-[0_8px_25px_rgba(80,120,255,0.25)]
                      sm:flex
                    "
                  >
                    <ArrowUpRight
                      size={17}
                      className="
                        transition-transform
                        duration-500
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-0
                  bg-gradient-to-r
                  from-royal
                  via-royal
                  to-green-400
                  transition-all
                  duration-700
                  group-hover:w-full
                "
              />
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-[#111827]/10" />
        </div>
      </div>

      {/* =====================================================
          FLOATING DECORATIVE ELEMENTS
      ====================================================== */}

      {/* Top-right technical accent */}
      <div className="pointer-events-none absolute right-10 top-16 hidden lg:block">
        <div className="flex items-center gap-2">
          <div className="h-px w-16 bg-[#111827]/10" />
          <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
        </div>
      </div>

      {/* Bottom-left technical accent */}
      <div className="pointer-events-none absolute bottom-16 left-10 hidden lg:block">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-royal/60" />
          <div className="h-px w-20 bg-[#111827]/10" />
        </div>
      </div>

      {/* Vertical accent */}
      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-1/4
          hidden
          h-24
          w-px
          bg-gradient-to-b
          from-transparent
          via-royal/20
          to-transparent
          lg:block
        "
      />
    </section>
  );
}
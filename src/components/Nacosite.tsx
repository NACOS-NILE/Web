"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

const items = [
  {
    title: "Where we learn",
    description:
      "Workshops, tutorials, and technical sessions designed to take ideas beyond the classroom.",
    key: "learning",
    image: "/Images/Nacosite/workshop 1.webp",
  },
  {
    title: "Where we build",
    description:
      "Hackathons, project sprints, and collaborative challenges where ideas become something real.",
    key: "building",
    image: "/Images/Nacosite/tech events.webp",
  },
  {
    title: "Where we connect",
    description:
      "Events and experiences that bring computing students, industry, and a growing community together.",
    key: "connection",
    image: "/Images/Nacosite/dinner.webp",
  },
  {
    title: "Where opportunities begin",
    description:
      "A platform for discovering mentorship, career opportunities, competitions, and pathways into technology.",
    key: "opportunities",
    image: "/Images/Nacosite/dinner 3.webp",
  },
];

export default function Programs() {
  return (
    <section
      id="nacosite"
      className="
        relative
        overflow-hidden
        bg-navy
        py-24
        text-white
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      {/* Green ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/3
          h-[450px]
          w-[450px]
          rounded-full
          bg-[rgb(80,200,120)]/[0.055]
          blur-[140px]
        "
      />

      {/* Royal blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-royal/[0.08]
          blur-[150px]
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
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="container-edge relative z-10 mx-auto max-w-content">

        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            flex-col
            justify-between
            gap-8
            lg:flex-row
            lg:items-end
          "
        >
          <div className="max-w-3xl">

            {/* Label */}
            <div className="flex items-center gap-3">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[rgb(80,200,120)]
                  shadow-[0_0_12px_rgba(80,200,120,0.5)]
                "
              />

              <span
                className="
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-white/40
                "
              >
                What happens at NACOS
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-6
                font-display
                text-4xl
                font-medium
                leading-[1.05]
                tracking-[-0.03em]
                text-white/30
                sm:text-5xl
                lg:text-6xl
              "
            >
              Why be a
              <br />

              <span className="text-white/90">
                NACOSite?
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-sm lg:pb-1">
            <p className="text-[15px] leading-[1.8] text-white/45">
              From your first workshop to your next big opportunity, NACOS is
              built around experiences that help you move forward.
            </p>

            {/* Small category line */}
            <div className="mt-5 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-white/25">
              <span>Learn</span>
              <span className="text-[rgb(80,200,120)]">·</span>
              <span>Build</span>
              <span className="text-[rgb(80,200,120)]">·</span>
              <span>Connect</span>
              <span className="text-[rgb(80,200,120)]">·</span>
              <span>Grow</span>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            IMAGE GRID
        ================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
            lg:mt-16
            lg:gap-4
          "
        >
          {items.map((item, index) => (
            <ProgramCard
              key={item.key}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-16
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            pt-8
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <p
            className="
              max-w-2xl
              font-display
              text-2xl
              leading-[1.2]
              tracking-[-0.025em]
              text-white/75
              sm:text-3xl
            "
          >
            A community isn&apos;t something
            <span className="text-white/30"> you simply join.</span>
            <br className="hidden sm:block" />
            It&apos;s something
            <span className="text-[rgb(105,191,81)]"> you experience.</span>
          </p>

          <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/25">
            <span className="h-1.5 w-1.5 rounded-full bg-[rgb(80,200,120)]" />
            NACOS Nile · 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =====================================================
   PROGRAM CARD
===================================================== */

function ProgramCard({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    key: string;
    image: string;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-70px",
      }}
      transition={{
        duration: 0.75,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        min-h-[390px]
        cursor-pointer
        overflow-hidden
        rounded-[18px]
        border
        border-white/10
        bg-[#111d29]
        sm:min-h-[430px]
        lg:min-h-[470px]
      "
    >
      {/* =================================================
          IMAGE
      ================================================== */}

      <Image
  src={item.image}
  alt={item.title}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
  className="
    object-cover
    transition-transform
    duration-[1200ms]
    ease-out
    group-hover:scale-[1.045]
  "
/>

      {/* =================================================
          IMAGE OVERLAY
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-[#07111c]/30
          via-[#07111c]/10
          to-[#07111c]/95
          transition-all
          duration-700
          group-hover:from-[#07111c]/20
          group-hover:via-[#07111c]/20
          group-hover:to-[#07111c]/90
        "
      />

      {/* Additional bottom readability */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-1/2
          bg-gradient-to-t
          from-[#07111c]/80
          to-transparent
        "
      />

      {/* =================================================
          TOP CONTENT
      ================================================== */}

      <div className="absolute inset-x-6 top-6 z-10 flex items-center justify-between sm:inset-x-7 sm:top-7">

        {/* Number */}
        <div className="flex items-center gap-3">
          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-white/60
            "
          >
            0{index + 1}
          </span>

          <span
            className="
              h-px
              w-8
              bg-white/25
              transition-all
              duration-500
              group-hover:w-12
              group-hover:bg-[rgb(80,200,120)]
            "
          />
        </div>

        {/* Arrow */}
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-black/10
            text-white/65
            backdrop-blur-md
            transition-all
            duration-500
            group-hover:rotate-6
            group-hover:border-[rgb(80,200,120)]/60
            group-hover:bg-[rgb(80,200,120)]
            group-hover:text-[#07111c]
          "
        >
          <MoveUpRight
            size={16}
            className="
              transition-transform
              duration-500
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </div>
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================== */}

      <div
        className="
          absolute
          inset-x-6
          bottom-7
          z-10
          sm:inset-x-7
          sm:bottom-8
        "
      >
        {/* Small category */}
        <div className="mb-3 flex items-center gap-2">
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[rgb(80,200,120)]
              opacity-70
              transition-all
              duration-500
              group-hover:scale-150
              group-hover:opacity-100
              group-hover:shadow-[0_0_12px_rgba(80,200,120,0.8)]
            "
          />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white/40
              transition-colors
              duration-500
              group-hover:text-white/60
            "
          >
            NACOS Experience
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            max-w-[290px]
            font-display
            text-2xl
            font-medium
            leading-[1.08]
            tracking-[-0.025em]
            text-white
            transition-all
            duration-500
            group-hover:translate-x-1
            group-hover:text-[rgb(105,191,81)]
            sm:text-[1.7rem]
          "
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-4
            max-w-[360px]
            text-[13px]
            leading-[1.75]
            text-white/50
            transition-colors
            duration-500
            group-hover:text-white/75
            sm:text-[13.5px]
          "
        >
          {item.description}
        </p>

        {/* Explore */}
        <div
          className="
            mt-6
            flex
            items-center
            gap-3
            text-[9px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-white/30
            transition-colors
            duration-500
            group-hover:text-white/60
          "
        >
          <span
            className="
              h-px
              w-8
              bg-white/20
              transition-all
              duration-600
              group-hover:w-14
              group-hover:bg-[rgb(80,200,120)]
            "
          />

          <span>Explore</span>
        </div>
      </div>

      {/* =================================================
          NUMBER WATERMARK
      ================================================== */}

      <span
        className="
          pointer-events-none
          absolute
          -right-4
          -top-8
          z-[1]
          font-display
          text-[10rem]
          font-medium
          leading-none
          tracking-[-0.08em]
          text-white/[0.06]
          transition-all
          duration-700
          ease-out
          group-hover:-translate-y-3
          group-hover:text-[rgb(80,200,120)]/[0.12]
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* =================================================
          BOTTOM ACCENT
      ================================================== */}

      <motion.div
        className="
          absolute
          bottom-0
          left-0
          z-20
          h-[3px]
          bg-gradient-to-r
          from-royal
          via-[rgb(80,200,120)]
          to-[rgb(105,191,81)]
        "
        initial={{
          width: "0%",
        }}
        whileHover={{
          width: "100%",
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.div>
  );
}
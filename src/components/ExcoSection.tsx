// ExcoSection.tsx

"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { excoMembers } from "@/data/exco";
import ExcoCard from "./ExcoCard";

export default function ExcoSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="excos"
      className="
        relative
        overflow-hidden
        bg-[#f4f5f2]
        py-24
        text-navy
        lg:py-10
      "
    >
      <div className="container-edge mx-auto max-w-content">
        {/* =================================
            HEADER
        ================================= */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgb(80,200,120)]" />

              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-navy/45">
                Executive Council
              </span>
            </div>

            <h2
              className="
                mt-5
                font-display
                text-balance
                text-4xl
                font-medium
                leading-[1.05]
                tracking-[-0.03em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Meet the EXCOS
              <br />
              <span className="text-navy/30">
                Behind NACOS.
              </span>
            </h2>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className=" flex justify end items-center lg:items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-navy/40 "
          >
            <span>Scroll to explore</span>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight size={15} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =================================
          CARD RAIL
      ================================= */}
      <div className="mt-16 lg:mt-20">
        <div
          ref={scrollRef}
          className="
            flex
            gap-5
            overflow-x-auto
            px-[max(1.5rem,calc((100vw-1280px)/2))]
            pb-8
            scrollbar-none
            sm:gap-6
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {excoMembers.map((member, index) => (
            <ExcoCard
              key={member.id}
              member={member}
              index={index}
            />
          ))}

          {/* End spacer */}
          <div className="w-4 shrink-0 lg:w-20" />
        </div>
      </div>

      {/* =================================
          BOTTOM NAV / PROGRESS
      ================================= */}
      <div className="container-edge mx-auto mt-4 max-w-content">
        <div className="flex items-center justify-between border-t border-navy/10 pt-6">
          <span className="font-display text-[11px] tracking-[0.12em] text-navy/35">
            {String(excoMembers.length).padStart(2, "0")} COUNCIL MEMBERS
          </span>

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-navy/20" />

            <span className="text-[10px] uppercase tracking-[0.14em] text-navy/35">
              Explore
            </span>
          </div>
        </div>
      </div>

      {/* =================================
          DECORATIVE BACKGROUND
      ================================= */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-100px]
          top-1/3
          h-[300px]
          w-[300px]
          rounded-full
          bg-[rgb(80,200,120)]/5
          blur-[100px]
        "
      />
    </section>
  );
}


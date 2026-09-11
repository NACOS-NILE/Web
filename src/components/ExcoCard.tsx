
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ExcoMember } from "@/data/exco";

export default function ExcoCard({
  member,
  index = 0,
}: {
  member: ExcoMember;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.06, 0.4),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        w-[260px]
        shrink-0
        cursor-grab
        select-none
        active:cursor-grabbing
        sm:w-[290px]
        lg:w-[310px]
      "
    >
      {/* IMAGE */}
      <div
        className="
          relative
          aspect-[3/4]
          overflow-hidden
          bg-neutral-200
        "
      >
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}, ${member.role}`}
          fill
          draggable={false}
          sizes="310px"
          className="
            object-cover
            object-top
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.045]
          "
        />

        {/* Image overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/10
            to-transparent
            opacity-80
            transition-opacity
            duration-500
            group-hover:opacity-90
          "
        />

        {/* Number */}
        <div
          className="
            absolute
            left-5
            top-5
            font-display
            text-xs
            font-medium
            tracking-[0.12em]
            text-white/70
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p
            className="
              text-[12px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[rgb(135,190,240)]
            "
          >
            {member.role}
          </p>

          <h3
            className="
              mt-2
              font-display
              text-xl
              leading-tight
              text-white
              sm:text-2xl
            "
          >
            {member.name}
          </h3>

          {/* Tagline */}
          <div
            className="
              grid
              grid-rows-[0fr]
              opacity-0
              transition-all
              duration-500
              group-hover:grid-rows-[1fr]
              group-hover:opacity-100
            "
          >
            <div className="overflow-hidden">
              <p
                className="
                  mt-3
                  max-w-[230px]
                  text-[12px]
                  leading-relaxed
                  text-white/65
                "
              >
                {member.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="
          h-[2px]
          w-0
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.article>
  );
}


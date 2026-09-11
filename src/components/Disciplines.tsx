"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { disciplines } from "@/data/exco";

const GREEN = "rgb(105, 191, 81)";

type DisciplineCardProps = {
  d: (typeof disciplines)[number];
  side: "left" | "right";
  index: number;
};

function DisciplineCard({
  d,
  side,
  index,
}: DisciplineCardProps) {
  const isLeft = side === "left";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -25 : 25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group
        w-full
        max-w-[180px]
        sm:max-w-[230px]
        lg:max-w-[430px]

        ${isLeft ? "lg:ml-auto" : "lg:mr-auto"}
      `}
    >
      <motion.div
        layout
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-label={`${d.name}: ${
          isOpen ? "hide" : "show"
        } description`}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }
        }}
        className={`
          relative
          flex
          min-h-[82px]
          w-full
          cursor-pointer
          items-center
          gap-2
          overflow-hidden
          rounded-xl
          border
          border-white/10
          bg-white/[0.025]
          px-2
          py-2
          backdrop-blur-md
          transition-all
          duration-500

          hover:border-[rgb(105,191,81)]
          hover:bg-[rgba(80,200,120,0.045)]
          hover:shadow-[0_0_35px_rgba(80,200,120,0.10)]

          sm:min-h-[92px]
          sm:gap-2.5
          sm:rounded-2xl
          sm:px-3
          sm:py-3

          md:min-h-[105px]
          md:max-w-[270px]
          md:gap-3
          md:px-3.5
          md:py-3.5

          lg:min-h-[108px]
          lg:max-w-[430px]
          lg:cursor-default
          lg:gap-5
          lg:px-5
          lg:py-5

          ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}

          ${
            isOpen
              ? "border-[rgb(105,191,81)] bg-[rgba(80,200,120,0.05)]"
              : ""
          }
        `}
      >
        {/* IMAGE */}

        <div
          className="
            relative
            h-[26px]
            w-[26px]
            shrink-0
            overflow-hidden
            rounded-lg

            sm:h-9
            sm:w-9
            sm:rounded-xl

            md:h-11
            md:w-11

            lg:h-[52px]
            lg:w-[52px]
          "
        >
          <Image
            src={d.img}
            alt=""
            width={52}
            height={52}
            className="
              relative
              h-full
              w-full
              rounded-lg
              object-contain
              transition-transform
              duration-500
              group-hover:scale-105

              sm:rounded-xl
            "
          />
        </div>

        {/* CONTENT */}

        <div
          className={`
            min-w-0
            flex-1
            overflow-hidden

            ${isLeft ? "lg:text-left" : "lg:text-right"}
          `}
        >
          <h3
            className="
              min-w-0
              overflow-hidden
              font-display
              text-[10px]
              font-medium
              uppercase
              leading-[1.2]
              tracking-[0.025em]
              text-white/65
              transition-colors
              duration-300
              group-hover:text-white

              sm:text-[12px]
              sm:tracking-[0.035em]

              md:text-[13px]

              lg:text-2xl
              lg:tracking-wide
            "
          >
            {d.name}
          </h3>

          {/* MOBILE / TABLET DESCRIPTION */}

          <div className="mt-1.5 md:block lg:hidden">
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p
                    className="
                      pt-1
                      text-[9px]
                      leading-[1.5]
                      text-white/45

                      sm:text-[11px]
                      sm:leading-[1.45]

                      md:text-xs
                    "
                  >
                    {d.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* DESKTOP DESCRIPTION */}

          <div
            className="
              hidden
              lg:grid
              lg:grid-rows-[0fr]
              lg:opacity-0
              lg:transition-all
              lg:duration-500
              lg:ease-out

              lg:group-hover:grid-rows-[1fr]
              lg:group-hover:opacity-100
            "
          >
            <div className="overflow-hidden">
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {d.description}
              </p>
            </div>
          </div>
        </div>

        {/* ARROW */}

        <motion.span
          animate={{
            rotate: isOpen
              ? isLeft
                ? 90
                : -90
              : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            hidden
            shrink-0
            text-[11px]
            text-white/20
            transition-colors
            duration-300
            group-hover:text-[rgb(105,191,81)]

            sm:block
            sm:text-sm

            md:text-base

            lg:text-xl
          "
        >
          {isLeft ? "→" : "←"}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

/* =====================================================
   CENTRAL STEM
===================================================== */

function Stem() {
  return (
    <>
      {/* Glow */}

      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        transition={{
          duration: 2.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-0
          h-full
          w-[16px]
          -translate-x-1/2
          origin-top
          rounded-full
          opacity-20
          blur-lg

          sm:w-[20px]

          lg:w-[30px]
          lg:blur-xl
        "
        style={{
          backgroundColor: GREEN,
        }}
      />

      {/* Main stem */}

      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        transition={{
          duration: 2.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-10
          h-full
          w-[5px]
          -translate-x-1/2
          origin-top
          rounded-full

          sm:w-[7px]

          lg:w-[15px]
        "
        style={{
          backgroundColor: GREEN,
          boxShadow: `0 0 20px ${GREEN}66`,
        }}
      />

      {/* Highlight */}

      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 2.4,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-20
          h-full
          w-[2px]
          -translate-x-1/2
          origin-top
          rounded-full
          bg-white/20

          sm:w-[3px]

          lg:w-[8px]
        "
      />
    </>
  );
}

/* =====================================================
   BRANCH
===================================================== */

function Branch({
  side,
  index,
}: {
  side: "left" | "right";
  index: number;
}) {
  const isLeft = side === "left";

  return (
    <div
      className={`
        flex
        h-full
        items-center

        ${isLeft ? "flex-row-reverse" : "flex-row"}
      `}
    >
      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
          margin: "-70px",
        }}
        transition={{
          duration: 0.5,
          delay: 0.2 + index * 0.07,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          h-[3px]
          w-[20px]
          min-w-[20px]
          rounded-full

          sm:h-[4px]
          sm:w-[30px]
          sm:min-w-[30px]

          lg:h-[6px]
          lg:min-w-[55px]
          lg:flex-1

          ${isLeft ? "origin-right" : "origin-left"}
        `}
        style={{
          backgroundColor: GREEN,
          boxShadow: `0 0 12px ${GREEN}55`,
        }}
      />
    </div>
  );
}

/* =====================================================
   MAIN
===================================================== */

export default function Disciplines() {
  const offsets = [
    "lg:translate-y-0",
    "lg:translate-y-10",
    "lg:-translate-y-6",
    "lg:translate-y-14",
    "lg:-translate-y-3",
    "lg:translate-y-9",
  ];

  return (
    <section
      id="disciplines"
      className="
        relative
        overflow-hidden
        bg-navy
        py-20
        text-white

        sm:py-24

        lg:py-36
      "
    >
      {/* AMBIENT GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[700px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          blur-[150px]
          opacity-[0.045]
        "
        style={{
          backgroundColor: GREEN,
        }}
      />

      <div className="container-edge relative mx-auto max-w-content">
        {/* HEADING */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
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
            duration: 0.7,
          }}
          className="
            text-center
            font-display
            text-3xl
            uppercase
            leading-[1.1]
            text-balance

            sm:text-4xl

            lg:text-6xl
          "
        >
          <span style={{ color: GREEN }}>6</span> disciplines,{" "}
          <span style={{ color: GREEN }}>1</span> community.
        </motion.h2>

        {/* SUBTITLE */}

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-5
            max-w-[300px]
            text-center
            text-[11px]
            leading-relaxed
            text-white/40

            sm:max-w-xl
            sm:text-sm

            lg:text-base
          "
        >
          Six paths. One vision. Different disciplines,
          united by a shared purpose.
        </motion.p>

        {/* PLANT */}

        <div
          className="
            relative
            mx-auto
            mt-14
            w-full
            max-w-[390px]

            sm:mt-20
            sm:max-w-[650px]

            lg:mt-28
            lg:max-w-none
          "
        >
          <Stem />

          <div className="relative flex flex-col">
            {disciplines.map((discipline, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={discipline.name}
                  className={`
                    relative
                    grid
                    min-h-[138px]
                    grid-cols-[1fr_18px_1fr]
                    items-center

                    sm:min-h-[155px]
                    sm:grid-cols-[1fr_22px_1fr]

                    lg:min-h-[175px]
                    lg:grid-cols-[1fr_18px_1fr]

                    ${offsets[index]}
                  `}
                >
                  {/* LEFT */}

                  <div
                    className={`
                      flex
                      min-w-0
                      items-center

                      ${
                        isLeft
                          ? "justify-end"
                          : "justify-start"
                      }
                    `}
                  >
                    {isLeft && (
                      <>
                        <DisciplineCard
                          d={discipline}
                          side="left"
                          index={index}
                        />

                        <Branch
                          side="left"
                          index={index}
                        />
                      </>
                    )}
                  </div>

                  {/* CENTER */}

                  <div className="relative h-full" />

                  {/* RIGHT */}

                  <div
                    className={`
                      flex
                      min-w-0
                      items-center

                      ${
                        !isLeft
                          ? "justify-start"
                          : "justify-end"
                      }
                    `}
                  >
                    {!isLeft && (
                      <>
                        <Branch
                          side="right"
                          index={index}
                        />

                        <DisciplineCard
                          d={discipline}
                          side="right"
                          index={index}
                        />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TABLET HINT */}

        <motion.p
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
            duration: 0.6,
            delay: 0.5,
          }}
          className="
            mt-8
            hidden
            text-center
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-white/20

            md:block
            lg:hidden
          "
        >
          Tap a discipline to explore
        </motion.p>
      </div>
    </section>
  );
}
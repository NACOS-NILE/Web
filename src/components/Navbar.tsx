"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Events", href: "#events" },
  { label: "Nacosite", href: "#nacosite" },
  { label: "Excos", href: "#excos" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
  const sectionLinks = links.filter(
    (link) => link.href.startsWith("#") && link.href !== "#"
  );

  const handleActiveSection = () => {
    const scrollPosition = window.scrollY + 160;

    let currentSection = "";

    for (const link of sectionLinks) {
      const section = document.querySelector(link.href);

      if (!section) continue;

      const sectionTop = (section as HTMLElement).offsetTop;

      if (scrollPosition >= sectionTop) {
        currentSection = link.href;
      }
    }

    setActive(currentSection);
  };

  handleActiveSection();

  window.addEventListener("scroll", handleActiveSection, {
    passive: true,
  });

  return () => {
    window.removeEventListener("scroll", handleActiveSection);
  };
}, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          border-b
          transition-all
          duration-500
          ${
            scrolled
              ? `
                border-white/[0.08]
                bg-navy/90
                shadow-[0_8px_35px_rgba(8,14,33,0.22)]
                backdrop-blur-xl
              `
              : `
                border-transparent
                bg-transparent
              `
          }
        `}
      >
        <nav
          aria-label="Primary"
          className="
             container-edge
    mx-auto
    flex
    max-w-content
    items-center
    justify-between
    py-6
    sm:py-7
    lg:py-8
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <a
            href="#top"
            aria-label="NACOS Nile home"
            onClick={closeMenu}
            className="
              group
              relative
              flex
              items-center
              justify-center
            "
          >
            {/* Logo glow */}
            <div
              className="
                pointer-events-none
                absolute
                inset-1
                rounded-full
                bg-royal/20
                opacity-0
                blur-2xl
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <Image
  src="/logo.svg"
  alt="NACOS Nile logo"
  width={96}
  height={96}
  className="
    relative
    h-[58px]
    w-[58px]
    object-contain
    transition-transform
    duration-500
    group-hover:scale-105
    sm:h-[74px]
    sm:w-[70px]
    lg:h-[72px]
    lg:w-[72px]
    xl:h-[80px]
    xl:w-[80px]
    2xl:h-[88px]
    2xl:w-[88px]
  "
  priority
/>
          </a>

          {/* =================================================
              DESKTOP NAV LINKS
          ================================================== */}

          <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
  {links.map((link) => {
    const isActive = active === link.href;

    return (
      <li key={link.label}>
        <a
          href={link.href}
          className="
            group
            relative
            block
            py-3
            text-[13.5px]
            lg:text-[15px]
            font-semibold
            tracking-[-0.01em]
            text-white/75
            transition-colors
            duration-500
            hover:text-white
          "
        >
          {/* Nav text */}
          <span className="relative z-10">
            {link.label}
          </span>

          {/* Blue → Green animated underline */}
          <span
            className={`
              absolute
              bottom-0
              left-1/2
              h-[2px]
              -translate-x-1/2
              rounded-full
              bg-gradient-to-r
              from-royal
              to-green-400
              transition-all
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                isActive
                  ? "w-full opacity-100"
                  : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
              }
            `}
          />
        </a>
      </li>
    );
  })}
</ul>

          {/* =================================================
              JOIN COMMUNITY
          ================================================== */}

          <a
            href="#community"
            className="
              hidden
              rounded-lg
              bg-royal
              px-6
              py-3
              text-[13px]
              font-semibold
              text-white
              shadow-[0_8px_25px_rgba(80,120,255,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-royal/90
              hover:shadow-[0_12px_30px_rgba(80,120,255,0.28)]
              lg:block
            "
          >
            Join Community
          </a>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-lg
              border
              border-white/10
              bg-white/[0.04]
              text-white
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/[0.08]
              lg:hidden
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -45,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                  }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 45,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -45,
                  }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* =================================================
            MOBILE MENU
        ================================================== */}

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
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
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                overflow-hidden
                border-t
                border-white/[0.08]
                bg-navy
                lg:hidden
              "
            >
              <div className="container-edge mx-auto max-w-content py-5 pb-7">
                <ul>
                  {links.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.055,
                        duration: 0.35,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          border-b
                          border-white/[0.08]
                          py-4
                          text-[15px]
                          font-medium
                          text-white/70
                          transition-colors
                          duration-300
                          hover:text-white
                        "
                      >
                        <span
                          className="
                            transition-all
                            duration-300
                            group-hover:bg-gradient-to-r
                            group-hover:from-royal
                            group-hover:to-green-400
                            group-hover:bg-clip-text
                            group-hover:text-transparent
                          "
                        >
                          {link.label}
                        </span>

                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-white/20
                            transition-all
                            duration-300
                            group-hover:scale-125
                            group-hover:bg-green-400
                          "
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <motion.a
                  href="#community"
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.4,
                    duration: 0.35,
                  }}
                  className="
                    mt-6
                    block
                    rounded-lg
                    bg-royal
                    px-5
                    py-3.5
                    text-center
                    text-[14px]
                    font-semibold
                    text-white
                    transition-colors
                    duration-300
                    hover:bg-royal/90
                  "
                >
                  Join Community
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { chapterAddress } from "@/data/site";

gsap.registerPlugin(ScrollTrigger, SplitText);

const CONTACT_EMAIL = "hello@nacosnile.org"; // placeholder — swap for the real chapter inbox

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        paused: true,
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
      });

      SplitText.create(headingRef.current, {
        type: "words",
        mask: "words",
        onSplit: (split) => {
          timeline.from(split.words, {
            yPercent: 110,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
          });
        },
      });

      timeline.from(
        copyRef.current ? [copyRef.current] : [],
        { y: 22, opacity: 0, duration: 0.65 },
        "-=0.3",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name")?.toString() ?? "";
    const email = data.get("email")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";

    const subject = encodeURIComponent(`Message from ${name} via NACOS Nile site`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    formRef.current?.reset();
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-14">
          <h2
            ref={headingRef}
            className="font-display text-[clamp(26px,4vw,42px)] font-bold leading-tight text-[var(--color-ink)]"
          >
            Get in touch
          </h2>
          <p
            ref={copyRef}
            className="mx-auto mt-3 max-w-xl font-body text-[clamp(15px,1.8vw,18px)] leading-relaxed text-[var(--color-ink-muted)]"
          >
            Have a question, an idea, or want to get more involved with NACOS
            Nile? Send us a message.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div className="order-2 mx-auto grid w-full max-w-3xl gap-7 sm:grid-cols-2">
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-[var(--color-primary)] dark:text-[var(--color-accent)]">
                Email:
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-body text-sm text-[var(--color-ink)] transition-colors hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)]"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-[var(--color-primary)] dark:text-[var(--color-accent)]">
                Address:
              </p>
              <p className="max-w-xs font-body text-sm leading-relaxed text-[var(--color-ink)]">
                {chapterAddress}
              </p>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="order-1 mx-auto flex w-full max-w-3xl flex-col gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block font-body text-xs font-medium text-[var(--color-ink-muted)]"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3.5 font-body text-sm text-[var(--color-ink)] placeholder:text-[#9aa3bd] focus:border-[var(--color-accent)] focus:outline-none dark:border-white/10 dark:bg-white/5 dark:placeholder:text-slate-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-body text-xs font-medium text-[var(--color-ink-muted)]"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3.5 font-body text-sm text-[var(--color-ink)] placeholder:text-[#9aa3bd] focus:border-[var(--color-accent)] focus:outline-none dark:border-white/10 dark:bg-white/5 dark:placeholder:text-slate-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block font-body text-xs font-medium text-[var(--color-ink-muted)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Write something..."
                className="w-full resize-none rounded-xl border border-black/10 bg-white/70 px-4 py-3.5 font-body text-sm text-[var(--color-ink)] placeholder:text-[#9aa3bd] focus:border-[var(--color-accent)] focus:outline-none dark:border-white/10 dark:bg-white/5 dark:placeholder:text-slate-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-[7px] bg-[var(--color-primary)] px-6 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent)]"
            >
              Send Message
            </button>
            {sent && (
              <p role="status" className="font-body text-xs text-[var(--color-ink-muted)]">
                Opening your email app to send this...
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  SocialIcon,
  CloseIcon,
  ShieldCheck,
  ArrowRight,
} from "@/components/icons";
import { membershipEmail } from "@/lib/data";

/**
 * JoinModal — the WhatsApp community is members-only, so instead of a raw
 * invite link the tile opens a short "how to get in" dialog.
 *
 * The dialog is rendered through a portal to <body> so it centres over the
 * whole viewport: rendering it inline would trap `position: fixed` inside the
 * animated Community section (which establishes a containing block), which is
 * what pinned it to that section before. Closes on Escape, backdrop click,
 * the ✕, or "Got it".
 */
export default function JoinModal() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Trigger — styled like the other channel tiles, with a members-only hint */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex w-full items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-colors hover:border-white/25 hover:bg-white/10"
      >
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-leaf/90 text-navy transition-transform group-hover:scale-105">
          <SocialIcon name="whatsapp" className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold text-white">
            WhatsApp Community
          </span>
          <span className="block truncate text-xs text-white/50">
            Members only · tap to join
          </span>
        </span>
        <ArrowRight className="h-4 w-4 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5" />
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="join-title"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            {/* backdrop — clicking anywhere outside the card closes */}
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default bg-navy/70 backdrop-blur-sm"
            />

            <div className="relative z-10 max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-navy-800">
              <div className="flex flex-col items-center border-b border-line px-6 pb-6 pt-8 text-center dark:border-white/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-leaf/12 text-leaf">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <h3
                  id="join-title"
                  className="mt-4 text-xl font-semibold text-navy dark:text-white"
                >
                  Members-only community
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate dark:text-white/60">
                  We keep the WhatsApp group student-only, so getting in takes
                  one quick check. Pick whichever is easier:
                </p>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close dialog"
                  className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate transition-colors hover:bg-mist hover:text-navy dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4 px-6 py-6">
                <div className="rounded-xl border border-line p-4 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
                      1
                    </span>
                    <h4 className="text-sm font-semibold text-navy dark:text-white">
                      Ask your course rep
                    </h4>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate dark:text-white/60">
                    Your course representative has the current invite link —
                    grab it from them. Please keep it within NACOS members.
                  </p>
                </div>

                <div className="relative text-center">
                  <span className="bg-white px-3 text-[11px] font-medium uppercase tracking-wider text-slate dark:bg-navy-800 dark:text-white/50">
                    or
                  </span>
                  <span className="absolute inset-x-0 top-1/2 -z-10 h-px bg-line dark:bg-white/10" />
                </div>

                <div className="rounded-xl border border-line p-4 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
                      2
                    </span>
                    <h4 className="text-sm font-semibold text-navy dark:text-white">
                      Verify by email
                    </h4>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate dark:text-white/60">
                    Email{" "}
                    <a
                      href={`mailto:${membershipEmail}`}
                      className="font-medium text-brand underline underline-offset-2 dark:text-sky"
                    >
                      {membershipEmail}
                    </a>{" "}
                    from your student address with your full name, student ID,
                    and WhatsApp number, and we&apos;ll add you.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

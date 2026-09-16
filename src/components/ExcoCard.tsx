"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import type { Exco } from "@/lib/excos";

export default function ExcoCard({ exco }: { exco: Exco }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="group rounded-xl border border-border-hairline bg-surface p-6 transition-all hover:-translate-y-1 hover:border-nacos-blue/40 hover:shadow-lg hover:shadow-nacos-blue/5">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge photo of ${exco.name}`}
        className="relative block h-40 w-32 overflow-hidden rounded-md bg-surface-muted transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-nacos-blue"
      >
        <Image
          src={exco.photo}
          alt={`Portrait of ${exco.name}, ${exco.role}`}
          fill
          sizes="128px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </button>
      <h3 className="mt-4 text-base font-semibold text-nacos-navy">{exco.name}</h3>
      <p className="text-sm font-medium text-nacos-blue">{exco.role}</p>
      <p className="mt-2 text-sm leading-relaxed text-text-body">&ldquo;{exco.bio}&rdquo;</p>

      {(exco.linkedin || exco.github) && (
        <div className="mt-4 flex items-center gap-2">
          {exco.linkedin && (
            <a
              href={exco.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${exco.name} on LinkedIn`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-nacos-blue/10 text-nacos-blue transition-colors hover:bg-nacos-blue hover:text-white"
            >
              <FaLinkedin size={15} />
            </a>
          )}
          {exco.github && (
            <a
              href={exco.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${exco.name} on GitHub`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-nacos-blue/10 text-nacos-blue transition-colors hover:bg-nacos-blue hover:text-white"
            >
              <FaGithub size={15} />
            </a>
          )}
        </div>
      )}

      {open && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-nacos-navy/80 p-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${exco.name} photo`}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>
          <div
            className="relative max-h-[85vh] w-full max-w-md overflow-hidden rounded-xl bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={exco.photo}
                alt={`Portrait of ${exco.name}, ${exco.role}`}
                fill
                sizes="(max-width: 640px) 100vw, 448px"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-nacos-navy">{exco.name}</h3>
              <p className="text-sm font-medium text-nacos-blue">{exco.role}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

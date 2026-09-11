import Image from "next/image";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative z-[2] mt-auto border-t border-white/[.07] bg-surface/40">
      <div className="mx-auto w-[min(100%-2.5rem,1240px)] py-[clamp(2.5rem,5vw,3.5rem)]">
        <div className="flex flex-col gap-[2.4rem] sm:flex-row sm:justify-between">
          <div className="max-w-[34ch]">
            <div className="flex items-center gap-[.7rem]">
              <Image src="/brand/nile-crest.svg" alt="" width={22} height={27} className="h-[26px] w-auto" />
              <span className="h-[18px] w-px bg-white/20" aria-hidden="true" />
              <Image src="/brand/nacos-seal-mint-96.webp" alt="" width={24} height={24} />
              <span className="text-[.85rem] font-semibold">NACOS Nile</span>
            </div>
            <p className="mt-[.9rem] text-[.82rem] leading-[1.6] text-muted">
              Nigeria Association of Computing Students — Nile University of Nigeria chapter.
              Nile University of Nigeria, Abuja, FCT.
            </p>
          </div>

          <nav aria-label="Footer" className="font-mono flex flex-wrap gap-x-[1.8rem] gap-y-[.6rem] text-[.72rem] uppercase tracking-[.1em] text-muted">
            <a href="#about" className="text-inherit no-underline hover:text-signal">About</a>
            <a href="#disciplines" className="text-inherit no-underline hover:text-signal">Disciplines</a>
            <a href="#initiatives" className="text-inherit no-underline hover:text-signal">Initiatives</a>
            <a href="#excos" className="text-inherit no-underline hover:text-signal">Executives</a>
            <a href="#community" className="text-inherit no-underline hover:text-signal">Community</a>
          </nav>
        </div>

        <div className="font-mono mt-[2.2rem] flex flex-col gap-[.6rem] border-t border-white/[.07] pt-[1.4rem] text-[.68rem] uppercase tracking-[.08em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {YEAR} NACOS Nile Chapter. All rights reserved.</span>
          <span>Designed &amp; built for the NACOS Nile landing page competition.</span>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { CircuitField } from "@/components/sections/circuit-field";

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-clip px-8 text-center">
      <div
        className="pointer-events-none absolute inset-[-10%_-5%_0] -z-10 opacity-60"
        style={{ maskImage: "radial-gradient(60% 60% at 50% 40%, #000 20%, transparent 72%)" }}
        aria-hidden="true"
      >
        <CircuitField />
      </div>

      <Image src="/brand/nacos-seal-mint-96.webp" alt="" width={56} height={56} className="mb-6" />
      <span className="font-mono mb-3 text-[.7rem] uppercase tracking-[.18em] text-signal">
        404 / Trace not found
      </span>
      <h1 className="text-[clamp(2.2rem,6vw,3.5rem)] font-bold leading-[1] tracking-[-.03em]">
        This route doesn&apos;t compile.
      </h1>
      <p className="mt-4 max-w-[42ch] text-[1rem] leading-[1.6] text-muted">
        The page you&apos;re looking for isn&apos;t on the chapter&apos;s map. It may have moved,
        or the link was wrong.
      </p>
      <Link
        href="/"
        className="font-mono mt-8 inline-flex items-center gap-[.6rem] rounded-[2px] bg-signal px-[1.4rem] py-[.95rem] text-[.78rem] font-semibold uppercase tracking-[.06em] text-[#07240A] no-underline transition-transform duration-200 [transition-timing-function:var(--ease)] hover:-translate-y-0.5"
      >
        Back to the chapter
      </Link>
    </div>
  );
}

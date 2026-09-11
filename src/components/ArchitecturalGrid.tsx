/**
 * ArchitecturalGrid Component
 * Adds subtle, modern engineering drafting lines, incomplete grid cut-outs,
 * precision crosshairs, and datum marks to the flanks of the site.
 * Resolves the "too plain" feeling of the white background while preserving
 * high-contrast editorial clarity.
 */
export default function ArchitecturalGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* ── LEFT FLANK INCOMPLETE GRID LINES ───────────────────────── */}
      <div className="absolute top-0 bottom-0 left-0 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96">
        {/* Outer Vertical Guide Rail (Broken / Interrupted) */}
        {/* Segment A: 12% to 26% */}
        <div className="absolute left-4 sm:left-8 lg:left-12 xl:left-16 top-[11%] h-[16%] w-px bg-gradient-to-b from-transparent via-gray-300/80 to-gray-300/80">
          {/* Top start tick */}
          <div className="absolute top-0 -left-1 w-2 h-px bg-gray-400/70" />
          {/* Bottom terminal crosshair */}
          <div className="absolute bottom-0 -left-1.5 w-3 h-px bg-gray-400/80" />
          <div className="absolute bottom-0 left-0 -top-1.5 w-px h-3 bg-gray-400/80" />
        </div>

        {/* Segment B: 34% to 52% with dashed texture */}
        <div className="absolute left-4 sm:left-8 lg:left-12 xl:left-16 top-[32%] h-[20%] w-px border-l border-dashed border-gray-300/70">
          <div className="absolute top-1/2 -left-1.5 w-3 h-px bg-gray-300/80" />
          <span className="absolute top-1/2 left-2 -translate-y-1/2 font-mono text-[8px] tracking-widest text-gray-400/70 hidden sm:inline-block">
            REF.01
          </span>
        </div>

        {/* Segment C: 60% to 86% with fade-out */}
        <div className="absolute left-4 sm:left-8 lg:left-12 xl:left-16 top-[58%] h-[26%] w-px bg-gradient-to-b from-gray-300/80 via-gray-300/60 to-transparent">
          <div className="absolute top-0 -left-1.5 w-3 h-px bg-gray-400/80" />
          <div className="absolute top-1/3 -left-1 w-2 h-px bg-gray-300/70" />
        </div>

        {/* Inner Secondary Rail (md: screens and wider) */}
        {/* Segment D: 22% to 38% */}
        <div className="hidden md:block absolute left-16 sm:left-24 lg:left-32 xl:left-40 top-[20%] h-[15%] w-px bg-gradient-to-b from-transparent via-gray-200/90 to-transparent">
          {/* Subtle corner tick */}
          <div className="absolute top-0 left-0 w-3 h-px bg-gray-300/70" />
        </div>

        {/* Segment E: 68% to 80% */}
        <div className="hidden md:block absolute left-16 sm:left-24 lg:left-32 xl:left-40 top-[66%] h-[12%] w-px border-l border-dashed border-gray-200/90">
          <div className="absolute bottom-0 -left-1 w-2 h-px bg-gray-300/70" />
        </div>

        {/* ── Incomplete Horizontal Spur Lines (Shoot inward and cut out) ── */}
        {/* Spur 1: top ~15% */}
        <div className="absolute left-0 top-[14.5%] w-28 sm:w-44 lg:w-56 h-px bg-gradient-to-r from-gray-300/90 via-gray-300/50 to-transparent">
          <div className="absolute right-0 -top-1 w-px h-2 bg-gray-300/80" />
        </div>

        {/* Spur 2: top ~24% with drafting crosshair */}
        <div className="absolute left-0 top-[23%] w-20 sm:w-36 lg:w-48 h-px bg-gradient-to-r from-transparent via-gray-300/70 to-transparent">
          <div className="absolute left-4 sm:left-8 lg:left-12 xl:left-16 -top-1.5 w-px h-3 bg-gray-400/80" />
        </div>

        {/* Spur 3: top ~37% - disconnected floating segment */}
        <div className="hidden sm:block absolute left-6 sm:left-10 lg:left-14 top-[37%] w-24 sm:w-40 lg:w-52 h-px bg-gradient-to-r from-gray-300/80 to-transparent">
          <span className="absolute -top-3.5 left-2 font-mono text-[7px] text-gray-400/60 tracking-wider">
            {"// AXIS_L.04"}
          </span>
          <div className="absolute right-0 -top-1 w-px h-2 bg-gray-400/70" />
        </div>

        {/* Spur 4: top ~49% - architectural bracket corner */}
        <div className="absolute left-2 sm:left-6 lg:left-10 top-[49%]">
          <div className="w-16 sm:w-28 lg:w-36 h-px bg-gray-300/80" />
          <div className="w-px h-8 sm:h-12 bg-gray-300/80" />
        </div>

        {/* Spur 5: top ~64% with graduation ticks */}
        <div className="absolute left-0 top-[63.5%] w-32 sm:w-48 lg:w-64 h-px bg-gradient-to-r from-gray-300/80 via-gray-300/40 to-transparent">
          <div className="absolute left-8 -top-1 w-px h-2 bg-gray-300/60" />
          <div className="absolute left-16 -top-1 w-px h-2 bg-gray-300/60" />
          <div className="absolute left-24 -top-1 w-px h-2 bg-gray-300/60" />
        </div>

        {/* Spur 6: top ~79% - cut-out datum */}
        <div className="absolute left-4 sm:left-8 lg:left-12 top-[78%] w-20 sm:w-32 lg:w-44 h-px border-t border-dashed border-gray-300/70">
          <div className="absolute right-0 -top-1.5 w-px h-3 bg-gray-400/70" />
        </div>

        {/* Spur 7: top ~88% */}
        <div className="absolute left-0 top-[87.5%] w-24 sm:w-40 lg:w-56 h-px bg-gradient-to-r from-gray-300/80 to-transparent" />

        {/* Floating Drafting Crosshairs on Left Margin */}
        <div className="absolute left-8 lg:left-16 top-[18%] opacity-40">
          <div className="w-3 h-px bg-gray-500" />
          <div className="w-px h-3 -mt-1.5 ml-1.5 bg-gray-500" />
        </div>
        <div className="hidden lg:block absolute left-28 top-[44%] opacity-35">
          <div className="w-3 h-px bg-gray-500" />
          <div className="w-px h-3 -mt-1.5 ml-1.5 bg-gray-500" />
        </div>
        <div className="absolute left-10 lg:left-20 top-[73%] opacity-40">
          <div className="w-3 h-px bg-gray-500" />
          <div className="w-px h-3 -mt-1.5 ml-1.5 bg-gray-500" />
        </div>

        {/* Faint Dot Matrix Grid Cluster (Left) */}
        <div
          className="hidden xl:block absolute left-6 top-[30%] w-20 h-20 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        />
        <div
          className="hidden lg:block absolute left-10 top-[70%] w-16 h-16 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      {/* ── RIGHT FLANK INCOMPLETE GRID LINES ──────────────────────── */}
      <div className="absolute top-0 bottom-0 right-0 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96">
        {/* Outer Vertical Guide Rail (Right) */}
        {/* Segment A: 16% to 33% */}
        <div className="absolute right-4 sm:right-8 lg:right-12 xl:right-16 top-[15%] h-[18%] w-px bg-gradient-to-b from-transparent via-gray-300/80 to-gray-300/80">
          <div className="absolute bottom-0 -right-1.5 w-3 h-px bg-gray-400/80" />
          <div className="absolute bottom-0 right-0 -top-1.5 w-px h-3 bg-gray-400/80" />
        </div>

        {/* Segment B: 40% to 58% dashed */}
        <div className="absolute right-4 sm:right-8 lg:right-12 xl:right-16 top-[39%] h-[18%] w-px border-r border-dashed border-gray-300/70">
          <div className="absolute top-1/2 -right-1.5 w-3 h-px bg-gray-300/80" />
          <span className="absolute top-1/2 right-2 -translate-y-1/2 font-mono text-[8px] tracking-widest text-gray-400/70 hidden sm:inline-block">
            REF.02
          </span>
        </div>

        {/* Segment C: 64% to 90% */}
        <div className="absolute right-4 sm:right-8 lg:right-12 xl:right-16 top-[63%] h-[25%] w-px bg-gradient-to-b from-gray-300/80 via-gray-300/60 to-transparent">
          <div className="absolute top-0 -right-1.5 w-3 h-px bg-gray-400/80" />
          <div className="absolute top-1/3 -right-1 w-2 h-px bg-gray-300/70" />
        </div>

        {/* Inner Secondary Rail (Right, md: screens and wider) */}
        {/* Segment D: 26% to 42% */}
        <div className="hidden md:block absolute right-16 sm:right-24 lg:right-32 xl:right-40 top-[24%] h-[16%] w-px bg-gradient-to-b from-transparent via-gray-200/90 to-transparent">
          <div className="absolute bottom-0 right-0 w-3 h-px bg-gray-300/70" />
        </div>

        {/* Segment E: 72% to 84% */}
        <div className="hidden md:block absolute right-16 sm:right-24 lg:right-32 xl:right-40 top-[71%] h-[13%] w-px border-r border-dashed border-gray-200/90">
          <div className="absolute top-0 -right-1 w-2 h-px bg-gray-300/70" />
        </div>

        {/* ── Incomplete Horizontal Spur Lines (Right side) ─────────── */}
        {/* Spur 1: top ~19% */}
        <div className="absolute right-0 top-[18.5%] w-28 sm:w-44 lg:w-56 h-px bg-gradient-to-l from-gray-300/90 via-gray-300/50 to-transparent">
          <div className="absolute left-0 -top-1 w-px h-2 bg-gray-300/80" />
        </div>

        {/* Spur 2: top ~29% with crosshair */}
        <div className="absolute right-0 top-[28%] w-20 sm:w-36 lg:w-48 h-px bg-gradient-to-l from-transparent via-gray-300/70 to-transparent">
          <div className="absolute right-4 sm:right-8 lg:right-12 xl:right-16 -top-1.5 w-px h-3 bg-gray-400/80" />
        </div>

        {/* Spur 3: top ~42% floating cut-out segment */}
        <div className="hidden sm:block absolute right-6 sm:right-10 lg:right-14 top-[41.5%] w-24 sm:w-40 lg:w-52 h-px bg-gradient-to-l from-gray-300/80 to-transparent">
          <span className="absolute -top-3.5 right-2 font-mono text-[7px] text-gray-400/60 tracking-wider">
            {"// AXIS_R.08"}
          </span>
          <div className="absolute left-0 -top-1 w-px h-2 bg-gray-400/70" />
        </div>

        {/* Spur 4: top ~54% - inverted corner notch */}
        <div className="absolute right-2 sm:right-6 lg:right-10 top-[53.5%] flex flex-col items-end">
          <div className="w-16 sm:w-28 lg:w-36 h-px bg-gray-300/80" />
          <div className="w-px h-8 sm:h-12 bg-gray-300/80" />
        </div>

        {/* Spur 5: top ~68% with ticks */}
        <div className="absolute right-0 top-[67%] w-32 sm:w-48 lg:w-64 h-px bg-gradient-to-l from-gray-300/80 via-gray-300/40 to-transparent">
          <div className="absolute right-8 -top-1 w-px h-2 bg-gray-300/60" />
          <div className="absolute right-16 -top-1 w-px h-2 bg-gray-300/60" />
          <div className="absolute right-24 -top-1 w-px h-2 bg-gray-300/60" />
        </div>

        {/* Spur 6: top ~81% dashed */}
        <div className="absolute right-4 sm:right-8 lg:right-12 top-[80.5%] w-20 sm:w-32 lg:w-44 h-px border-t border-dashed border-gray-300/70">
          <div className="absolute left-0 -top-1.5 w-px h-3 bg-gray-400/70" />
        </div>

        {/* Spur 7: top ~91% */}
        <div className="absolute right-0 top-[90.5%] w-24 sm:w-40 lg:w-56 h-px bg-gradient-to-l from-gray-300/80 to-transparent" />

        {/* Floating Drafting Crosshairs on Right Margin */}
        <div className="absolute right-8 lg:right-16 top-[22%] opacity-40">
          <div className="w-3 h-px bg-gray-500" />
          <div className="w-px h-3 -mt-1.5 ml-1.5 bg-gray-500" />
        </div>
        <div className="hidden lg:block absolute right-28 top-[48%] opacity-35">
          <div className="w-3 h-px bg-gray-500" />
          <div className="w-px h-3 -mt-1.5 ml-1.5 bg-gray-500" />
        </div>
        <div className="absolute right-10 lg:right-20 top-[76%] opacity-40">
          <div className="w-3 h-px bg-gray-500" />
          <div className="w-px h-3 -mt-1.5 ml-1.5 bg-gray-500" />
        </div>

        {/* Faint Dot Matrix Grid Cluster (Right) */}
        <div
          className="hidden xl:block absolute right-6 top-[34%] w-20 h-20 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        />
        <div
          className="hidden lg:block absolute right-10 top-[74%] w-16 h-16 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>
    </div>
  );
}

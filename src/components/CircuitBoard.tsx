/**
 * SVG circuit board pattern for the hero background.
 * Rendered as static SVG — cursor reveal is handled by the parent
 * Hero component via CSS mask-image with custom properties.
 */
export default function CircuitBoard() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-70"
      viewBox="0 0 1400 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="soft-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Trace Lines ── */}
      <g stroke="rgba(59,130,246,0.25)" strokeWidth="1" fill="none" strokeLinecap="round">
        {/* Center → Left */}
        <path d="M 670 450 H 500 V 300 H 300" />
        <path d="M 670 430 H 550 V 250 H 350 V 150" />
        <path d="M 670 470 H 520 V 600 H 300 V 700" />
        <path d="M 500 300 H 400 V 200 H 200" />
        <path d="M 300 300 V 400 H 150" />
        <path d="M 350 150 H 200 V 100" />
        <path d="M 150 400 V 550 H 80" />
        <path d="M 300 700 H 180 V 800" />

        {/* Center → Right */}
        <path d="M 730 450 H 900 V 300 H 1100" />
        <path d="M 730 430 H 850 V 250 H 1050 V 150" />
        <path d="M 730 470 H 880 V 600 H 1100 V 700" />
        <path d="M 900 300 H 1000 V 200 H 1200" />
        <path d="M 1100 300 V 400 H 1250" />
        <path d="M 1050 150 H 1200 V 100" />
        <path d="M 1250 400 V 550 H 1320" />
        <path d="M 1100 700 H 1220 V 800" />

        {/* Center → Up */}
        <path d="M 700 420 V 250 H 600 V 120" />
        <path d="M 680 420 V 300 H 550 V 180 H 450" />
        <path d="M 720 420 V 300 H 850 V 180 H 950" />
        <path d="M 700 250 H 780 V 150" />
        <path d="M 600 120 H 500 V 60" />
        <path d="M 780 150 H 880 V 80" />

        {/* Center → Down */}
        <path d="M 700 480 V 650 H 600 V 780" />
        <path d="M 680 480 V 600 H 550 V 720 H 450" />
        <path d="M 720 480 V 600 H 850 V 720 H 950" />
        <path d="M 700 650 H 780 V 800" />
        <path d="M 600 780 H 500 V 850" />
        <path d="M 780 800 H 880 V 860" />

        {/* Peripheral traces */}
        <path d="M 100 200 H 250 V 350 H 150" />
        <path d="M 100 650 H 200 V 550 H 350" />
        <path d="M 1300 200 H 1150 V 350 H 1250" />
        <path d="M 1300 650 H 1200 V 550 H 1050" />
        <path d="M 50 300 H 150 V 250" />
        <path d="M 1350 300 H 1250 V 250" />
        <path d="M 250 850 H 380 V 750" />
        <path d="M 1150 850 H 1020 V 750" />
      </g>

      {/* ── Central Processor Chip ── */}
      <rect
        x="670" y="420" width="60" height="60" rx="2"
        stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" fill="none"
      />
      <rect
        x="682" y="432" width="36" height="36" rx="1"
        stroke="rgba(96,165,250,0.4)" strokeWidth="1"
        fill="rgba(59,130,246,0.06)"
      />

      {/* ── Endpoint Nodes (bright, glowing) ── */}
      <g fill="#3b82f6" filter="url(#node-glow)">
        {/* Left */}
        <circle cx="200" cy="200" r="3" />
        <circle cx="150" cy="400" r="3" />
        <circle cx="80" cy="550" r="2.5" />
        <circle cx="300" cy="700" r="3" />
        <circle cx="180" cy="800" r="2.5" />
        <circle cx="200" cy="100" r="2.5" />
        <circle cx="350" cy="150" r="2.5" />
        <circle cx="100" cy="200" r="2.5" />
        <circle cx="100" cy="650" r="2.5" />
        <circle cx="150" cy="350" r="2" />
        <circle cx="150" cy="250" r="2" />
        <circle cx="50" cy="300" r="2" />
        <circle cx="450" cy="180" r="2.5" />
        <circle cx="450" cy="720" r="2.5" />

        {/* Right */}
        <circle cx="1200" cy="200" r="3" />
        <circle cx="1250" cy="400" r="3" />
        <circle cx="1320" cy="550" r="2.5" />
        <circle cx="1100" cy="700" r="3" />
        <circle cx="1220" cy="800" r="2.5" />
        <circle cx="1200" cy="100" r="2.5" />
        <circle cx="1050" cy="150" r="2.5" />
        <circle cx="1300" cy="200" r="2.5" />
        <circle cx="1300" cy="650" r="2.5" />
        <circle cx="1250" cy="350" r="2" />
        <circle cx="1250" cy="250" r="2" />
        <circle cx="1350" cy="300" r="2" />
        <circle cx="950" cy="180" r="2.5" />
        <circle cx="950" cy="720" r="2.5" />

        {/* Top */}
        <circle cx="600" cy="120" r="3" />
        <circle cx="500" cy="60" r="2.5" />
        <circle cx="780" cy="150" r="2.5" />
        <circle cx="880" cy="80" r="2.5" />

        {/* Bottom */}
        <circle cx="600" cy="780" r="3" />
        <circle cx="500" cy="850" r="2.5" />
        <circle cx="780" cy="800" r="2.5" />
        <circle cx="880" cy="860" r="2.5" />
        <circle cx="250" cy="850" r="2" />
        <circle cx="380" cy="750" r="2" />
        <circle cx="1150" cy="850" r="2" />
        <circle cx="1020" cy="750" r="2" />
      </g>

      {/* ── Junction Nodes (smaller, at trace intersections) ── */}
      <g fill="rgba(96,165,250,0.5)" filter="url(#soft-glow)">
        <circle cx="500" cy="300" r="2" />
        <circle cx="900" cy="300" r="2" />
        <circle cx="550" cy="250" r="1.5" />
        <circle cx="850" cy="250" r="1.5" />
        <circle cx="700" cy="250" r="2" />
        <circle cx="700" cy="650" r="2" />
        <circle cx="300" cy="300" r="1.5" />
        <circle cx="1100" cy="300" r="1.5" />
        <circle cx="520" cy="600" r="1.5" />
        <circle cx="880" cy="600" r="1.5" />
        <circle cx="550" cy="720" r="1.5" />
        <circle cx="850" cy="720" r="1.5" />
        <circle cx="400" cy="200" r="1.5" />
        <circle cx="1000" cy="200" r="1.5" />
      </g>
    </svg>
  );
}

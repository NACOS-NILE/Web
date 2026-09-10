import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page" role="main">
      <div className="not-found-container wrap">
        <div className="not-found-visual" aria-hidden="true">
          <svg
            className="not-found-graphic"
            viewBox="0 0 280 280"
            fill="none"
            role="img"
          >
            <defs>
              <radialGradient id="nf-sphere" cx="30%" cy="20%" r="80%">
                <stop stopColor="#258bff" />
                <stop offset=".25" stopColor="#0a326d" />
                <stop offset=".8" stopColor="#031022" />
                <stop offset="1" stopColor="#124fa9" />
              </radialGradient>
              <linearGradient id="nf-blue" x2="1" y2="1">
                <stop stopColor="#8be9ff" />
                <stop offset=".5" stopColor="#3e8aff" />
                <stop offset="1" stopColor="#274193" />
              </linearGradient>
            </defs>

            {/* Orbital dashed trails */}
            <circle
              cx="140"
              cy="140"
              r="105"
              stroke="#2598ff"
              strokeOpacity="0.2"
              strokeDasharray="4 6"
            />
            <circle
              cx="140"
              cy="140"
              r="75"
              stroke="#2598ff"
              strokeOpacity="0.35"
            />

            {/* Central sphere */}
            <circle
              cx="140"
              cy="140"
              r="46"
              fill="url(#nf-sphere)"
              stroke="#35aaff"
              strokeWidth="1.5"
            />
            <circle
              cx="140"
              cy="140"
              r="34"
              fill="#031024"
              fillOpacity="0.6"
              stroke="#45a5ff"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
            <image
              href="/nacos-symbol.webp"
              x="108"
              y="108"
              width="64"
              height="64"
              preserveAspectRatio="xMidYMid meet"
            />

            {/* Disconnected outer node */}
            <line
              x1="140"
              y1="65"
              x2="140"
              y2="35"
              stroke="#5facff"
              strokeOpacity="0.3"
              strokeDasharray="3 3"
            />
            <circle
              cx="140"
              cy="35"
              r="18"
              fill="#06162e"
              stroke="#ff5e62"
              strokeWidth="2"
            />
            <text
              x="140"
              y="39"
              textAnchor="middle"
              fill="#ff8f92"
              fontSize="12"
              fontWeight="700"
            >
              404
            </text>
          </svg>
        </div>

        <div className="not-found-copy">
          <p className="eyebrow not-found-eyebrow">
            <span className="status-dot not-found-dot" /> 404 // NODE DISCONNECTED
          </p>
          <h1 className="not-found-title">
            Looks like this node
            <br />
            <span className="light-blue-text">left the network.</span>
          </h1>
          <p className="not-found-description">
            The page you were looking for doesn&apos;t exist or may have been moved.
            Let&apos;s get you back to the Nile computing community.
          </p>
          <div className="not-found-action">
            <Link href="/" className="button button-blue not-found-button">
              Back to NACOS Nile <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

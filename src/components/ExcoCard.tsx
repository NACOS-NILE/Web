import React from "react";
import Image from "next/image";

export interface ExcoCardProps {
  name: string;
  role: string;
  quote: string;
  imageSrc: string;
  imageStyle?: React.CSSProperties;
  isActive?: boolean;
  offset?: number;
  onClick?: () => void;
  linkedinUrl?: string;
}

export default function ExcoCard({
  name,
  role,
  imageSrc,
  imageStyle,
  isActive = false,
  offset = 0,
  onClick,
  linkedinUrl,
}: ExcoCardProps) {
  const absOffset = Math.abs(offset);
  const rotateY = offset * -8;
  const translateZ = -absOffset * 20;
  const scale = isActive ? 1.04 : Math.max(0.78, 1 - absOffset * 0.18);
  const opacity = isActive ? 1 : Math.max(0.55, 1 - absOffset * 0.4);
  const zIndex = 30 - absOffset * 10;

  return (
    <div
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
        opacity,
        zIndex,
      }}
      className="flex flex-col items-center select-none cursor-pointer group transition-all duration-300 ease-out shrink-0"
      title={isActive && linkedinUrl ? `Click to open ${name}'s LinkedIn profile` : `View ${name}`}
    >
      {/* Officer Portrait Card Container */}
      <div
        className={`relative overflow-hidden transition-all duration-300 ease-out shadow-xl ${
          isActive
            ? "w-36 sm:w-44 md:w-48 h-48 sm:h-56 md:h-60 rounded-xl border-2 border-nacos-accent ring-2 ring-nacos-accent/30 shadow-[0_8px_20px_rgba(20,90,220,0.3)] group-hover:border-[#0A66C2] group-hover:ring-[#0A66C2]/50"
            : "w-28 sm:w-32 md:w-36 h-36 sm:h-40 md:h-44 rounded-lg border border-white/20 hover:border-white/40 opacity-75 group-hover:opacity-100"
        }`}
      >
        <Image
          src={imageSrc}
          alt={`${name} - ${role}`}
          fill
          sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 240px"
          className="object-cover object-[center_top] pointer-events-none transition-transform duration-500 group-hover:scale-105"
          style={imageStyle}
        />

        {/* Hover Hint Overlay at bottom of Active Card */}
        {isActive && linkedinUrl && (
          <div className="absolute inset-x-0 bottom-0 py-2.5 px-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <span className="text-[11px] sm:text-xs font-semibold text-white drop-shadow-sm flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 fill-[#0A66C2]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              Open LinkedIn Profile ↗
            </span>
          </div>
        )}
      </div>

      {/* Side Card Officer Name */}
      {!isActive && (
        <span className="text-[11px] font-medium text-gray-400 mt-2 tracking-wide group-hover:text-white transition-colors truncate max-w-[110px] text-center">
          {name}
        </span>
      )}
    </div>
  );
}

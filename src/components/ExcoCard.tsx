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
}

export default function ExcoCard({
  name,
  role,
  imageSrc,
  imageStyle,
  isActive = false,
  offset = 0,
  onClick,
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
    >
      {/* Officer Portrait Card Container */}
      <div
        className={`relative overflow-hidden transition-all duration-300 ease-out shadow-xl ${
          isActive
            ? "w-44 sm:w-56 md:w-60 h-56 sm:h-72 md:h-76 rounded-2xl border-2 border-nacos-accent ring-2 ring-nacos-accent/30 shadow-[0_12px_28px_rgba(20,90,220,0.35)]"
            : "w-32 sm:w-38 md:w-40 h-40 sm:h-48 md:h-52 rounded-xl border border-white/20 hover:border-white/40 opacity-75 group-hover:opacity-100"
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

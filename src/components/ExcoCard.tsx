import React from "react";
import Image from "next/image";

export interface ExcoCardProps {
  name: string;
  role: string;
  quote: string;
  imageSrc: string;
}

export default function ExcoCard({ name, role, quote, imageSrc }: ExcoCardProps) {
  return (
    <div className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 transition-colors duration-200 flex flex-col items-center text-center">
      {/* Circular Profile Photo with Natural Color, Scale-105 and Border Shift on Hover */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 rounded-full overflow-hidden border border-white/20 group-hover:border-nacos-accent group-hover:scale-105 transition-all duration-300 flex-shrink-0">
        <Image
          src={imageSrc}
          alt={`${name} - ${role}`}
          fill
          sizes="(max-width: 640px) 112px, 128px"
          className="object-cover object-center"
        />
        {/* Subtle Vignette Ring */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_12px_rgba(13,23,51,0.6)] pointer-events-none" />
      </div>

      {/* Exco Info */}
      <h3 className="text-base sm:text-lg font-medium text-white mb-1 group-hover:text-nacos-accent-light transition-colors">
        {name}
      </h3>

      <div className="text-xs font-mono font-medium text-nacos-accent-light uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-nacos-blue/15 border border-nacos-accent/25">
        {role}
      </div>

      {/* Quote */}
      <blockquote className="text-sm italic text-gray-300 leading-relaxed font-normal mt-auto relative pt-2 border-t border-white/5 w-full">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </div>
  );
}

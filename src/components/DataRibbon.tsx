"use client";

import { motion } from 'framer-motion';

export default function DataRibbon() {
  const lines = Array.from({ length: 25 });

  return (
    // Added perspective to the outer container for 3D depth
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 [perspective:1000px]">
      
      {/* 
        1. Radial Gradient Mask: Fades the edges of the ribbon into darkness
        2. RotateX: Tilts the entire ribbon backward into the screen for 3D depth 
      */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_100%_80%_at_50%_50%,#000_20%,transparent_100%)] flex items-center justify-center">
        
        <motion.div 
          animate={{ x: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          // Added 3D tilt and scaled it up to cover the tilt bounds
          className="absolute w-[140%] h-[140%] left-[-20%] [transform:rotateX(20deg)]"
        >
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 800"
          >
            <defs>
              <linearGradient id="ribbon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="40%" stopColor="#3b82f6" />
                <stop offset="70%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>

              <filter id="ribbon-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Downward Geometric Ribbon */}
            <g filter="url(#ribbon-glow)" className="opacity-40 dark:opacity-60">
              {lines.map((_, i) => (
                <path
                  key={`ribbon1-${i}`}
                  d="M -200 650 L 250 650 L 600 250 L 950 250 L 1300 650 L 1600 650 L 1900 250"
                  fill="none"
                  stroke="url(#ribbon-gradient)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  transform={`translate(${i * 15}, ${i * -10})`}
                  opacity={1 - (i * 0.035)}
                />
              ))}
            </g>

            {/* Intersecting Upward Geometric Ribbon */}
            <g filter="url(#ribbon-glow)" className="opacity-30 dark:opacity-50">
              {lines.map((_, i) => (
                <path
                  key={`ribbon2-${i}`}
                  d="M -200 250 L 150 250 L 500 650 L 850 650 L 1200 250 L 1500 250 L 1850 650"
                  fill="none"
                  stroke="url(#ribbon-gradient)"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  transform={`translate(${i * -12}, ${i * -8})`}
                  opacity={0.8 - (i * 0.03)}
                />
              ))}
            </g>

          </svg>
        </motion.div>
      </div>
    </div>
  );
}
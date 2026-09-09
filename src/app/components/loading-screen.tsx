"use client";

import React, { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number; // Duration in milliseconds (default: 3000ms / 3s)
}

export default function LoadingScreen({
  onComplete,
  duration = 3000,
}: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-gradient-to-r from-[#274193] via-[#3b82f6] to-[#274193] bg-[length:200%_200%] animate-gradient-shift">
      
      {/* Center Card Container */}
      <div className="flex flex-col items-center space-y-6 bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl max-w-sm w-full">
        
          
          {/* Image 1 Placeholder */}
          <div className="w-20 h-20 rounded-4xl overflow-hidden bg-white/20 border border-white/30 flex items-center justify-center shadow-md">
            <img
              src="images.png" 
              alt="Loading Image 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 Placeholder */}
          <div className="w-20 h-20 rounded-4xl overflow-hidden bg-white/20 border flex items-center justify-center shadow-md">
            <img
              src="NNL.png" 
              alt="Loading Image 2"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

  );
}
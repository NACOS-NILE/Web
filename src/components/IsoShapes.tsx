export function IsoChip({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <polygon points="50,20 85,40 50,60 15,40" fill="#0f172a" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points="15,40 50,60 50,75 15,55" fill="#020617" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points="50,60 85,40 85,55 50,75" fill="#1a1f2e" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" strokeLinejoin="round" />
      <polyline points="35,35 50,45 65,35" stroke="rgba(59,130,246,0.8)" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="45" r="2.5" fill="#60a5fa" />
    </svg>
  );
}

export function IsoServer({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <polygon points="50,10 75,25 50,40 25,25" fill="#0f172a" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points="25,25 50,40 50,90 25,75" fill="#020617" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points="50,40 75,25 75,75 50,90" fill="#1a1f2e" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" strokeLinejoin="round" />
      
      {/* Server slots */}
      <line x1="50" y1="50" x2="75" y2="35" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />
      <line x1="50" y1="60" x2="75" y2="45" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />
      <line x1="50" y1="70" x2="75" y2="55" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />
      <line x1="50" y1="80" x2="75" y2="65" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />
      
      {/* LEDs */}
      <circle cx="68" cy="41" r="2" fill="#60a5fa" />
      <circle cx="68" cy="61" r="2" fill="#10b981" />
    </svg>
  );
}

export function IsoTerminal({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <polygon points="50,20 80,35 50,50 20,35" fill="#0f172a" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points="20,35 50,50 50,80 20,65" fill="#020617" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points="50,50 80,35 80,65 50,80" fill="#1a1f2e" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" strokeLinejoin="round" />
      
      <line x1="55" y1="55" x2="70" y2="47" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="2" fill="#10b981" />
    </svg>
  );
}

export function IsoNode({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      {/* Floating Platform */}
      <polygon points="50,60 80,75 50,90 20,75" fill="#0f172a" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" strokeLinejoin="round" />
      
      {/* Connection Lines projecting up */}
      <line x1="50" y1="65" x2="50" y2="30" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="35" y1="70" x2="35" y2="40" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="65" y1="70" x2="65" y2="40" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Nodes */}
      <circle cx="50" cy="30" r="4.5" fill="#1a1f2e" stroke="#3b82f6" strokeWidth="1.5" />
      <circle cx="35" cy="40" r="3.5" fill="#1a1f2e" stroke="#60a5fa" strokeWidth="1.5" />
      <circle cx="65" cy="40" r="3.5" fill="#1a1f2e" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  );
}

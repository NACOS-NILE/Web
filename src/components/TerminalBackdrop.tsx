"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SNIPPETS = [
  "const initializeNacos = async () => {",
  "  await System.connect(nodes);",
  "  return new Community(builders);",
  "};",
  "",
  "function optimizeFuture(ideas) {",
  "  return ideas.map(compile);",
  "}",
  "",
  "> SYS.INIT()",
  "> LOADING MODULES...",
  "> STATUS: ONLINE",
];

export default function TerminalBackdrop() {
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let typing = true;
    
    const typeInterval = setInterval(() => {
      if (!typing) return;
      
      if (currentLine < SNIPPETS.length) {
        const fullLine = SNIPPETS[currentLine];
        if (currentChar < fullLine.length) {
          setLines(prev => {
            const newLines = [...prev];
            if (!newLines[currentLine]) newLines[currentLine] = "";
            newLines[currentLine] = fullLine.substring(0, currentChar + 1);
            return newLines;
          });
          currentChar++;
        } else {
          currentLine++;
          currentChar = 0;
        }
      } else {
        typing = false;
        setTimeout(() => {
          setLines([]);
          currentLine = 0;
          typing = true;
        }, 5000);
      }
    }, 40);
    
    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.07] pointer-events-none flex items-center justify-center">
      <div className="font-mono text-[2vw] leading-relaxed text-white whitespace-pre">
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-[1.5vw] h-[2vw] bg-white translate-y-1 ml-1"
        />
      </div>
    </div>
  );
}

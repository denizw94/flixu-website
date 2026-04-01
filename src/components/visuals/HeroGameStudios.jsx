import React from "react";
import { motion } from "framer-motion";

// Visualizes narrative script lines flowing through character voice profiles
export default function HeroGameStudios() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1",
    ink: "#1c1917",
    accent: "#c2410c",
  };

  const characters = [
    { name: "Villain", y: 70, delay: 0 },
    { name: "Sakura", y: 150, delay: 1.2 },
    { name: "Guide", y: 230, delay: 2.4 },
  ];

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">

        {/* Central Script Document */}
        <rect x="155" y="40" width="90" height="220" rx="6" fill={c.paper} stroke={c.ink} strokeWidth="1.5" />
        {/* Script lines */}
        {[60, 75, 90, 120, 135, 150, 165, 195, 210, 225].map((ly, i) => (
          <line key={`sl-${i}`} x1="165" y1={ly} x2={i % 3 === 0 ? "225" : "235"} y2={ly} stroke={c.sketch} strokeWidth="1" opacity="0.5" />
        ))}
        <text x="200" y="270" textAnchor="middle" fontSize="9" fontFamily="monospace" fill={c.sketch}>
          FULL SCRIPT
        </text>

        {/* Pre-Translation Analysis pulse */}
        <motion.rect
          x="155" y="40" width="90" height="220" rx="6"
          fill="transparent" stroke={c.accent} strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Character voice profiles (left) + translated output (right) */}
        {characters.map((char, i) => (
          <g key={`char-${i}`}>
            {/* Character Profile Badge (left) */}
            <rect x="20" y={char.y - 14} width="70" height="28" rx="4" fill={c.paper} stroke={c.accent} strokeWidth="1" />
            <text x="55" y={char.y + 4} textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={c.ink} fontWeight="600">
              {char.name}
            </text>

            {/* Arrow: profile → script (dashed, flows right) */}
            <motion.line
              x1="90" y1={char.y} x2="155" y2={char.y}
              stroke={c.accent} strokeWidth="1" strokeDasharray="4 3"
              animate={{ strokeDashoffset: -20 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Processing pulse inside script at character row */}
            <motion.circle
              cx="200" cy={char.y} r="6"
              fill="transparent" stroke={c.accent} strokeWidth="1"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 1.8, 0.5], opacity: [0, 0.8, 0] }}
              transition={{ duration: 4, delay: char.delay + 1, repeat: Infinity }}
            />

            {/* Arrow: script → translated output (flows right) */}
            <motion.line
              x1="245" y1={char.y} x2="310" y2={char.y}
              stroke={c.accent} strokeWidth="1" strokeDasharray="4 3"
              animate={{ strokeDashoffset: -20 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Translated dialogue bubble (right) */}
            <motion.g
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: [0, 0, 1, 1, 0], x: [-5, -5, 0, 0, 5] }}
              transition={{ duration: 5, delay: char.delay + 1.5, times: [0, 0.2, 0.35, 0.85, 1], repeat: Infinity }}
            >
              <rect x="310" y={char.y - 16} width="75" height="32" rx="4" fill={c.paper} stroke={c.ink} strokeWidth="1" />
              {/* Dialogue lines */}
              <line x1="318" y1={char.y - 6} x2="370" y2={char.y - 6} stroke={c.accent} strokeWidth="1.5" strokeLinecap="round" />
              <line x1="318" y1={char.y + 4} x2="355" y2={char.y + 4} stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />
            </motion.g>
          </g>
        ))}

        {/* Label under left profiles */}
        <text x="55" y="268" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={c.sketch}>
          VOICE PROFILES
        </text>

        {/* Label under right output */}
        <text x="348" y="268" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={c.sketch}>
          TRANSLATED
        </text>
      </motion.svg>
    </div>
  );
}

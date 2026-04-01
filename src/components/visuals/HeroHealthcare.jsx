import React from "react";
import { motion } from "framer-motion";

// Visualizes clinical terminology enforcement: glossary terms → translation pipeline → scored output
export default function HeroHealthcare() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1",
    ink: "#1c1917",
    accent: "#c2410c",
    safe: "#16a34a",
  };

  const terms = [
    { term: "Dosierung", y: 70, delay: 0 },
    { term: "Indikation", y: 150, delay: 1.4 },
    { term: "Einnahme", y: 230, delay: 2.8 },
  ];

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">

        {/* Central Pipeline Column */}
        <rect x="160" y="35" width="80" height="230" rx="6" fill={c.paper} stroke={c.ink} strokeWidth="1.5" />
        {/* Cross icon (healthcare) */}
        <line x1="192" y1="48" x2="208" y2="48" stroke={c.accent} strokeWidth="2" strokeLinecap="round" />
        <line x1="200" y1="40" x2="200" y2="56" stroke={c.accent} strokeWidth="2" strokeLinecap="round" />
        <text x="200" y="275" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={c.sketch}>
          PIPELINE
        </text>

        {terms.map((item, i) => (
          <g key={`term-${i}`}>
            {/* Glossary Term Badge (left) */}
            <rect x="10" y={item.y - 14} width="80" height="28" rx="4" fill={c.paper} stroke={c.accent} strokeWidth="1" />
            <text x="50" y={item.y + 4} textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={c.ink} fontWeight="600">
              {item.term}
            </text>

            {/* Dashed flow: term → pipeline */}
            <motion.line
              x1="90" y1={item.y} x2="160" y2={item.y}
              stroke={c.accent} strokeWidth="1" strokeDasharray="4 3"
              animate={{ strokeDashoffset: -20 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Processing pulse inside pipeline */}
            <motion.circle
              cx="200" cy={item.y} r="6"
              fill="transparent" stroke={c.accent} strokeWidth="1"
              animate={{ scale: [0.5, 1.6, 0.5], opacity: [0, 0.8, 0] }}
              transition={{ duration: 4, delay: item.delay + 1, repeat: Infinity }}
            />

            {/* Flow: pipeline → scored output */}
            <motion.line
              x1="240" y1={item.y} x2="305" y2={item.y}
              stroke={c.safe} strokeWidth="1" strokeDasharray="4 3"
              animate={{ strokeDashoffset: -20 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Scored output card (right) */}
            <motion.g
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: [0, 0, 1, 1, 0], x: [-4, -4, 0, 0, 4] }}
              transition={{ duration: 5, delay: item.delay + 1.5, times: [0, 0.2, 0.35, 0.85, 1], repeat: Infinity }}
            >
              <rect x="305" y={item.y - 16} width="80" height="32" rx="4" fill={c.paper} stroke={c.safe} strokeWidth="1" />
              {/* Score badge */}
              <rect x="310" y={item.y - 10} width="22" height="14" rx="2" fill={c.safe} opacity="0.15" />
              <text x="321" y={item.y + 1} textAnchor="middle" fontSize="8" fontFamily="monospace" fill={c.safe} fontWeight="700">
                {["96", "93", "97"][i]}
              </text>
              {/* Translated line */}
              <line x1="338" y1={item.y - 4} x2="378" y2={item.y - 4} stroke={c.ink} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <line x1="338" y1={item.y + 5} x2="368" y2={item.y + 5} stroke={c.sketch} strokeWidth="1" strokeLinecap="round" />
            </motion.g>
          </g>
        ))}

        {/* Labels */}
        <text x="50" y="268" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={c.sketch}>
          GLOSSARY
        </text>
        <text x="345" y="268" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={c.sketch}>
          LQA SCORED
        </text>
      </motion.svg>
    </div>
  );
}

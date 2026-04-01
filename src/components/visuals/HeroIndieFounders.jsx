import React from "react";
import { motion } from "framer-motion";

// Visualizes solo founder workflow: i18n file → pipeline → LQA scored segments (deploy/review)
export default function HeroIndieFounders() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1",
    ink: "#1c1917",
    accent: "#c2410c",
    safe: "#16a34a",
    warn: "#d97706",
  };

  const segments = [
    { label: "Welcome", score: "96", pass: true, y: 65, delay: 0 },
    { label: "Settings", score: "91", pass: true, y: 115, delay: 0.8 },
    { label: "Upgrade", score: "73", pass: false, y: 165, delay: 1.6 },
    { label: "Onboard", score: "94", pass: true, y: 215, delay: 2.4 },
  ];

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">

        {/* Source file (left) */}
        <rect x="15" y="45" width="70" height="200" rx="5" fill={c.paper} stroke={c.ink} strokeWidth="1.5" />
        {[65, 80, 95, 115, 130, 145, 165, 180, 215, 230].map((ly, i) => (
          <line key={`src-${i}`} x1="25" y1={ly} x2={i % 3 === 0 ? "65" : "75"} y2={ly} stroke={c.sketch} strokeWidth="1" opacity="0.5" />
        ))}
        <text x="50" y="260" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={c.sketch}>
          en.json
        </text>

        {/* Pipeline arrow region */}
        <text x="200" y="42" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={c.sketch}>
          LQA PIPELINE
        </text>

        {segments.map((seg, i) => (
          <g key={`seg-${i}`}>
            {/* Flow line: source → score card */}
            <motion.line
              x1="85" y1={seg.y} x2="155" y2={seg.y}
              stroke={c.accent} strokeWidth="1" strokeDasharray="4 3"
              animate={{ strokeDashoffset: -20 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Processing pulse */}
            <motion.circle
              cx="130" cy={seg.y} r="5"
              fill="transparent" stroke={c.accent} strokeWidth="1"
              animate={{ scale: [0.5, 1.5, 0.5], opacity: [0, 0.7, 0] }}
              transition={{ duration: 3, delay: seg.delay + 0.5, repeat: Infinity }}
            />

            {/* Score card */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 1] }}
              transition={{ duration: 4, delay: seg.delay + 1, times: [0, 0.2, 0.35, 1], repeat: Infinity }}
            >
              <rect x="155" y={seg.y - 16} width="115" height="32" rx="4" fill={c.paper}
                stroke={seg.pass ? c.safe : c.warn} strokeWidth="1" />
              {/* Segment label */}
              <text x="172" y={seg.y + 3} fontSize="9" fontFamily="sans-serif" fill={c.ink} fontWeight="500">
                {seg.label}
              </text>
              {/* Score badge */}
              <rect x="225" y={seg.y - 10} width="28" height="18" rx="3"
                fill={seg.pass ? c.safe : c.warn} opacity="0.15" />
              <text x="239" y={seg.y + 3} textAnchor="middle" fontSize="9" fontFamily="monospace"
                fill={seg.pass ? c.safe : c.warn} fontWeight="700">
                {seg.score}
              </text>
            </motion.g>

            {/* Deploy / Review indicator (right) */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 0, 1, 1] }}
              transition={{ duration: 5, delay: seg.delay + 1.5, times: [0, 0.2, 0.4, 0.5, 1], repeat: Infinity }}
            >
              <line x1="270" y1={seg.y} x2="310" y2={seg.y}
                stroke={seg.pass ? c.safe : c.warn} strokeWidth="1" strokeDasharray="3 3" />
              <text x="322" y={seg.y + 3} fontSize="8" fontFamily="monospace"
                fill={seg.pass ? c.safe : c.warn} fontWeight="600">
                {seg.pass ? "DEPLOY" : "REVIEW"}
              </text>
            </motion.g>
          </g>
        ))}

        {/* Labels */}
        <text x="212" y="260" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={c.sketch}>
          SCORED OUTPUT
        </text>
      </motion.svg>
    </div>
  );
}

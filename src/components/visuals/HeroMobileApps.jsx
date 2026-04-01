import React from "react";
import { motion } from "framer-motion";

// Visualizes mobile app localization: flash sale strings → Brand Voice + LQA → Auto-Approve / Review
export default function HeroMobileApps() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1",
    ink: "#1c1917",
    accent: "#c2410c",
    safe: "#16a34a",
    warn: "#d97706",
  };

  const strings = [
    { label: "Flash Sale", score: "97", pass: true, y: 60, delay: 0 },
    { label: "Push Note", score: "94", pass: true, y: 110, delay: 0.7 },
    { label: "Promo CTA", score: "92", pass: true, y: 160, delay: 1.4 },
    { label: "Humor Copy", score: "68", pass: false, y: 210, delay: 2.1 },
    { label: "Onboarding", score: "96", pass: true, y: 260, delay: 2.8 },
  ];

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">

        {/* Phone outline (left) */}
        <rect x="15" y="30" width="65" height="250" rx="10" fill={c.paper} stroke={c.ink} strokeWidth="1.5" />
        <rect x="30" y="38" width="35" height="4" rx="2" fill={c.sketch} opacity="0.4" />
        {/* Screen lines */}
        {strings.map((s, i) => (
          <g key={`ph-${i}`}>
            <line x1="25" y1={s.y} x2="68" y2={s.y} stroke={c.sketch} strokeWidth="1" opacity="0.4" />
          </g>
        ))}

        {/* Pipeline label */}
        <text x="200" y="25" textAnchor="middle" fontSize="8" fontFamily="monospace" fill={c.sketch}>
          AUTO-APPROVAL PIPELINE
        </text>

        {strings.map((s, i) => (
          <g key={`str-${i}`}>
            {/* Flow: phone → pipeline */}
            <motion.line
              x1="80" y1={s.y} x2="150" y2={s.y}
              stroke={c.accent} strokeWidth="1" strokeDasharray="4 3"
              animate={{ strokeDashoffset: -20 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Score card */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 1] }}
              transition={{ duration: 4, delay: s.delay + 0.8, times: [0, 0.2, 0.35, 1], repeat: Infinity }}
            >
              <rect x="150" y={s.y - 14} width="105" height="28" rx="4" fill={c.paper}
                stroke={s.pass ? c.safe : c.warn} strokeWidth="1" />
              <text x="165" y={s.y + 3} fontSize="8" fontFamily="sans-serif" fill={c.ink} fontWeight="500">
                {s.label}
              </text>
              <rect x="222" y={s.y - 8} width="24" height="16" rx="3"
                fill={s.pass ? c.safe : c.warn} opacity="0.15" />
              <text x="234" y={s.y + 3} textAnchor="middle" fontSize="8" fontFamily="monospace"
                fill={s.pass ? c.safe : c.warn} fontWeight="700">
                {s.score}
              </text>
            </motion.g>

            {/* Result indicator */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 0, 1, 1] }}
              transition={{ duration: 5, delay: s.delay + 1.5, times: [0, 0.2, 0.4, 0.5, 1], repeat: Infinity }}
            >
              <line x1="255" y1={s.y} x2="300" y2={s.y}
                stroke={s.pass ? c.safe : c.warn} strokeWidth="1" strokeDasharray="3 3" />
              <text x="310" y={s.y + 3} fontSize="7" fontFamily="monospace"
                fill={s.pass ? c.safe : c.warn} fontWeight="600">
                {s.pass ? "SHIP ✓" : "REVIEW"}
              </text>
            </motion.g>
          </g>
        ))}
      </motion.svg>
    </div>
  );
}

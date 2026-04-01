import React from "react";
import { motion } from "framer-motion";

export default function HeroAutoApproval() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
    green: "#15803d", // green-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Pipeline container */}
        <rect x="60" y="30" width="280" height="240" rx="8" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        <line x1="60" y1="58" x2="340" y2="58" stroke={c.sketch} strokeWidth="1" />
        <text x="75" y="48" fontSize="8" fontFamily="monospace" fill={c.sketch}>Auto-Approval Pipeline</text>

        {/* Segment rows flowing through */}
        {[0, 1, 2, 3, 4].map((i) => {
          const y = 75 + i * 38;
          const isApproved = i !== 2; // 3rd segment fails
          const delay = i * 0.8;
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: [0, 1, 1, 1], x: [-20, 0, 0, 0] }}
              transition={{ duration: 5, delay, times: [0, 0.1, 0.8, 1], repeat: Infinity, repeatDelay: 1 }}
            >
              {/* Segment bar */}
              <rect x="75" y={y} width="160" height="22" rx="3" fill={c.paper} stroke={c.sketch} strokeWidth="0.5" />
              <rect x="80" y={y + 6} width={60 + i * 12} height="4" rx="2" fill={c.sketch} opacity="0.4" />
              <rect x="80" y={y + 13} width={40 + i * 8} height="3" rx="1.5" fill={c.sketch} opacity="0.2" />

              {/* LQA score */}
              <motion.text
                x="250" y={y + 15} fontSize="9" fontFamily="monospace"
                fill={isApproved ? c.green : c.accent} fontWeight="600"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1, 1] }}
                transition={{ duration: 5, delay, times: [0, 0.3, 0.4, 1], repeat: Infinity, repeatDelay: 1 }}
              >
                {isApproved ? `${92 + i}` : "76"}
              </motion.text>

              {/* Check or flag icon */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0, 1, 1], scale: [0, 0, 1, 1] }}
                transition={{ duration: 5, delay, times: [0, 0.45, 0.55, 1], repeat: Infinity, repeatDelay: 1 }}
              >
                {isApproved ? (
                  <g>
                    <circle cx="290" cy={y + 11} r="8" fill={c.green} opacity="0.1" />
                    <path
                      d={`M ${285} ${y + 11} L ${288} ${y + 14} L ${295} ${y + 8}`}
                      fill="transparent" stroke={c.green} strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"
                    />
                  </g>
                ) : (
                  <g>
                    <circle cx="290" cy={y + 11} r="8" fill={c.accent} opacity="0.1" />
                    <text x="290" y={y + 14} textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={c.accent} fontWeight="700">!</text>
                  </g>
                )}
              </motion.g>
            </motion.g>
          );
        })}
      </motion.svg>
    </div>
  );
}

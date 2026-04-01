import React from "react";
import { motion } from "framer-motion";

export default function HeroAiAgents() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1", // stone-300
    ink: "#1c1917", // stone-900
    accent: "#c2410c", // orange-700
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Terminal / AI Assistant Window */}
        <rect x="60" y="30" width="280" height="240" rx="8" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        {/* Title bar with dots */}
        <circle cx="78" cy="46" r="4" fill={c.sketch} opacity="0.5" />
        <circle cx="90" cy="46" r="4" fill={c.sketch} opacity="0.5" />
        <circle cx="102" cy="46" r="4" fill={c.sketch} opacity="0.5" />
        <line x1="60" y1="58" x2="340" y2="58" stroke={c.sketch} strokeWidth="1" />

        {/* Prompt cursor blinking */}
        <text x="75" y="80" fontSize="9" fontFamily="monospace" fill={c.sketch}>{">"}</text>
        <motion.rect
          x="84" y="72" width="6" height="12" fill={c.accent}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "steps(2)" }}
        />

        {/* User typing the translation command */}
        <motion.text
          x="84" y="80" fontSize="9" fontFamily="monospace" fill={c.ink}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 6, times: [0, 0.05, 0.15, 1], repeat: Infinity }}
        >
          Translate checkout strings → DE
        </motion.text>

        {/* Processing indicator */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 6, times: [0, 0.2, 0.25, 0.4, 0.45], repeat: Infinity }}
        >
          <text x="75" y="100" fontSize="8" fontFamily="monospace" fill={c.sketch}>⟳ Applying Brand Voice + Glossary...</text>
        </motion.g>

        {/* Flixu response appearing */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 6, times: [0, 0.45, 0.55, 1], repeat: Infinity }}
        >
          {/* Response header */}
          <rect x="75" y="110" width="55" height="14" rx="2" fill={c.accent} opacity="0.1" />
          <text x="80" y="120" fontSize="8" fontFamily="monospace" fill={c.accent} fontWeight="600">flixu</text>

          {/* Translated strings */}
          <text x="75" y="140" fontSize="8" fontFamily="monospace" fill={c.ink}>"Ihre Bestellung ist bestätigt."</text>
          <text x="75" y="155" fontSize="8" fontFamily="monospace" fill={c.ink}>"Bestellung verfolgen"</text>
          <text x="75" y="170" fontSize="8" fontFamily="monospace" fill={c.ink}>"Weiter einkaufen"</text>
        </motion.g>

        {/* Success checkmark */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0, 1, 1], scale: [0.5, 0.5, 1, 1] }}
          transition={{ duration: 6, times: [0, 0.6, 0.65, 1], repeat: Infinity }}
        >
          <circle cx="310" cy="120" r="12" fill={c.accent} opacity="0.1" stroke={c.accent} strokeWidth="1" />
          <path d="M 304 120 L 308 124 L 316 116" fill="transparent" stroke={c.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>

        {/* MCP connection indicator — small badge at bottom */}
        <motion.g
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="130" y="245" width="140" height="16" rx="8" fill={c.paper} stroke={c.sketch} strokeWidth="0.5" />
          <circle cx="145" cy="253" r="3" fill={c.accent} opacity="0.8" />
          <text x="155" y="256" fontSize="7" fontFamily="monospace" fill={c.sketch}>MCP Connected — Flixu</text>
        </motion.g>
      </motion.svg>
    </div>
  );
}

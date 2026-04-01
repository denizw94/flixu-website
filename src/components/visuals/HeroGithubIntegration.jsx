import React from "react";
import { motion } from "framer-motion";

export default function HeroGithubIntegration() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1",
    ink: "#1c1917",
    accent: "#c2410c",
    green: "#15803d",
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Repository window */}
        <rect x="40" y="30" width="150" height="180" rx="8" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        <line x1="40" y1="55" x2="190" y2="55" stroke={c.sketch} strokeWidth="1" />
        <circle cx="55" cy="43" r="3.5" fill={c.sketch} opacity="0.5" />
        <circle cx="65" cy="43" r="3.5" fill={c.sketch} opacity="0.5" />
        <circle cx="75" cy="43" r="3.5" fill={c.sketch} opacity="0.5" />
        <text x="100" y="46" fontSize="7" fontFamily="monospace" fill={c.sketch} textAnchor="middle">repository</text>

        {/* File list in repo */}
        <rect x="52" y="65" width="80" height="10" rx="2" fill={c.sketch} opacity="0.2" />
        <text x="56" y="73" fontSize="7" fontFamily="monospace" fill={c.sketch}>en/strings.json</text>

        {/* Git push animation — commit dot traveling */}
        <motion.circle
          r="5" fill={c.accent}
          initial={{ cx: 115, cy: 90, opacity: 0 }}
          animate={{
            cx: [115, 115, 115, 260, 260],
            cy: [90, 90, 90, 90, 90],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{ duration: 6, times: [0, 0.1, 0.2, 0.45, 0.5], repeat: Infinity }}
        />
        <text x="115" y="110" fontSize="7" fontFamily="monospace" fill={c.sketch} textAnchor="middle">
          git push
        </text>

        {/* Arrow from repo to Flixu */}
        <motion.line
          x1="190" y1="90" x2="210" y2="90"
          stroke={c.accent} strokeWidth="1.5" strokeLinecap="round"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 6, times: [0, 0.2, 0.3, 0.7, 0.75], repeat: Infinity }}
        />

        {/* Flixu processing box */}
        <motion.g
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 6, times: [0, 0.3, 0.35, 0.65, 0.7], repeat: Infinity }}
        >
          <rect x="215" y="60" width="140" height="60" rx="6" fill={c.paper} stroke={c.accent} strokeWidth="1" />
          <text x="285" y="78" fontSize="8" fontFamily="monospace" fill={c.accent} textAnchor="middle" fontWeight="600">Flixu Pipeline</text>

          {/* Processing steps */}
          <motion.rect
            x="225" y="88" width="120" height="4" rx="2" fill={c.sketch} opacity="0.3"
          />
          <motion.rect
            x="225" y="88" height="4" rx="2" fill={c.accent}
            animate={{ width: [0, 0, 120, 120] }}
            transition={{ duration: 6, times: [0, 0.35, 0.6, 1], repeat: Infinity, ease: "easeOut" }}
          />
          <text x="285" y="110" fontSize="7" fontFamily="monospace" fill={c.sketch} textAnchor="middle">TM + Glossary + LQA</text>
        </motion.g>

        {/* Output — translated files committed */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 6, times: [0, 0.65, 0.7, 1], repeat: Infinity }}
        >
          {/* Localization branch box */}
          <rect x="215" y="140" width="140" height="70" rx="6" fill={c.paper} stroke={c.green} strokeWidth="1" />
          <text x="285" y="158" fontSize="7" fontFamily="monospace" fill={c.green} textAnchor="middle" fontWeight="600">localization/automated</text>

          {/* Committed files */}
          <rect x="225" y="166" width="90" height="10" rx="2" fill={c.green} opacity="0.08" />
          <text x="230" y="174" fontSize="7" fontFamily="monospace" fill={c.green}>de/strings.json ✓</text>

          <rect x="225" y="180" width="90" height="10" rx="2" fill={c.green} opacity="0.08" />
          <text x="230" y="188" fontSize="7" fontFamily="monospace" fill={c.green}>fr/strings.json ✓</text>

          <rect x="225" y="194" width="90" height="10" rx="2" fill={c.green} opacity="0.08" />
          <text x="230" y="202" fontSize="7" fontFamily="monospace" fill={c.green}>ja/strings.json ✓</text>
        </motion.g>

        {/* Branch lines — main and localization */}
        <motion.g
          animate={{ opacity: [0, 0, 0.6, 0.6] }}
          transition={{ duration: 6, times: [0, 0.65, 0.7, 1], repeat: Infinity }}
        >
          <line x1="115" y1="160" x2="115" y2="230" stroke={c.ink} strokeWidth="1.5" />
          <text x="115" y="245" fontSize="7" fontFamily="monospace" fill={c.ink} textAnchor="middle">main</text>
          <circle cx="115" cy="180" r="4" fill={c.ink} />

          <line x1="115" y1="180" x2="215" y2="175" stroke={c.green} strokeWidth="1" strokeDasharray="4 3" />
        </motion.g>
      </motion.svg>
    </div>
  );
}

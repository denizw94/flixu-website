import React from "react";
import { motion } from "framer-motion";

export default function HeroGlossaryEnforcement() {
  const c = {
    paper: "#FDFCF8",
    sketch: "#d6d3d1",
    ink: "#1c1917",
    accent: "#c2410c",
    green: "#15803d",
    red: "#b91c1c",
  };

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
      <motion.svg width="100%" height="100%" viewBox="0 0 400 300" className="w-full max-w-[500px]">
        {/* Glossary book / dictionary */}
        <rect x="40" y="50" width="130" height="160" rx="6" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        <line x1="40" y1="75" x2="170" y2="75" stroke={c.sketch} strokeWidth="1" />
        <text x="105" y="67" fontSize="8" fontFamily="monospace" fill={c.accent} textAnchor="middle" fontWeight="600">GLOSSARY</text>

        {/* Term entries */}
        <text x="52" y="95" fontSize="7" fontFamily="monospace" fill={c.ink} fontWeight="600">Dashboard</text>
        <text x="52" y="107" fontSize="6.5" fontFamily="monospace" fill={c.green}>→ DE: Dashboard</text>
        <text x="52" y="117" fontSize="6.5" fontFamily="monospace" fill={c.red}>✕ Armaturenbrett</text>

        <line x1="48" y1="125" x2="162" y2="125" stroke={c.sketch} strokeWidth="0.5" opacity="0.5" />

        <text x="52" y="138" fontSize="7" fontFamily="monospace" fill={c.ink} fontWeight="600">Chargeback</text>
        <text x="52" y="150" fontSize="6.5" fontFamily="monospace" fill={c.green}>→ DE: Rückbuchung</text>
        <text x="52" y="160" fontSize="6.5" fontFamily="monospace" fill={c.red}>✕ Stornierung</text>

        <line x1="48" y1="168" x2="162" y2="168" stroke={c.sketch} strokeWidth="0.5" opacity="0.5" />

        <text x="52" y="181" fontSize="7" fontFamily="monospace" fill={c.ink} fontWeight="600">Submit</text>
        <text x="52" y="193" fontSize="6.5" fontFamily="monospace" fill={c.green}>→ DE: Absenden</text>

        {/* Arrow from glossary to translation */}
        <motion.g
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <line x1="175" y1="130" x2="210" y2="130" stroke={c.accent} strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        </motion.g>

        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6 Z" fill={c.accent} />
          </marker>
        </defs>

        {/* Translation output window */}
        <rect x="215" y="50" width="145" height="200" rx="6" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        <line x1="215" y1="75" x2="360" y2="75" stroke={c.sketch} strokeWidth="1" />
        <text x="287" y="67" fontSize="8" fontFamily="monospace" fill={c.sketch} textAnchor="middle">Translation Output</text>

        {/* Translated text with enforced terms highlighted */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1] }}
          transition={{ duration: 4, times: [0, 0.2, 1], repeat: Infinity, repeatDelay: 1 }}
        >
          <text x="225" y="95" fontSize="7" fontFamily="monospace" fill={c.sketch}>Öffnen Sie Ihr</text>
          <motion.g
            animate={{ opacity: [0, 0, 1, 1] }}
            transition={{ duration: 4, times: [0, 0.3, 0.4, 1], repeat: Infinity, repeatDelay: 1 }}
          >
            <rect x="223" y="99" width="58" height="13" rx="2" fill={c.green} opacity="0.08" />
            <text x="225" y="109" fontSize="7" fontFamily="monospace" fill={c.green} fontWeight="600">Dashboard</text>
            <text x="285" y="109" fontSize="7" fontFamily="monospace" fill={c.sketch}>, um</text>
          </motion.g>

          <text x="225" y="125" fontSize="7" fontFamily="monospace" fill={c.sketch}>die</text>
          <motion.g
            animate={{ opacity: [0, 0, 1, 1] }}
            transition={{ duration: 4, times: [0, 0.45, 0.55, 1], repeat: Infinity, repeatDelay: 1 }}
          >
            <rect x="237" y="115" width="72" height="13" rx="2" fill={c.green} opacity="0.08" />
            <text x="240" y="125" fontSize="7" fontFamily="monospace" fill={c.green} fontWeight="600">Rückbuchung</text>
          </motion.g>

          <text x="225" y="141" fontSize="7" fontFamily="monospace" fill={c.sketch}>zu prüfen und klicken</text>
          <text x="225" y="155" fontSize="7" fontFamily="monospace" fill={c.sketch}>Sie auf</text>
          <motion.g
            animate={{ opacity: [0, 0, 1, 1] }}
            transition={{ duration: 4, times: [0, 0.6, 0.7, 1], repeat: Infinity, repeatDelay: 1 }}
          >
            <rect x="262" y="145" width="55" height="13" rx="2" fill={c.green} opacity="0.08" />
            <text x="265" y="155" fontSize="7" fontFamily="monospace" fill={c.green} fontWeight="600">Absenden</text>
          </motion.g>
        </motion.g>

        {/* Terminology score badge */}
        <motion.g
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 4, times: [0, 0.75, 0.85, 1], repeat: Infinity, repeatDelay: 1 }}
        >
          <rect x="225" y="180" width="125" height="22" rx="3" fill={c.green} opacity="0.06" stroke={c.green} strokeWidth="0.5" />
          <text x="237" y="194" fontSize="7" fontFamily="monospace" fill={c.green}>Terminology: 100/100 ✓</text>
        </motion.g>

        {/* Crossed out wrong term */}
        <motion.g
          animate={{ opacity: [0, 0, 0.6, 0.6, 0] }}
          transition={{ duration: 5, times: [0, 0.15, 0.2, 0.35, 0.45], repeat: Infinity, repeatDelay: 0 }}
        >
          <rect x="225" y="220" width="125" height="18" rx="3" fill={c.red} opacity="0.04" />
          <text x="237" y="232" fontSize="7" fontFamily="monospace" fill={c.red} textDecoration="line-through">Armaturenbrett</text>
          <text x="320" y="232" fontSize="7" fontFamily="monospace" fill={c.red}>✕</text>
        </motion.g>
      </motion.svg>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function HeroDevelopers() {
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
        {/* Terminal window */}
        <rect x="30" y="25" width="340" height="250" rx="8" fill={c.paper} stroke={c.sketch} strokeWidth="1" />
        <rect x="30" y="25" width="340" height="28" rx="8" fill={c.sketch} opacity="0.15" />
        <circle cx="48" cy="39" r="4" fill={c.sketch} opacity="0.4" />
        <circle cx="60" cy="39" r="4" fill={c.sketch} opacity="0.4" />
        <circle cx="72" cy="39" r="4" fill={c.sketch} opacity="0.4" />

        {/* git push line */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 1] }}
          transition={{ duration: 8, times: [0, 0.05, 0.9, 1], repeat: Infinity }}
        >
          <text x="45" y="72" fontSize="9" fontFamily="monospace" fill={c.sketch}>$</text>
          <text x="57" y="72" fontSize="9" fontFamily="monospace" fill={c.accent}>git push</text>
          <text x="108" y="72" fontSize="9" fontFamily="monospace" fill={c.sketch}> origin main</text>
        </motion.g>

        {/* Detection line */}
        <motion.g
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 8, times: [0, 0.1, 0.15, 1], repeat: Infinity }}
        >
          <text x="45" y="90" fontSize="8" fontFamily="monospace" fill={c.sketch}>Flixu detected:</text>
          <text x="155" y="90" fontSize="8" fontFamily="monospace" fill={c.accent}>3 changed files</text>
        </motion.g>

        {/* Source file snippet */}
        <motion.g
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 8, times: [0, 0.2, 0.25, 1], repeat: Infinity }}
        >
          <text x="45" y="112" fontSize="7.5" fontFamily="monospace" fill={c.sketch}>{"{"}</text>
          <text x="55" y="124" fontSize="7.5" fontFamily="monospace" fill={c.sketch}>"<tspan fill={c.ink}>title</tspan>":</text>
          <text x="100" y="124" fontSize="7.5" fontFamily="monospace" fill={c.accent}>"Complete your purchase"</text>
          <text x="55" y="136" fontSize="7.5" fontFamily="monospace" fill={c.sketch}>"<tspan fill={c.ink}>cta</tspan>":</text>
          <text x="85" y="136" fontSize="7.5" fontFamily="monospace" fill={c.accent}>"Pay {'{{amount}}'} now"</text>
          <text x="45" y="148" fontSize="7.5" fontFamily="monospace" fill={c.sketch}>{"}"}</text>
        </motion.g>

        {/* Processing indicator */}
        <motion.g
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 8, times: [0, 0.3, 0.35, 0.55, 0.6], repeat: Infinity }}
        >
          <text x="45" y="168" fontSize="8" fontFamily="monospace" fill={c.accent}>▶ Translating</text>
          <text x="135" y="168" fontSize="8" fontFamily="monospace" fill={c.sketch}> with Glossary + Brand Voice…</text>
          <motion.rect
            x="45" y="174" height="3" rx="1.5" fill={c.accent}
            animate={{ width: [0, 300] }}
            transition={{ duration: 2, delay: 2.8, repeat: Infinity, repeatDelay: 5.2 }}
          />
        </motion.g>

        {/* Output */}
        <motion.g
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 8, times: [0, 0.6, 0.65, 1], repeat: Infinity }}
        >
          <text x="45" y="196" fontSize="7.5" fontFamily="monospace" fill={c.sketch}>{"{"}</text>
          <text x="55" y="208" fontSize="7.5" fontFamily="monospace" fill={c.sketch}>"<tspan fill={c.ink}>title</tspan>":</text>
          <text x="100" y="208" fontSize="7.5" fontFamily="monospace" fill={c.green}>"Kauf abschließen"</text>
          <text x="55" y="220" fontSize="7.5" fontFamily="monospace" fill={c.sketch}>"<tspan fill={c.ink}>cta</tspan>":</text>
          <text x="85" y="220" fontSize="7.5" fontFamily="monospace" fill={c.green}>"{'{{amount}}'} jetzt bezahlen"</text>
          <text x="45" y="232" fontSize="7.5" fontFamily="monospace" fill={c.sketch}>{"}"}</text>
        </motion.g>

        {/* Commit line */}
        <motion.g
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 8, times: [0, 0.75, 0.8, 1], repeat: Infinity }}
        >
          <text x="45" y="252" fontSize="8" fontFamily="monospace" fill={c.green}>✓ Committed to</text>
          <text x="145" y="252" fontSize="8" fontFamily="monospace" fill={c.green} fontWeight="600"> localization/automated</text>
        </motion.g>
      </motion.svg>
    </div>
  );
}

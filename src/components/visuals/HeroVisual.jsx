import React from "react";
import * as m from "framer-motion/m";

export default function HeroVisual() {
    const c = {
        paper: "#FDFCF8",
        sketch: "#d6d3d1",
        ink: "#1c1917",
        accent: "#c2410c",
    };

    // Random positions for "objects"
    const objects = [
        { x: 80, y: 80, w: 60, h: 60, delay: 0 },
        { x: 220, y: 120, w: 80, h: 50, delay: 1.5 },
        { x: 120, y: 180, w: 50, h: 50, delay: 3 },
    ];

    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#FDFCF8] relative overflow-hidden pointer-events-none">
            <m.svg
                width="100%"
                height="100%"
                viewBox="0 0 400 300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="w-full max-w-[500px]"
            >
                {/* Main Viewfinder Frame */}
                <m.rect
                    x="40" y="40" width="320" height="220"
                    fill="none" stroke={c.ink} strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Crosshair Center */}
                <m.line x1="190" y1="150" x2="210" y2="150" stroke={c.sketch} strokeWidth="1" />
                <m.line x1="200" y1="140" x2="200" y2="160" stroke={c.sketch} strokeWidth="1" />

                {/* Corner Markers */}
                <m.path d="M 50 70 L 50 50 L 70 50" fill="none" stroke={c.sketch} strokeWidth="1" />
                <m.path d="M 350 220 L 350 250 L 320 250" fill="none" stroke={c.sketch} strokeWidth="1" />

                {/* Detected Objects (Bounding Boxes) */}
                {objects.map((obj, i) => (
                    <m.g key={i}>
                        <m.rect
                            x={obj.x} y={obj.y} width={obj.w} height={obj.h}
                            fill="none" stroke={c.accent} strokeWidth="1"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
                            transition={{
                                duration: 1.5,
                                delay: obj.delay,
                                repeat: Infinity,
                                repeatDelay: 4 // Wait for others
                            }}
                        />
                        {/* Label Tag */}
                        <m.rect
                            x={obj.x} y={obj.y - 15} width="40" height="10"
                            fill={c.accent}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 1, 0] }}
                            transition={{
                                duration: 1.5,
                                delay: obj.delay,
                                repeat: Infinity,
                                repeatDelay: 4
                            }}
                        />
                    </m.g>
                ))}

            </m.svg>
        </div>
    );
}

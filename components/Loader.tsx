"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const Loader: React.FC = () => {
    const letters = [
        { char: "a", className: "text-foreground/80 -mr-[0.15em] relative z-10" },
        { char: "a", className: "text-foreground/60 -mr-[0.15em] relative z-20 mix-blend-difference" },
        { char: "t", className: "text-foreground/80 -mr-[0.15em] relative z-10" },
        { char: "i", className: "text-foreground/60 -mr-[0.15em] relative z-30" },
        { char: "f", className: "text-foreground/80 relative z-10" },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
            <div className="relative font-black  font-heading tracking-tighter text-[25vw] leading-none flex items-center justify-center mix-blend-exclusion select-none pointer-events-none">
                {letters.map((item, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.15,
                            repeat: Infinity,
                            repeatDelay: 2,
                            repeatType: "reverse"
                        }}
                        className={item.className}
                    >
                        {item.char}
                    </motion.span>
                ))}
            </div>
        </div>
    );
};

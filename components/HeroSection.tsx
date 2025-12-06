"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
    return (
        <section id="home" className="min-h-screen snap-start relative overflow-hidden px-6 pt-24 pb-12 flex flex-col justify-between" aria-label="Hero section">

            {/* Top Right Info Block */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-32 right-6 md:right-12 text-right max-w-[200px] md:max-w-xs space-y-4 text-sm md:text-base font-light text-muted-foreground"
            >
                <p>
                    The portfolio of <strong className="text-foreground">Aatif Shaikh</strong>
                </p>
                <p>
                    a Lead Engineer
                    <br />
                    located in Navi Mumbai
                </p>
            </motion.div>

            {/* Mid Left Info Block */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute bottom-20 left-6 md:top-1/2 md:-translate-y-1/2 md:left-12 md:bottom-auto max-w-[200px] md:max-w-xs space-y-4 text-sm md:text-base font-light text-muted-foreground"
            >
                <p>
                    Since 2014
                </p>
                <p>
                    architecting scalable
                    <br />
                    cloud systems & GenAI
                </p>
            </motion.div>

            {/* Center Main Text - Bauhaus Overlap Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none select-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative font-black font-heading tracking-tighter text-[25vw] leading-none flex items-center justify-center mix-blend-exclusion"
                >
                    {/* Overlapping Letters */}
                    <span className="text-foreground/80 -mr-[0.15em] relative z-10">a</span>
                    <span className="text-foreground/60 -mr-[0.15em] relative z-20 mix-blend-difference">a</span>
                    <span className="text-foreground/80 -mr-[0.15em] relative z-10">t</span>
                    <span className="text-foreground/60 -mr-[0.15em] relative z-30">i</span>
                    <span className="text-foreground/80 relative z-10">f</span>
                </motion.div>
            </div>

            {/* Bottom Connect Links */}
            <div className="absolute bottom-12 right-6 md:right-12 flex gap-6 text-sm font-bold tracking-widest uppercase">
                <a href="/Aatif Shaikh – Lead Fullstack Engineer (Node.js - TypeScript - AWS).pdf" download target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Resume</a>
                <a href="https://www.linkedin.com/in/aatif24/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">LinkedIn</a>
                <a href="https://github.com/aatif24" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">GitHub</a>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <ChevronDown className="w-6 h-6 animate-bounce text-muted-foreground" />
            </motion.div>

        </section>
    );
};

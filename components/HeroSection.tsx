"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="min-h-screen snap-start relative overflow-hidden px-6 pt-24 pb-12 flex flex-col justify-between" aria-label="Hero section">

            {/* Geometric shapes - Bauhaus accent with parallax */}
            <motion.div
                className="absolute md:top-[15%] md:left-[10%] w-3 h-3 bg-primary rounded-full animate-pulse"
                style={{
                    x: mousePosition.x * 0.5,
                    y: mousePosition.y * 0.5,
                }}
            />
            <motion.div
                className="hidden md:block absolute top-1/4 right-24 w-16 h-16 border-2 border-border rounded-full"
                style={{
                    x: mousePosition.x * -0.3,
                    y: mousePosition.y * -0.3,
                }}
            />
            <motion.div
                className="hidden md:block absolute bottom-1/4 left-24 w-24 h-px bg-border"
                style={{
                    x: mousePosition.x * 0.7,
                    y: mousePosition.y * 0.2,
                }}
            />

            {/* Sprinkled Stats - Mobile (Hidden) & Desktop (Absolute) */}

            {/* 11+ Years */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                className="absolute md:top-32 top-20 left-12 text-xs font-light text-muted-foreground"
            >
                <div>
                    <span className="font-bold text-primary text-sm">11+</span> Years
                </div>
                <div>Experience</div>
            </motion.div>

            {/* 100K+ Users */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                className=" absolute bottom-32 md:right-32 right-12 text-xs font-light text-muted-foreground text-right"
            >
                <div>
                    <span className="font-bold text-primary text-sm">100K+</span> Users
                </div>
                <div>Global Impact</div>
            </motion.div>

            {/* 99.9% Uptime */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
                className=" absolute top-1/2 right-12 -translate-y-1/2 rotate-90 origin-right text-xs font-light text-muted-foreground"
            >
                <span className="font-bold text-primary text-sm">99.9%</span> Uptime Delivered
            </motion.div>

            {/* Top Right Info Block - Re-positioned for mobile */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-28 right-6 md:top-32 md:right-12 text-right max-w-[150px] md:max-w-xs space-y-2 md:space-y-4 text-xs md:text-base font-light text-muted-foreground"
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

            {/* Mid Left Info Block - Re-positioned for mobile */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute bottom-28 left-6 md:top-1/2 md:-translate-y-1/2 md:left-12 md:bottom-auto max-w-[150px] md:max-w-xs space-y-2 md:space-y-4 text-xs md:text-base font-light text-muted-foreground"
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
                    <span className="text-foreground/80 -mr-[0.15em] relative z-10 ">t</span>
                    <span className="text-foreground/60 -mr-[0.15em] relative z-30 ">i</span>
                    <span className="text-foreground/80 relative z-10">f</span>
                </motion.div>
            </div>

            {/* Bottom Connect Links */}
            <div className="absolute bottom-12 right-6 md:right-12 flex gap-6 text-sm font-bold tracking-widest uppercase">
                <a href="/Aatif Shaikh – Lead Fullstack Engineer (Node.js - TypeScript - AWS).pdf" download target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Resume</a>
                <a href="https://www.linkedin.com/in/aatif24/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                <a href="https://github.com/aatif24" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
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
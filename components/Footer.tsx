"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const socialLinks = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aatif24/' },
        { name: 'GitHub', url: 'https://github.com/aatif24' },
        { name: 'Email', url: 'mailto:saatif24@gmail.com' }
    ];

    // Generate random values once on mount
    const [geometricShapes] = useState(() => 
        [...Array(20)].map(() => ({
            width: Math.random() * 40 + 10,
            height: Math.random() * 40 + 10,
            left: Math.random() * 100,
            top: Math.random() * 100,
            initialRotate: Math.random() * 45,
            finalRotate: Math.random() * 45 + 45,
            duration: 10 + Math.random() * 10
        }))
    );

    return (
        <footer className="border-t snap-start border-border mt-12 py-8 px-4 md:px-6 relative overflow-hidden">
            {/* Animated geometric pattern background */}
            {mounted && (
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full">
                        {geometricShapes.map((shape, i) => (
                            <motion.div
                                key={i}
                                className="absolute border border-primary/20"
                                style={{
                                    width: `${shape.width}px`,
                                    height: `${shape.height}px`,
                                    left: `${shape.left}%`,
                                    top: `${shape.top}%`,
                                }}
                                initial={{ rotate: shape.initialRotate }}
                                animate={{
                                    rotate: [shape.initialRotate, shape.finalRotate],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: shape.duration,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Geometric accents with animation */}
            {mounted && (
                <>
                    <motion.div
                        className="hidden md:block absolute top-4 left-12 w-12 h-12 border border-primary/30"
                        animate={{ rotate: [0, 90, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="hidden md:block absolute bottom-4 right-12 w-8 h-8 rounded-full bg-primary"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </>
            )}

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground relative z-10">
                <div className="text-center md:text-left">
                    <p className="font-bold text-foreground">Aatif Shaikh</p>
                    <p className="text-xs">Lead Fullstack Engineer</p>
                </div>

                <div className="flex gap-6">
                    {socialLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target={link.name !== 'Email' ? '_blank' : undefined}
                            rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                            className="hover:text-foreground transition-colors relative group"
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                        </motion.a>
                    ))}
                </div>

                <div className="text-xs text-center md:text-right">
                    <p>© {new Date().getFullYear()} All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};
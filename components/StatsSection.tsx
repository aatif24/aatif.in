"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const StatsSection: React.FC = () => {
    return (
        <section className="min-h-screen snap-start relative px-4 md:px-6 flex items-center" aria-label="Statistics">
            <div className="max-w-7xl mx-auto w-full relative">
                {/* Geometric accent lines - hidden on mobile */}
                <div className="hidden md:block absolute top-0 left-0 w-px h-48 bg-border" />
                <div className="hidden md:block absolute bottom-0 right-0 w-px h-48 bg-border" />

                {/* Decorative text sprinkles - Bauhaus style */}
                <div className="hidden md:block absolute top-12 left-8 max-w-[150px] text-xs font-light text-muted-foreground">
                    <p>Impact at<br />scale</p>
                </div>
                <div className="hidden md:block absolute bottom-12 right-24 text-right max-w-[150px] text-xs font-light text-muted-foreground">
                    <p>Consistently<br />delivering value</p>
                </div>

                {/* Asymmetric stat placement */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-20 gap-x-8 md:gap-x-16">
                    {/* Top right */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="md:text-right md:col-start-2">
                        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground font-heading tracking-tight leading-none">100K+</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3 md:mt-4">Global Users</div>
                    </motion.div>

                    {/* Mid left */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="md:col-start-1 md:row-start-2">
                        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground font-heading tracking-tight leading-none">99.9%</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3 md:mt-4">Uptime</div>
                    </motion.div>

                    {/* Bottom right */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="md:text-right md:col-start-2 md:row-start-3">
                        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground font-heading tracking-tight leading-none">11+</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3 md:mt-4">Years Experience</div>
                    </motion.div>

                    {/* Bottom left */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="md:col-start-1 md:row-start-4">
                        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground font-heading tracking-tight leading-none">50M+</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3 md:mt-4">Records Migrated</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

export const ManifestoSection: React.FC = () => {
    return (
        <section id="manifesto" className="min-h-screen snap-start px-4 md:px-6 max-w-7xl mx-auto flex items-center relative overflow-hidden" aria-label="Manifesto section">
            {/* Geometric accents - hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 left-12 w-48 h-48 border rounded-full border-border/50 -translate-y-1/2" />
            <div className="hidden md:block absolute bottom-24 right-24 w-4 h-4 bg-primary rotate-45" />

            <div className="w-full relative z-10">
                {/* Asymmetric Heading */}
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="md:ml-24">
                    <SectionHeading lines={['MANI', 'FES', 'TO']} opacities={[100, 90, 50]} size="large" className="mb-6 md:mb-8" />
                </motion.div>

                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">

                    {/* Intro / ID Card - Left Column */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="md:col-span-4 md:ml-24">
                        <p className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Engineering DNA</p>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                            Hi, I'm Aatif. <br />
                            <span className="text-muted-foreground">Lead Engineer.</span>
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground font-light mb-6">
                            Building resilient ecosystems for aviation and digital platforms. I solve hard problems with code that scales.
                        </p>
                        <a href="/Aatif Shaikh – Lead Fullstack Engineer (Node.js - TypeScript - AWS).pdf" download className="text-xs font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-primary transition-colors">
                            Download Resume
                        </a>
                    </motion.div>

                    {/* Principles & Proof - Right Column */}
                    <div className="md:col-span-7 space-y-12">
                        {/* Point 1 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="group">
                            <h4 className="text-2xl md:text-4xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                SCALE IS NON-NEGOTIABLE.
                            </h4>
                            <div className="h-px w-12 bg-primary mb-4 " />
                            <p className="text-base text-muted-foreground font-light  opacity-80">
                                <span className="text-foreground font-medium">Built on the belief that systems should grow effortlessly, not chaotically. </span>
                                <span className="text-foreground font-medium block">Expansion should feel natural, not dramatic.</span>
                            </p>
                        </motion.div>

                        {/* Point 2 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="group">
                            <h4 className="text-2xl md:text-4xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                RELIABILITY IS A QUIET ART.
                            </h4>
                            <div className="h-px w-12 bg-primary mb-4" />
                            <p className="text-base text-muted-foreground font-light  opacity-80">
                                <span className="text-foreground font-medium">The best systems rarely shout for attention, they're too busy working.</span>
                            </p>
                        </motion.div>

                        {/* Point 3 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="group">
                            <h4 className="text-2xl md:text-4xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                SPEED AS A STANDARD.
                            </h4>
                            <div className="h-px w-12 bg-primary mb-4" />
                            <p className="text-base text-muted-foreground font-light opacity-80">
                                <span className="text-foreground font-medium">True velocity emerges from clarity, not chaos.</span>
                                <span className="text-foreground font-medium block"> From design, not desperation.</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Contact - bottom right */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="hidden md:block md:ml-auto max-w-sm space-y-3 md:space-y-4">
                <div className="border-l-2 border-border pl-3 md:pl-4">
                    <div className="font-bold text-foreground text-sm mb-1">Navi Mumbai, India</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                </div>
                <div className="border-l-2 border-border pl-3 md:pl-4">
                    <div className="font-bold text-foreground text-sm mb-1">saatif24@gmail.com</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                </div>
            </motion.div>
        </section >
    );
};

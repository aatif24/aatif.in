"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

export const PhilosophySection: React.FC = () => {
    return (
        <section id="about" className="px-4 md:px-6 max-w-7xl mx-auto min-h-screen snap-start flex items-center relative overflow-hidden" aria-label="About section">
            {/* Geometric accent shapes - hidden on mobile */}
            <div className="hidden md:block absolute top-1/3 left-0 w-16 h-px bg-border" />
            <div className="hidden md:block absolute bottom-1/3 right-12 w-px h-16 bg-border" />
            <div className="hidden md:block absolute top-1/2 right-1/4 w-10 h-10 rounded-full border border-border" />

            <div className="w-full space-y-8 md:space-y-12">
                {/* Heading positioned top-left */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-2xl">
                    <SectionHeading lines={['PHILO', 'SO', 'PHY']} opacities={[100, 70, 40]} size="large" className="mb-6 md:mb-8" />
                </motion.div>

                {/* Content scattered asymmetrically */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {/* Body text - left column */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="md:col-span-2 max-w-xl">
                        <p className="text-sm leading-relaxed text-muted-foreground font-light mb-4">
                            Lead Engineer specializing in building robust, scalable systems. Over a decade transforming from simple websites to complex cloud-native distributed systems.
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground font-light">
                            At <span className="font-bold text-foreground">AirFi</span>, driving technical strategy and leading teams to deliver high-impact solutions.
                        </p>
                    </motion.div>

                    {/* Stats - right column */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="space-y-6 md:space-y-8">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-1">40%</div>
                            <div className="text-xs uppercase tracking-widest text-muted-foreground">Performance</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-1">25%</div>
                            <div className="text-xs uppercase tracking-widest text-muted-foreground">Cost Savings</div>
                        </div>
                    </motion.div>
                </div>

                {/* Contact - bottom right */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="md:ml-auto max-w-sm space-y-3 md:space-y-4">
                    <div className="border-l-2 border-border pl-3 md:pl-4">
                        <div className="font-bold text-foreground text-sm mb-1">Navi Mumbai, India</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                    </div>
                    <div className="border-l-2 border-border pl-3 md:pl-4">
                        <div className="font-bold text-foreground text-sm mb-1">saatif24@gmail.com</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

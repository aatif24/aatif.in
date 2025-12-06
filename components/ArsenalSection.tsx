"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/portfolio-data';
import { SectionHeading } from './SectionHeading';

export const ArsenalSection: React.FC = () => {
    return (
        <section id="skills" className="px-4 md:px-6 max-w-7xl mx-auto min-h-screen snap-start flex items-center relative" aria-label="Skills section">
            {/* Geometric line accents - hidden on mobile */}
            <div className="hidden md:block absolute top-1/4 left-12 w-px h-32 bg-border" />
            <div className="hidden md:block absolute bottom-1/4 right-12 w-32 h-px bg-border" />

            <div className="w-full">
                <div className="mb-8 md:mb-12">
                    <SectionHeading lines={['ARSE', 'NAL']} opacities={[100, 50]} size="large" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-8">
                    {Object.entries(skills).map(([category, items], i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="space-y-3 md:space-y-4"
                        >
                            <div className="border-b border-border pb-2">
                                <h3 className="text-xs uppercase tracking-widest text-foreground font-bold">{category}</h3>
                            </div>
                            <div className="space-y-2">
                                {items.map((skill, j) => (
                                    <div key={j} className="text-sm text-muted-foreground font-light">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

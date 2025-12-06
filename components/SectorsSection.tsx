"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { industries } from '@/lib/portfolio-data';
import { SectionHeading } from './SectionHeading';

export const SectorsSection: React.FC = () => {
    return (
        <section className="min-h-screen snap-start px-4 md:px-6 max-w-7xl mx-auto flex items-center relative overflow-hidden" aria-label="Industries section">
            {/* Geometric box accent - hidden on mobile */}
            <div className="hidden md:block absolute top-1/4 right-0 w-24 h-24 border border-primary/20" />
            <div className="hidden md:block absolute bottom-1/3 left-12 w-12 h-12 rounded-full border border-primary" />

            <div className="w-full relative">
                <div className="mb-8 md:mb-12">
                    <SectionHeading lines={['SEC', 'TORS']} opacities={[100, 50]} size="large" className="mb-4 md:mb-6" />
                </div>

                {/* Asymmetric scattered layout */}
                <div className="space-y-8 md:space-y-12">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className={`max-w-md ${i % 2 === 0 ? '' : 'md:ml-auto'}`}
                        >
                            {/* Geometric line marker */}
                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="w-6 md:w-8 h-px bg-foreground mt-4 md:mt-6 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground font-heading mb-2">{industry.name}</h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground font-light">{industry.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

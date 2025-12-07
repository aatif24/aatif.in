"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Industry } from '@/lib/strapi';

interface SectorsSectionProps {
    industries: Industry[];
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ industries }) => {
    return (
        <section className="min-h-screen snap-start px-4 md:px-6 max-w-7xl mx-auto flex items-center relative overflow-hidden" aria-label="Industries section">
            {/* Geometric box accent - hidden on mobile */}
            <div className="hidden md:block absolute top-1/4 right-0 w-24 h-24 border border-primary/20" />
            <div className="hidden md:block absolute bottom-1/3 left-12 w-12 h-12 rounded-full border border-primary" />

            <div className="w-full relative">
                <div className="mb-8 md:mb-12">
                    <SectionHeading lines={['SEC', 'TORS']} opacities={[100, 50]} size="large" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-24 max-w-5xl mx-auto">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`flex group ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
                        >
                            {/* Horizontal Line Accent */}
                            <div className="w-8 h-px bg-muted-foreground/60 mt-3 mr-4 shrink-0 transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-foreground font-heading">{industry.name}</h3>
                                <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
                                    {industry.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

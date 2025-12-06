"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/lib/portfolio-data';
import { SectionHeading } from './SectionHeading';

export const JourneySection: React.FC = () => {
    return (
        <section id="experience" className="px-4 md:px-6 min-h-screen snap-start flex items-center relative" aria-label="Experience section">
            {/* Geometric grid accent - hidden on mobile */}
            <div className="hidden md:grid absolute top-12 right-12 grid-cols-3 gap-3">
                <div className="w-3 h-3 border border-border" />
                <div className="w-3 h-3 border border-border" />
                <div className="w-3 h-3 border border-border" />
            </div>

            <div className="max-w-6xl mx-auto w-full">
                <div className="mb-8 md:mb-12">
                    <SectionHeading lines={['JOUR', 'NEY']} opacities={[100, 50]} size="large" />
                </div>

                <div className="space-y-8 md:space-y-10">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className={`max-w-2xl ${i % 2 === 0 ? '' : 'md:ml-auto md:text-right'}`}
                        >
                            <div className="space-y-3">
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{exp.period}</div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground font-heading mb-1">{exp.role}</h3>
                                    <div className="text-sm md:text-base text-muted-foreground">{exp.company}</div>
                                </div>
                                <div className={`w-10 md:w-12 h-px bg-foreground ${i % 2 === 0 ? '' : 'md:ml-auto'}`} />
                                <p className="text-sm text-muted-foreground leading-relaxed font-light">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

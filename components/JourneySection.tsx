"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Experience } from '@/lib/strapi';


interface JourneySectionProps {
    experiences: Experience[];
}

export const JourneySection: React.FC<JourneySectionProps> = ({ experiences }) => {
    return (
        <section id="experience" className="px-4 md:px-6 min-h-screen snap-start flex items-center relative overflow-hidden" aria-label="Experience section">
            {/* Geometric grid accent - hidden on mobile */}
            <div className="hidden md:grid absolute top-12 right-12 grid-cols-3 gap-3">
                <div className="w-3 h-3 border border-primary" />
                <div className="w-3 h-3 border border-border" />
                <div className="w-3 h-3 bg-primary" />
            </div>

            <div className="max-w-6xl mx-auto w-full relative">
                {/* Timeline connector line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />

                <div className="mb-8 md:mb-12">
                    <SectionHeading lines={['JOUR', 'NEY']} opacities={[100, 50]} size="small" />
                </div>

                <div className="space-y-6 md:space-y-10">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className={`max-w-2xl relative ${i % 2 === 0 ? '' : 'md:ml-auto md:text-right'}`}
                        >
                            {/* Timeline node */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 + 0.3 }}
                                className={`hidden md:block absolute top-8 ${i % 2 === 0 ? '-right-[calc(50vw-50%+0.5rem)]' : '-left-[calc(50vw-50%+0.5rem)]'} w-3 h-3 bg-primary rounded-full border-2 border-background z-10`}
                            />

                            {/* Connector line to timeline */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 'calc(50vw - 50% - 1rem)' }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
                                className={`hidden md:block absolute top-[calc(2rem+0.25rem)] ${i % 2 === 0 ? '-right-[calc(50vw-50%)]' : '-left-[calc(50vw-50%)]'} h-px bg-primary/30`}
                            />

                            <div className="space-y-3 relative pl-4 md:pl-0 border-l-2 md:border-l-0 border-primary/30">
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                                        {new Date(exp.dateFrom).getFullYear()} – {exp.currentlyWorking ? 'Present' : (exp.dateTo ? new Date(exp.dateTo).getFullYear() : '')}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground font-heading mb-1">{exp.role}</h3>
                                    <div className="text-sm md:text-base text-muted-foreground">{exp.company}</div>
                                </div>
                                <div className={`w-10 md:w-12 h-px bg-foreground ${i % 2 === 0 ? '' : 'md:ml-auto'}`} />
                                <p className="text-sm text-muted-foreground leading-relaxed font-light">{exp.details}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
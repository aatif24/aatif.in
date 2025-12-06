"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { recommendations } from '@/lib/portfolio-data';
import { SectionHeading } from './SectionHeading';

export const EndorsedSection: React.FC = () => {
    return (
        <section id="recommendations" className="px-4 md:px-6 min-h-screen snap-start flex items-center relative" aria-label="Recommendations section">
            {/* Geometric box frame - subtle on mobile */}
            <div className="absolute inset-4 md:inset-8 border border-border pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full">
                <div className="mb-8 md:mb-12">
                    <SectionHeading lines={['ENDOR', 'SED']} opacities={[100, 50]} size="default" />
                    <a
                        href="https://www.linkedin.com/in/aatif24/details/recommendations/?detailScreenTabIndex=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm uppercase tracking-widest font-bold text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2 mt-4"
                        aria-label="View all recommendations on LinkedIn"
                    >
                        View All <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="space-y-8 md:space-y-12">
                    {recommendations.map((rec, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className={`max-w-xl ${i % 3 === 1 ? 'md:mx-auto' : i % 3 === 2 ? 'md:ml-auto' : ''}`}
                        >
                            <div className="space-y-3 md:space-y-4">
                                <div>
                                    <h3 className="text-base md:text-lg font-bold text-foreground mb-1">{rec.name}</h3>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{rec.title}</p>
                                </div>
                                <div className="w-10 md:w-12 h-px bg-border" />
                                <p className="text-sm leading-relaxed text-muted-foreground font-light whitespace-pre-line">
                                    {rec.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

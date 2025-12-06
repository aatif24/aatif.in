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
                        className="md:absolute right-1/6 top-1/3 text-sm uppercase tracking-widest font-bold text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2 mt-4"
                        aria-label="View all recommendations on LinkedIn"
                    >
                        View All <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Asymmetric layout: 2 on left column, 1 on right center */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left column - 2 recommendations */}
                    <div className="space-y-8 md:space-y-12">
                        {recommendations.slice(0, 2).map((rec, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
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

                    {/* Right column - 1 recommendation centered */}
                    <div className="flex items-center">
                        {recommendations.slice(2, 3).map((rec, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="w-full"
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
            </div>
        </section>
    );
};

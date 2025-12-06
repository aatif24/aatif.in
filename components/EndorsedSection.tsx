"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { recommendations } from '@/lib/portfolio-data';
import { SectionHeading } from './SectionHeading';

const MobileRecommendationCard = ({ rec, index }: { rec: typeof recommendations[0], index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="space-y-3"
        >
            <div>
                <h3 className="text-base font-bold text-foreground mb-1">{rec.name}</h3>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{rec.title}</p>
            </div>
            <div className="w-10 h-px bg-border" />

            <div className="relative">
                <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? 'auto' : '4.5rem' }} // approx 3 lines (1.5rem line-height * 3)
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <p className="text-sm leading-relaxed text-muted-foreground font-light whitespace-pre-line">
                        {rec.text}
                    </p>
                </motion.div>

                {/* Gradient overlay when collapsed */}
                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                )}

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 text-xs uppercase tracking-widest font-bold text-foreground hover:text-muted-foreground transition-colors flex items-center gap-1 relative z-10"
                >
                    {isExpanded ? (
                        <>Show Less <ChevronUp className="w-3 h-3" /></>
                    ) : (
                        <>Read More <ChevronDown className="w-3 h-3" /></>
                    )}
                </button>
            </div>
        </motion.div>
    );
};

export const EndorsedSection: React.FC = () => {
    return (
        <section id="recommendations" className="px-4 md:px-6 min-h-screen snap-start flex items-center relative overflow-hidden" aria-label="Recommendations section">
            {/* Geometric box frame - increased padding on mobile */}
            <div className="absolute inset-8 border border-border pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full py-12 md:py-0">
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

                {/* Mobile Layout: All 3 visible, text truncated */}
                <div className="md:hidden space-y-8">
                    {recommendations.map((rec, i) => (
                        <MobileRecommendationCard key={i} rec={rec} index={i} />
                    ))}
                </div>

                {/* Desktop Layout: Asymmetric Grid (Hidden on Mobile) */}
                <div className="hidden md:grid grid-cols-2 gap-8 md:gap-12">
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

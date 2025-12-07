"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SkillGroup } from '@/lib/strapi';

const SectionHeading = ({ lines, opacities, size }: any) => (
    <h2 className="font-bold font-heading text-6xl md:text-9xl leading-none tracking-tighter">
        {lines.map((line: string, i: number) => (
            <span key={i} className={`block ${i > 0 ? '-mt-[0.5em]' : ''}`} style={{ opacity: opacities[i] / 100 }}>
                {line}
            </span>
        ))}
    </h2>
);

interface ArsenalSectionProps {
    skills: SkillGroup[];
}

export const ArsenalSection: React.FC<ArsenalSectionProps> = ({ skills }) => {
    return (
        <section id="skills" className="px-4 md:px-6 max-w-7xl mx-auto min-h-screen snap-start flex items-center relative overflow-hidden" aria-label="Skills section">
            {/* Geometric line accents - hidden on mobile */}
            <div className="hidden md:block absolute top-1/4 left-12 w-px h-32 bg-gradient-to-b from-primary to-transparent" />
            <div className="hidden md:block absolute bottom-1/4 right-12 w-32 h-px bg-gradient-to-l from-primary to-transparent" />

            <div className="w-full">
                <div className="mb-8 md:mb-12">
                    <SectionHeading lines={['ARSE', 'NAL']} opacities={[100, 50]} size="large" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-8">
                    {skills.map((group, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="space-y-3 md:space-y-4 group"
                        >
                            <div className="border-b-2 border-primary/30 group-hover:border-primary transition-colors pb-2 relative">
                                <h3 className="text-xs uppercase tracking-widest text-foreground font-bold">{group.name}</h3>
                                {/* Animated underline */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                                    className="absolute bottom-0 left-0 h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="space-y-2">
                                {group.skills.map((skill, j) => (
                                    <motion.div
                                        key={j}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 + j * 0.05 }}
                                        className="flex items-center gap-2 group/skill"
                                    >
                                        {/* Skill dot indicator */}
                                        <motion.div
                                            className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover/skill:bg-primary transition-colors flex-shrink-0"
                                            whileHover={{ scale: 1.5 }}
                                        />
                                        <div className="text-sm text-muted-foreground font-light group-hover/skill:text-foreground transition-colors">
                                            {skill}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
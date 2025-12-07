"use client";

import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { SectorsSection } from '@/components/SectorsSection';
import { ManifestoSection } from '@/components/ManifestoSection';
import { JourneySection } from '@/components/JourneySection';
import { ArsenalSection } from '@/components/ArsenalSection';
import { EndorsedSection } from '@/components/EndorsedSection';
import { Footer } from '@/components/Footer';
import { Experience, Industry, Recommendation, SkillGroup, Philosophy } from '@/lib/strapi';

interface PortfolioClientProps {
    experiences: Experience[];
    industries: Industry[];
    skills: SkillGroup[];
    recommendations: Recommendation[];
    philosophies: Philosophy[];
}

export const PortfolioClient: React.FC<PortfolioClientProps> = ({
    experiences,
    industries,
    skills,
    recommendations,
    philosophies
}) => {
    const [activeSection, setActiveSection] = useState('home');

    // Smooth scroll to section
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Update active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'skills', 'recommendations'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Adjust threshold for better detection
                    return rect.top <= 300 && rect.bottom >= 300;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
            <HeroSection />
            <SectorsSection industries={industries} />
            <ManifestoSection philosophies={philosophies} />
            <JourneySection experiences={experiences} />
            <ArsenalSection skills={skills} />
            <EndorsedSection recommendations={recommendations} />
            <Footer />
        </div>
    );
};
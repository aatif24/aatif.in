"use client";
import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { SectorsSection } from '@/components/SectorsSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { JourneySection } from '@/components/JourneySection';
import { ArsenalSection } from '@/components/ArsenalSection';
import { EndorsedSection } from '@/components/EndorsedSection';

const Portfolio = () => {
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
          return rect.top <= 150 && rect.bottom >= 150;
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
      <StatsSection />
      <SectorsSection />
      <PhilosophySection />
      <JourneySection />
      <ArsenalSection />
      <EndorsedSection />
    </div>
  );
};

export default Portfolio;
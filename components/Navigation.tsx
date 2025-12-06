"use client";
import React from 'react';

interface NavigationProps {
    activeSection: string;
    scrollToSection: (id: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
    const navItems = ['Home', 'About', 'Experience', 'Skills', 'Recs'];
    const navMap: Record<string, string> = {
        'Home': 'home',
        'About': 'about',
        'Experience': 'experience',
        'Skills': 'skills',
        'Recs': 'recommendations'
    };

    return (
        <nav className="sticky top-4 md:top-6 left-0 right-0 z-50 mx-auto w-fit px-4" aria-label="Main navigation">
            <div className="bg-background/80 backdrop-blur-md border border-border rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm">
                <div className="flex gap-3 md:gap-6 text-xs md:text-sm font-medium text-muted-foreground">
                    {navItems.map((item) => {
                        const sectionId = navMap[item];
                        return (
                            <button
                                key={item}
                                onClick={() => scrollToSection(sectionId)}
                                className={`hover:text-foreground transition-colors whitespace-nowrap px-2 md:px-3 py-1 ${activeSection === sectionId ? 'text-foreground font-bold' : ''
                                    }`}
                                aria-label={`Navigate to ${item} section`}
                                aria-current={activeSection === sectionId ? 'page' : undefined}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

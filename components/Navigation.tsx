"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
    activeSection: string;
    scrollToSection: (id: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = ['Home', 'About', 'Experience', 'Skills', 'Recs'];
    const navMap: Record<string, string> = {
        'Home': 'home',
        'About': 'about',
        'Experience': 'experience',
        'Skills': 'skills',
        'Recs': 'recommendations'
    };

    const handleNavClick = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsOpen(false);
    };

    return (
        <motion.nav
            layout
            className="fixed md:sticky top-4 md:top-6 right-4 md:right-auto md:left-0 md:mx-auto z-50 w-fit"
            initial={false}
            aria-label="Main navigation"
        >
            <motion.div
                layout
                className="bg-background/80 backdrop-blur-md border border-border rounded-full px-2 py-2 md:px-6 md:py-3 shadow-sm overflow-hidden"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="flex items-center">
                    {/* Mobile: Toggle button + expandable nav */}
                    <div className="md:hidden flex items-center">
                        <motion.button
                            layout="position"
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-full hover:bg-muted transition-colors z-10"
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </motion.button>

                        <AnimatePresence mode="wait">
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: 'auto' }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="flex gap-1 overflow-hidden ml-1"
                                >
                                    {navItems.map((item) => {
                                        const sectionId = navMap[item];
                                        return (
                                            <button
                                                key={item}
                                                onClick={() => handleNavClick(sectionId)}
                                                className={`hover:text-foreground transition-colors whitespace-nowrap px-3 py-1 text-xs font-medium ${activeSection === sectionId ? 'text-foreground font-bold' : 'text-muted-foreground'
                                                    }`}
                                                aria-label={`Navigate to ${item} section`}
                                            >
                                                {item}
                                            </button>
                                        );
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Desktop: Always visible nav */}
                    <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground px-2">
                        {navItems.map((item) => {
                            const sectionId = navMap[item];
                            return (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(sectionId)}
                                    className={`hover:text-foreground transition-colors whitespace-nowrap px-3 py-1 ${activeSection === sectionId ? 'text-foreground font-bold' : ''
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
            </motion.div>
        </motion.nav>
    );
};

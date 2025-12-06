"use client";
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="border-t snap-start border-border mt-12 py-8 px-4 md:px-6 relative overflow-hidden">
            {/* Geometric accents */}
            <div className="hidden md:block absolute top-4 left-12 w-12 h-12 border border-border" />
            <div className="hidden md:block absolute bottom-4 right-12 w-8 h-8 rounded-full border border-border" />
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <div className="text-center md:text-left">
                    <p className="font-bold text-foreground">Aatif Shaikh</p>
                    <p className="text-xs">Lead Fullstack Engineer</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://www.linkedin.com/in/aatif24/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="https://github.com/aatif24" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                    <a href="mailto:saatif24@gmail.com" className="hover:text-foreground transition-colors">Email</a>
                </div>

                <div className="text-xs text-center md:text-right">
                    <p>© {new Date().getFullYear()} All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

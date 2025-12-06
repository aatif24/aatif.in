import React from 'react';

interface SectionHeadingProps {
    lines: string[];
    opacities?: number[];
    size?: 'default' | 'large' | 'small';
    className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
    lines,
    opacities = [100, 70, 40],
    size = 'default',
    className = ''
}) => {
    const sizeClasses = {
        large: 'text-5xl sm:text-6xl md:text-7xl lg:text-9xl',
        default: 'text-4xl sm:text-5xl md:text-6xl lg:text-8xl',
        small: 'text-3xl sm:text-4xl md:text-5xl lg:text-7xl'
    };

    // Map opacity values to Tailwind classes
    const getOpacityClass = (opacity: number) => {
        switch (opacity) {
            case 100: return 'text-foreground';
            case 70: return 'text-foreground/70';
            case 50: return 'text-foreground/50';
            case 40: return 'text-foreground/40';
            default: return 'text-foreground/50';
        }
    };

    const getZIndex = (index: number) => {
        switch (index) {
            case 0: return 'z-20';
            case 1: return 'z-10';
            case 2: return 'z-0';
            default: return 'z-0';
        }
    };

    return (
        <h2 className={`font-bold font-heading flex flex-col items-start leading-none tracking-tighter ${sizeClasses[size]} ${className}`}>
            {lines.map((line, index) => (
                <span
                    key={index}
                    className={`${getOpacityClass(opacities[index] || 50)} ${index > 0 ? '-mt-[0.5em]' : ''} ${getZIndex(index)} relative`}
                >
                    {line}
                </span>
            ))}
        </h2>
    );
};

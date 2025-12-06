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

    return (
        <h2 className={`font-bold font-heading flex flex-col items-start leading-none tracking-tighter ${sizeClasses[size]} ${className}`}>
            {lines.map((line, index) => (
                <span
                    key={index}
                    className={`text-foreground/${opacities[index] || 50} ${index > 0 ? '-mt-[0.5em]' : ''} z-${20 - index * 10}`}
                >
                    {line}
                </span>
            ))}
        </h2>
    );
};

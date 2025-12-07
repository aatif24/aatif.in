"use client";
import React from 'react';
import {
    Plane, Heart, Building2, ShoppingCart, Rocket,
    Code2, Activity, Server, Database, Cloud, Smartphone, Globe,
    Briefcase, Terminal, Laptop
} from 'lucide-react';

const iconMap: Record<string, any> = {
    Plane,
    Heart,
    Building2,
    ShoppingCart,
    Rocket,
    Code2,
    Activity,
    Server,
    Database,
    Cloud,
    Smartphone,
    Globe,
    Briefcase,
    Terminal,
    Laptop,
};

interface IconManagerProps {
    iconName: string;
    className?: string;
}

export const IconManager: React.FC<IconManagerProps> = ({ iconName, className }) => {
    const IconComponent = iconMap[iconName];

    if (!IconComponent) {
        return null;
    }

    return <IconComponent className={className} />;
};

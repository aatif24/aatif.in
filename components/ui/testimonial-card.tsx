import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
    name: string;
    role: string;
    company: string;
    imageSrc: string;
    text: string;
    date: string;
    className?: string;
}

export function TestimonialCard({
    name,
    role,
    company,
    imageSrc,
    text,
    date,
    className,
}: TestimonialCardProps) {
    return (
        <div
            className={cn(
                "group flex flex-col gap-5 p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:shadow-blue-500/10",
                className
            )}
        >
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white/10 group-hover:border-blue-500/50 transition-colors">
                        <Image
                            src={imageSrc}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-lg text-foreground font-heading">{name}</h3>
                        <p className="text-sm text-muted-foreground">{role} at {company}</p>
                    </div>
                </div>
                <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
            </div>

            <div className="relative">
                <p className="text-base leading-relaxed text-muted-foreground/90 font-light">
                    &quot;{text}&quot;
                </p>
            </div>

            <div className="mt-auto pt-4 border-t border-white/5">
                <p className="text-xs text-muted-foreground/60 font-medium uppercase tracking-wider">{date}</p>
            </div>
        </div>
    );
}

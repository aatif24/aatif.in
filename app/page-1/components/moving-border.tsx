"use client";
import React, { ElementType, useRef } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionTemplate,
    useMotionValue,
    useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    borderRadius?: string;
    children: React.ReactNode;
    as?: ElementType;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
    className?: string;
}

export function Button({
                           borderRadius = "1.75rem",
                           children,
                           as: Component = "button",
                           containerClassName,
                           borderClassName,
                           duration,
                           className,
                           ...otherProps
                       }: ButtonProps) {
    return (
        <Component
            className={cn(
                "bg-transparent relative p-[1px] overflow-hidden",
                containerClassName
            )}
            style={{ borderRadius }}
            {...otherProps}
        >
            <div
                className="absolute inset-0"
                style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
            >
                <MovingBorder duration={duration} rx="30%" ry="30%">
                    <div
                        className={cn(
                            "h-24 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
                            borderClassName
                        )}
                    />
                </MovingBorder>
            </div>

            <div
                className={cn(
                    "relative border border-[0.5px] backdrop-blur-xl flex items-center justify-center w-full h-full antialiased",
                    className
                )}
                style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
            >
                {children}
            </div>
        </Component>
    );
}

interface MovingBorderProps {
    children: React.ReactNode;
    duration?: number;
    rx?: string;
    ry?: string;
}

export const MovingBorder: React.FC<MovingBorderProps> = ({
                                                              children,
                                                              duration = 2000,
                                                              rx,
                                                              ry,
                                                          }) => {
    const pathRef = useRef<SVGRectElement | null>(null);
    const progress = useMotionValue<number>(0);

    useAnimationFrame((time) => {
        if (pathRef.current) {
            const length = pathRef.current.getBBox().width * 2 + pathRef.current.getBBox().height * 2;
            if (length) {
                const pxPerMillisecond = length / duration;
                progress.set((time * pxPerMillisecond) % length);
            }
        }
    });

    const x = useTransform(progress, (val) =>
        pathRef.current ? pathRef.current.getBoundingClientRect().x + val : 0
    );
    const y = useTransform(progress, (val) =>
        pathRef.current ? pathRef.current.getBoundingClientRect().y + val : 0
    );

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="absolute h-full w-full"
                width="100%"
                height="100%"
            >
                <rect
                    fill="none"
                    width="100%"
                    height="100%"
                    rx={rx}
                    ry={ry}
                    ref={pathRef}
                />
            </svg>
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "inline-block",
                    transform,
                }}
            >
                {children}
            </motion.div>
        </>
    );
};
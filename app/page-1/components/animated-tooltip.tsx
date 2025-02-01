"use client";
import Image from "next/image";
import React, {MouseEventHandler, useState} from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
                                    items,
                                }: {
    items: {
        id: number;
        name: string;
        designation?: string;
        image: string;
    }[];
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = {stiffness: 100, damping: 5};
    const x = useMotionValue(0); // going to set this value on mouse move
    // rotate the tooltip
    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    );
    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    );
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const handleMouseMove: MouseEventHandler<HTMLImageElement> | undefined = (event: any) => {
        const halfWidth = event.target.halfWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
    };

    return (
        <>
            {items.map((item) => (
                <div
                    className="cursor-help relative group"
                    key={item.name}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence mode="popLayout">
                        {hoveredIndex === item.id && (
                            <motion.div
                                initial={{opacity: 0, y: 20, scale: 0.6}}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 10,
                                    },
                                }}
                                exit={{opacity: 0, y: 20, scale: 0.6}}
                                style={{
                                    translateX: translateX,
                                    rotate: rotate,
                                    whiteSpace: "nowrap",
                                }}
                                className="absolute -top-16   -translate-x-[70%] bg-slate-900 rounded-lg p-2 w-fit"
                            >


                                <div className="relative font-bold text-white z-30 text-base">
                                    {item.name}
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full ">
                                        <div
                                            className="absolute left-[45%] -translate-x-1/2 z-30 w-[60%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px "/>
                                        <div
                                            className="absolute  left-[50%] -translate-x-1/2 w-[80%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px "/>
                                    </div>
                                </div>
                                <div className="text-white text-xs">{item?.designation}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <Image
                        onMouseMove={handleMouseMove}
                        height={100}
                        width={100}
                        src={item.image}
                        alt={item.name}
                        className="grayscale object- !m-0 !p-1 object-top rounded-lg h-12 w-fit  group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
                    />
                </div>
            ))}
        </>
    );
};

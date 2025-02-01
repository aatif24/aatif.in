"use client";

import {cn} from "@/lib/utils";
import React, {useEffect, useState} from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
                                        items,
                                        direction = "left",
                                        speed = "fast",
                                        pauseOnHover = true,
                                        className,
                                    }: {
    items: {
        image: string;
        name: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  h-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex h-full min-w-full  shrink-0 gap-4 py-4 w-max flex-nowrap  ",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="flex  justify-end items-end relative rounded-2xl   px-8 "
                        key={item.name}
                    >
                        <div className="flex  z-20 mt-6  flex-row justify-center items-center">
                            <span className="flex flex-col items-center justify-center gap-1">
                                <Image alt={""} width={50} height={50} src={item.image} className={"grayscale w-8"}/>
                                <span className=" text-xs leading-[1.6] text-black  ">
                                    {item.name}
                                </span>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

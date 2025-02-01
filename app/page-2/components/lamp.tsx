"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
    return (
        <LampContainer>
            <motion.h1
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="absolute  right-0 -bottom-[20.3rem] font-medium "
            >
                <div className="flex-1 flex flex-col items-end justify-end h-full p-4 w-full ">
                    <p className={"text-[6rem] p-0 m-0 leading-tight -mb-4 text-transparent bg-clip-text bg-gradient-to-t  from-transparent via-foreground via-50% to-foreground"}>Aatif</p>
                    <p className={"text-[3rem] p-0 m-0 leading-tight font-thin text-foreground/70"}>Shaikh</p>
                    <p className="-mb-1 text-sm md:text-lg  font-sans font-light text-secondary">
                        Software Developer <span className={" font-sans hidden md:inline text-secondary"}>| Expertise in Scalable Solutions</span>
                    </p>
                </div>
            </motion.h1>
        </LampContainer>
    );
}

export const LampContainer = ({
                                  children,
                                  className,
                              }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "relative flex  h-full flex-col items-end justify-end overflow-hidden w-full z-0",
                className
            )}
        >
            <div className="absolute bottom-24 right-36 flex scale-y-125 items-center justify-center isolate z-0 ">
                <motion.div
                    initial={{opacity: 0, width: "8rem"}}
                    whileInView={{opacity: 1, width: "12rem"}}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-24 bottom-4 overflow-visible w-[8rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, width: "8rem" }}
                    whileInView={{ opacity: 1, width: "12rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-24 bottom-4 w-[8rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "12rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-12  -translate-y-[4rem] bg-cyan-400 blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "12rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
                ></motion.div>

                {/*<div className="absolute inset-auto z-40 h-24 w-full -translate-y-[12.5rem] bg-slate-950 "></div>*/}
            </div>

            <div className="relative rounded-3xl z-50 w-full flex -translate-y-80 flex-col items-center px-5">
                {children}
            </div>
        </div>
    );
};

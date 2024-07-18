"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function Experience() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-primary-foreground rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-11/12 md:w-full rounded-lg max-w-[500px]  h-fit md:h-fit md:max-h-[90%]  flex flex-col bg-primary-foreground sm:rounded-3xl overflow-hidden"
                        >


                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-base"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-primary"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base  md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,primary,primary,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="flex flex-col lg:w-3/4 items-start gap-6 text-center sm:text-left">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="sm:grid grid-cols-3 gap-4  w-full">
                            <motion.p
                                layoutId={`title-1-${card.title}-${id}`}
                                className="hidden sm:inline-block font-medium text-neutral-800 dark:text-neutral-200  md:text-left text-base"
                            >
                                {card.description}
                            </motion.p>
                            <div className="flex sm:col-span-2 justify-start  flex-col">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200  md:text-left text-base"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.h4
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400  md:text-left text-base"
                                >
                                    {card.description}
                                </motion.h4>
                                <motion.h5
                                    layoutId={`longDescription-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400  md:text-left text-base"
                                >
                                    {card?.longDescription}
                                </motion.h5>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        description: "Dec 2021 - Present",
        title: "Airfi.Aero",
        longDescription: "Senior Software Developer, enhancing In-flight Entertainment systems and optimizing performance.",
        ctaText: "Visit Airfi.Aero",
        ctaLink: "https://airfi.aero",
        content: () => {
            return (
                <ul className="space-y-4">
                    <li>Significantly contributed to optimising the performance of the AirFi Platform an In-flight-
                        Entertainment platform</li>
                    <li>Played a central role in developing a versatile Remote Sync Service for content synchronisation
                        application.</li>
                    <li>Crafted a dashboard for monitoring platform as well as hardware performance.</li>
                    <li>Involved in comprehensive refactoring of various critical services vital for the smooth operation of
                        the AirFi platform.</li>
                    <li>Key Contributor in Data Migrations of multiple millions of records from legacy data stores into
                        modern and more robust MongoDB</li>
                    <li>Strategic Implementer of In-Flight Live Feeds Platform</li>
                </ul>
            );
        },
    },
    {
        description: "Aug 2019 - Nov 2020",
        title: "Bombayworks",
        longDescription: "Senior Full-Stack Developer, leading projects and ensuring seamless full-stack solutions.",
        ctaText: "Cehckout BW",
        ctaLink: "https://bombayworks.com",
        content: () => {
            return (
                <ul className="space-y-4">
                    As a full-stack developer in an digital agency:
                    <li>Led diverse full-stack projects from inception to deployment, ensuring alignment with business
                        goals.
                    </li>
                    <li>Collaborated closely with cross-functional teams to deliver solutions that meet user needs and
                        business objectives.
                    </li>
                    <li>Proficient in frontend (React) and backend (Node.js), utilizing various databases (MongoDB, MySQL)
                        for scalable solutions.
                    </li>
                    <li>Applied Agile methodologies like Scrum and Kanban for efficient project management and
                        continuous improvement.
                    </li>
                    <li>Independently conceptualised, designed, and implemented an uptime checker tool using Node.js,
                        React.js and timeseries db like InfluxDB, ensuring reliable monitoring of system availability and
                        performance.
                    </li>
                </ul>
            );
        },
    },

    {
        description: "Jan 2016 – Jun 2019",
        title: "Healthdekho (Previously TGBTT)",
        longDescription: "Senior Software Developer & Lead, driving tech stack migrations and performance improvements.",
        ctaText: "Healthdekho",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <ul className="space-y-4">

                    <li>As part of the core tech team in the transition of TGBTT to Healthdekho, I contributed significantly
                        to the end-to-end product lifecycle and decision-making processes.
                    </li>
                    <li>Played a crucial role in optimizing operations and orchestrating seamless migrations from legacy
                        systems to modern tech stacks, leveraging Node.js, MongoDB, and React.js to enhance performance
                        and scalability
                    </li>
                </ul>
            );
        },
    },
    {
        description: "May 2014 – Dec 2015",
        title: "Codebox",
        longDescription: "Associate Engineer, diving into development and honing problem-solving skills.",
        ctaText: "Visit",
        ctaLink: "https://www.codebox.in",
        content: () => {
            return (
                <p>
                    As a fresh-faced developer, my enthusiastic approach led me to dive headfirst into every aspect of
                    development, eager to learn and tackle any challenge. This mindset cultivated a deep understanding
                    of problem-solving methodologies and honed my ability to approach tasks with creativity and
                    determination.
                </p>
            );
        },
    },
];

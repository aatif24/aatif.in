import React from "react";
import Image from "next/image";
import {AnimatedTooltip} from "@/app/page-1/components/animated-tooltip";
import {SparklesCore} from "@/app/page-1/components/sparkles";
import {FlipWords} from "@/app/page-1/components/flipword";
import {Button} from "@/app/page-1/components/moving-border";

const skills = [
    {id: 1, name: "JavaScript", image: "https://aatif.in/icons/javascript-colored.svg"},
    {id: 2, name: "TypeScript", image: "https://aatif.in/icons/typescript-colored.svg"},
    {id: 3, name: "MongoDB", image: "https://aatif.in/icons/mongodb-colored.svg"},
    {id: 4, name: "Node.js", image: "https://aatif.in/icons/nodejs-colored.svg"},
    {id: 5, name: "Next.js", image: "https://aatif.in/icons/nextjs-white.svg"},
    {id: 6, name: "Tailwind CSS", image: "/brands/tailwind.svg"},
    {id: 7, name: "Bun", image: "https://aatif.in/icons/bun.svg"},
];

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-3xl p-8 rounded-lg">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold relative inline-block">
                        AATIF SHAIKH
                        <div
                            className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 w-[75%] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px">
                            <SparklesCore
                                id="titleSparkles"
                                background="transparent"
                                minSize={0.6}
                                maxSize={1.4}
                                particleDensity={300}
                                className="w-full h-8 absolute -top-4"
                                particleColor="#FFFFFF"
                            />
                        </div>
                    </h1>
                    <p className="mt-2 text-lg text-primary">
                        Software Developer | Expertise in Scalable Solutions
                    </p>
                </div>

                {/* Introduction */}
                <div className="mt-6 text-center ">
                    Building
                    <FlipWords
                        words={["efficient", "reliable", "resilient", "creative"]}
                        className="w-[6rem] text-accent text-xl font-semibold text-center"
                        duration={3000}
                    />
                    software solutions with a commitment to delivering exceptional user experiences using{" "}
                    <span className="">Node.js</span> and{" "}
                    <span className="">Next.js</span>.
                </div>

                {/* Call-to-Action Buttons */}
                <div className="relative mt-8 w-full flex justify-center gap-4">

                    <a
                        href="https://github.com/aatif24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center p-1 border border-[0.5px] rounded-lg"
                    >
                        <Image
                            src="https://aatif.in/brands/icons8-github-white.svg"
                            alt="GitHub"
                            height={0}
                            width={100}
                            className="h-8 w-8"
                        />
                        <span>Explore My GitHub</span>
                    </a>

                    <Button
                        duration={5000}
                        className=" w-full"
                        borderClassName="w-12 h-12"
                        borderRadius="0.7rem"
                    >
                        <a
                            href="https://www.linkedin.com/in/aatif24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-2 items-center ps-1 pe-2"
                        >
                            <Image
                                src="/linkedin.svg"
                                alt="LinkedIn"
                                height={0}
                                width={100}
                                className="h-10 w-10  grayscale"
                            />
                            <span>Connect on LinkedIn</span>
                        </a>
                    </Button>
                </div>

                {/* Skills Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold ">Technical Skills</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <AnimatedTooltip items={skills}/>
                    </div>
                </div>

                {/* Footer Section */}
                <footer className="mt-12 text-center text-sm">
                    <div className="flex justify-center gap-4 mb-4">
                        <a
                            href="https://github.com/aatif24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" transition duration-200"
                        >
                            <i className="fab fa-github text-2xl"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aatif24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" transition duration-200"
                        >
                            <i className="fab fa-linkedin text-2xl"></i>
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
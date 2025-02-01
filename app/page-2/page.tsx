import React from "react";
import Image from "next/image";
import {SparklesCore} from "@/app/page-1/components/sparkles";
import {InfiniteMovingCardsDemo} from "@/app/page-2/components/cards";
import {LampDemo} from "@/app/page-2/components/lamp";

export default function Home() {
    return (
        <div className="relative h-screen flex items-center bg-foreground justify-center">
            <div className="fixed w-full flex items-center justify-between top-0 px-4 p-2 ">
                <Image src={"/logo.svg"} width="1000" height={"1000"} alt={"aatif"} className={"w-8"}/>
                <div className=" flex items-center justify-center gap-2">
                    <Image
                        src="https://aatif.in/brands/icons8-github.svg"
                        alt="LinkedIn"
                        height={0}
                        width={100}
                        className="w-8 h-8 grayscale"
                    />
                    <Image
                        src="https://aatif.in/brands/icons8-linkedin.svg"
                        alt="LinkedIn"
                        height={0}
                        width={100}
                        className="w-10 h-10 grayscale"
                    />

                </div>
            </div>
            <div
                className="relative rounded-3xl overflow-hidden z-50 lg:h-3/4 xl:w-[40%] md:h-3/4 md:w-8/12 h-3/4 w-11/12 bg-slate-950 text-foreground rounded-br-none">
                <SparklesCore
                    id="titleSparkles"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={1}
                    className="w-full h-full z-50 absolute -top-4"
                    particleColor="#FFFFFF"
                />
                <LampDemo/>
            </div>
            <div className="w-2/3 md:w-1/2 h-1/3 bg-accent absolute bottom-0 right-0 z-0">
            </div>
            <div className="w-2/3 md:w-1/2 hidden md:block absolute bottom-0 left-0 z-0">
                <InfiniteMovingCardsDemo/>
            </div>
        </div>
    );
}

import Image from "next/image";
import React from "react";
import Calendar from "@/app/(page-4)/components/calendar";

export default function Page3() {
    return <div className={"h-screen overflow-hidden relative flex items-center justify-center bg-background-3"}>
        <div className={"h-[80%] w-[80%] overflow-hidden relative drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] "}>
            <Image src={"/logo-4.svg"} width="1000" height={"1000"} alt={"aatif"}
                   className={" absolute left-10 top-10 w-8"}/>
            <div className="flex h-full bg-background">
                <div className="absolute top-[25%] left-10 xl:left-1/4  xl:-translate-x-1/2 xl:top-1/4 z-50">
                    <p className={"text-7xl font-bold"}>Aatif</p>
                    <p className={"text-7xl font-bold"}>Shaikh</p>
                </div>
                <div className="w-1/2 h-full relative z-20">
                    <div
                        className="xl:absolute xl:block hidden h-[25vh] w-80 bottom-24 top-1/2 left-0 transform  bg-background-2 ">
                        <div className="absolute top-1/2 left-1/2 w-full -translate-y-1/2 font-sans">
                            <p className={"font-overpass tracking-widest"}>Expertise in Scalable Solutions</p>
                            <p className={"text-sm font-light text-slate-500 mt-3 font-overpass leading-6 tracking-widest"}>With
                                over a decade of expertise in building scalable and high-performance solutions, I
                                specialize
                                in crafting robust, cloud-based applications that drive efficiency and growth.</p>
                        </div>
                    </div>
                    <div
                        className="absolute h-10 xl:w-1/3 w-1/2 xl:bottom-14 bottom-6 xl:left-0 xl:transform  bg-accent">
                        <div className="absolute xl:-right-[6.5rem] left-10 top-1/2 -translate-y-1/2">
                            <div className="flex gap-2 itesm-center justify-center">
                                <p className={" tracking-wider "}>Software</p>
                                <p className={"tracking-wider "}>Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 bg-background-2 relative ">

                    <div
                        className="xl:absolute xl:block hidden h-[25vh] w-80 bottom-24 top-1/2 right-0 transform  bg-background ">
                        <div className="absolute top-1/2 right-1/3 w-full -translate-y-1/2 font-sans">
                            <p className={"font-overpass tracking-widest"}>Full-Stack Development</p>
                            <p className={"text-sm font-light text-slate-500 mt-3 font-overpass leading-6 tracking-widest"}>Expert
                                in Node.js, Next.js, TypeScript, MongoDB, MySQL, PostgreSQL, and Tailwind CSS for
                                high-performance applications.</p>
                        </div>
                    </div>
                    <div className="absolute h-10 xl:w-1/3 w-1/2 xl:bottom-14 bottom-6 right-0 xl:right-0 xl:transform  bg-background">
                        <div className="absolute left-2  top-1/2 -translate-y-1/2">
                            <div className="flex gap-1">
                                <Image
                                    src="/linkedin.svg"
                                    alt="LinkedIn"
                                    height={0}
                                    width={100}
                                    className="w-9 h-9 grayscale"
                                />
                                <Calendar/>
                            </div>
                        </div>
                    </div>

                    <p className={"xl:absolute top-[5%] left-0 text-[12rem] font-black font-overpass leading-none   text-transparent z-10 bg-clip-text bg-gradient-to-r  from-background-2 to-background/60"}>AATIF</p>
                    <p className={"xl:absolute top-[20%] -right-1/4  text-[14rem] font-black font-overpass leading-none  text-transparent z-10 bg-clip-text bg-gradient-to-l from-background-2 to-background/40"}>SHAIKH</p>
                </div>
            </div>
        </div>
    </div>
}
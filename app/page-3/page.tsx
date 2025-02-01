import Image from "next/image";
import React from "react";

export default function Page3() {
    return <div className={"h-screen overflow-hidden relative "}>
            <Image src={"/logo-2.svg"} width="1000" height={"1000"} alt={"aatif"} className={" absolute left-10 top-10 w-8"}/>
        <div className="flex h-full">
            <div className="w-1/2 h-full relative z-20">
                <div className="absolute  left-1/2 transform -translate-x-1/2 top-1/4">
                    <p className={"text-7xl font-bold"}>Aatif</p>
                    <p className={"text-7xl font-bold"}>Shaikh</p>
                </div>
                <div className="absolute h-56 w-80 top-1/2 left-0 transform  bg-background-2 ">
                    <div className="absolute top-1/2 left-1/2 w-full -translate-y-1/2 font-sans">
                        <p className={"font-overpass tracking-widest"}>Expertise in Scalable Solutions</p>
                        <p className={"text-sm font-light text-slate-500 mt-3 font-overpass leading-6 tracking-widest"}>With
                            over a decade of expertise in building scalable and high-performance solutions, I specialize
                            in crafting robust, cloud-based applications that drive efficiency and growth.</p>
                    </div>
                </div>
                <div className="absolute h-12 w-1/3 bottom-24 left-0 transform  bg-accent">
                    <div className="absolute -right-[6.5rem] top-1/2 -translate-y-1/2">
                        <div className="flex gap-2 itesm-center justify-center">
                            <p className={" tracking-wider text-background"}>Software</p>
                            <p className={"tracking-wider text-accent"}>Developer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 bg-background-2 relative ">

                <div className="absolute h-56 w-80 top-1/2 right-0 transform  bg-background z-20">
                    <div className="absolute top-1/2 right-1/3 w-full -translate-y-1/2 font-sans">
                        <p className={"font-overpass tracking-widest"}>Full-Stack Development</p>
                        <p className={"text-sm font-light text-slate-500 mt-3 font-overpass leading-6 tracking-widest"}>Expert
                            in Node.js, Next.js, TypeScript, MongoDB, MySQL, PostgreSQL, and Tailwind CSS for
                            high-performance applications.</p>
                    </div>
                </div>
                <div className="absolute h-12 w-1/3 bottom-24 right-0 transform bg-background z-20">
                    <div className="absolute left-6 -translate-x-1/2 top-1/2 -translate-y-1/2">
                        <div className="flex gap-2">
                            <Image
                                src="https://aatif.in/brands/icons8-linkedin.svg"
                                alt="LinkedIn"
                                height={0}
                                width={100}
                                className="w-9 h-9 grayscale"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <p className={"absolute top-0 left-1/2 -translate-x-1/2 text-[20rem] p-0 m-0 leading-tight   text-transparent z-10 bg-clip-text bg-gradient-to-r  from-background-2/50 to-background/50"}>AATIF</p>
        <p className={"absolute bottom-0 -right-1/4  text-[20rem] p-0 m-0 leading-tight  text-transparent z-10 bg-clip-text bg-gradient-to-r  from-background-2/50 to-background/50"}>SHAIKH</p>
    </div>
}
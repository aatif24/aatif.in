import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative flex min-h-screen flex-col justify-center px-4 md:px-10 lg:px-20 pt-20 overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px] -z-10" />

            <div className="z-10 max-w-5xl">
                <div className="mb-8 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-md">
                    <span className="mr-2 flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Open to new opportunities
                </div>

                <h1 className="mb-6 text-6xl font-bold tracking-tight text-foreground sm:text-8xl lg:text-9xl font-heading leading-[0.9]">
                    Building <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 animate-gradient-x">
                        Scalable Future.
                    </span>
                </h1>

                <p className="mb-10 max-w-2xl text-xl text-muted-foreground sm:text-2xl font-light leading-relaxed">
                    I&apos;m <span className="text-foreground font-medium">Aatif Shaikh</span>, a Software Developer crafting robust, cloud-native solutions that drive growth and efficiency.
                </p>

                <div className="flex flex-wrap gap-5">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105">
                        View Projects
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm">
                        Download Resume
                        <Download className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}

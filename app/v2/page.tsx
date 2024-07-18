import { Separator } from "@/components/ui/separator";
import { Experience } from "../components/experience";
import Link from "next/link";
import { Skills } from "../components/skills";
import programmingLanguages from "@/data/languages.json"
import frameworks from "@/data/frameworks.json"
export default function About() {
    return <div className="lg:px-12 lg:py-24 p-4 pb-12 relative w-full ">
        <section className="p-8">
            <p className="text-xl text-center sm:text-left ">About?</p>
            <Separator />
            <div className="space-y-4 text-lg  sm:text-xl my-4 text-center sm:text-left">
                <p className="">
                    <span className="font-semibold text-2xl">Back in 2014</span>, I embarked on my journey into the world of software development,
                    diving into the intricacies of coding with enthusiasm and curiosity.
                </p>
                <p>Fast-forward a decade, and I've had the privilege of crafting robust and scalable applications across various domains,
                    from start-ups to established corporations, and even digital product studios.</p>

                <p>Currently, I am immersed in the realm of both cloud-based and offline solutions and high-performance systems as a <span className="font-semibold text-2xl">Senior Software Developer</span> at <Link href="https://airfi.aero" target="_blank"><span className="font-semibold text-2xl">AirFi</span></Link>.
                    My role involves optimizing our In-flight Entertainment platform and innovating solutions that enhance both performance and user experience.
                    I thrive on the challenge of merging elegant design with solid engineering, and I'm particularly passionate about creating seamless, scalable solutions.
                </p>
                <p>When I'm not solving complex technical problems,
                    you might find me working up a sweat at the gym, enjoying a long bike ride through the city, or savoring a perfectly brewed cup of coffee at a local café.
                    These activities keep me grounded and inspire my creativity.
                </p>
            </div>
        </section>
        <section className="p-8">
            <p className="text-xl mt-8 text-center sm:text-left">Experience?</p>
            <Separator />
            <div className="my-4">
                <Experience />
            </div>
        </section>
        <section className="p-8">
            <p className="text-xl mt-8 text-center sm:text-left">Skills?</p>
            <Separator />
            <div className="grid md:grid-cols-2 gap-4 my-4">
                <Skills title="Programming Languages" description="" icons={programmingLanguages} />
                <Skills title="Framework & Runtime" description="" icons={frameworks} />
            </div>
        </section>
    </div >
}
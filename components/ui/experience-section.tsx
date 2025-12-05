import React from "react";

const experiences = [
    {
        company: "Tech Innovators Inc.",
        role: "Senior Software Engineer",
        period: "2020 - Present",
        description: "Leading the development of scalable cloud-native applications using Microservices architecture. Improved system performance by 40%.",
    },
    {
        company: "Digital Solutions Ltd.",
        role: "Full Stack Developer",
        period: "2017 - 2020",
        description: "Developed and maintained multiple e-commerce platforms using the MERN stack. Mentored junior developers and implemented CI/CD pipelines.",
    },
    {
        company: "Creative Web Agency",
        role: "Frontend Developer",
        period: "2015 - 2017",
        description: "Collaborated with designers to create pixel-perfect, responsive user interfaces. Specialized in React and modern CSS frameworks.",
    },
];

export function ExperienceSection() {
    return (
        <section className="py-20 px-4 md:px-10 lg:px-20 bg-background-2">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 border-l border-border hover:border-primary transition-colors duration-300">
                            <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-semibold">{exp.role}</h3>
                                <span className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded">{exp.period}</span>
                            </div>
                            <p className="text-lg text-primary mb-2">{exp.company}</p>
                            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

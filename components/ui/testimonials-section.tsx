import React from "react";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Product Manager",
        company: "Tech Innovators Inc.",
        imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60",
        text: "Aatif is an exceptional developer who consistently delivers high-quality code. His ability to translate complex requirements into scalable solutions is impressive. He was a key player in our migration to microservices.",
        date: "October 2023",
    },
    {
        name: "Michael Chen",
        role: "CTO",
        company: "Digital Solutions Ltd.",
        imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=60",
        text: "I had the pleasure of working with Aatif for 3 years. He is not only a skilled engineer but also a great mentor. His deep understanding of the MERN stack helped us build robust applications.",
        date: "August 2020",
    },
    {
        name: "Emily Davis",
        role: "Lead Designer",
        company: "Creative Web Agency",
        imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=60",
        text: "Aatif has a keen eye for detail and a strong understanding of UX/UI principles. He always ensures that the implementation matches the design perfectly. A true professional.",
        date: "May 2017",
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-20 px-4 md:px-10 lg:px-20 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Recommendations</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Here's what my colleagues and managers have to say about working with me.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
}

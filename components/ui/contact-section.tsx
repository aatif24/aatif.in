import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-20 px-4 md:px-10 lg:px-20 bg-background-3">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                    <p className="text-muted-foreground mb-8">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-4">
                        <a href="mailto:hello@aatif.in" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="h-5 w-5" />
                            hello@aatif.in
                        </a>
                        <a href="https://linkedin.com/in/aatif24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="h-5 w-5" />
                            linkedin.com/in/aatif24
                        </a>
                        <a href="https://github.com/aatif24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                            <Github className="h-5 w-5" />
                            github.com/aatif24
                        </a>
                    </div>
                </div>

                <div className="space-y-4 bg-card p-6 rounded-xl border border-border">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" placeholder="john@example.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <Textarea id="message" placeholder="Hello! I'd like to discuss..." className="min-h-[120px]" />
                    </div>
                    <Button className="w-full">Send Message</Button>
                </div>
            </div>
        </section>
    );
}

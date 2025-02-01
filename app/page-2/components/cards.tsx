"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

const skills = [
    {id: 1, name: "JavaScript", image: "https://aatif.in/icons/javascript-colored.svg"},
    {id: 2, name: "TypeScript", image: "https://aatif.in/icons/typescript-colored.svg"},
    {id: 3, name: "MongoDB", image: "https://aatif.in/icons/mongodb-colored.svg"},
    {id: 4, name: "Node.js", image: "https://aatif.in/icons/nodejs-colored.svg"},
    {id: 5, name: "Next.js", image: "https://aatif.in/icons/nextjs-white.svg"},
    {id: 6, name: "Tailwind CSS", image: "/brands/tailwind.svg"},
    {id: 7, name: "Bun", image: "https://aatif.in/icons/bun.svg"},
];
export function InfiniteMovingCardsDemo() {
    return (
        <div className=" flex flex-col antialiased items-start h-full relative overflow-hidden">
            <InfiniteMovingCards
                items={skills}
                direction="right"
                speed="fast"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];

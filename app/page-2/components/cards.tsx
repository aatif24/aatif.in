"use client";

import React from "react";
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


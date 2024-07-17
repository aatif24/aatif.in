"use client"

import * as React from "react"
import Image from 'next/image';
import Links from "../links";

export function Header() {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="w-fit">
                <Image src="/logo/logo-white-no-bg.png" alt="Aatif" height={500} width={500} className='w-14 dark:w-0 fill-black' />
                <Image src="/logo/logo-black-no-bg.png" alt="Aatif" height={500} width={500} className='w-0 dark:w-14 fill-black' />
            </div>
            <div className="hidden md:inline-block">
                <Links />
            </div>
        </div>
    )
}

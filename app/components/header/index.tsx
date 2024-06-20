"use client"

import * as React from "react"
import { FileIcon, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Calendar from "../calendar";

export function Header() {
    const { setTheme } = useTheme()

    return (
        <div className="flex items-center justify-between p-4">
            <div className="w-fit">
                <Image src="/logo/logo-black-no-bg.svg" alt="Aatif" height={0} width={0} className='w-14 dark:w-0 fill-black' />
                <Image src="/logo/logo-white-no-bg.svg" alt="Aatif" height={0} width={0} className='w-0 dark:w-14 fill-black' />
            </div>
            <div className="md:flex hidden items-center">
                <a href='mailto:saatif24@gmail.com' target='_black' title='Mail' className='hover:grayscale-0 mr-2 transition-all ease-in-out  hover:scale-125 duration-300'>
                    <Image src="/brands/icons8-gmail.svg" alt="GMail" height={0} width={0} className='w-7' />
                </a>
                <a href='https://www.linkedin.com/in/aatif-shaikh-924086145/' title='LinkedIn' target='_black' className='hover:grayscale-0 mx-2 transition-all ease-in-out  hover:scale-125  duration-300'>
                    <Image src="/brands/icons8-linkedin.svg" alt="LinkedIn" height={0} width={0} className='w-7' />
                </a>
                <a href='https://github.com/aatif24' target='_black' title='GitHub' className='hover:grayscale-0 mx-2  rounded-full transition-all ease-in-out  hover:scale-125 duration-300 '>
                    <picture>
                        <Image src={"/brands/icons8-github-white.svg"} alt="Github" height={0} width={0} className='w-0 dark:w-7 ' />
                        <Image src="/brands/icons8-github.svg" alt="Github" height={0} width={0} className='w-7 dark:w-0 ' />
                    </picture>
                </a>
                <a href='https://www.instagram.com/aatifshaikh.91/' target='_black' title='GitHub' className='hover:grayscale-0 mx-2  rounded-full transition-all ease-in-out  hover:scale-125 duration-300 '>
                    <Image src="/brands/icons8-insta.svg" alt="instagram" height={0} width={0} className='w-7' />
                </a>

                <a href='https://wa.me/919975856562' target='_black' title='GitHub' className='hover:grayscale-0 mx-2  rounded-full transition-all ease-in-out  duration-300 '>
                    <Image src="/brands/icons8-whatsapp.svg" alt="instagram" height={0} width={0} className='w-6' />
                </a>
                <Calendar className="ml-2" />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="z-50 ml-2">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

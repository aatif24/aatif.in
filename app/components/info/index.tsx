'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

import profilePic from '../../../public/photo2.jpg'
import LogoWhite from '../../../public/logo/1x/logo-white.png'
import Logoblack from '../../../public/logo/1x/logo-black.png'
import { Download, Moon, Sun } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import Links from '../links';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import Link from 'next/link';


export default function Info() {
    const { setTheme } = useTheme()
    return <div className="lg:col-span-1 bg-zinc-100 dark:bg-zinc-800 min-h-screen h-screen md:h-fit lg:h-screen w-full relative">
        <header className='fixed lg:absolute bg-zinc-100/80 dark:bg-zinc-800/80 z-10 top-0 p-4 backdrop-blur-sm w-full'>
            <div className="flex justify-between w-full">
                <Link href={"/"}>
                    <Image src={LogoWhite} height={400} width={400} className='dark:block hidden w-8' alt="aatif-shaikh" />
                    <Image src={Logoblack} height={400} width={400} className='dark:hidden block w-8' alt="aatif-shaikh" />
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="z-50 ml-2 ">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="border-0">
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
        </header>
        <div className="flex gap-8 flex-col items-center justify-center h-full pt-20 pb-10">
            <Image
                alt="Aatif Shaikh"
                className='grayscale rounded-lg max-w-[15rem] md:max-w-[10rem]'
                src={profilePic}
                placeholder="blur"
                loading="lazy"
            />
            <Separator className="w-2/3" />
            <div className="text-center p-0 m-0 px-4">
                <p className='text-4xl'>Aatif Shaikh</p>
                <p>Software Developer from Mumbai, India.</p>
                <p className='text-sm  '>Crafting innovative and scalable solutions.</p>
            </div>
            <div className='grayscale'>
                <Links />
            </div>
        </div>
    </div>
}
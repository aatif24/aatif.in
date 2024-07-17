"use client"

import * as React from "react"
import Image from 'next/image';
import Calendar from "../calendar";

export default function Links() {
    return <div className="flex items-center">
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

        <a href='https://wa.me/919975856562' target='_black' title='GitHub' className='hover:grayscale-0 mx-2  rounded-full  transition-all ease-in-out  hover:scale-125 duration-300 '>
            <Image src="/brands/icons8-whatsapp.svg" alt="instagram" height={0} width={0} className='w-6' />
        </a>
        <Calendar className="ml-2  transition-all ease-in-out  hover:scale-125 duration-300" />
    </div>
}
'use client'
import { NewspaperIcon } from '@heroicons/react/24/outline'
import { ReactComponentElement, useState } from 'react'
import Resume from './components/resume'
import Image from 'next/image'


export default function Footer(): ReactComponentElement<any> {
    const [ openResume, setOpenResume ] = useState<boolean>(false)

    return (
        <div className="flex md:hidden sticky bottom-4 mt-auto justify-center items-center">
            <a href='mailto:saatif24@gmail.com' target='_black' title='Mail' className='mx-2 transition-all ease-in-out  hover:scale-125 duration-300'>
                <Image src="/brands/icons8-gmail.svg" alt="GMail" height={0} width={0} className='w-8' />
            </a>
            <a href='https://www.linkedin.com/in/aatif-shaikh-924086145/' title='LinkedIn' target='_black' className='mx-2 transition-all ease-in-out  hover:scale-125  duration-300'>
                <Image src="/brands/icons8-linkedin.svg" alt="LinkedIn" height={0} width={0} className='w-8' />
            </a>
            <a href='https://github.com/aatif24' target='_black' title='GitHub' className='mx-2  rounded-full transition-all ease-in-out  hover:scale-125 duration-300 '>
                <picture>
                    <source srcSet={"/skills/icons8-github-white.svg"} media="(prefers-color-scheme: dark)" />
                    <Image src="/skills/icons8-github.svg" alt="Github" height={0} width={0} className='w-8' />
                </picture>
            </a>
            <a href='https://www.instagram.com/_aatif_sheikh_/' target='_black' title='GitHub' className='mx-2  rounded-full transition-all ease-in-out  hover:scale-125 duration-300 '>
                <Image src="/brands/icons8-insta.svg" alt="Instagram" height={0} width={0} className='w-8' />
            </a>
            <a href='https://twitter.com/aatif_9' target='_black' title='GitHub' className='mx-2  rounded-full transition-all ease-in-out  hover:scale-125 duration-300 '>
                <Image src="/brands/icons8-twitter.svg" alt="Twitter" height={0} width={0} className='w-8' />
            </a>
            <p className='flex p-2 transition-all text-fuchsia-500 ease-in-out duration-300 hover:scale-110 cursor-pointer' onClick={e => setOpenResume(!openResume)}><NewspaperIcon className='w-6 mr-1' /> Resume</p>

            <Resume open={openResume} setOpen={setOpenResume} />

        </div>
    )
}

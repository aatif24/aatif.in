'use client'
import { NewspaperIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useState } from 'react'
import Resume from './components/resume'

export default function Home() {
  const [ openResume, setOpenResume ] = useState<boolean>(false)
  return (
    <div className={`p-8 md:p-24 relative`}>
      <div>
        <p className='lg:-ml-4 bg-slate-600 w-fit p-1 rounded-xl text-slate-200 text-xs its-me relative after:absolute after:w-0 after:h-0 after:border-t-4 after:border-t-slate-600 after:border-r-4 after:border-r-transparent after:border-l-4 after:border-l-transparent after:border-b-4 after:border-b-transparent after:top-6 after:right-3 transition-all ease-in-out  hover:bg-slate-800 hover:after:border-t-slate-800 duration-300 animate-[wiggle_1s_ease-in-out_infinite]'>It&apos;s me</p>
        <p className='text-4xl mt-2 font-bold '><span>Aatif</span> <span>Shaikh</span></p>
        <p className='text-xs'>
          <span className='dark:text-cyan-700 text-cyan-600'>A Software Developer</span>
        </p>
        <p className=' mt-6 md:w-1/2'>
          Software Developer from Mumbai India, with rock-solid
          experience in building complex applications with cutting-edge technologies.
        </p>
      </div>
      <div className="mt-36 hidden w-full md:flex items-center">
        <a href='mailto:saatif24@gmail.com' target='_black' title='Mail' className='grayscale hover:grayscale-0 mr-2 transition-all ease-in-out  hover:scale-125 duration-300'>
          <Image src="/brands/icons8-gmail.svg" alt="GMail" height={0} width={0} className='w-8' />
        </a>
        <a href='https://www.linkedin.com/in/aatif-shaikh-924086145/' title='LinkedIn' target='_black' className='grayscale hover:grayscale-0 mx-2 transition-all ease-in-out  hover:scale-125  duration-300'>
          <Image src="/brands/icons8-linkedin.svg" alt="LinkedIn" height={0} width={0} className='w-8' />
        </a>
        <a href='https://github.com/aatif24' target='_black' title='GitHub' className='grayscale hover:grayscale-0 mx-2  rounded-full transition-all ease-in-out  hover:scale-125 duration-300 '>
          <picture>
            <source srcSet={"/skills/icons8-github-white.svg"} media="(prefers-color-scheme: dark)" />
            <Image src="/skills/icons8-github.svg" alt="Github" height={0} width={0} className='w-8' />
          </picture>
        </a>
        <a href='https://www.instagram.com/_aatif_sheikh_/' target='_black' title='GitHub' className='grayscale hover:grayscale-0 mx-2  rounded-full transition-all ease-in-out  hover:scale-125 duration-300 '>
          <Image src="/brands/icons8-insta.svg" alt="instagram" height={0} width={0} className='w-8' />
        </a>
        <a href='https://twitter.com/aatif_9' target='_black' title='GitHub' className='grayscale hover:grayscale-0 mx-2  rounded-full transition-all ease-in-out  hover:scale-125 duration-300 '>
          <Image src="/brands/icons8-twitter.svg" alt="instagram" height={0} width={0} className='w-8' />
        </a>
        <p className='flex p-1 grayscale hover:grayscale-0 transition-all text-fuchsia-600 dark:text-fuchsia-400 ease-in-out duration-300 hover:scale-110 cursor-pointer ' onClick={e => setOpenResume(!openResume)}><NewspaperIcon className='w-6 mr-1' /> Resume</p>
      </div>
      <Resume open={openResume} setOpen={setOpenResume} />

    </div>
  )
}

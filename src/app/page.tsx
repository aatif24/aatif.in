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
        <p className='lg:-ml-4 bg-slate-600 w-fit p-1 rounded-xl text-slate-200 text-xs its-me relative after:absolute after:w-0 after:h-0 after:border-t-4 after:border-t-slate-600 after:border-r-4 after:border-r-transparent after:border-l-4 after:border-l-transparent after:border-b-4 after:border-b-transparent after:top-6 after:right-3 transition-all ease-in-out  hover:bg-slate-500 hover:after:border-t-slate-500 duration-300 animate-[wiggle_1s_ease-in-out_infinite]'>It&apos;s me</p>
        <p className='text-4xl mt-2 font-bold '><span>Aatif</span> <span>Shaikh</span></p>
        <p className='text-xs'>
          <span className='dark:text-cyan-500 text-cyan-600'>A Software Developer</span>
        </p>
        <p className='mt-6 md:w-1/2'>
          Software Developer from Mumbai India, with rock-solid
          experience in building complex applications with cutting-edge technologies.
        </p>
      </div>
      <div className="mt-36 hidden w-full md:flex items-center">
        <a href='mailto:saatif24@gmail.com' target='_black' title='Mail' className='grayscale hover:grayscale-0 mr-2 transition-all ease-in-out  hover:scale-125 duration-300'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
            <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
          </svg>
        </a>
        <a href='https://www.linkedin.com/in/aatif-shaikh-924086145/' title='LinkedIn' target='_black' className='grayscale hover:grayscale-0 mx-2 transition-all ease-in-out  hover:scale-125  duration-300'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
          </svg>
        </a>
        <a href='https://github.com/aatif24' target='_black' title='GitHub' className='grayscale hover:grayscale-0 mx-2  rounded-full transition-all ease-in-out  hover:scale-125 duration-300 '>
          <svg viewBox="0 0 16 16" className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
        <a href='https://www.instagram.com/_aatif_sheikh_/' target='_black' title='GitHub' className='grayscale hover:grayscale-0 mx-2  rounded-full transition-all ease-in-out  hover:scale-125 duration-300 '>
         <Image src="/brands/icons8-insta.svg" alt="instagram" height={0} width={0} className='w-8'/>
        </a>
        <a href='https://twitter.com/aatif_9' target='_black' title='GitHub' className='grayscale hover:grayscale-0 mx-2  rounded-full transition-all ease-in-out  hover:scale-125 duration-300 '>
         <Image src="/brands/icons8-twitter.svg" alt="instagram" height={0} width={0} className='w-8'/>
        </a>
        <p className='flex p-2 grayscale hover:grayscale-0 transition-all text-fuchsia-600 dark:text-fuchsia-400 ease-in-out duration-300 hover:scale-110 cursor-pointer ' onClick={e => setOpenResume(!openResume)}><NewspaperIcon className='w-6 mr-1' /> Resume</p>
      </div>
      <Resume open={openResume} setOpen={setOpenResume} />
    </div>
  )
}

'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowTopRightOnSquareIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

type props = {
    open: boolean
    setOpen: (arg0: boolean) => void
}
export default function Resume({ open, setOpen }: props) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="font-mono fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-4xl">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="rounded-md dark:text-slate-300 dark:hover:text-white focus:outline-none focus:ring-2 dark:focus:ring-white focus:ring-slate-900"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col overflow-y-scroll dark:drop-shadow-[-20px_5px_18px_rgba(0,0,0,0.40)] drop-shadow-[-20px_5px_15px_rgba(51,65,85,0.50)] bg py-6 shadow-xl">
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6 grid grid-flow-row auto-rows-max gap-y-6">
                                            <section>
                                                <p>Skills</p>
                                                <div className='md:ml-2 mt-4'>
                                                    <p className='text-xs dark:text-slate-400 text-slate-500 italic'>Backend</p>
                                                    <div className='grid md:grid-cols-12 grid-cols-5 gap-y-4 mt-4'>
                                                        <div>
                                                            <a href="#">
                                                                <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Javascript" src="/skills/icons8-javascript.svg" />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#">
                                                                <picture>
                                                                    <source srcSet={"/skills/icons8-nodejs-white.svg"} media="(prefers-color-scheme: dark)" />
                                                                    <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Node JS" src="/skills/icons8-nodejs.svg" />
                                                                </picture>

                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#">
                                                                <picture>
                                                                    <source srcSet={"/skills/icons8-php-white.svg"} media="(prefers-color-scheme: dark)" />
                                                                    <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="PHP" src="/skills/icons8-php.svg" />
                                                                </picture>

                                                            </a>
                                                        </div>
                                                        <div> <a href="#">
                                                            <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="TypeScript" src="/skills/icons8-typescript.svg" />
                                                        </a>
                                                        </div>
                                                        <div>
                                                            <a href="#">
                                                                <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="ExpressJS" src="/skills/icons8-express-js.svg" />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#">
                                                                <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="NestJS" src="/skills/icons8-nestjs.svg" />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#">
                                                                <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="MongoDB" src="/skills/icons8-mongodb.svg" />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#">
                                                                <picture>
                                                                    <source srcSet={"/skills/icons8-mysql-white.svg"} media="(prefers-color-scheme: dark)" />
                                                                    <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="MySql" src="/skills/icons8-mysql.svg" />
                                                                </picture>
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#">
                                                                <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Redis" src="/skills/icons8-redis.svg" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='md:ml-2 mt-4'>
                                                    <p className='text-xs dark:text-slate-400 text-slate-500 italic'>Frontend</p>
                                                    <div className='grid md:grid-cols-12 grid-cols-5 gap-y-4 mt-4'>
                                                        <div>
                                                            <a href="#">
                                                                <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="reactJS" src="/skills/icons8-react.svg" />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#">
                                                                <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Svelte" src="/skills/icons8-svelte.svg" />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#">
                                                                <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="HTML5" src="/skills/icons8-html5.svg" />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#">
                                                                <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Javascript" src="/skills/icons8-javascript.svg" />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#">
                                                                <picture>
                                                                    <source srcSet={"/skills/icons8-jquery-white.svg"} media="(prefers-color-scheme: dark)" />
                                                                    <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="JQuery" src="/skills/icons8-jquery.svg" />
                                                                </picture>
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#">
                                                                <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="SASS" src="/skills/icons8-sass.svg" />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#">
                                                                <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Bootstrap" src="/skills/icons8-bootstrap.svg" />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#">
                                                                <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Tailwing" src="/skills/icons8-tailwind-css.svg" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section>
                                                <p>Services</p>
                                                <div className='grid md:grid-cols-12 grid-cols-5 gap-y-6'>
                                                    <div>
                                                        <a href="#">
                                                            <picture>
                                                                <source srcSet={"/skills/icons8-amazon-web-services-white.svg"} media="(prefers-color-scheme: dark)" />
                                                                <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="AWS" src="/skills/icons8-amazon-web-services.svg" />
                                                            </picture>

                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="#">
                                                            <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="NPM" src="/skills/icons8-npm.svg" />
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="#">
                                                            <picture>
                                                                <source srcSet={"/skills/icons8-github-white.svg"} media="(prefers-color-scheme: dark)" />
                                                                <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="GitHub" src="/skills/icons8-github.svg" />
                                                            </picture>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="#">
                                                            <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Heroku" src="/skills/icons8-heroku.svg" />
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="#">
                                                            <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="JIRA" src="/skills/icons8-jira.svg" />
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <picture>
                                                            <source srcSet={"/skills/icons8-notion-white.svg"} media="(prefers-color-scheme: dark)" />
                                                            <Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300 hover:scale-110 dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Notion" src="/skills/icons8-notion.svg" />
                                                        </picture>
                                                    </div>
                                                </div>
                                            </section>
                                            <section className='mt-10'>
                                                <p>Experience </p>
                                                <p className="text-xs dark:text-slate-400 text-slate-500 italic">9+ Years</p>
                                                <div className='ml-2 mt-4 grid grid-flow-row auto-rows-max gap-y-4'>
                                                    <div className='group  w-fit'>
                                                        <p className='text-sm group-hover:scale-105 transition-all ease-in-out duration-300 w-fit'>
                                                            <a href='https://airfi.aero' target="_blank">AirFi <ArrowTopRightOnSquareIcon className='w-4 pb-1 inline group-hover:text-blue-500 transition-all ease-in-out duration-300 ' />
                                                            </a>
                                                        </p>
                                                        <p className='text-xs transition-all ease-in-out duration-300 dark:group-hover:text-emerald-400 group-hover:text-emerald-600 dark:text-slate-400 text-slate-500 italic'>Dec-2021 - Present</p>
                                                    </div>
                                                    <div className='group  w-fit'>
                                                        <p className='text-sm group-hover:scale-105 transition-all ease-in-out duration-300 w-fit'>
                                                            <a href='https://www.bombayworks.com/' target="_blank">Bombayworks <ArrowTopRightOnSquareIcon className='w-4 pb-1 inline group-hover:text-blue-500 transition-all ease-in-out duration-300 ' />
                                                            </a>
                                                        </p>
                                                        <p className='text-xs transition-all ease-in-out duration-300 dark:group-hover:text-fuchsia-400 group-hover:text-fuchsia-600 dark:text-slate-400 text-slate-500 italic'>Aug-2020 - Nov-2021</p>
                                                    </div>
                                                    <div className='group  w-fit'>
                                                        <p className='text-sm group-hover:scale-105 transition-all ease-in-out duration-300 w-fit'>
                                                            <a href="https://healthdekho.com/" target='_blank'>HealthDekho Healthcare <ArrowTopRightOnSquareIcon className='w-4 pb-1 inline group-hover:text-blue-500 transition-all ease-in-out duration-300 ' />
                                                            </a>
                                                        </p>
                                                        <p className='text-xs transition-all ease-in-out duration-300 dark:group-hover:text-fuchsia-400 group-hover:text-fuchsia-600 dark:text-slate-400 text-slate-500 italic'>Jan-2016 - July-2020</p>
                                                    </div>
                                                    <div className='group  w-fit'>
                                                        <p className='text-sm group-hover:scale-105 transition-all ease-in-out duration-300 w-fit'>
                                                            <a href='https://www.codebox.in/' target='_blank'>Codebox <ArrowTopRightOnSquareIcon className='w-4 pb-1 inline group-hover:text-blue-500 transition-all ease-in-out duration-300 ' />
                                                            </a>
                                                        </p>
                                                        <p className='text-xs transition-all ease-in-out duration-300 dark:group-hover:text-fuchsia-400 group-hover:text-fuchsia-600 dark:text-slate-400 text-slate-500 italic'>May-2014 - Dec-2015</p>
                                                    </div>
                                                </div>
                                            </section>
                                            <section>
                                                <p className='text-sm dark:text-slate-400 text-slate-600 leading-loose'><ArrowRightIcon className="w-4 inline mr-1" />Backend development with expertise in <span className='text-md dark:text-slate-300 text-slate-800 font-bold'>Nodejs, PHP and RESTFul APIs.</span></p>
                                                <p className='text-sm dark:text-slate-400 text-slate-600 leading-loose'><ArrowRightIcon className="w-4 inline mr-1" />Frontend development with expertise  in <span className='text-md dark:text-slate-300 text-slate-800 font-bold'>React, Redux, Next.js.</span></p>
                                                <p className='text-sm dark:text-slate-400 text-slate-600 leading-loose'><ArrowRightIcon className="w-4 inline mr-1" />Experience in <span className='text-md dark:text-slate-300 text-slate-800 font-bold'>nginx</span> used to gauge application & system performance.</p>
                                                <p className='text-sm dark:text-slate-400 text-slate-600 leading-loose'><ArrowRightIcon className="w-4 inline mr-1" />Unit Testing using <span className='text-md dark:text-slate-300 text-slate-800 font-bold'>Mocha, Chai.</span></p>
                                                <p className='text-sm dark:text-slate-400 text-slate-600 leading-loose'><ArrowRightIcon className="w-4 inline mr-1" /><span className='text-md dark:text-slate-300 text-slate-800 font-bold'>Shell</span> Scripting</p>
                                            </section>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )

}
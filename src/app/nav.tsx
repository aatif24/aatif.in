'use client'
import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactComponentElement } from 'react'


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav(): ReactComponentElement<any> {
    const pathName: string = usePathname()
    type navigationItem = {
        name: string;
        href: string;
        current: boolean;
    }
    const navigation: navigationItem[] = [
        // { name: 'Home', href: '/', current: pathName == '/' },
        // { name: 'Blogs', href: 'blogs', current: pathName == '/blogs' }
    ]

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="relative flex h-16 items-center justify-between">
                        {navigation && navigation.length ? <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div> : null}

                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <picture>
                                    <source srcSet={"/logo/logo-sm-white-no-bg.svg"} media="(prefers-color-scheme: dark)" />
                                    <Image
                                        className="block h-8 w-auto transition-all ease-in-out  hover:scale-125 duration-300 "
                                        width={0}
                                        height={0}
                                        src="/logo/logo-sm-black-no-bg.svg"
                                        alt="aatif.in"
                                    />
                                </picture>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'border-b border-red-400' : '',
                                                'px-3 py-2 text-sm font-medium hover:border-b border-violet-400 transition-all ease-in-out'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>


                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation && navigation.length && navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

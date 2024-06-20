'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Calendar from './components/calendar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

export default function Home() {
	const { theme, setTheme } = useTheme();

	return (
		<main className=" font-mono md:h-[90%] grid md:block items-center p-4 md:p-24 text-[#222831]	">
			<div className="md:flex items-end gap-4 ">
				<div className="flex">
					<Image src="/photo2.jpg" alt="Aatif Shaikh" height={1000} width={1000} className='w-40  shadow-lg top-10 left-10 rounded-lg grayscale backdrop-opacity-5' />
				</div>

				<div className="mt-4 shadow-lg md:mt-0 flex flex-col space-y-2  bg-primary   rounded-lg p-8 font-norma">
					<p className="text-4xl">Aatif Shaikh</p>
					<p className="text-sm">Software Developer from Mumbai, India.
						<br />Rock-solid experience in building complex applications with cutting-edge technologies.</p>
				</div>
				<div className="fixed w-full bottom-10 left-0 px-8 md:hidden h-10">
					<div className="flex items-center justify-between">
						<a href='mailto:saatif24@gmail.com' target='_black' title='Mail' className='hover:grayscale-0 mr-2 transition-all ease-in-out  duration-300'>
							<Image src="/brands/icons8-gmail.svg" alt="GMail" height={0} width={0} className='w-7' />
						</a>
						<a href='https://www.linkedin.com/in/aatif-shaikh-924086145/' title='LinkedIn' target='_black' className='hover:grayscale-0 mx-2 transition-all ease-in-out   duration-300'>
							<Image src="/brands/icons8-linkedin.svg" alt="LinkedIn" height={0} width={0} className='w-8' />
						</a>
						<a href='https://github.com/aatif24' target='_black' title='GitHub' className='hover:grayscale-0 mx-2  rounded-full transition-all ease-in-out  duration-300 '>
							<picture>
								<Image src={"/brands/icons8-github-white.svg"} alt="Github" height={0} width={0} className='w-0 dark:w-8 ' />
								<Image src="/brands/icons8-github.svg" alt="Github" height={0} width={0} className='w-7 dark:w-0 ' />
							</picture>
						</a>
						<a href='https://www.instagram.com/aatifshaikh.91/' target='_black' title='GitHub' className='hover:grayscale-0 mx-2  rounded-full transition-all ease-in-out  duration-300 '>
							<Image src="/brands/icons8-insta.svg" alt="instagram" height={0} width={0} className='w-8' />
						</a>
						<a href='https://wa.me/919975856562' target='_black' title='GitHub' className='hover:grayscale-0 mx-2  rounded-full transition-all ease-in-out  duration-300 '>
							<Image src="/brands/icons8-whatsapp.svg" alt="instagram" height={0} width={0} className='w-7' />
						</a>
						<Calendar />
					</div>
				</div>
			</div>

			<div className="md:flesx hidden">
				<div className="w-fit h-fit p-4 mt-4 rounded-lg  ">
					<div className='md:ml-2 mt-4 '>
						<p className='text-xs  italic'>Backend</p>
						<div className="w-full grid grid-cols-5 md:flex gap-x-8 gap-4">
							<div>
								<a href="#">
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Javascript" src="/skills/icons8-javascript.svg" />
								</a>
							</div>
							<div>
								<a href="#">
									<picture>
										<source srcSet={"/skills/icons8-nodejs-white.svg"} media={`(prefers-color-scheme: dark)`} />
										<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Node JS" src="/skills/icons8-nodejs.svg" />
									</picture>

								</a>
							</div>
							<div>
								<a href="#">
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="TypeScript" src="/skills/icons8-typescript.svg" />
								</a>
							</div>
							<div>
								<a href="#">
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="ExpressJS" src="/skills/icons8-express-js.svg" />
								</a>
							</div>
							<div>
								<a href="#">
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="NestJS" src="/skills/icons8-nestjs.svg" />
								</a>
							</div>
							<div>
								<a href="#">
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="MongoDB" src="/skills/icons8-mongodb.svg" />
								</a>
							</div>

							<div>
								<a href="#">
									<picture>
										<source srcSet={"/skills/icons8-php-white.svg"} media={`(prefers-color-scheme: dark)`} />
										<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="PHP" src="/skills/icons8-php.svg" />
									</picture>

								</a>
							</div>
							<div>
								<a href="#">
									<picture>
										<source srcSet={"/skills/icons8-mysql-white.svg"} media={`(prefers-color-scheme: dark)`} />
										<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="MySql" src="/skills/icons8-mysql.svg" />
									</picture>
								</a>
							</div>
							<div>
								<a href="#">
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Redis" src="/skills/icons8-redis.svg" />
								</a>
							</div>
						</div>
					</div>
					<div className='md:ml-2 mt-4'>
						<p className='text-xs  italic'>Frontend</p>
						<div className="w-full grid grid-cols-5 md:flex gap-x-8 gap-4">
							<div>
								<a href="#">
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="reactJS" src="/skills/icons8-react.svg" />
								</a>
							</div>
							<div>
								<a href="#">
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Svelte" src="/skills/icons8-svelte.svg" />
								</a>
							</div>
							<div>
								<a href="#">
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="HTML5" src="/skills/icons8-html5.svg" />
								</a>
							</div>
							<div>
								<a href="#">
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Javascript" src="/skills/icons8-javascript.svg" />
								</a>
							</div>
							<div>
								<a href="#">
									<picture>
										<source srcSet={"/skills/icons8-jquery-white.svg"} media={`(prefers-color-scheme: dark)`} />
										<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="JQuery" src="/skills/icons8-jquery.svg" />
									</picture>
								</a>
							</div>
							<div>
								<a href="#">
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="SASS" src="/skills/icons8-sass.svg" />
								</a>
							</div>
							<div>
								<a href="#">
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Tailwing" src="/skills/icons8-tailwind-css.svg" />
								</a>
							</div>
							<div>
								<a href="#">
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Bootstrap" src="/skills/icons8-bootstrap.svg" />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="w-fit h-fit p-4 md:ml-4 mt-4 md:mt-0 rounded-lg  ">
					<div className="w-full flex md:flex-col gap-4">
						<div>
							<a href="#">
								<picture>
									<source srcSet={"/skills/icons8-amazon-web-services-white.svg"} media={`(prefers-color-scheme: dark)`} />
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="AWS" src="/skills/icons8-amazon-web-services.svg" />
								</picture>

							</a>
						</div>
						<div>
							<a href="#">
								<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="NPM" src="/skills/icons8-npm.svg" />
							</a>
						</div>
						<div>
							<a href="#">
								<picture>
									<source srcSet={"/skills/icons8-github-white.svg"} media={`(prefers-color-scheme: dark)`} />
									<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="GitHub" src="/skills/icons8-github.svg" />
								</picture>
							</a>
						</div>
						<div>
							<a href="#">
								<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Heroku" src="/skills/icons8-heroku.svg" />
							</a>
						</div>
						<div>
							<a href="#">
								<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="JIRA" src="/skills/icons8-jira.svg" />
							</a>
						</div>
						<div>
							<picture>
								<source srcSet={"/skills/icons8-notion-white.svg"} media={`(prefers-color-scheme: dark)`} />
								<Image width={0} height={0} className='w-fit transition-all ease-in-out duration-300  dark:drop-shadow-[0_10px_7px_rgba(0,0,0,1)] drop-shadow-[0_10px_4px_rgba(51,65,85,0.50)]' alt="Notion" src="/skills/icons8-notion.svg" />
							</picture>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

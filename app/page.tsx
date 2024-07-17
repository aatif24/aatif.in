'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function Home() {
	return (
		<ScrollArea className="h-screen lg:px-12 lg:py-24 p-4 ">
			<div className="px-4 lg:px-12">
				<p className="text-xl py-4">What?</p>
				<div className="grid md:grid-cols-2 gap-8">
					<Card className="h-full  shadow-lg border border-primary/5 dark:border-primary/10">
						<CardHeader>
							<CardTitle>
								Web Development
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>High-quality development of sites at the professional level.</p>
						</CardContent>
					</Card>
					<Card className="h-full  shadow-lg border border-primary/5 dark:border-primary/10">
						<CardHeader>
							<CardTitle>
								System Design
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>Designing and developing systems for various industries.</p>
						</CardContent>
					</Card>
				</div>
			</div>
			<div className="px-4 lg:px-12">
				<p className="text-xl py-4">Skills?</p>
				<div className="grid md:grid-cols-2 gap-8">
					<Card className="h-full  shadow-lg border border-primary/5 dark:border-primary/10">
						<CardHeader>
							<CardTitle>
								Programming Language
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex gap-4">
								<Image alt="typescript" width={500} height={500} className="w-8 rounded" src="/icons/typescript-colored.svg" />
								<Image alt="javascript" width={500} height={500} className="w-8 rounded" src="/icons/javascript-colored.svg" />
								<Image alt="php" width={500} height={500} className="w-8 rounded dark:hidden block" src="/icons/php-logo-black.svg" />
								<Image alt="php" width={500} height={500} className="w-8 rounded dark:block hidden" src="/icons/php-logo-white.svg" />
							</div>
						</CardContent>
					</Card>
					<Card className="h-full  shadow-lg border border-primary/5 dark:border-primary/10">
						<CardHeader>
							<CardTitle>
								Databases
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex gap-4">
								<Image alt="mongodb" width={500} height={500} className="w-8 rounded" src="/icons/mongodb-colored.svg" />
								<Image alt="couchdb" width={500} height={500} className="w-8 rounded" src="/icons/couch.webp" />
								<Image alt="mysql" width={500} height={500} className="w-8 rounded" src="/icons/mysql-colored.svg" />
								<Image alt="postgresql" width={500} height={500} className="w-8 rounded" src="/icons/postgresql-colored.svg" />
							</div>
						</CardContent>
					</Card>
					<Card className="h-full  shadow-lg border border-primary/5 dark:border-primary/10">
						<CardHeader>
							<CardTitle>
								Framework And Runtime
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex gap-4">
								<Image alt="nextjs" width={500} height={500} className="w-8 rounded dark:hidden block" src="/icons/nextjs-black.svg" />
								<Image alt="nextjs" width={500} height={500} className="w-8 rounded dark:block hidden" src="/icons/nextjs-white.svg" />
								<Image alt="expressjs" width={500} height={500} className="w-8 rounded dark:hidden block" src="/icons/express-black.svg" />
								<Image alt="expressjs" width={500} height={500} className="w-8 rounded dark:block hidden" src="/icons/express-white.svg" />
								<Image alt="nestjs" width={500} height={500} className="w-8 rounded " src="/icons/nestjs-colored.svg" />
								<Image alt="nodejs" width={500} height={500} className="w-8 rounded " src="/icons/nodejs-colored.svg" />
								<Image alt="bun" width={500} height={500} className="w-8 rounded " src="/icons/bun.svg" />
							</div>
						</CardContent>
					</Card>
					<Card className="h-full  shadow-lg border border-primary/5 dark:border-primary/10">
						<CardHeader>
							<CardTitle>
								Tools
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p>evaluating...</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</ScrollArea>
	);
}

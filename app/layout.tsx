import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme.provider";
import Info from "./components/info";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: 'bg-primary',
}

export const metadata: Metadata = {
  title: "Aatif Shaikh",
  description: "Software Developer from Mumbai India, with rock-solid experience in building complex applications with cutting-edge technologies."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen  `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <main className="lg:grid lg:grid-cols-4 min-h-screen">
            <Info />
            <div className="col-span-3 dark:bg-primary-foreground ">
              <ScrollArea className="lg:h-screen">
                {children}
                <footer className="text-center font-thin my-4">
                  Developed in <Link className=" font-normal underline text-blue-800" href="https://code.visualstudio.com" target="_blank">Visual Studio Code</Link> by yours truly. Built with <Link className=" font-normal underline text-blue-800" href="https://nextjs.org" target="_blank">Next.js</Link> and <Link className=" font-normal underline text-blue-800" href="https://tailwindcss.com" target="_blank">Tailwind CSS</Link>, deployed with <Link className=" font-normal underline text-blue-800" href="https://vercel.com" target="_blank">Vercel</Link>.
                </footer>
              </ScrollArea>
            </div>
          </main>
        </ThemeProvider>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "317f93226c774eac83a48e90a31ee398"}'></script>
      </body>
    </html>
  );
}

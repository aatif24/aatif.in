import "../../styles/globals.scss"
import { Inter } from 'next/font/google'
import Nav from "./nav"
import Footer from "./footer"
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hi, Aatif here!',
  description: 'Dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logo/logo-sm-white-no-bg.svg?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <script src="https://uptime.betterstack.com/widgets/announcement.js" data-id="166520" async={true} type="text/javascript"></script>
      </head>
      <body className={`${inter.className} bg`}>
        <main className="font-mono flex flex-col min-h-screen mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <Nav />
          {children}
          <Footer />
        </main>
        <a target="_blank" className="absolute bottom-0" href="https://uptime.betterstack.com">
          <picture>
            <source srcSet={"https://uptime.betterstack.com/assets/static_assets/badges/dark.png"} media="(prefers-color-scheme: dark)" />
            <Image width={130} height={52} alt="Better Stack Website Monitoring" src="https://uptime.betterstack.com/assets/static_assets/badges/light.png" />
          </picture>
        </a>
      </body>
    </html>
  )
}

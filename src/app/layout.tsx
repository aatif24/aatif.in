import "../../styles/globals.scss"
import { Inter } from 'next/font/google'
import Nav from "./nav"
import Footer from "./footer"

const inter = Inter({ subsets: [ 'latin' ] })

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
      </head>
      <body className={`${inter.className} bg`}>
        <main className="font-mono flex flex-col min-h-screen mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <Nav />
          {children}
          <Footer />
        </main>
        <a target="_blank" className="absoltute bottom-0" href="https://uptime.betterstack.com"><img style={{"width": "130px", "height": "52px"}} alt="Better Stack Website Monitoring" src="https://uptime.betterstack.com/assets/static_assets/badges/light.png" /></a>
      </body>
    </html>
  )
}

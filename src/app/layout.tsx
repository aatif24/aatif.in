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
      <body className={`${inter.className} bg`}>
        <main className="font-mono flex flex-col min-h-screen mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

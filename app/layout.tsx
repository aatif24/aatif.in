import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme.provider";
import Info from "./components/info";
import { ScrollArea } from "@/components/ui/scroll-area";

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
          <main className="lg:grid lg:grid-cols-3 min-h-screen">
            <Info />
            <div className="col-span-2 dark:bg-primary-foreground ">
              <ScrollArea className="lg:h-screen">
                {children}
              </ScrollArea>
            </div>
          </main>
        </ThemeProvider>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "317f93226c774eac83a48e90a31ee398"}'></script>
      </body>
    </html>
  );
}

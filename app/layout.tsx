import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme.provider";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aatif Shaikh",
  description: "Software Developer from Mumbai India, with rock-solid experience in building complex applications with cutting-edge technologies.",
  themeColor: "bg-slate-900"
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
          <Header />
          {children}
        </ThemeProvider>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "317f93226c774eac83a48e90a31ee398"}'></script>
      </body>
    </html>
  );
}

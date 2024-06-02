import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { navItems } from "@/data";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Salman's Portfolio - Full Stack Engineer",
    template: "%s - Full Stack Engineer",
  },
  description:
    "Senior Software Engineer with extensive experience in full-stack development, agile methodologies, and leading cross-functional teams to deliver high-quality software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="" sizes="any" />
      </head>
      <body className={inter.className}>
        <main className="relative bg-black-100 overflow-hidden mx-auto sm:px-10 px-5">
          <FloatingNav navItems={navItems} />
          <div className="w-full absolute -top-60 min-h-96">
            <Image
              src="/footer-grid.svg"
              alt="grid"
              width={20}
              height={20}
              className="w-full h-full opacity-30"
            />
          </div>
          <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="h-[80vh] w-[50vw] top-10 left-full"
              fill="purple"
            />
            <Spotlight
              className="left-80 top-28 h-[80vh] w-[50vw]"
              fill="blue"
            />
          </div>

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Footer />
        </main>
      </body>
    </html>
  );
}

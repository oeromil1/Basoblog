import type { Metadata } from "next";
import { Mooli } from "next/font/google";
import { Providers } from "@/components/providers";

import Navbar from "@/components/navbar";
import "./globals.css";

const mooli = Mooli({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Basomil News",
  description: "Latest News by Basomil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo13.png" />
      </head>

      <body
        className={`${mooli.className} bg-white text-black dark:bg-gray-900 dark:selection:bg-gray-900 dark:text-white h-full selection:bg-gray-50`}
      >
        <Providers>
          <Navbar />
          <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

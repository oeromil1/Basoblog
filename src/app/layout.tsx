import type { Metadata } from "next";
import { Mooli } from "next/font/google";
import "../styles/globals.css";
import Navbars from "@/container/Navbar";

const mooli = Mooli({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Basomil",
  description:
    "Basomil is a company empowering the Oil & Gas sector with unparalleled expertise and innovative solutions.",
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
        className={`${mooli.className} max-w-7xl min-h-screen mx-auto flex flex-col bg-transparent`}
      >
        <Navbars />
        <main className="flex flex-col flex-1 max-w-6xl w-full">
          {children}
        </main>
      </body>
    </html>
  );
}

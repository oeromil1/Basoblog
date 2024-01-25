import type { Metadata } from "next";
import { Mooli } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/container/Navbar";

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
      <body className={`${mooli.className} mx-auto max-w-6xl bg-transparent`}>
        <Navbar />
        <main className="flex flex-col w-full">{children}</main>
      </body>
    </html>
  );
}

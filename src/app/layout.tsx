import type { Metadata } from "next";
import { Mooli } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/container/Navbar";
import Blob from "@/components/blob";

const mooli = Mooli({
  weight: "400",
  subsets: ["latin"],
  display: "block",
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
        className={`${mooli.className} bg-gradient-to-r from-gray1 via-gray2 to-gray3 background-animate mx-auto `}
      >
        <Navbar />
        <main className="flex flex-col mx-auto w-full">{children}</main>
      </body>
    </html>
  );
}

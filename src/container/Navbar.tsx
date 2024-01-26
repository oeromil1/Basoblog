"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="relative flex flex-wrap items-center justify-between py-2 bg-transparent">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <Image
              src="/logo1.png"
              className="h-auto w-auto -ml-[70px]"
              alt="Basomil Logo"
              width={350}
              height={350}
            />
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            title="Toggle navigation menu"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {navbarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen
              ? " flex-col items-center justify-center px-9"
              : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="">
              <Link
                href="/"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-700 hover:opacity-75"
              >
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li className="">
              <Link
                href="/services"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-700 hover:opacity-75"
              >
                <span className="ml-2">What We Do</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/partners"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-700 hover:opacity-75"
              >
                Our Partners
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-700 hover:opacity-75"
              >
                <span className="ml-2">Who We Are</span>
                {isOpen ? (
                  <FaCaretUp className="ml-2" />
                ) : (
                  <FaCaretDown className="ml-2" />
                )}
              </button>
              {isOpen && (
                <div className="bg-transparent md:top-20 absolute p-2">
                  <Link
                    href="/management"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-700 hover:opacity-75"
                  >
                    Management
                  </Link>
                  <Link
                    href="/consultants"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-700 hover:opacity-75"
                  >
                    Consultants
                  </Link>
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link
                href="/blog"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-700 hover:opacity-75"
              >
                <span className="ml-2">Latest News</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/apply"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-700 hover:opacity-75"
              >
                <span className="ml-2">Join Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-700 hover:opacity-75"
              >
                <span className="ml-2">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

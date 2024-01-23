"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Apply = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg lg:mx-20">
      <div className="absolute w-full h-full bg-gradient-to-r from-red-200 via-blue-400 to-indigo-600 -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right" />
      <div className="absolute w-full h-full bg-gradient-to-r from-red-200 via-blue-400 to-indigo-600 -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right" />
      <div className="relative inset-0 bg-gold rounded-lg z-10 m-1">
        <form
          className="p-2 rounded-md z-20 max-sm:flex-auto"
          action="https://formspree.io/f/mzblowqr"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid gap-3 mb-6 md:grid-cols-2">
            <motion.div
              className="pt-5"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                delay: 0.2,
                ease: "linear",
                duration: 1,
              }}
            >
              <label
                htmlFor="first_name"
                className="block uppercase tracking-wide text-night text-xs font-extrabold mb-2"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="first_name"
                type="text"
                placeholder="John"
                required
              />
            </motion.div>

            <motion.div
              className="pt-5"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                delay: 0.3,
                ease: "linear",
                duration: 1,
              }}
            >
              <label
                htmlFor="last_name"
                className="block uppercase tracking-wide text-night text-xs font-bold mb-2"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="last_name"
                type="text"
                placeholder="Doe"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                delay: 0.4,
                ease: "linear",
                duration: 1,
              }}
            >
              <label
                htmlFor="email"
                className="block uppercase tracking-wide text-night text-xs font-bold mb-2"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="email"
                type="email"
                placeholder="*********@*****.com"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                delay: 0.5,
                ease: "linear",
                duration: 1,
              }}
            >
              <label className="block uppercase tracking-wide text-night text-xs font-bold mb-2">
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="phone_number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                type="tel"
                placeholder="+123-451-678-0988"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                delay: 0.6,
                ease: "linear",
                duration: 1,
              }}
            >
              <label
                className="block uppercase tracking-wide text-night text-xs font-bold mb-2"
                htmlFor="job_position"
              >
                Job Position
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="job_position"
                type="text"
                placeholder="Geologist"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                delay: 0.7,
                ease: "linear",
                duration: 1,
              }}
            >
              <label className="block uppercase tracking-wide text-night text-xs font-bold mb-2">
                Nationality
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="nationality"
                type="text"
                placeholder="American"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                delay: 0.8,
                ease: "linear",
                duration: 1,
              }}
            >
              <label className="block uppercase tracking-wide text-night text-xs font-bold mb-2">
                Course of Study
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="course"
                type="text"
                placeholder="Geology"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                delay: 0.9,
                ease: "linear",
                duration: 1,
              }}
            >
              <label className="block uppercase tracking-wide text-night text-xs font-bold mb-2">
                University
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="university"
                type="text"
                placeholder="Texas University"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                delay: 1,
                ease: "linear",
                duration: 1,
              }}
            >
              <label className="block uppercase tracking-wide text-night text-xs font-bold mb-2">
                Resume
              </label>

              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="docufile"
                name="upload"
                type="file"
                accept=".jpg, .pdf, .docx, .xls, .png"
                placeholder="resume"
              />

              <p className=" text-sm text-night" id="file_input">
                .jpg, .docx, .xls, .pdf or .png (MAX. 1MB).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                delay: 1.1,
                ease: "linear",
                duration: 1,
              }}
              className="flex items-start lg:mt-10 pl-2"
            >
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-night"
              >
                I agree with the{" "}
                <Link
                  href="/terms"
                  className="text-blue-900 text-xs hover:underline"
                >
                  Terms & Conditions
                </Link>
                .
              </label>
            </motion.div>
          </div>

          <motion.div
            className="mb-2 flex justify-center items-center"
            initial={{ opacity: 0, y: 1 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              delay: 1.2,
              ease: "linear",
              duration: 2,
            }}
          >
            <motion.button
              className="shadow-lg bg-blueO focus:shadow-outline focus:outline-none text-gold font-bold py-2 px-6 rounded"
              type="submit"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Submit
            </motion.button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Apply;

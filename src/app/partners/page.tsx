import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Partners = () => {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-5">
        <div>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6  ">
            Meet Our Partners
          </h1>
        </div>
      </div>

      <div className="w-full pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded mx-4 overflow-hidden shadow-md bg-transparent">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <Link href="https://www.sispro.gy/" className="">
                    <Image
                      src="/sis-pro.png"
                      alt="Sispro Inc."
                      className="rounded-lg object-fit shadow-md"
                      width={150}
                      height={150}
                    />
                  </Link>
                </div>
                <div className="px-6 mt-10">
                  <div className="font-bold text-3xl text-center">
                    Sispro Inc.
                  </div>

                  <p className="text-center text-gray-600 text-base py-1 font-normal">
                    Sispro, a Guyanese women-led company, prioritizes community
                    development, social responsibility, and gender equity in the
                    oil and gas industry. Founded by visionary women, it
                    uniquely navigates local dynamics, fostering connections for
                    exploration companies and promoting gender and social equity
                    in the energy sector.
                  </p>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-20 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded mx-4 overflow-hidden shadow-md bg-transparent">
                <div className="absolute -mt-[60px] w-full flex justify-center">
                  <Link href="https://www.megayieldcs.com/" className="">
                    <Image
                      src="/megayield.webp"
                      alt=""
                      className="rounded-lg object-cover h-full w-full shadow-md"
                      width={150}
                      height={150}
                    />
                  </Link>
                </div>
                <div className="px-6 mt-5">
                  <div className="font-bold text-3xl text-center">
                    Megayield Consulting Services Limited{" "}
                  </div>

                  <p className="text-center text-gray-600 text-base py-1 font-normal">
                    Megayield Consulting, based in Calgary, serves a global
                    clientele with a focus on geological evaluations, subsurface
                    solutions, project advisory, and training in the Upstream
                    Oil and Gas industry. Operating in Nigeria and Canada, their
                    aim is to ease data handling for clients and create value
                    through production optimization.
                  </p>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded mx-2 overflow-hidden shadow-md bg-transparent">
                <div className="absolute -mt-[60px] w-full flex justify-center">
                  <Link href="https://crexobas.org" className="">
                    <Image
                      src="/crexobas.jpg"
                      alt="Crexobas International"
                      className="rounded-lg object-cover h-full w-full shadow-md"
                      width={150}
                      height={150}
                    />
                  </Link>
                </div>
                <div className="px-6 mt-5">
                  <div className="font-bold text-3xl text-center">
                    Crexobas International
                  </div>

                  <p className="text-center text-gray-600 text-base py-1 font-normal">
                    Crexobas excels in project management, leveraging
                    cutting-edge technology for high-performance equipment. With
                    skilled engineers, innovative tech, and cost-effective
                    solutions, Crexobas enhances client portfolios, improves
                    cost-effectiveness, and enables digital transformation in
                    the petroleum industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

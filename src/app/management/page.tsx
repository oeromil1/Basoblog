"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Management = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <div
        id="team"
        className="bg-gradient-to-br from-red-300 via-sky-500 to-purple-900 "
      >
        <div className="w-full  px-10 pt-10">
          <div className="container mx-auto ">
            <div className="lg:flex gap-20 md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
              <div className="xl:w-1/2 sm:w-3/4 md:w-1/2 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-1/2">
                <div className="rounded overflow-hidden shadow-md bg-transparent">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <Image
                        src="../assets/Picture1.png"
                        alt="Display Picture of Andres Berlin"
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-md"
                        height={50}
                        width={50}
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1">
                      Francis Bassey{" "}
                    </h1>
                    <p className="text-gray-800 text-sm text-center">
                      CEO & Cofounder
                    </p>
                    <p className="text-center text-white  text-base pt-3 font-normal">
                      B.Sc. in Geology and MSc in Applied Geophysics Over 35
                      years of accomplished career in geoscience technical
                      leadership contributing to major discoveries in shallow
                      and deepwater assets in Nigeria and Angola. Alumnus of
                      leadership programs in INSEAD, Thunderbird School of
                      Global Management, and the Kenan-Flagler Business School
                      at the University of North Carolina at Chapel Hill.
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/2 lg:mx-3 sm:w-1/2 md:w-1/2 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-1/2">
                <div className="rounded overflow-hidden shadow-md bg-transparent ">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <Image
                        src="../assets/Picture2.jpg"
                        alt="Display Picture of Silene Tokyo"
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-md"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                  <div className="px-2 mt-16">
                    <h1 className="font-bold  text-3xl text-center mb-1">
                      Femi Romiluyi
                    </h1>
                    <p className="text-gray-800  text-sm text-center">
                      COO & Cofounder
                    </p>
                    <p className="text-center text-white text-base pt-3 font-normal">
                      B.Sc. in Electronic & Electrical Engineering and M.B.A.
                      Over 35 years of accomplished career in the technology and
                      energy sectors performing in senior roles across,
                      facilities, projects development, operations, and
                      maintenance management for onshore, shallow water and
                      deepwater assets. Alumnus of leadership programs in INSEAD
                      France, Thunderbird School of Global Management, and the
                      Kenan-Flagler Business School at the University of North
                      Carolina at Chapel Hill.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;

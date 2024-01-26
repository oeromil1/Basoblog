import Image from "next/image";
import React from "react";

const Consultants = () => {
  return (
    <div className="">
      <div className="py-2 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Meet our Consultants
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            We have a team of highly qualified consultants who are ready to help
            you with your business needs.
          </p>
        </div>

        <div className="grid gap-2 mb-2 lg:mb-4 md:grid-cols-2">
          <div className="items-center bg-yellow-500 rounded-lg shadow sm:flex ">
            <Image
              className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
              src="/Picture3.png"
              alt="Adebayo Okunlola"
              width={300}
              height={300}
            />

            <div className="p-2">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 ">
                Adebayo Okunlola
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Subsurface Technical Consultant
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                B.Sc. and M.Sc. degrees in Applied Geophysics. Over 25 years of
                expertise in seismic interpretation and subsurface
                characterization. Alumnus of Thunderbird School of Global Oil
                and Gas Management. Serves as the Vice President and Treasurer
                of AAPG’s Canada Region.
              </p>
            </div>
          </div>

          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
            <Image
              className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
              src="/Picture4.jpg"
              alt="Timothy Akinnagbe"
              width={300}
              height={300}
            />
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900">
                <a href="#">Timothy Akinnagbe</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Operations Geology & Formation Evaluation Specialist
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                B.Sc. & M.Sc. degrees in Applied Geology. Over 30 years of
                technical leadership and expertise in Well planning and
                execution, geological operations, pore pressure prediction and
                shallow hazard analysis and formation evaluation.
              </p>
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
              src="/Picture3.png"
              alt="Michael Avatar"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span>Michael Gough</span>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Senior Front-end Developer
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Michael drives the technical strategy of the flowbite platform
                and brand.
              </p>
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
              src="/Picture3.png"
              alt="Sofia Avatar"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Lana Byrd</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Marketing & Sale
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Lana drives the technical strategy of the flowbite platform and
                brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultants;

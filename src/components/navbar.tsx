import Link from "next/link";
import React from "react";
import ThemeButton from "./themeButton";
import Image, { ImageProps } from "next/image";

const Navbar = () => {
  type CustomImageProps = ImageProps & {
    className?: string;
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between items-center w-full pt-5">
            <ThemeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

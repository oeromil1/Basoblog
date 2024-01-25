import React from "react";

export default function Refinery() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        disablePictureInPicture
        className="w-full h-svh serve6 mix-blend-overlay object-cover z-[-1] absolute bg-black -ml-[50px]"
      >
        <source src="/refinery.mp4" type="mp4" />
      </video>
    </div>
  );
}

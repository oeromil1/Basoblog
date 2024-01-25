import React from "react";

export default function Port() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        disablePictureInPicture
        className="w-full h-svh serve6 mix-blend-overlay object-cover z-[-1] absolute bg-black -ml-[50px]"
      >
        <source src="/port.mp4" type="mp4" />
      </video>
    </div>
  );
}

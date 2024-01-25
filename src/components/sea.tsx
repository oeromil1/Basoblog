import React from "react";

export default function Sea() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        disablePictureInPicture
        className="w-full h-svh mix-blend-overlay object-cover z-1 absolute bg-night"
      >
        <source src="/sea.mp4" type="mp4" />
      </video>
    </div>
  );
}

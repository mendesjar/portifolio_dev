import React from "react";

export function MainText() {
  return (
    <div className="flex items-center justify-center h-[35rem] my-11 text-[#023059]">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold lg:leading-[6rem] mb-3">
          Hi there
          <br />
          welcome
        </h1>
        <h2 className="text-xl md:text-2xl font-extrabold relative lg:leading-[2.2rem]">
          I am <span className="bg-[#D3BFFF] px-2">Web Designer</span> and
          <br />
          <span className="bg-[#D0FFBF] px-2">Front End Developer</span>
        </h2>
      </div>
    </div>
  );
}

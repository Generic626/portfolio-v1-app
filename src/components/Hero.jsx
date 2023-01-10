import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div
      name="hero"
      className="w-full h-screen bg-white text-black flex justify-center items-center"
    >
      <div className="text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl py-4 font-medium">
          Hello there.
        </p>
        <h1 className="text-[32px] sm:text-6xl lg:text-7xl font-bold py-4">
          My name is Matthew.
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-5xl py-4 text-zinc-500">
          And I'm a
          <Typed
            strings={["React", "MERN"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            className="px-2 text-indigo-700 font-bold"
          />
          Developer.
        </h2>
      </div>
    </div>
  );
};

export default Hero;

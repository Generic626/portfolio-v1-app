import React from "react";
import avatarImg from "../assets/avatar.png";

const About = () => {
  return (
    <div name="about" className="w-full bg-gray-200 px-4 ">
      {/* Container  */}
      <div>
        {/* Grid */}
        <div className="grid md:grid-cols-2 py-40 px-8 ">
          {/* Title  */}
          <div className="m-auto">
            <img
              src={avatarImg}
              alt="Avatar"
              className="w-[200px] md:w-[300px]"
            />
          </div>

          {/* Content  */}
          <div className="md:max-w-[400px] flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl py-8 underline underline-offset-8 font-bold">
              About Me
            </h1>
            <p className=" text-xl text-justify">
              Currently a Year 3 Computing student studying at the Hong Kong
              Polytechnic University. I consider myself a dillgent, hardworking
              person that would give 100% effort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

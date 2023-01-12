import React from "react";
import ExpertiseCards from "./ExpertiseCards";

import bg from "../assets/expertise-bg.jpg";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Expertise = () => {
  const techUsed = [
    { img: HTML, text: "HTML" },
    { img: CSS, text: "CSS" },
    { img: JavaScript, text: "JavaScript" },
    { img: ReactImg, text: "React" },
    { img: Tailwind, text: "Tailwind" },
    { img: Node, text: "Node" },
    { img: Mongo, text: "Mongo" },
    { img: FireBase, text: "Firebase" },
  ];
  return (
    <div name="expertise" className="relative w-full h-full">
      {/* Background Image  */}
      <img
        src={bg}
        alt="background"
        className="w-full h-[1200px] md:h-screen object-cover "
      />

      {/* Overlay + Content  */}
      <div className="absolute bg-[#0a192f]/50 w-full h-full top-0 left-0">
        {/* Container  */}
        <div className="max-w-[1200px] flex flex-col justify-center items-center m-auto">
          {/* Title  */}
          <div className="mt-32  text-white  text-center border-white bg-[#0a192f] flex justify-center items-center h-auto duration-300">
            <h1 className="text-2xl border p-4 w-[350px] md:w-[400px]">
              Technologies that I have used before
            </h1>
          </div>
          {/* Cards List */}
          <div className="grid grid-cols-2 md:grid-cols-4 py-16 gap-4 w-full px-8">
            {techUsed.map((tech) => {
              return (
                <ExpertiseCards
                  img={tech.img}
                  text={tech.text}
                  key={tech.text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;

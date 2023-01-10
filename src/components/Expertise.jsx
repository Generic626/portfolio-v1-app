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
    <div
      name="expertise"
      className="w-full h-full bg-black bg-code bg-cover md:py-24"
    >
      {/* Container  */}
      <div className="max-w-[1200px] flex flex-col justify-center items-center m-auto">
        {/* Title  */}
        <div className="mt-32  text-white  text-center border-white flex justify-center items-center bg-[#0a192f] h-auto duration-300">
          <h1 className="text-2xl border p-4 w-[350px] md:w-[400px]">
            Technologies that I have used
          </h1>
        </div>
        {/* Cards List */}
        <div className="grid grid-cols-2 md:grid-cols-4 py-16 gap-4 w-full px-8">
          {techUsed.map((tech) => {
            return <ExpertiseCards img={tech.img} text={tech.text} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Expertise;

import React from "react";

const ExpertiseCards = (props) => {
  // Card
  return (
    <div className="flex flex-col items-center justify-center text-white bg-[#0a192f] hover:bg-[#10274a] rounded-lg py-8 hover:scale-110 duration-300">
      <img src={props.img} alt={props.text} className="w-20" />
      <h1 className="my-4">{props.text}</h1>
    </div>
  );
};

export default ExpertiseCards;

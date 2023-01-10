import React, { useState } from "react";
import { Link } from "react-scroll";

import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [displayMobile, setdisplayMobile] = useState(false);
  const handleClick = () => {
    setdisplayMobile(!displayMobile);
  };
  return (
    <div className="fixed w-full h-[80px] shadow-xl bg-gray-200 z-10">
      <div className="flex justify-between items-center px-4 w-full h-full">
        {/* Logo  */}
        <p className="font-bold text-2xl border-2 border-gray-500 w-[180px] text-center p-2 ">
          PORTFOLIO.
        </p>
        {/* Desktop Nav Items  */}
        <ul className="hidden sm:flex">
          <li className="uppercase hover:underline duration-300 underline-offset-8">
            <Link to="hero" smooth duration={600}>
              Home
            </Link>
          </li>
          <li className="uppercase hover:underline duration-300 underline-offset-8">
            <Link to="about" smooth offset={-80} duration={600}>
              About
            </Link>
          </li>
          <li className="uppercase hover:underline duration-300 underline-offset-8">
            <Link to="expertise" smooth offset={-70} duration={600}>
              Expertise
            </Link>
          </li>
          <li className="uppercase hover:underline duration-300 underline-offset-8">
            <Link to="contact" smooth duration={600}>
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile Hamburber Button  */}
        <div className="flex sm:hidden" onClick={handleClick}>
          {displayMobile ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>

      {/* Mobile Nav Items  */}
      <ul
        className={
          displayMobile
            ? "absolute w-full px-8 pt-[96px] bg-gray-200 h-screen flex flex-col items-center visible duration-300"
            : "invisible "
        }
      >
        <li
          className="my-8 text-xl border-b-[1px] hover:border-gray-400 px-0 uppercase pb-2"
          onClick={handleClick}
        >
          <Link to="hero" smooth duration={600}>
            Home
          </Link>
        </li>
        <li
          className="my-8 text-xl border-b-[1px] hover:border-gray-400 px-0 uppercase pb-2"
          onClick={handleClick}
        >
          <Link to="about" smooth offset={-80} duration={600}>
            About
          </Link>
        </li>
        <li
          className="my-8 text-xl border-b-[1px] hover:border-gray-400 px-0 uppercase pb-2"
          onClick={handleClick}
        >
          <Link to="expertise" smooth offset={-70} duration={600}>
            Expertise
          </Link>
        </li>
        <li
          className="my-8 text-xl border-b-[1px] hover:border-gray-400 px-0 uppercase pb-2"
          onClick={handleClick}
        >
          <Link to="contact" smooth duration={600}>
            Contact
          </Link>
        </li>
        <li>
          {/* Mobile Social Icons  */}
          <div className="flex items-center justify-between w-full">
            <div className="p-4">
              <FaGithub size={30} />
            </div>
            <div className="p-4">
              <HiOutlineMail size={30} />
            </div>
            <div className="p-4">
              <BsFillPersonLinesFill size={30} />
            </div>
          </div>
        </li>
      </ul>
      {/* Social Icons  */}
      <div className="hidden md:flex flex-col fixed top-[35%] left-0 ">
        <ul>
          <li
            className="bg-black text-white p-4 my-4 flex items-center justify-between w-[150px]
          ml-[-90px] hover:ml-[-10px] hover:bg-indigo-500 duration-300 border border-gray-400 hover:border-transparent"
          >
            Github <FaGithub size={30} />
          </li>
          <li
            className="bg-gray-500 text-white p-4 my-4 flex items-center justify-between w-[150px]
          ml-[-90px] hover:ml-[-10px] duration-300 hover:bg-blue-500"
          >
            Email <HiOutlineMail size={30} />
          </li>
          <li
            className="bg-white text-black p-4 my-4 border border-black border-l-0 flex items-center justify-between w-[150px]
          ml-[-90px] hover:ml-[-10px] duration-300 hover:bg-green-400 hover:border-transparent"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

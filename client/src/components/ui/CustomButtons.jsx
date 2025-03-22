import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';


function CustomButton1({ title = "Let's talk", link="/contact-us" ,textC }) {
  // This button is a custom button that has a background that expands when hovered over.
  return (
    <Link
      to={link}
      className="relative max-w-min group flex items-center gap-x-3 mt-5 ps-2  rounded-full overflow-hidden"
    >
      {/* Expanding Background from the Button */}
      <div className="absolute right-0 w-0 h-full bg-purple-600 rounded-full group-hover:w-full transition-all duration-300 ease-in-out"></div>

      {/* Content */}
      <span className="relative text-white group-hover:text-white transition-colors duration-300 whitespace-nowrap z-10">
        {title}
      </span>
      <button className="relative p-2.5 font-theme-font text-sm bg-purple-600 text-white rounded-full transition-colors duration-300 z-10">
        <HiOutlineArrowLongRight className="text-lg" />
      </button>
    </Link>
  );
}

export default CustomButton1;
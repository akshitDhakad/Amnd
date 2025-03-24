import { Button } from "@material-tailwind/react";
import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function CustomButton1({
  title = "Let's talk",
  link = "/contact-us",
  textCss = "text-white",
}) {
  // This button is a custom button that has a background that expands when hovered over.
  return (
    <Link
      to={link}
      className="relative max-w-min group flex items-center gap-x-3 mt-5 ps-2 rounded-full overflow-hidden"
    >
      <div className="absolute right-0 w-0 h-full bg-purple-600 rounded-full group-hover:w-full transition-all duration-300 ease-in-out"></div>
      <span
        className={`relative ${textCss} text-base group-hover:text-white transition-colors duration-300 whitespace-nowrap z-10`}
      >
        {title}
      </span>
      <Button
        variant={"gradient"}
        color={"white"}
        className="relative p-2.5 font-theme-font text-sm bg-purple-600 text-white rounded-full transition-colors duration-300 z-10 group-hover:bg-white group-hover:text-purple-600 m-1"
      >
        <HiOutlineArrowLongRight className="text-lg" />
      </Button>
    </Link>
  );
}

export default CustomButton1;

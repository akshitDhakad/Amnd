import { Button } from "@material-tailwind/react";
import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const CustomButton1 = ({
  title = "Let's talk",
  link = "/contact-us",
  textCss = "text-white",
}) => {
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
};

const CustomButton2 = ({ title = "Arrage a call with Us", link, textCss }) => {
  return (
    <Link
      to={link}
      className={`group xl:text-lg ${textCss} bg-white flex gap-x-3 items-center justify-between pl-5 rounded-3xl delay-75`}
    >
      <span className=" font-bold font-theme-font">{title}</span>
      <button className="p-2 m-1 font-theme-font text-sm rounded-full group-hover:bg-black group-hover:text-white text-gray-800 hover:shadow-md hover:shadow-slate-200 transition-color">
        <HiOutlineArrowLongRight className="text-xl font-bold" />
      </button>
    </Link>
  );
};
const CustomButton3 = ({ title = "Arrage a call with Us", link, textCss }) => {
  return (
    <Link
      to={link}
      className={`group xl:text-lg ${
        textCss || "pl-5"
      } bg-white flex gap-x-3 items-center justify-between rounded-3xl delay-75`}
    >
      <span className=" font-bold font-theme-font">{title}</span>
      <button className="p-2 m-1 font-theme-font text-sm rounded-full group-hover:bg-black group-hover:text-white text-gray-800 hover:shadow-md hover:shadow-slate-200 transition-color">
        <HiOutlineArrowLongRight className="text-xl font-bold" />
      </button>
    </Link>
  );
};

export { CustomButton1, CustomButton2, CustomButton3 };

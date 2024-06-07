import React from "react";
import { TiArrowRight } from "react-icons/ti";
import { RiRadioButtonFill } from "react-icons/ri";

function ServicesBanner({title,description}) {
  
  const backgroundImageStyle = {
    backgroundImage:
      "url('https://i.pinimg.com/564x/0a/46/0b/0a460bf677706ab9bebade425e25a0a7.jpg')",
    height: "100%",
    width: "100%", 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

  };



  return (
    <div
      className="relative flex justify-center items-center rounded-2xl overflow-hidden"
      style={backgroundImageStyle}
    >
      <div className="absolute -z-10 rounded-2xl top-0 left-0 h-full w-full inset-0 bg-purple-900 bg-opacity-10 backdrop-blur-xl"></div>
      <div className="h-full w-full p-10">
        {/* heading  */}
        <div className="pb-8">
          <p className="font-bold text-white font-theme-font">{title}</p>
        </div>
        <hr />
        {/* content  */}
        <div className="py-10">
          <div className="flex gap-x-2">
            <div className="">
              <button className="bg-gray-800 text-white p-2 rounded-full">
                {" "}
                <TiArrowRight className="rotate-180 text-2xl " />{" "}
              </button>
            </div>
            <div>
              <button className="bg-gray-800 text-white p-2 rounded-full">
                <TiArrowRight className="text-2xl" />{" "}
              </button>
            </div>
          </div>
          <div className="py-5">
            <h2 className="text-6xl text-white font-bold font-theme-font">
              {description}
            </h2>
          </div>
        </div>
        {/* footer buttons */}
        <div className="pb-8 flex items-center justify-center gap-2">
          <div>
            <RiRadioButtonFill className="text-2xl text-white hover:cursor-pointer" />
          </div>
          <div>
            <RiRadioButtonFill className="text-white hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesBanner;

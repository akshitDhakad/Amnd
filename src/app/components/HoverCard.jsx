"use client";

import React, { useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

function HoverCard() {
  const imgURl = [
    "https://media.istockphoto.com/id/1444916714/photo/honeycomb-network-concept-data-transfer-digital-technological-background-3d-rendering.jpg?s=1024x1024&w=is&k=20&c=DNWuH9hDI2e6cTIojCq6y9EdHNkM-TVWdAHJ4dT7Axo=",
    "https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?size=626&ext=jpg&ga=GA1.1.705946748.1706705440&semt=ais",
    "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg?size=626&ext=jpg&ga=GA1.1.705946748.1706705440&semt=ais",
  ];
  const [bgUrl, setBgURl] = useState(0);

  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ),
    url('${imgURl[bgUrl]}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(8px)",
  };

  return (
    <>
      <div
        className="abosolute -z-50 m-1 overflow-hidden top-0 h-screen flex items-center justify-center rounded-2xl"
        style={backgroundImg}
      >
        <div className="absolute  m-1 -z-10 bg-black opacity-50 rounded-2xl h-screen w-full"></div>
        <div className="min-h-full min-w-full grid grid-cols-3">
          {/* card 1 */}
          <div
            onMouseEnter={() => setBgURl(0)}
            className="flex flex-col gap-10 px-5 py-10 h-full m-auto border-r border-gray-50 border-left hover:cursor-pointer delay-200"
          >
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-8xl text-white opacity-80 font-semibold tracking-wide font-theme-font">
                  01
                </h2>
              </div>
              <div>
                <h1 className="text-4xl text-white font-bold tracking-wide font-theme-font">
                  Attitude To Work.
                </h1>
              </div>
            </div>

            <div className={`${bgUrl == "0" ? "block" : "hidden"}`}>
              <p className="text-white text-start tracking-wide font-theme-font">
                We take pride in providing high-quality software development
                solutions. We use proven development techniques in pair with
                personal responsibility to achieve top notch results. This makes
                us proud of our work and allows us sleeping well at night.
              </p>
              {/* <div className="flex justify-start items-center mt-5">
                <div className="bg-white flex gap-x-3 items-center justify-between px-5 py-2 rounded-2xl delay-250">
                  <span className="text-gray-800 font-bold font-theme-font">
                    Arrage a call with Us
                  </span>
                  <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-gray-800 hover:shadow-md hover:shadow-slate-200 transition-color">
                    <HiOutlineArrowLongRight className="text-lg font-bold" />
                  </button>
                </div>
              </div> */}
            </div>
          </div>
          {/* card 2 */}
          <div
            onMouseEnter={() => setBgURl(1)}
            className="flex flex-col gap-10 px-5 py-10 h-full m-auto border-r border-gray-50 border-left hover:cursor-pointer delay-20"
          >
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-8xl text-white opacity-80 font-semibold tracking-wide font-theme-font">
                  02
                </h2>
              </div>
              <div>
                <h1 className="text-4xl text-white font-bold tracking-wide font-theme-font">
                  Attitude To Client.
                </h1>
              </div>
            </div>

            <div className={`${bgUrl == "1" ? "block" : "hidden"}`}>
              <p className="text-white text-start tracking-wide font-theme-font">
                Our clients become our partners and we treat your product as if
                it’s ours. The main principle of our cooperation is trust which
                is based on personal commitment. We do our best to lift the
                burden of side tasks and let you focus on the key parts of your
                business.
              </p>
              {/* <div className="flex justify-start items-center mt-5">
                <div className="bg-white flex gap-x-3 items-center justify-between px-5 py-2 rounded-2xl delay-250">
                  <span className="text-gray-800 font-bold font-theme-font">
                    Arrage a call with Us
                  </span>
                  <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-gray-800 hover:shadow-md hover:shadow-slate-200 transition-color">
                    <HiOutlineArrowLongRight className="text-lg font-bold" />
                  </button>
                </div>
              </div> */}
            </div>
          </div>
          {/* card 3 */}
          <div
            onMouseEnter={() => setBgURl(2)}
            className="flex flex-col gap-10 px-5 py-10 h-full m-auto border-r border-gray-50 border-left hover:cursor-pointer delay-20"
          >
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-8xl text-white opacity-80 font-semibold tracking-wide font-theme-font">
                  03
                </h2>
              </div>
              <div>
                <h1 className="text-4xl text-white font-bold tracking-wide font-theme-font">
                  Attitude To Employee.
                </h1>
              </div>
            </div>

            <div className={`${bgUrl == "2" ? "block" : "hidden"}`}>
              <p className="text-white text-start tracking-wide font-theme-font">
                Each software engineer at Devox Software is welcome to discuss
                any thoughts, ideas, preferences and dislikes. Information is
                freely transferred between levels of the company - from junior
                developer to CEO and backward. We appreciate transparency and
                honesty.
              </p>
              {/* <div className="flex justify-start items-center mt-5">
                <div className="bg-white flex gap-x-3 items-center justify-between px-5 py-2 rounded-2xl delay-250">
                  <span className="text-gray-800 font-bold font-theme-font">
                    Arrage a call with Us
                  </span>
                  <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-gray-800 hover:shadow-md hover:shadow-slate-200 transition-color">
                    <HiOutlineArrowLongRight className="text-lg font-bold" />
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HoverCard;

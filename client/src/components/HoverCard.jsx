import React, { useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { CustomButton2 } from "./ui/CustomButtons";

function HoverCard() {
  const imgURl = [
    "/assets/background/attitude_to_work.jpg",
    "/assets/background/attitude_to_client.jpg",
    "/assets/background/attitude_to_employee.jpg",
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
        className="abosolute -z-50 m-1 overflow-hidden top-0 md:h-screen h-full min-h-min max-h-[750px] flex items-center justify-center rounded-2xl"
        style={backgroundImg}
      >
        <div className="absolute  m-1 -z-10 bg-black opacity-50 rounded-2xl h-screen w-full"></div>
        <div className="min-h-full min-w-full grid md:grid-cols-3 items-stretch">
          {/* card 1 */}
          <div
            onMouseEnter={() => setBgURl(0)}
            className="w-full h-full flex flex-col gap-10 px-5 py-10 m-auto border-r border-gray-50 border-left hover:cursor-pointer delay-200"
          >
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-8xl text-white opacity-80 font-semibold tracking-wide font-theme-font">
                  01
                </h2>
              </div>
              <div>
                <h1 className="text-3xl text-white font-bold tracking-wide font-theme-font">
                  Attitude To Work.
                </h1>
              </div>
            </div>

            <div className={`${bgUrl == "0" ? "block" : "hidden"}`}>
              <p className="text-base xl:text-xl text-white text-start tracking-wide font-theme-font">
                We take pride in providing high-quality software development
                solutions. We use proven development techniques in pair with
                personal responsibility to achieve top notch results. This makes
                us proud of our work and allows us sleeping well at night.
              </p>
              <div className="flex justify-start items-center mt-5">
                <CustomButton2 />
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div
            onMouseEnter={() => setBgURl(1)}
            className="w-full h-full flex flex-col gap-10 px-5 py-10 m-auto border-r border-gray-50 border-left hover:cursor-pointer delay-20"
          >
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-8xl text-white opacity-80 font-semibold tracking-wide font-theme-font">
                  02
                </h2>
              </div>
              <div>
                <h1 className="text-3xl text-white font-bold tracking-wide font-theme-font">
                  Attitude To Client.
                </h1>
              </div>
            </div>

            <div className={`${bgUrl == "1" ? "block" : "hidden"}`}>
              <p className="text-base xl:text-xl text-white text-start tracking-wide font-theme-font">
                Our clients become our partners and we treat your product as if
                it’s ours. The main principle of our cooperation is trust which
                is based on personal commitment. We do our best to lift the
                burden of side tasks and let you focus on the key parts of your
                business.
              </p>
              <div className="flex justify-start items-center mt-5">
                <CustomButton2 />
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div
            onMouseEnter={() => setBgURl(2)}
            className="w-full h-full flex flex-col gap-10 px-5 py-10 m-auto border-r border-gray-50 border-left hover:cursor-pointer delay-20"
          >
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-8xl text-white opacity-80 font-semibold tracking-wide font-theme-font">
                  03
                </h2>
              </div>
              <div>
                <h1 className="text-3xl text-white font-bold tracking-wide font-theme-font">
                  Attitude To Employee.
                </h1>
              </div>
            </div>

            <div className={`${bgUrl == "2" ? "block" : "hidden"}`}>
              <p className="text-base xl:text-xl text-white text-start tracking-wide font-theme-font">
                Each software engineer at AMNDTECH Software is welcome to
                discuss any thoughts, ideas, preferences and dislikes.
                Information is freely transferred between levels of the company
                - from junior developer to CEO and backward. We appreciate
                transparency and honesty.
              </p>
              <div className="flex justify-start items-center mt-5">
                <CustomButton2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HoverCard;

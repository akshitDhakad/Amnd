import React, { useState } from "react";
import Layout from "../components/Layout.jsx";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import { Link } from "react-router-dom";

export default function ErrorPage() {
  const [tab, setTab] = useState(0);

  const backgroundImg = {
    backgroundImage: `url('https://devoxsoftware.com/wp-content/themes/main/assets/images/404.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <main className="relative overflow-x-hidden">
      <Layout>
        {/* Hero Section  */}
        <section className="bg-white">
          <div
            className="abosolute -z-50 m-1 overflow-hidden top-0 h-screen flex items-center justify-center rounded-2xl"
            style={backgroundImg}
          >
            <div className="absolute  m-1 -z-10 bg-black opacity-50 rounded-2xl h-screen w-full"></div>
            <div className=" max-w-9xl m-auto px-10 py-5">
              {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
              <div className="mt-20 grid grid-cols-5 gap-x-10 gap-y-10  m-auto">
                <div className="col-span-5 flex flex-col gap-5">
                  <div>
                    <h2 className="text-8xl text-center text-white font-semibold tracking-wide font-theme-font">
                      404
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-6xl text-center text-white font-bold tracking-wide font-theme-font">
                      Oops! Something went wrong.
                    </h1>
                  </div>
                </div>

                {/* cards  */}
                <div className="col-span-3 grid grid-cols-3 gap-x-5">
                  {/* card 1 */}
                  <div className="relative rounded-xl overflow-hidden p-2">
                    <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-md"></div>
                    <div className="relative h-40 z-10 ">
                      <img
                        loading="lazy"
                        className="w-full h-full object-container object-center"
                        src="https://devoxsoftware.com/wp-content/uploads/2024/03/logo-3.svg"
                        alt="AMNDTECH Software"
                      />
                    </div>
                  </div>
                  {/* card 2 */}
                  <div className="relative rounded-xl overflow-hidden p-2">
                    <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-md"></div>
                    <div className="relative h-40 z-10 ">
                      <img
                        loading="lazy"
                        className="w-full h-full  object-center"
                        src="https://devoxsoftware.com/wp-content/uploads/2024/03/logo-2.svg"
                        alt="AMNDTECH Software"
                      />
                    </div>
                  </div>
                  {/* card 3 */}
                  <div className="relative rounded-xl overflow-hidden p-2">
                    <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-md"></div>
                    <div className="relative h-40 z-10 ">
                      <img
                        loading="lazy"
                        className="w-full h-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/uploads/2024/03/Group-427320306.svg"
                        alt="AMNDTECH Software"
                      />
                    </div>
                  </div>
                </div>
                {/* right container */}
                <div className="col-span-2 flex flex-col justify-end">
                  <p className="text-2xl text-white text-start tracking-wide font-theme-font">
                    Click the button below to go to the home page
                  </p>
                  <Link
                    to={"/"}
                    className="flex justify-start items-center mt-5"
                  >
                    {/* button  */}
                    <div className="bg-white flex gap-x-3 items-center justify-between px-5 py-2 rounded-2xl delay-250">
                      <span className="text-gray-800 font-bold font-theme-font">
                        Home Page
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-gray-800 hover:shadow-md hover:shadow-slate-200 transition-color">
                        <HiOutlineArrowLongRight className="text-lg font-bold" />
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}

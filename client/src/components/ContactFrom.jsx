import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoMdKey } from "react-icons/io";
import { Link } from "react-router-dom";

function ContactFrom() {
  return (
    <div className="col-span-2 min-h-min md:h-[600px] grid md:grid-cols-2 gap-2">
      {/* left content */}
      <div className="h-80 md:h-full relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gray-100 opacity-0 hover:opacity-80 flex justify-center items-center">
          <Link to={""} class="text-lg font-semibold flex items-center gap-x-2">
            <span className="text-xl">Click Here</span>
            <span>
              <FaArrowUpRightFromSquare />
            </span>
          </Link>
        </div>
        <img
          loading="lazy"
          className="w-full h-full object-cover object-center"
          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/philip-oroni-MyY188YX0vU-unsplash.jpg.webp"
          alt="AMNDTECH Software"
        />
      </div>
      {/* Right content */}
      <div className="bg-theme-bg-dark rounded-2xl overflow-hidden p-4 md:p-10">
        <div className="h-full flex flex-col justify-between">
          {/* Top heading  */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex gap-x-2 items-center">
              <span className="rounded p-1 bg-gray-800 text-white">
                <IoMdKey />
              </span>
              <span className="text-gray-600 tracking-wide font-theme-font">
                UNDER NDA
              </span>
            </div>
            <div className="text-gray-600 tracking-wide font-theme-font">
              SOCIAL MEDIA
            </div>
          </div>
          {/* center content */}
          <div className="grow">
            {" "}
            <h2 className="text-white text-2xl font-semibold text-bold text-start tracking-wide font-theme-font mb-2">
              Got a Project in Mind? Let’s Talk!
            </h2>
            <p className="text-gray-600 text-start tracking-wide font-theme-font mb-2">
              Share the details of your project – like scope or business
              challenges. Our team will carefully study them and then we’ll
              figure out the next move together.
            </p>
            <form action="" className="flex flex-col gap-y-5">
              {/* full name  */}
              <div>
                <input
                  placeholder="Your full Name*"
                  className="w-full text-gray-600 outline-none border-0 font-theme-font bg-theme-bg-dark
                    border-b border-gray-600 py-2"
                  type="text"
                  id="customInput"
                />
              </div>
              {/* phone Number  */}
              <div>
                <input
                  placeholder="Your Phone number*"
                  className="w-full text-gray-600 outline-none border-0 font-theme-font bg-theme-bg-dark
                    border-b border-gray-600 py-2"
                  type="text"
                  id="customInput"
                />
              </div>
              {/* coperate email */}
              <div>
                <input
                  placeholder="Corporate email*"
                  className="w-full text-gray-600 outline-none border-0 font-theme-font bg-theme-bg-dark
                    border-b border-gray-600 py-2"
                  type="text"
                  id="customInput"
                />
              </div>
              {/* about your project  */}
              <div>
                <input
                  placeholder="About your Project*"
                  className="w-full text-gray-600 outline-none border-0 font-theme-font bg-theme-bg-dark
                    border-b border-gray-600 py-2"
                  type="text"
                  id="customInput"
                />
              </div>
            </form>
          </div>
          {/* button  */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-x-20 gap-y-5 mt-5">
            <div>
              <p className="text-white text-xs">
                By sending this form I confirm that I have read and accept the{" "}
                <span className="underline hover:no-underline text-white">
                  Privacy Policy
                </span>
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="text-gray-600 text-nowrap font-bold">
                View Case Study
              </span>
              <button className="p-3 text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                <HiOutlineArrowLongRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFrom;

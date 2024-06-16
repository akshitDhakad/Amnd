import React from "react";
// component imports
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import ServicesBanner from "../components/ServicesBanner.jsx";
import Testinomial from "../components/Testinomial.jsx";
import FlipCard from "../components/FlipCard.jsx";
import Carousel from "../components/Carousel.jsx";
import ClientCard from "../components/ClientCard.jsx";

import HoverCard from "../components/HoverCard.jsx";
// react icons
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { IoMdKey } from "react-icons/io";
import BlogTech from "../components/BlogTech.jsx";
import BlogCard from "../components/BlogCard.jsx";

export default function Blog() {
  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ),
    url('https://img.freepik.com/free-photo/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529358.jpg?t=st=1710583081~exp=1710586681~hmac=95ff826615a3b9ad2d4f3ac5074566d06ff9a7ea32e10e9b184e2b9647498f42&w=900')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backdropFilter: "blur(8px)",
  };

  return (
    <main className="about relative overflow-x-hidden">
      <Layout>
        {/* Hero Section  */}
        <section className="">
          <div
            className="abosolute -z-50 m-1 overflow-hidden top-0 h-screen flex items-center justify-center rounded-2xl"
            style={backgroundImg}
          >
            <div className="absolute  m-1 -z-10 bg-black opacity-50 rounded-2xl h-screen w-full"></div>
            <div className=" max-w-6xl m-auto px-4 md:px-10 py-5">
              {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
              <div className="md:grid grid-cols-2 gap-x-20 gap-y-10  m-auto">
                <div className="col-span-2 flex flex-col md:gap-5">
                  <div>
                    <h2 className="text-xl md:text-3xl text-white font-semibold tracking-wide font-theme-font">
                      TechBytes
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-6xl text-white font-bold tracking-wide font-theme-font">
                      Insights from AMNDTECH Software
                    </h1>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="text-white text-start tracking-wide font-theme-font">
                    Looking for turnkey custom web application development
                    services? We are AMNDTECH Software – a leading custom web
                    application development company with a recognized stand on
                    the market and a proven track record of completed projects.
                  </p>
                  <div className="flex justify-start items-center mt-5">
                    <div className="bg-white flex gap-x-3 items-center justify-between px-5 py-2 rounded-2xl delay-250">
                      <span className="text-gray-800 font-bold font-theme-font">
                        Arrage a call with Us
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-gray-800 hover:shadow-md hover:shadow-slate-200 transition-color">
                        <HiOutlineArrowLongRight className="text-lg font-bold" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pages Section  */}
        <section>
          <BlogTech />
        </section>

        {/* Our Services section  */}
        <section>
          <div className="relative max-w-6xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] right-[-125px] text-gray-500">
              Latest Blog
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Check
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Our Latest Blog
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2 md:grid grid-cols-3 gap-x-5 gap-y-20 justify-center items-center">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
            <div className="col-span-2 flex justify-center items-center">
              <button className="px-20 py-3 font-theme-font text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                Explore More
              </button>
            </div>
          </div>
        </section>

        {/* Contact us Form */}
        <section>
          <div className="relative max-w-6xl px-4 py-20 grid grid-cols-2 gap-2  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Let's Talk
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl mdtext-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Contact Us
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Let's Talk
                </h1>
              </div>
            </div>

            <div className="col-span-2 min-h-min md:h-screen grid md:grid-cols-2 gap-2">
              {/* left content */}
              <div className="h-80 md:h-full relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-100 opacity-0 hover:opacity-80 flex justify-center items-center">
                  <Link
                    to={""}
                    class="text-lg font-semibold flex items-center gap-x-2"
                  >
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
                      challenges. Our team will carefully study them and then
                      we’ll figure out the next move together.
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
                        By sending this form I confirm that I have read and
                        accept the{" "}
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
          </div>
        </section>

        {/* Type of solutions we build  */}
        <section>
          <div className="relative max-w-6xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Web Solutions
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Web Solutions
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Types of Web Solutions We Build
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2  md:h-96">
              <ServicesBanner />
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}

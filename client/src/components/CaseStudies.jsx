import React from "react";
import { CustomButton1 } from "./ui/CustomButtons";

function CaseStudies() {
  return (
    <section>
      {/* item 1 */}
      <div className="relative max-w-9xl px-4 py-20 grid md:grid-cols-2 gap-x-10 md:gap-y-10 m-auto">
        <span class="absolute font-semibold text-4xl md:text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500 text-shadow-2">
          Case Studies
        </span>
        {/* heading  */}
        <div className="md:col-span-2 flex flex-col ">
          <div className="md:mb-2">
            <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
              Our
            </h2>
          </div>
          <div className="md:mb-4">
            <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
              Case Studies
            </h1>
          </div>
        </div>
        {/* Left content */}
        <div className="order-3 md:order-2">
          <h3 className="font-bold text-2xl tracking-wide md:mb-5">
            Function4
          </h3>
          <h4 className="xl:text-2xl font-semibold tracking-wide text-md mb-2 text-gray-700">
            Event Management Platform, USA
          </h4>
          <p className="text-gray-900 text-justify md:text-start text-sm lg:text-base tracking-wide leading-5 font-theme-font mb-2">
            Function4 is a USA-based professional event ecosystem that offers a
            simple, user-friendly discovery venue for the financial services
            sector. The enterprise event management software features a single,
            real-time dashboard with zero setup for event attendees, hosts, and
            sponsors. Function4 also provides discovery, data, and tools to help
            the right people discover the right events.
          </p>

          <CustomButton1 title="View Case" textCss="text-gray-800" />
        </div>
        {/* Right content */}
        <div className="order-2 md:order-3 flex items-center justify-center mb-5 md:mb-0">
          <div className="w-full h-56 xl:h-80 rounded-lg overflow-hidden">
            <img
              loading="lazy"
              className="w-full h-full object-cover object-center"
              src="https://t4.ftcdn.net/jpg/01/64/26/27/360_F_164262701_BsbY2qe8M3fvvB4cBWsFLgeEXhgEukcw.jpg"
              alt="Our Case Studies "
            />
          </div>
        </div>
      </div>

      {/* item2 */}
      <div className="max-w-9xl px-4  grid md:grid-cols-2 gap-x-10 gap-y-10 m-auto">
        {/* Left content */}
        <div className="flex items-center justify-center">
          <div className="w-full h-56 xl:h-80 rounded-lg overflow-hidden">
            <img
              loading="lazy"
              className="w-full h-full object-cover object-center"
              src="https://t4.ftcdn.net/jpg/01/64/26/27/360_F_164262701_BsbY2qe8M3fvvB4cBWsFLgeEXhgEukcw.jpg"
              alt="Our Case Studies"
            />
          </div>
        </div>
        {/* Right content */}
        <div>
          <h3 className="font-bold text-2xl tracking-wide md:mb-5">
            ActivePlace
          </h3>
          <h4 className="xl:text-2xl font-semibold text-md tracking-wide mb-2 text-gray-700">
            dia platform with a marketplace fWellness social network and
            meeature, Australia
          </h4>
          <p className="text-gray-900 text-justify md:text-start text-sm lg:text-base tracking-wide leading-5 font-theme-font mb-2">
            ActivePlace is a social platform dedicated to health, fitness, and
            an active lifestyle. It is a three-sided network that connects
            people with like-minded individuals, mentors, and businesses – all
            related to physical activity and healthy living. The company
            approached the development team to create a wellness app that would
            cater to different categories of users and provide personalized
            functionality to each member group. The main goal was to build a
            unique project from scratch that combined social media and
            marketplace features.
          </p>

          <CustomButton1 title="View Case" textCss="text-gray-800" />
        </div>
      </div>

      {/* item 3 */}
      <div className="max-w-9xl py-20 grid px-4 md:grid-cols-2 gap-x-10 gap-y-10 m-auto">
        {/* Left content */}
        <div className="order-3 md:order-2">
          <h3 className="font-bold text-2xl tracking-wide mb-5">ILVE</h3>
          <h4 className="xl:text-2xl font-semibold text-md tracking-wide mb-2 text-gray-700">
            Event Management Platform, USA
          </h4>
          <p className="text-gray-900 text-justify md:text-start text-sm lg:text-base tracking-wide leading-5 font-theme-font mb-2">
            ILVE is a global manufacturer of gas and electric household cooking
            appliances with a reach across 40 countries worldwide. Since 1975,
            the company has been known as a niche brand specializing in
            developing an extensive range of built-in ovens and cookers for both
            commercial and domestic use. ILVE was looking to create a showroom
            assistant to increase the level of sales and make it smooth for the
            end client. Besides the end client-facing part, a variety of
            managerial dashboards were created to allow sales consultants and
            business managers to execute their functions and have everything
            controlled in one place.
          </p>

          <CustomButton1 title="View Case" textCss="text-gray-800" />
        </div>
        {/* Right content */}
        <div className="order-2 md:order-3 flex items-center justify-center">
          <div className="w-full h-56 xl:h-80 rounded-lg overflow-hidden">
            <img
              loading="lazy"
              className="w-full h-full object-cover object-center"
              src="https://t4.ftcdn.net/jpg/01/64/26/27/360_F_164262701_BsbY2qe8M3fvvB4cBWsFLgeEXhgEukcw.jpg"
              alt="Our Case Studies "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;

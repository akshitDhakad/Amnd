import React from 'react'
import { Link } from 'react-router-dom';
import {
  CustomButton1,
} from "./ui/CustomButtons.jsx";
import {
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { IoMdKey } from "react-icons/io";

const data = [
  {
    id: 1,
    title: "Social Media Screening Platform",
    subtitle: "UNDER NDA",
    category: "SOCIAL MEDIA",
    description:
      "The project is a web-based AI-powered platform for comprehensive social media background screening. Its supertask is to streamline potential employee background checks for companies, tackling employment risk management.",
    img: "https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/philip-oroni-MyY188YX0vU-unsplash.jpg.webp",
    link: "",
  },
  {
    id: 2,
    title: "Bridging MedTech and MarTech for Enhanced Patient Engagement",
    subtitle: "UNDER NDA",
    category: "MEDTECH/MARTECH",
    description:
      "Nabed is a SaaS platform at the crossroads of MedTech and MarTech. It enables caregivers to engage with patients using comprehensive, personalized educational content for better healthcare outcomes.",
    img: "https://devoxsoftware.com/wp-content/uploads/2024/02/growtika-nGoCBxiaRO0-unsplash.webp",
    link: "",
  },
];

function LatestWork() {
  return (
    <section>
      <div className="relative max-w-9xl px-4 py-10 lg:py-20 grid grid-cols-2 gap-y-10  m-auto">
        <span class="absolute font-semibold text-[3rem] md:text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500 text-shadow-2">
          Latest Works
        </span>
        {/* heading  */}
        <div className="col-span-2 flex flex-col ">
          <div className="mb-2">
            <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
              Case Studies
            </h2>
          </div>
          <div className="md:mb-4">
            <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
              Our Latest Works
            </h1>
          </div>
        </div>
        {/* project 1  */}
        {data?.map(
          ({ title, subtitle, category, description, img, link }, index) => {
            return (
              <div
                key={index}
                className="col-span-2 grid md:grid-cols-2 gap-x-5 gap-y-5"
              >
                {/* left content */}
                <div className={`${index%2 === 0?"order-2":"order-1"} h-80 md:h-96 2xl:h-[500px] relative rounded-xl lg:rounded-3xl overflow-hidden`}>
                  <div className="absolute inset-0 bg-gray-100 opacity-0 hover:opacity-80 flex justify-center items-center">
                    <Link
                      to={""}
                      className="text-lg font-semibold flex items-center gap-x-2"
                    >
                      <span className="text-xl">Click Here</span>
                      <span>
                        <FaArrowUpRightFromSquare />
                      </span>
                    </Link>
                  </div>
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src={img}
                    alt={title}
                  />
                </div>
                {/* Right content */}
                <div className={`${index%2=== 0?"order-1":"order-2"} bg-theme-bg-dark rounded-xl lg:rounded-3xl overflow-hidden p-4 md:p-10`}>
                  <div className="h-full flex flex-col justify-between gap-y-4">
                    {/* Top heading  */}
                    <div className="flex justify-between items-center">
                      <div className="flex gap-x-2 items-center">
                        <span className="rounded p-1 bg-gray-800 text-white">
                          <IoMdKey />
                        </span>
                        <span className="text-gray-600 tracking-wide font-theme-font">
                          {subtitle}
                        </span>
                      </div>
                      <div className="text-gray-600 tracking-wide font-theme-font">
                        {category}
                      </div>
                    </div>
                    {/* center content */}
                    <div>
                      {" "}
                      <h2 className="text-white text-2xl 2xl:text-3xl text-bold text-start tracking-wide font-theme-font mb-2">
                        {title}
                      </h2>
                      <p className="text-gray-600 text-base 2xl:text-xl text-start tracking-wide font-theme-font mb-2">
                        {description}
                      </p>
                    </div>
                    {/* button  */}
                    <CustomButton1
                      title="View Case Study"
                      textCss="text-gray-300"
                      link={link}
                    />
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default LatestWork
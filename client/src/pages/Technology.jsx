import React, { useState } from "react";
import Layout from "../components/Layout.jsx";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Testinomial from "../components/Testinomial.jsx";
import ClientCard from "../components/ClientCard.jsx";
import {
  CustomButton1,
  CustomButton2,
} from "../components/ui/CustomButtons.jsx";
// React icons
import ServicesBanner from "../components/ServicesBanner.jsx";
import AccordionCard from "../components/Accordion.jsx";
import DevTechnologies from "../components/DevTechnologies.jsx";
import ContactFrom from "../components/ContactFrom.jsx";
const data = [
  {
    _id: "0",
    title: "Full-stack web development services",
    description:
      "As an established professional web development company, we offer a broad array of professional web development service with a holistic approach. Our developers cover all use cases and tech stacks – from MERN to LAMP.",
  },
  {
    _id: "1",
    title: "Custom web applications",
    description:
      "Looking for an individual tech-driven touch? Our professional website development company will implement your business vision into a tailored web solution with a unique combo of technologies and features.",
  },
  {
    _id: "2",
    title: "Web support and maintenance",
    description:
      "Our professional web development service provides continual care for your web products to keep them up to date. We ensure robust security, backups, and software updates as well as embed the latest functionalities.",
  },
  {
    _id: "3",
    title: "Web Development Services",
    description:
      "Looking for a killing website with a sleek and responsive design? As a professional website development company, we specialize in creating innovative websites that capture your brand message.",
  },
  {
    _id: "4",
    title: "Website design and re-design",
    description:
      "Leverage our professional website development services to bring a new look and feel to your web presence. Get more traffic and leads with our UI/UX audit, enhanced security, and website performance.",
  },
  {
    _id: "5",
    title: "Next-gen web solutions",
    description:
      "Looking to step up your game with the latest technologies? Our team of developers will merge your solution with BI tools for a higher impact and holistic view of your performance.",
  },
];

const dataSet = [
  {
    _id: "1",
    title: "Team of Vetted Developers",
    description:
      "As an acknowledged professional website development company, we hire certified developers with proficiency in web technologies. We also make sure our hires keep up with the trendy technologies and frameworks.",
  },
  {
    _id: "2",
    title: "Unique Approach",
    description:
      "We set up your team according to your unique business needs. This allows us to ensure a perfect talent match and an ideal tech stack for your project.",
  },
  {
    _id: "3",
    title: "Easy Hiring",
    description:
      "Unlike traditional recruitment, we can extend your team in mere days. We also take over all administrative burdens like employee benefits, training, and equipment costs.",
  },
  {
    _id: "4",
    title: "Transparency",
    description:
      "Our collaboration will be based on a comprehensive outsourcing contract that clearly defines the scope of work, terms, budget, and deadlines.",
  },
  {
    _id: "5",
    title: "Full-cycle development",
    description:
      "Our team of developers yields end-to-end web development services - from ideation to maintenance. We can also take over your project mid-development to complete it.",
  },
  {
    _id: "6",
    title: "Scalability",
    description:
      "Adjust your team size to your current business needs by ramping up and down your tech talent. Thanks to easy hiring, you get dedicated team members fast and on-demand.",
  },
];

const faqs = [
  {
    _id: "1",
    title: "What do our Full-Stack Web Development Services include?",
    description:
      "Our Full-Stack Web Development Services encompass both front-end and back-end development, ensuring a seamless and cohesive user experience. We specialize in technologies like HTML, CSS, JavaScript, React, Angular, Node.js, Python, Ruby on Rails, and more. Our full-stack approach allows us to handle every aspect of your web project, from design to deployment and maintenance.",
  },
  {
    _id: "2",
    title: "What are the benefits of Custom Web Applications?",
    description:
      "Custom Web Applications are tailored to meet the specific needs of your business, offering greater flexibility and scalability than off-the-shelf solutions. We build bespoke applications that integrate seamlessly with your existing systems, enhance your workflows, and provide a unique user experience. Our custom solutions are designed to grow with your business, ensuring long-term value and efficiency.",
  },
  {
    _id: "3",
    title: "What does our Web Support and Maintenance service include?",
    description:
      "Our Web Support and Maintenance services ensure your website remains up-to-date, secure, and performing optimally. We offer regular updates, security patches, performance optimization, and troubleshooting. Our proactive approach helps prevent issues before they arise, providing peace of mind and allowing you to focus on your core business activities.",
  },
  {
    _id: "4",
    title: "What makes our Web Development Services stand out?",
    description:
      "Our Web Development Services are built on a foundation of expertise, innovation, and a commitment to quality. We stay ahead of industry trends and employ the latest technologies to deliver cutting-edge solutions. Our team is dedicated to understanding your unique business needs and crafting websites that are visually appealing, user-friendly, and optimized for performance and SEO.",
  },
  {
    _id: "5",
    title: "Why is Website Design and Re-Design important?",
    description:
      "Website Design and Re-Design are crucial for maintaining a modern, engaging online presence. A well-designed website enhances user experience, improves navigation, and increases conversions. Whether you need a new website or an overhaul of an existing one, our design experts will create a visually stunning and functional site that aligns with your brand and business objectives.",
  },
  {
    _id: "6",
    title: "What are Next-Gen Web Solutions?",
    description:
      "Next-Gen Web Solutions incorporate the latest advancements in web technologies to create innovative and future-proof websites. This includes progressive web apps (PWAs), single-page applications (SPAs), AI-driven functionalities, and responsive design. Our next-gen solutions ensure your website is fast, secure, and capable of delivering an exceptional user experience across all devices and platforms.",
  },
];

export default function Technology() {
  const [tab, setTab] = useState(0);
  const backgroundImg = {
    backgroundImage: `url('https://devoxsoftware.com/wp-content/uploads/2024/01/AnyConv.com__philip-oroni-gftMuFt8vNk-unsplash.webp')`,
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
            <div className=" max-w-9xl m-auto px-4 md:px-10 py-5">
              {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
              <div className="mt-20 md:grid grid-cols-5 gap-x-10 gap-y-10 m-auto">
                <div className="col-span-3 flex flex-col md:gap-5">
                  <div>
                    <h2 className="text-xl md:text-3xl text-white font-semibold tracking-wide font-theme-font">
                      Our Services
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-5xl text-white font-bold tracking-wide font-theme-font">
                      Web Development Services
                    </h1>
                  </div>
                </div>
                {/* right container */}
                <div className="mt-2 col-span-2 flex flex-col gap-y-2">
                  {/* button */}

                  <div className="bg-button-black group flex gap-x-3 items-center justify-between px-5 py-3 rounded-2xl delay-250">
                    <span className="text-white font-bold font-theme-font">
                      BACKEND DEVELOPMENT COMPANY
                    </span>
                    <button className="p-1 font-theme-font text-sm rounded-full group-hover:bg-black group-hover:text-white text-gray-800 hover:shadow-md hover:shadow-slate-200 transition-color">
                      <HiOutlineArrowLongRight className="text-lg font-bold" />
                    </button>
                  </div>

                  {/* button */}
                  <div>
                    {" "}
                    <div className="bg-button-black group flex gap-x-3 items-center justify-between px-5 py-3 rounded-2xl delay-250">
                      <span className="text-white font-bold font-theme-font">
                        FONT-END DEVELOPMENT COMPANY
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full group-hover:bg-black group-hover:text-white text-gray-800 hover:shadow-md hover:shadow-slate-200 transition-color">
                        <HiOutlineArrowLongRight className="text-lg font-bold" />
                      </button>
                    </div>
                  </div>
                  {/* button */}
                  <div>
                    {" "}
                    <div className="bg-button-black group flex gap-x-3 items-center justify-between px-5 py-3 rounded-2xl delay-250">
                      <span className="text-white font-bold font-theme-font">
                        DATABASE DEVELOPMENT COMPANY
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full group-hover:bg-black group-hover:text-white text-gray-800 hover:shadow-md hover:shadow-slate-200 transition-color">
                        <HiOutlineArrowLongRight className="text-lg font-bold" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* cards  */}
                <div className="mt-2 col-span-3 grid grid-cols-3 gap-x-5">
                  {/* card 1 */}
                  <div className="relative rounded-xl overflow-hidden p-2">
                    <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-md"></div>
                    <div className="relative h-24 md:h-40 z-10 ">
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
                    <div className="relative h-24 md:h-40 z-10 ">
                      <img
                        loading="lazy"
                        className="w-full h-full full object-container object-center"
                        src="https://devoxsoftware.com/wp-content/uploads/2024/03/logo-2.svg"
                        alt="AMNDTECH Software"
                      />
                    </div>
                  </div>
                  {/* card 3 */}
                  <div className="relative rounded-xl overflow-hidden p-2">
                    <div className="absolute rounded-xl overflow-hidden inset-0 bg-white bg-opacity-50 backdrop-blur-md"></div>
                    <div className="relative h-24 md:h-40 z-10 ">
                      <img
                        loading="lazy"
                        className="w-full h-full full object-container  object-center"
                        src="https://devoxsoftware.com/wp-content/uploads/2024/03/Group-427320306.svg"
                        alt="AMNDTECH Software"
                      />
                    </div>
                  </div>
                </div>
                {/* right container */}
                <div className="hidden md:block col-span-2">
                  <p className="text-white text-start tracking-wide font-theme-font">
                    Welcome to{" "}
                    <span className="font-semibold">Digitechii Software</span> -
                    your ultimate web development partner in the digital
                    landscape. We build future-proof and innovative solutions to
                    promote your business growth.
                  </p>
                  <div className="flex justify-start items-center mt-5">
                    {/* button  */}
                    <div className="bg-white group flex gap-x-3 items-center justify-between px-5 py-2 rounded-2xl delay-250">
                      <span className="text-gray-800 font-bold font-theme-font">
                        Arrage a call with Us
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full group-hover:bg-white group-hover:text-black text-white hover:shadow-md hover:shadow-slate-200 transition-color">
                        <HiOutlineArrowLongRight className="text-lg font-bold" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* Our webdevelopment process */}
        <section className="hidden md:block bg-gray-100">
          <div className="relative max-w-9xl px-4 py-20 md:grid  grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10  left-[-125px] text-gray-500 text-shadow-2">
              Web Process
            </span>
            {/* heading  */}
            <div className="md:col-span-3 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Development Process
                </h2>
              </div>
              <div className="md:mb-4">
                <h1 className="text-2xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Our Web Development Process
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="w-full md:col-span-3 grid grid-cols-1 md:grid-cols-3  gap-x-10">
              <div>
                {" "}
                <div className="bg-purple-600 group text-white flex gap-x-3 items-center justify-between px-5 py-2 rounded-2xl delay-250">
                  <span className="text-white font-bold font-theme-font">
                    Arrage a call with Us
                  </span>
                  <button className="p-1 font-theme-font text-sm rounded-full group-hover:bg-white group-hover:text-black text-white hover:shadow-md hover:shadow-slate-200 transition-color">
                    <HiOutlineArrowLongRight className="text-lg font-bold" />
                  </button>
                </div>
              </div>
              <div>
                <p className="font-theme-font text-sm">
                  The software development life cycle is the same for every
                  application or product. See how we approach Web Development:
                  we’ve built a detailed and well-tuned structure not to miss
                  anything.
                </p>
              </div>
              <div></div>
            </div>
            {/* bottom container  */}
            <div className="md:col-span-3 md:grid grid-cols-1 md:grid-cols-12 gap-x-10 border-t border-gray-400">
              {/* left container  */}
              <div className="md:h-96 w-full md:col-span-4 flex flex-col justify-between border-r border-gray-400 p-6">
                <div>
                  <div className="text-end text-gray-600 font-bold text-8xl opacity-20">
                    01
                  </div>
                  <div>
                    <h2 className="font-theme-font font-semibold text-3xl">
                      Discovery
                    </h2>
                  </div>
                </div>
                <div>
                  <p className="font-theme-font text-md">
                    we start by analyzing your business needs and project . For
                    tht , we define the problem and scope of your solution as
                    well as chat out core functionality and milestones.
                  </p>
                </div>
                <div className="flex gap-5">
                  <div>
                    <button className="p-3 text-lg bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-75">
                      <HiOutlineArrowLongRight className="text-lg rotate-180" />
                    </button>
                  </div>
                  <div>
                    <button className="p-3 text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-75">
                      <HiOutlineArrowLongRight className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
              {/* right container  */}
              <div className="md:h-96 md:col-span-8 flex flex-col justify-between p-6">
                {/* layer 1  */}
                <div className="grid grid-cols-3 items-center gap-x-10">
                  <div>
                    <div
                      onClick={() => setTab(0)}
                      className="bg-purple-600 group hover:cursor-pointer text-white flex gap-x-1 items-center justify-between px-5 py-2 rounded-2xl delay-250"
                    >
                      <span className="text-white font-semibold text-sm font-theme-font">
                        01 Discovery
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full group-hover:bg-white group-hover:text-black text-white hover:shadow-md hover:shadow-slate-200 transition-color">
                        <HiOutlineArrowLongRight className="text-lg font-bold" />
                      </button>
                    </div>
                  </div>
                  <div className="relative md:h-16 flex justify-center">
                    <svg
                      className="absolute z-50 h-16 w-36 md:h-28 md:w-60"
                      viewBox="0 0 260 99"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.95">
                        <path
                          d="M260 43.2L130 86.3L0 43.2L130 0L260 43.2Z"
                          fill={`${tab === 0 ? "#4793AF" : "#F1F1F1"}`}
                        ></path>
                        <path
                          d="M0 43.2002V55.0002L130 98.1002V86.3002L0 43.2002Z"
                          fill={`${tab === 0 ? "#1679AB" : "#E6E6E9"}`}
                        ></path>
                        <path
                          d="M260 43.2002V55.0002L130 98.1002V86.3002L260 43.2002Z"
                          fill={`${tab === 0 ? "#1679AB" : "#D1D1DA"}`}
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div></div>
                </div>
                {/* layer 2  */}
                <div className="grid grid-cols-3 items-center gap-x-10">
                  <div></div>
                  <div className="relative md:h-16 flex justify-center">
                    <svg
                      className="absolute z-40 h-16 w-36 md:h-28 md:w-60"
                      viewBox="0 0 260 99"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.95">
                        <path
                          d="M260 43.2L130 86.3L0 43.2L130 0L260 43.2Z"
                          fill={`${tab === 1 ? "#4793AF" : "#F1F1F1"}`}
                        ></path>
                        <path
                          d="M0 43.2002V55.0002L130 98.1002V86.3002L0 43.2002Z"
                          fill={`${tab === 1 ? "#1679AB" : "#E6E6E9"}`}
                        ></path>
                        <path
                          d="M260 43.2002V55.0002L130 98.1002V86.3002L260 43.2002Z"
                          fill={`${tab === 1 ? "#1679AB" : "#D1D1DA"}`}
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <div
                      onClick={() => setTab(1)}
                      className="bg-purple-600 group hover:cursor-pointer text-white flex gap-x-1 items-center justify-between px-5 py-2 rounded-2xl delay-250"
                    >
                      <button className="p-1 font-theme-font text-sm rounded-full group-hover:bg-white group-hover:text-black text-white hover:shadow-md hover:shadow-slate-200 transition-color">
                        <HiOutlineArrowLongRight className="text-lg font-bold rotate-180" />
                      </button>
                      <span className="text-white font-semibold text-sm font-theme-font">
                        02 Design and Development
                      </span>
                    </div>
                  </div>
                </div>
                {/* layer 3 */}
                <div className="grid grid-cols-3 items-center gap-x-10">
                  <div>
                    <div
                      onClick={() => setTab(2)}
                      className="bg-purple-600 group hover:cursor-pointer text-white flex gap-x-1 items-center justify-between px-5 py-2 rounded-2xl delay-250"
                    >
                      <span className="text-white font-semibold text-sm font-theme-font">
                        03 Full Cycle Test
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full group-hover:bg-white group-hover:text-black text-white hover:shadow-md hover:shadow-slate-200 transition-color">
                        <HiOutlineArrowLongRight className="text-lg font-bold" />
                      </button>
                    </div>
                  </div>
                  <div className="relative md:h-16 flex justify-center">
                    <svg
                      className="absolute z-30 h-16 w-36 md:h-28 md:w-60"
                      viewBox="0 0 260 99"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.95">
                        <path
                          d="M260 43.2L130 86.3L0 43.2L130 0L260 43.2Z"
                          fill={`${tab === 2 ? "#4793AF" : "#F1F1F1"}`}
                        ></path>
                        <path
                          d="M0 43.2002V55.0002L130 98.1002V86.3002L0 43.2002Z"
                          fill={`${tab === 2 ? "#1679AB" : "#E6E6E9"}`}
                        ></path>
                        <path
                          d="M260 43.2002V55.0002L130 98.1002V86.3002L260 43.2002Z"
                          fill={`${tab === 2 ? "#1679AB" : "#D1D1DA"}`}
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div></div>
                </div>
                {/* layer 4 */}
                <div className="grid grid-cols-3 items-center gap-x-10">
                  <div></div>
                  <div className="relative md:h-16 flex justify-center">
                    <svg
                      className="absolute z-20 h-16 w-36 md:h-28 md:w-60"
                      viewBox="0 0 260 99"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.95">
                        <path
                          d="M260 43.2L130 86.3L0 43.2L130 0L260 43.2Z"
                          fill={`${tab === 3 ? "#4793AF" : "#F1F1F1"}`}
                        ></path>
                        <path
                          d="M0 43.2002V55.0002L130 98.1002V86.3002L0 43.2002Z"
                          fill={`${tab === 3 ? "#1679AB" : "#E6E6E9"}`}
                        ></path>
                        <path
                          d="M260 43.2002V55.0002L130 98.1002V86.3002L260 43.2002Z"
                          fill={`${tab === 3 ? "#1679AB" : "#D1D1DA"}`}
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <div
                      onClick={() => setTab(3)}
                      className="bg-purple-600 group hover:cursor-pointer text-white flex gap-x-1 items-center justify-between px-5 py-2 rounded-2xl delay-250"
                    >
                      <button className="p-1 font-theme-font text-sm rounded-full group-hover:bg-white group-hover:text-black text-white hover:shadow-md hover:shadow-slate-200 transition-color">
                        <HiOutlineArrowLongRight className="text-lg font-bold rotate-180" />
                      </button>
                      <span className="text-white font-semibold text-sm font-theme-font">
                        04 Implementation
                      </span>
                    </div>
                  </div>
                </div>
                {/* layer 5 */}
                <div className="grid grid-cols-3 items-center gap-x-10">
                  <div>
                    {" "}
                    <div
                      onClick={() => setTab(4)}
                      className="bg-purple-600 group hover:cursor-pointer text-white md:flex gap-x-1 items-center justify-between px-5 py-2 rounded-2xl delay-250"
                    >
                      <span className="text-white font-semibold text-sm font-theme-font">
                        05 Maintenance
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full group-hover:bg-white group-hover:text-black text-white hover:shadow-md hover:shadow-slate-200 transition-color">
                        <HiOutlineArrowLongRight className="text-lg font-bold" />
                      </button>
                    </div>
                  </div>
                  <div className="relative md:h-16 flex justify-center">
                    <svg
                      className="absolute z-10 h-16 w-36 md:h-28 md:w-60"
                      viewBox="0 0 260 99"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.95">
                        <path
                          d="M260 43.2L130 86.3L0 43.2L130 0L260 43.2Z"
                          fill={`${tab === 4 ? "#4793AF" : "#F1F1F1"}`}
                        ></path>
                        <path
                          d="M0 43.2002V55.0002L130 98.1002V86.3002L0 43.2002Z"
                          fill={`${tab === 4 ? "#1679AB" : "#E6E6E9"}`}
                        ></path>
                        <path
                          d="M260 43.2002V55.0002L130 98.1002V86.3002L260 43.2002Z"
                          fill={`${tab === 4 ? "#1679AB" : "#D1D1DA"}`}
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technologies we use  */}
        <DevTechnologies />
        {/* Our Benefits */}
        <section className="bg-gray-100">
          <div className="relative max-w-9xl px-4 py-20 md:grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[25px] left-[-125px] text-gray-500 text-shadow-2">
              Development
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-700 font-bold tracking-wide font-theme-font">
                  Our Benefits
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-2xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Why Web Development Services by Digitechii ?
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2 grid md:grid-cols-3 gap-y-12  gap-x-20">
              {/* item 1 */}
              <div className="h-72 w-full md:w-96 p-5 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 relative">
                <div class="absolute top-5 left-5 h-12 w-12 font-bold text-8xl font-theme-font leading-none opacity-40">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="https://cdn-icons-png.freepik.com/256/7387/7387688.png?ga=GA1.1.705946748.1706705440&"
                    alt="Discovery icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Powerful front-end
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    Our professional website development services company makes
                    sure your solution is wrapped into a performant interface
                    with fast load times and engaging UX design. We balance the
                    UI and business logic to deliver user-friendly experiences.
                  </p>
                </div>
              </div>
              {/* item 2 */}
              <div className="h-72 w-full md:w-96 p-5 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 relative">
                <div class="absolute  top-5 left-5 h-12 w-12  font-bold text-8xl font-theme-font leading-none opacity-40  ">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="https://cdn-icons-png.freepik.com/256/1336/1336494.png?ga=GA1.1.705946748.1706705440&"
                    alt="Design and development icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Solid back-end
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5   font-theme-font">
                    Scalable architecture is what makes a winning web solution.
                    Our back-end artisans will build a flexible API-friendly
                    back-end with advanced data structures and elastic computing
                    capacity.
                  </p>
                </div>
              </div>

              {/* item 3 */}
              <div className="h-72 w-full md:w-96 p-5 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 relative">
                <div class="absolute top-5 left-5 h-12 w-12  font-bold text-8xl leading-none opacity-40  font-theme-font ">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://cdn-icons-png.freepik.com/256/4296/4296532.png?ga=GA1.1.705946748.1706705440&"
                    alt="Full-cycle testing"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Technical support
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    As part of our end-to-end professional website development
                    services, we take care of your digital assets, so that they
                    maintain uninterrupted operation. Whether it’s new features
                    or updated security, our developers make sure you have it.
                  </p>
                </div>
              </div>
              {/* item 4 */}
              <div className="h-72 w-full md:w-96 p-5 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 relative">
                <div class="absolute top-5 left-5 h-12 w-12  font-bold text-8xl leading-none opacity-40  font-theme-font ">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://cdn-icons-png.freepik.com/256/8099/8099542.png?ga=GA1.1.705946748.1706705440&"
                    alt="Prototyping and MVP development icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Diverse expertise
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    As a custom web development services company, we offer a
                    pool of technologies to deliver supreme web assets. Besides
                    fundamental technologies like Java and PHP, we can power
                    your solution with innovative tech stacks.
                  </p>
                </div>
              </div>
              {/* item 5 */}
              <div className="h-72 w-full md:w-96 p-5 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 relative">
                <div class="absolute top-5 left-5 h-12 w-12  font-bold text-8xl leading-none opacity-40  font-theme-font ">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://cdn-icons-png.freepik.com/256/2082/2082945.png?ga=GA1.1.705946748.1706705440&"
                    alt="Launch and maintenance icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Domain know-how
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    Being a global tech partner, we have gained extensive
                    experience in various domains. Be it fintech, martech, or
                    manufacturing, we can tackle your industry challenges with
                    performant web solutions and address specific business
                    needs.
                  </p>
                </div>
              </div>
              {/* item 6 */}
              <div className="h-72 w-full md:w-96 p-5 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 relative">
                <div class="absolute top-5 left-5 h-12 w-12  font-bold text-8xl leading-none opacity-40  font-theme-font">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://cdn-icons-png.freepik.com/256/12375/12375564.png?ga=GA1.1.705946748.1706705440&"
                    alt="End-to-end development icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Security
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    We prioritize security as one of the pillars of successful
                    digital transformation. That’s why we develop with security
                    in mind, paying attention to authentication and
                    authorization services, access control, and others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Digitechii Sofware */}
        <section className="">
          <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[25px] left-[-125px] text-gray-500 text-shadow-2">
              Why Digitechii Software?
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Why Digitechii Software?
                </h2>
              </div>
              <div className="md:mb-4">
                <h1 className="text-2xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Why WebArt Technologies ?
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2  gap-10">
              {dataSet.map((item, index) => (
                <AccordionCard item={item} />
              ))}
            </div>
          </div>
        </section>
        {/*want to start web development banner  */}
        <section className="">
          <div className="relative max-w-9xl px-4 py-20 m-auto">
            <ServicesBanner
              img={
                "https://devoxsoftware.com/wp-content/uploads/2024/03/Rectangle-3709-6.webp"
              }
              title={
                "Fast-track your product development and shorten time-to-market with Digitechii as your next talent supplier."
              }
              description={"Want to Start Web Development?"}
            />
          </div>
        </section>
        {/* Our CLients  */}
        <section>
          <div className="relative max-w-9xl px-4 md:py-20 grid grid-cols-2 gap-x-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font tracking-wide leading-none opacity-10 top-0 left-[1/2] text-graye-500 text-shadow-2">
              Clients
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Our
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Clients
                </h1>
              </div>
            </div>

            <div className="col-span-2">
              <ClientCard />
            </div>
          </div>
        </section>
        {/* testinomials section  */}
        <section>
          <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500 text-shadow-2">
              Testimonials
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:before:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Testimonials
                </h2>
              </div>
              <div className="md:mb-4">
                <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Client
                </h1>
              </div>
              <Testinomial />
            </div>
          </div>
        </section>
        {/* Faqs section  */}
        <section className="bg-gray-100">
          <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[25px] left-[-125px] text-gray-500 text-shadow-2">
              have a Doubt ?
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-700  tracking-wide font-semibold font-theme-font">
                  have a Doubt ?
                </h2>
              </div>
              <div className="md:mb-4">
                <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  OUR F.A.Q.
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2  gap-10">
              {faqs.map((item, index) => (
                <AccordionCard item={item} />
              ))}
            </div>
          </div>
        </section>
        {/* Contact us Form */}
        <ContactFrom />
      </Layout>
    </main>
  );
}

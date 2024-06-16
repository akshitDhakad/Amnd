import React, { useState } from "react";
import Layout from "../components/Layout.jsx";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import Testinomial from "../components/Testinomial.jsx";
import FlipCard from "../components/FlipCard.jsx";
import Carousel from "../components/Carousel.jsx";
import ClientCard from "../components/ClientCard.jsx";
// React icons
import { IoMdKey } from "react-icons/io";
import { Link } from "react-router-dom";
import ServicesBanner from "../components/ServicesBanner.jsx";
import AccordionCard from "../components/Accordion.jsx";
import { MdOutlineStar } from "react-icons/md";
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
    title: "What is User Interface (UI) Design?",
    description:
      "User Interface (UI) Design focuses on the aesthetics and layout of a digital product. Our UI design services ensure your application or website is visually appealing, intuitive, and user-friendly. We pay attention to color schemes, typography, and overall visual hierarchy to create interfaces that delight users and enhance usability.",
  },
  {
    _id: "2",
    title: "What encompasses User Experience (UX) Design?",
    description:
      "User Experience (UX) Design is all about creating a smooth and efficient user journey. Our UX design services focus on understanding user behavior, needs, and motivations to create products that provide meaningful and relevant experiences. We employ user research, wireframing, prototyping, and usability testing to ensure your digital products are both functional and enjoyable to use.",
  },
  {
    _id: "3",
    title: "Why choose Custom Web Design?",
    description:
      "Custom Web Design offers a tailored approach to creating your website, ensuring it reflects your brand identity and meets your specific business needs. We work closely with you to develop a unique design that stands out from the competition, incorporates your brand elements, and aligns with your business goals. Custom web design allows for greater flexibility and creativity compared to template-based solutions.",
  },
  {
    _id: "4",
    title: "What is Responsive Design, and why is it important?",
    description:
      "Responsive Design ensures your website or application functions seamlessly across all devices, from desktops to mobile phones. Our responsive design services adapt your digital product’s layout and elements to different screen sizes and orientations, providing an optimal viewing experience. This approach improves user satisfaction, increases engagement, and is essential for modern web development.",
  },
  {
    _id: "5",
    title: "What does Mobile UI/UX Design entail?",
    description:
      "Mobile UI/UX Design focuses on creating engaging and intuitive interfaces for mobile applications. Our services include designing for touch interactions, optimizing for smaller screens, and ensuring fast load times. We prioritize user-centric design principles to deliver mobile experiences that are both functional and visually appealing, enhancing user satisfaction and retention.",
  },
  {
    _id: "6",
    title: "What is SAAS CRM Design?",
    description:
      "SAAS CRM Design involves creating user interfaces and experiences for software-as-a-service (SAAS) customer relationship management (CRM) platforms. Our design services ensure your SAAS CRM system is easy to use, efficient, and meets the needs of your users. We focus on creating intuitive dashboards, clear data visualizations, and seamless workflows to enhance productivity and user satisfaction.",
  },
];

export default function UIDesignPage() {
  const [tab, setTab] = useState(0);

  const backgroundImg = {
    backgroundImage: `url('https://devoxsoftware.com/wp-content/uploads/2024/01/voicu-apostol-93F3aiv_ioM-unsplash.webp')`,
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
            <div className="absolute m-1 -z-10 bg-black opacity-50 rounded-2xl h-screen w-full"></div>
            <div className="max-w-6xl m-auto px-4 md:px-10 py-5">
              {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
              <div className="mt-20 md:grid grid-cols-5 gap-x-10 gap-y-10  m-auto">
                <div className="col-span-3 flex flex-col md:gap-5">
                  <div>
                    <h2 className="text-xl md:text-3xl text-white font-semibold tracking-wide font-theme-font">
                      Our Services
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-5xl text-white font-bold tracking-wide font-theme-font">
                      Outsource <br className="hidden md:block" /> Web Design
                    </h1>
                  </div>
                </div>
                {/* right container */}
                <div className="mt-2 col-span-2 flex flex-col gap-y-2">
                  {/* button */}
                  <div>
                    {" "}
                    <div className="bg-button-black  flex gap-x-3 items-center justify-between px-5 py-3 rounded-2xl delay-250">
                      <span className="text-white font-bold font-theme-font">
                        OUTSOURCE WEB DESIGN
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-gray-800 hover:shadow-md hover:shadow-slate-200 transition-color">
                        <HiOutlineArrowLongRight className="text-lg font-bold" />
                      </button>
                    </div>
                  </div>
                  {/* button */}
                  <div>
                    {" "}
                    <div className="bg-button-black  flex gap-x-3 items-center justify-between px-5 py-3 rounded-2xl delay-250">
                      <span className="text-white font-bold font-theme-font">
                        OUTSOURCE MOBILE APPLICATION
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-gray-800 hover:shadow-md hover:shadow-slate-200 transition-color">
                        <HiOutlineArrowLongRight className="text-lg font-bold" />
                      </button>
                    </div>
                  </div>
                  {/* button */}
                  <div>
                    {" "}
                    <div className="bg-button-black  flex gap-x-3 items-center justify-between px-5 py-3 rounded-2xl delay-250">
                      <span className="text-white font-bold font-theme-font">
                        QA OUTSOURCING
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-gray-800 hover:shadow-md hover:shadow-slate-200 transition-color">
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
                        className="w-full h-full  object-center"
                        src="https://devoxsoftware.com/wp-content/uploads/2024/03/logo-2.svg"
                        alt="AMNDTECH Software"
                      />
                    </div>
                  </div>
                  {/* card 3 */}
                  <div className="relative rounded-xl overflow-hidden p-2">
                    <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-md"></div>
                    <div className="relative h-24 md:h-40 z-10 ">
                      <img
                        loading="lazy"
                        className="w-full h-full obejct-contain object-center"
                        src="https://devoxsoftware.com/wp-content/uploads/2024/03/Group-427320306.svg"
                        alt="AMNDTECH Software"
                      />
                    </div>
                  </div>
                </div>
                {/* right container */}
                <div className="hidden md:block col-span-2">
                  <p className="text-white text-start tracking-wide font-theme-font">
                    AMNDTECH Software offers web design outsourcing services
                    according to various cooperation models – dedicated team,
                    outsourcing, staff augmentation, etc.
                  </p>
                  <div className="flex justify-start items-center mt-5">
                    {/* button  */}
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
          <div className="relative max-w-6xl py-20 px-4 md:grid grid-cols-3 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Web Development
            </span>
            {/* heading  */}
            <div className="col-span-3 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-3xl text-gray-600 font-bold tracking-wide font-theme-font">
                  We Provide
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-2xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Web Development Services We Provide
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="grid grid-cols-12"></div>
            {/* Right content */}
            <div className="col-span-2">
              {data.map((item, index) => (
                <AccordionCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Process  */}
        {/* Our webdevelopment process */}
        <section className="hidden md:block bg-gray-100">
          <div className="relative max-w-6xl px-4 py-20 md:grid  grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10  left-[-125px] text-gray-500">
              Web Process
            </span>
            {/* heading  */}
            <div className="md:col-span-3 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Our Process
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
                <div className="bg-purple-600 text-white flex gap-x-3 items-center justify-between px-5 py-2 rounded-2xl delay-250">
                  <span className="text-white font-bold font-theme-font">
                    Arrage a call with Us
                  </span>
                  <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-white hover:shadow-md hover:shadow-slate-200 transition-color">
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
                    <button className="p-3 text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                      <HiOutlineArrowLongRight className="text-lg rotate-180" />
                    </button>
                  </div>
                  <div>
                    <button className="p-3 text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
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
                    {" "}
                    <div
                      onClick={() => setTab(0)}
                      className="bg-purple-600  hover:cursor-pointer text-white flex gap-x-1 items-center justify-between px-5 py-2 rounded-2xl delay-250"
                    >
                      <span className="text-white font-semibold text-sm font-theme-font">
                        01 Discovery
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-white hover:shadow-md hover:shadow-slate-200 transition-color">
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
                      className="bg-purple-600  hover:cursor-pointer text-white flex gap-x-1 items-center justify-between px-5 py-2 rounded-2xl delay-250"
                    >
                      <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-white hover:shadow-md hover:shadow-slate-200 transition-color">
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
                      className="bg-purple-600  hover:cursor-pointer text-white flex gap-x-1 items-center justify-between px-5 py-2 rounded-2xl delay-250"
                    >
                      <span className="text-white font-semibold text-sm font-theme-font">
                        03 Full Cycle Test
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-white hover:shadow-md hover:shadow-slate-200 transition-color">
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
                      className="bg-purple-600  hover:cursor-pointer text-white flex gap-x-1 items-center justify-between px-5 py-2 rounded-2xl delay-250"
                    >
                      <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-white hover:shadow-md hover:shadow-slate-200 transition-color">
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
                      className="bg-purple-600 hover:cursor-pointer text-white md:flex gap-x-1 items-center justify-between px-5 py-2 rounded-2xl delay-250"
                    >
                      <span className="text-white font-semibold text-sm font-theme-font">
                        05 Maintenance
                      </span>
                      <button className="p-1 font-theme-font text-sm rounded-full hover:bg-black hover:text-white text-white hover:shadow-md hover:shadow-slate-200 transition-color">
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
        {/* Our Development Process  */}

        <section className="bg-theme-bg-dark ">
          <div className="relative max-w-6xl px-4 py-20 md:grid md:grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[3rem] md:text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-0 text-gray-500">
              Technologies
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-200 font-bold tracking-wide font-theme-font">
                  We Use
                </h2>
              </div>
              <div className="md:mb-4">
                <h1 className="text-3xl md:text-5xl text-white font-bold tracking-wide font-theme-font">
                  Technologies
                </h1>
              </div>
            </div>
            {/* Content  */}
            <div className="col-span-2 grid md:grid-cols-2 gap-x-5 gap-y-10">
              {/* left content */}

              {/* 1 card*/}
              <div className="bg-gray-100 md:h-72 w-auto p-4 md:p-10 flex flex-col items-center justify-center rounded-3xl shadow-md shadow-white">
                <h4 className="mb-4 mr-auto text-start text-xl font-bold font-theme-font">
                  Back End
                </h4>

                <div>
                  <div className="grid grid-cols-2  md:grid-cols-3 gap-x-2 gap-y-10 text-start tracking-wide leading-5 font-theme-font">
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-auto">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Nest.png.webp"
                          alt="NestJS"
                        />
                      </div>
                      <div className="font-semibold">NestJS</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-auto">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Flask_logo-1-1.png.webp"
                          alt="Flask"
                        />
                      </div>
                      <div className="font-semibold">Flask</div>
                    </div>

                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-auto">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/django-svgrepo-com-1.png.webp"
                          alt="Django"
                        />
                      </div>
                      <div className="font-semibold">Django</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-auto">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/express-js-icon-1.png.webp"
                          alt="Express.js"
                        />
                      </div>
                      <div className="font-semibold">Express.js</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-auto">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Microsoft_.NET_logo-1.png.webp"
                          alt=".NET"
                        />
                      </div>
                      <div className="font-semibold">.NET</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-auto">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/PHP-logo-1.png.webp"
                          alt="PHP"
                        />
                      </div>
                      <div className="font-semibold">PHP</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-auto">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Group-5.png.webp"
                          alt="Ruby"
                        />
                      </div>
                      <div className="font-semibold">Ruby</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-auto">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/spring.png.webp"
                          alt="Java Spring"
                        />
                      </div>
                      <div className="font-semibold">Java Spring</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-auto">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/python.png.webp"
                          alt="Python"
                        />
                      </div>
                      <div className="font-semibold">Python</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-auto">
                        <img
                          className="h-full w-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/node-js-1.png.webp"
                          alt="Node.js"
                        />
                      </div>
                      <div className="font-semibold">Node.js</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 2 */}
              <div className="bg-gray-100 md:h-72 w-auto p-4 md:p-10 flex flex-col items-center justify-center rounded-3xl shadow-md shadow-white">
                <h4 className="mb-4 mr-auto text-start text-xl font-bold font-theme-font">
                  Front End
                </h4>

                <div className="grid grid-cols-2  md:grid-cols-3 gap-x-2 gap-y-10 text-start tracking-wide leading-5 font-theme-font">
                  {/* item 1 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Next.png.webp"
                        alt="NestJS "
                      />
                    </div>
                    <div className="font-semibold">NestJS</div>
                  </div>
                  {/* item 2 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Group-4.png.webp"
                        alt="Flask"
                      />
                    </div>
                    <div className="font-semibold">Svelte</div>
                  </div>
                  {/* item 3 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Vue-js.png.webp"
                        alt="Vue.js"
                      />
                    </div>
                    <div className="font-semibold">Vue.js</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Angular_full_color_logo-1.png.webp"
                        alt="Angular"
                      />
                    </div>
                    <div className="font-semibold">Angular</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/React-icon-1.png.webp"
                        alt="React.js"
                      />
                    </div>
                    <div className="font-semibold">React.js</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Progressive_Web_Apps_Logo-1.png.webp"
                        alt="PWA"
                      />
                    </div>
                    <div className="font-semibold">PWA</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Typescript_logo_2020-1.png.webp"
                        alt="TypeScript"
                      />
                    </div>
                    <div className="font-semibold">TypeScript</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/JS.png.webp"
                      />
                    </div>
                    <div className="font-semibold">JavaScript </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/CSS3_and_HTML5_logos_and_wordmarks-1.png.webp"
                        alt="HTML/CSS"
                      />
                    </div>
                    <div className="font-semibold">HTML/CSS</div>
                  </div>
                </div>
              </div>

              {/* card 3 */}
              <div className="bg-gray-100 md:h-72 w-auto p-4 md:p-10 flex flex-col items-center justify-center rounded-3xl shadow-md shadow-white">
                <h4 className="mb-4 mr-auto text-start text-xl font-bold font-theme-font">
                  Database Development
                </h4>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-10 text-start tracking-wide leading-5 font-theme-font">
                  {/* item 1 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/mariadb-1.png.webp"
                        alt="MariaDB "
                      />
                    </div>
                    <div className="font-semibold">MariaDB</div>
                  </div>
                  {/* item 2 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/redis-logo-svgrepo-com-1.png.webp"
                        alt="Redis"
                      />
                    </div>
                    <div className="font-semibold">Redis</div>
                  </div>
                  {/* item 3 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Cassandra.png.webp"
                        alt="Cassandra"
                      />
                    </div>
                    <div>Cassandra</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/mongodb-svgrepo-com-1.png.webp"
                        alt="MongoDB"
                      />
                    </div>
                    <div>MongoDB</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/oracle-svgrepo-com-1.png.webp"
                        alt="Oracle DB"
                      />
                    </div>
                    <div>Oracle DB</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Microsoft-SQL-Server-1.png.webp"
                        alt="SQL Server"
                      />
                    </div>
                    <div>SQL Server</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Postgresql_elephant-1.png.webp"
                        alt="PostgreSQL"
                      />
                    </div>
                    <div>PostgreSQL</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/mysqlworkbench_93532-1.png.webp"
                      />
                    </div>
                    <div>MySQL</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/elasticsearch-1.png.webp"
                        alt="Elasticsearch"
                      />
                    </div>
                    <div>Elasticsearch</div>
                  </div>
                </div>
              </div>
              {/* item 4 */}
              <div className="bg-gray-100 md:h-72 w-auto p-4 md:p-10 flex flex-col items-center justify-center rounded-3xl shadow-md shadow-white">
                <h4 className="mb-4 mr-auto text-start text-xl font-bold font-theme-font">
                  DevOps & Cloud
                </h4>

                <div className="grid grid-cols-2  md:grid-cols-3 gap-x-2 gap-y-10 text-start tracking-wide leading-5 font-theme-font">
                  {/* item 1 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Next.png.webp"
                        alt="NestJS "
                      />
                    </div>
                    <div className="font-semibold">NestJS</div>
                  </div>
                  {/* item 2 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Group-4.png.webp"
                        alt="Flask"
                      />
                    </div>
                    <div className="font-semibold">Svelte</div>
                  </div>
                  {/* item 3 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Vue-js.png.webp"
                        alt="Vue.js"
                      />
                    </div>
                    <div>Vue.js</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Angular_full_color_logo-1.png.webp"
                        alt="Angular"
                      />
                    </div>
                    <div>Angular</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/React-icon-1.png.webp"
                        alt="React.js"
                      />
                    </div>
                    <div>React.js</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Progressive_Web_Apps_Logo-1.png.webp"
                        alt="PWA"
                      />
                    </div>
                    <div>PWA</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Typescript_logo_2020-1.png.webp"
                        alt="TypeScript"
                      />
                    </div>
                    <div>TypeScript</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/JS.png.webp"
                      />
                    </div>
                    <div>JavaScript </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/CSS3_and_HTML5_logos_and_wordmarks-1.png.webp"
                        alt="HTML/CSS"
                      />
                    </div>
                    <div>HTML/CSS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Benefits */}

        <section className="bg-gray-100">
          <div className="relative max-w-6xl px-4 py-20 md:grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[25px] left-[-125px] text-gray-500">
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
                  Why Web Development Services by AMNDTECH?
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

        {/* Why WebArt Sofware */}

        <section className="">
          <div className="relative max-w-6xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[25px] left-[-125px] text-gray-500">
              Why WebArt Software?
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Why WebArt Software?
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
          <div className="relative max-w-6xl px-4 py-20 m-auto">
            <ServicesBanner
              img={
                "https://devoxsoftware.com/wp-content/uploads/2024/03/Rectangle-3709-6.webp"
              }
              title={
                "Fast-track your product development and shorten time-to-market with AMNDTECH as your next talent supplier."
              }
              description={"Want to Start Web Development?"}
            />
          </div>
        </section>

        {/* Our CLients  */}
        <section>
          <div className="relative max-w-6xl px-4 md:py-20 grid grid-cols-2 gap-x-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font tracking-wide leading-none opacity-10 top-0 left-[1/2] text-graye-500">
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
          <div className="relative max-w-6xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
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
          <div className="relative max-w-6xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[25px] left-[-125px] text-gray-500">
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
      </Layout>
    </main>
  );
}

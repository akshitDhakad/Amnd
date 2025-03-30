import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
const services = {
  0: [
    {
      title: "Web Development",
      description:
        "Build & maintain sites progressibe web applications (PWAs) and single-page applications (SPAs).",
      link: "/service/web-development",
      img: "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/671ac0eee5122fad4a15d89c_web-design-service.png",
    },

    {
      title: "Front End Development",
      description: "Responsive and User-friendly UI/UX.",
      link: "/service/frontend-development",
    },
    {
      title: "Mobile Development",
      description: "iOS & Android apps.",
      link: "/service/mobile-development",
    },
    {
      title: "UI/UX Design",
      description: "Design & usability.",
      link: "/service/ui-development",
      img: "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/671ac0ed8fe1f994a096139f_ui-ux-design-service.png",
    },
    {
      title: "Back End Development",
      description: "Powerful ,scalable and secure servers.",
      link: "/service/backend-development",
      img: "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/671ad9723c3dff2d615c85a5_web-development-service.png",
    },
    {
      title: "DevOps Development",
      description: "Faster deployments",
      link: "/service/devops-development",
    },
    {
      title: "Quality Assurance",
      description: "Bug-free software",
      link: "/service/quality-assurance",
    },
    {
      title: "Data Analytics",
      description:
        "Creating scalable operational or analytical databases tailored to meet specific business needs, ensuring data integrity, security, and optimal performance.",
      link: "/service/data-analytics",
    },
    {
      title: "Business Intelligence",
      description:
        "Unlock insights, drive decisions. Harness the power of Business Intelligence for data-driven strategies and informed decision-making.",
      link: "/service/business-intelligence",
    },
  ],
  1: [
    {
      title: "SEO Optimization",
      description: "Boost rankings & visibility.",
      link: "/service/seo-optimization",
    },
    {
      title: "Google Ads",
      description: "Targeted paid campaigns.",
      link: "/service/google-ads",
    },
    {
      title: "Instagram Ads",
      description: "Engage with your audience.",
      link: "/service/instagram-ads",
    },
    {
      title: "YouTube Content",
      description: "Engaging video content.",
      link: "/service/youtube-content",
    },
    {
      title: "Content Writing",
      description: "High-quality & engaging content.",
      link: "/service/content-writing",
    },
    {
      title: "Video Editing",
      description: "Professional video production.",
      link: "/service/video-editing",
    },
    {
      title: "UX/UI Development",
      description: "Figma designs & prototypes.",
      link: "/service/ux-ui-development",
    },
    {
      title: "Email Marketing",
      description: "Targeted email campaigns.",
      link: "/service/email-marketing",
    },
  ],
};

const DropDownMenu = ({ setNavdrop }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div
      onMouseLeave={() => setNavdrop(false)}
      className="absolute m-auto w-full top-12 left-0 mt-7 px-4 py-0 bg-gray-50 shadow-lg overflow-hidden z-50"
    >
      {/* Web Development  */}
      <div className="max-w-9xl m-auto py-10 grid grid-cols-5 gap-x-20">
        <div className="col-span-2">
          <div onClick={() => setActiveIndex(0)} className="cursor-pointer">
            <h2
              className={`${
                activeIndex === 0 ? "text-gray-800" : "text-gray-600"
              } text-2xl font-semibold text-left`}
            >
              All Expertise
            </h2>
            <p
              className={`${
                activeIndex === 0 ? "text-gray-800" : "text-gray-600"
              } text-gray-700 text-xs 2xl:text-base text-justify mt-3`}
            >
              We offer a wide range of services to help you achieve your
              business goals. Our services include web development, mobile
              development, quality assurance, business intelligence, and more.
            </p>
          </div>
          <div
            className="mt-10 cursor-pointer"
            onClick={() => setActiveIndex(1)}
          >
            <h2
              className={`${
                activeIndex === 1 ? "text-gray-800" : "text-gray-600"
              } text-2xl font-semibold text-left`}
            >
              Digital marketing
            </h2>
            <p
              className={`${
                activeIndex === 1 ? "text-gray-800" : "text-gray-600"
              } text-xs 2xl:text-base text-justify mt-3`}
            >
              We offer a comprehensive range of digital marketing services to
              boost your online presence and drive business growth. Our services
              include SEO optimization, Google Ads, Instagram Ads, content
              writing, video editing, email marketing, and more to help you
              reach and engage your target audience effectively.
            </p>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-x-4 gap-y-5 text-start text-gray-800">
          {services[activeIndex]?.map((service, index) => (
            <Link
              key={index}
              to={service?.link}
              className="hover:bg-gray-100 flex items-center gap-x-2 rounded-md shadow-sm border px-2 py-1.5"
            >
              <img
                loading="lazy"
                className="h-8 w-8 rounded-md hover:border-b-red-200"
                src={service?.img}
                alt=""
              />
              <h3 className="text-base font-semibold flex items-center gap-x-2">
                {service?.title}{" "}
                <span className="text-gray-700">
                  <HiOutlineArrowLongRight />
                </span>
              </h3>
              {/* <p className="text-gray-600 text-xs text-justify mt-3">
                  {service.description}
                </p> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;

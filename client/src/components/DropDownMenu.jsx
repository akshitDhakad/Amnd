import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web Development",
    description:
      "Designing, building, maintaining, and evolving static and dynamic web applications, progressive web applications (PWAs) and single-page applications (SPAs).",
    link: "/service/web-development",
  },

  {
    title: "Front End Development",
    description:
      "Making your product’s client-side more user-friendly, SEO-optimized, compatible across devices and resistant to higher user loads from their very first contact.",
    link: "/service/frontend-development",
  },
  {
    title: "Mobile Development",
    description:
      "Developing native or cross-platform mobile applications for both iOS and Android platforms, focusing on responsive design, scalable back-end and databases, and possibilities for scaling.",
    link: "/service/mobile-development",
  },
  {
    title: "UI/UX Design",
    description:
      "We will embody your product into a physical appearance, combining aesthetics with usability, aligning it with brand identity and business goals, and tailoring it to your user personas.",
    link: "/service/ui-development",
  },
  {
    title: "Back End Development",
    description:
      "Providing powerful back-end systems that are the backbone of web applications, ensuring scalability, security, seamless data management, and high load resistance.",
    link: "/service/backend-development",
  },
  {
    title: "DevOps Development",
    description:
      "Enhancing software delivery speed and reliability through expert DevOps strategies, integrating development and operations for efficient workflows.",
    link: "/service/devops-development",
  },
  {
    title: "Quality Assurance",
    description:
      "Ensuring the highest level of quality through meticulous testing and validation processes.",
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
];

const DropDownMenu = ({ setNavdrop }) => {
  return (
    <div
      // onMouseLeave={() => setNavdrop(false)}
      className="absolute top-11 left-0 mt-7 max-w-9xl px-4 py-0 bg-gray-50 shadow-lg overflow-hidden z-50"
    >
      <div className="max-w-8xl m-auto py-10 grid grid-cols-5 gap-x-10">
        <div className="col-span-2">
          <h2 className="text-black hover:text-purple-600 text-3xl font-semibold text-left">
            All Expertise
          </h2>
          <p className="text-gray-600 text-xs text-justify mt-3">
            We offer a wide range of services to help you achieve your business
            goals. Our services include web development, mobile development,
            quality assurance, business intelligence, and more.
          </p>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-8 text-start">
          {services?.map((service, index) => (
            <div key={index}>
              <Link to={service.link}>
                <h3 className="text-lg font-semibold text-black hover:text-purple-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs text-justify mt-3">
                  {service.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;

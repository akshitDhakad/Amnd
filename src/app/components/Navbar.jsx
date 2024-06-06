import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [navhover, setNavhover] = useState(false);
  const [navdrop, setNavdrop] = useState(false);

  return (
    <nav
      onMouseEnter={() => setNavhover(true)}
      onMouseLeave={() => {
        setNavhover(false);
      }}
      className="absolute  z-50 w-full transprent hover:bg-theme-bg-light"
    >
      <div className=" max-w-6xl m-auto">
        <div className="flex items-center py-5 px-10">
          <div className="flex-1 text-lg">
            <Link to="/">
              <img
                loading="lazy"
                className="h-8 w-auto"
                src="https://devoxsoftware.com/wp-content/themes/main/assets/images/logo.svg"
                alt="Brand logo"
              />
            </Link>
          </div>
          <div className="flex-3">
            <ul className="grid grid-cols-7 gap-x-2 justify-center items-center">
              {/* Experties */}
              <li
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link to="/experties">Experties</Link>
              </li>
              {/* Technology */}
              <li
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link to="/technology">Technology</Link>
              </li>
              {/* Services */}
              <li
                onMouseEnter={() => setNavdrop(true)}
                // onMouseLeave={() => setNavdrop(false)}
                className={` ${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link>Services</Link>
                {navdrop && (
                  <div
                    onMouseLeave={() => setNavdrop(false)}
                    className="absolute left-0 mt-7 w-screen bg-gray-200 shadow-lg overflow-hidden z-50 "
                  >
                    <div className="max-w-6xl m-auto py-10 grid grid-cols-5 gap-x-10">
                      <div className="col-span-2">
                        <h2 className="text-3xl font-semibold text-left">
                          All Expertise
                        </h2>
                        <p className="text-gray-600 text-xs text-justify mt-3">
                          We offer a wide range of services to help you achieve
                          your business goals. Our services include web
                          development, mobile development, quality assurance,
                          business intelligence, and more.
                        </p>
                      </div>
                      <div className="col-span-3 grid grid-cols-3 gap-8 text-start">
                        {/* DevOps Development */}
                        <Link to={"/service/devops-development"}>
                          <h3 className="text-2xl font-semibold">
                            DevOps Development
                          </h3>

                          <p className="text-gray-600 text-xs text-justify mt-3">
                            Enhancing software delivery speed and reliability
                            through expert DevOps strategies, integrating
                            development and operations for efficient workflows.
                          </p>
                        </Link>
                        {/* Quality Assurance */}
                        <Link to={"/service/quality-assrurance"}>
                          <h3 className="text-2xl font-semibold">
                            Quality Assurance
                          </h3>

                          <p className="text-gray-600 text-xs text-justify mt-3">
                            Enhancing software delivery speed and reliability
                            through expert DevOps strategies, integrating
                            development and operations for efficient workflows.
                          </p>
                        </Link>
                        {/* Web Development */}
                        <Link to={"/service/web-development"}>
                          <h3 className="text-2xl font-semibold">
                            Web Development{" "}
                          </h3>

                          <p className="text-gray-600 text-xs text-justify mt-3">
                            Designing, building, maintaining, and evolving
                            static and dynamic web applications, progressive web
                            applications (PWAs) and single-page application
                            (SPAs).
                          </p>
                        </Link>
                        {/* Data Analytics */}
                        <Link to={"/service/data-analytics"}>
                          <h3 className="text-2xl font-semibold">
                            Data <br />
                            Analytics
                          </h3>

                          <p className="text-gray-600 text-xs text-justify mt-3">
                            Creating scalable operational or analytical
                            databases tailored to meet specific business needs,
                            ensuring data integrity, security, and optimal
                            performance.
                          </p>
                        </Link>
                        {/* Front End*/}
                        <Link to={"/service/fontend-development"}>
                          <h3 className="text-2xl font-semibold">
                            Front End Development
                          </h3>

                          <p className="text-gray-600 text-xs text-justify mt-3">
                            Making your product’s client-side more
                            user-friendly, SEO-optimized, compatible across
                            devices and resistant to higher user loads from
                            their very first contact.
                          </p>
                        </Link>
                        {/*Mobile Development*/}
                        <Link to={"/service/mobile-development"}>
                          <h3 className="text-2xl font-semibold">
                            Mobile Development
                          </h3>

                          <p className="text-gray-600 text-xs text-justify mt-3">
                            Developing native or cross-platform mobile
                            applications for both iOS and Android platforms,
                            focusing on responsive design, scalable back-end and
                            databases, and possibilities for scaling.
                          </p>
                        </Link>
                        {/* UI/UX Design*/}
                        <Link to={"/service/ui-development"}>
                          <h3 className="text-2xl font-semibold">
                            UI/UX <br /> Design
                          </h3>

                          <p className="text-gray-600 text-xs text-justify mt-3">
                            We will embody your product into a physical
                            appearance, combining aesthetics with usability,
                            aligning it with brand identity and business goals,
                            and tailoring it to your user personas.
                          </p>
                        </Link>
                        {/* Back End*/}
                        <Link to={"/service/backend-development"}>
                          <h3 className="text-2xl font-semibold">
                            Back End Development
                          </h3>
                          <p className="text-gray-600 text-xs text-justify mt-3">
                            Providing powerful back-end systems that are the
                            backbone of web applications, ensuring scalability,
                            security, seamless data management and high load
                            resistance.
                          </p>
                        </Link>
                        {/* Business Intelligence */}
                        <Link to={"/service/business-intelligence"}>
                          <h3 className="text-2xl font-semibold">
                            Business Intelligence
                          </h3>

                          <p className="text-gray-600 text-xs text-justify mt-3">
                            Unlock insights, drive decisions. Harness the power
                            of Business Intelligence for data-driven strategies
                            and informed decision-making.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              {/* Industries */}
              <li
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link to="/industrial">Industries</Link>
              </li>
              {/* Careers */}
              <li
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link to="/career">Careers</Link>
              </li>
              {/* About Us */}
              <li
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link to="/about-us">About Us</Link>
              </li>
              <li
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link to="/blogs">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="px-5 py-2 font-theme-font text-sm bg-purple-600 text-white rounded-2xl hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-slate-200 transition-color delay-250">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

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
        <div className="hidden md:flex items-center py-5 px-10">
          <div className="flex-1 text-lg">
            <Link to="/" onMouseEnter={() => setNavdrop(false)}>
              {navhover ? (
                <>
                  <img
                    loading="lazy"
                    className="h-12 w-auto"
                    src="/assets/logo/amnd-dark.png"
                    alt="Brand logo"
                  />
                </>
              ) : (
                <>
                  <img
                    loading="lazy"
                    className="h-12 w-auto"
                    src="/assets/logo/amnd-white.png"
                    alt="Brand logo"
                  />
                </>
              )}
            </Link>
          </div>
          <div className="flex-3">
            <ul className="grid grid-cols-7 gap-x-2 justify-center items-center">
              {/* Experties */}
              {/* <li
                onMouseEnter={() => setNavdrop(false)}
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link to="/experties">Experties</Link>
              </li> */}
              {/* Services */}
              <li
                onMouseEnter={() => setNavdrop(true)}
                // onMouseLeave={() => setNavdrop(false)}
                className={` ${
                  navhover
                    ? "font-theme-font text-sm text-center transition-color"
                    : "font-theme-font text-sm text-center transition-color "
                }`}
              >
                <Link
                  className={` ${
                    navhover
                      ? " text-black hover:text-purple-600 "
                      : " text-white hover:text-purple-600"
                  }`}
                >
                  Services
                </Link>
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
                          <h3 className="text-2xl font-semibold text-black hover:text-purple-600 ">
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
                          <h3 className="text-2xl font-semibold text-black hover:text-purple-600 ">
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
                          <h3 className="text-2xl font-semibold text-black hover:text-purple-600 ">
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
                          <h3 className="text-2xl font-semibold text-black hover:text-purple-600 ">
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
                          <h3 className="text-2xl font-semibold text-black hover:text-purple-600 ">
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
                          <h3 className="text-2xl font-semibold text-black hover:text-purple-600 ">
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
                          <h3 className="text-2xl font-semibold text-black hover:text-purple-600 ">
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
                          <h3 className="text-2xl font-semibold text-black hover:text-purple-600 ">
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
                          <h3 className="text-2xl font-semibold text-black hover:text-purple-600 ">
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
              {/* Technology */}
              <li
                onMouseEnter={() => setNavdrop(false)}
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link to="/technology">Technology</Link>
              </li>

              {/* Industries */}
              <li
                onMouseEnter={() => setNavdrop(false)}
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
                onMouseEnter={() => setNavdrop(false)}
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
                onMouseEnter={() => setNavdrop(false)}
                className={`${
                  navhover
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purple-600 transition-color "
                }`}
              >
                <Link to="/about-us">About Us</Link>
              </li>
              {/* Blog */}
              <li
                onMouseEnter={() => setNavdrop(false)}
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
          {/* Contact Us */}
          <div>
            <button
              onMouseEnter={() => setNavdrop(false)}
              className="px-5 py-2 font-theme-font text-sm bg-purple-600 text-white rounded-2xl hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-slate-200 transition-color delay-250"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div>
          <div className="md:hidden flex items-center justify-between py-5 px-10">
            {/* button */}
            <div className="hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 text-white "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            {/* logo */}
            <div>
              <Link to="/">
                <img
                  loading="lazy"
                  className="h-8 w-auto"
                  src="https://devoxsoftware.com/wp-content/themes/main/assets/images/logo.svg"
                  alt="Brand logo"
                />
              </Link>
            </div>

            {/* contact button  */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

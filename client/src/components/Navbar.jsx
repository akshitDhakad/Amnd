import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { IoMdCall } from "react-icons/io";
import ContactUsModal from "./ContactUsModal";
import DropDownMenu from "./DropDownMenu";

// services 
const serviceLinks = {
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

function Navbar() {
  const [navhover, setNavhover] = useState(false);
  const [navdrop, setNavdrop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileNavdrop, setMobileNavdrop] = useState(false);
  const [contactUsModal, setContactUsModal] = useState(false);

  // Scroll window
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      onMouseEnter={() => setNavhover(true)}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || navdrop ? "bg-white shadow-md text-gray-800" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-9xl w-full m-auto">
        {/* PC view */}
        <div className="w-full hidden md:flex items-center py-5 px-4 border-b border-gray-300 border-opacity-20">
          <div className="flex-1 text-lg">
            <Link to="/" onMouseEnter={() => setNavdrop(false)}>
              <img
                loading="lazy"
                className="h-12 2xl:h-16 w-auto"
                src="/assets/logo/digitechii.png"
                alt="Digitechii logo"
              />
            </Link>
          </div>
          <div className="flex-3">
            <ul className="grid grid-cols-7 gap-x-2 justify-center items-center">
              {/* Services */}
              <li
                onMouseEnter={() => setNavdrop(true)}
                className={`${
                  scrolled
                    ? "font-theme-font text-sm 2xl:text-lg text-center transition-color"
                    : "font-theme-font text-sm 2xl:text-lg text-center transition-color "
                }`}
              >
                <Link>Services</Link>
                {navdrop && (
                  <DropDownMenu
                    setNavdrop={setNavdrop}
                    serviceLinks={serviceLinks}
                  />
                )}
              </li>
              {/* Technology */}
              <li
                onMouseEnter={() => setNavdrop(false)}
                className={`${
                  scrolled
                    ? "font-theme-font text-sm 2xl:text-lg text-center transition-color"
                    : "font-theme-font text-sm 2xl:text-lg text-center transition-color "
                }`}
              >
                <Link to="/technology">Technology</Link>
              </li>
              {/* Our work */}
              <li
                onMouseEnter={() => setNavdrop(false)}
                className={`${
                  scrolled
                    ? "font-theme-font text-sm 2xl:text-lg text-center hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm 2xl:text-lg text-center hover:text-purpli-600 transition-color "
                }`}
              >
                <Link to="/our-work">Our work</Link>
              </li>
              {/* Careers */}
              <li
                onMouseEnter={() => setNavdrop(false)}
                className={`${
                  scrolled
                    ? "font-theme-font text-sm 2xl:text-lg text-center transition-color"
                    : "font-theme-font text-sm 2xl:text-lg text-center hover:text-purpli-600 transition-color "
                }`}
              >
                <Link to="/career">Careers</Link>
              </li>
              {/* About Us */}
              <li
                onMouseEnter={() => setNavdrop(false)}
                className={`${
                  scrolled
                    ? "font-theme-font text-sm 2xl:text-lg text-center transition-color"
                    : "font-theme-font text-sm 2xl:text-lg text-center hover:text-purpli-600 transition-color "
                }`}
              >
                <Link to="/about-us">About Us</Link>
              </li>
              {/* Blog */}
              <li
                onMouseEnter={() => setNavdrop(false)}
                className={`${
                  scrolled
                    ? "font-theme-font text-sm 2xl:text-lg text-center transition-color"
                    : "font-theme-font text-sm 2xl:text-lg text-center hover:text-purpli-600 transition-color "
                }`}
              >
                <Link to="/blogs">Blog</Link>
              </li>
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <Link to={"/contact-us"}>
              <button className="flex items-center gap-x-2 px-5 py-2 font-theme-font text-sm bg-purple-600 2xl:text-lg text-white rounded-3xl hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-slate-200 transition-color delay-75">
                <IoMdCall className="h-4 2xl:h-8" /> Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden w-full flex items-center justify-between py-5 px-4">
          {/* button */}
          <div
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`${
              scrolled
                ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color hover:cursor-pointer"
                : "font-theme-font text-sm text-center text-white hover:text-purpli-600 transition-color hover:cursor-pointer"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          {/* logo */}
          <div>
            {scrolled ? (
              <Link to={"/"}>
              <img
                loading="lazy"
                className="h-12 w-auto"
                src="/assets/logo/digitechii.png"
                alt="AMNDTECH logo"
              />
              </Link>
            ) : (
              <img
                loading="lazy"
                className="h-12 w-auto"
                src="/assets/logo/digitechii.png"
                alt="AMNDTECH logo"
              />
            )}
          </div>
          {/* contact button */}
          <div
            onClick={() => setContactUsModal(!contactUsModal)}
            className={`${
              scrolled
                ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                : "font-theme-font text-sm text-center text-white hover:text-purpli-600 transition-color "
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
        </div>

        {/* Sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="fixed left-0 top-0 w-3/4 h-full bg-white shadow-lg p-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Menu</h2>
                <button onClick={() => setSidebarOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="mt-5 space-y-3">
                <li className="hover:cursor-pointer hover:underline">
                  <Link to="/" onClick={() => setSidebarOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:underline">
                  <button
                    className="w-full text-left"
                    onClick={() => setMobileNavdrop(!mobileNavdrop)}
                  >
                    Services
                  </button>
                  {mobileNavdrop && (
                    <ul className="mt-2 ml-4 space-y-2">
                      <li>
                        <Link
                          to="/service/devops-development"
                          onClick={() => setSidebarOpen(false)}
                        >
                          DevOps Development
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/quality-assurance"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Quality Assurance
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/web-development"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Web Development
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/data-analytics"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Data Analytics
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/frontend-development"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Front End Development
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/mobile-development"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Mobile Development
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/ui-development"
                          onClick={() => setSidebarOpen(false)}
                        >
                          UI/UX Design
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/backend-development"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Back End Development
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/business-intelligence"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Business Intelligence
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="hover:cursor-pointer hover:underline">
                  <Link to="/technology" onClick={() => setSidebarOpen(false)}>
                    Technology
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:underline">
                  <Link to="/our-work" onClick={() => setSidebarOpen(false)}>
                    Our Work
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:underline">
                  <Link to="/career" onClick={() => setSidebarOpen(false)}>
                    Careers
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:underline">
                  <Link to="/about-us" onClick={() => setSidebarOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:underline">
                  <Link to="/blogs" onClick={() => setSidebarOpen(false)}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" onClick={() => setSidebarOpen(false)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* Contact Us Modal  */}
        {
          <ContactUsModal
            open={contactUsModal}
            onClose={() => setContactUsModal(!contactUsModal)}
          />
        }
      </div>
    </nav>
  );
}

export default Navbar;

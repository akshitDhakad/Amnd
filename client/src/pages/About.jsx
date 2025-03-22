// component imports

import Layout from "../components/Layout.jsx";
import ServicesBanner from "../components/ServicesBanner.jsx";
import HoverCard from "../components/HoverCard.jsx";
import ContactFrom from "../components/ContactFrom.jsx";
// react icons
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function About() {
  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ),
    url('https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/03/pawel-czerwinski-Kqf_w-hP3Us-unsplash.jpg.webp')`,
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
            <div className=" max-w-9xl m-auto px-10 py-5">
              {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
              <div className="md:grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
                <div className="col-span-2 flex flex-col md:gap-5">
                  <div>
                    <h2 className="text-xl md:text-3xl text-white font-semibold tracking-wide font-theme-font">
                      Custom Web
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-6xl text-white font-bold tracking-wide font-theme-font">
                      About DigiTechii
                    </h1>
                  </div>
                </div>
                {/* left container  */}
                <div className="mt-2  grid grid-cols-3 gap-x-5">
                  {/* card 1 */}
                  <div className="relative rounded-xl overflow-hidden p-2">
                    <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-md"></div>
                    <div className="relative h-24 md:h-40 z-10 ">
                      <img
                        loading="lazy"
                        className="w-full h-full object-container object-center"
                        src="https://devoxsoftware.com/wp-content/uploads/2024/03/logo-3.svg"
                        alt="Digitechii Software"
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
                        alt="Digitechii Software"
                      />
                    </div>
                  </div>
                  {/* card 3 */}
                  <div className="relative rounded-xl overflow-hidden p-2">
                    <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-md"></div>
                    <div className="relative h-24 md:h-40 z-10 ">
                      <img
                        loading="lazy"
                        className="w-full h-full object-center"
                        src="https://devoxsoftware.com/wp-content/uploads/2024/03/Group-427320306.svg"
                        alt="Digitechii Software"
                      />
                    </div>
                  </div>
                </div>

                {/* right Container  */}
                <div>
                  <p className="hidden md:block text-white text-start tracking-wide font-theme-font">
                    Looking for turnkey custom web application development
                    services? We are Digitechii Software – a leading custom web
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
          <div className="relative max-w-9xl px-4 py-20  md:grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[0px] left-[-125px] text-gray-500">
              Who are we
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Who are we
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-2xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  We are Team of Sofware Engineers
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="grid grid-cols-12 gap-y-5">
              <div className="col-span-12 md:col-span-2 flex md:flex-col justify-around items-start">
                <FaFacebook className="text-3xl" />
                <FaLinkedin className="text-3xl" />
                <FaInstagram className="text-3xl" />
              </div>
              <div className="col-span-12 md:col-span-10">
                <p className="text-gray-900 text-justify md:text-start tracking-wide font-theme-font mb-2">
                  My name is Akshit Dhakad. I started my career as a software
                  developer and reached a C-level position in leading IT
                  outsourcing companies in India. When I was doing my BTech, I
                  decided to try my hand in business. Together with my close
                  friends, we started a little side project.
                </p>
                <p className="text-gray-900 text-justify md:text-start tracking-wide font-theme-font mb-2">
                  Initially, our idea was to provide top quality code. You know
                  offshore software development is often blamed for poor quality
                  and we wanted to prove the contrary.
                </p>
                <p className="text-gray-900 text-justify md:text-start tracking-wide font-theme-font mb-2">
                  We got a few orders and started working. It seemed to me that
                  we accomplished our mission – our clients were satisfied with
                  our work. We established friendly relations.
                </p>
                <p className="text-gray-900 text-justify md:text-starttracking-wide font-theme-font mb-2">
                  And I got it – it’s not only the quality that makes service
                  excellent, it’s the attitude.
                </p>
                <p className="text-gray-900 text-center md:text-start tracking-wide font-theme-font mb-2">
                  <span className="font-bold text-gray-600">
                    Attitude to work,
                  </span>{" "}
                  <span className="font-bold text-gray-600">
                    Attitude to client
                  </span>
                  <br />
                  <span className="font-bold text-gray-600">
                    Attitude to Team.
                  </span>
                </p>
              </div>
            </div>
            {/* Right content */}
            <div>
              <p className="text-gray-900 text-justify md:text-start tracking-wide font-theme-font mb-2">
                I guess that was the genuine moment when Digitechii Software
                appeared.
              </p>
              <p className="text-gray-900 text-justify md:text-start tracking-wide font-theme-font mb-2">
                Since 2022 we have faced ups and downs, and we keep growing and
                improving. We started as a two-man business, but only two years
                later we expanded and moved to a big open space office. Nowadays
                our team consists of 10+ software developers who specialize in
                React, Next, Java and many other technologies.
              </p>
              <p className="text-gray-900 text-start tracking-wide font-theme-font mb-2">
                What is Digitechii Software for me now?
              </p>
              <p className="text-gray-900 text-start tracking-wide font-theme-font mb-4">
                It’s software development with a personal touch.
              </p>
              <p className="text-gray-600 font-bold text-start tracking-wide font-theme-font mb-1">
                Akshit Dhakad
              </p>
              <p className="text-gray-500 font-semibold text-start tracking-wide font-theme-font mb-2">
                Founder, CEO at Digitechii Software
              </p>
              <div className="flex items-center md:justify-end gap-x-3 mt-5">
                <span className="text-gray-700  font-bold">
                  Check Our Portfolio
                </span>
                <button className="p-3 text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                  <HiOutlineArrowLongRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Our Values  */}
        <section>
          <div className="relative max-w-9xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Values
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Our
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Values
                </h1>
              </div>
              {/* content */}
              <div className="p-0 m-0">
                <HoverCard />
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision section  */}
        <section>
          <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-5 md:gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] right-[-125px] text-gray-500">
              Vision
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Our
                </h2>
              </div>
              <div className="md:mb-4">
                <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Vision
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2">
              <p className="md:text-3xl text-justify md:text-start font-theme-font font-semibold text-gray-900">
                We’ve worked extensively in terms of geography and sector,
                developing a variety of work — products, services, and
                experiences — that has taught us that a well-defined visual
                strategy is key to bring visibility, credibility, and funds to
                any organisation. Starting in 2022, we decided to plant a tree
                for each client that we work with.
              </p>
            </div>
            <div className="col-span-2 flex justify-center items-center">
              <button className="px-20 py-3 font-theme-font text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                Let's Talk
              </button>
            </div>
          </div>
        </section>

        {/* Contact us Form */}
        <section></section>
        <ContactFrom />

        {/* Type of solutions we build  */}
        <section>
          <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
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
                <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Types of Web Solutions We Build
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2 h-96">
              <ServicesBanner />
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}

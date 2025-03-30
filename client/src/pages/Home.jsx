import Layout from "../components/Layout.jsx";
import { Link } from "react-router-dom";
import ServicesBanner from "../components/ServicesBanner.jsx";
import Testinomial from "../components/Testinomial.jsx";
import FlipCard from "../components/FlipCard.jsx";
import Carousel from "../components/Carousel.jsx";
import ClientCard from "../components/ClientCard.jsx";
// React icons

import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaSquareXTwitter,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import { IoMdKey } from "react-icons/io";
import {
  CustomButton1,
  CustomButton2,
} from "../components/ui/CustomButtons.jsx";
import CaseStudies from "../components/CaseStudies.jsx";
import DevTechnologies from "../components/DevTechnologies.jsx";

export default function Home() {
  const backgroundImg = {
    backgroundImage: `url('https://img.freepik.com/free-photo/3d-workstation-with-computer-peripheral-devices_23-2150714175.jpg?uid=R96042563&ga=GA1.1.680121161.1738433577&semt=ais_hybrid')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <main className="relative overflow-x-hidden">
      <Layout>
        {/* Hero Section  */}
        <section>
          <div className="md:abosolute m-1 rounded-2xl md:top-0 min-h-min md:h-screen flex justify-center items-center bg-theme-bg-dark bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/abstract-flowing-neon-wave-background_53876-101942.jpg?t=st=1743308164~exp=1743311764~hmac=db757fbd12492a96ebe15d6d2e6016054232d8a2c5c57f2da62d4ff814302857&w=1480')]">
            <div className="mt-20 md:mt-auto md:relative max-w-6xl 2xl:max-w-8xl m-auto px-4 lg:px-10 py-5">
              <div className="mt-16 relative md:grid md:grid-cols-2 gap-x-20 gap-y-10 lg:h-[75vh] max-w-9xl m-auto">
                {/* heading  */}
                <div className="hidden md:block md:col-span-2 md:h-24 space-y-5">
                  <div>
                    <h2 className="text-base lg:text-3xl hover:underline text-white font-semibold tracking-wide font-theme-font">
                      Web Design & Development Agency
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl mb-5 2xl:text-6xl text-white font-bold tracking-wide font-theme-font">
                      We create amazing websites for world-class tech companies
                    </h1>
                  </div>
                </div>

                {/* left container  */}
                <div className="mt-2 grid grid-cols-3 gap-x-5 items-center">
                  {/* card 1 */}
                  <div className="relative md:max-h-40 rounded-xl overflow-hidden p-2">
                    <div className="absolute  inset-0 bg-white bg-opacity-50 backdrop-blur-md"></div>
                    <div className="relative h-24 lg:h-40 z-10">
                      <img
                        loading="lazy"
                        className="w-full h-full object-container object-center"
                        src="https://devoxsoftware.com/wp-content/uploads/2024/03/logo-3.svg"
                        alt="Digitechii Software"
                      />
                    </div>
                  </div>
                  {/* card 2 */}
                  <div className="relative md:max-h-40 rounded-xl overflow-hidden p-2">
                    <div className="absolute  inset-0 bg-white bg-opacity-50 backdrop-blur-md"></div>
                    <div className="relative h-24 lg:h-40 z-10">
                      <img
                        loading="lazy"
                        className="w-full h-full object-container object-center"
                        src="https://devoxsoftware.com/wp-content/uploads/2024/03/logo-2.svg"
                        alt="Digitechii Software"
                      />
                    </div>
                  </div>

                  {/* card 3 */}
                  <div className="relative md:max-h-40 rounded-xl overflow-hidden p-2">
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

                {/* right container */}
                <div className="w-full">
                  <p className="lg:mt-20 text-base 2xl:text-2xl text-white md:text-start tracking-wide font-theme-font">
                    Looking for turnkey custom web application development
                    services? We are <b>DigiTechii Software</b> – a leading
                    custom web application development company with a recognized
                    stand on the market and a proven track record of completed
                    projects.
                  </p>
                  <div className="flex justify-start items-center mt-5">
                    <CustomButton2 title="Arrage a call with Us" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* About Us Section  */}
        <section>
          <div className="relative max-w-9xl px-4 py-10 lg:py-20 grid md:grid-cols-2 gap-x-10 lg:gap-y-10 m-auto">
            <span class="absolute font-semibold text-4xl md:text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500 text-shadow-2">
              DIGITECHII
            </span>
            {/* heading  */}
            <div className="md:col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl  md:text-start text-gray-600 font-bold tracking-wide font-theme-font">
                  About
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-3xl md:text-5xl md:text-start text-black font-bold tracking-wide font-theme-font">
                  DIGITECHII SOFTWARE
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="grid md:grid-cols-12 gap-y-10">
              {/* social media icons */}
              <div className="md:col-span-2 flex flex-row md:flex-col justify-center gap-x-4 lg:justify-around items-start">
                <Link target="_black" to={"https://x.com/AmndT007"}>
                  {" "}
                  <FaSquareXTwitter className="text-3xl" />
                </Link>
                <Link target="_black" to={""}>
                  {" "}
                  <FaFacebook className="text-3xl" />
                </Link>
                <Link
                  target="_black"
                  to={"https://www.linkedin.com/in/akshit-dhakad-758a27250/"}
                >
                  {" "}
                  <FaLinkedin className="text-3xl" />
                </Link>
                <Link
                  target="_black"
                  to={
                    "https://www.instagram.com/amnd_technologies?igsh=aG1oc283cXE3dnZ6"
                  }
                >
                  <FaInstagram className="text-3xl" />
                </Link>
              </div>
              {/* content  */}
              <div className="grid-cols-12 md:col-span-10">
                <p className="text-gray-900 2xl:text-lg md:text-start text-start tracking-wide font-theme-font mb-2 xl:mb-4">
                  <b className="tracking-wider">DIGITECHII SOFTWARE</b> is an IT
                  outsourcing company based in India, providing top-notch
                  services to clients all over the world.
                </p>
                <p className="text-gray-900 2xl:text-lg md:text-start text-justify tracking-wide font-theme-font mb-2 xl:mb-4">
                  Our key value is our flexibility. It’s you who chooses the
                  engagement model that works best for your project:
                  outsourcing, outstaffing, dedicated team or staff
                  augmentation.
                </p>
                <p className="text-gray-900 2xl:text-lg md:text-start text-justify tracking-wide font-theme-font mb-2 xl:mb-4">
                  The benefit you get with us is facilitation. Digital
                  transformation has never been easier – all you need to do is
                  just tell us your requirements.
                </p>
              </div>
            </div>
            {/* Right content */}
            <div>
              <p className="text-gray-900 2xl:text-lg md:text-start text-justify tracking-wide font-theme-font mb-2 xl:mb-4">
                We will advise you on the fitting solution, resources, and
                timeframes for your business. Our main asset is people. We hire
                top software developers to run your project from initial
                estimation to release.
              </p>
              <p className="text-gray-900 2xl:text-lg md:text-start text-justify tracking-wide font-theme-font mb-2 xl:mb-4">
                <b className="tracking-wider">DIGITECHII SOFTWARE</b> achieves a
                well-planned development process, competent management, and
                efficient communication due to a thorough selection of team
                members for our company.
              </p>
              <CustomButton1 title={"Discover"} textCss="text-gray-900" />
            </div>
          </div>
        </section>

        {/* Testinomials section  */}
        <section>
          <div className="relative max-w-9xl px-4 py-10 lg:py-20  m-auto">
            <span class="absolute font-semibold text-[4rem] md:text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500 text-shadow-2">
              Testimonials
            </span>
            {/* heading  */}
            <div className=" flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
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

        {/* Our Services section  */}
        <section>
          <div className="relative max-w-9xl px-4 py-10 lg:py-20 grid grid-cols-2  gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-4xl md:text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] right-[-125px] text-gray-500 text-shadow-2">
              Our Services
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
                  Services
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2 grid grid-cols-2 md:grid-cols-5  gap-5">
              <FlipCard
                title={"Web Development"}
                description={
                  "We take care of your product on the development stage. Our IT outsourcing company creates custom web dev solutions for startups and enterprises. We listen to your ideas carefully and deliver the exact result."
                }
                iconURl={
                  "https://cdn.iconscout.com/icon/premium/png-512-thumb/web-development-1483426-1256384.png?f=webp&w=512"
                }
              />
              <FlipCard
                title={"Mobile Development"}
                description={
                  "Convert more clients by reaching out to your target audience via mobile apps. Our software development company will help you with building iOS, Android and cross-platform mobile development solutions."
                }
                iconURl={
                  "https://cdn-icons-png.freepik.com/256/7075/7075373.png?ga=GA1.1.705946748.1706705440&"
                }
              />
              <FlipCard
                title={"Quality Assurance"}
                description={
                  "Quality is our priority. We have a team of QA engineers who will check if your software is bug-free right in the course of development. Alternatively, they will test your ready app before release."
                }
                iconURl={
                  "https://cdn-icons-png.freepik.com/256/3749/3749988.png?ga=GA1.1.705946748.1706705440&"
                }
              />
              <FlipCard
                title={"UI/UX Design"}
                description={
                  "Eye-catching and user-friendly design is key to conversion. Our qualified UI/UX experts will bring your idea from concept to full-fledged responsive design with engaging elements created specially for your target audience."
                }
                iconURl={
                  "https://cdn-icons-png.freepik.com/256/2335/2335265.png?ga=GA1.1.705946748.1706705440&"
                }
              />
              <FlipCard
                title={"DevOps"}
                description={
                  "Ensure the risk-free and cost-effective release of your application. Our DevOps specialists will secure a smooth and continuous deployment process and provide ongoing support of your software."
                }
                iconURl={
                  "https://cdn-icons-png.freepik.com/256/12219/12219902.png?ga=GA1.1.705946748.1706705440&"
                }
              />
            </div>
            <div className="col-span-2 flex justify-center items-center">
              <button className="px-20 py-3 font-theme-font text-lg bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 transition-all duration-300 border-b-8 delay-75">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Our Case Studies  */}
        <CaseStudies />
        {/* Type of Web Services we build*/}
        <section className="hidden md:block">
          <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2 gap-x-10 m-auto">
            <span class="absolute font-semibold  text-[4rem]  md:text-[12rem] font-theme-font tracking-wide leading-none opacity-10 top-0 left-[1/2] text-gray-500 text-shadow-2">
              We Build
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Types of Web Solutions
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  We Build
                </h1>
              </div>
            </div>

            {/* left content */}
            <div className="col-span-2">
              <Carousel />
            </div>

            <div></div>
          </div>
        </section>

        {/* Custom Web App Development Services  */}
        <section>
          <div className="relative max-w-9xl px-4 py-10 lg:py-20 grid md:grid-cols-2 gap-5 md:gap-x-10 md:gap-y-10  m-auto">
            <span class="absolute font-semibold text-[4rem] md:text-[12rem] font-theme-font leading-none opacity-10 top-0 left-[1/2] text-gray-500 text-shadow-2">
              We Provide
            </span>
            {/* heading  */}
            <div className="md:col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  We Provide
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-2xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  High-impact design & development services
                </h1>
              </div>
            </div>

            {/* item 1 */}
            <div className="bg-gray-50 border-b-2 shadow-sm grid md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-0 rounded-3xl overflow-hidden">
              <div className="order-2 lg:order-1 p-4">
                <h3 className="text-gray-800 font-bold text-2xl mb-5">
                  Web Design
                </h3>
                <p className="text-gray-600 text-justify md:text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                  We design websites that look amazing, convey the right brand
                  message and are highly oriented for conversion.
                </p>
                <Link
                  to={"/service/web-design"}
                  className="text-pink-600 font-bold"
                >
                  Learn more
                </Link>
              </div>
              <div className="order-1 lg:order-2 bg-pink-100 border-b-2 border-b-pink-200 lg:border-s-4 lg:border-s-pink-200 lg:rounded-s-3xl">
                <img
                  className="w-full h-56 rounded-lg overflow-hidden mb-5 md:mb-0"
                  src="https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/64062922a09751a1098ce054_web-design-agency.png"
                  alt="Web Design"
                />
              </div>
            </div>

            {/* item 2 */}
            <div className="bg-gray-50 border-b-2 shadow-sm grid md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-0 rounded-3xl overflow-hidden">
              <div className="order-2 lg:order-1 p-4">
                <h3 className="text-gray-800 font-bold text-2xl mb-5">
                  Web Development
                </h3>
                <p className="text-gray-600 text-justify md:text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                  We develop fast, perfectly responsive, and SEO-optimized
                  websites built with the best development practices of 2023.
                </p>
                <Link
                  to={"/service/web-development"}
                  className="text-pink-600 font-bold"
                >
                  Learn more
                </Link>
              </div>
              <div className="bg-blue-100 border-b-2 border-b-blue-200 lg:border-s-4 lg:border-s-blue-200 lg:rounded-s-3xl">
                <img
                  loading="lazy"
                  className="w-full h-56 rounded-lg overflow-hidden mb-5 md:mb-0"
                  src="https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/6414a7979cc623601c053b0c_web-development-agency.png"
                  alt="Web Development"
                />
              </div>
            </div>
            {/* item 3 */}
            <div className="bg-gray-50 border-b-2 shadow-sm grid md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-0 rounded-3xl overflow-hidden">
              <div className="order-2 lg:order-1 p-4">
                <h3 className="text-gray-800 font-bold text-2xl mb-5">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 text-justify md:text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                  We design intuitive web & mobile apps focused on driving user
                  engagement and increasing users retention.
                </p>
                <Link
                  to={"/service/ui-development"}
                  className="text-pink-600 font-bold"
                >
                  Learn more
                </Link>
              </div>
              <div className="bg-orange-100 border-b-4 lg:border-s-4 border-b-orange-200 lg:border-s-orange-200 lg:rounded-s-3xl">
                <img
                  loading="lazy"
                  className="w-full h-56 rounded-lg overflow-hidden mb-5 md:mb-0"
                  src="https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/6414ba53ec407864f180cfe0_ui-ux-design-agency.png"
                  alt="UI/UX Design"
                />
              </div>
            </div>

            {/* item 4 */}
            <div className="bg-gray-50 border shadow-sm grid md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-0 rounded-3xl overflow-hidden">
              <div className="order-2 lg:order-1 p-4">
                <h3 className="text-gray-800 font-bold text-2xl mb-5">
                  Brand Design
                </h3>
                <p className="text-gray-600 text-justify md:text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                  We transform businesses into world-class brands by going
                  through a well thought brand identity design process.
                </p>
                <Link
                  to={"/service/web-design"}
                  className="text-pink-600 font-bold"
                >
                  Learn more
                </Link>
              </div>
              <div className="bg-green-100 border-b-4 lg:border-s-4 border-b-green-200 lg:border-s-green-200 lg:rounded-s-3xl">
                <img
                  loading="lazy"
                  className="w-full h-56 rounded-lg overflow-hidden mb-5 md:mb-0"
                  src="https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/64062930acab8e66b2e103de_brand-design-agency.png"
                  alt="Brand Design"
                />
              </div>
            </div>
            {/* item 5 */}
            <div className="bg-gray-50 border shadow-sm grid md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-0 rounded-3xl overflow-hidden">
              <div className="order-2 lg:order-1 p-4">
                <h3 className="text-gray-800 font-bold text-2xl mb-5">
                  Conversion Optimization
                </h3>
                <p className="text-gray-600 text-justify md:text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                  We help you A/B test your website core landing pages to boost
                  your conversion rates and get more leads.
                </p>
                <Link
                  to={"/service/web-design"}
                  className="text-pink-600 font-bold"
                >
                  Learn more
                </Link>
              </div>
              <div className="bg-purple-100 border-b-4 lg:border-s-4  border-b-purple-200 lg:rounded-s-3xl">
                <img
                  loading="lazy"
                  className="w-full h-56 rounded-lg overflow-hidden mb-5 md:mb-0"
                  src="https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/6414a9110b22bf8cbfe6a1dc_conversion-optimization-agency.png"
                  alt="Conversion Optimization"
                />
              </div>
            </div>
            {/* item 6 */}
            <div className="bg-gray-50 border shadow-sm grid md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-0 rounded-3xl overflow-hidden">
              <div className="order-2 lg:order-1 p-4">
                <h3 className="text-gray-800 font-bold text-2xl mb-5">
                  Automation
                </h3>
                <p className="text-gray-600 text-justify md:text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                  We help your business gain leverage and efficiency through
                  automation using simple, yet powerful NoCode tools.
                </p>
                <Link
                  to={"/service/web-design"}
                  className="text-pink-600 font-bold"
                >
                  Learn more
                </Link>
              </div>
              <div className="bg-blue-100 border-b-4 lg:border-s-4 border-b-blue-200 lg:border-s-blue-200 lg:rounded-s-3xl">
                <img
                  loading="lazy"
                  className="w-full h-56 rounded-lg overflow-hidden mb-5 md:mb-0"
                  src="https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/6526d381da3521c0550eed6f_automation-agency.png"
                  alt="Automation"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of our Web App Development Services */}
        <section>
          <div className="relative max-w-9xl px-4 py-10 lg:py-20 grid grid-cols-2 gap-x-10 gap-y-2 lg:gap-y-10  m-auto">
            <span class="absolute font-semibold md:text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500 text-shadow-2">
              Benefits
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Benefits of our
                </h2>
              </div>
              <div className="md:mb-4">
                <h1 className="text-2xl md:text-5xl text-black font-bold tracking-wide font-theme-font leading-normal">
                  Web App Development Services
                </h1>
              </div>
            </div>
            {/* content */}
            <div className="col-span-2 grid md:grid-cols-3 gap-x-5  gap-y-10">
              {/* item 1 */}
              <div className="h-72 w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 border border-b-4 2xl:border-b-8 hover:border-purple-600 relative">
                <span class="absolute font-bold text-8xl font-theme-font leading-none opacity-40 top-6 left-6 text-purple-600">
                  01
                </span>
                <div>
                  <h4 className="mb-4 text-xl 2xl:text-3xl font-bold font-theme-font">
                    Scalability
                  </h4>
                  <p className="text-gray-700 text-start text-sm 2xl:text-lg tracking-wide leading-5 font-theme-font">
                    Our solutions adapt to your business growth and efficiently
                    sustain an influx of new users. Deliver high web performance
                    and do it every time.
                  </p>
                </div>
              </div>
              {/* item 2 */}
              <div className="relative h-72 w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl border border-b-4 2xl:border-b-8 hover:border-pink-600 bg-slate-50">
                <span class="absolute font-bold text-8xl font-theme-font leading-none opacity-40 top-6 left-6 text-pink-600">
                  02
                </span>
                <div>
                  <h4 className="mb-4 text-xl 2xl:text-3xl font-bold font-theme-font">
                    Latest technology
                  </h4>
                  <p
                    className="text-gray-700 text-start text-sm 2
                  2xl:text-lg tracking-wide leading-5 font-theme-font"
                  >
                    Our custom web application development services keeps up
                    with the tech trends in web development so you have a
                    competitive edge on the market.
                  </p>
                </div>
              </div>
              {/* item 3 */}
              <div className="relative h-72 w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl border border-b-4 2xl:border-b-8 hover:border-orange-600 bg-slate-50">
                <span class="absolute font-bold text-8xl leading-none opacity-40 top-6 left-6 font-theme-font text-orange-600">
                  03
                </span>
                <div>
                  <h4 className="mb-4 text-xl 2xl:text-3xl font-bold font-theme-font">
                    Data security
                  </h4>
                  <p className="text-gray-700 text-start text-sm 2xl:text-lg tracking-wide leading-5 font-theme-font">
                    We are committed to providing a high level of security for
                    your web application. For that, our developers embed
                    consistent security controls into the solution to guard off
                    malicious agents.
                  </p>
                </div>
              </div>
              {/* item 4 */}
              <div className="relative h-72 w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl border border-b-4 2xl:border-b-8 hover:border-green-600 bg-slate-50">
                <span class="absolute font-bold text-8xl leading-none opacity-40 top-6 left-6 font-theme-font text-green-600">
                  04
                </span>
                <div>
                  <h4 className="mb-4 text-xl 2xl:text-3xl font-bold font-theme-font">
                    Relevant talent
                  </h4>
                  <p className="text-gray-700 text-start text-sm 2xl:text-lg tracking-wide leading-5 font-theme-font">
                    As an established custom web application development
                    services company, we hand-pick each developer to fit your
                    project needs. All our web developers have relevant
                    certifications and boast in-depth industry expertise
                  </p>
                </div>
              </div>
              {/* item 5 */}
              <div className="relative h-72 w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl border border-b-4 2xl:border-b-8 hover:border-blue-600 bg-slate-50">
                <span class="absolute font-bold text-8xl leading-none opacity-40 top-6 left-6 font-theme-font text-blue-600">
                  05
                </span>
                <div>
                  <h4 className="mb-4 text-xl 2xl:text-3xl font-bold font-theme-font">
                    Dedicated web development
                  </h4>
                  <p className="text-gray-700 text-start text-sm 2xl:text-lg tracking-wide leading-5 font-theme-font">
                    Prioritize custom web application development company by
                    hiring a dedicated team for extra control. We assign
                    developers exclusivity to your projects with their undivided
                    attention and tailored skills.
                  </p>
                </div>
              </div>
              {/* item 6 */}
              <div className="relative h-72 w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl border border-b-4 2xl:border-b-8 hover:border-yellow-600 bg-slate-50">
                <span class="absolute font-bold text-8xl leading-none opacity-40 top-6 left-6 font-theme-font text-yellow-600">
                  06
                </span>
                <div>
                  <h4 className="mb-4 text-xl 2xl:text-3xl font-bold font-theme-font">
                    End-to-end development
                  </h4>
                  <p className="text-gray-700 text-start text-sm 2xl:text-lg tracking-wide leading-5 font-theme-font">
                    We provide end-to-end custom web application development
                    services that cover every collaboration stage. Whether it’s
                    prototyping or migrating, our team can step in to support
                    the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our CLients  */}
        <section>
          <div className="relative max-w-9xl px-4 py-10 lg:py-20 grid grid-cols-2 gap-x-10 m-auto">
            <span class="absolute font-semibold text-[4rem] md:text-[10rem] font-theme-font tracking-wide leading-none opacity-10 top-0 left-[1/2] text-gray-500 text-shadow-2">
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

        {/* Our Development Process  */}
        <section>
          <div className="relative max-w-9xl px-4 py-10 lg:py-20 grid grid-cols-2 gap-x-10 gap-y-10 m-auto">
            <span class="absolute font-semibold text-[3rem] md:text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500 text-shadow-2">
              Development
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
                  Development Process
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2 grid md:grid-cols-3 gap-x-5 gap-y-10">
              {/* item 1 */}
              <div className="h-72 relative w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 border border-b-8">
                <div class="absolute top-5 left-5 h-12 w-12 font-bold text-8xl font-theme-font leading-none opacity-40">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://cdn-icons-png.freepik.com/256/7387/7387688.png?ga=GA1.1.705946748.1706705440&"
                    alt="Discovery icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl 2xl:text-3xl font-bold font-theme-font">
                    Discovery
                  </h4>
                  <p className="text-gray-700 text-start text-sm 2xl:text-base tracking-wide leading-5 font-theme-font">
                    Our collaboration starts with an in-depth analysis of your
                    business needs and market trends. We assess the solution
                    viability and product success by documenting main
                    functionality and milestones.
                  </p>
                </div>
              </div>
              {/* item 2 */}
              <div className="h-72 relative w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 border border-b-8">
                <div class="absolute  top-5 left-5 h-12 w-12  font-bold text-8xl font-theme-font leading-none opacity-40  ">
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                    src="https://cdn-icons-png.freepik.com/256/1336/1336494.png?ga=GA1.1.705946748.1706705440&"
                    alt="Design and development icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl 2xl:text-3xl font-bold font-theme-font">
                    Design and development
                  </h4>
                  <p className="text-gray-700 text-start text-sm lg:text-base tracking-wide leading-5 font-theme-font">
                    Here, our web designers breathe life into the approved
                    wireframes, while a team of web developers transforms
                    designs into a working model with scalability in mind.
                  </p>
                </div>
              </div>
              {/* item 3 */}
              <div className="h-72 relative w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 border border-b-8">
                <div class="absolute top-5 left-5 h-12 w-12 font-bold text-8xl leading-none opacity-40 font-theme-font ">
                  <img
                    loading="lazy"
                    className="w-full h-full object-center object-cover"
                    src="https://cdn-icons-png.freepik.com/256/4296/4296532.png?ga=GA1.1.705946748.1706705440&"
                    alt="Full-cycle testing"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl 2xl:text-3xl font-bold font-theme-font">
                    Full-cycle testing
                  </h4>
                  <p className="text-gray-700 text-start text-sm lg:text-base tracking-wide leading-5 font-theme-font">
                    Our top QA engineers perform rigorous testing, including
                    front-end testing, database testing, server testing, and
                    others. Thus, we assure your solution is bug-free.
                  </p>
                </div>
              </div>
              {/* item 4 */}
              <div className="h-72 relative w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 border border-b-8">
                <div class="absolute top-5 left-5 h-12 w-12  font-bold text-8xl leading-none opacity-40  font-theme-font ">
                  <img
                    loading="lazy"
                    className="w-full h-full object-center object-cover"
                    src="https://cdn-icons-png.freepik.com/256/8099/8099542.png?ga=GA1.1.705946748.1706705440&"
                    alt="Prototyping and MVP development icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl 2xl:text-3xl font-bold font-theme-font">
                    Prototyping and MVP development
                  </h4>
                  <p className="text-gray-700 text-start text-sm lg:text-base tracking-wide leading-5 font-theme-font">
                    Complex web applications are implemented as MVPs first to
                    predict future results and enhance mission-critical
                    features.
                  </p>
                </div>
              </div>
              {/* item 5 */}
              <div className="h-72 relative w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 border border-b-8">
                <div class="absolute top-5 left-5 h-12 w-12  font-bold text-8xl leading-none opacity-40  font-theme-font ">
                  <img
                    loading="lazy"
                    className="w-full h-full object-center object-cover"
                    src="https://cdn-icons-png.freepik.com/256/2082/2082945.png?ga=GA1.1.705946748.1706705440&"
                    alt="Launch and maintenance icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl 2xl:text-3xl font-bold font-theme-font">
                    Launch and maintenance
                  </h4>
                  <p className="text-gray-700 text-start text-sm 2xl:text-base tracking-wide leading-5 font-theme-font">
                    Finally, we roll out your solution to the server. Our
                    developers then work on the user feedback and provide
                    post-deployment support and maintenance.
                  </p>
                </div>
              </div>
              {/* item 6 */}
              <div className="h-72 relative w-full  px-4 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 border border-b-8">
                <div class="absolute top-5 left-5 h-12 w-12 font-bold text-8xl leading-none opacity-40  font-theme-font">
                  <img
                    loading="lazy"
                    className="w-full h-full object-center object-cover"
                    src="https://cdn-icons-png.freepik.com/256/12375/12375564.png?ga=GA1.1.705946748.1706705440&"
                    alt="End-to-end development icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl 2xl:text-3xl font-bold font-theme-font">
                    End-to-end development
                  </h4>
                  <p className="text-gray-700 text-start text-sm 2xl:text-base tracking-wide leading-5 font-theme-font">
                    We provide end-to-end custom web application development
                    services that cover every collaboration stage. Whether it’s
                    prototyping or migrating, our team can step in to support
                    the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Work Section  */}
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
            <div className="col-span-2 grid md:grid-cols-2 gap-x-5 gap-y-5">
              {/* left content */}
              <div className="h-80 md:h-96 2xl:h-[500px] relative rounded-xl lg:rounded-3xl overflow-hidden ">
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
                  className="h-full w-full object-cover object-center"
                  src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/philip-oroni-MyY188YX0vU-unsplash.jpg.webp"
                  alt=""
                />
              </div>
              {/* Right content */}
              <div className="bg-theme-bg-dark rounded-xl lg:rounded-3xl overflow-hidden p-4 md:p-10">
                <div className="h-full flex flex-col justify-between gap-y-4">
                  {/* Top heading  */}
                  <div className="flex justify-between items-center">
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
                  <div>
                    {" "}
                    <h2 className="text-white text-2xl 2xl:text-3xl text-bold text-start tracking-wide font-theme-font mb-2">
                      Social Media Screening Platform
                    </h2>
                    <p className="text-gray-600 text-base 2xl:text-xl text-start tracking-wide font-theme-font mb-2">
                      The project is a web-based AI-powered platform for
                      comprehensive social media background screening. Its
                      supertask is to streamline potential employee background
                      checks for companies, tackling employment risk management.
                    </p>
                  </div>
                  {/* button  */}
                  <CustomButton1
                    title="View Case Study"
                    textCss="text-gray-300"
                  />
                </div>
              </div>
            </div>
            {/* project 2 */}
            <div className="col-span-2 grid md:grid-cols-2 gap-x-5 gap-y-5">
              {/* left content */}
              <div className="order-2 bg-theme-bg-dark rounded-xl lg:rounded-3xl overflow-hidden p-4 md:p-10">
                <div className="h-full flex flex-col justify-between gap-y-4">
                  {/* Top heading  */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-x-2 items-center">
                      <span className="rounded p-1 bg-gray-800 text-white">
                        <IoMdKey />
                      </span>
                      <span className="text-gray-600 tracking-wide font-theme-font">
                        UNDER NDA
                      </span>
                    </div>
                    <div className="text-gray-600 tracking-wide font-theme-font">
                      MEDTECH/MARTECH
                    </div>
                  </div>
                  {/* center content */}
                  <div>
                    {" "}
                    <h2 className="text-white text-2xl 2xl:text-3xl text-bold text-start tracking-wide font-theme-font mb-2">
                      Bridging MedTech and MarTech for Enhanced Patient
                      Engagement
                    </h2>
                    <p className="xl:text-xl text-gray-600 text-start tracking-wide font-theme-font mb-2">
                      Nabed is a SaaS platform at the crossroads of MedTech and
                      MarTech. It enables caregivers to engage with patients
                      using comprehensive, personalized educational content for
                      better healthcare outcomes.
                    </p>
                  </div>
                  {/* button  */}
                  <CustomButton1
                    title="View Case Study"
                    textCss="text-gray-300"
                  />
                </div>
              </div>

              {/* Right content */}
              <div className="order-1 md:order-2 h-80 md:h-96 2xl:h-[500px] relative rounded-xl lg:rounded-3xl overflow-hidden">
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
                  className="h-full w-full object-cover object-center"
                  src="https://devoxsoftware.com/wp-content/uploads/2024/02/growtika-nGoCBxiaRO0-unsplash.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technologies we use  */}
        {/* Our Development Process  */}

        <DevTechnologies />

        {/* Type of solutions we build  */}
        <section>
          <div className="relative max-w-9xl px-4 py-20 md:grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold md:text-[8rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500 text-shadow-2">
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
                <h1 className="text-2xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Types of Web Solutions We Build
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2 h-96">
              <ServicesBanner
                title={"Premier IT Services & Digital Marketing Solutions"}
                description={""}
              />
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}

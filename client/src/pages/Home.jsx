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
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import CustomButton1 from "../components/ui/CustomButtons.jsx";

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
          <div className="md:abosolute m-1 rounded-2xl md:top-0 min-h-min md:h-screen flex justify-center items-center bg-theme-bg-dark">
            <div className="mt-20 md:mt-auto md:relative max-w-6xl 2xl:max-w-8xl m-auto px-10 py-5">
              <div
                className="md:absolute md:top-5 left-0 h-full md:w-6/12"
                style={backgroundImg}
              ></div>
              <div className="md:absolute md:top-5 left-0 h-full md:w-6/12 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-xs"></div>
              <div className="relative md:grid md:grid-cols-2 gap-x-20 gap-y-10 lg:h-[75vh] max-w-9xl m-auto">
                <div className="md:absolute md:top-10 left-0 z-10 col-span-2 flex flex-col gap-3">
                  <div>
                    <h2 className="text-base lg:text-3xl hover:underline text-white font-semibold tracking-wide font-theme-font">
                      Custom Web
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-4xl mb-5 md:text-6xl text-white font-bold tracking-wide font-theme-font">
                      Application Development
                    </h1>
                  </div>
                </div>
                <div className="hidden md:block md:col-span-2 md:h-24"></div>
                <div className="hidden md:block"></div>
                <div className="w-full">
                  <p className="text-white md:text-start tracking-wide font-theme-font">
                    Looking for turnkey custom web application development
                    services? We are <b>DigiTechii Software</b> – a leading
                    custom web application development company with a recognized
                    stand on the market and a proven track record of completed
                    projects.
                  </p>
                  <CustomButton1 />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section  */}
        <section>
          <div className="relative max-w-9xl px-4 py-20 grid md:grid-cols-2 gap-x-10 lg:gap-y-10 m-auto">
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
                <p className="text-gray-900 md:text-start text-start tracking-wide font-theme-font mb-2">
                  <b className="tracking-wider">DIGITECHII SOFTWARE</b> is an IT
                  outsourcing company based in India, providing top-notch
                  services to clients all over the world.
                </p>
                <p className="text-gray-900 md:text-start text-justify tracking-wide font-theme-font mb-2">
                  Our key value is our flexibility. It’s you who chooses the
                  engagement model that works best for your project:
                  outsourcing, outstaffing, dedicated team or staff
                  augmentation.
                </p>
                <p className="text-gray-900 md:text-start text-justify tracking-wide font-theme-font mb-2">
                  The benefit you get with us is facilitation. Digital
                  transformation has never been easier – all you need to do is
                  just tell us your requirements.
                </p>
              </div>
            </div>
            {/* Right content */}
            <div>
              <p className="text-gray-900 md:text-start text-justify tracking-wide font-theme-font mb-2">
                We will advise you on the fitting solution, resources, and
                timeframes for your business. Our main asset is people. We hire
                top software developers to run your project from initial
                estimation to release.
              </p>
              <p className="text-gray-900 md:text-start text-justify tracking-wide font-theme-font mb-2">
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
          <div className="relative max-w-9xl px-4 py-20  m-auto">
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
          <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2  gap-x-10 gap-y-10  m-auto">
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
              <button className="px-20 py-3 font-theme-font text-lg bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 transition-all duration-300 border-b-4 hover:border-0 delay-75">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Our Case Studies  */}
        <section>
          {/* item 1 */}
          <div className="relative max-w-9xl px-4 py-20 grid md:grid-cols-2 gap-x-10 md:gap-y-10 m-auto">
            <span class="absolute font-semibold text-4xl md:text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500 text-shadow-2">
              Case Studies
            </span>
            {/* heading  */}
            <div className="md:col-span-2 flex flex-col ">
              <div className="md:mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Our
                </h2>
              </div>
              <div className="md:mb-4">
                <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Case Studies
                </h1>
              </div>
            </div>
            {/* Left content */}
            <div className="order-3 md:order-2">
              <h3 className="font-bold text-2xl tracking-wide md:mb-5">
                Function4
              </h3>
              <h4 className="font-semibold tracking-wide text-md mb-2 text-gray-600">
                Event Management Platform, USA
              </h4>
              <p className="text-gray-900 text-justify md:text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                Function4 is a USA-based professional event ecosystem that
                offers a simple, user-friendly discovery venue for the financial
                services sector. The enterprise event management software
                features a single, real-time dashboard with zero setup for event
                attendees, hosts, and sponsors. Function4 also provides
                discovery, data, and tools to help the right people discover the
                right events.
              </p>

              <CustomButton1 title="View Case" textCss="text-gray-800" />
            </div>
            {/* Right content */}
            <div className="order-2 md:order-3 flex items-center justify-center mb-5 md:mb-0">
              <div className="w-full h-56 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://t4.ftcdn.net/jpg/01/64/26/27/360_F_164262701_BsbY2qe8M3fvvB4cBWsFLgeEXhgEukcw.jpg"
                  alt="Our Case Studies "
                />
              </div>
            </div>
          </div>

          {/* item2 */}
          <div className="max-w-9xl px-4  grid md:grid-cols-2 gap-x-10 gap-y-10 m-auto">
            {/* Left content */}
            <div className="flex items-center justify-center">
              <div className="w-full h-56 rounded-lg overflow-hidden">
                <img
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                  src="https://t4.ftcdn.net/jpg/01/64/26/27/360_F_164262701_BsbY2qe8M3fvvB4cBWsFLgeEXhgEukcw.jpg"
                  alt="Our Case Studies"
                />
              </div>
            </div>
            {/* Right content */}
            <div>
              <h3 className="font-bold text-2xl tracking-wide md:mb-5">
                ActivePlace
              </h3>
              <h4 className="font-semibold text-md tracking-wide mb-2 text-gray-600">
                dia platform with a marketplace fWellness social network and
                meeature, Australia
              </h4>
              <p className="text-gray-900 text-justify md:text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                ActivePlace is a social platform dedicated to health, fitness,
                and an active lifestyle. It is a three-sided network that
                connects people with like-minded individuals, mentors, and
                businesses – all related to physical activity and healthy
                living. The company approached the development team to create a
                wellness app that would cater to different categories of users
                and provide personalized functionality to each member group. The
                main goal was to build a unique project from scratch that
                combined social media and marketplace features.
              </p>

              <CustomButton1 title="View Case" textCss="text-gray-800" />
            </div>
          </div>

          {/* item 3 */}
          <div className="max-w-9xl py-20 grid px-4 md:grid-cols-2 gap-x-10 gap-y-10 m-auto">
            {/* Left content */}
            <div className="order-3 md:order-2">
              <h3 className="font-bold text-2xl tracking-wide mb-5">ILVE</h3>
              <h4 className="font-semibold text-md tracking-wide mb-2 text-gray-600">
                Event Management Platform, USA
              </h4>
              <p className="text-gray-900 text-justify md:text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                ILVE is a global manufacturer of gas and electric household
                cooking appliances with a reach across 40 countries worldwide.
                Since 1975, the company has been known as a niche brand
                specializing in developing an extensive range of built-in ovens
                and cookers for both commercial and domestic use. ILVE was
                looking to create a showroom assistant to increase the level of
                sales and make it smooth for the end client. Besides the end
                client-facing part, a variety of managerial dashboards were
                created to allow sales consultants and business managers to
                execute their functions and have everything controlled in one
                place.
              </p>

              <CustomButton1 title="View Case" textCss="text-gray-800" />
            </div>
            {/* Right content */}
            <div className="order-2 md:order-3 flex items-center justify-center">
              <div className="w-full h-56 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://t4.ftcdn.net/jpg/01/64/26/27/360_F_164262701_BsbY2qe8M3fvvB4cBWsFLgeEXhgEukcw.jpg"
                  alt="Our Case Studies "
                />
              </div>
            </div>
          </div>
        </section>

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
          <div className="relative max-w-9xl px-4 py-20 grid md:grid-cols-2 gap-5 md:gap-x-10 md:gap-y-10  m-auto">
            <span class="absolute font-semibold text-[4rem] md:text-[12rem] font-theme-font leading-none opacity-10 top-0 left-[1/2] text-gray-500 text-shadow-2">
              We Provide
            </span>
            {/* heading  */}
            <div className="md:col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Custom Web App Development Services
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  We Provide
                </h1>
              </div>
            </div>

            {/* item 1 */}
            <div>
              <h3 className="font-bold  text-2xl mb-5 text-red-600">
                Web app development
              </h3>

              <p className="text-gray-400 text-justify md:text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                Our custom web application development company offers a full
                range of tailored solutions that meet and exceed your business
                requirements. Each project is unique and we make sure your needs
                fully click with the tech solution.
              </p>
            </div>
            {/* item 2 */}
            <div>
              <h3 className="font-bold text-2xl mb-5 text-yellow-600">
                Progressive web app
              </h3>

              <p className="text-gray-400 text-justify md:text-start text-sm tracking-wide leading-5  font-theme-font mb-2">
                Need a native-like app experience with website-like performance?
                Leverage our expertise in building PWAs for cross-platform
                experience with enhanced page-load speed and availability.
              </p>
            </div>

            {/* item 3 */}
            <div>
              <h3 className="font-bold text-2xl mb-5 text-orange-600">
                Web app consulting
              </h3>

              <p className="text-gray-400 text-justify md:text-start text-sm tracking-wide leading-5 font-theme-font mb-2">
                Need some expert advice? Our custom web application development
                services company will consult on building the exact type of web
                software your business needs.
              </p>
            </div>

            {/* item 4 */}
            <div>
              <h3 className="font-bold text-2xl mb-5 text-green-600">
                Web app re-engineering
              </h3>

              <p className="text-gray-400 text-justify md:text-start text-sm tracking-wide leading-5  font-theme-font mb-2">
                Step up your tech strategy by transforming outdated software
                into robust custom web application . Our team of web developers
                assists in application re-engineering for you to harness the
                latest technologies and environments.
              </p>
            </div>

            {/* item 5 */}
            <div>
              <h3 className="font-bold  text-2xl mb-5 text-blue-600">
                Front-end development
              </h3>
              <p className="text-gray-400 text-justify md:text-start text-sm tracking-wide leading-5  font-theme-font mb-2">
                Our UX/UI web designers deliver a supreme experience for
                end-users through catchy and sleek design. We take the best from
                JavaScript to build responsive custom web app developer
                solutions.
              </p>
            </div>
            {/* item 6 */}
            <div>
              <h3 className="font-bold text-2xl mb-5 text-pink-600">
                Back-end development
              </h3>

              <p className="text-gray-400 text-justify md:text-start text-sm tracking-wide leading-5  font-theme-font mb-2">
                Get scalable back-end solutions to support mission-critical
                processes. As a global custom web application development
                company, we have gathered a winning tech stack to ensure a solid
                architecture and advanced data structures.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits of our Web App Development Services */}
        <section>
          <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-2 lg:gap-y-10  m-auto">
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
              <div className="h-72 w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 border-b-4 hover:border-purple-600 relative">
                <span class="absolute font-bold text-8xl font-theme-font leading-none opacity-40 top-6 left-6 text-purple-600">
                  01
                </span>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Scalability
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    Our solutions adapt to your business growth and efficiently
                    sustain an influx of new users. Deliver high web performance
                    and do it every time.
                  </p>
                </div>
              </div>
              {/* item 2 */}
              <div className="relative h-72 w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl border-b-4 hover:border-pink-600 bg-slate-50">
                <span class="absolute font-bold text-8xl font-theme-font leading-none opacity-40 top-6 left-6 text-pink-600">
                  02
                </span>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Latest technology
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5   font-theme-font">
                    Our custom web application development services keeps up
                    with the tech trends in web development so you have a
                    competitive edge on the market.
                  </p>
                </div>
              </div>
              {/* item 3 */}
              <div className="relative h-72 w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl border-b-4 hover:border-orange-600 bg-slate-50">
                <span class="absolute font-bold text-8xl leading-none opacity-40 top-6 left-6 font-theme-font text-orange-600">
                  03
                </span>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Data security
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    We are committed to providing a high level of security for
                    your web application. For that, our developers embed
                    consistent security controls into the solution to guard off
                    malicious agents.
                  </p>
                </div>
              </div>
              {/* item 4 */}
              <div className="relative h-72 w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl border-b-4 hover:border-green-600 bg-slate-50">
                <span class="absolute font-bold text-8xl leading-none opacity-40 top-6 left-6 font-theme-font text-green-600">
                  04
                </span>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Relevant talent
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    As an established custom web application development
                    services company, we hand-pick each developer to fit your
                    project needs. All our web developers have relevant
                    certifications and boast in-depth industry expertise
                  </p>
                </div>
              </div>
              {/* item 5 */}
              <div className="relative h-72 w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl border-b-4 hover:border-blue-600 bg-slate-50">
                <span class="absolute font-bold text-8xl leading-none opacity-40 top-6 left-6 font-theme-font text-blue-600">
                  05
                </span>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Dedicated web development
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    Prioritize custom web application development company by
                    hiring a dedicated team for extra control. We assign
                    developers exclusivity to your projects with their undivided
                    attention and tailored skills.
                  </p>
                </div>
              </div>
              {/* item 6 */}
              <div className="relative h-72 w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl border-b-4 hover:border-yellow-600 bg-slate-50">
                <span class="absolute font-bold text-8xl leading-none opacity-40 top-6 left-6 font-theme-font text-yellow-600">
                  06
                </span>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    End-to-end development
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
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
          <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2 gap-x-10  m-auto">
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
          <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
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
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Discovery
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    Our collaboration starts with an in-depth analysis of your
                    business needs and market trends. We assess the solution
                    viability and product success by documenting main
                    functionality and milestones.
                  </p>
                </div>
              </div>
              {/* item 2 */}
              <div className="h-72 relative w-full  px-4 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 border border-b-8">
                <div class="absolute  top-5 left-5 h-12 w-12  font-bold text-8xl font-theme-font leading-none opacity-40  ">
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                    src="https://cdn-icons-png.freepik.com/256/1336/1336494.png?ga=GA1.1.705946748.1706705440&"
                    alt="Design and development icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Design and development
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5   font-theme-font">
                    Here, our web designers breathe life into the approved
                    wireframes, while a team of web developers transforms
                    designs into a working model with scalability in mind.
                  </p>
                </div>
              </div>
              {/* item 3 */}
              <div className="h-72 relative w-full px-4 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 border border-b-8">
                <div class="absolute top-5 left-5 h-12 w-12  font-bold text-8xl leading-none opacity-40  font-theme-font ">
                  <img
                    loading="lazy"
                    className="w-full h-full object-center object-cover"
                    src="https://cdn-icons-png.freepik.com/256/4296/4296532.png?ga=GA1.1.705946748.1706705440&"
                    alt="Full-cycle testing"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Full-cycle testing
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
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
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Prototyping and MVP development
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
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
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    Launch and maintenance
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
                    Finally, we roll out your solution to the server. Our
                    developers then work on the user feedback and provide
                    post-deployment support and maintenance.
                  </p>
                </div>
              </div>
              {/* item 6 */}
              <div className="h-72 relative w-full  px-4 md:p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 border border-b-8">
                <div class="absolute top-5 left-5 h-12 w-12  font-bold text-8xl leading-none opacity-40  font-theme-font">
                  <img
                    loading="lazy"
                    className="w-full h-full object-center object-cover"
                    src="https://cdn-icons-png.freepik.com/256/12375/12375564.png?ga=GA1.1.705946748.1706705440&"
                    alt="End-to-end development icon"
                  />
                </div>
                <div>
                  <h4 className="mb-4 text-xl font-bold font-theme-font">
                    End-to-end development
                  </h4>
                  <p className="text-gray-400 text-start text-sm tracking-wide leading-5 font-theme-font">
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
          <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2 gap-y-10  m-auto">
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
            <div className="col-span-2 grid md:grid-cols-2 gap-x-5 gap-y-10">
              {/* left content */}
              <div className="h-72 md:h-96 relative rounded-2xl overflow-hidden ">
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
              <div className="bg-theme-bg-dark rounded-2xl overflow-hidden p-4 md:p-10">
                <div className="h-full flex flex-col justify-between">
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
                    <h2 className="text-white text-2xl text-bold text-start tracking-wide font-theme-font mb-2">
                      Social Media Screening Platform
                    </h2>
                    <p className="text-gray-600 text-start tracking-wide font-theme-font mb-2">
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
            <div className="col-span-2 grid md:grid-cols-2 gap-x-5 gap-y-10">
              {/* left content */}
              <div className="order-2 bg-theme-bg-dark rounded-2xl overflow-hidden p-4 md:p-10">
                <div className="h-full flex flex-col justify-between">
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
                    <h2 className="text-white text-2xl text-bold text-start tracking-wide font-theme-font mb-2">
                      Bridging MedTech and MarTech for Enhanced Patient
                      Engagement
                    </h2>
                    <p className="text-gray-600 text-start tracking-wide font-theme-font mb-2">
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
              <div className="order-1 md:order-2 h-72 md:h-96 relative rounded-2xl overflow-hidden">
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

        <section>
          <div className="relative max-w-9xl px-4 py-20 md:grid md:grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[3rem] md:text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-0 text-gray-500 text-shadow-2">
              Technologies
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  We Use
                </h2>
              </div>
              <div className="md:mb-4">
                <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Technologies
                </h1>
              </div>
            </div>
            {/* Content  */}
            <div className="col-span-2 grid md:grid-cols-2 gap-x-5 gap-y-10">
              {/* left content */}

              {/* 1 card*/}
              <div className="md:h-72 w-auto p-4 md:p-10 flex flex-col items-center justify-center rounded-3xl shadow-xl bg-slate-50 border-2 border-b-4">
                <h4 className="mb-4 mr-auto text-start text-xl font-bold font-theme-font">
                  Back End
                </h4>

                <div className="w-full grid grid-cols-2  md:grid-cols-3 gap-x-2 gap-y-10 text-start tracking-wide leading-5 font-theme-font">
                  {/* next.js  */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Nest.png.webp"
                        alt="DIGITECHII SOFTWARE NestJS"
                      />
                    </div>
                    <div className="font-semibold">NestJS</div>
                  </div>
                  {/* flast.js  */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Flask_logo-1-1.png.webp"
                        alt="DIGITECHII SOFTWARE Flask"
                      />
                    </div>
                    <div className="font-semibold">Flask</div>
                  </div>
                  {/* Django */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/django-svgrepo-com-1.png.webp"
                        alt="DIGITECHII SOFTWARE Django"
                      />
                    </div>
                    <div className="font-semibold">Django</div>
                  </div>
                  {/* Express.js */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/express-js-icon-1.png.webp"
                        alt="DIGITECHII SOFTWARE Express.js"
                      />
                    </div>
                    <div className="font-semibold">Express.js</div>
                  </div>
                  {/* .NET */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Microsoft_.NET_logo-1.png.webp"
                        alt="DIGITECHII SOFTWARE .NET"
                      />
                    </div>
                    <div className="font-semibold">.NET</div>
                  </div>
                  {/* PHP */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/PHP-logo-1.png.webp"
                        alt="DIGITECHII SOFTWARE PHP"
                      />
                    </div>
                    <div className="font-semibold">PHP</div>
                  </div>
                  {/* Java Spring */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/spring.png.webp"
                        alt="DIGITECHII SOFTWARE Java Spring"
                      />
                    </div>
                    <div className="font-semibold">Java Spring</div>
                  </div>
                  {/* Python */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/python.png.webp"
                        alt="DIGITECHII SOFTWARE Python"
                      />
                    </div>
                    <div className="font-semibold">Python</div>
                  </div>
                  {/* Node.js */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/node-js-1.png.webp"
                        alt="DIGITECHII SOFTWARE Node.js"
                      />
                    </div>
                    <div className="font-semibold">Node.js</div>
                  </div>
                </div>
              </div>

              {/* card 2 */}
              <div className="md:h-72 w-auto p-4 md:p-10 flex flex-col items-center justify-center rounded-3xl shadow-xl bg-slate-50 border-2 border-b-4">
                <h4 className="mb-4 mr-auto text-start text-xl font-bold font-theme-font">
                  Front End
                </h4>
                <div className="w-full grid grid-cols-2  md:grid-cols-3 gap-x-2 gap-y-10 text-start tracking-wide leading-5 font-theme-font">
                  {/* NestJS  */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Next.png.webp"
                        alt="DIGITECHII SOFTWARE NestJS "
                      />
                    </div>
                    <div className="font-semibold">NestJS</div>
                  </div>
                  {/* Svelte  */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Group-4.png.webp"
                        alt="DIGITECHII SOFTWARE Svelte"
                      />
                    </div>
                    <div className="font-semibold">Svelte</div>
                  </div>
                  {/* Vue.js  */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Vue-js.png.webp"
                        alt="DIGITECHII SOFTWARE Vue.js"
                      />
                    </div>
                    <div className="font-semibold">Vue.js</div>
                  </div>
                  {/* Angular */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Angular_full_color_logo-1.png.webp"
                        alt="DIGITECHII SOFTWARE Angular"
                      />
                    </div>
                    <div className="font-semibold">Angular</div>
                  </div>
                  {/* React.js */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/React-icon-1.png.webp"
                        alt="DIGITECHII SOFTWARE React.js"
                      />
                    </div>
                    <div className="font-semibold">React.js</div>
                  </div>
                  {/* PWA */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Progressive_Web_Apps_Logo-1.png.webp"
                        alt="DIGITECHII SOFTWARE PWA"
                      />
                    </div>
                    <div className="font-semibold">PWA</div>
                  </div>
                  {/* TypeScript */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Typescript_logo_2020-1.png.webp"
                        alt="DIGITECHII SOFTWARE TypeScript"
                      />
                    </div>
                    <div className="font-semibold">TypeScript</div>
                  </div>
                  {/* JavaScript */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/JS.png.webp"
                        alt="DIGITECHII SOFTWARE JavaScript"
                      />
                    </div>
                    <div className="font-semibold">JavaScript </div>
                  </div>
                  {/* HTML/CSS */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/CSS3_and_HTML5_logos_and_wordmarks-1.png.webp"
                        alt="DIGITECHII SOFTWARE HTML/CSS"
                      />
                    </div>
                    <div className="font-semibold">HTML/CSS</div>
                  </div>
                </div>
              </div>

              {/* card 3 */}
              <div className="md:h-72 w-auto p-4 md:p-10 flex flex-col items-center justify-center rounded-3xl shadow-xl bg-slate-50 border-2 border-b-4">
                <h4 className="mb-4 mr-auto text-start text-xl font-bold font-theme-font">
                  Database Development
                </h4>

                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-10 text-start tracking-wide leading-5 font-theme-font">
                  {/* MariaDB */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/mariadb-1.png.webp"
                        alt="DIGITECHII SOFTWARE MariaDB "
                      />
                    </div>
                    <div className="font-semibold">MariaDB</div>
                  </div>
                  {/* Redis  */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/redis-logo-svgrepo-com-1.png.webp"
                        alt="DIGITECHII SOFTWARE Redis"
                      />
                    </div>
                    <div className="font-semibold">Redis</div>
                  </div>
                  {/* Cassandra  */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Cassandra.png.webp"
                        alt="DIGITECHII SOFTWARE Cassandra"
                      />
                    </div>
                    <div>Cassandra</div>
                  </div>
                  {/* MongoDB */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/mongodb-svgrepo-com-1.png.webp"
                        alt="DIGITECHII SOFTWARE MongoDB"
                      />
                    </div>
                    <div>MongoDB</div>
                  </div>
                  {/* Oracle DB */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/oracle-svgrepo-com-1.png.webp"
                        alt="DIGITECHII SOFTWARE Oracle DB"
                      />
                    </div>
                    <div>Oracle DB</div>
                  </div>
                  {/* SQL */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Microsoft-SQL-Server-1.png.webp"
                        alt="DIGITECHII SOFTWARE SQL Server"
                      />
                    </div>
                    <div>SQL Server</div>
                  </div>
                  {/* PostgreSQL */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Postgresql_elephant-1.png.webp"
                        alt="DIGITECHII SOFTWARE PostgreSQL"
                      />
                    </div>
                    <div>PostgreSQL</div>
                  </div>
                  {/* MYSQL */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/mysqlworkbench_93532-1.png.webp"
                        alt="DIGITECHII SOFTWARE MYSQL"
                      />
                    </div>
                    <div>MySQL</div>
                  </div>
                  {/* Elasticsearch */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/elasticsearch-1.png.webp"
                        alt="DIGITECHII SOFTWARE Elasticsearch"
                      />
                    </div>
                    <div>Elasticsearch</div>
                  </div>
                </div>
              </div>
              {/* item 4 */}
              <div className="md:h-72 w-auto p-4 md:p-10 flex flex-col items-center justify-center rounded-3xl shadow-xl bg-slate-50 border-2 border-b-4">
                <h4 className="mb-4 mr-auto text-start text-xl font-bold font-theme-font">
                  DevOps & Cloud
                </h4>

                <div className="w-full grid grid-cols-2  md:grid-cols-3 gap-x-2 gap-y-10 text-start tracking-wide leading-5 font-theme-font">
                  {/* item 1 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Next.png.webp"
                        alt="DIGITECHII SOFTWARE NestJS "
                      />
                    </div>
                    <div className="font-semibold">NestJS</div>
                  </div>
                  {/* item 2 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Group-4.png.webp"
                        alt="DIGITECHII SOFTWARE Flask"
                      />
                    </div>
                    <div className="font-semibold">Svelte</div>
                  </div>
                  {/* item 3 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Vue-js.png.webp"
                        alt="DIGITECHII SOFTWARE Vue.js"
                      />
                    </div>
                    <div>Vue.js</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Angular_full_color_logo-1.png.webp"
                        alt="DIGITECHII SOFTWARE Angular"
                      />
                    </div>
                    <div>Angular</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/React-icon-1.png.webp"
                        alt="DIGITECHII SOFTWARE React.js"
                      />
                    </div>
                    <div>React.js</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Progressive_Web_Apps_Logo-1.png.webp"
                        alt="DIGITECHII SOFTWARE PWA"
                      />
                    </div>
                    <div>PWA</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Typescript_logo_2020-1.png.webp"
                        alt="DIGITECHII SOFTWARE TypeScript"
                      />
                    </div>
                    <div>TypeScript</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/JS.png.webp"
                      />
                    </div>
                    <div>JavaScript </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-auto shrink-0">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/CSS3_and_HTML5_logos_and_wordmarks-1.png.webp"
                        alt="DIGITECHII SOFTWARE HTML/CSS"
                      />
                    </div>
                    <div>HTML/CSS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

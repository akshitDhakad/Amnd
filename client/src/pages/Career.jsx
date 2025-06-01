import Layout from "../components/Layout.jsx";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Testinomial from "../components/Testinomial.jsx";
import {
  CustomButton1,
  CustomButton2,
} from "../components/ui/CustomButtons.jsx";
import ClientCard from "../components/ClientCard.jsx";
// React icons
import { IoMdKey } from "react-icons/io";
import { Link } from "react-router-dom";
import ServicesBanner from "../components/ServicesBanner.jsx";
import AccordionCard from "../components/Accordion.jsx";
import { MdOutlineStar } from "react-icons/md";
import ContactFrom from "../components/ContactFrom.jsx";
import {
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
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
    title: "What types of web development do we produce?",
    description:
      "Our website development agency provides end-to-end professional web development services based on diverse expertise. We help global businesses produce dynamic websites and scalable web applications, content management systems and e-commerce solutions, AI-based software, and analytics capabilities. Contact our specialists for a complete list of offerings.",
  },
  {
    _id: "2",
    title: "When do you need professional website development services?",
    description:
      "You need a professional professional website development services company when you’re looking to develop a web application or re-vamp an existing one, but lack in-house skills or internal expertise to do so. web development services company. Ideally, you should at least consult with an experienced web provider if you have any questions.",
  },
  {
    _id: "3",
    title:
      "What are the criteria of professional website development services?",
    description:
      "There’s no cut and clear formula of ideal website development services since it depends on the project specificities. For us, it’s a commitment to result, transparency, and a bespoke approach. The latter should always be wrapped into a powerful solution stack matched with your needs, latest technologies, and bug-free code.",
  },
];

export default function Career() {
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
            className="abosolute -z-50 m-1 overflow-hidden top-0 min-h-min lg:h-screen flex items-center justify-center rounded-2xl"
            style={backgroundImg}
          >
            <div className="absolute m-1 -z-10 bg-black opacity-50 rounded-2xl min-h-min lg:h-screen w-full"></div>
            <div className=" max-w-9xl m-auto px-4 lg:px-10 py-5">
              {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
              <div className="mt-20 md:grid grid-cols-2 gap-x-20 gap-y-10 m-auto">
                <div className="col-span-2 flex flex-col md:gap-5">
                  <div>
                    <h2 className="text-xl md:text-3xl text-white font-semibold tracking-wide font-theme-font">
                      Join Our Team
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-6xl text-white font-bold tracking-wide font-theme-font">
                      Become a Part of Digitechii Software Team
                    </h1>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="text-white text-start tracking-wide font-theme-font">
                    Your dream team and dream job are here. Check out our perks
                    and benefits, meet our team, and read about the mentorship
                    program.
                  </p>
                  <div className="flex justify-start items-center mt-5">
                    {/* button  */}
                    <CustomButton2 />
                  </div>
                </div>

                {/* right container */}
                <div className="hidden">
                  <div className=" h-full flex  gap-5 items-between justify-center ">
                    <div className="relative bg-gray-200 opacity-20 h-56 w-64 border rounded-lg">
                      <div className="absolute top-0 z-10 left-0 h-full w-full flex justify-center items-center p-5">
                        <div className="text-black bg-white p-3 rounded-lg">
                          <p className="flex justify-center gap-1 font-theme-font ">
                            Reviewed on
                          </p>
                          <h2 className="text-6xl font-bold">Clutch</h2>
                          <div className="mb-5 flex justify-center gap-1">
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                          </div>
                          <p className="text-center font-theme-font">
                            29 Reviews
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*want to start web development banner  */}
        <section>
          <div className="relative max-w-9xl py-20    m-auto">
            <ServicesBanner
              title={
                "Fast-track your product development and shorten time-to-market with AMNDTECH as your next talent supplier."
              }
              description={"Want to Start Web Development?"}
            />
          </div>
        </section>

        {/* Our Work Section  */}
        <section>
          <div className="relative max-w-9xl py-20 grid grid-cols-2 gap-2  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Latest Works
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Case Studies
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  OurLatest Works
                </h1>
              </div>
            </div>
            {/* project 1  */}
            <div className="col-span-2 grid grid-cols-2 gap-2">
              {/* left content */}
              <div className="h-96 relative rounded-2xl overflow-hidden">
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
                  src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/philip-oroni-MyY188YX0vU-unsplash.jpg.webp"
                  alt="AMNDTECH Software"
                />
              </div>
              {/* Right content */}
              <div className="bg-theme-bg-dark rounded-2xl overflow-hidden p-10">
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
                  <div className="flex items-center justify-end gap-x-3 mt-5">
                    <span className="text-gray-600  font-bold">
                      View Case Study
                    </span>
                    <button className="p-3 text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                      <HiOutlineArrowLongRight className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* project 2 */}
            <div className="col-span-2 grid grid-cols-2 gap-2">
              {/* left content */}
              <div className="bg-theme-bg-dark rounded-2xl overflow-hidden p-10">
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
                  <div className="flex items-center justify-end gap-x-3 mt-5">
                    <span className="text-gray-600  font-bold">
                      View Case Study
                    </span>
                    <button className="p-3 text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                      <HiOutlineArrowLongRight className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div className="h-96 relative rounded-2xl overflow-hidden">
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
                  alt="AMNDTECH Software"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our CLients  */}
        <section>
          <div className="relative max-w-9xl py-20 grid grid-cols-2 gap-x-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font tracking-wide leading-none opacity-10 top-0 left-[1/2] text-graye-500">
              Clients
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
          <div className="relative max-w-9xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Testimonials
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Testimonials
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Client
                </h1>
              </div>
              <Testinomial />
            </div>
          </div>
        </section>

        {/* Faqs section  */}
        <section className="bg-gray-100">
          <div className="relative max-w-9xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[25px] left-[-125px] text-gray-500">
              have a Doubt ?
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  F.A.Q.
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Our F.A.Q.
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

        {/* Contact Us Section  */}
        <ContactFrom />
      </Layout>
    </main>
  );
}

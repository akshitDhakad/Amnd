import Layout from "../components/Layout.jsx";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Testinomial from "../components/Testinomial.jsx";

import ClientCard from "../components/ClientCard.jsx";
// React icons
import { IoMdKey } from "react-icons/io";
import { Link } from "react-router-dom";
import ServicesBanner from "../components/ServicesBanner.jsx";
import AccordionCard from "../components/Accordion.jsx";
import { MdOutlineStar } from "react-icons/md";
import ContactFrom from "../components/ContactFrom.jsx";
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
            className="abosolute -z-50 m-1 overflow-hidden top-0 h-screen flex items-center justify-center rounded-2xl"
            style={backgroundImg}
          >
            <div className="absolute  m-1 -z-10 bg-black opacity-50 rounded-2xl h-screen w-full"></div>
            <div className=" max-w-6xl m-auto px-10 py-5">
              {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
              <div className="md:grid grid-cols-2 gap-x-20 gap-y-10  m-auto">
                <div className="col-span-2 flex flex-col md:gap-5">
                  <div>
                    <h2 className="text-xl md:text-3xl text-white font-semibold tracking-wide font-theme-font">
                      Join Our Team
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-6xl text-white font-bold tracking-wide font-theme-font">
                      Become a Part of AMNDTECH Software Team
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

        {/* Pages Section  */}
        <section>
          <div className="relative max-w-6xl py-20 grid grid-cols-3 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Web Development
            </span>
            {/* heading  */}
            <div className="col-span-3 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  We Provide
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Web Development Services
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

        {/* Technologies we use  */}
        {/* Our Development Process  */}
        <section>
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[25px] left-0 text-gray-500">
              Technologies
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Technologies We Use
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Technologies We Use for Web Development
                </h1>
              </div>
            </div>
            {/* Content  */}
            <div className="col-span-2 grid grid-cols-2 gap-x-5 gap-y-10">
              {/* left content */}

              {/* 1 card*/}
              <div className=" h-72 w-auto p-10 flex flex-col items-start justify-between rounded-3xl shadow-xl bg-slate-50">
                <h4 className="mb-4 text-xl font-bold font-theme-font">
                  Back End
                </h4>

                <div>
                  <div className="grid grid-cols-4 gap-x-5 gap-y-10 text-start tracking-wide leading-5 font-theme-font">
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Nest.png.webp"
                          alt="NestJS"
                        />
                      </div>
                      <div className="font-semibold">NestJS</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Flask_logo-1-1.png.webp"
                          alt="Flask"
                        />
                      </div>
                      <div className="font-semibold">Flask</div>
                    </div>

                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/django-svgrepo-com-1.png.webp"
                          alt="Django"
                        />
                      </div>
                      <div className="font-semibold">Django</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/express-js-icon-1.png.webp"
                          alt="Express.js"
                        />
                      </div>
                      <div className="font-semibold">Express.js</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Microsoft_.NET_logo-1.png.webp"
                          alt=".NET"
                        />
                      </div>
                      <div className="font-semibold">.NET</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/PHP-logo-1.png.webp"
                          alt="PHP"
                        />
                      </div>
                      <div className="font-semibold">PHP</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Group-5.png.webp"
                          alt="Ruby"
                        />
                      </div>
                      <div className="font-semibold">Ruby</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/spring.png.webp"
                          alt="Java Spring"
                        />
                      </div>
                      <div className="font-semibold">Java Spring</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
                          src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/python.png.webp"
                          alt="Python"
                        />
                      </div>
                      <div className="font-semibold">Python</div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="h-8 w-8">
                        <img
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
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
              <div className=" h-72 w-auto p-10 flex flex-col items-start justify-between rounded-3xl shadow-xl bg-slate-50">
                <h4 className="mb-4 text-xl font-bold font-theme-font">
                  Front End
                </h4>

                <div className="grid grid-cols-4 gap-10 text-start tracking-wide leading-5 font-theme-font">
                  {/* item 1 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/JS.png.webp"
                      />
                    </div>
                    <div className="font-semibold">JavaScript </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
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
              <div className=" h-72 w-auto p-10 flex flex-col items-start justify-between rounded-3xl shadow-xl bg-slate-50">
                <h4 className="mb-4 text-xl font-bold font-theme-font">
                  Database Development
                </h4>

                <div className="grid grid-cols-4 gap-10 text-start tracking-wide leading-5 font-theme-font">
                  {/* item 1 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/mysqlworkbench_93532-1.png.webp"
                      />
                    </div>
                    <div>MySQL</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
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
              <div className=" h-72 w-auto p-10 flex flex-col items-start justify-between rounded-3xl shadow-xl bg-slate-50">
                <h4 className="mb-4 text-xl font-bold font-theme-font">
                  DevOps & Cloud
                </h4>

                <div className="grid grid-cols-4 gap-10 text-start tracking-wide leading-5 font-theme-font">
                  {/* item 1 */}
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
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
                    <div className="h-8 w-8">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                        src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/JS.png.webp"
                      />
                    </div>
                    <div>JavaScript </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-8 w-8">
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
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[25px] left-[-125px] text-gray-500">
              Development
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Our Benefits
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
                  Why Web Development Services by AMNDTECH?
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2 grid grid-cols-3 gap-10">
              {/* item 1 */}
              <div className="h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl bg-slate-50 relative">
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
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl bg-slate-50">
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
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl bg-slate-50">
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
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl bg-slate-50">
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
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl bg-slate-50">
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
              <div className="relative h-72 w-96 p-10 flex items-center rounded-3xl shadow-xl bg-slate-50">
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
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[25px] left-[-125px] text-gray-500">
              Why WebArt Software?
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Why WebArt Software?
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-5xl text-black font-bold tracking-wide font-theme-font">
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
          <div className="relative max-w-6xl py-20    m-auto">
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
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-2  m-auto">
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
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10  m-auto">
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
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
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
          <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
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
        <ContactFrom/>
      </Layout>
    </main>
  );
}

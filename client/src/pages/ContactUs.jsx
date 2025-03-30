import Layout from "../components/Layout.jsx";
import {
  Button,
  Input,
  Select,
  Option,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import AccordionCard from "../components/Accordion.jsx";
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

// React icons
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdOutlineStar } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoLocation, IoTime } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPaperPlane } from "react-icons/io";

export default function ContactUs() {
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
            className="abosolute -z-50 m-1 overflow-hidden top-0 min-h-[75vh] md:h-screen flex items-center justify-center rounded-2xl"
            style={backgroundImg}
          >
            <div className="absolute  m-1 -z-10 bg-black opacity-50 rounded-2xl min-h-[75vh] lg:h-screen w-full"></div>
            <div className=" max-w-9xl m-auto px-4 lg:px-10 py-5">
              {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
              <div className="mt-20 md:grid grid-cols-2 gap-x-20 gap-y-10  m-auto">
                <div className="col-span-2 flex flex-col md:gap-5">
                  <div>
                    <h2 className="text-xl md:text-3xl text-white font-semibold tracking-wide font-theme-font">
                      Join Our Team
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-6xl text-white font-bold tracking-wide font-theme-font">
                      We're here to help.
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

        {/* Contact us section */}
        <section>
          <div className="relative max-w-9xl py-10 lg:py-20 grid lg:grid-cols-2 gap-x-10 gap-y-10  m-auto">
            {/* left content */}
            <div className="px-4">
              <div className="flex flex-col">
                <h2 className="text-4xl lg:Ttext-3xl font-semibold text-gray-800 tracking-wide font-theme-font">
                  Get in Touch with Us
                </h2>
                <Typography
                  as="paragraph"
                  variant="paragraph"
                  className="text-sm px-1.5 text-gray-800 font-thin font-theme-font"
                >
                  Fill in your details, and our team will reach out to you
                  shortly.
                </Typography>
              </div>
              {/* address container  */}
              <div className="grid grid-cols-2 gap-x-5 gap-y-5 mt-5 lg:mt-10">
                <div
                  className="flex
                gap-2
                items-center"
                >
                  <span></span>
                  <div>
                    <h6 className="flex items-center gap-x-1.5 text-gray-900 text-xs lg:text-sm font-semibold">
                      <span>
                        <IoMdCall className="inline" />
                      </span>
                      Call the helpline:
                    </h6>
                    <p className="px-2 text-gray-900 text-xs lg:text-sm">
                      +91 8871713348
                    </p>
                  </div>{" "}
                </div>

                <div
                  className="flex
                gap-2
                items-center"
                >
                  <div>
                    <h6 className="flex items-center gap-x-1.5 text-gray-900 text-xs lg:text-sm font-semibold">
                      <span>
                        <HiOutlineMail className="inline" />
                      </span>
                      Email us:
                    </h6>
                    <p className="px-2 text-gray-900 text-xs lg:text-sm">
                      akshitdhakad7400@gmail.com
                    </p>
                  </div>{" "}
                </div>

                <div
                  className="flex
                  gap-2
                  items-center"
                >
                  <div>
                    <h6 className="flex items-center gap-x-1.5 text-gray-900 text-xs lg:text-sm font-semibold">
                      <span>
                        <IoLocation className="inline" />
                      </span>
                      Location
                    </h6>
                    <p className="px-2 text-gray-900 text-xs lg:text-sm">
                      10 Zone-1, Maharana Pratap Nagar, Madhya Pradesh, India
                      94103
                    </p>
                  </div>{" "}
                </div>

                <div
                  className="flex
                gap-2
                items-center"
                >
                  <div>
                    <h6 className="flex items-center gap-x-1.5 text-gray-900 text-xs lg:text-sm font-semibold">
                      <span>
                        <IoTime className="inline" />
                      </span>
                      Work Hours
                    </h6>
                    <p className="text-gray-900 text-xs lg:text-sm">
                      Monday - Saturday: 9am - 7pm <br /> Sunday: 12am — 6pm
                    </p>
                  </div>{" "}
                </div>
              </div>
            </div>
            {/* Right content */}
            <div className="">
              <div className="flex flex-col">
                <h2 className="text-4xl lg:Ttext-3xl font-semibold text-gray-800 tracking-wide font-theme-font">
                  Get in Touch with Us
                </h2>
                <Typography
                  as="paragraph"
                  variant="paragraph"
                  className="text-sm px-1.5 text-gray-800 font-thin font-theme-font"
                >
                  Fill in your details, and our team will reach out to you
                  shortly.
                </Typography>
              </div>
              <div className="bg-white w-full lg:max-w-lg xl:max-w-2xl h-full flex flex-col">
                <div className="md:flex-grow md:mt-4 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4">
                  <div>
                    <Input label="First Name" required />
                  </div>
                  <div>
                    <Input label="Last Name" required />
                  </div>
                  <div>
                    <Input label="Contact Number" required />
                  </div>
                  <div>
                    <Input label="Email Address" required />
                  </div>
                  <div className="md:col-span-2">
                    <Select label="Select a Service" required>
                      <Option value="0">Select a Service</Option>
                      <Option value="1">Sales</Option>
                      <Option value="2">Support</Option>
                      <Option value="3">Feedback</Option>
                    </Select>
                  </div>
                  <div className="md:col-span-2 h-full">
                    <Textarea
                      label="Project Description"
                      className="h-80"
                      size="lg"
                      resize={true}
                      required
                    />
                  </div>
                </div>
                <div className="">
                  <Button
                    className="flex items-center justify-center gap-x-2.5 w-full bg-purple-500 text-lg text-white py-2.5 px-4 rounded mt-4"
                    onClick={() => alert("Form Submitted!")}
                    variant="filled"
                  >
                    Submit <IoIosPaperPlane className="h-8 " />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* map  */}
        <section>
          <div className="max-w-9xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21615.50168188023!2d77.41295181040967!3d23.23458470200533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4269deb07df9%3A0xfee61a854a2e5374!2sMaharana%20Pratap%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1743319024772!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section>
          <div className="relative max-w-9xl py-10 lg:py-20 grid lg:grid-cols-3 gap-x-10 gap-y-10 m-auto">
            <span class="absolute font-semibold text-[8rem] font-theme-font leading-none opacity-10 top-[-25px] left-[-125px] text-gray-500">
              Web Development
            </span>
            {/* heading  */}
            <div className="col-span-3 px-4">
              {data.map((item, index) => (
                <AccordionCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}

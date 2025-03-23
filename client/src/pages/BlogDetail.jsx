import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
// component imports
import Layout from "../components/Layout.jsx";
import ServicesBanner from "../components/ServicesBanner.jsx";
import BlogCard from "../components/BlogCard.jsx";
import ContactFrom from "../components/ContactFrom.jsx";
// react icons
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

export default function BlogDetail() {
  const data = [
    {
      id: "0",
      header: "all",
      body: "Importance of Outsourcing IT Department: CTO’s Guide",
      footer: "February 10, 2024 9 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/02/getty-images-PNyBpp7736A-unsplash.jpg",
    },
    {
      id: "1",
      header: "tech",
      body: "Importance of Outsourcing IT Department: CTO’s Guide",
      footer: "February 10, 2024 9 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/02/getty-images-PNyBpp7736A-unsplash.jpg",
    },
    {
      id: "2",
      header: "web-dev",
      body: "Ruby on Rails vs Python: Everything You Need to Know",
      footer: "November 28, 2023 5 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/11/behnam-norouzi-eDUKZFYY1K4-unsplash.jpg",
    },

    {
      id: "3",
      header: "fintech",
      body: "Ten Fintech Trends to Implement in 2023",
      footer: "February 21, 2023 13 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/02/resource-database-Iia2nbOEYl8-unsplash.jpg",
    },
    {
      id: "4",
      header: "hiring",
      body: "Angular Developer Salary Trends [Market Research]",
      footer: "February 10, 2023 7 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/02/rodion-kutsaiev-LuoPwbwra4M-unsplash.jpg",
    },
    {
      id: "5",
      header: "industries",
      body: "Supply Chain Technology Innovations",
      footer: "February 28, 2023 5 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/02/getty-images-eT04zE32BMk-unsplash.jpg",
    },
    {
      id: "6",
      header: "management",
      body: "DevOps Implementation: Reasons, Benefits & Strategy",
      footer: "November 28, 2023 7 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/11/growtika-72dRZHuYJWE-unsplash.webp",
    },
    {
      id: "7",
      header: "outsourcing",
      body: "Staff Augmentation vs. Consulting: What is the Difference?",
      footer: "November 28, 2023 6 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/11/mike-kononov-lFv0V3_2H6s-unsplash.webp",
    },
    {
      id: "8",
      header: "saas",
      body: "Banking as a Service: Defenition, Benefits & Examples",
      footer: "November 28, 2023 6 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/11/philip-oroni-BranUoqv1k0-unsplash.webp",
    },
    {
      id: "9",
      header: "salaries",
      body: "Angular Developer Salary Trends [Market Research]",
      footer: "February 10, 2023 7 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/02/rodion-kutsaiev-LuoPwbwra4M-unsplash.jpg",
    },
    {
      id: "10",
      header: "tech",
      body: "Importance of Outsourcing IT Department: CTO’s Guide",
      footer: "February 10, 2024 9 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/02/getty-images-PNyBpp7736A-unsplash.jpg",
    },

    {
      id: "11",
      header: "achivements",
      body: "The Manifest Recognizes Digitechii Software as One of the Most-Reviewed IT Consulting Companies Globally",
      footer: "November 28, 2023 1 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2024/02/planet-volumes-atP72HX-ZdI-unsplash.webp",
    },
  ];
  const [tech, setTech] = useState(0);
  const backgroundImg = {
    backgroundImage: `
    linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ),
    url('https://img.freepik.com/free-photo/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529358.jpg?t=st=1710583081~exp=1710586681~hmac=95ff826615a3b9ad2d4f3ac5074566d06ff9a7ea32e10e9b184e2b9647498f42&w=900')`,
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
            <div className=" max-w-9xl m-auto px-4 md:px-10 py-5">
              {/* <div className="absolute top-0 left-0 h-full w-2/5 inset-0 bg-purple-100 bg-opacity-10 backdrop-blur-md"></div> */}
              <div className="md:grid grid-cols-2 gap-x-20 gap-y-10  m-auto">
                <div className="col-span-2 flex flex-col md:gap-5">
                  <div>
                    <h2 className="text-xl md:text-3xl text-white font-semibold tracking-wide font-theme-font">
                      Tech
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-6xl text-white font-bold tracking-wide font-theme-font">
                      Insights from Digitechii Softwares
                    </h1>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="text-white text-start tracking-wide font-theme-font">
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
          <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            {/* content  */}
            <div className="col-span-2 grid lg:grid-cols-12 gap-x-5">
              {/* left container  */}
              <div className="max-h-min flex flex-row md:flex-col justify-center gap-x-4 gap-y-10 lg:justify-between items-center">
                <Typography className="text-center">
                  Follow <br />
                  Us
                </Typography>
                <Link
                  target="_black"
                  to={"https://x.com/AmndT007"}
                  className=""
                >
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
              {/* center content */}
              <div className="lg:col-span-7 md:col-span-6 col-span-12 ">
                <div className="h-80 overflow-hidden rounded-2xl hover:cursor-pointer">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={`${data[tech].imgULR}`}
                    alt={`${data[tech].header}-Image`}
                  />
                </div>
                <div className="mt-10">
                  <Typography className="text-gray-900">
                    Tomfoolery crikey bits and bobs brilliant bamboozled down
                    the pub amongst brolly hanky panky, cack bonnet arse over
                    tit burke bugger all mate bodge fanny around butty, Richard
                    spiffing a load of old tosh porkies hunky-dory ruddy dropped
                    a clanger. Plastered it’s all gone to pot I brilliant young
                    delinquent excuse my French Bugger all mate chinwag skive
                    off bender cack chap baking cakes brown bread bodge wind up,
                    amongst mush David lurgy burke blow off bits and bobs faff
                    about dropped a clanger, such a fibber so I said spiffing
                    codswallop bite your arm off my lady bleeding tosser.
                  </Typography>
                </div>
                <div className="mt-10">
                  <div className="rounded-xl border border-s-8 border-s-purple-400 p-10">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="italic"
                    >
                      He legged it that blatant brown bread some dodgy chav
                      super a blinding shot my lady lavatory cup of char cor
                      blimey guvnor get stuffed mate you mug cobblers off his
                      nut pukka
                    </Typography>
                    <div className="flex items-start gap-x-4 mt-6">
                      <div className="h-16 w-16 overflow-hidden rounded-full">
                        <img src="" alt="" className="h-full" />
                      </div>

                      <div>
                        <Typography variant="h5" color="blue-gray">
                          Akshit Dhakad
                        </Typography>
                        <Typography variant="small" color="gray">
                          Support Engineer, Aliexpress
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 h-96 overflow-hidden rounded-2xl hover:cursor-pointer">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover"
                    src={`${data[tech].imgULR}`}
                    alt={`${data[tech].header}-Image`}
                  />
                </div>
                <div className="mt-10">
                  <Typography className="text-gray-900">
                    Tomfoolery crikey bits and bobs brilliant bamboozled down
                    the pub amongst brolly hanky panky, cack bonnet arse over
                    tit burke bugger all mate bodge fanny around butty, Richard
                    spiffing a load of old tosh porkies hunky-dory ruddy dropped
                    a clanger. Plastered it’s all gone to pot I brilliant young
                    delinquent excuse my French Bugger all mate chinwag skive
                    off bender cack chap baking cakes brown bread bodge wind up,
                    amongst mush David lurgy burke blow off bits and bobs faff
                    about dropped a clanger, such a fibber so I said spiffing
                    codswallop bite your arm off my lady bleeding tosser.
                  </Typography>
                </div>
                <div className="mt-10 space-y-5">
                  <Typography variant="h2" className="text-gray-900">
                    Install Sylius via SSH
                  </Typography>
                  <Typography className="text-gray-900">
                    Tomfoolery crikey bits and bobs brilliant bamboozled down
                    the pub amongst brolly hanky panky, cack bonnet arse over
                    tit burke bugger all mate bodge fanny around butty, Richard
                    spiffing a load of old tosh porkies hunky-dory ruddy dropped
                    a clanger. Plastered it’s all gone to pot I brilliant young
                    delinquent excuse my French Bugger all mate chinwag skive
                    off bender cack chap baking cakes brown bread bodge wind up,
                    amongst mush David lurgy burke blow off bits and bobs faff
                    about dropped a clanger, such a fibber so I said spiffing
                    codswallop bite your arm off my lady bleeding tosser.
                  </Typography>
                  <div className="flex items-center gap-x-4">
                    <div>
                      <Typography variant="h5" color="gray">
                        Tags :
                      </Typography>
                    </div>
                    <Link
                      to={"/blogs/business"}
                      className="border hover:border-purple-900 hover:text-purple-900 px-4 py-1"
                    >
                      <Typography variant="small" className="lowercase">
                        business
                      </Typography>
                    </Link>
                    <Link
                      to={"/blogs/web-design"}
                      className="border hover:border-purple-900 hover:text-purple-900 px-4 py-1"
                    >
                      <Typography variant="small" className="lowercase">
                        web design
                      </Typography>
                    </Link>
                    <Link
                      to={"/blogs/software"}
                      className="border hover:border-purple-900 hover:text-purple-900 px-4 py-1"
                    >
                      <Typography variant="small" className="lowercase">
                        software
                      </Typography>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Right content */}
              <div className="max-h-min lg:col-span-4 md:col-span-6 col-span-12 flex flex-col justify-between">
                <Card>
                  <CardHeader
                    variant={"gradient"}
                    color={"deep-purple"}
                    className="px-10 py-4"
                  >
                    Subscribe to our blog
                  </CardHeader>
                  <CardBody>
                    <Typography className="mb-2">
                      Get the latest posts in your email
                    </Typography>
                    <Input label="Email" required />
                  </CardBody>
                  <CardFooter>
                    <Button variant={"gradient"} className="w-full">
                      Subscribe
                    </Button>
                  </CardFooter>
                </Card>
                <div className="mt-10 grid grid-cols-3 gap-2">
                  <Card className="min-h-24 flex gap-2 items-center justify-center rounded-md p-4">
                    <img
                      loading="lazy"
                      src="/assets/social/facebook-logo.svg"
                      alt="facebook-logo"
                    />
                    <Typography className="font-bold">815.5K</Typography>
                    <Typography variant={"small"} className="">
                      Fans
                    </Typography>
                  </Card>
                  <Card className="min-h-24 flex gap-2 items-center justify-center rounded-md p-4">
                    <img
                      loading="lazy"
                      src="/assets/social/twitter.svg"
                      alt="twitter-logo"
                    />
                    <Typography className="font-bold">107.2K</Typography>
                    <Typography variant={"small"} className="">
                      Followers
                    </Typography>
                  </Card>
                  <Card className="min-h-24 flex gap-2 items-center justify-center rounded-md p-4">
                    <img
                      loading="lazy"
                      src="/assets/social/youtube.svg"
                      alt="facebook-logo"
                    />
                    <Typography className="font-bold">815.5K</Typography>
                    <Typography variant={"small"} className="">
                      Subscribers
                    </Typography>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services section  */}
        <section>
          <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <span class="absolute font-semibold text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] right-[-125px] text-gray-500">
              Latest Blog
            </span>
            {/* heading  */}
            <div className="col-span-2 flex flex-col ">
              <div className="mb-2">
                <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
                  Explore
                </h2>
              </div>
              <div className="mb-4">
                <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Our Latest Insights
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2 md:grid grid-cols-3 gap-x-5 gap-y-20 justify-center items-center">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
            <div className="col-span-2 flex justify-center items-center">
              <button className="px-20 py-3 font-theme-font text-lg  bg-purple-600 text-white rounded-3xl font-semibold hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                Explore More
              </button>
            </div>
          </div>
        </section>

        {/* Contact us Form */}
        <section>
          <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
            <ContactFrom />
          </div>
        </section>

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
                <h1 className="text-xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
                  Types of Web Solutions We Build
                </h1>
              </div>
            </div>
            {/* left content */}
            <div className="col-span-2  md:h-96">
              <ServicesBanner />
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}

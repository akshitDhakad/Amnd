"use client";
import React, { useState } from "react";

function BlogTech() {
  const data = [
    {
      id: "1",
      header: "TECH",
      body: "Importance of Outsourcing IT Department: CTO’s Guide",
      footer: "February 10, 2024 9 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/02/getty-images-PNyBpp7736A-unsplash.jpg",
    },
    {
      id: "2",
      header: "ACHIEVEMENTS",
      body: "The Manifest Recognizes Devox Software as One of the Most-Reviewed IT Consulting Companies Globally",
      footer: "November 28, 2023 1 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2024/02/planet-volumes-atP72HX-ZdI-unsplash.webp",
    },

    {
      id: "3",
      header: "FINTECH",
      body: "Ten Fintech Trends to Implement in 2023",
      footer: "February 21, 2023 13 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/02/resource-database-Iia2nbOEYl8-unsplash.jpg",
    },
    {
      id: "4",
      header: "HIRING",
      body: "Angular Developer Salary Trends [Market Research]",
      footer: "February 10, 2023 7 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/02/rodion-kutsaiev-LuoPwbwra4M-unsplash.jpg",
    },
    {
      id: "5",
      header: "INDUSTRIES",
      body: "Supply Chain Technology Innovations",
      footer: "February 28, 2023 5 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/02/getty-images-eT04zE32BMk-unsplash.jpg",
    },
    {
      id: "6",
      header: "MANAGEMENT",
      body: "DevOps Implementation: Reasons, Benefits & Strategy",
      footer: "November 28, 2023 7 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/11/growtika-72dRZHuYJWE-unsplash.webp",
    },
    {
      id: "7",
      header: "OUTSOURCING",
      body: "Staff Augmentation vs. Consulting: What is the Difference?",
      footer: "November 28, 2023 6 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/11/mike-kononov-lFv0V3_2H6s-unsplash.webp",
    },
    {
      id: "8",
      header: "SAAS",
      body: "Banking as a Service: Defenition, Benefits & Examples",
      footer: "November 28, 2023 6 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/11/philip-oroni-BranUoqv1k0-unsplash.webp",
    },
    {
      id: "9",
      header: "SALARIES",
      body: "Angular Developer Salary Trends [Market Research]",
      footer: "February 10, 2023 7 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/02/rodion-kutsaiev-LuoPwbwra4M-unsplash.jpg",
    },
    {
      id: "10",
      header: "TECH",
      body: "Importance of Outsourcing IT Department: CTO’s Guide",
      footer: "February 10, 2024 9 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/02/getty-images-PNyBpp7736A-unsplash.jpg",
    },
    {
      id: "11",
      header: "WEB-DEV",
      body: "Ruby on Rails vs Python: Everything You Need to Know",
      footer: "November 28, 2023 5 min",
      imgULR:
        "https://devoxsoftware.com/wp-content/uploads/2023/11/behnam-norouzi-eDUKZFYY1K4-unsplash.jpg",
    },
  ];

  const [tech, setTech] = useState(0);
  return (
    <>
      <div className="relative max-w-6xl py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
        {/* heading  */}
        <div className="col-span-2 flex flex-col items-center justify-center">
          <div className="mb-4 grid grid-cols-6 gap-x-5 gap-y-8">
            <div className="text-center">
              <button
                onClick={() => setTech(0)}
                className="px-8 py-2  whitespace-nowrap rounded-2xl shoadow border-b-2 bg-slate-200 hover:bg-black hover:text-white font-semibold tracking-wide font-theme-font delay-100"
              >
                All
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setTech(1)}
                className="px-8 py-2  whitespace-nowrap rounded-2xl shoadow border-b-2 bg-slate-200 hover:bg-black hover:text-white font-semibold tracking-wide font-theme-font delay-100"
              >
                ACHIEVEMENTS
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setTech(2)}
                className="px-8 py-2  whitespace-nowrap rounded-2xl shoadow border-b-2 bg-slate-200 hover:bg-black hover:text-white font-semibold tracking-wide font-theme-font delay-100"
              >
                FINTECH
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setTech(3)}
                className="px-8 py-2  whitespace-nowrap rounded-2xl shoadow border-b-2 bg-slate-200 hover:bg-black hover:text-white font-semibold tracking-wide font-theme-font delay-100"
              >
                HIRING
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setTech(4)}
                className="px-8 py-2  whitespace-nowrap rounded-2xl shoadow border-b-2 bg-slate-200 hover:bg-black hover:text-white font-semibold tracking-wide font-theme-font delay-100"
              >
                INDUSTRIES
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setTech(5)}
                className="px-8 py-2  whitespace-nowrap rounded-2xl shoadow border-b-2 bg-slate-200 hover:bg-black hover:text-white font-semibold tracking-wide font-theme-font delay-100"
              >
                MANAGEMENT
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setTech(6)}
                className="px-8 py-2  whitespace-nowrap rounded-2xl shoadow border-b-2 bg-slate-200 hover:bg-black hover:text-white font-semibold tracking-wide font-theme-font delay-100"
              >
                OUTSOURCING
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setTech(7)}
                className="px-8 py-2  whitespace-nowrap rounded-2xl shoadow border-b-2 bg-slate-200 hover:bg-black hover:text-white font-semibold tracking-wide font-theme-font delay-100"
              >
                SAAS
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setTech(8)}
                className="px-8 py-2  whitespace-nowrap rounded-2xl shoadow border-b-2 bg-slate-200 hover:bg-black hover:text-white font-semibold tracking-wide font-theme-font delay-100"
              >
                SALARIES
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setTech(9)}
                className="px-8 py-2  whitespace-nowrap rounded-2xl shoadow border-b-2 bg-slate-200 hover:bg-black hover:text-white font-semibold tracking-wide font-theme-font delay-100"
              >
                TECH
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setTech(10)}
                className="px-8 py-2  whitespace-nowrap rounded-2xl shoadow border-b-2 bg-slate-200 hover:bg-black hover:text-white font-semibold tracking-wide font-theme-font delay-100"
              >
                WEB DEV
              </button>
            </div>
          </div>
        </div>
        {/* content  */}
        <div className="col-span-2 grid lg:grid-cols-12 gap-x-5">
          {/* left content */}

          <div className="lg:col-span-8 md:col-span-6 col-span-12 ">
            <div className="h-80 overflow-hidden rounded-2xl hover:cursor-pointer">
              <img
                loading="lazy"
                className="h-full w-full object-cover"
                src={`${data[tech].imgULR}`}
                alt={`${data[tech].header}-Image`}
              />
            </div>
          </div>
          {/* Right content */}
          <div className="lg:col-span-4 md:col-span-6 col-span-12 flex flex-col justify-between">
            <div className=" mb-2">
              <button className="px-5 py-2 font-semibold rounded-2xl text-gray-900 hover:bg-black hover:text-white text-start tracking-wide font-theme-font">
                {`${data[tech].header}`}
              </button>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-start tracking-wide font-theme-font underline">
                {`${data[tech].body}`}
              </h2>
            </div>
            <div className="flex items-center justify-start gap-x-3 mt-5">
              <span className="text-gray-600 font-bold">
                {`${data[tech].footer}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogTech;

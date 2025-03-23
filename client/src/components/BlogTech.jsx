import React, { useState } from "react";
import { Link } from "react-router-dom";

function BlogTech() {
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

  return (
    <>
      <div className="relative max-w-9xl px-4 py-20 grid grid-cols-2 gap-x-10 gap-y-10  m-auto">
        {/* heading  */}
        <div className="col-span-2 flex flex-col items-center justify-center">
          <div className="mb-4  grid grid-cols-2 md:grid-cols-6 gap-x-5 gap-y-4">
            {data?.map((item, index) => {
              return (
                <Link to={`/blogs/${item.header}`} key={index}>
                  <button
                    onClick={() => setTech(index)}
                    className={`${
                      tech === index
                        ? "bg-slate-200 bg-black text-white"
                        : "hover:bg-slate-200"
                    } uppercase border-b-2 px-8 py-2 w-full whitespace-nowrap rounded-2xl shoadow bg-slate-200 hover:bg-gray-900 hover:text-white font-semibold tracking-wide font-theme-font transition-color`}
                  >
                    {item.header}
                  </button>
                </Link>
              );
            })}
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
            <div className="mb-2">
              <h3 className="min-w-min uppercase px-2.5 py-2 font-semibold rounded-2xl text-gray-900 hover:bg-black hover:text-white text-start tracking-wide font-theme-font">
                {`${data[tech].header}`}
              </h3>
            </div>
            <div className="flex-grow">
              <h2 className="text-4xl px-2.5 py-2 font-bold text-start tracking-wide font-theme-font underline">
                {`${data[tech].body}`}
              </h2>
            </div>
            <div className="flex items-center justify-start gap-x-3 mt-5 px-2.5 py-2">
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

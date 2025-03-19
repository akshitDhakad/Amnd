import React, { useState, useEffect } from "react";

// Data
const initialImages = [
  {
    img: "/assets/icons/digital.png",
    name: "Digital Marketing",
    desc: "Description for Image 9",
  },
  {
    img: "/assets/icons/devops.png",
    name: "Devsops Development",
    desc: "DevOps Development represents the seamless integration of development and operations....",
  },
  {
    img: "/assets/icons/webdevelopment.png",
    name: "Web Development",
    desc: "Web Development encompasses the creation of dynamic and responsive websites...",
  },

  {
    img: "/assets/icons/frontend.png",
    name: "Frontend Development",
    desc: "Frontend Development focuses on crafting interactive, responsive, and visually appealing...",
  },
  {
    img: "/assets/icons/backend.png",
    name: "Backend Development",
    desc: "Description for Image 5",
  },
  {
    img: "/assets/icons/mobile.png",
    name: "App Development , Android and iOS Apps",
    desc: "App Development covers the creation of high-performance Android and iOS applications...",
  },
  {
    img: "/assets/icons/database.png",
    name: "Database Management",
    desc: "Description for Image 3",
  },
  {
    img: "",
    name: "Custom Web App",
    desc: "Description for Image 7",
  },
  {
    img: "",
    name: "Exterprise Application",
    desc: "Description for Image 8",
  },

  {
    img: "",
    name: "Online Web Apps",
    desc: "Description for Image 10",
  },
];

const Carousel = () => {
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moveItems();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveItems = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };
  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

  return (
    <div className="carousel-container">
      <div className="d-flex flex-column">
        <div className="carousel-items">
          {Array(5)
            .fill()
            .map((_, index) => {
              const imageItem =
                images[
                  getCircularIndex(currentIndex + index - 2, images.length)
                ];
              return (
                <div
                  key={index}
                  className={`${index === 2 ? "center" : "opacity"} ${
                    (index === 0 || index === 4) &&
                    "end d-none d-md-block d-lg-block"
                  }
                    ${
                      (index === 1 || index === 3) &&
                      "d-none d-md-block d-lg-block"
                    }`}
                  onClick={() =>
                    handleItemClick(
                      getCircularIndex(currentIndex + index - 2, images.length)
                    )
                  }
                >
                  <div className="h-24 w-24 p-2 rounded-full font-semibold shadow-md hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-purple-600 hover:shoadow-2xl transition-color delay-150">
                    <img
                      loading="lazy"
                      className="h-full w-full object-contain object-center"
                      src={imageItem.img}
                      alt={`${images[currentIndex].name}`}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          {/* Render the current item description */}
          <div className="description">
            <p>
              <b>{images[currentIndex].name}</b>
            </p>
            <p>{images[currentIndex].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;


import React,{useState,useEffect} from "react";

// Data
const initialImages = [
  {
    img: "https://cdn-icons-png.freepik.com/256/12372/12372172.png?ga=GA1.1.2112499185.1718043507&semt=ais_hybrid",
    name: "Devsops Development",
    desc: "Description for Image 1",
  },
  {
    img: "https://cdn-icons-png.freepik.com/256/8422/8422301.png?ga=GA1.1.2112499185.1718043507&semt=ais_hybrid",
    name: "Web Development",
    desc: "Description for Image 2",
  },
  {
    img: "https://cdn-icons-png.freepik.com/256/11135/11135435.png?ga=GA1.1.2112499185.1718043507&semt=ais_hybrid",
    name: "Quality Assurnace",
    desc: "Description for Image 3",
  },
  {
    img: "https://cdn-icons-png.freepik.com/256/6029/6029424.png?ga=GA1.1.2112499185.1718043507&semt=ais_hybrid",
    name: "Frontend Development",
    desc: "Description for Image 4",
  },
  {
    img: "https://cdn-icons-png.freepik.com/256/16530/16530410.png?ga=GA1.1.2112499185.1718043507&semt=ais_hybrid",
    name: "Backend Development",
    desc: "Description for Image 5",
  },
  {
    img: "https://via.placeholder.com/600/8db6cd",
    name: "Website , Website App , Web Portals",
    desc: "Description for Image 6",
  },
  {
    img: "https://via.placeholder.com/600/5d47a7",
    name: "Custom Web App",
    desc: "Description for Image 7",
  },
  {
    img: "https://via.placeholder.com/600/b0f7cc",
    name: "Exterprise Application",
    desc: "Description for Image 8",
  },
  {
    img: "https://via.placeholder.com/600/7f78e0",
    name: "Analytic Web Apps",
    desc: "Description for Image 9",
  },
  {
    img: "https://via.placeholder.com/600/77e0cc",
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
    }, 3000); // Change the interval (in milliseconds) as desired

    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveItems = () => {
    // Get the next index
    const nextIndex = (currentIndex + 1) % images.length;

    // Update the state with the new current index
    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  // Function to create a circular index based on the current index and array length
  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

  return (
    <div className="carousel-container">
      <div className="d-flex flex-column">
        <div className="carousel-items">
          {/* Render 5 items on the screen */}
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
                      className="  object-contain object-center"
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
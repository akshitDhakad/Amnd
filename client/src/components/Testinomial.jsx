import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    content:
      "Charlie Green is an European entrepreneur and media consultant, and investor. He is the founder of the Hallmark Inc.",
    name: "Charlie",
    company: "Hallmark Inc.",
    image:
      "https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg",
  },
  {
    id: 2,
    content:
      "Jonathan Koletic is an American internet entrepreneur and media proprietor, and investor. He is the founder of the multi-national technology company Treymont.",
    name: "Jonathan",
    company: "Treymont Inc.",
    image:
      "https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg",
  },
  {
    id: 3,
    content:
      "Zen Doan is a business analyst, entrepreneur and media proprietor, and investor. She also known as the best selling book author.",
    name: "Zen",
    company: "Author",
    image:
      "https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg",
  },
  {
    id: 4,
    content:
      "Sarah Dam is an American internet entrepreneur and media proprietor, and investor. She is the founder of the multi-national technology company Zara.",
    name: "Sarah",
    company: "Zara Inc.",
    image:
      "https://github.com/ecemgo/ecemgo/assets/13468728/55116c98-5f9a-4b0a-9fdb-4911b52d5ef3",
  },
];

function Testinomial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrent(index);
  };

  return (
    <main className="testinomial">
      <div className="slider">
        <div
          className="slide-row flex transition-transform duration-700"
          style={{
            transform: `translateX(-${(current * 100) / testimonials.length}%)`,
          }}
          id="slide-row"
        >
          {testimonials.map((item) => (
            <div className="slide-col" key={item.id}>
              <div className="content">
                <p>{item.content}</p>
                <h2>{item.name}</h2>
                <p>{item.company}</p>
              </div>
              <div className="hero">
                <img
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                  src={item.image}
                  alt="avatar"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="indicator">
        {testimonials?.map((item, index) => (
          <span
            key={item.id}
            className={`btn ${current === index ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </main>
  );
}

export default Testinomial;

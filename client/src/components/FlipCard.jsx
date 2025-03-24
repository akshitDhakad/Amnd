import React from "react";

function FlipCard({ title, description, iconURl }) {
  const flipBoxFrontStyle1 = {
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamklshC5e4Y90SKUVglUsA1KEdp1HLwQ7H4TefBNxUg&s')",
  };
  const flipBoxBackStyle1 = {
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamklshC5e4Y90SKUVglUsA1KEdp1HLwQ7H4TefBNxUg&s')",
  };
  const flipBoxFrontStyle2 = {
    backgroundImage: "url('https://s25.postimg.cc/hj4c4qnov/cta-3.png')",
  };
  const flipBoxBackStyle2 = {
    backgroundImage: "url('https://s25.postimg.cc/hj4c4qnov/cta-3.png')",
  };
  const flipBoxFrontStyle3 = {
    backgroundImage: "url('https://s25.postimg.cc/l2q9ujy4f/cta-4.png')",
  };
  const flipBoxBackStyle3 = {
    backgroundImage: "url('https://s25.postimg.cc/l2q9ujy4f/cta-4.png')",
  };

  return (
    <div className="flipcard inline-block">
      <div className="box-item m-auto ">
        <div className="flip-box shadow-xl border border-b-8 rounded-3xl">
          <div
            className="flip-box-front text-center rounded-2xl "
            style={flipBoxFrontStyle1}
          >
            <div className="inner color-white">
              <h3 className="flip-box-header font-bold xl:text-2xl">{title}</h3>
              <div className="h-24 w-24">
                <img
                  loading="lazy"
                  src={`${iconURl}`}
                  alt="arrow"
                  className="flip-box-img"
                />
              </div>
            </div>
          </div>
          <div
            className="flip-box-back text-center rounded-2xl "
            style={flipBoxBackStyle1}
          >
            <div className="inner color-white">
              <h4 className="text-base lg:text-2xl text-start mb-4">{title}</h4>
              <p className="text-xs lg:text-base text-justify text-gray-900">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;

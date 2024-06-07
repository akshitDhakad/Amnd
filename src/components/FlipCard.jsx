import React from "react";

function FlipCard({ title, description,iconURl }) {
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
    <div className="relative flipcard inline-block">
      <div className="box-item  m-auto ">
        <div className="absolute top-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="text-xl rounded-b-full"
          >
            <g filter="url(#filter_front_section_expertise_services1)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.2476 6.80056C12.2476 2.51708 16.6069 -0.3867 20.5596 1.2639L83.5596 27.5719C85.7932 28.5046 87.2476 30.6881 87.2476 33.1085V214.187L13.4022 92.0937C12.6469 90.8448 12.2476 89.4131 12.2476 87.9535L12.2476 6.80056Z"
                fill="url(#gradient_front_section_expertise_services1)"
              ></path>
            </g>
            <defs>
              <filter
                id="filter_front_section_expertise_services1"
                x="0.247559"
                y="-7.20557"
                width="24"
                height="100"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="6"></feGaussianBlur>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161577 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                ></feBlend>
              </filter>
              <linearGradient
                id="gradient_front_section_expertise_services1"
                x1="12.2476"
                y1="0.187012"
                x2="12.2476"
                y2="214.187"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#fd8439"></stop>
                <stop offset="1" stop-color="#f87244"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flip-box shadow-xl border rounded-2xl ">
          <div
            className="flip-box-front text-center rounded-2xl "
            style={flipBoxFrontStyle1}
          >
            <div className="inner color-white">
              <h3 className="flip-box-header font-bold">{title}</h3>
              {/* <p>A short sentence describing this callout is.</p> */}
              <div className="h-24 w-24">
                <img src={`${iconURl}`} alt="arrow" className="flip-box-img" />
              </div>
            </div>
          </div>
          <div
            className="flip-box-back text-center rounded-2xl "
            style={flipBoxBackStyle1}
          >
            <div className="inner color-white">
              <button className="flip-box-button">{title}</button>
              {/* <h3 className="flip-box-header">Custom Domains</h3> */}
              <p className=" text-sm text-start">{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Repeat the structure for other flip-box items with respective styles */}
      {/* Example for the second item */}
      {/* <div className="box-item">
          <div className="flip-box">
            <div
              className="flip-box-front text-center"
              style={flipBoxFrontStyle2}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Never Sleeps</h3>
                <p>A short sentence describing this callout is.</p>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt="arrow"
                  className="flip-box-img"
                />
              </div>
            </div>
            <div
              className="flip-box-back text-center"
              style={flipBoxBackStyle2}
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Never Sleeps</h3>
                <p>A short sentence describing this callout is.</p>
                <button className="flip-box-button">Learn More</button>
              </div>
            </div>
          </div>
        </div> */}

      {/* Add the third item here */}
    </div>
  );
}

export default FlipCard;

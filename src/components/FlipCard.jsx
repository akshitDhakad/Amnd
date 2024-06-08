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
    <div className=" flipcard inline-block">
      <div className=" box-item  m-auto ">
       
        <div className="flip-box shadow-xl border rounded-2xl ">
          <div
            className="flip-box-front text-center rounded-2xl "
            style={flipBoxFrontStyle1}
          >
            <div className="inner color-white">
              <h3 className="flip-box-header font-bold">{title}</h3>
              {/* <p>A short sentence describing this callout is.</p> */}
              <div className="h-24 w-24">
                <img loading="lazy" src={`${iconURl}`} alt="arrow" className="flip-box-img" />
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

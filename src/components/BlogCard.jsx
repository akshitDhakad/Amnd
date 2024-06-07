import React from "react";

function BlogCard() {
  return (
    <>
      <div className="h-96 flex flex-col justify-between">
        <div className="h-56 overflow-hidden rounded-2xl">
          <img
            src="https://devoxsoftware.com/wp-content/uploads/2023/11/behnam-norouzi-eDUKZFYY1K4-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="flex gapx-x-2">
          <div>
            <button className="font-theme-font font-semibold text-gray-900">
              ACHIEVEMENTS
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold font-theme-font">
            Ruby on Rails vs Python: Everything You Need to Know
          </h2>
        </div>
        <div>
          <p className="font-theme-font font-semibold text-gray-600">
            November 28, 2023 5 min
          </p>
        </div>
      </div>
    </>
  );
}

export default BlogCard;

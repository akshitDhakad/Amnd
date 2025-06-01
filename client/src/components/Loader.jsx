import React from "react";
import "../css/Loader.css";

const Loader = () => {
  return (
    <div className="loader-container bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/3d-render-technology-background-with-network-communications-structure-design_1048-13621.jpg?uid=R96042563&ga=GA1.1.680121161.1738433577&semt=ais_items_boosted&w=740')]">
      <div className="logo-wrapper">
        <div className="rotating-ring"></div>
        <img
          loading="lazy"
          src="/assets/logo/digitechii.png"
          alt="Logo"
          className="pulsing-logo"
        />
      </div>
    </div>
  );
};

export default Loader;

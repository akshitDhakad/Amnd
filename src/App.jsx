"use strict";
import "./App.css";
import Home from "./pages/Home.jsx";
import Experties from "./pages/Experties.jsx";
import Technology from "./pages/Technology.jsx";
import Career from "./pages/Career.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";

// service Pages 
import WebDevelopment from "./pages/WebDevelopment.jsx";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experties" element={<Experties />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/services" element={<Technology />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/career" element={<Career />} />
      <Route path="/experties" element={<Experties />} />
      <Route path="/service/web-development" element={<WebDevelopment />} />
    </Routes>
  );
}

export default App;

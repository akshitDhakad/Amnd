"use strict";
import "./App.css";
import Home from "./app/Home";
import About from "./app/about/page";
import Blog from "./app/blog/page";
import Career from "./app/career/page";
import Experties from "./app/experties/page";
import Technology from "./app/technologies/page";
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
    </Routes>
  );
}

export default App;

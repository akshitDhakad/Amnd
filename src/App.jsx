"use strict";
import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
// Pages Routes 
import Home from "./pages/Home.jsx";
import Experties from "./pages/Experties.jsx";
import Technology from "./pages/Technology.jsx";
import Work from "./pages/Work.jsx";
import Career from "./pages/Career.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
// service Pages 
import WebDevelopmentPage from "./pages/WebDevelopment.jsx";
import BackEndPage from "./pages/BackEnd.jsx";
import MobileDevelopmentPage from "./pages/MobileDevelopment.jsx";
import FrontEndPage from "./pages/FontEnd.jsx";
import UIDesignPage from "./pages/UIDesign.jsx";
import DataAnalyticPage from "./pages/DataAnalytics.jsx";
import QualityPage from "./pages/QualityPage.jsx";
import DevopsPage from "./pages/DevopsPage.jsx";
// import DevopsPage from "./pages/DevopsPage.jsx";
import BusinessIntelligencePage from "./pages/BusinessIntelligencePage.jsx";






function App() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experties" element={<Experties />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/our-work" element={<Work />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/career" element={<Career />} />
      {/* <Route path="/experties" element={<Experties />} /> */}
      {/* services Page  */}
      <Route path="/service/devops-development" element={<DevopsPage />} />
      <Route path="service/quality-assurance" element={<QualityPage />} />
      <Route path="/service/web-development" element={<WebDevelopmentPage />} />
      <Route path="/service/data-analytics" element={<DataAnalyticPage />} />
      <Route path="/service/frontend-development" element={<FrontEndPage />} />
      <Route path="/service/backend-development" element={<BackEndPage />} />
      <Route
        path="/service/mobile-development"
        element={<MobileDevelopmentPage />}
      />
      <Route path="/service/ui-development" element={<UIDesignPage />} />
      <Route
        path="/service/business-intelligence"
        element={<BusinessIntelligencePage />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

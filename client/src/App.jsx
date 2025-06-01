"use strict";
import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "./components/Loader.jsx";
// Pages Routes
const Home = lazy(() => import("./pages/Home.jsx"));
const Experties = lazy(() => import("./pages/Experties.jsx"));
const Technology = lazy(() => import("./pages/Technology.jsx"));
const Work = lazy(() => import("./pages/Work.jsx"));
const Career = lazy(() => import("./pages/Career.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const BlogDetail = lazy(() => import("./pages/BlogDetail.jsx"));
const ContactUs = lazy(() => import("./pages/ContactUs.jsx"));
const ErrorPage = lazy(() => import("./pages/ErrorPage.jsx"));
// service Pages
const WebDevelopmentPage = lazy(() => import("./pages/WebDevelopment.jsx"));
const BackEndPage = lazy(() => import("./pages/BackEnd.jsx"));
const MobileDevelopmentPage = lazy(() =>
  import("./pages/MobileDevelopment.jsx")
);
const FrontEndPage = lazy(() => import("./pages/FrontEnd.jsx"));
const UIDesignPage = lazy(() => import("./pages/UIDesign.jsx"));
const DataAnalyticPage = lazy(() => import("./pages/DataAnalytics.jsx"));
const QualityPage = lazy(() => import("./pages/QualityPage.jsx"));
const DevopsPage = lazy(() => import("./pages/DevopsPage.jsx"));

// import DevopsPage from "./pages/DevopsPage.jsx";
const BusinessIntelligencePage = lazy(() =>
  import("./pages/BusinessIntelligencePage.jsx")
);

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experties" element={<Experties />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/our-work" element={<Work />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs" element={<Blog />}>
          <Route path=":id" element={<BlogDetail />} />
        </Route>
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/experties" element={<Experties />} /> */}
        {/* services Page  */}
        <Route path="/service/devops-development" element={<DevopsPage />} />
        <Route path="service/quality-assurance" element={<QualityPage />} />
        <Route
          path="/service/web-development"
          element={<WebDevelopmentPage />}
        />
        <Route path="/service/data-analytics" element={<DataAnalyticPage />} />
        <Route
          path="/service/frontend-development"
          element={<FrontEndPage />}
        />
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
    </Suspense>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VisionMissionSection from "./components/VisionMissionSection";
import ServicesSection from "./components/Services";
import AboutSection from "./components/AboutSection";
import About from "./pages/About";
import ContactSection from "./components/ContactSection";
import TeamSection from "./components/TeamSection";
import WhyUs from "./components/WhyUs";
import FooterSection from "./components/FooterSection";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      {/* Navbar appears on all pages */}
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>

      {/* Footer appears on all pages */}
      <FooterSection />
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ContactSection from "./components/ContactSection";
import TeamPage from "./pages/TeamPage";
import FooterSection from "./components/FooterSection";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* App Background */}
      <div className="bg-gray-50 min-h-screen">
        {/* Fixed Width Wrapper */}
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/servicepage" element={<ServicesPage />} />
          </Routes>

          {/* Footer */}
          <FooterSection />
        </div>
      </div>
    </Router>
  );
}

export default App;

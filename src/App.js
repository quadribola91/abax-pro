import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AbaxChatbot from "./components/AbaxChatbot";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactSection from "./components/ContactSection";
import TeamPage from "./pages/TeamPage";
import ServicesPage from "./pages/ServicesPage";

/* -------------------------
   INNER APP (Uses Router)
-------------------------- */

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <PageLoader />}

      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/servicepage" element={<ServicesPage />} />
      </Routes>

      <FooterSection />
      <ScrollToTopButton />
      <AbaxChatbot />
    </>
  );
}

/* -------------------------
   ROOT APP
-------------------------- */

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

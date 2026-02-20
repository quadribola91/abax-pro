import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

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

  // Map each route to its SEO metadata
  const seoMap = {
    "/": {
      title: "AbaxPS - Home",
      description: "AbaxPS provides top-notch services for your business.",
    },
    "/about": {
      title: "About AbaxPS",
      description: "Learn more about AbaxPS and our mission.",
    },
    "/contact": {
      title: "Contact AbaxPS",
      description: "Get in touch with AbaxPS for your queries.",
    },
    "/team": {
      title: "AbaxPS Team",
      description: "Meet the talented team behind AbaxPS.",
    },
    "/servicepage": {
      title: "Our Services - AbaxPS",
      description: "Discover the range of services offered by AbaxPS.",
    },
  };

  const currentSeo = seoMap[location.pathname] || {
    title: "AbaxPS",
    description: "AbaxPS business services website",
  };

  return (
    <>
      <Helmet>
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://www.abaxps.com${location.pathname}`}
        />
      </Helmet>

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
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;

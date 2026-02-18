// src/pages/ServicesPage.js
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import services from "../components/ServicesData";
import heroImage from "../assets/splash5.jpg";

// Accordion Section
const AccordionSection = ({ section, isOpen, onClick }) => (
  <div className="border rounded-xl overflow-hidden bg-white">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50"
    >
      {section.title}
      <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
        ⌄
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-6 pb-5"
        >
          <ul className="space-y-2 text-gray-600">
            {section.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// Service Card with dynamic entrance
const ServiceCard = ({ service, active, setActive, index }) => {
  const Icon = service.icon;
  const [openSection, setOpenSection] = useState(null);

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    }
  }, [controls, inView]);

  const toggleCard = () => {
    setActive(active === service.id ? null : service.id);
    setOpenSection(null);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
      animate={controls}
      whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer"
    >
      {/* CARD HEADER */}
      <div className="p-8 flex items-start gap-5">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
          <Icon />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
          <p className="text-gray-600 mt-2">{service.shortDesc}</p>

          <button
            onClick={toggleCard}
            className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition text-sm font-medium"
          >
            {active === service.id ? "Close" : "Read More"}
          </button>
        </div>
      </div>

      {/* DROPDOWN CONTENT */}
      <AnimatePresence>
        {active === service.id && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-8 pb-8 space-y-4 bg-gray-50"
          >
            {service.sections.map((section, index) => (
              <AccordionSection
                key={index}
                section={section}
                isOpen={openSection === index}
                onClick={() =>
                  setOpenSection(openSection === index ? null : index)
                }
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[55vh] min-h-[420px] flex items-center justify-center">
        <img
          src={heroImage}
          alt="Our Professional Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-blue-900/40"></div>

        <div className="relative text-center px-6 max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            Our Service Catalogue
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Explore our comprehensive professional offerings designed to
            strengthen governance, compliance, and performance.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              active={activeService}
              setActive={setActiveService}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

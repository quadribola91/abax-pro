// src/pages/ServicesPage.js
import React from "react";
import { motion } from "framer-motion";
import services from "../components/ServicesData";
import heroImage from "../assets/Copy of DSC_2464.JPG";

// Reusable Card Component
const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  const bulletPoints = service.content.split("\n").filter(Boolean);

  return (
    <motion.div
      className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 flex flex-col w-full"
      whileHover={{ scale: 1.02 }}
    >
      {/* Top Section: Icon + Title */}
      <div className="flex items-center mb-6 space-x-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl flex-shrink-0">
          <Icon />
        </div>
        <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
      </div>

      {/* Short Description */}
      <p className="text-gray-600 mb-6">{service.shortDesc}</p>

      {/* Bullet Points displayed in rows */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mb-6">
        {bulletPoints.map((point, idx) => (
          <div
            key={idx}
            className="flex items-start bg-gray-50 rounded-lg p-3 flex-1 min-w-[200px]"
          >
            <span className="text-blue-600 mr-2 mt-1">✓</span>
            <span className="text-gray-700">{point}</span>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      {/* <button className="self-start mt-auto bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition text-sm font-medium">
        Learn More
      </button> */}
    </motion.div>
  );
};

export default function ServicesPage() {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* HERO HEADER */}
      <section className="relative w-full h-[55vh] min-h-[420px] flex items-center justify-center">
        <img
          src={heroImage}
          alt="Our Professional Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-blue-900/40"></div>
        <div className="relative text-center px-6 max-w-3xl text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-serif font-bold"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Service Catalogue
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore our comprehensive professional offerings designed to
            strengthen governance, compliance, and performance.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div id="servicepage" className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What We Do
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded"></div>
          </motion.div>

          {/* Services in a single column */}
          <div className="flex flex-col gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

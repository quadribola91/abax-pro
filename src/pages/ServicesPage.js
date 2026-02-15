import React, { useState } from "react";
import { motion } from "framer-motion";
import services from "../components/ServicesData";
import heroImage from "../assets/Copy of DSC_2464.JPG";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

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

        {/* overlay */}
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

          {/* Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer flex flex-col h-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl mb-5">
                    <Icon />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {service.shortDesc}
                  </p>

                  <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                    Learn More
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Modal */}
          {selectedService && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl">
                <button
                  className="absolute top-4 right-5 text-2xl font-bold text-gray-600 hover:text-black"
                  onClick={() => setSelectedService(null)}
                >
                  &times;
                </button>

                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl mb-6">
                  <selectedService.icon />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {selectedService.title}
                </h3>

                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedService.content}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

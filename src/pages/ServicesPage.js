import React, { useState } from "react";
import { motion } from "framer-motion";
import services from "../components/ServicesData";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div id="servicepage" className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Service Catalogue
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
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl mb-5">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {service.shortDesc}
                </p>

                {/* Button */}
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
              {/* Close Button */}
              <button
                className="absolute top-4 right-5 text-2xl font-bold text-gray-600 hover:text-black"
                onClick={() => setSelectedService(null)}
              >
                &times;
              </button>

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl mb-6">
                <selectedService.icon />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">
                {selectedService.title}
              </h3>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedService.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

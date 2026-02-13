import React from "react";
import { motion } from "framer-motion";

export default function StoryPurposeSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-yellow-300 px-4 py-2 gap-16 items-center">
          {/* ===================== */}
          {/* OUR STORY */}
          {/* ===================== */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              About Us
            </h2>

            <div className="h-1 w-20 bg-blue-600 rounded-full" />

            <p className="text-gray-700 text-lg leading-relaxed">
              Abax Professional Services is a firm of Chartered Accountants and
              Business Advisors committed to delivering high-quality assurance,
              advisory, and governance services across sectors.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Our work is grounded in technical rigour, professional integrity,
              and a deep understanding of evolving regulatory and business
              environments.
            </p>
          </motion.div>

          {/* ===================== */}
          {/* OUR PURPOSE */}
          {/* ===================== */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-xl shadow-md hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our Purpose
            </h2>

            <div className="h-1 w-20 bg-yellow-600 rounded-full mb-6" />

            <p className="text-gray-700 text-lg leading-relaxed">
              We believe that strong financial reporting, regulatory compliance,
              and independent advisory frameworks are not merely statutory
              obligations — they are essential to investor confidence,
              organisational resilience, and sustainable economic growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

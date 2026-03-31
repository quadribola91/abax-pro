// src/pages/Certifications.js
import React from "react";
import { motion } from "framer-motion";
import msiBadge from "../assets/certifications/MSIMember_Logo_PNG.png";

export default function Certifications() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="bg-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Certifications & Professional Memberships
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            Our certifications and professional affiliations demonstrate our
            commitment to global standards, regulatory compliance, and trusted
            advisory services.
          </p>
        </div>
      </section>

      {/* MSI SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#0B3A6E] mb-6">
              MSI Global Alliance Membership
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Abax Professional Services is a recognized member of the
              <span className="font-semibold"> MSI Global Alliance</span>, one
              of the world's leading international associations of independent
              legal and accounting firms.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              This membership connects us to a global network of professional
              firms across more than 100 countries, allowing us to deliver
              international-standard advisory, tax, audit, and consulting
              services to businesses operating locally and globally.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Through MSI, we collaborate with experts worldwide to provide
              clients with deeper insights, cross-border expertise, and trusted
              professional support.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl shadow-sm border">
                <p className="text-2xl font-bold text-blue-900">100+</p>
                <p className="text-sm text-gray-600">Countries Network</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border">
                <p className="text-2xl font-bold text-blue-900">250+</p>
                <p className="text-sm text-gray-600">Member Firms</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-white p-10 rounded-2xl shadow-lg border">
              <img
                src={msiBadge}
                alt="MSI Global Alliance Member"
                className="w-64 md:w-80 object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ADDITIONAL CERTIFICATIONS (Scalable Section) */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-12">
            Regulatory Compliance & Professional Standards
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {["ICAN", "CITN", "FRCN", "NDPC"].map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="text-lg font-semibold text-blue-900">{item}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Fully compliant with professional and regulatory standards.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

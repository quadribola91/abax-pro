import React from "react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Partner with Abax Professional Services?
        </h2>

        <p className="mb-8 text-lg text-blue-100">
          Contact us today to schedule a consultation and discover how we can
          support your business goals.
        </p>

        <a
          href="/contact"
          className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}

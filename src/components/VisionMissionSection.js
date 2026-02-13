import React, { useEffect, useRef, useState } from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

export default function VisionMissionSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="vision-mission"
      ref={sectionRef}
      className="py-20 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div
          className={`text-center transition-all duration-[2000ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
            Our Vision & Mission
          </h2>
          <p className="text-gray-600 font-bold mt-4">
            Trusted insight and sustainable growth
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {/* Vision Card */}
          <div
            className={`bg-white rounded-2xl shadow-md hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-3 p-10 relative border-t-4 border-yellow-400 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="text-yellow-700 text-5xl mb-6 flex justify-center transition-transform duration-500 hover:scale-110">
              <FaEye />
            </div>

            <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">
              Vision
            </h3>

            <p className="text-gray-700 text-center leading-relaxed">
              To build a resilient, high-performing professional services firm
              that consistently delivers measurable value and supports the
              sustainable growth of the organisations we serve.
            </p>
          </div>

          {/* Mission Card */}
          <div
            className={`bg-white rounded-2xl shadow-md hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-3 p-10 relative border-t-4 border-blue-400 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="text-blue-700 text-5xl mb-6 flex justify-center transition-transform duration-500 hover:scale-110">
              <FaBullseye />
            </div>

            <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">
              Mission
            </h3>

            <p className="text-gray-700 text-center leading-relaxed">
              Our mission is to deliver high-quality assurance and advisory
              services that strengthen governance, enhance transparency, and
              create measurable value for the organisations we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

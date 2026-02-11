import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../assets/heroimage1.jpg";
import img2 from "../assets/heroimage2.jpg";
import img3 from "../assets/professionalteams.jpg";

export default function HeroSection() {
  const slides = [
    {
      image: img1,
      title: "Trusted Insight & Sustainable Growth",
      text: "We bring together deep professional expertise and real-world experience, enabling us to provide solutions that are both technically sound and commercially relevant.",
    },
    {
      image: img2,
      title: "Professional Excellence & Strategic Advisory",
      text: "Delivering audit, tax and advisory services built on integrity, precision and measurable outcomes.",
    },
    {
      image: img3,
      title: "Building Governance & Financial Strength",
      text: "We help organisations strengthen governance, manage risk and unlock sustainable performance.",
    },
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto slide every 3 seconds (movement once, smooth push)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* SLIDER CONTAINER */}
      <div
        className="flex h-full transition-transform duration-[2000ms] ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${index * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative w-full h-full flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />

            {/* Dark Gradient Overlay (Improves text clarity) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B3A6E]/90 via-[#0B3A6E]/70 to-[#0B3A6E]/50"></div>

            {/* Decorative Shape Accent */}
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brandYellow/20 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
              <div
                className={`max-w-4xl transition-all duration-1000 ${
                  i === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <h1
                  className="text-white font-extrabold leading-tight 
                               text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                >
                  {slide.title}
                </h1>

                <p
                  className="mt-6 text-white/95 
                              text-base sm:text-lg md:text-xl 
                              leading-relaxed"
                >
                  {slide.text}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    to="/services"
                    className="bg-brandYellow hover:bg-yellow-500 text-primary 
                               px-8 py-4 rounded-full font-semibold 
                               transition-all duration-300 shadow-lg"
                  >
                    Our Services →
                  </Link>

                  <Link
                    to="/contact"
                    className="bg-white/20 backdrop-blur-md border border-white/30 
                               hover:bg-white/30 text-white 
                               px-8 py-4 rounded-full font-semibold 
                               transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 
                   bg-white/20 hover:bg-white/40 text-white 
                   p-3 rounded-full backdrop-blur-md 
                   transition-all duration-300"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 
                   bg-white/20 hover:bg-white/40 text-white 
                   p-3 rounded-full backdrop-blur-md 
                   transition-all duration-300"
      >
        <FaArrowRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

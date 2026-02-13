import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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

  // Auto-slide every 5 seconds
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
    <section className="relative w-full overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-[2000ms] ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${index * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative w-full flex-shrink-0 h-[70vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
            style={{ width: `${100 / slides.length}%` }}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Overlay for slight dark effect */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Text Container */}
            <div className="absolute bottom-8 left-6 sm:left-12 md:left-16 z-10 max-w-md sm:max-w-lg md:max-w-xl transition-all duration-1000">
              <div
                className={`bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg transform transition-all duration-1000 ${
                  i === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <h1 className="text-gray-900 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug">
                  {slide.title}
                </h1>
                <p className="mt-3 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  {slide.text}
                </p>
                <div className="mt-4 sm:mt-6">
                  <Link
                    to="/servicepage"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition duration-300"
                  >
                    Our Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
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

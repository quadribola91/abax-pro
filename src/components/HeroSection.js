import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img2 from "../assets/heroimage2.jpg";
import img1 from "../assets/heroimage1.jpg";
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
      title: "Trusted Insight & Sustainable Growth",
      text: "We bring together deep professional expertise and real‑world experience, enabling us to provide solutions that are both technically sound and commercially relevant.",
    },
    {
      image: img3,
      title: "Trusted Insight & Sustainable Growth",
      text: "We bring together deep professional expertise and real‑world experience, enabling us to provide solutions that are both technically sound and commercially relevant.",
    },
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto play
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
  };

  const pauseAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      onMouseEnter={pauseAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Slides */}
      <div
        id="home"
        className="flex transition-transform duration-[3000ms] ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${index * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative w-full min-h-screen flex items-center justify-center"
            style={{
              width: `${100 / slides.length}%`,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#0B3A6E]/80"></div>

            {/* Content */}
            <div
              className={`relative text-center text-white px-6 max-w-4xl transition-all duration-[2000ms] ${
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
                {slide.title}
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
                {slide.text}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/services"
                  className="bg-primary hover:bg-blue-900 text-white px-8 py-4 rounded-full font-semibold transition duration-300"
                >
                  Our Services →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
      >
        <FaArrowRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 right-6 text-white/70 animate-bounce text-sm">
        Scroll ↓
      </div>
    </section>
  );
}

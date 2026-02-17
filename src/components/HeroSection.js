import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/DSC_8105.JPG";
import img2 from "../assets/splash5.jpg";
import img3 from "../assets/splash2.jpg";

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
  const [animate, setAnimate] = useState(true);
  const intervalRef = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Trigger vertical animation on index change
  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section className="relative w-full overflow-hidden font-sans">
      {/* IMAGE SLIDER */}
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
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* TEXT CONTAINER (Now Fixed & Independent) */}
      <div className="absolute bottom-8 left-6 sm:left-12 md:left-16 z-20 max-w-md sm:max-w-lg md:max-w-xl">
        <div
          className={`backdrop-blur-lg bg-white/70 border border-white/40 
          p-6 md:p-8 rounded-2xl shadow-2xl
          transition-all duration-700 ease-out transform
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-gray-900 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug">
            {slides[index].title}
          </h1>

          <p className="mt-3 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            {slides[index].text}
          </p>

          <div className="mt-6">
            <Link
              to="/servicepage"
              className="inline-flex items-center gap-2 
              bg-yellow-600 hover:bg-blue-700 
              text-white px-6 py-3 rounded-full 
              font-semibold tracking-wide
              shadow-md hover:shadow-lg 
              transition-all duration-300 
              hover:scale-105"
            >
              Our Services →
            </Link>
          </div>
        </div>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-30">
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

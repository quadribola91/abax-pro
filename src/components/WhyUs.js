import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const whyUsData = [
  {
    key: "experience",
    title: "Proven Experience, Focused Practice",
    desc: "Our firm is led by senior professionals with decades of hands-on experience in audit, tax, corporate finance, and advisory services. We maintain a deliberately focused structure, yet our track record spans multiple industries and complex business environments.",
  },
  {
    key: "partner",
    title: "Senior-Level Expertise",
    desc: "Every team is led by a senior consultant who understands their business regulatory landscape and risk profile, ensuring quality, accountability and informed guidance.",
  },
  {
    key: "technical",
    title: "Technical Rigor with Commercial Insight",
    desc: "We apply recognised professional standards and regulatory frameworks, while ensuring our advice remains practical, relevant, and aligned with real business conditions.",
  },
  {
    key: "independence",
    title: "Independence and Objectivity",
    desc: "Our work is anchored in independence, evidence, and professional judgement. We provide unbiased perspectives and opinions that enhance governance, strengthen transparency, and build stakeholder trust.",
  },
  {
    key: "commitment",
    title: "Commitment to Long-Term Relationships",
    desc: "We see every engagement as the start of a long-term partnership. Beyond meeting immediate regulatory needs, we support clients in building sustainable growth and resilience.",
  },
];

// Responsive Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 lg:-right-10 z-20 cursor-pointer text-gray-400 text-2xl lg:text-3xl hover:text-gray-600 transition"
    onClick={onClick}
  >
    &#9654;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 lg:-left-10 z-20 cursor-pointer text-gray-400 text-2xl lg:text-3xl hover:text-gray-600 transition"
    onClick={onClick}
  >
    &#9664;
  </div>
);

export default function WhyUs() {
  const [hovered, setHovered] = useState(null);

  const hoverStyles = {
    background: "linear-gradient(135deg, #0b63ff, #0747d9)",
    color: "#fff",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50 relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
          Why Abax Professional Services
        </h2>

        <p className="text-center text-gray-500 font-semibold mb-8 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Experience the difference with our client-focused approach
        </p>

        {/* Slider */}
        <Slider {...settings}>
          {whyUsData.map((item) => (
            <div key={item.key} className="px-2 sm:px-3">
              <Tilt
                glareEnable
                glareMaxOpacity={0.15}
                scale={1.02}
                transitionSpeed={400}
              >
                <div
                  onMouseEnter={() => setHovered(item.key)}
                  onMouseLeave={() => setHovered(null)}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg p-5 sm:p-6 cursor-pointer transition-all duration-300 h-full flex flex-col min-h-[220px] sm:min-h-[250px]"
                  style={hovered === item.key ? hoverStyles : {}}
                >
                  <h3
                    className="text-lg sm:text-xl font-semibold mb-3 transition-colors duration-300"
                    style={
                      hovered === item.key
                        ? { color: "#fff" }
                        : { color: "#303b52" }
                    }
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-sm sm:text-base text-gray-600 transition-colors duration-300 leading-relaxed"
                    style={hovered === item.key ? { color: "#f0f0f0" } : {}}
                  >
                    {item.desc}
                  </p>
                </div>
              </Tilt>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

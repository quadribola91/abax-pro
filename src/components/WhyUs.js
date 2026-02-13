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
    desc: "We see every engagement as a start of a long term partnership. Beyond meeting immediate regulatory needs, we support clients in building sustainable growth, maintaining compliance, and enhancing organisational resilience.",
  },
];

// Custom arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -translate-y-1/2 right-[-40px] z-20 cursor-pointer text-gray-200 text-4xl hover:text-gray-400 transition-colors duration-300"
    onClick={onClick}
  >
    &#9654;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -translate-y-1/2 left-[-40px] z-20 cursor-pointer text-gray-200 text-4xl hover:text-gray-400 transition-colors duration-300"
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
    transform: "scale(1.05)",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-visible">
      <div className="container mx-auto px-6 max-w-6xl relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
          Why Abax Professional Services
        </h2>
        <p className="text-center text-gray-500 font-bold mb-12 max-w-2xl mx-auto">
          Experience the difference with our client-focused approach
        </p>

        <Slider {...settings}>
          {whyUsData.map((item) => (
            <div key={item.key} className="px-3">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.02}
                transitionSpeed={400}
              >
                <div
                  onMouseEnter={() => setHovered(item.key)}
                  onMouseLeave={() => setHovered(null)}
                  className="bg-gray-50 rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 h-full flex flex-col min-h-[250px]"
                  style={hovered === item.key ? hoverStyles : {}}
                >
                  <h3
                    className={`text-xl font-semibold mb-3 transition-colors duration-300`}
                    style={
                      hovered === item.key
                        ? { color: "#fff" }
                        : { color: "#303b52" }
                    }
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-gray-700 transition-colors duration-300`}
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

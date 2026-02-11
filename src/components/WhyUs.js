import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

const whyUsData = [
  {
    key: "experience",
    title: "Proven Experience, Focused Practice",
    desc: "Our firm is led by senior professionals with decades of hands-on experience in audit, tax, corporate finance, and advisory services.",
  },
  {
    key: "partner",
    title: "Partner-Led Engagements",
    desc: "Every assignment is driven by a Partner level engagement lead, who understands their business regulatory landscape and risk profile ensuring quality, accountability and informed guidance.",
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

export default function WhyUs() {
  const [hovered, setHovered] = useState(null);

  const hoverStyles = {
    background: "linear-gradient(135deg, #0b63ff, #0747d9)",
    color: "#fff",
    transform: "scale(1.05)",
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
          Why Abax Professional Services
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Experience the difference with our client-focused approach
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsData.map((item) => (
            <Tilt
              key={item.key}
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
                className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 h-full flex flex-col"
                style={hovered === item.key ? hoverStyles : {}}
              >
                <h3
                  className={`text-xl font-semibold mb-3 transition-colors duration-300`}
                  style={
                    hovered === item.key
                      ? { color: "#fff" }
                      : { color: "#0b63ff" }
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
          ))}
        </div>
      </div>
    </section>
  );
}

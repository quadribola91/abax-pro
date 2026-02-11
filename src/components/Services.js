import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt"; // npm install react-parallax-tilt

const services = [
  {
    key: "audit",
    title: "Audit & Assurance",
    icon: "fas fa-balance-scale",
    desc: "Independent audit and assurance services that strengthen transparency, accountability, and stakeholder trust.",
    color: "#0b63ff",
    hoverBg: "linear-gradient(90deg, #0b63ff, #0747d9)",
  },
  {
    key: "accountancy",
    title: "Accountancy & Reporting",
    icon: "fas fa-calculator",
    desc: "Maintain accurate, reliable, and timely financial information essential for decision-making.",
    color: "#0747d9",
    hoverBg: "linear-gradient(90deg, #0747d9, #0b63ff)",
  },
  {
    key: "tax",
    title: "Tax Advisory & Compliance",
    icon: "fas fa-file-invoice-dollar",
    desc: "Comprehensive tax advisory and compliance services built on clarity and regulatory alignment.",
    color: "#ffb703",
    hoverBg: "linear-gradient(90deg, #ffb703, #f59e0b)",
  },
  {
    key: "advisory",
    title: "Advisory Services",
    icon: "fas fa-chart-line",
    desc: "Practical, forward-looking advisory solutions to enhance organisational effectiveness.",
    color: "#0b63ff",
    hoverBg: "linear-gradient(90deg, #0b63ff, #ffb703)",
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="services w-full py-16 md:py-24 px-6 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-blue-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Our Professional Services
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          Comprehensive financial solutions tailored to your business needs
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => {
            const isHover = hovered === s.key;

            return (
              <Tilt
                key={s.key}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#fff"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={500}
                onEnter={() => setHovered(s.key)}
                onLeave={() => setHovered(null)}
              >
                <motion.div
                  className="service-card rounded-2xl p-6 shadow-lg bg-white cursor-pointer h-full flex flex-col justify-between"
                  style={
                    isHover ? { background: s.hoverBg, color: "#fff" } : {}
                  }
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="service-icon w-16 h-16 rounded-full flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300"
                      style={{
                        background: isHover
                          ? "rgba(255,255,255,0.12)"
                          : "rgba(11,99,255,0.08)",
                        color: isHover ? "#fff" : s.color,
                      }}
                    >
                      <i className={s.icon}></i>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl font-semibold mb-2 transition-colors duration-300"
                        style={{ color: isHover ? "#fff" : s.color }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="text-gray-700 mb-4 transition-colors duration-300"
                        style={{ color: isHover ? "#fff" : "#334155" }}
                      >
                        {s.desc}
                      </p>
                      <Link
                        to={`/services/${s.key}`}
                        className="text-sm font-semibold hover:underline"
                        style={{ color: isHover ? "#fff" : s.color }}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
}

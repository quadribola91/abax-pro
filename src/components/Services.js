import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import {
  FaBalanceScale,
  FaCalculator,
  FaFileInvoiceDollar,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    key: "audit",
    title: "Audit & Assurance",
    icon: <FaBalanceScale />,
    desc: "Independent audit and assurance services that strengthen transparency, accountability, and stakeholder trust.",
    color: "#0b63ff",
    hoverBg: "linear-gradient(135deg, #0b63ff, #0747d9)",
  },
  {
    key: "accountancy",
    title: "Accountancy & Reporting",
    icon: <FaCalculator />,
    desc: "Maintain accurate, reliable, and timely financial information essential for decision-making.",
    color: "#0747d9",
    hoverBg: "linear-gradient(135deg, #0747d9, #0b63ff)",
  },
  {
    key: "tax",
    title: "Tax Advisory & Compliance",
    icon: <FaFileInvoiceDollar />,
    desc: "Comprehensive tax advisory and compliance services built on clarity and regulatory alignment.",
    color: "#ffb703",
    hoverBg: "linear-gradient(135deg, #ffb703, #f59e0b)",
  },
  {
    key: "advisory",
    title: "Advisory Services",
    icon: <FaChartLine />,
    desc: "Practical, forward-looking advisory solutions to enhance organisational effectiveness.",
    color: "#0b63ff",
    hoverBg: "linear-gradient(135deg, #0b63ff, #ffb703)",
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full py-20 px-6 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-blue-700"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          Our Professional Services
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Comprehensive financial solutions tailored to your business needs
        </motion.p>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => {
            const isHover = hovered === s.key;

            return (
              <Tilt
                key={s.key}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                perspective={1200}
                scale={1.03}
                transitionSpeed={2000}
                onEnter={() => setHovered(s.key)}
                onLeave={() => setHovered(null)}
              >
                <motion.div
                  className="rounded-2xl p-6 shadow-lg cursor-pointer h-full flex flex-col justify-between transition-all duration-[2000ms] ease-in-out"
                  style={
                    isHover
                      ? { background: s.hoverBg, color: "#fff" }
                      : { background: "#ffffff" }
                  }
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-start text-left h-full">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 transition-all duration-[2000ms]"
                      style={{
                        background: isHover
                          ? "rgba(255,255,255,0.15)"
                          : "rgba(11,99,255,0.08)",
                        color: isHover ? "#fff" : s.color,
                      }}
                    >
                      {s.icon}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-semibold mb-3 transition-all duration-[2000ms]"
                      style={{ color: isHover ? "#fff" : s.color }}
                    >
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed flex-grow transition-all duration-[2000ms]"
                      style={{ color: isHover ? "#fff" : "#334155" }}
                    >
                      {s.desc}
                    </p>

                    {/* CTA */}
                    <Link
                      to={`/services/${s.key}`}
                      className="mt-6 text-sm font-semibold hover:underline transition-all duration-[2000ms]"
                      style={{ color: isHover ? "#fff" : s.color }}
                    >
                      Learn More →
                    </Link>
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

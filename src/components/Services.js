import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  FaBalanceScale,
  FaCalculator,
  FaFileInvoiceDollar,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    id: "audit",
    title: "Audit & Assurance",
    icon: <FaBalanceScale />,
    desc: "Delivering confidence, credibility, and clarity through independent, high-quality assurance engagements.",
    color: "#0b63ff",
    hoverBg: "linear-gradient(135deg, #0b63ff, #0747d9)",
  },
  {
    id: "accountancy",
    title: "Financial Reporting & Compliance Consulting",
    icon: <FaCalculator />,
    desc: "Strengthening transparency, accuracy, and trust in every aspect of your financial reporting.",
    color: "#0747d9",
    hoverBg: "linear-gradient(135deg, #0747d9, #0b63ff)",
  },
  {
    id: "tax",
    title: "Tax Management & Advisory",
    icon: <FaFileInvoiceDollar />,
    desc: "Helping organizations navigate complexity, optimize tax positions, and stay ahead of regulatory change.",
    color: "#ffb703",
    hoverBg: "linear-gradient(135deg, #ffb703, #f59e0b)",
  },
  {
    id: "grc",
    title: "Governance, Risk & Internal Control (GRC)",
    icon: <FaChartLine />,
    desc: "Building resilient organizations through strong governance and effective controls.",
    color: "#0b63ff",
    hoverBg: "linear-gradient(135deg, #0b63ff, #ffb703)",
  },
  {
    id: "financial-advisory",
    title: "Management & Financial Advisory",
    icon: <FaChartLine />,
    desc: "Driving performance, growth, and financial clarity.",
    color: "#0b63ff",
    hoverBg: "linear-gradient(135deg, #0b63ff, #ffb703)",
  },
  {
    id: "hr-advisory",
    title: "Human Resource Advisory",
    icon: <FaChartLine />,
    desc: "Empowering organizations to build strong workforces.",
    color: "#0b63ff",
    hoverBg: "linear-gradient(135deg, #0b63ff, #ffb703)",
  },
];

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-blue-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Professional Services
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 font-bold max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Comprehensive financial solutions tailored to your business needs
        </motion.p>

        <div className="mt-14">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((s) => {
              const isActive = activeCard === s.id;

              return (
                <SwiperSlide key={s.id}>
                  <Tilt
                    glareEnable={false}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    scale={1.03}
                    onEnter={() => setActiveCard(s.id)}
                    onLeave={() => setActiveCard(null)}
                  >
                    <div
                      className="rounded-2xl p-6 shadow-lg cursor-pointer h-full flex flex-col text-left transition-all duration-500"
                      style={
                        isActive
                          ? { background: s.hoverBg, color: "#fff" }
                          : { background: "#fff" }
                      }
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 transition-all duration-500"
                        style={{
                          background: isActive
                            ? "rgba(255,255,255,0.2)"
                            : "rgba(11,99,255,0.08)",
                          color: isActive ? "#fff" : s.color,
                        }}
                      >
                        {s.icon}
                      </div>

                      <h3
                        className="text-lg font-semibold mb-3 transition-all duration-500"
                        style={{ color: isActive ? "#fff" : s.color }}
                      >
                        {s.title}
                      </h3>

                      <p
                        className="text-sm leading-relaxed transition-all duration-500"
                        style={{ color: isActive ? "#fff" : "#334155" }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </Tilt>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

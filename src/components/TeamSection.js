import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import teamData from "./teamdata";

export default function TeamSection() {
  const principal = teamData[0];
  const others = teamData.slice(1);
  const [hovered, setHovered] = useState(null);

  return (
    <section id="our-team" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Meet the professionals driving excellence and strategic growth.
          </p>
        </motion.div>

        {/* Split Grid: Principal & Swiper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Principal Left (50% width) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <div
              className={`w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 transition-transform duration-300 ${
                hovered === "principal"
                  ? "hover:scale-105 hover:shadow-blue-200"
                  : ""
              }`}
              onMouseEnter={() => setHovered("principal")}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={principal.image}
                alt={principal.name}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-blue-700 mb-6"
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {principal.name}
              </h3>
              <p className="text-blue-700 font-semibold text-sm sm:text-base mt-1">
                {principal.role}
              </p>
              <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed line-clamp-6">
                {principal.shortBio}
              </p>
            </div>
          </motion.div>

          {/* Right Swiper (50% width) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
            >
              {others.map((member, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className={`w-full h-64 bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center transition-transform duration-300 ${
                      hovered === idx ? "scale-105 shadow-blue-200" : ""
                    }`}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-3 sm:mb-4"
                    />
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-blue-700 text-xs sm:text-sm mt-1">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-snug line-clamp-3">
                      {member.shortBio}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        {/* View Full Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="team">
            <a
              href="#team"
              className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800 hover:shadow-lg transition"
            >
              View Full Team
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

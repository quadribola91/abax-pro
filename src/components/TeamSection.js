import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import teamData from "./teamdata";

export default function TeamSection() {
  const navigate = useNavigate();
  const leadershipTeam = teamData.slice(0, 2);

  return (
    <section id="our-team" className="py-24 px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our leadership team driving excellence, governance, and
            innovation in every service we deliver.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
>
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
                  <Link
                    to={`/team/${member.id}`}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mt-1">{member.role}</p>
                <p className="text-gray-700 mt-3 text-sm leading-relaxed line-clamp-4">
                  {member.shortBio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Team Button */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/team")}
            className="bg-blue-600 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-800 transition-all duration-500"
          >
            View Full Team
          </motion.button>
        </div>
      </div>
    </section>
  );
}

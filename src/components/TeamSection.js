import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import teamData from "./teamdata";

export default function TeamSection() {
  const navigate = useNavigate();

  // Get first 3 members
  const topMember = teamData[0];
  const bottomMembers = teamData.slice(1, 3);

  return (
    <section id="our-team" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700 mb-4">
            Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Meet our leadership team driving excellence, governance, and
            innovation in every service we deliver.
          </p>
        </motion.div>

        {/* TOP MEMBER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-12"
        >
          <TeamCard member={topMember} />
        </motion.div>

        {/* BOTTOM TWO MEMBERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {bottomMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>

        {/* View Full Team Button */}
        <div className="text-center mt-14 sm:mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/team")}
            className="bg-blue-600 text-white px-8 sm:px-10 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-800 transition duration-300"
          >
            View Full Team
          </motion.button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Team Card Component ---------- */

function TeamCard({ member }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      {/* Image */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center md:justify-start p-6">
          <Link
            to={`/team/${member.id}`}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
          {member.name}
        </h3>
        <p className="text-blue-600 font-medium mt-1 text-sm sm:text-base">
          {member.role}
        </p>
        <p className="text-gray-700 mt-3 text-sm leading-relaxed line-clamp-4">
          {member.shortBio}
        </p>
      </div>
    </div>
  );
}

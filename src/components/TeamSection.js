import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import teamData from "./teamdata"; // Assume this contains all team members

export default function TeamSection() {
  const navigate = useNavigate();

  // Filter for Leadership Team (first 2 members for demo)
  const leadershipTeam = teamData.slice(0, 2);

  return (
    <section id="our-team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our leadership team driving excellence, governance, and
            innovation in every service we deliver.
          </p>
        </motion.div>

        {/* Leadership Team Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image with overlay */}
              <div className="relative group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-cover h-80 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Link
                    to={`/team/${member.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="text-gray-700 mt-2 text-sm line-clamp-4">
                  {member.shortBio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Team Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/team")}
            className="bg-blue-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-800 transition-colors"
          >
            View Full Team
          </motion.button>
        </div>
      </div>
    </section>
  );
}

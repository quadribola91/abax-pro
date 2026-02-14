import React from "react";
import { motion } from "framer-motion";
import teamData from "./teamdata";

export default function TeamSection() {
  const principal = teamData[0];
  const others = teamData.slice(1);

  return (
    <section id="our-team" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          className="text-4xl font-bold text-blue-700 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Leadership Team
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Meet the professionals driving excellence and strategic growth.
        </p>

        {/* PRINCIPAL */}
        <div className="flex justify-center mb-20">
          <PrincipalCard member={principal} />
        </div>

        {/* SLIDING TEAM MEMBERS */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...others, ...others].map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===============================
   PRINCIPAL CARD (TOP)
================================= */

function PrincipalCard({ member }) {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-2xl p-6 transition duration-500 hover:shadow-blue-300 hover:-translate-y-2">
      <div className="flex flex-col items-center text-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-600 mb-6 transition duration-500 hover:scale-105"
        />

        <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>

        <p className="text-blue-600 font-semibold mt-1">{member.role}</p>

        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          {member.shortBio}
        </p>
      </div>
    </div>
  );
}

/* ===============================
   SLIDING TEAM CARD (NON CLICKABLE)
================================= */

function TeamCard({ member }) {
  return (
    <div className="w-56 bg-white rounded-xl shadow-lg p-5 flex-shrink-0">
      <div className="flex flex-col items-center text-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />

        <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>

        <p className="text-blue-600 text-sm mt-1">{member.role}</p>

        <p className="text-gray-600 text-xs mt-3 leading-relaxed line-clamp-4">
          {member.shortBio}
        </p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroImg from "../assets/professionalteams.jpg";

import OlapejuImage from "../assets/Principal_ Mrs Sofowora.jpg";
import AyoImage from "../assets/MsAlamutu.jpg";
import img3 from "../assets/Mr FusiAkinkungbe.jpg";
import img4 from "../assets/Mrs Babafunke Ajibade.jpg";
import img5 from "../assets/Mr Anthony Ebele .JPG";

/* ---------------- DATA ---------------- */

const principal = {
  name: "Olapeju Sofowora B.SC, FCA, FCIT CISA",
  designation: "Principal Consultant",
  image: OlapejuImage,
  bio: `Olapeju E. Sofowora is the Founding Partner of ABAX Professional Services, bringing over 30 years of experience across audit, tax, corporate finance, and professional advisory services.
She began her career at Coopers & Lybrand (now PricewaterhouseCoopers), later held senior roles in the banking sector, and went on to establish and lead multiple professional services practices, including serving as Partner and Managing Partner at Abax-OOSA Professionals for over 17 years. Her passion for quality professional services led her to establish Binary Consulting Limited, a Human Resources Consulting firm specialising in recruitment, outsourcing  and training for clients across different industries.
Olapeju is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Taxation of Nigeria (CITN), a Certified Information Systems Auditor (CISA), and holds a degree in Statistics from the University of Ilorin. She has served on corporate and institutional boards, including First City Monument Bank Group, Royal Trust Assurance Limited (Merged with Crusader Insurance), Olashore International School Association, the Educational Committee of the Chartered Institute of Taxation and as an Executive Committee Member of the Money Market Association of Nigeria, and remains active in governance, compliance, and professional development initiatives.
`,
};

const teamMembers = [
  {
    name: "Ayo Alamutu",
    designation: "Senior Consultant Governance and Risk",
    image: AyoImage,
    bio: `Governance, Risk, Audit and Compliance Executive with over 30 years experience across UK and Nigeria...`,
  },
  {
    name: "Babafunke Ajibade",
    designation: "Senior Consultant Audit and Assurance",
    image: img4,
    bio: `Multi-skilled Governance and Assurance professional across public and private sectors...`,
  },
  {
    name: "Fusi Akinkugbe",
    designation: "Senior Consultant Financial Services",
    image: img3,
    bio: `Seasoned finance professional with nearly four decades of experience...`,
  },
  {
    name: "Anthony Ebele",
    designation: "Head, Tax Management and Advisory",
    image: img5,
    bio: "Leads tax management and advisory engagements.",
  },
];

export default function TeamPage() {
  const [view, setView] = useState("principal");
  const [activeMember, setActiveMember] = useState(null);

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="relative h-[45vh] md:h-[55vh]">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">
            Our People
          </h1>
        </div>
      </section>

      {/* TOGGLE */}
      <div className="flex justify-center gap-6 py-10">
        <button
          onClick={() => setView("principal")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            view === "principal" ? "bg-blue-700 text-white" : "bg-white shadow"
          }`}
        >
          Principal Consultant
        </button>

        <button
          onClick={() => setView("team")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            view === "team" ? "bg-blue-700 text-white" : "bg-white shadow"
          }`}
        >
          Team Members
        </button>
      </div>

      {/* PRINCIPAL VIEW */}
      {view === "principal" && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-2xl shadow-xl">
            <img
              src={principal.image}
              className="rounded-xl w-full object-cover"
            />

            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {principal.name}
              </h2>
              <p className="text-blue-700 font-semibold mt-2 mb-6">
                {principal.designation}
              </p>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {principal.bio}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* TEAM GRID */}
      {view === "team" && (
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setActiveMember(m)}
              >
                <img src={m.image} className="h-72 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{m.name}</h3>
                  <p className="text-blue-600 text-sm">{m.designation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* SIDE PANEL PROFILE */}
      <AnimatePresence>
        {activeMember && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-full md:w-[500px] h-full bg-white shadow-2xl z-50 overflow-y-auto p-8"
          >
            <button
              className="text-xl font-bold mb-6"
              onClick={() => setActiveMember(null)}
            >
              ✕
            </button>

            <img src={activeMember.image} className="rounded-lg mb-6" />

            <h2 className="text-2xl font-bold">{activeMember.name}</h2>
            <p className="text-blue-700 font-semibold mb-4">
              {activeMember.designation}
            </p>

            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {activeMember.bio}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

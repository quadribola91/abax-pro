import React from "react";

const values = [
  {
    title: "Integrity",
    desc: "We uphold the highest ethical standards in every engagement.",
  },
  {
    title: "Excellence",
    desc: "We are committed to delivering work that meets the highest technical and professional standards.",
  },
  {
    title: "Objectivity",
    desc: "We provide independent, unbiased opinions and advice based on evidence, professional scepticism and sound judgement.",
  },
  {
    title: "Confidentiality",
    desc: "Client information is protected with the utmost discretion, security, and professionalism.",
  },
  {
    title: "Client Centric Partnership",
    desc: "We work closely with clients as long-term partners, tailoring solutions to their context, goals, and evolving needs.",
  },
  {
    title: "Continuous Improvement",
    desc: "We embrace modern tools, evolving standards, and emerging best practices to remain ahead of regulatory, technological, and industry developments.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Core Values
          </h1>
          <p className="text-gray-600 text-lg">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                p-8
                rounded-2xl
                shadow-md
                transform
                transition-all
                duration-500
                hover:-translate-y-4
                hover:scale-105
                hover:shadow-2xl
                cursor-pointer
                border
                border-transparent
                hover:border-blue-600
              "
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 group-hover:text-blue-700 transition">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition">
                  {value.desc}
                </p>
              </div>

              {/* Subtle animated background glow */}
              <div
                className="
                  absolute inset-0
                  rounded-2xl
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-blue-100/40
                  to-transparent
                  blur-xl
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

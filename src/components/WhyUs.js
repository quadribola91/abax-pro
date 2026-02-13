import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const whyUsData = [
  {
    key: "experience",
    title: "Proven Experience, Focused Practice",
    desc: "Our firm is led by senior professionals with decades of hands-on experience in audit, tax, corporate finance, and advisory services.",
  },
  {
    key: "partner",
    title: "Senior-Level Expertise",
    desc: "Every engagement is led by a senior consultant who understands the regulatory landscape and risk profile of your business.",
  },
  {
    key: "technical",
    title: "Technical Rigor with Commercial Insight",
    desc: "We apply recognised professional standards while ensuring our advice remains practical and aligned with real business conditions.",
  },
  {
    key: "independence",
    title: "Independence and Objectivity",
    desc: "Our work is anchored in independence, evidence, and professional judgement to strengthen governance and transparency.",
  },
  {
    key: "commitment",
    title: "Commitment to Long-Term Relationships",
    desc: "We see every engagement as the start of a long-term partnership supporting sustainable growth and resilience.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
          Why Abax Professional Services
        </h2>

        <p className="text-center text-gray-500 font-semibold mb-12 max-w-2xl mx-auto">
          Experience the difference with our client-focused approach
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {whyUsData.map((item) => (
            <SwiperSlide key={item.key}>
              <div className="bg-white rounded-xl shadow-md p-6 min-h-[260px] flex flex-col transition duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

import React from "react";
import CoreValues from "./CoreValues";
import CallToAction from "./CallToAction";
import aboutBg from "../assets/DSC_8097.JPG";
import StoryPurposeSection from "./StoryPurposeSection";
import WhyUs from "../components/WhyUs";

export default function AboutHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[95vh] flex items-center justify-center text-center text-white overflow-hidden font-sans">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={aboutBg}
            alt="About Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Faint Overlay (controls darkness without killing image) */}
        <div className="absolute inset-0 bg-blue-900/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-6 leading-tight font-sans">
            About Abax Professional Services
          </h1>

          <p className="text-lg md:text-xl text-blue-100 font-sans">
            Built on integrity. Driven by excellence. Focused on long-term
            partnerships.
          </p>
        </div>
      </section>

      {/* Other Sections */}
      <StoryPurposeSection />
      <WhyUs />
      <CoreValues />
      <CallToAction />
    </>
  );
}

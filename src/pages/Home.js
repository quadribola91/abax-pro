import React from "react";
import VisionMissionSection from "../components/VisionMissionSection";
import ServicesSection from "../components/Services";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import WhyUs from "../components/WhyUs";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionMissionSection />
      <ServicesSection />
      <AboutSection />
      <WhyUs />
      <TeamSection />
      <ContactSection />
    </>
  );
}

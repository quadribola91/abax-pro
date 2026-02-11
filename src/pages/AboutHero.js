import React from "react";
import OurStory from "./OurStory";
import OurPurpose from "./OurPurpose";
import CoreValues from "./CoreValues";
import CallToAction from "./CallToAction";

export default function AboutHero() {
  return (
    <>
      <section className="bg-blue-900 text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Abax Professional Services
        </h1>
        <p className="max-w-2xl mx-auto text-blue-100">
          Built on integrity. Driven by excellence. Focused on long-term
          partnerships.
        </p>
      </section>
      <OurStory />
      <OurPurpose />
      <CoreValues />
      <CallToAction />
    </>
  );
}

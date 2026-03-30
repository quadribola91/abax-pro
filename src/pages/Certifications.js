import React from "react";
import msiBadge from "../assets/certifications/MSIMember_Logo_PNG.png";

export default function Certifications() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6 text-[#0B3A6E]">
        Certifications & Licenses
      </h1>

      <p className="text-gray-700 mb-10 max-w-3xl">
        Abax Professional Services is committed to maintaining the highest
        professional standards. Below are the certifications, licenses, and
        regulatory registrations that validate our expertise and compliance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* MSI Badge */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <img
            src={msiBadge}
            alt="MSI Certified Partner"
            className="h-20 mx-auto mb-4"
          />
          <h3 className="font-semibold text-lg">MSI Global Alliance Member</h3>
          <p className="text-gray-600 mt-2">
            Recognized member of MSI Global Alliance, a leading international
            association of independent professional firms.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import footlogo from "../assets/ABAX logo_page-0001.jpg";

export default function FooterSection() {
  return (
    <footer className="bg-blue-900 text-white mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + Description */}
          <div>
            <img
              src={footlogo}
              alt="Abax Logo"
              className="max-w-[170px] mb-5"
            />

            <p className="text-white/80 leading-relaxed mb-6 font-sans">
              Providing professional services to businesses and individuals with
              integrity, excellence, and a client-first approach.
            </p>

            {/* Social */}
            <a
              href="#"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-brandYellow hover:text-[#0B3A6E] transition duration-300"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brandYellow text-lg font-semibold mb-5 font-sans">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/90 font-sans">
              <li>
                <Link to="/" className="hover:text-brandYellow transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brandYellow transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/servicepage"
                  className="hover:text-brandYellow transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-brandYellow transition">
                  Team
                </Link>
              </li>
              {/* <li>
                <Link to="/team" className="hover:text-brandYellow transition">
                  Our Leadership
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brandYellow transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-brandYellow text-lg font-semibold mb-5 font-sans">
              Our Services
            </h3>

            <ul className="space-y-3 text-white/90 font-sans">
              <li>Audit & Assurance</li>
              <li>Accountancy & Financial Reporting</li>
              <li>Tax Advisory & Compliance</li>
              <li>Advisory Services</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/70 text-sm font-sans">
          © 2026 Abax Professional Services. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

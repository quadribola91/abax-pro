import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/abax-ps-logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <NavLink to="/" className="hover:text-blue-600 transition">
            Home
          </NavLink>

          {/* About */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 transition">
              About
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
              </svg>
            </button>

            <div className="absolute left-0 mt-3 w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-50">
                About Us
              </Link>
              <Link to="/team" className="block px-4 py-2 hover:bg-gray-50">
                Our Team
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 transition">
              Services
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
              </svg>
            </button>

            <div className="absolute left-0 mt-3 w-60 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link
                to="/services/audit"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Audit & Assurance
              </Link>
              <Link
                to="/services/accountancy"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Accountancy & Reporting
              </Link>
              <Link
                to="/services/tax"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Tax Advisory & Compliance
              </Link>
              <Link
                to="/services/advisory"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Advisory Services
              </Link>
            </div>
          </div>

          <NavLink to="/contact" className="hover:text-blue-600 transition">
            Contact
          </NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 z-50"
        >
          <span
            className={`absolute w-8 h-0.5 bg-black transition-all duration-300 ${
              mobileOpen ? "rotate-45 top-4" : "top-2"
            }`}
          />
          <span
            className={`absolute w-8 h-0.5 bg-black transition-all duration-300 ${
              mobileOpen ? "opacity-0" : "top-4"
            }`}
          />
          <span
            className={`absolute w-8 h-0.5 bg-black transition-all duration-300 ${
              mobileOpen ? "-rotate-45 top-4" : "top-6"
            }`}
          />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-xl font-semibold transform transition-transform duration-500 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <Link to="/" onClick={() => setMobileOpen(false)}>
          Home
        </Link>

        {/* About Mobile */}
        <div className="text-center">
          <button
            onClick={() => toggleDropdown("about")}
            className="flex items-center gap-2"
          >
            About
            <span
              className={`transition-transform duration-300 ${
                openDropdown === "about" ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              openDropdown === "about" ? "max-h-40 mt-3" : "max-h-0"
            }`}
          >
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="block py-2"
            >
              About Us
            </Link>
            <Link
              to="/team"
              onClick={() => setMobileOpen(false)}
              className="block py-2"
            >
              Our Team
            </Link>
          </div>
        </div>

        {/* Services Mobile */}
        <div className="text-center">
          <button
            onClick={() => toggleDropdown("services")}
            className="flex items-center gap-2"
          >
            Services
            <span
              className={`transition-transform duration-300 ${
                openDropdown === "services" ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              openDropdown === "services" ? "max-h-60 mt-3" : "max-h-0"
            }`}
          >
            <Link
              to="/services/audit"
              onClick={() => setMobileOpen(false)}
              className="block py-2"
            >
              Audit & Assurance
            </Link>
            <Link
              to="/services/accountancy"
              onClick={() => setMobileOpen(false)}
              className="block py-2"
            >
              Accountancy & Reporting
            </Link>
            <Link
              to="/services/tax"
              onClick={() => setMobileOpen(false)}
              className="block py-2"
            >
              Tax Advisory & Compliance
            </Link>
            <Link
              to="/services/advisory"
              onClick={() => setMobileOpen(false)}
              className="block py-2"
            >
              Advisory Services
            </Link>
          </div>
        </div>

        <Link to="/contact" onClick={() => setMobileOpen(false)}>
          Contact
        </Link>
      </div>
    </header>
  );
}

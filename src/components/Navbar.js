import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/abax-ps-logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'about' | 'services' | null
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  // Handle scroll effects & scroll spy
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = ["home", "about", "services", "team", "contact"];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const navLinkClasses = (section) =>
    `${activeSection === section ? "font-semibold text-blue-700" : "font-normal text-gray-700"} px-3 py-2 rounded hover:text-blue-600`;

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-12" />
          <span
            className={`font-bold ${scrolled ? "text-blue-700" : "text-white"}`}
          >
            Abax Professional Services
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClasses("home")}>
            Home
          </NavLink>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("about")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("about")}
              className={`flex items-center gap-1 ${navLinkClasses("about")}`}
              aria-expanded={openDropdown === "about"}
            >
              About
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
              </svg>
            </button>
            {openDropdown === "about" && (
              <ul className="absolute mt-2 bg-white rounded-lg shadow-lg py-2 w-44">
                <li>
                  <a
                    href="/about"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/about");
                      setOpenDropdown(null);
                    }}
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/team");
                      setOpenDropdown(null);
                    }}
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Our Team
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("services")}
              className={`flex items-center gap-1 ${navLinkClasses("services")}`}
              aria-expanded={openDropdown === "services"}
            >
              Services
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
              </svg>
            </button>
            {openDropdown === "services" && (
              <ul className="absolute mt-2 bg-white rounded-lg shadow-lg py-2 w-56">
                <li>
                  <a
                    href="/services/audit"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/services/audit");
                      setOpenDropdown(null);
                    }}
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Audit & Assurance
                  </a>
                </li>
                <li>
                  <a
                    href="/services/accountancy"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/services/accountancy");
                      setOpenDropdown(null);
                    }}
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Accountancy & Reporting
                  </a>
                </li>
                <li>
                  <a
                    href="/services/tax"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/services/tax");
                      setOpenDropdown(null);
                    }}
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Tax Advisory & Compliance
                  </a>
                </li>
                <li>
                  <a
                    href="/services/advisory"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/services/advisory");
                      setOpenDropdown(null);
                    }}
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Advisory Services
                  </a>
                </li>
              </ul>
            )}
          </div>

          <NavLink to="/contact" className={navLinkClasses("contact")}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-md bg-gray-100"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t transition-max-height duration-500 overflow-hidden ${mobileOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <div className="px-6 py-4 space-y-2">
          <NavLink
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block font-semibold"
          >
            Home
          </NavLink>

          {/* About Dropdown Mobile */}
          <div>
            <button
              onClick={() => toggleDropdown("about")}
              className="w-full flex justify-between items-center py-2 font-semibold"
            >
              About
            </button>
            {openDropdown === "about" && (
              <div className="pl-4">
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
            )}
          </div>

          {/* Services Dropdown Mobile */}
          <div>
            <button
              onClick={() => toggleDropdown("services")}
              className="w-full flex justify-between items-center py-2 font-semibold"
            >
              Services
            </button>
            {openDropdown === "services" && (
              <div className="pl-4">
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
            )}
          </div>

          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block font-semibold"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
}

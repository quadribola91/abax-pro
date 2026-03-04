import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/abax_no_bg.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="z-50">
          <img
            src={logo}
            alt="logo"
            className="h-14 md:h-16 transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className={`hidden md:flex items-center gap-10 transition-colors duration-300 ${
            scrolled ? "text-gray-800 font-semibold" : "text-white font-medium"
          }`}
        >
          <NavLink to="/" className="hover:text-blue-600 transition">
            Home
          </NavLink>

          {/* ABOUT */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 transition">
              About
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 7.21L10 10.94l4.77-4.73 1.06 1.06-5.3 5.3-5.3-5.3z" />
              </svg>
            </button>

            <div className="absolute left-0 mt-3 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-gray-700">
              <Link
                to="/about"
                className="block px-4 py-3 hover:bg-gray-50 border-b"
              >
                About Us
              </Link>
              <Link to="/team" className="block px-4 py-3 hover:bg-gray-50">
                Our Team
              </Link>
            </div>
          </div>

          <NavLink to="/servicepage" className="hover:text-blue-600 transition">
            Services
          </NavLink>

          {/* BLOGS */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 transition">
              Blogs
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 7.21L10 10.94l4.77-4.73 1.06 1.06-5.3 5.3-5.3-5.3z" />
              </svg>
            </button>

            <div className="absolute left-0 mt-3 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-gray-700">
              <div className="block px-4 py-3 hover:bg-gray-50 border-b">
                Publications & News
              </div>
              <div className="block px-4 py-3 hover:bg-gray-50">
                Image Gallery
              </div>
            </div>
          </div>

          <NavLink to="/contact" className="hover:text-blue-600 transition">
            Contact
          </NavLink>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 z-50"
        >
          <span
            className={`absolute w-8 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${mobileOpen ? "rotate-45 top-4" : "top-2"}`}
          />
          <span
            className={`absolute w-8 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${mobileOpen ? "opacity-0 top-4" : "top-4"}`}
          />
          <span
            className={`absolute w-8 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${mobileOpen ? "-rotate-45 top-4" : "top-6"}`}
          />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={closeMobileMenu}
      />

      {/* MOBILE MENU PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-24 text-lg font-semibold text-gray-800">
          <Link
            onClick={closeMobileMenu}
            to="/"
            className="px-6 py-4 border-b hover:bg-gray-50"
          >
            Home
          </Link>

          {/* ABOUT */}
          <div className="border-b">
            <button
              onClick={() => toggleDropdown("about")}
              className="w-full text-left px-6 py-4 flex justify-between items-center"
            >
              About
              <span
                className={`transition-transform ${openDropdown === "about" ? "rotate-180" : ""}`}
              >
                ⌄
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${openDropdown === "about" ? "max-h-40" : "max-h-0"}`}
            >
              <Link
                onClick={closeMobileMenu}
                to="/about"
                className="block px-10 py-3 border-t hover:bg-gray-50"
              >
                About Us
              </Link>
              <Link
                onClick={closeMobileMenu}
                to="/team"
                className="block px-10 py-3 border-t hover:bg-gray-50"
              >
                Our Team
              </Link>
            </div>
          </div>

          <Link
            onClick={closeMobileMenu}
            to="/servicepage"
            className="px-6 py-4 border-b hover:bg-gray-50"
          >
            Services
          </Link>

          {/* BLOGS */}
          <div className="border-b">
            <button
              onClick={() => toggleDropdown("blogs")}
              className="w-full text-left px-6 py-4 flex justify-between items-center"
            >
              Blogs
              <span
                className={`transition-transform ${openDropdown === "blogs" ? "rotate-180" : ""}`}
              >
                ⌄
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${openDropdown === "blogs" ? "max-h-40" : "max-h-0"}`}
            >
              <div className="px-10 py-3 border-t hover:bg-gray-50">
                Publications & News
              </div>
              <div className="px-10 py-3 border-t hover:bg-gray-50">
                Image Gallery
              </div>
            </div>
          </div>

          <Link
            onClick={closeMobileMenu}
            to="/contact"
            className="px-6 py-4 border-b hover:bg-gray-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

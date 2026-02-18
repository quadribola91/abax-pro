import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/abax_no_bg.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="fixed w-full z-50 bg-transparent transition-all duration-500">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="z-50">
          <img
            src={logo}
            alt="logo"
            className={`h-16 transition-all duration-500 ${
              scrolled ? "scale-110 brightness-110 drop-shadow-md" : "scale-100"
            }`}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className={`hidden md:flex items-center gap-10 transition-all duration-300 ${
            scrolled ? "text-black font-semibold" : "text-white font-medium"
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
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
              </svg>
            </button>

            <div className="absolute left-0 mt-3 w-52 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-black">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-50">
                About Us
              </Link>
              <Link to="/team" className="block px-4 py-2 hover:bg-gray-50">
                Our Team
              </Link>
            </div>
          </div>

          <Link to="/servicepage" className="hover:text-blue-600 transition">
            Services
          </Link>

          {/* BLOGS */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 transition">
              Blogs
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
              </svg>
            </button>

            <div className="absolute left-0 mt-3 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-black">
              <div className="block px-4 py-2 hover:bg-gray-50">
                Publications & News
              </div>
              <div className="block px-4 py-2 hover:bg-gray-50">
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
            } ${mobileOpen ? "opacity-0" : "top-4"}`}
          />
          <span
            className={`absolute w-8 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${mobileOpen ? "-rotate-45 top-4" : "top-6"}`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center text-xl font-semibold transition-transform duration-500 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* <img src={logo} alt="logo" className="h-20 mb-8" /> */}

        <Link
          to="/"
          onClick={closeMobileMenu}
          className="py-3 w-full text-center"
        >
          Home
        </Link>

        {/* ABOUT MOBILE */}
        <div className="w-full text-center">
          <button
            onClick={() => toggleDropdown("about")}
            className="w-full py-3"
          >
            About
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              openDropdown === "about" ? "max-h-40" : "max-h-0"
            }`}
          >
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block py-2 w-full"
            >
              About Us
            </Link>
            <Link
              to="/team"
              onClick={closeMobileMenu}
              className="block py-2 w-full"
            >
              Our Team
            </Link>
          </div>
        </div>

        <Link
          to="/servicepage"
          onClick={closeMobileMenu}
          className="py-3 w-full text-center"
        >
          Services
        </Link>

        {/* BLOGS MOBILE */}
        <div className="w-full text-center">
          <button
            onClick={() => toggleDropdown("blogs")}
            className="w-full py-3"
          >
            Blogs
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              openDropdown === "blogs" ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="block py-2 w-full text-center">
              Publications & News
            </div>
            <div className="block py-2 w-full text-center">Image Gallery</div>
          </div>
        </div>

        <Link
          to="/contact"
          onClick={closeMobileMenu}
          className="py-3 w-full text-center"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

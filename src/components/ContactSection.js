import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import contactHero from "../assets/Copy of DSC_2464.JPG";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      detail: "No. 2, Ibeju Lekki Street, Ikoyi, Lagos",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      detail: "Mon - Fri: 9:00 AM - 5:00 PM",
    },
    { icon: <FaPhoneAlt />, title: "Phone", detail: "+234-911-010-8791" },
    { icon: <FaEnvelope />, title: "Email", detail: "info@abaxps.com" },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending message...");

    try {
      const response = await fetch(
        "https://abaxps.com/abaxps/api/sendmail.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        },
      );

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(`❌ ${data.error || "Failed to send message."}`);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setStatus("❌ Server error. Try again later.");
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative h-[350px] w-full">
        <img
          src={contactHero}
          alt="Contact Abax Professional Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">
            Contact Us
          </h1>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-blue-700 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Reach out to us and our team will get back to you promptly.
            </p>

            <div className="space-y-6">
              {contactInfo.map((c, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.04 }}
                >
                  <div className="text-blue-700 text-2xl">{c.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{c.title}</h4>
                    <p className="text-gray-600">{c.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.form
            className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Send us a Message
            </h3>

            <input
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="Full Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              className="w-full border border-gray-300 p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button
              type="submit"
              className={`w-full px-6 py-3 rounded-full font-semibold transition-colors ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-800 hover:bg-blue-600 text-white"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-sm text-gray-900 font-medium pt-2">{status}</p>
            )}
          </motion.form>
        </div>
      </section>
    </>
  );
}

import React, { useState, useEffect } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const sections = [
    { name: "About Hero", id: "about-hero" },
    { name: "Our Story & Purpose", id: "story-purpose" },
    { name: "Why Us", id: "why-us" },
    { name: "Core Values", id: "core-values" },
    { name: "Call To Action", id: "call-to-action" },
  ];

  useEffect(() => {
    // Greeting message
    setMessages([
      {
        from: "bot",
        text: "Hello! 👋 I’m here to guide you through the site.",
      },
    ]);
  }, []);

  const handleScrollToSection = (id, name) => {
    setMessages((prev) => [...prev, { from: "user", text: name }]);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMessages((prev) => [
      ...prev,
      { from: "bot", text: `Sure! Navigating to "${name}" section.` },
    ]);
  };

  const handleSupport = () => {
    setMessages((prev) => [...prev, { from: "user", text: "Contact Support" }]);
    window.location.href = "mailto:support@yourwebsite.com";
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ borderRadius: "50%", padding: 15, fontSize: 20 }}
      >
        💬
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          style={{
            width: 320,
            height: 450,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          {/* Messages */}
          <div style={{ padding: 10, flex: 1, overflowY: "auto" }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: msg.from === "bot" ? "left" : "right",
                  margin: "6px 0",
                }}
              >
                <span
                  style={{
                    background: msg.from === "bot" ? "#eee" : "#0b93f6",
                    color: msg.from === "bot" ? "#000" : "#fff",
                    padding: "6px 10px",
                    borderRadius: 8,
                    display: "inline-block",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Quick navigation buttons */}
          <div style={{ padding: 10, borderTop: "1px solid #ccc" }}>
            {sections.map((sec) => (
              <button
                key={sec.id}
                style={{
                  margin: 3,
                  padding: "6px 10px",
                  borderRadius: 5,
                  border: "none",
                  background: "#0b93f6",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: 12,
                }}
                onClick={() => handleScrollToSection(sec.id, sec.name)}
              >
                {sec.name}
              </button>
            ))}
            <button
              onClick={handleSupport}
              style={{
                margin: 3,
                padding: "6px 10px",
                borderRadius: 5,
                border: "none",
                background: "#f39c12",
                color: "#fff",
                cursor: "pointer",
                fontSize: 12,
              }}
            >
              Contact Support
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

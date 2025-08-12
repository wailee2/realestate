import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [forceMenuVisible, setForceMenuVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const about = document.getElementById("about");
      if (!about) return;

      const top = about.getBoundingClientRect().top;

      if (top <= 0) {
        setVisible(true);
        setForceMenuVisible(true);
      } else {
        setVisible(false);
        setForceMenuVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-transform duration-500 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Get in Touch
        </button>

        <button
          aria-label="Menu"
          className={`p-2 rounded border border-gray-400 hover:bg-gray-100 transition
            ${
              forceMenuVisible
                ? "block"
                : "lg:hidden"
            }`}
        >
          Menu
        </button>
      </div>
    </nav>
  );
}

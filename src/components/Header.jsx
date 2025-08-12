import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Hide header when scrolling down and show when at top
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 50) {
        setHeaderHidden(true);
      } else if (currentY <= 50) {
        setHeaderHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Header with logo and nav list */}
      <header
        className={`fixed top-0 left-0 right-0 bg-white shadow-md z-40 transition-transform duration-500 ease-in-out
          ${headerHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold">Wailee</div>

          {/* Nav list */}
          <ul className="hidden md:flex gap-8 text-gray-700">
            <li><a href="#works" className="hover:text-green-600">Works</a></li>
            <li><a href="#studio" className="hover:text-green-600">Studio</a></li>
            <li><a href="#process" className="hover:text-green-600">Process</a></li>
            <li><a href="#gallery" className="hover:text-green-600">Gallery</a></li>
          </ul>
        </div>
      </header>

      {/* Navbar with Get in Touch and Menu buttons */}
      <Navbar />
    </>
  );
}

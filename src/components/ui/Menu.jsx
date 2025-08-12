import React, { useState, useEffect } from "react";
import HoverSwapText from "../ui/HoverSwapText2";

export default function Menu({ className = "" }) {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`px-4 py-2 text-sm rounded group ${className}`}
      >
        <HoverSwapText text="Menu" />
      </button>

      <div
        className={`fixed top-0 left-0 w-full bg-black overflow-hidden transition-[height] duration-500 ease-in-out
          ${open ? "h-screen pointer-events-auto" : "h-0 pointer-events-none"}`}
        style={{ zIndex: 9999 }}
      >
        <button
          onClick={() => setOpen(false)}
          className="text-white absolute top-4 right-6 text-2xl font-bold"
          aria-label="Close menu"
        >
          &times;
        </button>

        {/* Your menu content here */}
      </div>
    </>
  );
}

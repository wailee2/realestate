import React, { useState, useEffect } from "react";
import HoverSwapText from "../ui/HoverSwapText2";

export default function Menu({ className = "" }) {
  const [open, setOpen] = useState(false);
  const [transitionDuration, setTransitionDuration] = useState("500ms");

  useEffect(() => {
    if (open) {
      // Opening - slower transition
      setTransitionDuration("500ms");
      document.body.style.overflow = "hidden";
    } else {
      // Closing - faster transition
      setTransitionDuration("800ms");
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
        className={`fixed top-0 left-0 w-full bg-black overflow-hidden ease-in-out
          ${open ? "h-screen pointer-events-auto" : "h-0 pointer-events-none"}`}
        style={{
          zIndex: 9999,
          transitionProperty: "height",
          transitionDuration: transitionDuration,
        }}
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

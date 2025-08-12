import React, { useState, useEffect } from "react";

export default function Menu({ className = "" }) {
  const [open, setOpen] = useState(false);
  const [transitionDuration, setTransitionDuration] = useState("500ms");

  useEffect(() => {
    if (open) {
      setTransitionDuration("500ms"); // slower open
      document.body.style.overflow = "hidden";
    } else {
      setTransitionDuration("800ms"); // faster close
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
        Menu
      </button>

      <div
  className={`fixed top-0 left-0 w-full bg-black overflow-hidden transition-all ease-in-out
    ${open ? "max-h-[100vh] pointer-events-auto" : "max-h-0 pointer-events-none"}`}
  style={{
    zIndex: 9999,
    height: "100vh",
    transitionDuration: transitionDuration,
  }}
>

        <div className="p-5 text-white">
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl">KOLAILLORI & CO</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white text-sm font-semibold"
              aria-label="Close menu"
            >
              CLOSE
            </button>
          </div>
          <ul className="space-y-3 mt-5 text-4xl font-semibold tracking-tight">
            {["Home", "Works", "Studio", "Process", "Gallery"].map((item) => (
              <li key={item} className="cursor-pointer hover:underline">
                {item}
              </li>
            ))}
          </ul>
          <ul className="mt-8 space-y-2">
            {[
              { text: "Instagram", href: "https://instagram.com/YOUR_USERNAME" },
              { text: "Facebook", href: "https://facebook.com/YOUR_USERNAME" },
            ].map(({ text, href }) => (
              <li key={text}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-2 text-sm">
            <li>
              <a href="/privacy" className="underline text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="underline text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

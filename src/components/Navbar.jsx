import React, { useEffect, useState } from "react";
import Contactbut from '../components/ui/Contactbut';

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const about = document.getElementById("about");
      if (!about) return;

      const top = about.getBoundingClientRect().top;

      if (top <= 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0  z-20 transition-transform duration-500 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
      style={{ width: "auto" }}
    >
      <div className="flex items-center gap-4 px-6 py-4">
        <div className="flex justify-center uppercase">
            <Contactbut
                variant="button"
                colorClass="bg-black px-6 pt-2.5 pb-[5px] uppercase text-white font-medium rounded-4xl text-sm group hover:bg-red-700 transition cursor-pointer"
                label="get in touch "
            />
        </div>

        <button
          aria-label="Menu"
          className={`p-2 rounded border bg-red-700 border-gray-400 hover:bg-gray-100 transition
            `}
        >
          Menu
        </button>
      </div>
    </nav>
  );
}

import React, { useEffect, useState } from "react";
import Contactbut from './ui/ContactButton';
import Menu from '../components/ui/Menu';

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
      className={`fixed top-0 right-0 w-full z-20 transition-transform duration-500 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
      // Remove inline style here
    >
      <div className="flex items-center gap-4 px-6 py-4 justify-end">
        <Contactbut
          variant="button"
          colorClass="bg-black px-6 pt-2.5 pb-[5px] uppercase text-white font-medium rounded-4xl text-sm group hover:bg-red-700 transition cursor-pointer"
          label="get in touch "
        />

        <Menu className="text-black bg-[#f2f0eb] rounded-full uppercase font-semibold cursor-pointer tracking-wide pt-[10px]" />
      </div>
    </nav>
  );
}

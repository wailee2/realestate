import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Contactbut from '../components/ui/Contactbut';
import HoverSwapText2 from "./ui/HoverSwapText2";
import Menu from '../components/ui/Menu';

import { Link } from "react-router-dom";

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
        className={`fixed top-0 left-0 right-0 text-white z-40 transition-transform duration-500 ease-in-out
          ${headerHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className=" px-6 py-4 flex items-center justify-between uppercase">
            <Link
                to="/"
                className="font-bold ">
                <span className="text-[22px] md:text-[30px] lg:text-[40px]">Kola Illori & Co</span>
            </Link>
            <div></div>
            <ul className="hidden md:flex gap-8 uppercase font-semibold text-sm ">
                <li>
                    <HoverSwapText2
                    text="Services"
                    href="#services"
                    className="cursor-pointer"
                    />
                </li>
                <li>
                    <HoverSwapText2
                    text="about"
                    href="#about"
                    className="cursor-pointer"
                    />
                </li>
                <li>
                    <HoverSwapText2
                    text="Process"
                    href="#process"
                    className="cursor-pointer"
                    />
                </li>
                <li>
                    <HoverSwapText2
                    text="portfolio"
                    href="#portfolio"
                    className="cursor-pointer"
                    />
                </li>
            </ul>
                
            <div className="flex items-center">
                <div className="hidden md:block">
                    <Contactbut
                        variant="button"
                        colorClass="bg-black px-6 pt-2.5 pb-[5px] uppercase text-white font-medium rounded-4xl text-sm group hover:bg-red-700 transition cursor-pointer"
                        label="get in touch "
                    />
                </div>
                <div className="md:hidden block">
                    <Menu className="text-white bg-transparent uppercase font-semibold cursor-pointer tracking-wide" />

                </div>
            </div>
        </div>
      </header>

      {/* Navbar with Get in Touch and Menu buttons */}
      <Navbar />
    </>
  );
}

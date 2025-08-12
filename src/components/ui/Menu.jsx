import React, { useState, useEffect } from "react";
import HoverSwapText2 from './HoverSwapText2';
import AnimatedUnderlineText from './AnimatedUnderlineText';
import HoverUnderline from "./HoverUnderline";
import AnimatedHoverSwapText from "./AnimatedHoverSwapText";

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

        <div
            className="px-6 pt-3 pb-5 h-screen  font-semibold flex flex-col justify-between text-white">
            <div className="flex justify-between items-center ">
                <span className="font-bold text-[24px] md:text-[40px] lg:text-[45px] xl:text-[54px]">KOLAILLORI & CO</span>
                <button
                onClick={() => setOpen(false)}
                className="text-white text-sm font-semibold"
                aria-label="Close menu"
                >
                <AnimatedHoverSwapText
                    text="CLOSE"
                    className="cursor-pointer"
                />
                </button>
            </div>
            <ul
                className=" mt-2.5 font-semibold text-4xl md:text-5xl  xl:text-[58px] tracking-tighter uppercase">
                <li>
                    <AnimatedHoverSwapText
                    text="Home"
                    href="/"
                    className="cursor-pointer"
                    />
                </li>
                <li>
                    <AnimatedHoverSwapText
                    text="Works"
                    href="/works"
                    className="cursor-pointer"
                    />
                </li>
                <li>
                    <AnimatedHoverSwapText
                    text="Studio"
                    href="/studio"
                    className="cursor-pointer"
                    />
                </li>
                <li>
                    <AnimatedHoverSwapText
                    text="Process"
                    href="/process"
                    className="cursor-pointer"
                    />
                </li>
                <li>
                    <AnimatedHoverSwapText
                    text="Gallery"
                    href="/gallery"
                    className="cursor-pointer"
                    />
                </li>
            </ul>
            <ul className="text-white text-sm uppercase">
                <li>
                    <AnimatedUnderlineText
                        text="Instagram"
                        href="https://instagram.com/YOUR_USERNAME"
                        className=" cursor-pointer"
                    />
                </li>
                <li>
                    <AnimatedUnderlineText
                        text="Facebook"
                        href="https://facebook.com/YOUR_USERNAME"
                        className="cursor-pointer"
                    />
                </li>
            </ul>
            <ul className="uppercase text-sm">
                <li>
                <AnimatedUnderlineText
                    text="Privacy Policy"
                    to="/privacy"
                    className=""
                />
                </li>

                <li>
                <AnimatedUnderlineText
                    text="Terms of Service"
                    to="/terms"
                    className=""
                />
                </li>
            </ul>
        </div>
      </div>
    </>
  );
}

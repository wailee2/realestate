import React, { useEffect, useRef } from "react";

export default function AnimatedUnderlineText({
  text,
  href,
  className = "",
  stagger = 0.04,
  duration = 0.5,
}) {
  const wrapperRef = useRef(null);
  const lettersRef = useRef([]);
  const STYLE_ID = "animated-underline-text-styles";
  const chars = Array.from(text || "");

  useEffect(() => {
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.innerHTML = `
        @keyframes aut-fadeUp {
          0% { opacity: 0; transform: translateY(6px); }
          60% { opacity: 1; transform: translateY(-2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .aut-letter {
          display: inline-block;
          white-space: pre;
          opacity: 0;
          transform: translateY(6px);
          will-change: transform, opacity;
        }
        .underline-animate {
          position: relative;
          display: inline-block;
        }
        .underline-animate::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 2px;
          width: 0%;
          background: currentColor;
          transition: width 0.4s ease;
        }
        .underline-animate:hover::after {
          width: 100%;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const letters = lettersRef.current.filter(Boolean);
            letters.forEach((el, i) => {
              el.style.animation = `aut-fadeUp ${duration}s cubic-bezier(.2,.9,.2,1) ${
                i * stagger
              }s both`;
            });
          } else {
            // Reset letters so animation can replay when it comes back
            lettersRef.current.forEach((el) => {
              if (el) {
                el.style.animation = "none";
                void el.offsetWidth; // force reflow
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [stagger, duration]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={wrapperRef}
      className={`underline-animate ${className}`}
    >
      {chars.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          className="aut-letter"
          ref={(el) => (lettersRef.current[i] = el)}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </a>
  );
}

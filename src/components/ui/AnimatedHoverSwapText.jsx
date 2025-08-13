import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Add this

export default function AnimatedHoverSwapText({
  text,
  href,
  to, // NEW: for React Router
  className = "",
  useGsap = false,
  loop = false,
  stagger = 0.04,
  duration = 0.5,
  fadeOut = false,
  outDelay = 0.8,
}) {
  const wrapperRef = useRef(null);
  const lettersRef = useRef([]);
  const gsapRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const STYLE_ID = "animated-hover-swap-text-styles";
  const chars = Array.from(text || "");

  /** Inject styles once */
  useEffect(() => {
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.innerHTML = `
        @keyframes ahst-fadeUp {
          0% { opacity: 0; transform: translateY(6px); }
          60% { opacity: 1; transform: translateY(-2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes ahst-fadeOut {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-6px); }
        }
        .ahst-letter {
          display: inline-block;
          white-space: pre;
          opacity: 0;
          transform: translateY(6px);
          will-change: transform, opacity;
          line-height: 1em;
        }
        .ahst-wrapper-fadeout {
          animation: ahst-fadeOut 0.6s ease forwards;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  /** Preload GSAP if needed */
  useEffect(() => {
    if (useGsap && !gsapRef.current) {
      import("gsap")
        .then((mod) => {
          gsapRef.current = mod.gsap;
        })
        .catch((e) => {
          console.warn("GSAP import failed:", e);
        });
    }
  }, [useGsap]);

  /** Observe visibility */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            lettersRef.current.forEach((el) => {
              if (el) {
                el.style.animation = "none";
                void el.offsetWidth;
                el.style.animation = "";
              }
            });
            wrapperRef.current?.classList.remove("ahst-wrapper-fadeout");
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  /** Animate when visible */
  useEffect(() => {
    if (!isVisible) return;
    const letters = lettersRef.current.filter(Boolean);

    if (useGsap && gsapRef.current) {
      const gsap = gsapRef.current;
      const tl = gsap.timeline({ repeat: loop ? -1 : 0 });
      tl.fromTo(
        letters,
        { y: 8, opacity: 0 },
        { y: 0, opacity: 1, duration, ease: "power2.out", stagger }
      );
      if (fadeOut) {
        const fadeDelay = Math.max(chars.length * stagger + duration, duration) + outDelay;
        tl.to(wrapperRef.current, {
          opacity: 0,
          y: -6,
          duration: 0.6,
          delay: fadeDelay,
        });
      }
    } else {
      letters.forEach((el, i) => {
        const delay = i * stagger;
        el.style.animation = `ahst-fadeUp ${duration}s cubic-bezier(.2,.9,.2,1) ${delay}s both`;
      });

      if (fadeOut) {
        const totalTime = Math.max(chars.length * stagger + duration, duration) + outDelay;
        const t = setTimeout(() => {
          wrapperRef.current?.classList.add("ahst-wrapper-fadeout");
        }, totalTime * 1000);
        return () => clearTimeout(t);
      }
    }
  }, [isVisible, useGsap, loop, stagger, duration, fadeOut, outDelay, chars.length]);

  /** Inner content */
  const Inner = () => (
    <>
      <span
        className="block relative h-[1em] leading-none transition-transform duration-300 ease-out group-hover:-translate-y-full"
        style={{ display: "inline-flex" }}
      >
        {chars.map((ch, i) => (
          <span
            key={`letter-${i}`}
            className="ahst-letter"
            ref={(el) => {
              if (el) lettersRef.current[i] = el;
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>

      <span
        className="block absolute top-full left-0 h-[1em] leading-none transition-transform duration-300 ease-out group-hover:-translate-y-full"
        style={{ whiteSpace: "nowrap" }}
      >
        {text}
      </span>
    </>
  );

  const baseClasses = `group relative inline-block overflow-hidden ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses} ref={wrapperRef}>
        <Inner />
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} ref={wrapperRef}>
        <Inner />
      </a>
    );
  }

  return (
    <span className={baseClasses} ref={wrapperRef}>
      <Inner />
    </span>
  );
}

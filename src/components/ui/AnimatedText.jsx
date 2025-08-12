import React, { useEffect, useRef, useState } from "react";

export default function AnimatedText({
  text,
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
  const [isVisible, setIsVisible] = useState(false);
  const STYLE_ID = "animated-text-styles";
  const chars = Array.from(text || "");

  useEffect(() => {
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.innerHTML = `
        @keyframes at-fadeUp {
          0% { opacity: 0; transform: translateY(6px); }
          60% { opacity: 1; transform: translateY(-2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes at-fadeOut {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-6px); }
        }
        .at-letter {
          display: inline-block;
          white-space: pre;
          opacity: 0;
          transform: translateY(6px);
          will-change: transform, opacity;
        }
        .at-wrapper-fadeout {
          animation: at-fadeOut 0.6s ease forwards;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (useGsap) {
      (async () => {
        try {
          const { gsap } = await import("gsap");
          const letters = lettersRef.current.filter(Boolean);
          const tl = gsap.timeline({ repeat: loop ? -1 : 0 });
          tl.fromTo(
            letters,
            { y: 8, opacity: 0 },
            { y: 0, opacity: 1, duration, ease: "power2.out", stagger }
          );
          if (fadeOut) {
            tl.to(wrapperRef.current, { opacity: 0, y: -6, duration: 0.6, delay: outDelay });
          }
        } catch (e) {
          console.warn("AnimatedText: GSAP requested but not available.", e);
        }
      })();
    } else {
      const letters = lettersRef.current.filter(Boolean);
      letters.forEach((el, i) => {
        const d = i * stagger;
        el.style.animation = `at-fadeUp ${duration}s cubic-bezier(.2,.9,.2,1) ${d}s both`;
      });

      if (fadeOut) {
        const totalTime = chars.length * stagger + duration + outDelay;
        const t = setTimeout(() => {
          wrapperRef.current?.classList.add("at-wrapper-fadeout");
        }, totalTime * 1000);
        return () => clearTimeout(t);
      }
    }
  }, [isVisible, useGsap, loop, stagger, duration, fadeOut, outDelay, chars.length]);

  return (
    <span ref={wrapperRef} className={`inline-block overflow-hidden leading-tight ${className}`} aria-label={text}>
      {chars.map((ch, i) => (
        <span key={`${ch}-${i}`} className="at-letter" ref={(el) => (lettersRef.current[i] = el)}>
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}


/**
 * usage
 <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
     */ {/* Default CSS-only stagger */}
     /** 
      <AnimatedText 
        text="Welcome to My Website" 
        className="text-4xl font-bold" 
      />*/

      {/* With fade out */}
      /** 
      <AnimatedText 
        text="Fades away after animation" 
        className="text-xl mt-4" 
        fadeOut={true}
        outDelay={1} 
      />*/
 
      {/* Using GSAP */}
      /**<AnimatedText 
        text="Smooth GSAP Timeline" 
        className="text-2xl mt-8 text-green-400" 
        useGsap={true} 
        stagger={0.08}
        duration={0.5}
      />
    </div>*/

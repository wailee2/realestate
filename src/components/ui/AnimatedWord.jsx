import React, { useEffect, useRef, useState } from "react";

export default function AnimatedWord({
  text,
  className = "",
  useGsap = false,
  loop = false,
  stagger = 0.1,
  duration = 0.5,
  fadeOut = false,
  outDelay = 0.8,
}) {
  const wrapperRef = useRef(null);
  const wordsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const STYLE_ID = "animated-word-styles";
  const words = text.split(" ");

  useEffect(() => {
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.innerHTML = `
        @keyframes aw-fadeUp {
          0% { opacity: 0; transform: translateY(6px); }
          60% { opacity: 1; transform: translateY(-2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes aw-fadeOut {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-6px); }
        }
        .aw-word {
          display: inline-block;
          white-space: nowrap;
          opacity: 0;
          transform: translateY(6px);
          will-change: transform, opacity;
        }
        .aw-wrapper-fadeout {
          animation: aw-fadeOut 0.6s ease forwards;
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
          const tl = gsap.timeline({ repeat: loop ? -1 : 0 });
          tl.fromTo(
            wordsRef.current.filter(Boolean),
            { y: 8, opacity: 0 },
            { y: 0, opacity: 1, duration, ease: "power2.out", stagger }
          );
          if (fadeOut) {
            tl.to(wrapperRef.current, { opacity: 0, y: -6, duration: 0.6, delay: outDelay });
          }
        } catch (e) {
          console.warn("AnimatedWord: GSAP requested but not available.", e);
        }
      })();
    } else {
      wordsRef.current.filter(Boolean).forEach((el, i) => {
        const d = i * stagger;
        el.style.animation = `aw-fadeUp ${duration}s cubic-bezier(.2,.9,.2,1) ${d}s both`;
      });

      if (fadeOut) {
        const totalTime = words.length * stagger + duration + outDelay;
        const t = setTimeout(() => {
          wrapperRef.current?.classList.add("aw-wrapper-fadeout");
        }, totalTime * 1000);
        return () => clearTimeout(t);
      }
    }
  }, [isVisible, useGsap, loop, stagger, duration, fadeOut, outDelay, words.length]);

  return (
    <span ref={wrapperRef} className={`inline-block overflow-hidden leading-tight ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="aw-word" ref={(el) => (wordsRef.current[i] = el)}>
          {word}
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}

/**
 * usage
 * <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-900 text-white p-8">*/
       {/* Basic CSS animation */}
      /* <AnimatedWord text="Welcome to My Website" className="text-4xl font-bold" />*/
 
       {/* Faster animation */}
       /*<AnimatedWord
         text="This animation is faster"
         className="text-2xl text-green-400"
         duration={0.3}
         stagger={0.05}
       />*/
 
       {/* With fade out */}
      /* <AnimatedWord
         text="This will fade out after appearing"
         className="text-xl"
         fadeOut={true}
         outDelay={1}
       />*/
 
       {/* Using GSAP for smoother animation */}
      /* <AnimatedWord
         text="Smooth GSAP animation here"
         className="text-3xl text-blue-400"
         useGsap={true}
         stagger={0.08}
         duration={0.5}
       />
     </div>*/

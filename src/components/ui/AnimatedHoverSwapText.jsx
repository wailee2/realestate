import React, { useEffect, useRef, useState } from "react";

export default function AnimatedHoverSwapText({
  text,
  href,
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
  const STYLE_ID = "animated-hover-swap-text-styles";
  const chars = Array.from(text || "");

  // Inject styles once
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
        }
        .ahst-wrapper-fadeout {
          animation: ahst-fadeOut 0.6s ease forwards;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Replay animation whenever in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Reset so it can animate again
            lettersRef.current.forEach((el) => {
              if (el) {
                el.style.animation = "none";
                void el.offsetWidth;
              }
            });
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  // Run animation when visible
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
            tl.to(wrapperRef.current, {
              opacity: 0,
              y: -6,
              duration: 0.6,
              delay: outDelay,
            });
          }
        } catch (e) {
          console.warn("AnimatedHoverSwapText2: GSAP requested but not available.", e);
        }
      })();
    } else {
      const letters = lettersRef.current.filter(Boolean);
      letters.forEach((el, i) => {
        const delay = i * stagger;
        el.style.animation = `ahst-fadeUp ${duration}s cubic-bezier(.2,.9,.2,1) ${delay}s both`;
      });

      if (fadeOut) {
        const totalTime = chars.length * stagger + duration + outDelay;
        const t = setTimeout(() => {
          wrapperRef.current?.classList.add("ahst-wrapper-fadeout");
        }, totalTime * 1000);
        return () => clearTimeout(t);
      }
    }
  }, [isVisible, useGsap, loop, stagger, duration, fadeOut, outDelay, chars.length]);

  // Inner structure for hover swap
  const Inner = () => (
    <>
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {chars.map((ch, i) => (
          <span
            key={`${ch}-${i}-top`}
            className="ahst-letter"
            ref={(el) => (lettersRef.current[i] = el)}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>
      <span className="block absolute top-full left-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {text}
      </span>
    </>
  );

  const baseClasses = `group relative inline-block overflow-hidden ${className}`;

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

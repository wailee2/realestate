// src/hooks/useSplitTextReveal.js
import { useEffect } from "react";
import gsap from "gsap";

export default function useSplitTextReveal(selector) {
  useEffect(() => {
    const element = document.querySelector(selector);
    if (!element) return;

    // Split the text into spans
    const text = element.textContent;
    element.textContent = "";
    const chars = text.split("").map(char => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      element.appendChild(span);
      return span;
    });

    // Animate each character in sequence
    gsap.fromTo(
      chars,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.03,
        duration: 0.6,
        ease: "power2.out"
      }
    );

    // Cleanup
    return () => {
      element.innerHTML = text; // reset to original
    };
  }, [selector]);
}

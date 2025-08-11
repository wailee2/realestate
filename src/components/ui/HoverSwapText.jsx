import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HoverSwapText({ text, href = "#", className = "" }) {
  const wrapper = useRef(null);
  const topText = useRef(null);
  const bottomText = useRef(null);

  useEffect(() => {
    if (!wrapper.current || !topText.current || !bottomText.current) return;

    // Clone top text into bottom text
    bottomText.current.textContent = topText.current.textContent;

    // GSAP initial setup
    gsap.set(topText.current, { y: 0 });
    gsap.set(bottomText.current, { y: "100%" });

    const onEnter = () => {
      gsap.to(topText.current, { y: "-100%", duration: 0.2, ease: "expo.out" });
      gsap.to(bottomText.current, { y: "0%", duration: 0.2, ease: "expo.out"});
    };

    const onLeave = () => {
      gsap.to(topText.current, { y: "0%", duration: 0.2, ease: "expo.in" });
      gsap.to(bottomText.current, { y: "100%", duration: 0.2, ease: "expo.in" });
    };

    const el = wrapper.current;
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      if (!el) return;
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a
      ref={wrapper}
      href={href}
      className={`relative inline-block overflow-hidden h-[1.2em] ${className}`}
    >
      <span ref={topText} className="block">
        {text}
      </span>
      <span ref={bottomText} className="block absolute top-0 left-0" />
    </a>
  );
}


/*usage: <HoverSwapText text="Home" href="/" className="text-xl font-bold text-white" />
      <HoverSwapText text="Gallery" href="/gallery" className="text-xl font-bold text-white" />
      <HoverSwapText text="Contact" href="/contact" className="text-xl font-bold text-white" /></div>*/
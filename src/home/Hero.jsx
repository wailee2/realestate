import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function Hero() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const splitHeading = new SplitType(".split-heading", { types: "words" });

    gsap.from(splitHeading.words, {
      y: "100%",
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2
    });

    // Scroll handler: map scrollY / heroHeight -> overlay opacity (0 -> maxDim)
    const maxDim = 0.92; // tweak this (0.0 - 1.0). 0.72 = fairly dark when fully dimmed.
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = window.innerHeight; // using viewport height (hero is min-h-screen)
      const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1); // clamp 0..1
      const targetOpacity = progress * maxDim;

      // Smoothly animate overlay opacity; overwrite so it won't queue up
      if (overlayRef.current) {
        gsap.to(overlayRef.current, { opacity: targetOpacity, duration: 0.18, overwrite: true });
      }
    };

    // initial call in case page not at top on mount
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      // cleanup
      window.removeEventListener("scroll", onScroll);
      gsap.killTweensOf(overlayRef.current);
      splitHeading.revert?.();
    };
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden text-white bg-[url('/herobg.jpg')] bg-fixed z-5 bg-cover bg-center"
    >
      {/* DIM OVERLAY (starts transparent, sits above bg but below text) */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none z-10 bg-black"
        style={{ opacity: 0 }}
      />

      {/* Pinned hero text — ensure this is above the overlay (higher z) */}
      <div className="fixed w-full bottom-0 block sm:flex justify-between items-end py-5 space-y-3.5 sm:space-y-0 px-5 z-20">
        <div className="sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[35rem]">
          <h1 className="split-heading text-[20px] md:text-[27px] lg:text-[30px] xl:text-[33px] tracking-tighter font-medium leading-tight">
            The Kola Illori & Co approach is defined by precision, integrity and timeless value, combining solid expertise with balanced market insight.
          </h1>
        </div>

        <div>
          <span className="font-medium tracking-tighter uppercase text-[14px] animate-bounce">
            Scroll Down
          </span>
        </div>
      </div>
    </section>
  );
}


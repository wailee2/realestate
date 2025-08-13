import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollWorks() {
  useEffect(() => {
    const panels = gsap.utils.toArray(".work-panel");
    const worksInner = document.querySelector(".works-inner");

    const scrollWidth = worksInner.scrollWidth - window.innerWidth;

    const horizontalAnim = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".about",
        pin: true,
        scrub: 0.8,
        start: "top top",
        end: () => "+=" + scrollWidth,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = Math.round(self.progress * 100);
          const counter = document.querySelector(".progress-counter");
          if (counter) {
            counter.textContent = progress.toString().padStart(2, "0") + "%";
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Progress Counter */}
      <div className="progress-counter fixed top-5 right-5 text-2xl font-bold z-[999]"></div>

      {/* Horizontal Works Section */}
      <section className="about relative h-screen flex items-center">
        <div className="works-inner flex h-full">
          <div className="work-panel min-w-screen h-full flex items-center justify-center text-5xl font-bold bg-red-500">
            Project 1
          </div>
          <div className="work-panel min-w-screen h-full flex items-center justify-center text-5xl font-bold bg-blue-500">
            Project 2
          </div>
          <div className="work-panel min-w-screen h-full flex items-center justify-center text-5xl font-bold bg-green-500">
            Project 3
          </div>
          <div className="work-panel min-w-screen h-full flex items-center justify-center text-5xl font-bold bg-purple-500">
            Project 4
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedWorks() {
    const sectionRef = useRef(null);

    useEffect(() => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".featured-card");

        cards.forEach((card) => {
          const imgInner = card.querySelector(".img-inner");
          const texts = card.querySelectorAll(".featured-text");

          gsap.fromTo(
            imgInner,
            { z: 0, scale: 1, transformOrigin: "center center" },
            {
              z: -140,
              scale: 1.05,
              duration: 1,
              ease: "power2.out",
              overwrite: true,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play reverse none reverse",
              },
            }
          );

          gsap.from(texts, {
            y: 20,
            opacity: 0,
            duration: 0.75,
            ease: "power2.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              toggleActions: "play none",
            },
          });
        });
      }, sectionRef);

      return () => ctx.revert();
    }, []);

  return (
    <section
      ref={sectionRef}
      className="px-3 md:px-4 mb-15 lg:px-5 xl:px-[1.8%] z-10 pt-8 overflow-x-hidden"
    >
      <div>
        <div className="md:max-w-[70%] lg:max-w-[60%] xl:max-w-[70%]">
          <h2 className="uppercase text-[50px]/12 md:text-[73px]/20 lg:text-[89px]/20 xl:text-[120px]/28 font-medium">
            FEATURED
          </h2>
          <h2 className="ml-0 md:ml-[20%] xl:ml-[23%] text-[50px]/11 uppercase md:text-[73px]/20 lg:text-[89px]/20 xl:text-[120px]/28 font-medium">
            works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-15 mt-10 overflow-hidden">
          {works.map((work, index) => {
            // classes and styles can come from data
            const viewportClass = work.viewportClass || "";
            const imgClass = work.imgClass || "w-full h-64 object-cover";
            const viewportStyle = work.viewportStyle || { perspectsive: 1200 };
            const divClass = work.divClass || "";
            const div2Class = work.div2Class || "";

            return (
              <div key={index} className="featured-card">
                {/* viewport accepts custom classes or inline styles */}
                <div
                  className={`img-viewport w-full overflow-hidden  relative ${viewportClass}`}
                  style={viewportStyle}
                >
                  <div
                    className={`img-inner  will-change-transform overflow-hidden flex justify-between ${divClass}`}
                  >
                    <div className=""></div>
                    <img
                      src={work.img}
                      alt={work.title}
                      className={`${imgClass} `}
                    />
                  </div>
                </div>

                <div
                  className={` ${div2Class}`}
                >
                  <div></div>
                  <div>
                    <div className="flex gap-4 md:gap-5 items-center">
                      <span className="featured-text text-sm  xl:text-xl font-semibold">
                        {work.no}
                      </span>
                      <h3 className="featured-text text-sm uppercase  xl:text-xl font-semibold">
                        {work.title}
                      </h3>
                    </div>
                    <p className="featured-text text-sm xl:text-xl text-gray-600">{work.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button className="px-4 py-3 mt-13 bg-black text-white rounded-4xl">View All Works</button>
        </div>
      </div>
    </section>
  );
}

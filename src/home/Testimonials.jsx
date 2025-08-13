import { useState, useEffect } from "react";
import { testimonials } from "../data/data";


export default function Testimonial() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 15000000); // 15 seconds
        return () => clearInterval(timer);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    return (
      <section
        className=" relative w-full overflow-hidden bg-gray-50 mb-17 px-3 md:px-4 lg:px-5 xl:px-[1.8%]">
        <div className="mb-3">
          <span className="uppercase font-semibold">(hear from our clients)</span>
        </div>
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-none w-full flex gap-x-[17%] gap-y-4 flex-col md:flex-row"
              style={{ minWidth: "100%" }}
            >
              {/* First div */}
              <div className="flex flex-col  w-full text-sm md:w-1/2">
                <div className="w-full">
                  <img
                    src={t.outsideImage}
                    alt="Outside view"
                    className="w-full h-s48 object-cover mb-4"
                  />
                </div>
                <p className="text-[16px] lg:text-xl mb-4">{t.description}</p>
                <div>
                  <p className="font-semibold text-sm uppercase">{t.ownerName}</p>
                  <p className="font-semibold text-sm uppercase">HOMEOWNER of {t.houseName}</p>
                </div>
              </div>

              {/* Second div wrapped in link */}
              <a
                href={t.houseLink}
                className="w-full max-h-[110vh] md:w-1/2 relative overflow-hidden group block"
              >
                <div className="relative ">
                  <img
                    src={t.secondImage}
                    alt="Second view"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[4px]"
                  />
                  <img
                    src={t.hoverImage}
                    alt="Hover view"
                    className="absolute inset-0 w-full h-full object-cover scale-0 opacity-0 transition-all duration-500 group-hover:scale-[60%] group-hover:opacity-100"
                  />
                </div>
              </a>
            </div>
          ))}
          </div>
        </div>

        {/* Prev/Next buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-50 -transslate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-50 -trmanslate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          ▶
        </button>

        {/* Pagination dots 
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
            current === idx ? "bg-red-700" : "bg-gray-300"
            }`}
          />
          ))} 
        </div>*/}
      </section>
  );
}

import testimonialimg from "../assets/featured/featured01.jpg";
import testimonialimg2 from "../assets/featured/featured03.jpg";

{/**
export default function Testimonails() {


  return (
    <section
        className="px-3 md:px-4 mb-15 lg:px-5 xl:px-[1.8%] z-10 pt-10 overflow-x-hidden"
    >
      <div>
        <div className="block md:flex md:gap-10 lg:gap-25 xl:gap-30 overflow-hidden">
            <div className="flex flex-col gap-y-3 flex-1/8">
                <span className="uppercase font-medium">(Hear from our clients)</span>
                <div
                    className="w-full overflow-hidden">
                    <img src={testimonialimg} alt="" className="w-full h-full object-cover"/>
                </div>
                <div>
                    <div>
                        <span>(01)</span>
                        <div className="capitalise">Sketch Design</div>
                    </div>
                </div>

            </div>
            <div className="flex-1/2">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-semibold md:max-w-[90%] lg:max-w-[87%] xl:max-w-[75%] tracking-tight space-y-17">
                    <div>
                        Our approach at OH Architecture is designed to make your journey from concept to completion as smooth and enjoyable as possible.
                    </div>
                    <div>
                        With our 6-stage process, we prioritise clarity, collaboration, and your unique vision. At every step, we'll keep you informed, inspired, and involved.
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </section>
  );
} */}

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    description:
      "Buying this home was the best decision I’ve made. The process was seamless and the property exceeded my expectations.",
    ownerImage: testimonialimg,
    outsideImage: testimonialimg2,
    houseName: "Sunset Villa",
    houseLink: "/product/sunset-villa",
    secondImage: testimonialimg,
    hoverImage: testimonialimg2,
  },
  {
    id: 2,
    description:
      "I’m in love with my new home! The neighborhood is peaceful and the architecture is stunning.",
    ownerImage: "/images/owner2.jpg",
    outsideImage: "/images/outside2.jpg",
    houseName: "Palm Grove Estate",
    houseLink: "/product/palm-grove",
    secondImage: "/images/inside2.jpg",
    hoverImage: "/images/inside2-hover.jpg",
  },
  {
    id: 3,
    description:
      "From start to finish, the experience was exceptional. The team was incredibly supportive.",
    ownerImage: "/images/owner3.jpg",
    outsideImage: "/images/outside3.jpg",
    houseName: "Lakeside Haven",
    houseLink: "/product/lakeside-haven",
    secondImage: "/images/inside3.jpg",
    hoverImage: "/images/inside3-hover.jpg",
  },
  {
    id: 4,
    description:
      "My dream home finally came true. The craftsmanship and design are top-notch.",
    ownerImage: "/images/owner4.jpg",
    outsideImage: "/images/outside4.jpg",
    houseName: "Mountain View Retreat",
    houseLink: "/product/mountain-view",
    secondImage: "/images/inside4.jpg",
    hoverImage: "/images/inside4-hover.jpg",
  },
  {
    id: 5,
    description:
      "A beautiful home in a perfect location. I couldn’t have asked for a better investment.",
    ownerImage: "/images/owner5.jpg",
    outsideImage: "/images/outside5.jpg",
    houseName: "Ocean Breeze Villa",
    houseLink: "/product/ocean-breeze",
    secondImage: "/images/inside5.jpg",
    hoverImage: "/images/inside5-hover.jpg",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 15000); // 15 seconds
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-50 p-4 sm:p-6">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex-none w-full flex flex-col md:flex-row gap-6 bg-white shadow-md rounded-xl p-4"
            style={{ minWidth: "100%" }}
          >
            {/* First div */}
            <div className="flex flex-col justify-between w-full md:w-1/2">
              <p className="text-gray-700 mb-4">{t.description}</p>
              <img
                src={t.outsideImage}
                alt="Outside view"
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <div className="flex items-center gap-3">
                <img
                  src={t.ownerImage}
                  alt="Owner"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.houseName}</p>
                  <a
                    href={t.houseLink}
                    className="text-green-600 underline text-sm"
                  >
                    View House
                  </a>
                </div>
              </div>
            </div>

            {/* Second div with hover effect */}
            <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg group">
              <img
                src={t.secondImage}
                alt="Second view"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
              />
              <img
                src={t.hoverImage}
                alt="Hover view"
                className="absolute inset-0 w-full h-full object-cover scale-0 opacity-0 transition-all duration-500 group-hover:scale-90 group-hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        ▶
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-green-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

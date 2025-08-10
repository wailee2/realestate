import testimonialimg from "../assets/featured/featured01.jpg";
import testimonialimg2 from "../assets/featured/featured03.jpg";

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    description:
      '"Buying this home was the best decision I’ve made. The process was seamless and the property exceeded my expectations."',
    ownerName: "John Doe",
    outsideImage: testimonialimg,
    houseName: "Sunset Villa",
    houseLink: "/product/sunset-villa",
    secondImage: testimonialimg2,
    hoverImage: testimonialimg,
  },
  {
    id: 2,
    description:
      "I’m in love with my new home! The neighborhood is peaceful and the architecture is stunning.",
    ownerName: "Jane Smith",
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
    ownerName: "Michael Johnson",
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
    ownerName: "Sarah Lee",
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
    ownerName: "David Kim",
    outsideImage: "/images/outside5.jpg",
    houseName: "Ocean Breeze Villa",
    houseLink: "/product/ocean-breeze",
    secondImage: "/images/inside5.jpg",
    hoverImage: "/images/inside5-hover.jpg",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 1500000); // 15 seconds
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-50 p-4 sm:p-6">
      <div className="mb-3">
        <span className="uppercase font-medium">(hear from our clients)</span>
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
              <div className="flex flex-col w-full text-sm md:w-1/2">
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
                className="w-full md:w-1/2 relative overflow-hidden group block"
              >
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
    </section>
  );
}

// Feature Works
import img1 from "../assets/featured/featured01.jpg";
import img2 from "../assets/featured/featured02.jpg";
import img3 from "../assets/featured/featured03.jpg";
import img4 from "../assets/featured/featured04.jpg";
import img5 from "../assets/featured/featured05.jpg";
import img6 from "../assets/featured/featured06.jpg";


export const works = [
  {
    no: "(01)",
    title: "Modern Villa",
    desc: "Luxury residential project.",
    img: img1,
    viewportClass: " max-h-[120vh]",
    divClass: "flex-col",
    imgClass: "w-[85%] md:w-full",
  },
  {
    no: "(02)",
    title: "Modern House",
    desc: "Modern House.",
    img: img2,
    viewportClass: "",
    div2Class: "flex justify-between",
    divClass: "flex-row",
    imgClass: "w-[80%] md:w-full"
    //viewportStyle: { perspective: 1200, width: "100%", height: "420px" },
    //imgStyle: { height: "400px", objectFit: "cover", transformStyle: "preserve-3d", background: "yellow"  },
  },
  {
    no: "(03)",
    title: "Tall Tower",
    desc: "Vertical office block.",
    viewportClass: "",
    img: img3,
    divClass: "flex-col",
    imgClass: "w-[80%] ",
  },
  {
    no: "(04)",
    title: "Tall Tower",
    desc: "Vertical office block.",
    img: img4,
    div2Class: "md:flex block justify-between",
    divClass: "flex-col ",
    imgClass: "w-[70%] md:w-[100%]"
  },
  {
    no: "(05)",
    title: "Wide Plaza",
    desc: "Public urban space.",
    viewportClass: "",
    img: img5,
    div2Class: " flex md:block justify-between",
    divClass: "flex-row",
    imgClass: "w-[80%] md:w-[100%]",
  },
  {
    no: "(06)",
    title: "Modern Villa",
    desc: "Luxury residential project.",
    img: img6,
    div2Class: "md:flex block justify-between",
    divClass: "flex-col md:flex-row ",
    imgClass: "w-[70%] md:w-[80%]"
  },
];

import testimonialimg01A from "../assets/Testimonial/testi01_A.jpg";
import testimonialimg01B from "../assets/Testimonial/testi01_B.jpg";
import testimonialimg01hover from "../assets/Testimonial/hoverimg01.jpg";


export const testimonials = [
  {
    id: 1,
    description:
      '"Buying this home was the best decision I’ve made. The process was seamless and the property exceeded my expectations."',
    ownerName: "John Doe",
    outsideImage: testimonialimg01A,
    houseName: "Sunset Villa",
    houseLink: "/product/sunset-villa",
    secondImage: testimonialimg01B,
    hoverImage: testimonialimg01hover,
  },
  {
    id: 2,
    description:
      "I’m in love with my new home! The neighborhood is peaceful and the architecture is stunning.",
    ownerName: "Jane Smith",
    outsideImage:  testimonialimg01A,
    houseName: "Palm Grove Estate",
    houseLink: "/product/palm-grove",
    secondImage:  testimonialimg01B,
    hoverImage: testimonialimg01hover,
  },
  {
    id: 3,
    description:
      "From start to finish, the experience was exceptional. The team was incredibly supportive.",
    ownerName: "Michael Johnson",
    outsideImage:  testimonialimg01A,
    houseName: "Lakeside Haven",
    houseLink: "/product/lakeside-haven",
    secondImage:  testimonialimg01B,
    hoverImage:  testimonialimg01hover,
  },
  {
    id: 4,
    description:
      "My dream home finally came true. The craftsmanship and design are top-notch.",
    ownerName: "Sarah Lee",
    outsideImage:  testimonialimg01A,
    houseName: "Mountain View Retreat",
    houseLink: "/product/mountain-view",
    secondImage:  testimonialimg01B,
    hoverImage:  testimonialimg01hover,
  },
  {
    id: 5,
    description:
      "A beautiful home in a perfect location. I couldn’t have asked for a better investment.",
    ownerName: "David Kim",
    outsideImage:  testimonialimg01A,
    houseName: "Ocean Breeze Villa",
    houseLink: "/product/ocean-breeze",
    secondImage:  testimonialimg01B,
    hoverImage:  testimonialimg01hover,
  },
];

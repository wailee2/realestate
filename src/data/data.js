// Feature Works
import img1 from "../assets/featured/featured02.jpg";
import img2 from "../assets/featured/featured01.jpg";
import img3 from "../assets/featured/featured03.jpg";


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
    title: "Tall Tower",
    desc: "Vertical office block.",
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
    title: "Wide Plaza",
    desc: "Public urban space.",
    viewportClass: "",
    img: img3,
    divClass: "flex-col",
    imgClass: "w-[80%] ",
  },
  {
    no: "(04)",
    title: "Wide Plaza",
    desc: "Public urban space.",
    img: img2,
    div2Class: "md:flex block justify-between",
    divClass: "flex-col ",
    imgClass: "w-[70%] md:w-[100%]"
  },
  {
    no: "(05)",
    title: "Wide Plaza",
    desc: "Public urban space.",
    viewportClass: "",
    img: img3,
    div2Class: " flex md:block justify-between",
    divClass: "flex-row",
    imgClass: "w-[80%] md:w-[100%]",
  },
  {
    no: "(06)",
    title: "Wide Plaza",
    desc: "Public urban space.",
    img: img2,
    div2Class: "md:flex block justify-between",
    divClass: "flex-col md:flex-row ",
    imgClass: "w-[70%] md:w-[80%]"
  },
];

import testimonialimg from "../assets/featured/featured01.jpg";
import testimonialimg2 from "../assets/featured/featured03.jpg";
import testimonialimg3 from "../assets/featured/featured02.jpg";

export const testimonials = [
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
    outsideImage: testimonialimg3,
    houseName: "Palm Grove Estate",
    houseLink: "/product/palm-grove",
    secondImage: testimonialimg3,
    hoverImage: "/assets/featured/featured01.jpg",
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

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
    div2Class: "flex",
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
    div2Class: "md:flex block",
    divClass: "flex-col ",
    imgClass: "w-[70%] md:w-[100%]"
  },
  {
    no: "(05)",
    title: "Wide Plaza",
    desc: "Public urban space.",
    viewportClass: "",
    img: img3,
    div2Class: " flex md:block",
    divClass: "flex-row",
    imgClass: "w-[80%] md:w-[100%]",
  },
  {
    no: "(06)",
    title: "Wide Plaza",
    desc: "Public urban space.",
    img: img2,
    div2Class: "md:flex block",
    divClass: "flex-col md:flex-row ",
    imgClass: "w-[70%] md:w-[80%]"
  },
];

import { Link } from "react-router-dom";

export default function HoverUnderline({ text, href = "#", to, className = "" }) {
  const Component = to ? Link : "a"; // Automatically choose Link or a
  const props = to ? { to } : { href };

  return (
    <Component
      {...props}
      className={`group relative inline-block ${className}`}
    >
      <span className="relative z-10">{text}</span>
      <span
        className="
          absolute bottom-0 left-0 w-full h-[2px] bg-current
          transform scale-x-0 origin-left
          transition-transform duration-300 ease-out
          group-hover:scale-x-100
        "
      ></span>
    </Component>
  );
}


import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import HoverSwapText2 from './HoverSwapText2';

export default function Contactbut({ variant = "button", colorClass = "", label }) {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleOpen = () => {
        setVisible(true);
        setTimeout(() => setOpen(true), 10);
    };

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => setVisible(false), 500);
    };

    return (
    <>
      {/* Trigger */}
      <div
        onClick={handleOpen}
        className={
          variant === "link"
            ? `cursor-pointer ${colorClass} text-black`
            : ` ${colorClass}`
        }
      >
        <HoverSwapText2
          text={label || (variant === "link" ? "Contact Us" : "Get Started Now")}
          className={variant === "link" ? "text-black" : "text-white"}
        />
      </div>

      {/* Backdrop */}
{visible && ReactDOM.createPortal(
  <div
    onClick={handleClose}
    className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] transition-opacity duration-500
              ${open ? "opacity-100" : "opacity-0"}`}
  />,
  document.body
)}

{/* Overlay */}
{visible && ReactDOM.createPortal(
  <div
    className={`fixed top-0 right-0 h-full bg-black text-white z-[9999] overflow-y-auto
              transition-all duration-500 ease-in-out
              ${open ? "translate-x-0" : "translate-x-full"}
              md:w-[700px] w-full`}
  >
    <button
      onClick={handleClose}
      className="absolute top-4 right-4 text-3xl hover:text-red-500 transition"
    >
      <IoClose />Close
    </button>

    <div className="p-8 mt-10">
      <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 py-3 rounded font-medium hover:bg-green-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>,
  document.body
)}

    </>
  );
}
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function Contactbut({ variant = "button", label }) {
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
        <div className="relative">
            {/* Trigger */}
            <div
                onClick={handleOpen}
                className={
                    variant === "link"
                        ? "text-green-500 hover:underline cursor-pointer"
                        : "p-3 bg-red-800 text-white font-medium rounded-4xl hover:bg-green-600 transition cursor-pointer"
                }
            >
                {label || (variant === "link" ? "Contact Us" : "Get Started Now")}
            </div>

            {/* Backdrop */}
            {visible && (
                <div
                    onClick={handleClose}
                    className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500
                    ${open ? "opacity-100" : "opacity-0"}`}
                />
            )}

            {/* Overlay */}
            {visible && (
                <div
                    className={`fixed top-0 right-0 h-full bg-black text-white z-50 overflow-y-auto
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
                </div>
            )}
        </div>
    );
}

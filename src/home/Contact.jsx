import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Contact() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    // Prevent page scroll
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
        <section className="relative px-3 mb-9 md:px-4 lg:px-5 xl:px-[1.8%] space-y-7.5 ">
            <div className="">
                <span
                    className="uppercase text-[50px]/12 md:text-[73px]/20 lg:text-[89px]/20 xl:text-[120px]/28 font-medium">
                    FOCUSED ON QUALITY DRIVEN BY CREATIVITY
                </span>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleOpen}
                    className="px-5 py-3 bg-black text-white font-medium rounded-4xl hover:bg-green-600 transition"
                >
                    Contact Us
                </button>
            </div>


        

            {/* Backdrop */}
            {visible && (
                <div
                onClick={handleClose}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500
                    ${open ? "opacity-100" : "opacity-0"}
                `}
                />
            )}

            {/* Overlay */}
            {visible && (
                <div
                className={`fixed top-0 right-0 h-full bg-black text-white z-50 overflow-y-auto
                    transition-all duration-500 ease-in-out
                    ${open ? "translate-x-0" : "translate-x-full"}
                    md:w-[700px] w-full
                `}
                style={{
                    width: open ? undefined : "0px",
                }}
                >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-3xl hover:text-red-500 transition"
                >
                    <IoClose />
                </button>

                {/* Content */}
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

                    {/* Social Links */}
                    <div className="mt-8">
                    <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                    <div className="flex gap-6 text-2xl">
                        <a href="#" className="hover:text-green-400">
                        <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-green-400">
                        <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-green-400">
                        <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-green-400">
                        <FaLinkedin />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            )}
        </section>
    );
}

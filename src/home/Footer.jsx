import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Footer() {

    return (
        <section
            className="border-t-1 border-red-500 relative px-3 mb-9 md:px-4 lg:px-5 xl:px-[1.8%] space-y-7.5 "
        >
            <div className="md:flex">
                <div className=" md:flex flex-row-reverse">
                    <div>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <div>img</div>
                </div>
                <div>acknow</div>
            </div>
        </section>
    );
}

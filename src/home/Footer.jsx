import { useState, useEffect, } from "react";
import Contactbut from '../components/ui/Contactbut';
import HoverSwapText from '../components/ui/HoverSwapText';
import HoverSwapText2 from '../components/ui/HoverSwapText2';
import testimonialimg3 from "../assets/featured/featured02.jpg";
import { Link } from "react-router-dom";



export default function Footer() {
    const [time, setTime] = useState(new Date());
    const [available, setAvailable] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
        const now = new Date();
        setTime(now);

        // Example availability: 9 AM to 6 PM
        const hours = now.getHours();
        setAvailable(hours >= 9 && hours < 18);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="border-t-1 border-red-500 px-3 md:px-4 lg:px-5 xl:px-[1.8%] pt-8 pb-3.5 space-y-7.5 ">
            <div className="md:flex flex-row-reverse justify-between md:gap-[6%] lg:gap-[0]">
                <div className="flex-1 md:flex justify-around">
                    <div className=" ">
                        <span className="uppercase text-sm font-semibold">(Navigation)</span>

                        <ul className="space-y-1.5 capitalize cursor-pointer mt-2.5 font-semibold text-4xl md:text-4xl xl:text-5xl tracking-tighter">
                            <li>Home</li>
                            <li>Works</li>
                            <li>Studio</li>
                            <li>Process</li>
                            <li>Gallery</li>
                            <li className=''><Contactbut variant="link" /></li>
                        </ul>
                    </div>
                    <div>
                        <span className="uppercase text-sm font-semibold">(INFO)</span>
                        <ul className="text-[16px] mt-2.5 ">
                            <li>
                                <span className="font-semibold mr-1">A
                                    <span className="font-normal">:</span>
                                </span>
                                <span>101 Days Rd, Grange QLD 4051</span>
                            </li>
                            <li>
                                <span className="font-semibold mr-1">E
                                    <span className="font-normal">:</span>
                                </span>
                                <span>info@surveyor.com</span>
                            </li>
                            <li>
                                <span className="font-semibold mr-1">P
                                    <span className="font-normal">:</span>
                                </span>
                                <span>0811 968 4024</span>
                            </li>
                            <li>
                                <span className="font-semibold mr-1">H
                                    <span className="font-normal">:</span>
                                </span>
                                <span>Monday to Friday, 8:30am - 5:00pm</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:max-w-[25%] flex-1">
                    <img src={testimonialimg3} alt="" className="w-full" />

                </div>
            </div>
            <div className="flex justify-between items-end flex-wrap text-sm font-bold uppercase">
                <div>
                    <div className="uppercase">© 2025 KolaIllori & Co</div>
                    <div className="flex items-center gap-2 text-sm font-semibold">
                        <span className="">
                            {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} WAT,
                        </span>
                        <span className={available ? "text-green-400" : "text-red-400 uppercase"}>
                            {available ? "We are Open" : "We Are Closed"}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Link to="/privacy">
                        Privacy Policy
                    </Link>
                    <Link to="/privacy" >
                        Terms of Service
                    </Link>
                </div>
                <div className="flex flex-col">
                    <div>
                        <a
                            href="https://instagram.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Instagram
                        </a>

                    </div>
                    <div>
                        <a
                            href="https://facebook.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                    </div>
                </div>
                <div className="uppercase"><span >Made by 
                    <a
                        href="https://x.com/no9heroo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline ml-1"
                    >
                        WAILEE
                    </a></span>
                </div>
               
                
            </div>
                
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <a
        href="#"
        className="relative overflow-hidden h-[1.2em] inline-block group"
      >
        {/* top text */}
        <span className="block translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-out text-white">
          Hover Me
        </span>

        {/* bottom text (clone) */}
        <span className="block absolute top-full left-0 translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-out text-green-400">
          Hover Me
        </span>
      </a>
    </div>
    
            <HoverSwapText2
  text="Contact Us"
  href="/contact"
  className="group text-green-500 cursor-pointer"
/>

        </section>
    );
}

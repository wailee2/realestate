import { useState, useEffect, } from "react";
import Contactbut from '../components/ui/Contactbut';
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

        // Example availability: 8 AM to 5 PM
        const hours = now.getHours();
        setAvailable(hours >= 8 && hours < 17);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="border-t-1 border-red-500 px-3 md:px-4 lg:px-5 xl:px-[1.8%] pt-8 pb-3.5 space-y-10 md:space-y-20 ">
            <div className="md:flex flex-row-reverse justify-between space-y-9.5 md:gap-[6%] lg:gap-[0]">
                <div className="space-y-9.5 flex-1 md:flex justify-around">
                    <div className=" ">
                        <span className="uppercase text-sm font-semibold">(Navigation)</span>

                        <ul className="space-y-1.5 capitalize mt-2.5 font-semibold text-4xl md:text-4xl xl:text-5xl tracking-tighter">
                            <li>
                                <HoverSwapText2
                                text="Home"
                                href="/"
                                className="cursor-pointer"
                                />
                            </li>
                            <li>
                                <HoverSwapText2
                                text="Works"
                                href="/works"
                                className="cursor-pointer"
                                />
                            </li>
                            <li>
                                <HoverSwapText2
                                text="Studio"
                                href="/studio"
                                className="cursor-pointer"
                                />
                            </li>
                            <li>
                                <HoverSwapText2
                                text="Process"
                                href="/process"
                                className="cursor-pointer"
                                />
                            </li>
                            <li>
                                <HoverSwapText2
                                text="Gallery"
                                href="/gallery"
                                className="cursor-pointer"
                                />
                            </li>
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
                                <span>Monday to Friday, 8:00am - 5:00pm</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:max-w-[25%] flex-1">
                    <img src={testimonialimg3} alt="" className="w-full" />

                </div>
            </div>
            <div className="gap-x-[7%] gap-y-5 flex justify-between md:items-end flex-wrap text-sm font-bold uppercase">
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
                <div className="flex flex-col ">
                    <Link to="/privacy" className="hover:underline transition-all duration-1000">
                        Privacy Policy
                    </Link>
                    <Link to="/terms" className="hover:underline transition-all duration-1000">
                        Terms of Service
                    </Link>
                </div>
                <div className="flex flex-col ">
                    <div>
                        <a
                            href="https://instagram.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline transition-all duration-1000"
                            >
                            Instagram
                        </a>

                    </div>
                    <div>
                        <a
                            href="https://facebook.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline transition-all duration-1000"
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
        </section>
    );
}

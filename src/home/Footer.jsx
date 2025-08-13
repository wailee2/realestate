import { useState, useEffect, } from "react";
import Contactbut from '../components/ui/ContactButton';
import HoverSwapText2 from '../components/ui/HoverSwapText2';
import HoverUnderline from '../components/ui/HoverUnderline';
import footerimg from "../assets/footerimg.jpg";
import logo from '../assets/icon.png'
import { Link } from "react-router-dom";
import React from "react";



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
        <section className="border-t-1 border-gray-200 px-3 md:px-4 lg:px-5 xl:px-[1.8%] pt-8 pb-3.5 space-y-10 md:space-y-20 ">
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
                                text="Services"
                                href="/services"
                                className="cursor-pointer"
                                />
                            </li>
                            <li>
                                <HoverSwapText2
                                text="about"
                                href="/about"
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
                                text="Properties"
                                href="/property-catalogue"
                                className="cursor-pointer"
                                />
                            </li>
                            <li>
                                <Contactbut
                                variant="link"
                                colorClass=""
                                label="Contact Us "
                            />
                            </li>
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
                <div className="md:max-w-[23%] flex-1">
                    <img src={footerimg} alt="" className="w-full" />
                    <img src={logo} alt="Logo" className="w-full"/>
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
                    <HoverUnderline
                        text="Privacy Policy"
                        to="/privacy"
                        className=""
                    />

                    <HoverUnderline
                        text="Terms of Service"
                        to="/terms"
                        className=""
                    />

                </div>
                <div className="flex flex-col ">
                    <div>
                        <HoverUnderline
                            text="Instagram"
                            href="https://instagram.com/YOUR_USERNAME"
                            className="group text-black cursor-pointer"
                        />
                    </div>
                    <div>
                        <HoverUnderline
                            text="Facebook"
                            href="https://facebook.com/YOUR_USERNAME"
                            className="group text-black cursor-pointer"
                        />
                    </div>
                </div>
                <div className="uppercase">
                    <span >Made by 
                        <HoverUnderline
                            text="wailee"
                            href="https://x.com/no9heroo"
                            className="ml-1 text-black cursor-pointer"
                        />
                    </span>
                </div>
               
                
            </div>
            
        </section>
    );
}



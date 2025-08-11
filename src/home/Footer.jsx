import { useState, useEffect } from "react";
import Contactbut from '../components/ui/Contactbut';
import testimonialimg3 from "../assets/featured/featured02.jpg";


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
        <section className="border-t-1 border-red-500 px-3 md:px-4 lg:px-5 xl:px-[1.8%] pt-8 space-y-7.5 ">
            <div className="md:flex flex-row-reverse justify-between gap-[10%]">
                <div className="flex-1 md:flex justify-between">
                    <div className=" ">
                        <span className="uppercase font-semibold">(Navigation)</span>

                        <ul className="space-y-1 capitalize cursor-pointer mt-3 font-semibold text-4xl md:text-4xl xl:text-5xl tracking-tighter">
                            <li>Home</li>
                            <li>Works</li>
                            <li>Studio</li>
                            <li>Process</li>
                            <li>Gallery</li>
                            <li className=''><Contactbut variant="link" /></li>
                        </ul>
                    </div>
                    <div>
                        <span className="uppercase font-semibold">(Acknowledgment)</span>
                    </div>
                </div>
                <div className="md:max-w-[25%] flex-1">
                    <img src={testimonialimg3} alt="" className="w-full" />

                </div>
            </div>
                
                {/* Clock + availability */}
                <div className="flex items-center gap-2 text-sm font-semibold">
                    <span className="">
                        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} WAT,
                    </span>
                    <span className={available ? "text-green-400" : "text-red-400 uppercase"}>
                        {available ? "We are Open" : "We Are Closed"}
                    </span>
                </div>
                <div>© 2025 Your Company</div>
            
        </section>
    );
}

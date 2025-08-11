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
        <section className="border-t-1 border-red-500 px-3 md:px-4 lg:px-5 xl:px-[1.8%] space-y-7.5">
            <div className="md:flex justify-between">
                <div className="md:madx-w-[25%] h-a">
                    <img src={testimonialimg3} alt="" className="w-full" />

                </div>
                <div>
                    <span className="uppercase font-medium">(Navigation)</span>
               
                    <ul className="space-y-2">
                        <li>Home</li>
                        <li className=''><Contactbut variant="link" /></li>
                        <li>Terms and condition</li>
                        <li>Privacy policy</li>
                    </ul>
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
            </div>
        </section>
    );
}

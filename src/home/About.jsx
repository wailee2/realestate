import aboutimg from "../assets/aboutimg.jpg";
import AnimatedWord from "../components/ui/AnimatedWord";

export default function About() {


    return (
    <section 
        className=" px-3 bg-[#fcfcfc] md:px-4 mb-15 lg:px-5 xl:px-[1.8%] z-10 pt-10" id="about">
        <div>
            <div className="md:max-w-[85%]">
                <div className="block lg:hidden uppercase text-[50px] md:text-[73px]/17 font-medium tracking-tighter ">
                    <AnimatedWord
                        text="Enhancing property value with people in mind"
                        useGsap={true}
                        stagger={0.08}
                        duration={0.5}
                    />
                </div>
            </div>
            <div
                className="md:max-w-[70%] lg:max-w-[60%] xl:max-w-[70%]">
                <div className="hidden lg:block uppercase md:text-[73px]/20 lg:text-[89px]/20 xl:text-[120px]/28 font-medium tracking-tighter">
                    <AnimatedWord
                        text="Guiding with"
                        useGsap={true}
                        stagger={0.08}
                        duration={0.5}
                    />
                </div>
            </div>
            <div className="relative w-full mt-5">
                <div className="relative min-h-[5vh] md:min-h-[115vh]">
                    <div className=" lg:absolute right-0 space-y-5">
                        <div className="flex lg:gap-8">
                            <div>
                                <div className='w-full lg:max-w-[23rem] '>
                                    <img src={aboutimg} alt="about" className='w-full object-cover'/>
                                </div>
                            </div>
                            <div className="">
                                <div className="hidden break-all lg:flex uppercase md:text-[73px]/20 lg:text-[89px]/20 xl:text-[120px]/28 font-medium tracking-tighter">
                                    <AnimatedWord
                                        text="trust +"
                                        useGsap={true}
                                        stagger={0.08}
                                        duration={0.5}
                                    />
                                </div>
                                <div className="hidden break-all lg:flex uppercase md:text-[73px]/20 lg:text-[89px]/20 xl:text-[120px]/28 font-medium tracking-tighter">
                                    <AnimatedWord
                                        text="expertise"
                                        className=""
                                        useGsap={true}
                                        stagger={0.08}
                                        duration={0.5}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className="md:max-w-lg space-y-5 lg:text-xl xl:text-2xl">
                            <div>
                                <AnimatedWord
                                    text="We work closely with clients from the outset, providing clear communication and expert guidance. Collaborating with builders, consultants, and partners, we ensure every project runs seamlessly and exceeds expectations."
                                    className=""
                                    useGsap={true}
                                    stagger={0.08}
                                    duration={0.5}
                                />
                            </div>
                            
                            <div>
                                <AnimatedWord
                                    text="While our approach is consistent, each project is tailored to reflect the client’s goals, the unique potential of the property, and our professional insight."
                                    className=""
                                    useGsap={true}
                                    stagger={0.08}
                                    duration={0.5}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
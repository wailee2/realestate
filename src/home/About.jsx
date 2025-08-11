import aboutimg from "../assets/aboutimg.jpg";

export default function About() {


    return (
    <section
        className=" px-3 md:px-4 mb-15 lg:px-5 xl:px-[1.8%] z-10 pt-10">
        <div>
            <div className="md:max-w-[85%]">
                <h2
                    className="block lg:hidden uppercase text-[50px]/11 md:text-[73px]/17 font-medium ">Designing homes with people at heart
                </h2>
            </div>
            <div
                className="md:max-w-[70%] lg:max-w-[60%] xl:max-w-[70%]">
                <h2
                    className="hidden lg:block uppercase md:text-[73px]/20 lg:text-[89px]/20 xl:text-[120px]/28 font-medium ">Designing SPACES with
                </h2>
            </div>
            <div className="relative w-full mt-5">
                <div className="relative min-h-[100vh] md:min-h-[115vh]">
                    <div className=" lg:absolute right-0 space-y-5">
                        <div className="flex lg:gap-8">
                            <div>
                                <div className='w-full lg:max-w-[23rem] '>
                                    <img src={aboutimg} alt="about" className='w-full object-cover'/>
                                </div>
                            </div>
                            <div
                                className="">
                                <span
                                    className="hidden break-all lg:flex uppercase md:text-[73px]/20 lg:text-[89px]/20 xl:text-[120px]/28 font-medium ">intent <span className="font-semibold">+</span>
                                </span>
                                <span
                                    className="hidden break-all lg:flex uppercase md:text-[73px]/20 lg:text-[89px]/20 xl:text-[120px]/28 font-medium "> impact
                                </span>
                            </div>
                        </div>
                        
                        <div className="md:max-w-lg space-y-5 lg:text-xl xl:text-2xl">
                            <div>
                                We work closely with clients right from the start, with clear communication and expert guidance along the way. We also work closely with builders, consultants, and other partners to make sure each project runs smoothly and the final build delivers well beyond our shared aspirations.
                            </div>
                            <div>
                                While our aesthetic is recognisable, each project evolves to embody its own shape and character, crafted in response to the aspirations of our clients, the opportunities of the site, and the creative vision of our architectural team.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
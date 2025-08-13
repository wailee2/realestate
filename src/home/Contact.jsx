import Contactbut from '../components/ui/ContactButton';
import AnimatedWord from "../components/ui/AnimatedWord";

export default function Contact() {
    return (
        <section className="relative px-3 mb-9 md:px-4 lg:px-5 xl:px-[1.8%] space-y-9">
            <div>
                <div className="uppercase text-[50px]/12 md:text-[73px]/20 lg:text-[89px]/20 xl:text-[120px]/28 font-medium tracking-tighter">
                    <AnimatedWord
                        text="Focused on Value"
                        className=""
                        useGsap={true}
                        stagger={0.08}
                        duration={0.5}
                    />
                </div>
                <div className="uppercase text-[50px]/12 md:text-[73px]/20 lg:text-[89px]/20 xl:text-[120px]/28 font-medium tracking-tighter">
                    <AnimatedWord
                        text="Driven by Expertise"
                        className=""
                        useGsap={true}
                        stagger={0.08}
                        duration={0.5}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <Contactbut
                    variant="button"
                    colorClass="bg-black px-6 pt-3.5 pb-[9px] uppercase text-white font-medium rounded-4xl group hover:bg-red-700 transition cursor-pointer"
                    label="Start Your Investment Journey "
                />
            </div>
        </section>
    );
}

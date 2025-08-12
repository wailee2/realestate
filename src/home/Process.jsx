import processimg from "../assets/featured/featured03.jpg";
import AnimatedWord from "../components/ui/AnimatedWord";

export default function Process() {


  return (
    <section
        className="px-3 md:px-4 mb-15 lg:px-5 xl:px-[1.8%] z-10 pt-10 overflow-x-hidden"
    >
      <div>
        <div className="block md:flex md:gap-10 lg:gap-25 xl:gap-30 overflow-hidden">
            <div className="flex flex-col gap-y-3 flex-1/8">
                <span className="uppercase font-semibold">(Our Process)</span>
                <div
                    className="w-full overflow-hidden">
                    <img src={processimg} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="capitalise hidden">
                    <div className="flex gap-2">
                        <span>(01)</span>
                        <div>Sketch Design</div>
                    </div>
                    <div className="flex gap-2">
                        <span>(02)</span>
                        <div>Sketch Design</div>
                    </div>
                    <div className="flex gap-2">
                        <span>(03)</span>
                        <div>Sketch Design</div>
                    </div>
                    <div className="flex gap-2">
                        <span>(04)</span>
                        <div>Sketch Design</div>
                    </div>
                    <div className="flex gap-2">
                        <span>(05)</span>
                        <div>Sketch Design</div>
                    </div>
                    <div className="flex gap-2">
                        <span>(06)</span>
                        <div>Sketch Design</div>
                    </div>
                </div>

            </div>
            <div className="flex-1/2">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-semibold md:max-w-[90%] lg:max-w-[87%] xl:max-w-[75%] space-y-3 tracking-tighter">
                    <div>
                        <AnimatedWord
                            text="Our approach at Kola Illori & Co is designed to make your journey from first consultation to final handover smooth, transparent, and rewarding."
                            className=""
                            useGsap={true}
                            stagger={0.08}
                            duration={0.5}
                        />
                    </div>
                    <div>
                        <AnimatedWord
                            text="With our structured 6-stage process, we prioritise clarity, collaboration, and your goals. At every step, we keep you informed, engaged, and confident in each decision."
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
    </section>
  );
}



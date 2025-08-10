import processimg from "../assets/featured/featured03.jpg";


export default function Process() {


  return (
    <section
        className="px-3 md:px-4 mb-15 lg:px-5 xl:px-[1.8%] z-10 pt-10 overflow-x-hidden"
    >
      <div>
        <div className="block md:flex md:gap-10 lg:gap-25 xl:gap-30 overflow-hidden">
            <div className="flex flex-col gap-y-3 flex-1/8">
                <span className="uppercase font-medium">(Our Process)</span>
                <div
                    className="w-full overflow-hidden">
                    <img src={processimg} alt="" className="w-full h-full object-cover"/>
                </div>
                <div>
                    <div>
                        <span>(01)</span>
                        <div className="capitalise">Sketch Design</div>
                    </div>
                </div>

            </div>
            <div className="flex-1/2">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-semibold md:max-w-[90%] lg:max-w-[87%] xl:max-w-[75%] tracking-tight space-y-17">
                    <div>
                        Our approach at OH Architecture is designed to make your journey from concept to completion as smooth and enjoyable as possible.
                    </div>
                    <div>
                        With our 6-stage process, we prioritise clarity, collaboration, and your unique vision. At every step, we'll keep you informed, inspired, and involved.
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </section>
  );
}

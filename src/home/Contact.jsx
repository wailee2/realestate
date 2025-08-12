import Contactbut from '../components/ui/Contactbut';

export default function Contact() {
    return (
        <section className="relative px-3 mb-9 md:px-4 lg:px-5 xl:px-[1.8%] space-y-9">
            <div>
                <div className="uppercase text-[50px]/12 md:text-[73px]/20 lg:text-[89px]/20 xl:text-[120px]/28 font-medium">
                    FOCUSED ON QUALITY
                </div>
                <div className="uppercase text-[50px]/12 md:text-[73px]/20 lg:text-[89px]/20 xl:text-[120px]/28 font-medium">
                    DRIVEN BY CREATIVITY
                </div>
            </div>
            <div className="flex justify-center">
                <Contactbut variant="button" label="ask for relevant cta text for real estate " />

            </div>
        </section>
    );
}

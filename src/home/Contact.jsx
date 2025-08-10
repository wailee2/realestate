import Contactbut from '../components/ui/Contactbut';

export default function Contact() {
    return (
        <section className="relative px-3 mb-9 md:px-4 lg:px-5 xl:px-[1.8%] space-y-7.5">
            <div>
                <span className="uppercase text-[50px]/12 md:text-[73px]/20 lg:text-[89px]/20 xl:text-[120px]/28 font-medium">
                    FOCUSED ON QUALITY DRIVEN BY CREATIVITY
                </span>
            </div>
            <div className="flex justify-center">
                <Contactbut variant="button" label="Get Started mNow" />

            </div>
        </section>
    );
}

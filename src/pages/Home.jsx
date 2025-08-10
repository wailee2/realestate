import Hero from '../home/Hero';
import About from '../home/About';
import FeaturedWorks from '../home/Works';
import Process from '../home/Process';
import Testimonials from '../home/Testimonials';
import Contact from '../home/Contact';
import Footer from '../home/Footer';

export default function Home() {
  
  return (
    <main className=''>
      <Hero />
      <div className='relative z-10'>
        <About />
        <FeaturedWorks />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      {/*
      <Filter onFilterChange={handleFilter} />
      <Outlook />
      <Sample />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />*/}

    </main>
  );
}

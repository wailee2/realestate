import Hero from '../home/Hero';
import About from '../home/About';
import Works from '../home/Works';
//import Footer from './Footer';

export default function Home() {
  
  return (
    <main className=''>
      <Hero />
      <div className='relative z-10'>
        <About />
        <Works />
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

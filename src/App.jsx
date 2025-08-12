import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'
import './index.css'
import Home from "./pages/Home";
import Works from "./pages/Works";


export default function App(){
  // simple accessibility: set focus outline for keyboard users
  useEffect(()=>{
    const onKey = (e)=>{ if (e.key === 'Tab') document.documentElement.classList.add('user-is-tabbing'); };
    window.addEventListener('keydown', onKey);
    return ()=> window.removeEventListener('keydown', onKey);
  },[]);

  return (
    <Router>
      <div className="font-space bg-[#fcfcfc] text-black pt-b16">
         {/*<Navbar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />{/*
          <Route path="/listings" element={<Listings />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<main className="p-8">Page not found</main>} />*/}
        </Routes>
        {/*
        <Footer />*/}
      </div>
    </Router>
  );
}

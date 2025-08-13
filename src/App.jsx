import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'
import './index.css'
import Header from "./components/Header";
import Ho from "./components/ui/Ho";
import Home from "./pages/Home";
import Services from "./pages/Services";
import PropertyCatalogue from './pages/PropertyCatalogue'; 


export default function App(){
  // simple accessibility: set focus outline for keyboard users
  useEffect(()=>{
    const onKey = (e)=>{ if (e.key === 'Tab') document.documentElement.classList.add('user-is-tabbing'); };
    window.addEventListener('keydown', onKey);
    return ()=> window.removeEventListener('keydown', onKey);
  },[]);

  return (
    <Router>
      <div className="font-space bg-[#fcfcfc] text-black pt-b16 tracking-tights">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/property-catalogue" element={<PropertyCatalogue />} />
            {/*
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

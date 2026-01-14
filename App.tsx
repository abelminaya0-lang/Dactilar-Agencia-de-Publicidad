
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoAction from './components/VideoAction';
import CIOSection from './components/CIOSection';
import AdvertisingPhotography from './components/AdvertisingPhotography';
import TeamSection from './components/TeamSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const sectionsCount = 6;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSlide = Math.min(Math.ceil((scrollY + windowHeight / 3) / windowHeight), sectionsCount);
      if (newSlide !== activeSlide && newSlide > 0) {
        setActiveSlide(newSlide);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSlide, sectionsCount]);

  const targets = [
    'hero', 
    'video-action', 
    'cio', 
    'advertising-photography', 
    'team', 
    'contact'
  ];

  return (
    <div className="relative bg-black text-brand-light min-h-screen selection:bg-brand-red selection:text-white">
      <Navbar />
      
      {/* Side Pagination - Updated for 6 sections */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4 items-center">
        {Array.from({ length: sectionsCount }).map((_, idx) => {
          const num = idx + 1;
          return (
            <button
              key={num}
              onClick={() => {
                const targetElement = document.getElementById(targets[idx]);
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`transition-all duration-500 text-xs font-bold flex flex-col items-center gap-1 group ${
                activeSlide === num ? 'text-brand-red' : 'text-brand-gray hover:text-brand-violet'
              }`}
            >
              <span className="mb-0.5 text-[8px]">{String(num).padStart(2, '0')}</span>
              <div className={`w-[1px] h-4 bg-current transition-all duration-500 ${
                activeSlide === num ? 'h-7 bg-brand-red' : 'group-hover:h-5'
              }`} />
            </button>
          );
        })}
      </div>

      <main>
        <Hero />
        <VideoAction />
        <CIOSection />
        <AdvertisingPhotography />
        <TeamSection />
        <BookingSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;

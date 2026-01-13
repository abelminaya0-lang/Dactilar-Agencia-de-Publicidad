
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center items-center">
      {/* Background Container - Pure Full Screen */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          {/* Mobile Background */}
          <img 
            src="https://res.cloudinary.com/drvs81bl0/image/upload/v1767938373/portada_cel_3_piz8dw.png" 
            alt="Dactilar Background Mobile"
            className="block md:hidden w-full h-full object-cover object-center scale-100 animate-[ken-burns_40s_ease-in-out_infinite_alternate]"
          />
          
          {/* PC/Desktop Background */}
          <img 
            src="https://res.cloudinary.com/drvs81bl0/image/upload/v1767935793/portada_compu_1_z6qxe1.png" 
            alt="Dactilar Background Desktop"
            className="hidden md:block w-full h-full object-cover object-center scale-100 animate-[ken-burns_40s_ease-in-out_infinite_alternate]"
          />

          {/* Luxury Gradient Overlay - Subtle to allow background to bleed behind video */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/80"></div>
        </div>
      </div>

      {/* Subtle Scroll Indicator - Moved higher to stay visible */}
      <div className="absolute bottom-56 md:bottom-72 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1.0); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1.0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

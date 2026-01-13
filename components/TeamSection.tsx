
import React from 'react';
import { GlassWater, Trophy, Flame } from 'lucide-react';

const TeamSection: React.FC = () => {
  // Colores de la marca
  const brandRed = "#D93611";

  return (
    <section id="team" className="relative pt-16 pb-0 md:pt-32 bg-black overflow-hidden flex flex-col items-center">
      
      {/* Header Section */}
      <div className="relative mb-10 md:mb-24 text-center px-4 max-w-6xl mx-auto z-10">
        
        {/* Brand Badge - Red */}
        <div 
          className="absolute top-[-15px] left-1/2 -translate-x-1/2 md:left-[58%] z-20 inline-flex items-center gap-2 px-3 py-1.5 md:px-6 md:py-3 rounded-[4px] md:rounded-[8px] transform -rotate-[6deg] shadow-2xl"
          style={{ backgroundColor: brandRed }}
        >
          <GlassWater size={14} className="text-white md:w-6 md:h-6" fill="white" />
          <Trophy size={14} className="text-white md:w-6 md:h-6" fill="white" />
          <Flame size={14} className="text-white md:w-6 md:h-6" fill="white" />
        </div>

        {/* Adjusted Typography for Mobile */}
        <h2 className="text-white font-heading font-[900] text-[2.2rem] md:text-[9.5rem] leading-[0.8] uppercase tracking-tighter mb-1 md:mb-2">
          NUESTRO EQUIPO
        </h2>
        <h2 
          className="font-heading font-[900] text-[3rem] md:text-[14rem] leading-[0.8] uppercase tracking-tighter italic drop-shadow-[0_10px_30px_rgba(217,54,17,0.4)]" 
          style={{ color: brandRed }}
        >
          DE CRACKS!
        </h2>
      </div>

      {/* Main Team Photo Section - Colors Restored */}
      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-12 z-10 mb-12 md:mb-20">
        <div className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-[2px] border border-white/10 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10"></div>
          <img 
            src="https://res.cloudinary.com/drvs81bl0/image/upload/v1768019857/480207177_930559259270589_5359730124350354525_n_gy62zw.jpg" 
            alt="Dactilar Team"
            className="w-full h-full object-cover transition-all duration-[2s] scale-100 group-hover:scale-105"
          />
          
          {/* Subtle Brand Overlay - Reduced */}
          <div className="absolute inset-0 bg-brand-red/5 mix-blend-overlay z-20 pointer-events-none"></div>
          
          {/* Action Caption */}
          <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 z-30 flex items-center gap-3">
            <div className="w-8 md:w-12 h-[1px] bg-brand-red"></div>
            <p className="text-white font-heading font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] drop-shadow-md">
              Talento sin fronteras
            </p>
          </div>
        </div>
      </div>

      {/* Brand Glows */}
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[40%] bg-brand-red/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-[-10%] w-[40%] h-[30%] bg-brand-violet/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </section>
  );
};

export default TeamSection;

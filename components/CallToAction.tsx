
import React from 'react';
import { Play } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 z-0 bg-black">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
          alt="Data and Creativity"
          className="w-full h-full object-cover opacity-20 mix-blend-screen scale-110 animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-brand-violet/10 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-8 max-w-5xl">
        <button className="w-24 h-24 rounded-full bg-brand-violet/5 backdrop-blur-sm border border-brand-violet/20 flex items-center justify-center mx-auto mb-16 hover:scale-110 transition-all duration-500 group">
          <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-black group-hover:bg-brand-red group-hover:text-white transition-colors">
            <Play fill="currentColor" size={24} className="ml-1" />
          </div>
        </button>
        
        <h2 className="text-6xl md:text-9xl font-heading font-extrabold uppercase tracking-tighter leading-[0.85] mb-12 text-brand-light">
          Impulsa tu <br />
          <span className="italic font-light text-transparent [-webkit-text-stroke:1px_#F2F2F2]">Marca al Futuro</span>
        </h2>
        
        <p className="text-brand-gray text-lg max-w-2xl mx-auto mb-16 leading-relaxed font-light">
          En Dactilar no solo creamos anuncios; construimos legados digitales. Fusionamos la precisión del performance con la magia del branding profesional.
        </p>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-heading font-bold text-brand-light">200+</span>
            <span className="text-[10px] text-brand-gray uppercase tracking-[0.3em] font-bold mt-2">Campañas</span>
          </div>
          <div className="w-[1px] h-16 bg-zinc-800 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-heading font-bold text-brand-light">1M+</span>
            <span className="text-[10px] text-brand-gray uppercase tracking-[0.3em] font-bold mt-2">Alcance</span>
          </div>
          <div className="w-[1px] h-16 bg-zinc-800 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-heading font-bold text-brand-light">100%</span>
            <span className="text-[10px] text-brand-gray uppercase tracking-[0.3em] font-bold mt-2">Estrategia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

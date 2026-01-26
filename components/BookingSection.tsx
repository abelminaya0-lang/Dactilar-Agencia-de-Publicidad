import React, { useState } from 'react';
import { User } from 'lucide-react';

const BookingSection: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    const nameToUse = inputValue.trim() || "un cliente interesado";
    const phoneNumber = "51901189796";
    const message = encodeURIComponent(`Hola Dactilar, me gustaría agendar una llamada. Mi nombre/empresa es: ${nameToUse}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen py-32 md:py-64 lg:py-80 px-4 md:px-8 bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative background glows for the contact area */}
      <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-y-20"></div>

      {/* Main Container - Neon Green with optimized padding */}
      <div className="w-full max-w-lg lg:max-w-2xl xl:max-w-3xl bg-[#00df33] rounded-[30px] md:rounded-[45px] lg:rounded-[60px] p-8 md:p-16 lg:p-24 flex flex-col items-center shadow-[0_0_100px_rgba(0,223,51,0.2)] border border-white/10 relative z-10 transition-transform duration-700 hover:scale-[1.01]">
        
        {/* Main Heading - Refined size for a cleaner look */}
        <h2 className="text-[1.3rem] md:text-[3.2rem] lg:text-[4.5rem] xl:text-[5.5rem] font-heading font-[900] italic uppercase tracking-tighter text-black leading-[0.95] text-center mb-10 md:mb-14 lg:mb-20 w-full">
          ¿LISTO PARA <br /> CONTRATARNOS?
        </h2>

        <form onSubmit={handleWhatsApp} className="w-full space-y-6 md:space-y-8 lg:space-y-12">
          {/* Label */}
          <div className="w-full text-left">
            <label className="text-black font-sans text-xs md:text-sm lg:text-lg font-extrabold mb-2 lg:mb-4 block tracking-tight uppercase">
              Tu Nombre o empresa <span className="text-zinc-900/30">(opcional)</span>
            </label>
          </div>

          {/* Input Block */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 lg:pl-8 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-black transition-colors">
              <User size={18} className="md:w-[20px] lg:w-[28px] lg:h-[28px]" strokeWidth={3} />
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe aquí tu nombre..."
              className="w-full bg-white text-black h-12 md:h-16 lg:h-24 pl-12 md:pl-14 lg:pl-20 pr-8 rounded-[0.8rem] md:rounded-[1rem] lg:rounded-[1.5rem] text-sm md:text-lg lg:text-2xl outline-none transition-all placeholder:text-zinc-300 font-sans border-none shadow-[inset_0_4px_10px_rgba(0,0,0,0.05)] focus:ring-4 focus:ring-black/5"
            />
          </div>

          {/* Button Block - Optimized text size */}
          <div className="pt-2 md:pt-4 lg:pt-8">
            <button
              type="submit"
              className="w-full bg-black hover:bg-zinc-900 text-white font-heading font-[900] text-[16px] md:text-[24px] lg:text-[32px] py-5 md:py-8 lg:py-12 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2rem] uppercase tracking-tighter leading-[1] transition-all transform active:scale-[0.96] flex flex-col items-center justify-center shadow-[0_25px_50px_rgba(0,0,0,0.4)] group"
            >
              <span className="group-hover:translate-y-[-1px] transition-transform">¡AGENDAR UNA</span>
              <span className="group-hover:translate-y-[1px] transition-transform">LLAMADA!</span>
            </button>
          </div>
        </form>

        <div className="mt-10 md:mt-16 lg:mt-24 flex flex-col items-center gap-2 lg:gap-4">
           <div className="w-12 lg:w-24 h-[2px] bg-black/10 rounded-full"></div>
           <p className="text-black/40 text-[8px] md:text-[10px] lg:text-[12px] font-bold uppercase tracking-[0.4em]">
             Dactilar Agencia • publicidad 2026
           </p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
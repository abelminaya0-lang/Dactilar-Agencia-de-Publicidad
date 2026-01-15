import React, { useState } from 'react';
import { User } from 'lucide-react';

const BookingSection: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Si el usuario no pone nombre, usamos un valor predeterminado
    const nameToUse = inputValue.trim() || "un cliente interesado";
    
    // Número actualizado: +51 901 189 796
    const phoneNumber = "51901189796";
    const message = encodeURIComponent(`Hola Dactilar, me gustaría agendar una llamada. Mi nombre/empresa es: ${nameToUse}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen py-32 md:py-64 px-4 md:px-8 bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative background glows for the contact area */}
      <div className="absolute w-[300px] h-[300px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-y-20"></div>

      {/* Main Container - Neon Green with optimized padding */}
      <div className="w-full max-w-lg bg-[#00df33] rounded-[30px] md:rounded-[45px] p-8 md:p-16 flex flex-col items-center shadow-[0_0_100px_rgba(0,223,51,0.2)] border border-white/10 relative z-10 transition-transform duration-700 hover:scale-[1.01]">
        
        {/* Main Heading - Refined size for a cleaner look */}
        <h2 className="text-[1.3rem] md:text-[3.2rem] font-heading font-[900] italic uppercase tracking-tighter text-black leading-[0.95] text-center mb-10 md:mb-14 w-full">
          ¿LISTO PARA <br /> CONTRATARNOS?
        </h2>

        <form onSubmit={handleWhatsApp} className="w-full space-y-6 md:space-y-8">
          {/* Label */}
          <div className="w-full text-left">
            <label className="text-black font-sans text-xs md:text-sm font-extrabold mb-2 block tracking-tight uppercase">
              Tu Nombre o empresa <span className="text-zinc-900/30">(opcional)</span>
            </label>
          </div>

          {/* Input Block */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-black transition-colors">
              <User size={18} className="md:w-[20px]" strokeWidth={3} />
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe aquí tu nombre..."
              className="w-full bg-white text-black h-12 md:h-16 pl-12 md:pl-14 pr-8 rounded-[0.8rem] md:rounded-[1rem] text-sm md:text-lg outline-none transition-all placeholder:text-zinc-300 font-sans border-none shadow-[inset_0_4px_10px_rgba(0,0,0,0.05)] focus:ring-4 focus:ring-black/5"
            />
          </div>

          {/* Button Block - Optimized text size */}
          <div className="pt-2 md:pt-4">
            <button
              type="submit"
              className="w-full bg-black hover:bg-zinc-900 text-white font-heading font-[900] text-[16px] md:text-[24px] py-5 md:py-8 rounded-[1.2rem] md:rounded-[1.5rem] uppercase tracking-tighter leading-[1] transition-all transform active:scale-[0.96] flex flex-col items-center justify-center shadow-[0_25px_50px_rgba(0,0,0,0.4)] group"
            >
              <span className="group-hover:translate-y-[-1px] transition-transform">¡AGENDAR UNA</span>
              <span className="group-hover:translate-y-[1px] transition-transform">LLAMADA!</span>
            </button>
          </div>
        </form>

        <div className="mt-10 md:mt-16 flex flex-col items-center gap-2">
           <div className="w-12 h-[2px] bg-black/10 rounded-full"></div>
           <p className="text-black/40 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em]">
             Dactilar Agencia • publicidad 2026
           </p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
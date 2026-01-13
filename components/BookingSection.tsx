
import React, { useState } from 'react';
import { User } from 'lucide-react';

const BookingSection: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const phoneNumber = "51902838501";
    const message = encodeURIComponent(`Hola Dactilar, me gustaría agendar una llamada. Mi nombre/empresa es: ${inputValue}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 md:py-24 px-4 md:px-8 bg-black flex justify-center">
      {/* Main Container - Neon Green with optimized padding for mobile */}
      <div className="w-full max-w-lg bg-[#00df33] rounded-[30px] md:rounded-[35px] p-6 md:p-14 flex flex-col items-center shadow-[0_0_80px_rgba(0,223,51,0.25)] border border-white/10">
        
        {/* Main Heading - Adjusted to 1.4rem (approx 22px) for mobile impact as requested */}
        <h2 className="text-[1.4rem] md:text-[5.5rem] font-heading font-[900] italic uppercase tracking-tighter text-black leading-[1] text-center mb-8 md:mb-10 w-full">
          ¿LISTO PARA <br /> CONTRATARNOS?
        </h2>

        <form onSubmit={handleWhatsApp} className="w-full space-y-4 md:space-y-5">
          {/* Label updated to "Nombre o empresa" */}
          <div className="w-full text-left">
            <label className="text-black font-sans text-base md:text-lg font-extrabold mb-1 block tracking-tight">
              Ingresa tu Nombre o empresa <span className="text-zinc-900/30">*</span>
            </label>
          </div>

          {/* Input Block - Now with User Icon instead of Mail */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-black transition-colors">
              <User size={20} className="md:w-[22px]" strokeWidth={3} />
            </div>
            <input
              type="text"
              required
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Nombre o empresa aquí"
              className="w-full bg-white text-black h-14 md:h-20 pl-12 md:pl-14 pr-6 rounded-xl text-base md:text-xl outline-none transition-all placeholder:text-zinc-300 font-sans border-none shadow-inner"
            />
          </div>

          {/* Button Block - Agenda una llamada */}
          <div className="pt-2 md:pt-4">
            <button
              type="submit"
              className="w-full bg-black hover:bg-zinc-900 text-white font-heading font-[900] text-[20px] md:text-[42px] py-5 md:py-10 rounded-[1.5rem] md:rounded-[2rem] uppercase tracking-tighter leading-[0.95] transition-all transform active:scale-[0.96] flex flex-col items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
            >
              <span>¡AGENDAR UNA</span>
              <span>LLAMADA!</span>
            </button>
          </div>
        </form>

        <p className="mt-8 md:mt-12 text-black/40 text-[9px] md:text-[12px] font-bold uppercase tracking-[0.4em]">
          Dactilar Agencia • publicidad 2026
        </p>
      </div>
    </section>
  );
};

export default BookingSection;

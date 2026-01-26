import React from 'react';

const CIOSection: React.FC = () => {
  const accentColor = "#5408a0";

  return (
    <section id="cio" className="relative py-24 md:py-28 lg:py-40 px-8 bg-black overflow-hidden border-y border-zinc-900/50">
      {/* Background Accent */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] blur-[100px] lg:blur-[150px] rounded-full pointer-events-none opacity-15"
        style={{ backgroundColor: accentColor }}
      ></div>

      <div className="max-w-3xl lg:max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Profile Image Container - Smaller and more focused */}
        <div className="relative mb-10 lg:mb-16 group">
          <div 
            className="absolute -inset-1.5 border rounded-full scale-105 group-hover:scale-100 transition-all duration-700 opacity-20"
            style={{ borderColor: accentColor }}
          ></div>
          <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-[3px] border-black shadow-[0_0_40px_rgba(84,8,160,0.2)]">
            <img 
              src="https://res.cloudinary.com/drvs81bl0/image/upload/v1768415486/perfil_antony_1_unovza.png" 
              alt="Antony Palacios - Fundador" 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
            />
          </div>
          {/* Floating Badge - Updated to Fundador and more compact */}
          <div 
            className="absolute -bottom-1 -right-1 lg:bottom-4 lg:right-4 text-white text-[9px] lg:text-[11px] font-bold px-3 lg:px-5 py-1 lg:py-2 uppercase tracking-widest shadow-lg z-20"
            style={{ backgroundColor: accentColor }}
          >
            Fundador
          </div>
        </div>

        {/* Info Block - Scaled down for elegance */}
        <div className="space-y-3 lg:space-y-6">
          <span className="text-zinc-500 font-heading font-bold tracking-[0.4em] text-[9px] lg:text-[11px] uppercase">
            Dactilar Agencia
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            Antony <span style={{ color: accentColor }}>Palacios</span>
          </h2>
          <div className="w-12 lg:w-20 h-[1px] mx-auto my-6 lg:my-10 opacity-40" style={{ backgroundColor: accentColor }}></div>
          <p className="text-zinc-400 text-sm md:text-base lg:text-lg max-w-lg lg:max-w-2xl mx-auto leading-relaxed font-light font-sans italic">
            "Soy Antony Palacios, licenciado en Administración y Marketing, especialista en branding y marketing digital con más de 8 años impulsando marcas. Como fundador de Dactilar, convierto ideas en identidad y marcas en negocios sólidos y competitivos."
          </p>
        </div>

        {/* Social / Contact Mini - Updated to TikTok */}
        <div className="mt-10 lg:mt-16 flex items-center justify-center gap-6 lg:gap-10">
          <a 
            href="https://www.tiktok.com/@antonypalacios94?_r=1&_t=ZS-92weqnXpK5o" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] lg:text-[12px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-300"
          >
            TikTok
          </a>
          <div className="w-1 h-1 rounded-full bg-zinc-800"></div>
          <a 
            href="https://www.instagram.com/antonypalaciosq?igsh=MWJjZmRxbTJuMmtiaQ==" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] lg:text-[12px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default CIOSection;
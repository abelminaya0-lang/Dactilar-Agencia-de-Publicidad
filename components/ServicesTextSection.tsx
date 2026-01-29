import React, { useState } from 'react';

const services = [
  { id: "01", title: "Creación de contenido", icon: "🎬" },
  { id: "02", title: "Branding", icon: "🖌️" },
  { id: "03", title: "Performance", icon: "🚀" },
  { id: "04", title: "Fotografía publicitaria", icon: "📸" },
  { id: "05", title: "Estrategias digitales", icon: "🎯" },
  { id: "06", title: "Diseño Web", icon: "💻" },
  { id: "07", title: "Consultorías", icon: "💡" }
];

const ServicesTextSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      id="services-text" 
      className="relative py-24 md:py-40 lg:py-48 bg-black overflow-hidden border-y border-zinc-900/30 cursor-default"
    >
      <div className="max-w-[1400px] lg:max-w-[1500px] mx-auto px-6 relative z-10">
        
        {/* Título de la Sección - Estilo Etiqueta de Lujo */}
        <div className="flex flex-col items-center mb-20 md:mb-32 lg:mb-40">
          <h2 className="text-brand-red font-heading font-black text-[10px] md:text-[12px] lg:text-[14px] uppercase tracking-[0.8em] text-center leading-none opacity-90">
            SERVICIOS
          </h2>
        </div>

        {/* Lista de Servicios Tipográfica */}
        <div className="flex flex-col w-full max-w-5xl lg:max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="w-full flex flex-col group relative"
            >
              {/* Contenedor del Ítem */}
              <div className="flex items-center justify-between py-6 md:py-12 lg:py-14 transition-all duration-500">
                
                <div className="flex items-center gap-6 md:gap-16 lg:gap-20">
                  {/* Numeración en Blanco para Visibilidad */}
                  <span className={`font-heading font-bold text-[10px] md:text-sm lg:text-base tracking-[0.4em] transition-all duration-500 ${
                    hoveredIndex === index ? 'text-brand-red scale-110' : 'text-white/40'
                  }`}>
                    {service.id}
                  </span>
                  
                  {/* Título con Icono y efecto Outline a Sólido */}
                  <div className={`flex items-center gap-4 md:gap-8 lg:gap-10 transition-all duration-700 ${
                    hoveredIndex === index ? 'translate-x-4 md:translate-x-8 lg:translate-x-10' : ''
                  }`}>
                    <span className={`text-xl md:text-4xl lg:text-5xl transition-transform duration-500 ${hoveredIndex === index ? 'scale-125 rotate-12' : 'scale-100 opacity-40'}`}>
                      {service.icon}
                    </span>
                    <h3 className={`text-[1.3rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4.5rem] font-heading font-black uppercase tracking-tighter leading-none transition-all duration-700 ${
                      hoveredIndex === index 
                        ? 'text-brand-red' 
                        : 'text-white/90 md:text-transparent md:[-webkit-text-stroke:1px_rgba(255,255,255,0.15)]'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Icono de flecha minimalista */}
                <div className={`hidden md:flex w-10 h-10 lg:w-14 lg:h-14 items-center justify-center transition-all duration-500 opacity-0 transform translate-x-[-20px] ${
                  hoveredIndex === index ? 'opacity-100 translate-x-0' : ''
                }`}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D93611" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lg:w-10 lg:h-10">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>

              {/* Raya Divisoria */}
              <div className={`w-full h-[1px] transition-all duration-700 origin-left ${
                hoveredIndex === index ? 'bg-brand-red scale-x-100 opacity-100' : 'bg-zinc-900 opacity-50'
              }`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decoración de fondo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(217,54,17,0.01)_0%,transparent_70%)]"></div>
      </div>
    </section>
  );
};

export default ServicesTextSection;
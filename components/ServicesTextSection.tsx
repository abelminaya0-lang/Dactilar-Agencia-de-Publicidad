import React from 'react';

const ServicesTextSection: React.FC = () => {
  const services = [
    "Creación de contenido",
    "Branding",
    "Performance",
    "Fotografía publicitaria",
    "Estrategias digitales",
    "Diseño Web",
    "Consultorías"
  ];

  return (
    <section id="services-text" className="py-24 md:py-44 bg-black overflow-hidden border-y border-zinc-900/30">
      <div className="max-w-[1700px] mx-auto px-6">
        
        {/* Título de Sección */}
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <div className="flex items-center gap-3 md:gap-4 mb-4">
            <div className="w-8 md:w-12 h-[1px] bg-brand-red opacity-50"></div>
            <span className="text-brand-red font-heading font-black tracking-[0.5em] text-[10px] md:text-[12px] uppercase">
              SERVICIOS
            </span>
            <div className="w-8 md:w-12 h-[1px] bg-brand-red opacity-50"></div>
          </div>
        </div>

        {/* Lista de Servicios en Columna Centrada con Divisores Inclinados */}
        <div className="flex flex-col items-center justify-center">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <div className="group flex flex-col items-center py-2 md:py-4">
                <span className="text-[1.8rem] md:text-[5.2rem] font-heading font-[900] uppercase tracking-tighter text-white leading-[0.8] hover:text-brand-red transition-all duration-700 cursor-default text-center">
                  {service}
                </span>
                
                {/* Línea decorativa sutil en hover */}
                <div className="w-0 h-[1px] bg-brand-red mt-2 md:mt-4 transition-all duration-700 group-hover:w-1/2 opacity-0 group-hover:opacity-100"></div>
              </div>

              {/* Divisor Inclinado (Slash) - No aparece después del último elemento */}
              {index < services.length - 1 && (
                <div className="py-4 md:py-8 flex justify-center">
                  <span className="text-brand-red/30 text-2xl md:text-5xl font-heading font-light transform -rotate-[25deg] select-none">
                    /
                  </span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTextSection;
import React from 'react';

const ServicesTextSection: React.FC = () => {
  const services = [
    "Creación de contenido",
    "Branding",
    "Performance",
    "Fotografía publicitaria",
    "Estrategias digitales",
    "Consultorías"
  ];

  return (
    <section id="services-text" className="py-24 md:py-40 bg-black overflow-hidden border-y border-zinc-900/30">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-8">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <span className="text-[1.4rem] md:text-[4rem] lg:text-[5.5rem] font-heading font-black uppercase tracking-tighter text-white/90 hover:text-brand-red transition-all duration-700 cursor-default leading-none">
                {service}
              </span>
              {index < services.length - 1 && (
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-red shadow-[0_0_15px_rgba(217,54,17,0.5)]"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTextSection;
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
    <section id="services-text" className="py-24 md:py-48 bg-black overflow-hidden border-y border-zinc-900/30">
      <div className="max-w-[1700px] mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-16 md:gap-y-14">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <span className="text-[2rem] md:text-[8rem] font-heading font-[900] uppercase tracking-tighter text-white leading-[0.8] hover:text-brand-red transition-all duration-700 cursor-default">
                {service}
              </span>
              {index < services.length - 1 && (
                <div className="w-2 h-2 md:w-5 md:h-5 rounded-full bg-brand-red shadow-[0_0_20px_rgba(217,54,17,0.6)] animate-pulse"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTextSection;

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-16 px-8 lg:px-16 bg-black overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-violet/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Header Content - Only text remains for a cleaner look */}
        <div className="space-y-8">
          <span className="text-brand-red font-heading font-bold tracking-[0.4em] text-[10px] uppercase block animate-pulse">
            Nuestra Esencia
          </span>
          <h2 className="text-5xl md:text-8xl font-heading font-extrabold uppercase tracking-tighter leading-[0.9] text-brand-light">
            Dactilar: <br />
            <span className="text-transparent [-webkit-text-stroke:1px_#F2F2F2] opacity-50">Creatividad</span> <br />
            con Propósito
          </h2>
          
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-brand-gray text-lg md:text-xl leading-relaxed font-light font-sans">
              Somos más que una agencia; somos el aliado estratégico que tu marca necesita en la era digital. En <span className="text-brand-light font-bold">Dactilar</span>, fusionamos el arte visual con la ciencia de los datos para crear campañas que no solo se ven bien, sino que venden.
            </p>
            <p className="text-brand-gray/80 text-sm leading-relaxed font-light">
              Desde Bogotá para el mundo, nuestro equipo de creativos, estrategas y analistas trabaja con una sola misión: elevar tu presencia digital a niveles de clase mundial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

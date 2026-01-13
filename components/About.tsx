
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 px-8 lg:px-16 bg-black overflow-hidden border-b border-zinc-900/30">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-violet/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Header Content */}
        <div className="space-y-8 mb-16">
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

        {/* Visual Element */}
        <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-zinc-900 group mb-16">
          <div className="absolute -inset-2 border border-zinc-800 transition-transform duration-700 group-hover:scale-[1.02]"></div>
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
            alt="Dactilar Studio" 
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Vision/Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full pt-12 border-t border-zinc-900">
          <div className="space-y-4">
            <h4 className="text-brand-light font-heading font-bold text-xs uppercase tracking-widest">Visión</h4>
            <p className="text-brand-gray text-sm leading-relaxed max-w-xs mx-auto">Liderar la transformación creativa mediante tecnología y estética disruptiva en toda la región.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-brand-light font-heading font-bold text-xs uppercase tracking-widest">Valores</h4>
            <p className="text-brand-gray text-sm leading-relaxed max-w-xs mx-auto">Excelencia visual, transparencia estratégica y resultados exponenciales para cada aliado.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

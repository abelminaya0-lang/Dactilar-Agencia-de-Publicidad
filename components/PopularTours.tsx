
import React from 'react';
import { Plus } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Content Creation',
    desc: 'Video y Fotografía Profesional',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop',
    tag: 'CREATIVIDAD'
  },
  {
    id: 2,
    title: 'Branding',
    desc: 'Identidad Visual y Estrategia',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop',
    tag: 'IDENTIDAD'
  },
  {
    id: 3,
    title: 'Performance',
    desc: 'Publicidad y Conversiones',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop',
    tag: 'RESULTADOS'
  },
  {
    id: 4,
    title: 'Strategy',
    desc: 'Growth y Redes Sociales',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop',
    tag: 'ESTRATEGIA'
  }
];

const PopularTours: React.FC = () => {
  return (
    <section id="services" className="py-32 px-8 lg:px-16 bg-black">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-24">
        <span className="text-brand-red font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block">Nuestras Capacidades</span>
        <h2 className="text-6xl md:text-8xl font-heading font-extrabold uppercase tracking-tighter leading-[0.85] text-brand-light mb-10">
          Nuestros <br />Servicios
        </h2>
        <p className="max-w-2xl text-brand-gray text-base md:text-lg leading-relaxed font-light">
          En Dactilar somos especialistas en creación de contenido profesional, branding y performance. Ayudamos a marcas y empresas a crecer en redes sociales con estrategia, creatividad y resultados medibles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="group relative h-[600px] md:h-[650px] overflow-hidden bg-zinc-900 cursor-pointer">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out opacity-40 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-center text-center gap-2 transition-all duration-500">
              <span className="text-[10px] font-bold tracking-[0.3em] text-brand-red uppercase mb-2">{service.tag}</span>
              <h3 className="text-3xl font-heading font-bold uppercase tracking-tight text-brand-light leading-none">{service.title}</h3>
              <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-500 opacity-0 group-hover:opacity-100 mt-4 flex items-center justify-center gap-4">
                <span className="text-xs font-light text-brand-gray italic">{service.desc}</span>
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-red hover:border-brand-red hover:text-white transition-all transform hover:rotate-90">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularTours;


import React, { useState } from 'react';
import { Play, ArrowUpRight, Instagram, Layout, Camera, TrendingUp } from 'lucide-react';

type Category = 'diseño' | 'fotografía' | 'reels' | 'marketing';

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  client: string;
  stats?: string;
}

const portfolioData: PortfolioItem[] = [
  // DISEÑO
  { id: 1, title: 'Branding Identidad', category: 'diseño', client: 'Luxe Real Estate', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop' },
  { id: 2, title: 'UI/UX Interface', category: 'diseño', client: 'TechFlow Global', image: 'https://images.unsplash.com/photo-1581291518062-c9a79d7df7f0?q=80&w=2070&auto=format&fit=crop' },
  
  // FOTOGRAFÍA
  { id: 3, title: 'Editorial de Moda', category: 'fotografía', client: 'Sartorial Mag', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop' },
  { id: 4, title: 'Producto High-End', category: 'fotografía', client: 'Aura Perfumes', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1970&auto=format&fit=crop' },

  // REELS (Vertical Layout)
  { id: 5, title: 'Lifestyle Story', category: 'reels', client: 'Nomad Hotel', image: 'https://images.unsplash.com/photo-1539651044670-315229da9d2f?q=80&w=1974&auto=format&fit=crop' },
  { id: 6, title: 'Fashion Motion', category: 'reels', client: 'Urban Wear', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop' },
  { id: 7, title: 'B-Roll Cinematic', category: 'reels', client: 'Coffee Culture', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop' },

  // MARKETING
  { id: 8, title: 'Ads Strategy', category: 'marketing', client: 'Global Sales', stats: '+320% ROI', image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop' },
  { id: 9, title: 'Performance Lab', category: 'marketing', client: 'Crypto Bank', stats: '1.2M Reach', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop' },
];

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category | 'todos'>('todos');

  const filteredItems = activeTab === 'todos' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeTab);

  const categories = [
    { id: 'todos', label: 'Todos', icon: null },
    { id: 'diseño', label: 'Diseño', icon: <Layout size={14} /> },
    { id: 'fotografía', label: 'Fotografía', icon: <Camera size={14} /> },
    { id: 'reels', label: 'Reels', icon: <Instagram size={14} /> },
    { id: 'marketing', label: 'Marketing', icon: <TrendingUp size={14} /> },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 px-4 md:px-16 bg-black">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header con Tipografía de Impacto */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20 md:mb-28">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-brand-red"></div>
              <span className="text-brand-red font-heading font-bold tracking-[0.4em] text-[10px] uppercase block">
                Portfolio 2026
              </span>
            </div>
            {/* Se ajustó el tamaño de text-6xl a text-[2.8rem] para móvil */}
            <h2 className="text-[2.8rem] md:text-[7.5rem] font-heading font-[900] uppercase tracking-tighter leading-[0.85] text-brand-light">
              NUESTRO <br />
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(242,242,242,0.3)] italic">LEGADO</span>
            </h2>
          </div>

          {/* Filtros Premium */}
          <div className="flex flex-wrap gap-4 md:gap-8 border-b border-zinc-900 pb-4 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`flex items-center gap-2 text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest transition-all relative pb-2 group ${
                  activeTab === cat.id ? 'text-brand-red' : 'text-zinc-500 hover:text-brand-light'
                }`}
              >
                {cat.icon && <span className="opacity-50 group-hover:opacity-100 transition-opacity">{cat.icon}</span>}
                {cat.label}
                <div className={`absolute bottom-0 left-0 h-[2px] bg-brand-red transition-all duration-500 ${
                  activeTab === cat.id ? 'w-full' : 'w-0'
                }`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Grilla de Portafolio con Layouts Especializados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-10">
          {filteredItems.map((item, index) => {
            // Lógica de grilla para que no sea monótona
            const isReel = item.category === 'reels';
            const isMarketing = item.category === 'marketing';
            
            let gridSpan = "lg:col-span-4"; // Default
            if (isReel) gridSpan = "lg:col-span-3 row-span-2";
            if (isMarketing && index === filteredItems.length - 1) gridSpan = "lg:col-span-8";

            return (
              <div 
                key={item.id} 
                className={`group relative overflow-hidden bg-zinc-950 border border-zinc-900/50 ${gridSpan} ${
                  isReel ? 'aspect-[9/16]' : 'aspect-square md:aspect-auto md:h-[500px]'
                } animate-in fade-in slide-in-from-bottom-10 duration-700`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Imagen Principal */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />

                {/* Overlay de información técnica */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 md:opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-12">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="flex justify-between items-end gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="h-[1px] w-4 bg-brand-red"></span>
                          <span className="text-[10px] font-bold tracking-[0.3em] text-brand-red uppercase">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter text-white leading-none">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-4 text-zinc-400 text-[10px] font-medium tracking-wider">
                          <span>{item.client}</span>
                          {item.stats && (
                            <span className="px-2 py-0.5 bg-brand-red/10 border border-brand-red/20 text-brand-red rounded-full">
                              {item.stats}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Botón de acción minimalista */}
                      <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md text-white transition-all group-hover:bg-white group-hover:text-black hover:scale-110">
                        {isReel ? <Play size={16} fill="currentColor" /> : <ArrowUpRight size={20} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Efecto de borde interno de lujo */}
                <div className="absolute inset-0 border border-white/5 group-hover:border-white/10 pointer-events-none transition-colors"></div>
              </div>
            );
          })}
        </div>

        {/* Footer del bloque con Call to Action sutil */}
        <div className="mt-24 md:mt-32 pt-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-2">
              ¿Quieres ver más de nuestro trabajo?
            </p>
            <p className="text-zinc-400 text-xs font-light max-w-md">
              Actualizamos nuestro portafolio semanalmente con las últimas tendencias de la industria.
            </p>
          </div>
          
          <button className="group flex items-center gap-6 px-10 py-6 border border-zinc-800 hover:border-brand-red transition-all duration-500">
            <span className="text-xs font-heading font-bold uppercase tracking-[0.5em] text-white">Explorar Behance</span>
            <div className="w-8 h-[1px] bg-zinc-800 group-hover:w-16 group-hover:bg-brand-red transition-all duration-500"></div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;

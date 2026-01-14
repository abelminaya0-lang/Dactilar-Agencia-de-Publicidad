
import React, { useState, useRef, useEffect } from 'react';
import { Utensils, Briefcase, HeartPulse, Palette, Camera, Play, Pause, Instagram, Volume2, ChevronLeft, ChevronRight } from 'lucide-react';

interface FanCarouselProps {
  images: string[];
  category: string;
  isBranding?: boolean;
}

const FanCarousel: React.FC<FanCarouselProps> = ({ images, category, isBranding = false }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sincroniza el índice activo detectando qué imagen está más cerca del centro del contenedor
  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      const children = Array.from(container.children);
      
      let closestIndex = 0;
      let minDistance = Infinity;

      children.forEach((child, index) => {
        if (index < images.length) {
          const childElement = child as HTMLElement;
          const childCenter = childElement.offsetLeft + childElement.clientWidth / 2;
          const distance = Math.abs(containerCenter - childCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }
  };

  // Navegación con bucle infinito (Loop) para todas las categorías
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const children = container.children;
      let nextIndex = direction === 'right' ? activeIndex + 1 : activeIndex - 1;

      // Lógica de retorno (Looping)
      if (nextIndex >= images.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = images.length - 1;

      const targetElement = children[nextIndex] as HTMLElement;
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  return (
    <div className="relative group w-full">
      {/* Controles de Navegación - Persistentes y con alto Z-Index */}
      <div className="absolute inset-0 z-[110] pointer-events-none flex items-center justify-between px-4 md:px-10">
        <button 
          onClick={() => scroll('left')}
          aria-label="Anterior"
          className="pointer-events-auto w-14 h-14 md:w-24 md:h-24 rounded-full bg-black/60 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red hover:scale-110 transition-all duration-500 shadow-2xl opacity-100 md:opacity-0 md:group-hover:opacity-100 group/btn"
        >
          <ChevronLeft size={32} className="md:w-12 md:h-12 group-hover/btn:-translate-x-1 transition-transform" strokeWidth={1.5} />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          aria-label="Siguiente"
          className="pointer-events-auto w-14 h-14 md:w-24 md:h-24 rounded-full bg-black/60 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red hover:scale-110 transition-all duration-500 shadow-2xl opacity-100 md:opacity-0 md:group-hover:opacity-100 group/btn"
        >
          <ChevronRight size={32} className="md:w-12 md:h-12 group-hover/btn:translate-x-1 transition-transform" strokeWidth={1.5} />
        </button>
      </div>

      {/* Indicadores y Contador */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-[110] flex flex-col items-center gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
         <div className="bg-black/80 backdrop-blur-xl px-4 md:px-6 py-1.5 rounded-full border border-white/10 shadow-2xl">
           <span className="text-[10px] md:text-[12px] font-heading font-black text-white tracking-[0.3em] uppercase">
             {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
           </span>
         </div>
         <div className="flex gap-1.5 md:gap-2.5">
           {images.map((_, i) => (
             <div 
               key={i} 
               className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-8 md:w-12 bg-brand-red shadow-[0_0_15px_rgba(217,54,17,0.6)]' : 'w-2 md:w-3 bg-white/20'}`} 
             />
           ))}
         </div>
      </div>

      {/* Galería con Efecto Fan y Snap Alignment - Tamaño aumentado para Branding */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-0 overflow-x-auto snap-x snap-mandatory no-scrollbar perspective-[2500px] py-16 md:py-36 px-[5%] md:px-[15%]"
      >
        {images.map((img, idx) => {
          const distance = Math.abs(idx - activeIndex);
          // Reducción de rotación para Branding para mayor claridad en gran tamaño
          const rotation = (idx - activeIndex) * (isBranding ? -2 : -7);
          const scale = 1 - Math.min(distance * (isBranding ? 0.05 : 0.07), 0.3);
          const opacity = 1 - Math.min(distance * 0.15, 0.4);
          const zIndex = 100 - distance;

          return (
            <div 
              key={idx}
              className={`flex-none w-full ${isBranding ? 'md:w-[1150px]' : 'md:w-[600px]'} ${isBranding ? 'aspect-auto' : 'aspect-square md:aspect-video'} snap-center transition-all duration-1000 cubic-bezier(0.2, 1, 0.3, 1)`}
              style={{
                transform: `rotateY(${rotation}deg) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className={`w-full h-full rounded-[1.8rem] ${isBranding ? 'md:rounded-[2.5rem]' : 'md:rounded-[4.5rem]'} overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative group/img bg-[#050505]`}>
                <img 
                  src={img} 
                  alt={`${category} ${idx}`} 
                  className={`w-full h-full transition-transform duration-[6s] group-hover/img:scale-105 ${isBranding ? 'object-contain p-2 md:p-8' : 'object-cover'}`}
                  style={{ filter: 'brightness(1.1) contrast(1.05)' }} 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-10 pointer-events-none"></div>
              </div>
            </div>
          );
        })}
        {/* Espaciador para centrado correcto del último elemento */}
        <div className="flex-none w-[10%] md:w-[30%] h-full pointer-events-none"></div>
      </div>
    </div>
  );
};

const VideoReelItem: React.FC<{src: string, index: number, clientName: string, isActive: boolean, onPlay: (n: number) => void}> = ({ src, index, clientName, isActive, onPlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const getPosterUrl = (url: string) => {
    if (url.includes('cloudinary.com')) {
      return url.replace(/\.[^/.]+$/, ".jpg");
    }
    return "";
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(err => console.log(err));
      } else {
        videoRef.current.pause();
        videoRef.current.muted = true;
      }
    }
  }, [isActive]);

  return (
    <div className="relative w-full max-w-[320px] md:max-w-[600px] mx-auto group">
      {/* Eliminado el marco del celular. Ahora es un contenedor cinematográfico limpio. */}
      <div className={`relative aspect-[9/16] bg-[#050505] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_50px_120px_-20px_rgba(0,0,0,1)] transition-all duration-1000 ${isActive ? 'scale-[1.05] ring-1 ring-white/20' : 'opacity-80'}`}>
        
        <div 
          onClick={() => onPlay(isActive ? -1 : index)}
          className="relative w-full h-full cursor-pointer"
        >
          <video 
            ref={videoRef} 
            src={src} 
            loop 
            muted 
            playsInline 
            poster={getPosterUrl(src)}
            className="w-full h-full object-cover bg-zinc-950" 
          />
          
          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-50'}`}></div>
          
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className={`w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-full backdrop-blur-xl border border-white/20 transition-all duration-700 ${isActive ? 'bg-brand-red opacity-0 group-hover:opacity-100 scale-75' : 'bg-white/10 scale-100'}`}>
              {isActive ? <Pause size={30} fill="currentColor" /> : <Play size={30} fill="currentColor" className="ml-1" />}
            </div>
          </div>

          {isActive && (
            <div className="absolute top-6 md:top-10 right-6 md:right-10 z-20 animate-in fade-in zoom-in duration-500">
              <div className="flex items-center gap-2 bg-brand-red text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[10px] md:text-[12px] font-black uppercase tracking-widest shadow-2xl">
                <Volume2 size={12} /> REEL ACTIVO
              </div>
            </div>
          )}

          <div className="absolute bottom-6 md:bottom-12 left-0 w-full text-center z-10 px-6">
            <span className="text-[10px] md:text-[13px] font-heading font-black text-white uppercase tracking-[0.4em] drop-shadow-2xl leading-tight">
              {clientName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdvertisingPhotography: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const sections = [
    {
      id: 'gastro',
      title: 'Restaurantes & Gastronomía',
      description: 'Capturamos la esencia, textura y el arte culinario que despierta los sentidos.',
      icon: <Utensils size={20} className="md:w-6 md:h-6" />,
      images: [
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768277284/C_ejbr3s.jpg',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768277254/L_monjso.jpg',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768277294/G_vyymxq.jpg',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768362611/A_b2xwqc.jpg',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768362753/F_xzmk66.jpg',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768362774/H_ussith.jpg',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768362888/B_puokkg.jpg',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768362893/O_libglo.png',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768363896/D_c806er.png',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768363879/DSC00321_dpyk1k.png',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768363845/E_wfnpy2.jpg',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768363786/N_q2hvr6.jpg',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768363746/J_l6fiye.jpg'
      ]
    },
    {
      id: 'corporate',
      title: 'Fotografía Corporativa',
      description: 'Potenciamos el liderazgo y la cultura organizacional a través de retratos con autoridad.',
      icon: <Briefcase size={20} className="md:w-6 md:h-6" />,
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    {
      id: 'health',
      title: 'Salud & Bienestar',
      description: 'Luz, pureza y equilibrio para marcas que cuidan de la vida y el bienestar.',
      icon: <HeartPulse size={20} className="md:w-6 md:h-6" />,
      images: [
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768404487/IMG_9923_gd99kp.jpg',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768404541/IMG_9922_j2fryv.jpg',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768404541/IMG_9921_hl34fh.jpg'
      ]
    },
    {
      id: 'branding',
      title: 'Branding para Negocios',
      description: 'Construimos identidades visuales que trascienden. Diseño estratégico para marcas líderes.',
      icon: <Palette size={20} className="md:w-6 md:h-6" />,
      isBranding: true,
      images: [
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768364903/logo_propuestas-Dra._Mary_Taiz_2_1_igvlr8.png',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768364903/LOGO-BRANDBOARD-CARLOS_1_xfe0j2.png',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768365444/Metal_Custom_logo_2_1_oc9yn4.png',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768365445/Dra._Cano_logo_1_jhalxt.png',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768364902/LOGO-BRANDBOARD-TAMAL_1_ivrnyi.png',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768364901/Brand_board_ALIF-01_2_eesvgx.png'
      ]
    }
  ];

  const videoReelsData = [
    { src: 'https://res.cloudinary.com/drvs81bl0/video/upload/v1768416904/alamos-final-de-finales_ID09V7Pp_bkgfin.mp4', client: 'Los Álamos' },
    { src: 'https://res.cloudinary.com/drvs81bl0/video/upload/v1768279277/okami_jdrama_bys9jw.mp4', client: 'Okami Sushi Bar' },
    { src: 'https://res.cloudinary.com/drvs81bl0/video/upload/v1768281357/insomnio-sab-3_5hlJHFBQ_zxjio2.mp4', client: 'Insomnio hose music' },
    { src: 'https://res.cloudinary.com/drvs81bl0/video/upload/v1768281200/caja-huancayo-aplicativo-digital_zNx524iB_fu85dg.mp4', client: 'Caja Huancayo' },
    { src: 'https://res.cloudinary.com/drvs81bl0/video/upload/v1768281641/labrador-valentin-1_EypTPCcu_we8epy.mp4', client: 'Labrador Restaurante' },
    { src: 'https://res.cloudinary.com/drvs81bl0/video/upload/v1768282343/antonios-ubi_khKmU4JL_wafe2m.mp4', client: 'Antonio Restaurant' }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="advertising-photography" className="py-20 md:py-48 bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 px-6">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-10 md:w-16 h-[1px] bg-brand-red"></div>
            <span className="text-brand-red font-heading font-black tracking-[0.4em] md:tracking-[0.7em] text-[8px] md:text-[12px] uppercase">
              PORTAFOLIO EXCLUSIVO
            </span>
            <div className="w-10 md:w-16 h-[1px] bg-brand-red"></div>
          </div>
          <h2 className="text-[2rem] md:text-[8rem] font-heading font-[900] uppercase tracking-tighter leading-[0.9] md:leading-[0.8] text-white">
            GALERÍA <br />
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] italic">DACTILAR</span>
          </h2>
        </div>

        <div className="space-y-24 md:space-y-48">
          {sections.map((section) => (
            <div key={section.id} className="flex flex-col items-center">
              <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 mb-4 md:mb-8 max-w-3xl px-6">
                <div className="flex items-center gap-3 md:gap-5 text-brand-red mb-1">
                  <div className="p-3 md:p-4 bg-brand-red/10 rounded-xl md:rounded-2xl">
                    {section.icon}
                  </div>
                  <h3 className="text-xl md:text-6xl font-heading font-black uppercase tracking-tighter text-white">
                    {section.title}
                  </h3>
                </div>
                <p className="text-zinc-500 text-xs md:text-lg font-light max-w-2xl leading-relaxed italic">
                  {section.description}
                </p>
              </div>

              <FanCarousel images={section.images} category={section.title} isBranding={section.isBranding} />
            </div>
          ))}

          <div className="flex flex-col space-y-20 md:space-y-32 pt-16 md:pt-32 px-6">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 md:gap-6 text-brand-red">
                <Instagram size={24} className="md:w-8 md:h-8" strokeWidth={2.5} />
                <h3 className="text-3xl md:text-[7rem] font-heading font-black uppercase tracking-tighter text-white leading-none">
                  VIDEO <br className="md:hidden" /> REEL
                </h3>
              </div>
              <p className="text-zinc-500 text-xs md:text-xl max-w-3xl font-light leading-relaxed">
                Diseñamos piezas audiovisuales que dominan el algoritmo. <br className="hidden md:block" />
                Estética cinematográfica adaptada al formato vertical.
              </p>
            </div>

            <div className="flex flex-col items-center gap-20 md:gap-48 w-full max-w-[1200px] mx-auto">
              {videoReelsData.map((video, vIdx) => (
                <VideoReelItem 
                  key={vIdx} 
                  src={video.src} 
                  index={vIdx}
                  clientName={`© PROD. DACTILAR: ${video.client}`}
                  isActive={activeVideoIndex === vIdx}
                  onPlay={setActiveVideoIndex}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-48 pt-12 md:pt-20 border-t border-zinc-900 flex justify-center px-6">
           <button 
             onClick={scrollToContact}
             className="relative group w-full md:w-auto px-10 md:px-16 py-6 md:py-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden hover:bg-brand-red hover:border-brand-red transition-all duration-700 shadow-xl"
           >
              <div className="relative z-10 flex items-center justify-center gap-4 md:gap-6">
                <Camera size={18} className="md:w-6 md:h-6 text-brand-red group-hover:text-white transition-all duration-500" />
                <span className="text-[10px] md:text-[12px] font-heading font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-white">
                  EMPEZAR PROYECTO
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-brand-violet opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
           </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default AdvertisingPhotography;

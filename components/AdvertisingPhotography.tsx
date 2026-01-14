
import React, { useState, useRef, useEffect } from 'react';
import { Utensils, Briefcase, HeartPulse, Camera, Play, Pause, Instagram, Volume2, ChevronLeft, ChevronRight } from 'lucide-react';

interface FanCarouselProps {
  images: string[];
  category: string;
}

const FanCarousel: React.FC<FanCarouselProps> = ({ images, category }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const itemWidth = window.innerWidth < 768 ? clientWidth : 600;
      // Compensamos el padding inicial para calcular el índice correctamente
      const index = Math.round(scrollLeft / itemWidth);
      if (index !== activeIndex && index >= 0 && index < images.length) {
        setActiveIndex(index);
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth, scrollWidth } = scrollRef.current;
      const itemWidth = window.innerWidth < 768 ? clientWidth : 600;
      
      if (direction === 'right') {
        // Si estamos en la última foto, volvemos a la primera
        if (activeIndex === images.length - 1) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          scrollRef.current.scrollBy({
            left: itemWidth,
            behavior: 'smooth'
          });
        }
      } else {
        // Si estamos en la primera foto, vamos a la última
        if (activeIndex === 0) {
          scrollRef.current.scrollTo({
            left: scrollWidth,
            behavior: 'smooth'
          });
        } else {
          scrollRef.current.scrollBy({
            left: -itemWidth,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <div className="relative group w-full">
      <button 
        onClick={() => scroll('left')}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-brand-red transition-all duration-500 shadow-2xl opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={() => scroll('right')}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-brand-red transition-all duration-500 shadow-2xl opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-0 overflow-x-auto snap-x snap-mandatory no-scrollbar perspective-[1200px] py-10 md:py-16 px-[10%] md:px-[35%]"
        style={{ scrollBehavior: 'smooth' }}
      >
        {images.map((img, idx) => {
          const distance = Math.abs(idx - activeIndex);
          const rotation = (idx - activeIndex) * -12;
          const scale = 1 - Math.min(distance * 0.12, 0.35);
          const opacity = 1 - Math.min(distance * 0.3, 0.6);
          const zIndex = 50 - distance;

          return (
            <div 
              key={idx}
              className="flex-none w-full md:w-[600px] aspect-square snap-center transition-all duration-700 ease-out"
              style={{
                transform: `rotateY(${rotation}deg) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="w-full h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.7)] relative group/img">
                <img 
                  src={img} 
                  alt={`${category} ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-[4s] group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-30 pointer-events-none"></div>
              </div>
            </div>
          );
        })}
        <div className="flex-none w-[10%] md:w-[20%] h-full"></div>
      </div>
    </div>
  );
};

const VideoReelItem: React.FC<{src: string, index: number, clientName: string, isActive: boolean, onPlay: (n: number) => void}> = ({ src, index, clientName, isActive, onPlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Generar URL de portada (poster) para videos de Cloudinary
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
    <div className="relative w-full max-w-[320px] mx-auto group">
      {/* Smartphone Frame Wrapper */}
      <div className={`relative aspect-[9/19.5] bg-[#0a0a0a] rounded-[3rem] p-3 border-[6px] border-[#1a1a1a] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] transition-all duration-700 ${isActive ? 'scale-[1.05] ring-2 ring-brand-red/30' : 'hover:scale-[1.02]'}`}>
        
        {/* Notch / Speaker */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0a0a0a] rounded-full z-30 flex items-center justify-center gap-2">
           <div className="w-8 h-1 bg-[#1a1a1a] rounded-full"></div>
           <div className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full"></div>
        </div>

        {/* Screen Content */}
        <div 
          onClick={() => onPlay(isActive ? -1 : index)}
          className="relative w-full h-full rounded-[2.2rem] overflow-hidden cursor-pointer"
        >
          <video 
            ref={videoRef} 
            src={src} 
            loop 
            muted 
            playsInline 
            poster={getPosterUrl(src)}
            className="w-full h-full object-cover bg-zinc-900" 
          />
          
          {/* Overlay when not active */}
          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-60'}`}></div>
          
          {/* Central Play/Pause Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className={`w-16 h-16 flex items-center justify-center rounded-full backdrop-blur-md border border-white/30 transition-all duration-500 ${isActive ? 'bg-brand-red opacity-0 group-hover:opacity-100 scale-75' : 'bg-white/20 scale-100'}`}>
              {isActive ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
            </div>
          </div>

          {/* Audio Indicator */}
          {isActive && (
            <div className="absolute top-12 right-4 z-20 animate-in fade-in zoom-in duration-300">
              <div className="flex items-center gap-2 bg-brand-red/90 text-white px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest backdrop-blur-sm">
                <Volume2 size={10} /> LIVE
              </div>
            </div>
          )}

          {/* Bottom Label */}
          <div className="absolute bottom-10 left-0 w-full text-center z-10 px-4">
            <span className="text-[10px] font-bold text-white/90 uppercase tracking-[0.3em] drop-shadow-lg leading-tight px-4 block">
              {clientName}
            </span>
          </div>
        </div>

        {/* Home Bar (iPhone style) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full z-30"></div>
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
      icon: <Utensils size={20} />,
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
      title: 'Fotografía Corporativa & Marca personal',
      description: 'Potenciamos el liderazgo y la cultura organizacional a través de retratos con autoridad.',
      icon: <Briefcase size={20} />,
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    {
      id: 'health',
      title: 'Fotografía para Salud & Bienestar',
      description: 'Luz, pureza y equilibrio para marcas que cuidan de la vida y el bienestar.',
      icon: <HeartPulse size={20} />,
      images: [
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519824141121-99767218abb2?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
      ]
    }
  ];

  const videoReelsData = [
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
    <section id="advertising-photography" className="py-24 md:py-32 bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="flex flex-col items-center text-center mb-16 px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-brand-red"></div>
            <span className="text-brand-red font-heading font-bold tracking-[0.5em] text-[10px] uppercase">
              Excelencia Visual
            </span>
          </div>
          <h2 className="text-[2.2rem] md:text-[6rem] font-heading font-[900] uppercase tracking-tighter leading-[0.9] text-white">
            Fotografía <br />
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(252,252,252,0.6)] italic">Publicitaria</span>
          </h2>
        </div>

        <div className="space-y-12 md:space-y-20">
          {sections.map((section) => (
            <div key={section.id} className="flex flex-col items-center">
              <div className="flex flex-col items-center text-center space-y-4 mb-2 max-w-2xl px-6">
                <div className="flex items-center gap-4 text-brand-red">
                  {section.icon}
                  <h3 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tight text-white">
                    {section.title}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm md:text-base font-light italic">
                  {section.description}
                </p>
              </div>

              <FanCarousel images={section.images} category={section.title} />
            </div>
          ))}

          <div className="flex flex-col space-y-24 pt-24 px-6">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex items-center gap-4 text-brand-red">
                <Instagram size={24} />
                <h3 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight text-white">
                  Producción de Reels & Video
                </h3>
              </div>
              <p className="text-zinc-400 text-sm md:text-lg max-w-2xl font-light">
                Contenido dinámico diseñado para impactar en segundos. Estrategia visual exclusiva para redes sociales.
              </p>
            </div>

            <div className="flex flex-col items-center gap-24 md:gap-32 w-full max-w-[1000px] mx-auto">
              {videoReelsData.map((video, vIdx) => (
                <VideoReelItem 
                  key={vIdx} 
                  src={video.src} 
                  index={vIdx}
                  clientName={`Cliente: ${video.client}`}
                  isActive={activeVideoIndex === vIdx}
                  onPlay={setActiveVideoIndex}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-zinc-900 flex justify-center">
           <button 
             onClick={scrollToContact}
             className="flex items-center gap-4 group px-12 py-5 bg-white/5 border border-white/10 rounded-full hover:bg-brand-red hover:border-brand-red transition-all duration-500 shadow-xl"
           >
              <Camera size={18} className="text-brand-red group-hover:text-white group-hover:rotate-12 transition-all" />
              <span className="text-[11px] font-heading font-bold uppercase tracking-[0.4em] text-white group-hover:text-white transition-colors">
                quiero grabar con ustedes
              </span>
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

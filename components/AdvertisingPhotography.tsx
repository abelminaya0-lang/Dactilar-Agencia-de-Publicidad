
import React, { useState, useRef, useEffect } from 'react';
import { Utensils, Briefcase, HeartPulse, Camera, Play, Pause, Instagram, Volume2 } from 'lucide-react';

interface VideoReelItemProps {
  src: string;
  index: number;
  isActive: boolean;
  onPlay: (index: number) => void;
}

const VideoReelItem: React.FC<VideoReelItemProps> = ({ src, index, isActive, onPlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(err => console.log("Playback error:", err));
      } else {
        videoRef.current.pause();
        videoRef.current.muted = true;
      }
    }
  }, [isActive]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isActive) {
      onPlay(index);
    } else {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }
  };

  return (
    <div 
      onClick={handleToggle}
      className={`relative aspect-[9/16] bg-zinc-900 rounded-2xl overflow-hidden group shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] border transition-all duration-700 cursor-pointer w-full mx-auto ${
        isActive ? 'border-brand-red/60 scale-[1.02] z-10' : 'border-white/10 opacity-100 hover:border-white/30'
      }`}
    >
      <video 
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className={`w-full h-full object-cover transition-all duration-1000 ${isActive ? 'scale-105' : 'scale-100'}`}
      />
      
      {/* Overlay Gradients - Lightened */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 transition-opacity duration-500 ${isActive ? 'opacity-20' : 'opacity-60'}`}></div>
      
      {/* Play/Pause Button */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div 
          className={`w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full backdrop-blur-md border border-white/30 transition-all duration-500 ${
            isActive 
            ? 'bg-brand-red text-white scale-90 opacity-0 group-hover:opacity-100' 
            : 'bg-white/20 text-white group-hover:scale-110 group-hover:bg-brand-red shadow-2xl'
          }`}
        >
          {isActive ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
        </div>
      </div>

      {/* Audio Status Badge */}
      {isActive && (
        <div className="absolute top-6 right-6 z-20 animate-in fade-in zoom-in duration-300">
          <div className="flex items-center gap-2 bg-brand-red text-white px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-2xl">
            <Volume2 size={12} />
            Audio Activo
          </div>
        </div>
      )}

      {/* Label Info */}
      <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-10 pointer-events-none">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-white uppercase tracking-[0.4em] drop-shadow-md">PRODUCCIÓN 0{index + 1}</span>
          {!isActive && (
            <span className="text-[9px] text-white/80 font-medium uppercase mt-2 tracking-wider drop-shadow-sm">Click para reproducir con sonido</span>
          )}
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
      icon: <Utensils size={20} />,
      images: [
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768277284/C_ejbr3s.jpg',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768277254/L_monjso.jpg',
        'https://res.cloudinary.com/drvs81bl0/image/upload/v1768277294/G_vyymxq.jpg'
      ]
    },
    {
      id: 'corporate',
      title: 'Fotografía Corporativa & Profesional',
      description: 'Potenciamos el liderazgo y la cultura organizacional a través de retratos con autoridad.',
      icon: <Briefcase size={20} />,
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop'
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
        'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop'
      ]
    }
  ];

  const videoReels = [
    'https://res.cloudinary.com/drvs81bl0/video/upload/v1768279277/okami_jdrama_bys9jw.mp4',
    'https://res.cloudinary.com/drvs81bl0/video/upload/v1768281357/insomnio-sab-3_5hlJHFBQ_zxjio2.mp4',
    'https://res.cloudinary.com/drvs81bl0/video/upload/v1768281200/caja-huancayo-aplicativo-digital_zNx524iB_fu85dg.mp4',
    'https://res.cloudinary.com/drvs81bl0/video/upload/v1768281641/labrador-valentin-1_EypTPCcu_we8epy.mp4',
    'https://res.cloudinary.com/drvs81bl0/video/upload/v1768282343/antonios-ubi_khKmU4JL_wafe2m.mp4'
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="advertising-photography" className="py-24 md:py-32 px-4 md:px-16 bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Main Title Section */}
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-brand-red"></div>
            <span className="text-brand-red font-heading font-bold tracking-[0.5em] text-[10px] uppercase">
              Mi portafolio
            </span>
          </div>
          <h2 className="text-[2rem] md:text-[5rem] font-heading font-[900] uppercase tracking-tighter leading-[0.9] text-white">
            Fotografía <br />
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(242,242,242,0.6)] italic text-[1.8rem] md:text-[4.5rem]">PUBLICITARIA</span>
          </h2>
        </div>

        {/* Dynamic Blocks Section */}
        <div className="space-y-32">
          {sections.map((section, sIdx) => (
            <div key={section.id} className="flex flex-col space-y-12">
              
              {/* Category Header */}
              <div className={`flex flex-col ${sIdx % 2 !== 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} space-y-4`}>
                <div className="flex items-center gap-4 text-brand-red">
                  {section.icon}
                  <h3 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-tight text-white">
                    {section.title}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm md:text-base max-w-xl font-light">
                  {section.description}
                </p>
              </div>

              {/* Image Grid - Grayscale Removed for Vibrancy */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                {/* Main Large Image */}
                <div className={`md:col-span-7 overflow-hidden rounded-sm group relative ${sIdx % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <img 
                    src={section.images[0]} 
                    alt={section.title} 
                    className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Two smaller images stacked */}
                <div className="md:col-span-5 grid grid-rows-2 gap-6 h-full">
                  <div className="overflow-hidden rounded-sm group relative">
                    <img 
                      src={section.images[1]} 
                      alt={section.title} 
                      className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="overflow-hidden rounded-sm group relative">
                    <img 
                      src={section.images[2]} 
                      alt={section.title} 
                      className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* BLOQUE: Producción de Reels & Video - Vertical Stack */}
          <div className="flex flex-col space-y-16 pt-12">
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

            {/* Vertical Stack of Reels */}
            <div className="flex flex-col items-center gap-20 max-w-lg mx-auto w-full px-4">
              {videoReels.map((video, vIdx) => (
                <VideoReelItem 
                  key={vIdx} 
                  src={video} 
                  index={vIdx} 
                  isActive={activeVideoIndex === vIdx}
                  onPlay={setActiveVideoIndex}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Action Link to BookingSection */}
        <div className="mt-24 pt-12 border-t border-zinc-900 flex justify-center">
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
    </section>
  );
};

export default AdvertisingPhotography;

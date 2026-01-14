
import React, { useEffect, useRef } from 'react';

const VideoAction: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Forzamos el play silencioso para asegurar el autoplay en todos los navegadores
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("El autoplay fue bloqueado. Requiere interacción del usuario para sonido.");
        });
      }
    }
  }, []);

  const scrollToPhotography = () => {
    const photographySection = document.getElementById('advertising-photography');
    if (photographySection) {
      photographySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="video-action" className="relative z-30 -mt-44 md:-mt-80 pb-20 md:pb-32 pt-0 flex flex-col items-center justify-center bg-transparent overflow-visible px-6">
      {/* Decorative Glows - Optimized for deep overlap */}
      <div className="absolute top-0 left-[-5%] w-[50%] h-[50%] bg-brand-red/10 blur-[180px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-4 md:gap-8">
        
        {/* Brand Label Above Video - Adjusted for better spacing */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 mb-2">
          <h2 className="text-white/90 font-heading font-black text-[9px] md:text-[15px] uppercase tracking-[0.6em] md:tracking-[0.9em] leading-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            DACTILAR AGENCIA DE PUBLICIDAD
          </h2>
        </div>

        {/* The Video Container - Muted for Autoplay and No Loop to stop at end */}
        <div className="w-full relative rounded-2xl md:rounded-[4rem] overflow-hidden border-[1px] border-white/20 shadow-[0_60px_120px_rgba(0,0,0,0.9),0_0_100px_rgba(217,54,17,0.15)] bg-black">
          <video 
            ref={videoRef}
            src="https://res.cloudinary.com/drvs81bl0/video/upload/v1768021333/video_anotny_Hecho_con_Clipchamp_pnjvme.mp4"
            autoPlay 
            muted
            playsInline
            controls
            className="w-full h-auto block"
          >
            Tu navegador no soporta el elemento de video.
          </video>
          {/* Subtle inner shadow for depth */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]"></div>
        </div>

        {/* Action Button Section */}
        <div className="w-full max-w-md flex flex-col items-center gap-6 md:gap-8 mt-2">
          
          {/* Unified Primary Button - Ahora desliza a Fotografía Publicitaria */}
          <button
            onClick={scrollToPhotography}
            className="group relative w-full px-12 py-6 md:py-7 border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-500 rounded-2xl font-heading font-bold text-[11px] md:text-[13px] uppercase tracking-[0.4em] flex items-center justify-center overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.6)] active:scale-95"
          >
            <span className="relative z-10">Ver Portafolio</span>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </button>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 md:w-10 h-[1px] bg-brand-red/60 animate-pulse"></div>
            <p className="text-center text-zinc-500 font-heading font-bold text-[8px] md:text-[10px] uppercase tracking-[0.5em]">
              Innovación • Estrategia • Resultados
            </p>
          </div>
        </div>
      </div>

      <style>{`
        video::-webkit-media-controls-panel {
          background-image: linear-gradient(transparent, rgba(0,0,0,0.95));
        }
      `}</style>
    </section>
  );
};

export default VideoAction;

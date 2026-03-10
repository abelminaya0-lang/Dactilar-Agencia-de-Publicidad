import React, { useEffect, useRef } from 'react';

const VideoAction: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = async () => {
      try {
        video.muted = true; // Iniciar muteado para cumplir políticas de navegador
        await video.play();
      } catch (error) {
        console.error("Autoplay prevented:", error);
      }
    };

    attemptPlay();

    const handleFirstInteraction = () => {
      if (video) {
        video.muted = false;
        video.volume = 1.0;
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const scrollToPhotography = () => {
    const photographySection = document.getElementById('advertising-photography');
    if (photographySection) {
      photographySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="video-action" className="relative z-30 -mt-80 md:-mt-64 lg:-mt-72 pb-20 md:pb-32 lg:pb-36 pt-24 md:pt-0 flex flex-col items-center justify-center bg-transparent overflow-visible px-6">
      <div className="absolute top-0 left-[-5%] w-[50%] h-[50%] bg-brand-red/10 blur-[180px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl flex flex-col items-center gap-6 md:gap-8 lg:gap-8">
        
        <div className="flex flex-col items-center gap-2 md:gap-4 lg:gap-3 mb-2">
          <span className="text-brand-red font-heading font-black tracking-[0.5em] text-[8px] md:text-[12px] lg:text-[11px] uppercase animate-pulse">
            Impacto Visual
          </span>
          <h2 
            className="text-white font-heading font-black text-[1.4rem] md:text-[2.8rem] lg:text-[2.2rem] xl:text-[2.8rem] uppercase tracking-tighter leading-none text-center"
            style={{ textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}
          >
            AGENCIA DE PUBLICIDAD
          </h2>
        </div>

        <div className="w-full relative rounded-2xl md:rounded-[4rem] lg:rounded-[3rem] overflow-hidden border-[1px] border-white/20 shadow-[0_60px_120px_rgba(0,0,0,0.9)] bg-black transition-all duration-700">
          <video 
            ref={videoRef}
            autoPlay 
            playsInline
            controls
            loop
            muted
            preload="auto"
            className="w-full h-auto block"
          >
            <source src="https://res.cloudinary.com/dhcgob2tx/video/upload/v1771985154/video_anotny_Hecho_con_Clipchamp_l0si4s.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]"></div>
        </div>

        <div className="w-full max-w-md lg:max-w-sm flex flex-col items-center gap-6 md:gap-8 mt-2 lg:mt-4">
          <button
            onClick={scrollToPhotography}
            className="group relative w-full px-12 py-6 md:py-7 lg:py-5 border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-500 rounded-2xl lg:rounded-2xl font-heading font-bold text-[11px] md:text-[13px] lg:text-[11px] uppercase tracking-[0.4em] flex items-center justify-center overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
          >
            <span className="relative z-10">Ver Portafolio</span>
          </button>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 md:w-10 lg:w-8 h-[1px] bg-brand-red/60"></div>
            <p className="text-center text-zinc-500 font-heading font-bold text-[8px] md:text-[10px] lg:text-[10px] uppercase tracking-[0.5em]">
              Innovación • Estrategia • Resultados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAction;
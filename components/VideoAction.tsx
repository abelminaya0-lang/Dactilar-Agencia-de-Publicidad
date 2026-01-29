import React, { useEffect, useRef } from 'react';

const VideoAction: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = async () => {
      try {
        video.volume = 1.0;
        video.muted = false;
        await video.play();
      } catch (error) {
        video.muted = true;
        video.play();
      }
    };

    attemptPlay();

    const handleFirstInteraction = () => {
      if (video && video.muted) {
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
    <section id="video-action" className="relative z-30 -mt-32 md:-mt-64 lg:-mt-72 pb-20 md:pb-32 lg:pb-36 pt-0 flex flex-col items-center justify-center bg-transparent overflow-visible px-6">
      <div className="absolute top-0 left-[-5%] w-[50%] h-[50%] bg-brand-red/10 blur-[180px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
        
        <div className="flex flex-col items-center gap-2 md:gap-4 lg:gap-5 mb-2">
          <span className="text-brand-red font-heading font-black tracking-[0.5em] text-[8px] md:text-[12px] lg:text-[13px] uppercase animate-pulse">
            Impacto Visual
          </span>
          <h2 
            className="text-white font-heading font-black text-[1.4rem] md:text-[2.8rem] lg:text-[2.6rem] xl:text-[3.2rem] uppercase tracking-tighter leading-none text-center"
            style={{ textShadow: '0 10px 30px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.1)' }}
          >
            AGENCIA DE PUBLICIDAD
          </h2>
        </div>

        <div className="w-full relative rounded-2xl md:rounded-[4rem] lg:rounded-[4.5rem] overflow-hidden border-[1px] border-white/20 shadow-[0_60px_120px_rgba(0,0,0,0.9),0_0_100px_rgba(217,54,17,0.15)] bg-black transition-all duration-700">
          <video 
            ref={videoRef}
            src="https://res.cloudinary.com/drvs81bl0/video/upload/v1768021333/video_anotny_Hecho_con_Clipchamp_pnjvme.mp4"
            autoPlay 
            playsInline
            controls
            className="w-full h-auto block"
          >
            Tu navegador no soporta el elemento de video.
          </video>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]"></div>
        </div>

        <div className="w-full max-w-md lg:max-w-lg flex flex-col items-center gap-6 md:gap-8 mt-2 lg:mt-6">
          <button
            onClick={scrollToPhotography}
            className="group relative w-full px-12 py-6 md:py-7 lg:py-7 border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-500 rounded-2xl lg:rounded-3xl font-heading font-bold text-[11px] md:text-[13px] lg:text-[14px] uppercase tracking-[0.4em] flex items-center justify-center overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.6)] active:scale-95"
          >
            <span className="relative z-10">Ver Portafolio</span>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </button>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 md:w-10 lg:w-12 h-[1px] bg-brand-red/60 animate-pulse"></div>
            <p className="text-center text-zinc-500 font-heading font-bold text-[8px] md:text-[10px] lg:text-[11px] uppercase tracking-[0.5em]">
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
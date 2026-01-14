
import React from 'react';
import { Instagram, Facebook, Tiktok, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black pt-24 pb-12 px-8 lg:px-16 border-t border-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
        <div className="col-span-1 md:col-span-3">
          <a href="#" className="mb-8 block group">
            <img 
              src="https://res.cloudinary.com/drvs81bl0/image/upload/v1767934726/LOGO_2026-02_yb66me.png" 
              alt="Dactilar Logo" 
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
          <p className="text-brand-gray max-w-md text-sm leading-relaxed mb-8">
            Dactilar Agencia de Publicidad. Especialistas en creación de contenido profesional, branding y performance. Ayudamos a empresas a crecer con estrategia y creatividad.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/share/1GJykLZjFJ/?mibextid=wwXIfr" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-brand-red hover:border-brand-red hover:text-white transition-all text-brand-gray"
            >
              <span className="sr-only">Facebook</span>
              <Facebook size={18} />
            </a>
            <a 
              href="https://www.instagram.com/dactilaragencia?igsh=MXZoeHVmcGc0bGFoMw==" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-brand-red hover:border-brand-red hover:text-white transition-all text-brand-gray"
            >
              <span className="sr-only">Instagram</span>
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.tiktok.com/@dactilar.publicidad.mkt?_r=1&_t=ZS-934bfZmjLiT" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-brand-red hover:border-brand-red hover:text-white transition-all text-brand-gray"
            >
              <span className="sr-only">TikTok</span>
              <Tiktok size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-zinc-900 text-brand-gray text-[10px] font-bold uppercase tracking-[0.2em]">
        <p>© 2026 Dactilar Agencia de Publicidad. Todos los derechos reservados.</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 hover:text-brand-red transition-colors"
        >
          Volver arriba <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

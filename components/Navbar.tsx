
import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Galería', href: '#advertising-photography' },
    { name: 'Equipo', href: '#team' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-8 lg:px-16 py-6 flex justify-between items-center ${
        isScrolled ? 'bg-black/95 backdrop-blur-xl py-4' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-12">
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="https://res.cloudinary.com/drvs81bl0/image/upload/v1767934726/LOGO_2026-02_yb66me.png" 
            alt="Dactilar Logo" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>
        <div className="hidden lg:flex gap-8 text-[11px] font-heading font-bold uppercase tracking-[0.25em] text-brand-gray">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-brand-red transition-all duration-300 relative group/link"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-red transition-all duration-300 group-hover/link:w-full"></span>
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="hidden lg:block text-brand-gray hover:text-brand-light transition-colors">
          <Search size={18} strokeWidth={2} />
        </button>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-brand-light hover:text-brand-red transition-colors relative z-[101]"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-6 z-[100] animate-in fade-in duration-500 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-red/20 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-violet/20 blur-[120px] rounded-full animate-pulse delay-700"></div>
          </div>
          
          {navLinks.map((link, idx) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter hover:text-brand-red text-brand-light transition-all duration-300 transform hover:scale-110"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <div className="mt-12 flex gap-8">
            <a href="https://www.instagram.com/dactilaragencia" target="_blank" className="text-brand-gray hover:text-white transition-colors text-xs font-heading font-bold tracking-widest uppercase">Instagram</a>
            <a href="https://www.facebook.com/share/1GJykLZjFJ/" target="_blank" className="text-brand-gray hover:text-white transition-colors text-xs font-heading font-bold tracking-widest uppercase">Facebook</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

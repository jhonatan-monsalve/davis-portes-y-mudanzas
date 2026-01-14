
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a className="flex items-center gap-3 group" href="#inicio">
            <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">local_shipping</span>
            </div>
            <div>
              <h1 className="text-text-main text-lg sm:text-xl font-black leading-tight tracking-tight uppercase">David</h1>
              <p className="text-text-muted text-[10px] font-bold tracking-widest uppercase">Portes y Mudanzas</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a className="text-sm font-bold text-text-main hover:text-primary transition-colors" href="#inicio">Inicio</a>
            <a className="text-sm font-bold text-text-main hover:text-primary transition-colors" href="#servicios">Servicios</a>
            <a className="text-sm font-bold text-text-main hover:text-primary transition-colors" href="#zonas">Zonas de Trabajo</a>
            <a className="text-sm font-bold text-text-main hover:text-primary transition-colors" href="#elegirnos">Por qué elegirnos</a>
            <a className="text-sm font-bold text-text-main hover:text-primary transition-colors" href="#presupuesto">Presupuesto</a>
          </div>

          <div className="flex items-center gap-3">
            <a className="hidden sm:flex group items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold shadow-sm hover:shadow-md" href="tel:+34609885058">
              <span className="material-symbols-outlined mr-2 text-[20px]">call</span>
              <span className="truncate">Llamar ahora</span>
            </a>
            <a className="sm:hidden flex items-center justify-center size-10 rounded-lg bg-primary text-white shadow-sm" href="tel:+34609885058">
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

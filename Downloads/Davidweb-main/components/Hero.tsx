
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-surface lg:min-h-[600px] flex items-center" id="inicio">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <img 
          alt="White moving van" 
          className="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
        />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="max-w-2xl flex flex-col gap-6 lg:gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-whatsapp animate-pulse"></span>
            <span className="text-white text-xs font-bold tracking-wide uppercase">Disponible Ahora</span>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              Portes, Trasteos y Mudanzas en <span className="text-secondary">Los Alcázares</span> y toda España
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
              Servicio rápido, económico y de confianza. Cuidamos tus muebles y enseres como si fueran nuestros. Presupuesto sin compromiso.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a className="flex items-center justify-center h-14 px-8 rounded-lg bg-whatsapp hover:bg-whatsapp-dark transition-all text-white text-base font-bold shadow-lg shadow-whatsapp/20 hover:scale-[1.02] transform" href="https://wa.me/34609885058">
              <img alt="WhatsApp Logo" className="w-6 h-6 mr-3 filter brightness-0 invert" src="https://cdn-icons-png.flaticon.com/512/733/733585.png" />
              <span>WhatsApp Presupuesto</span>
            </a>
            <a className="flex items-center justify-center h-14 px-8 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold transition-all hover:scale-[1.02] transform" href="tel:+34609885058">
              <span className="material-symbols-outlined mr-2">phone_in_talk</span>
              <span>Llamar Ahora</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-6 text-white/90 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">verified</span>
              <span>Seguro incluido</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">schedule</span>
              <span>Puntualidad</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">savings</span>
              <span>Precios justos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

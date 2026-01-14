
import React from 'react';

const BudgetCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="presupuesto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="size-16 rounded-2xl bg-whatsapp/10 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-5xl text-whatsapp">chat</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-text-main mb-6 tracking-tight leading-tight">
          ¿Necesitas un presupuesto urgente?
        </h2>
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
          Envíanos fotos de lo que necesitas transportar por WhatsApp y te daremos un precio al instante. Sin esperas.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a className="w-full sm:w-auto flex items-center justify-center h-16 px-10 rounded-xl bg-whatsapp hover:bg-whatsapp-dark transition-all text-white text-lg font-bold shadow-xl shadow-whatsapp/20 hover:-translate-y-1" href="https://wa.me/34609885058">
            <img alt="WhatsApp" className="w-7 h-7 mr-3 filter brightness-0 invert" src="https://cdn-icons-png.flaticon.com/512/733/733585.png" />
            <span>Pedir Presupuesto WhatsApp</span>
          </a>
          <a className="w-full sm:w-auto flex items-center justify-center h-16 px-10 rounded-xl bg-surface hover:bg-gray-100 border-2 border-gray-200 text-text-main text-lg font-bold transition-all hover:-translate-y-1" href="tel:+34609885058">
            <span className="material-symbols-outlined mr-2">call</span>
            <span>Llamar por Teléfono</span>
          </a>
        </div>
        <p className="mt-8 text-sm text-text-muted font-medium bg-surface py-2 px-4 rounded-full">
          Atendemos todos los días de <span className="text-primary font-bold">08:00 a 20:00h</span>
        </p>
      </div>
    </section>
  );
};

export default BudgetCTA;

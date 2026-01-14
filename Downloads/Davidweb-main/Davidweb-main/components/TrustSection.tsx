
import React from 'react';

const TrustSection: React.FC = () => {
  const values = [
    {
      icon: 'schedule_send',
      title: 'Puntualidad',
      description: 'Respetamos tu tiempo. Llegamos a la hora acordada sin excusas.'
    },
    {
      icon: 'verified_user',
      title: 'Cuidado Total',
      description: 'Embalaje profesional y manipulación cuidadosa de tus pertenencias.'
    },
    {
      icon: 'euro',
      title: 'Precio Cerrado',
      description: 'Presupuestos transparentes. Lo que acordamos es lo que pagas.'
    },
    {
      icon: 'engineering',
      title: 'Profesionalidad',
      description: 'Equipo con experiencia y herramientas adecuadas para cada trabajo.'
    }
  ];

  return (
    <section className="py-16 bg-primary text-white" id="elegirnos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4 p-4">
              <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm border border-white/5">
                <span className="material-symbols-outlined text-4xl text-secondary">{value.icon}</span>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

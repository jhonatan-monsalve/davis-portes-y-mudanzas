
import React from 'react';

const AreaSection: React.FC = () => {
  const locations = [
    { name: 'Los Alcázares', icon: 'location_on', highlight: true },
    { name: 'San Javier', icon: 'location_on' },
    { name: 'Torre Pacheco', icon: 'location_on' },
    { name: 'Cartagena', icon: 'location_on' },
    { name: 'San Pedro del Pinatar', icon: 'location_on' },
    { name: 'Cobertura Nacional', icon: 'rocket_launch', secondary: true }
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface relative overflow-hidden" id="zonas">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-[0.03] select-none pointer-events-none">
        <span className="material-symbols-outlined text-[400px]">public</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="flex-1 flex flex-col gap-6 justify-center">
            <h2 className="text-text-main text-3xl sm:text-4xl font-black leading-tight">
              Nuestra Zona de Actuación
            </h2>
            <p className="text-text-muted text-lg">
              Nuestra base está en <strong className="text-primary font-bold">Los Alcázares</strong>, lo que nos permite ofrecer precios muy competitivos en toda la zona del Mar Menor.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {locations.map((loc, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm transition-transform hover:scale-[1.02]">
                  <span className={`material-symbols-outlined ${loc.secondary ? 'text-secondary' : 'text-primary'}`}>{loc.icon}</span>
                  <span className="font-bold text-text-main">{loc.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full flex flex-col gap-4">
            <div className="w-full aspect-[4/3] sm:aspect-video lg:aspect-square lg:max-h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              {/* Note: In a real app, this would be a proper Google Maps API integration or a static iframe with a real map link */}
              <iframe 
                className="w-full h-full" 
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12644.200388279883!2d-0.8524317!3d37.7419137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63158c8c5c4d61%3A0xc3f56e098845233!2s30710%20Los%20Alc%C3%A1zares%2C%20Murcia%2C%20Spain!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                loading="lazy" 
                style={{ border: 0 }}
              />
            </div>
            <a 
              className="flex items-center justify-center w-full rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-text-main hover:bg-gray-50 font-bold py-4 px-6 shadow-sm hover:shadow-md transition-all gap-2.5 group" 
              href="https://maps.google.com/?q=Los+Alcazares+Murcia" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[#EA4335] group-hover:scale-110 transition-transform">location_on</span>
              <span>Ver en Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaSection;

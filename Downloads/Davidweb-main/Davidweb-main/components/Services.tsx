
import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="group flex flex-col gap-4 rounded-xl border border-gray-100 bg-surface p-6 hover:shadow-lg transition-all duration-300">
    <div className="flex size-12 items-center justify-center rounded-lg bg-white text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-text-main text-xl font-bold">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: 'package_2',
      title: 'Pequeños Portes',
      description: 'Ideal para mover pocas cajas, electrodomésticos sueltos o compras de grandes almacenes.'
    },
    {
      icon: 'local_shipping',
      title: 'Mudanzas Locales',
      description: 'Traslados rápidos y eficientes en la zona del Mar Menor, Cartagena y Murcia capital.'
    },
    {
      icon: 'map',
      title: 'Mudanzas Nacionales',
      description: 'Rutas programadas a Madrid, Barcelona, Valencia y cualquier punto de la península.'
    },
    {
      icon: 'construction',
      title: 'Montaje y Desmontaje',
      description: 'Personal cualificado para desmontar, proteger y volver a armar tus muebles con seguridad.'
    },
    {
      icon: 'delete_sweep',
      title: 'Vaciado de Pisos',
      description: 'Retirada de enseres viejos al punto limpio. Ideal para ventas de inmuebles o herencias.'
    },
    {
      icon: 'storefront',
      title: 'Servicio Empresas',
      description: 'Logística para oficinas y negocios. Transporte de mercancías y distribución local.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-text-main text-3xl sm:text-4xl font-black leading-tight tracking-tight">
              Soluciones de Transporte a Medida
            </h2>
            <p className="text-text-muted text-lg font-normal leading-relaxed">
              No importa si es una caja o una casa entera. Ofrecemos una gama completa de servicios para particulares y empresas en la Región de Murcia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

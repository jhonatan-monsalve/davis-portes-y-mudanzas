
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-secondary">local_shipping</span>
              <h3 className="text-2xl font-black tracking-tight uppercase">David</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Tu empresa de confianza para mudanzas y transportes en el Mar Menor. Eficiencia, rapidez y buen trato garantizado.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-secondary">Contacto</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-white/80">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>Los Alcázares, Murcia, España</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="material-symbols-outlined text-sm">call</span>
                <a className="hover:text-white transition-colors" href="tel:+34609885058">+34 609 885 058</a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <span className="material-symbols-outlined text-sm">mail</span>
                <a className="hover:text-white transition-colors" href="mailto:hola@davidmudanzas.com">hola@davidmudanzas.com</a>
              </li>
            </ul>
          </div>

          {/* Service Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-secondary">Servicios</h4>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li><a className="hover:text-white transition-colors" href="#servicios">Mudanzas de Hogar</a></li>
              <li><a className="hover:text-white transition-colors" href="#servicios">Traslados de Oficina</a></li>
              <li><a className="hover:text-white transition-colors" href="#servicios">Portes Económicos</a></li>
              <li><a className="hover:text-white transition-colors" href="#servicios">Vaciado de Pisos</a></li>
            </ul>
          </div>
        </div>

        {/* Legal and Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2024 David Portes y Mudanzas. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="#">Aviso Legal</a>
            <a className="hover:text-white transition-colors" href="#">Política de Privacidad</a>
            <a className="hover:text-white transition-colors" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

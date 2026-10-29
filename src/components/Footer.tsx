import { WhatsAppIcon } from './WhatsAppIcon';
import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowUp, ArrowUpRight, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'El estudio', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const services = [
    'Páginas Web Profesionales',
    'Tiendas Online (E-commerce)',
    'Sistemas de Turnos Online',
    'Desarrollo a Medida',
    'Integración Mercado Pago',
    'Automatizaciones WhatsApp',
  ];

  return (
    <footer className="bg-[#1A2830] text-white border-t border-[#253740] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#253740]">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#inicio" className="inline-block" aria-label="TuWeb Studio">
              <BrandLogo theme="dark" showTagline />
            </a>

            <p className="text-neutral-300 text-sm leading-relaxed max-w-sm mt-3">
              Estudio digital argentino enfocado en diseño web, tiendas online y sistemas de turnos que impulsan el crecimiento de tu negocio.
            </p>

            <div className="pt-2 text-xs text-neutral-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00BFB3]" />
                <span>Olavarría, Provincia de Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-[#00BFB3]" />
                <a
                  href="https://wa.me/5492284230375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00BFB3] transition-colors"
                >
                  +54 9 2284 230375
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00BFB3]" />
                <a
                  href="mailto:tuwebstudioolav@gmail.com"
                  className="hover:text-[#00BFB3] transition-colors"
                >
                  tuwebstudioolav@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00BFB3] font-bold">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-[#00BFB3] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00BFB3] font-bold">
              Servicios Digitales
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((svc) => (
                <li key={svc} className="text-neutral-300 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#00BFB3]" />
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} TuWeb Studio. Todos los derechos reservados.</p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.tuwebstudio.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00BFB3] transition-colors flex items-center gap-1 font-semibold"
            >
              <span>tuwebstudio.com.ar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#253740] border border-[#3A4E58] text-neutral-200 hover:text-white hover:border-[#00BFB3] transition-colors cursor-pointer"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

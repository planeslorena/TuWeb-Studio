import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Magnet } from './Magnet';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'El estudio', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-xs border-b border-[#F0EDEE]'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Icon */}
        <a
          href="#inicio"
          className="whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-[#00BFB3]"
          aria-label="TuWeb Studio Inicio"
        >
          <BrandLogo theme="light" />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-tight text-[#52646C]"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 text-[#253740] hover:text-[#00BFB3] transition-colors duration-200 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00BFB3] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center shrink-0">
          <Magnet strength={0.2}>
            <a
              href="https://wa.me/5492284230375?text=Hola%20TuWeb%20Studio!%20Quiero%20consultar%20por%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-bold text-white bg-[#253740] hover:bg-[#00BFB3] hover:text-[#1A2830] shadow-xs hover:shadow-md transition-all duration-200 whitespace-nowrap shrink-0 group"
            >
              <span>Hablemos</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnet>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#253740] hover:text-[#00BFB3] focus-visible:outline-2 focus-visible:outline-[#00BFB3] rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-[#F0EDEE] px-6 py-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#253740] hover:text-[#00BFB3] py-2 border-b border-[#F0EDEE]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="https://wa.me/5492284230375?text=Hola%20TuWeb%20Studio!%20Quiero%20consultar%20por%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#1A2830] bg-[#00BFB3] hover:bg-[#00A89D] transition-colors"
              >
                <span>Hablemos por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

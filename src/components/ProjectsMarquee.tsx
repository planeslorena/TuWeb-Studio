import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface MarqueeItem {
  id: string;
  title: string;
  category: string;
  image: string;
  clientUrl?: string;
  highlight: string;
  theme: 'light' | 'dark';
}

const row1Items: MarqueeItem[] = [
  {
    id: 'poly',
    title: 'Peluditos Poly',
    category: 'Web + Sistema de Turnos',
    image: '/src/assets/images/mockup_peluditos_poly_1792675444333.jpg',
    clientUrl: 'https://peluditospoly.com.ar',
    highlight: 'Gestión ágil para peluquería canina',
    theme: 'light',
  },
  {
    id: 'nene',
    title: 'Nené Kids',
    category: 'Web + Reservas Online',
    image: '/src/assets/images/mockup_nene_kids_1792675446562.jpg',
    clientUrl: 'https://pelunenekids.com.ar',
    highlight: 'Turnos familiares en un clic',
    theme: 'light',
  },
  {
    id: 'barbieri',
    title: 'Dra. Florencia Barbieri',
    category: 'Web Profesional + Turnos',
    image: '/src/assets/images/mockup_dr_barbieri_1792675445198.jpg',
    clientUrl: 'https://draflorenciabarbieri.com.ar',
    highlight: 'Medicina estética y bienestar',
    theme: 'light',
  },
  {
    id: 'luna',
    title: 'Maison Luna',
    category: 'E-commerce + Mercado Pago',
    image: '/src/assets/images/mockup_ecommerce_store_1792675445400.jpg',
    highlight: 'Ventas directas sin intermediarios',
    theme: 'dark',
  },
];

const row2Items: MarqueeItem[] = [
  {
    id: 'barbieri-2',
    title: 'Dra. Florencia Barbieri',
    category: 'Plataforma Médica Integral',
    image: '/src/assets/images/mockup_dr_barbieri_1792675445198.jpg',
    clientUrl: 'https://draflorenciabarbieri.com.ar',
    highlight: 'Integración Fotona & agenda',
    theme: 'light',
  },
  {
    id: 'poly-2',
    title: 'Peluditos Poly',
    category: 'Turnos Caninos Automáticos',
    image: '/src/assets/images/mockup_peluditos_poly_1792675444333.jpg',
    clientUrl: 'https://peluditospoly.com.ar',
    highlight: 'Menos WhatsApp, más reservas',
    theme: 'light',
  },
  {
    id: 'luna-2',
    title: 'Maison Luna',
    category: 'Tienda Online Argentina',
    image: '/src/assets/images/mockup_ecommerce_store_1792675445400.jpg',
    highlight: 'Checkout transparente en pesos',
    theme: 'dark',
  },
  {
    id: 'nene-2',
    title: 'Nené Kids',
    category: 'Peluquería Infantil Digital',
    image: '/src/assets/images/mockup_nene_kids_1792675446562.jpg',
    clientUrl: 'https://pelunenekids.com.ar',
    highlight: 'Experiencia lúdica y moderna',
    theme: 'light',
  },
];

export const ProjectsMarquee: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF9] overflow-hidden border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10 text-center">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#52646C] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00BFB3]" />
            <span>Nuestra Galería en Movimiento</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#253740]">
            TRABAJOS QUE COBRAN VIDA
          </h2>
          <p className="mt-2 text-[#52646C] text-sm md:text-base max-w-xl mx-auto">
            Soluciones reales para negocios reales. Deslizá sobre las tarjetas para pausar o explorar cada plataforma.
          </p>
        </FadeIn>
      </div>

      {/* Row 1: Moves right */}
      <div className="relative w-full overflow-hidden mb-6 py-2">
        <div className="animate-marquee-right flex gap-6">
          {[...row1Items, ...row1Items, ...row1Items].map((item, idx) => (
            <MarqueeCard key={`r1-${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2: Moves left */}
      <div className="relative w-full overflow-hidden py-2">
        <div className="animate-marquee-left flex gap-6">
          {[...row2Items, ...row2Items, ...row2Items].map((item, idx) => (
            <MarqueeCard key={`r2-${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface MarqueeCardProps {
  item: MarqueeItem;
}

const MarqueeCard: React.FC<MarqueeCardProps> = ({ item }) => {
  return (
    <div
      className={`group relative w-[320px] sm:w-[380px] md:w-[420px] h-[240px] sm:h-[260px] md:h-[270px] rounded-2xl overflow-hidden shrink-0 border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer ${
        item.theme === 'dark'
          ? 'bg-[#1A2830] border-[#253740] text-white'
          : 'bg-white border-[#E2E8F0] text-[#253740]'
      }`}
    >
      {/* Top Browser Bar */}
      <div
        className={`px-3.5 py-2 flex items-center justify-between border-b text-[11px] font-mono ${
          item.theme === 'dark'
            ? 'bg-[#253740] border-[#3A4E58] text-neutral-300'
            : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#52646C]'
        }`}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 font-sans font-semibold text-xs truncate max-w-[150px]">
            {item.title}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-[#00BFB3] font-bold">
          <span>{item.category}</span>
        </div>
      </div>

      {/* Image Preview with Zoom on Hover */}
      <div className="relative w-full h-[calc(100%-35px)] overflow-hidden bg-neutral-100">
        <img
          src={item.image}
          alt={`Proyecto ${item.title}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Information Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2830]/90 via-[#1A2830]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
          <p className="text-xs font-bold text-[#00BFB3] uppercase tracking-wider">
            {item.category}
          </p>
          <h4 className="text-lg font-bold">{item.title}</h4>
          <p className="text-xs text-neutral-200 mt-0.5">{item.highlight}</p>

          {item.clientUrl && (
            <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#1A2830] bg-[#00BFB3] hover:bg-[#00A89D] px-3 py-1.5 rounded-full w-max">
              <span>Ver sitio oficial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

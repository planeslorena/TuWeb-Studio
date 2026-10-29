import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Sparkles, CheckCircle2, Globe } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface ProjectData {
  number: string;
  name: string;
  category: string;
  description: string;
  website?: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
}

const projects: ProjectData[] = [
  {
    number: '01',
    name: 'Peluditos Poly',
    category: 'Web + Sistema de turnos',
    description:
      'Una experiencia digital para simplificar la gestión de turnos de una peluquería canina.',
    website: 'https://peluditospoly.com.ar',
    image: '/src/assets/images/mockup_peluditos_poly_1792675444333.jpg',
    tags: ['Diseño Web', 'Calendario Interactivo', 'WhatsApp Directo', 'Mobile Friendly'],
    metrics: [
      { label: 'Tiempo ahorrado en chats', value: '-70%' },
      { label: 'Reservas automáticas', value: '24/7' },
    ],
  },
  {
    number: '02',
    name: 'Nené Kids',
    category: 'Web + Reservas online',
    description:
      'Un sitio pensado para que las familias puedan reservar turnos de manera rápida y sencilla.',
    website: 'https://pelunenekids.com.ar',
    image: '/src/assets/images/mockup_nene_kids_1792675446562.jpg',
    tags: ['Peluquería Infantil', 'Selección de Estilista', 'Horarios Dinámicos', 'Panel Admin'],
    metrics: [
      { label: 'Satisfacción familias', value: '100%' },
      { label: 'Tiempo de reserva', value: '< 45 seg' },
    ],
  },
  {
    number: '03',
    name: 'Dra. Florencia Barbieri',
    category: 'Web profesional + Turnos online',
    description:
      'Una plataforma que combina presencia profesional, información médica y reservas online con tecnología láser Fotona.',
    website: 'https://draflorenciabarbieri.com.ar',
    image: '/src/assets/images/mockup_dr_barbieri_1792675445198.jpg',
    tags: ['Medicina Estética & Integral', 'Catálogo de Tratamientos', 'Agenda Digital', 'Alta Conversión'],
    metrics: [
      { label: 'Consultas calificadas', value: '+120%' },
      { label: 'Presencia de marca', value: 'Top Level' },
    ],
  },
  {
    number: '04',
    name: 'Maison Luna',
    category: 'Tienda online + Mercado Pago',
    description:
      'E-commerce ágil y optimizado para ventas directas con pasarela de pagos integrada en pesos argentinos.',
    image: '/src/assets/images/mockup_ecommerce_store_1792675445400.jpg',
    tags: ['Tienda Nube / Custom', 'Mercado Pago', 'Gestión de Stock', 'Sin Comisiones de Estudio'],
    metrics: [
      { label: 'Comisión del estudio', value: '0%' },
      { label: 'Checkout fluido', value: '1-Click' },
    ],
  },
];

export const FeaturedProjects: React.FC = () => {
  return (
    <section
      id="proyectos"
      className="relative bg-[#1A2830] text-white py-12 md:py-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-2xl overflow-hidden -mt-8 z-20"
    >
      {/* Background soft turquoise ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00BFB3]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#00BFB3]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#253740] border border-[#3A4E58] text-xs font-semibold text-[#00BFB3] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Casos de Éxito Reales</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-[0.95]">
              PROYECTOS QUE HABLAN{' '}
              <span className="bg-gradient-to-r from-white via-[#00BFB3] to-[#00A89D] bg-clip-text text-transparent">
                POR NOSOTROS
              </span>
            </h2>
            <p className="mt-4 text-neutral-300 text-sm md:text-base leading-relaxed">
              Cada proyecto es una solución a medida desarrollada con foco en diseño, usabilidad y resultados de negocio.
            </p>
          </FadeIn>
        </div>

        {/* Sticky-stacking project cards container */}
        <div className="relative space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <StickyProjectCard
              key={project.number}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StickyProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
}

const StickyProjectCard: React.FC<StickyProjectCardProps> = ({
  project,
  index,
  total,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  // Scale down slightly as user scrolls past
  const scale = useTransform(scrollYProgress, [0, 1], [0.94 + index * 0.02, 1]);

  return (
    <div
      ref={cardRef}
      style={{
        top: `calc(7rem + ${index * 20}px)`,
      }}
      className="sticky z-10 transition-all duration-300"
    >
      <motion.div
        style={{ scale }}
        className="rounded-3xl bg-[#253740] border border-[#3A4E58] shadow-2xl overflow-hidden hover:border-[#00BFB3]/50 transition-colors duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
          {/* Left Column (40% width): Story & Details */}
          <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#3A4E58]">
            <div>
              {/* Top Meta info */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-3xl font-extrabold text-[#00BFB3]">
                  {project.number}
                </span>
                <span className="text-xs uppercase font-semibold tracking-wider text-neutral-300 px-3 py-1 rounded-full bg-[#1A2830] border border-[#3A4E58]">
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {project.name}
              </h3>
              <p className="mt-3 text-neutral-300 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#1A2830] text-neutral-300 border border-[#3A4E58]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics & Live CTA */}
            <div className="mt-8 pt-6 border-t border-[#3A4E58]">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx}>
                    <p className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                      {metric.value}
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">{metric.label}</p>
                  </div>
                ))}
              </div>

              {project.website ? (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full text-xs md:text-sm font-bold text-[#1A2830] bg-[#00BFB3] hover:bg-[#00A89D] transition-colors duration-200 group"
                >
                  <span>Visitar sitio oficial</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00BFB3]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Solución activa en producción</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column (60% width): Large Screenshot Presentation */}
          <div className="lg:col-span-7 bg-[#1A2830] p-6 md:p-8 flex items-center justify-center relative overflow-hidden group">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-[#3A4E58] shadow-xl bg-[#1A2830] relative">
              {/* Browser mockup header */}
              <div className="px-4 py-2.5 bg-[#253740] border-b border-[#3A4E58] flex items-center justify-between text-[11px] font-mono text-neutral-300">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-sans text-xs font-semibold text-white">
                    {project.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#00BFB3]">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{project.website?.replace('https://', '') || 'tuwebstudio.com.ar'}</span>
                </div>
              </div>

              {/* Large Mockup Image */}
              <div className="relative w-full aspect-[4/3] md:h-[360px] lg:h-[400px] overflow-hidden bg-[#1A2830]">
                <img
                  src={project.image}
                  alt={`Captura del proyecto ${project.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2830]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

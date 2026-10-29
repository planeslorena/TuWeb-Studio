import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  features: string[];
  deliverable: string;
}

const servicesData: ServiceItem[] = [
  {
    number: '01',
    title: 'Páginas web',
    description:
      'Diseñamos sitios modernos, rápidos y personalizados para que tu negocio tenga una presencia online profesional.',
    features: [
      'Diseño exclusivo sin plantillas',
      'Adaptable a celulares, tablets y PC',
      'Optimización SEO en Google',
      'Carga ultrarrápida',
    ],
    deliverable: 'Sitio institucional completo listo para captar clientes.',
  },
  {
    number: '02',
    title: 'Tiendas online',
    description:
      'Desarrollamos tiendas pensadas para mostrar tus productos, facilitar las compras y ayudarte a vender.',
    features: [
      'Catálogo autogestionable',
      'Cobros con Mercado Pago y transferencias',
      'Cálculo de envíos para Argentina',
      '0% de comisiones por venta del estudio',
    ],
    deliverable: 'E-commerce profesional para vender las 24 hs.',
  },
  {
    number: '03',
    title: 'Sistemas de turnos',
    description:
      'Automatizamos las reservas y organizamos tu agenda con soluciones prácticas para vos y tus clientes.',
    features: [
      'Calendario interactivo en tiempo real',
      'Recordatorios automáticos por WhatsApp',
      'Horarios y profesionales configurables',
      'Cancelaciones y reprogramaciones fáciles',
    ],
    deliverable: 'Agenda automatizada sin perder tiempo respondiendo chats.',
  },
  {
    number: '04',
    title: 'Desarrollo a medida',
    description:
      'Creamos sistemas y herramientas digitales adaptados a la forma de trabajar de tu negocio.',
    features: [
      'Paneles de administración a medida',
      'Gestión de clientes, presupuestos y stock',
      'Bases de datos seguras',
      'Escalable al ritmo de tu crecimiento',
    ],
    deliverable: 'Software personalizado que resuelve cuellos de botella.',
  },
  {
    number: '05',
    title: 'Integraciones y automatizaciones',
    description:
      'Conectamos herramientas como WhatsApp, Mercado Pago y otros servicios para simplificar tareas cotidianas.',
    features: [
      'Botón y flujo directo de WhatsApp',
      'Notificaciones automáticas',
      'Integración con pasarelas de pago argentinas',
      'Sincronización con Google Calendar y planillas',
    ],
    deliverable: 'Menos trabajo manual, procesos automáticos y fluidos.',
  },
];

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-12 md:py-20 bg-[#FAFAF9] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#52646C] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00BFB3]" />
              <span>Nuestras Especialidades</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-[#253740] leading-[0.9]">
              LO QUE{' '}
              <span className="brand-gradient-text">
                HACEMOS
              </span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <p className="text-[#52646C] max-w-md text-sm md:text-base leading-relaxed">
              Combinamos diseño visual de alto impacto con desarrollo técnico robusto para que tu marca destaque en internet.
            </p>
          </FadeIn>
        </div>

        {/* Oversized Numbered Services List */}
        <div className="divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]">
          {servicesData.map((service, index) => {
            const isHovered = activeService === index;

            return (
              <FadeIn key={service.number} delay={index * 0.08}>
                <div
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                  className={`group relative py-8 md:py-12 transition-all duration-300 cursor-pointer ${
                    isHovered ? 'bg-white px-4 md:px-8 rounded-2xl shadow-sm' : 'bg-transparent'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                    {/* Oversized Number */}
                    <div className="lg:col-span-2">
                      <span
                        className={`font-mono text-3xl md:text-5xl font-extrabold tracking-tighter transition-colors duration-300 ${
                          isHovered ? 'text-[#00BFB3]' : 'text-neutral-300'
                        }`}
                      >
                        {service.number}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="lg:col-span-4">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-2xl md:text-4xl font-extrabold tracking-tight transition-all duration-300 ${
                            isHovered
                              ? 'text-[#00BFB3] translate-x-2'
                              : 'text-[#253740]'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 md:hidden ${
                            isHovered
                              ? 'bg-[#00BFB3] text-[#1A2830] scale-100'
                              : 'bg-[#F0EDEE] text-[#52646C]'
                          }`}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-5">
                      <p className="text-[#52646C] text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>

                      {/* Expanded features pills shown on hover or desktop */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.features.map((feature, fIdx) => (
                          <span
                            key={fIdx}
                            className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md transition-colors ${
                              isHovered
                                ? 'bg-[#E6F8F7] text-[#00A89D] font-semibold'
                                : 'bg-[#F0EDEE] text-[#52646C]'
                            }`}
                          >
                            <Check className="w-3 h-3 text-[#00BFB3]" />
                            <span>{feature}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Desktop Arrow Indicator */}
                    <div className="hidden lg:flex lg:col-span-1 justify-end">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isHovered
                            ? 'bg-[#00BFB3] text-[#1A2830] rotate-45 scale-110 shadow-md'
                            : 'bg-[#F0EDEE] text-[#52646C]'
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

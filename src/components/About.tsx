import React from 'react';
import { AnimatedText } from './AnimatedText';
import { FadeIn } from './FadeIn';
import { MousePointer, CheckCircle, Zap, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 md:py-36 bg-[#FAFAF9] relative overflow-hidden">
      {/* Decorative ambient turquoise gradient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00BFB3]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Brand Statement */}
          <div className="lg:col-span-5">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#52646C] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00BFB3]" />
                <span>Sobre TuWeb Studio</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#253740] leading-[0.95]">
                MÁS QUE <br />
                <span className="bg-gradient-to-r from-[#253740] via-[#00BFB3] to-[#00A89D] bg-clip-text text-transparent">
                  UNA WEB
                </span>
              </h2>
            </FadeIn>

            {/* Studio Pillars */}
            <div className="mt-10 space-y-4">
              <FadeIn direction="up" delay={0.1}>
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E6F8F7] text-[#00BFB3] flex items-center justify-center shrink-0">
                    <MousePointer className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#253740]">100% Personalizado</h4>
                    <p className="text-xs text-[#52646C] mt-0.5">
                      No usamos plantillas genéricas. Cada proyecto se diseña desde cero según tu negocio.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E6F8F7] text-[#00BFB3] flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#253740]">Automatización Real</h4>
                    <p className="text-xs text-[#52646C] mt-0.5">
                      Conexión directa con WhatsApp, cobros en pesos por Mercado Pago y agendas sin fricción.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#253740] text-white flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#00BFB3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#253740]">Acompañamiento Continuo</h4>
                    <p className="text-xs text-[#52646C] mt-0.5">
                      No te dejamos solo con la web: te enseñamos a gestionarla y te brindamos soporte técnico.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Character-by-Character Scroll Reveal Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm relative overflow-hidden">
              <div className="text-xs font-mono uppercase tracking-wider text-[#00BFB3] font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00BFB3]" />
                <span>Nuestra Filosofía de Trabajo</span>
              </div>

              {/* Scroll reveal animated paragraphs */}
              <div className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-[#253740]">
                <AnimatedText
                  text="En TuWeb Studio creemos que una buena web no solo tiene que verse linda: tiene que funcionar, simplificar procesos y ayudar a que tu negocio crezca."
                  highlightWords={['linda:', 'funcionar,', 'simplificar', 'crezca.']}
                  highlightColor="#00BFB3"
                  className="mb-8"
                />

                <AnimatedText
                  text="Escuchamos tus ideas, entendemos lo que necesitás y creamos soluciones digitales a medida, acompañándote desde el primer paso hasta mucho después del lanzamiento."
                  highlightWords={['Escuchamos', 'necesitás', 'medida,', 'acompañándote', 'lanzamiento.']}
                  highlightColor="#253740"
                />
              </div>

              {/* Studio Trust Metrics */}
              <div className="mt-12 pt-8 border-t border-[#F0EDEE] grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#253740] tracking-tight">
                    +50
                  </p>
                  <p className="text-xs text-[#52646C] font-semibold mt-1">
                    Proyectos y marcas online
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#00BFB3] tracking-tight">
                    24/7
                  </p>
                  <p className="text-xs text-[#52646C] font-semibold mt-1">
                    Sistemas de reservas activos
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#253740] tracking-tight">
                    100%
                  </p>
                  <p className="text-xs text-[#52646C] font-semibold mt-1">
                    Cero comisiones por venta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

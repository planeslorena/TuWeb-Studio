import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight, CheckCircle2, Code2, Sparkles, Smartphone, Layers } from 'lucide-react';
import { Magnet } from './Magnet';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics for central visual composition
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="inicio"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-screen pt-24 pb-8 md:pt-32 md:pb-12 flex flex-col justify-between overflow-hidden bg-[#FAFAF9]"
    >
      {/* Subtle turquoise background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-tr from-[#00BFB3]/12 via-[#253740]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-12 w-96 h-96 rounded-full bg-[#00BFB3]/8 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        {/* Massive Editorial Headline */}
        <div className="text-center pt-2 md:pt-4">
          <FadeIn direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-xs text-xs font-semibold text-[#52646C] tracking-wide">
              <span className="w-2 h-2 shrink-0 rounded-full bg-[#00BFB3]" />
              <span>Desde Olavarría trabajamos remoto para toda la Argentina.</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="font-extrabold uppercase tracking-tighter leading-[0.88] select-none text-[clamp(2.75rem,10.5vw,9.5rem)] text-[#253740]">
              TUWEB{' '}
              <span className="bg-gradient-to-r from-[#253740] via-[#00BFB3] to-[#00A89D] bg-clip-text text-transparent">
                STUDIO
              </span>
            </h1>
          </FadeIn>

          {/* Value proposition & secondary copy */}
          <FadeIn direction="up" delay={0.35}>
            <div className="max-w-2xl mx-auto mt-6 text-center">
              <p className="text-lg md:text-2xl font-medium text-[#253740] leading-snug tracking-tight">
                Diseñamos experiencias digitales que hacen crecer tu negocio.
              </p>
              <p className="mt-3 text-sm md:text-base text-[#52646C] leading-relaxed max-w-xl mx-auto">
                Webs, tiendas online, sistemas de turnos y herramientas de gestión
                interna a medida. Diseñamos y desarrollamos soluciones que se adaptan a vos.
              </p>
            </div>
          </FadeIn>

          {/* Interactive CTAs */}
          <FadeIn direction="up" delay={0.45}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Magnet strength={0.25}>
                <a
                  href="https://wa.me/5492284230375?text=Hola%20TuWeb%20Studio!%20Quisiera%20charlar%20sobre%20un%20proyecto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm md:text-base font-bold text-[#1A2830] bg-[#00BFB3] hover:bg-[#00A89D] shadow-lg shadow-[#00BFB3]/25 hover:shadow-xl hover:shadow-[#00BFB3]/35 transition-all duration-300 group cursor-pointer"
                >
                  <span>Hablemos de tu proyecto</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Magnet>

              <Magnet strength={0.2}>
                <a
                  href="#proyectos"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm md:text-base font-semibold text-[#253740] bg-white hover:bg-[#F0EDEE] border border-[#CBD5E1] shadow-xs transition-colors duration-200"
                >
                  <span>Ver proyectos</span>
                  <ArrowDown className="w-4 h-4 text-[#52646C]" />
                </a>
              </Magnet>
            </div>
          </FadeIn>
        </div>

        {/* Central Visual Composition — Layered Modern Studio Mockup */}
        <FadeIn direction="up" delay={0.55} className="mt-12 md:mt-16">
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative max-w-4xl mx-auto perspective-1000"
          >
            {/* Primary Browser Frame */}
            <div className="relative rounded-2xl bg-white border border-[#E2E8F0] shadow-2xl overflow-hidden transition-all duration-300">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#F8FAFC] border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-md border border-[#E2E8F0] text-[11px] font-mono text-[#52646C] max-w-xs w-full justify-center">
                  <span className="text-[#00BFB3] font-semibold">https://</span>
                  <span>tuwebstudio.com.ar</span>
                </div>
                <div className="flex items-center gap-2 text-[#52646C]">
                  <Layers className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Window Content Preview */}
              <div className="p-6 md:p-8 bg-gradient-to-b from-white to-[#F8FAFC]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Left Column: Studio Pitch & Mock UI */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#E6F8F7] text-[#00A89D] text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-[#00BFB3]" />
                      <span>Desarrollo Web de Alto Rendimiento</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#253740] tracking-tight">
                      Tu negocio abierto las 24 horas, automatizado y sin fricción.
                    </h3>
                    <p className="text-xs md:text-sm text-[#52646C] leading-relaxed">
                      Construimos plataformas modernas preparadas para captar clientes,
                      gestionar turnos y procesar pagos con Mercado Pago.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-[#52646C]">
                      <span className="px-3 py-1 rounded-md bg-[#F0EDEE] text-[#253740]">
                        Sitios Web
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#F0EDEE] text-[#253740]">
                        Tiendas Online
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#F0EDEE] text-[#253740]">
                        Sistemas de Turnos
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#F0EDEE] text-[#253740]">
                        Integración WhatsApp
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Interactive App Snapshot in Dark Petroleum Blue */}
                  <div className="md:col-span-5 bg-[#1A2830] rounded-xl p-4 text-white shadow-inner relative overflow-hidden border border-[#253740]">
                    <div className="text-[11px] font-mono text-[#00BFB3] mb-2 flex items-center justify-between">
                      <span className="font-bold">VISTA ILUSTRATIVA</span>
                      <span className="text-[#00BFB3] flex items-center gap-1 font-semibold">
                        <CheckCircle2 className="w-3 h-3" /> DEMO
                      </span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-[#253740] border border-[#3A4E58] flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-neutral-100">Reserva de Turno</p>
                          <p className="text-[11px] text-neutral-300">Hoy 16:30 hs · Peluditos</p>
                        </div>
                        <span className="text-[11px] font-mono text-[#00BFB3] font-bold">CONFIRMADO</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#253740] border border-[#3A4E58] flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-neutral-100">Cobro Mercado Pago</p>
                          <p className="text-[11px] text-neutral-300">Ejemplo de integración</p>
                        </div>
                        <span className="text-[11px] font-mono text-[#00BFB3] font-bold">DEMO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Layer 1: Mobile Booking Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-4 md:-left-8 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-[#E2E8F0] shadow-xl hidden sm:flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E6F8F7] text-[#00BFB3] flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="text-left pr-2">
                <p className="text-xs font-bold text-[#253740]">100% Mobile First</p>
                <p className="text-[11px] text-[#52646C]">Optimizado para celulares</p>
              </div>
            </motion.div>

            {/* Floating Layer 2: Fast Performance Badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-3 md:-right-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-[#E2E8F0] shadow-xl hidden sm:flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E6F8F7] text-[#00BFB3] flex items-center justify-center shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-left pr-2">
                <p className="text-xs font-bold text-[#253740]">Rendimiento cuidado</p>
                <p className="text-[11px] text-[#52646C]">Optimización de carga y navegación</p>
              </div>
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>

      {/* Bottom Trust Ribbon */}
      <div className="mt-14 border-y border-[#E2E8F0] bg-white/70 backdrop-blur-xs py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm font-semibold text-[#52646C]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFB3]" />
            <span>Desarrollo 100% a medida</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFB3]" />
            <span>Turnos automáticos y WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFB3]" />
            <span>Cobros con Mercado Pago</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFB3]" />
            <span>Soporte y acompañamiento continuo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

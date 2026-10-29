import { WhatsAppIcon } from './WhatsAppIcon';
import React from 'react';
import { ArrowUpRight, Mail, MapPin, MousePointer, Zap, CheckCircle, Sparkles } from 'lucide-react';
import { FadeIn } from './FadeIn';

const pillars = [
  { icon: MousePointer, title: '100% Personalizado', text: 'Diseño pensado para tu marca y tu negocio.' },
  { icon: Zap, title: 'Automatización Real', text: 'Turnos, cobros y herramientas que simplifican tu día.' },
  { icon: CheckCircle, title: 'Acompañamiento Continuo', text: 'Trato cercano antes y después del lanzamiento.' },
];

export const About: React.FC = () => (
  <section id="nosotros" aria-labelledby="about-title" className="py-12 md:py-20 bg-[#FAFAF9] relative overflow-hidden">
    <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#00BFB3]/5 rounded-full blur-3xl pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
        <div className="lg:col-span-5">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#52646C] mb-4"><span className="w-2 h-2 rounded-full bg-[#00BFB3]" />Sobre TuWeb Studio</div>
            <h2 id="about-title" className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#253740] leading-[0.95]">MÁS QUE<br /><span className="bg-gradient-to-r from-[#253740] via-[#00BFB3] to-[#00A89D] bg-clip-text text-transparent">UNA WEB</span></h2>
          </FadeIn>
          <div className="mt-7 space-y-3">
            {pillars.map(({ icon: Icon, title, text }, i) => <FadeIn key={title} delay={i * 0.08}><div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex gap-4 items-center"><div className="w-10 h-10 rounded-lg bg-[#E6F8F7] text-[#00BFB3] flex items-center justify-center shrink-0"><Icon className="w-5 h-5" /></div><div><h3 className="text-sm font-bold text-[#253740]">{title}</h3><p className="text-xs text-[#52646C] mt-1 leading-relaxed">{text}</p></div></div></FadeIn>)}
          </div>
        </div>
        <FadeIn className="lg:col-span-7 flex">
          <div className="p-7 sm:p-9 md:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col justify-center">
            <div className="text-xs font-mono uppercase tracking-wider text-[#00857D] font-bold mb-6 flex items-center gap-2"><Sparkles className="w-4 h-4 shrink-0" /><span>Nuestra Filosofía de Trabajo</span></div>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-[#253740]">Una buena web tiene que verse linda, <span className="text-[#00857D]">funcionar y simplificar tu día.</span></p>
            <p className="mt-5 text-base leading-relaxed text-[#52646C]">Escuchamos lo que necesitás y creamos una solución a medida para tu negocio, acompañándote en cada paso.</p>
          </div>
        </FadeIn>
      </div>
      <FadeIn className="mt-12 md:mt-16">
        <article aria-labelledby="founder-name" className="founder-panel rounded-3xl border border-[#E2E8F0] bg-white shadow-sm p-6 sm:p-8 md:p-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden">
          <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-[#E6F8F7]/40 to-transparent pointer-events-none" />
          <div className="lg:col-span-4 relative max-w-sm w-full mx-auto">
            <img src="/assets/lorena-planes-perfil.jpeg" alt="Lorena Planes, creadora de TuWeb Studio" width={1080} height={1350} loading="lazy" className="w-full aspect-[9/10] object-cover object-bottom rounded-2xl border border-[#00BFB3]/40 shadow-lg" />
            <span className="absolute -bottom-3 left-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#253740] text-white text-xs font-bold shadow-md"><span className="w-2 h-2 bg-[#00BFB3] rounded-full" />Trato 100% directo</span>
          </div>
          <div className="lg:col-span-8 relative">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E6F8F7] text-[#00857D] text-xs font-semibold">DISEÑO Y DESARROLLO WEB</span>
            <h3 id="founder-name" className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-[#253740]">Lorena Planes</h3>
            <p className="mt-1 text-sm font-semibold text-[#00857D]">Desarrolladora web y creadora de TuWeb Studio</p>
            <div className="mt-6 space-y-4 text-sm md:text-base leading-relaxed text-[#52646C]">
              <p>Soy Lorena, la persona detrás de TuWeb Studio. Me dedico al diseño y desarrollo de sitios y aplicaciones web, y sistemas a medida que ayudan a los negocios a crecer, organizarse y simplificar su trabajo.</p>
              <p>Me gusta involucrarme en cada proyecto, conocer cómo funciona cada negocio y encontrar la mejor manera de llevar sus ideas a la práctica. Trabajo de forma personalizada y, cuando el proyecto lo requiere, cuento con la colaboración de otros profesionales.</p>
              <p>Mi objetivo es que la tecnología sea una herramienta que realmente facilite el día a día: desde mostrar lo que un negocio ofrece hasta gestionar turnos, ventas y tareas internas.</p>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="https://wa.me/5492284230375" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#00BFB3] text-[#1A2830] text-sm font-bold hover:bg-[#00A89D] transition-colors"><WhatsAppIcon className="w-4 h-4" />Escribirme por WhatsApp<ArrowUpRight className="w-4 h-4" /></a>
              <a href="mailto:tuwebstudioolav@gmail.com" className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#F0EDEE] text-[#253740] text-sm font-semibold hover:bg-[#E6F8F7] transition-colors"><Mail className="w-4 h-4 text-[#00857D]" />tuwebstudioolav@gmail.com</a>
              <span className="inline-flex items-center gap-2 text-xs text-[#52646C]"><MapPin className="w-4 h-4 text-[#00857D]" />Olavarría, Bs. As.</span>
            </div>
          </div>
        </article>
      </FadeIn>
    </div>
  </section>
);

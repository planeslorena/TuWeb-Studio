import { WhatsAppIcon } from './WhatsAppIcon';
import React, { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { Magnet } from './Magnet';
import { FadeIn } from './FadeIn';

export const Contact: React.FC = () => {
  const [selectedService, setSelectedService] = useState('Página Web');
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [notes, setNotes] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const services = [
    'Página Web',
    'Tienda Online',
    'Sistema de Turnos',
    'Desarrollo a Medida',
    'Integraciones',
  ];

  const generateWhatsAppLink = () => {
    let msg = `Hola TuWeb Studio! Mi nombre es ${name || 'un cliente'}`;
    if (businessName) msg += ` de "${businessName}"`;
    msg += `. Me gustaría consultarles por el servicio de ${selectedService}.`;
    if (notes) msg += ` Detalle: ${notes}`;
    return `https://wa.me/5492284230375?text=${encodeURIComponent(msg)}`;
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = generateWhatsAppLink();
    window.open(link, '_blank', 'noopener,noreferrer');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section id="contacto" className="py-12 md:py-20 bg-[#FAFAF9] relative overflow-hidden">
      {/* Background soft turquoise glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#00BFB3]/15 via-[#00BFB3]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Main CTA Headlines */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#52646C] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00BFB3]" />
              <span>Hablemos de tu Proyecto</span>
            </span>

            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight text-[#253740] leading-[0.88]">
              ¿TENÉS UNA IDEA?
            </h2>

            <h3 className="mt-2 text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight brand-gradient-text leading-[0.9]">
              HAGÁMOSLA REALIDAD.
            </h3>

            <p className="mt-6 text-base md:text-xl font-medium text-[#52646C] max-w-2xl mx-auto leading-relaxed">
              Contanos qué necesitás y encontremos juntos la mejor solución para tu negocio.
            </p>
          </FadeIn>

          {/* Primary Magnetic WhatsApp CTA */}
          <FadeIn direction="up" delay={0.2} className="mt-10">
            <Magnet strength={0.3}>
              <a
                href="https://wa.me/5492284230375?text=Hola%20TuWeb%20Studio!%20Quisiera%20conversar%20sobre%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 rounded-full text-base md:text-xl font-extrabold text-[#1A2830] bg-[#00BFB3] hover:bg-[#00A89D] shadow-xl shadow-[#00BFB3]/25 hover:shadow-2xl hover:shadow-[#00BFB3]/35 transition-all duration-300 group cursor-pointer"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span>Hablemos por WhatsApp</span>
                <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Magnet>
          </FadeIn>
        </div>

        {/* Interactive Consultation Form & Direct Studio Contact Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* Left: Quick Interactive Scope Selector */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
            <form onSubmit={handleQuickSubmit} className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-[#253740]">
                  Armá tu consulta en 30 segundos
                </h4>
                <p className="text-xs md:text-sm text-[#52646C] mt-1">
                  Elegí el servicio que necesitás y te contactamos directo por WhatsApp.
                </p>
              </div>

              {/* Service Selection Tabs */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#52646C] mb-2">
                  1. ¿Qué tipo de proyecto buscás?
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((svc) => (
                    <button
                      key={svc}
                      type="button"
                      onClick={() => setSelectedService(svc)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedService === svc
                          ? 'bg-[#253740] text-white shadow-xs'
                          : 'bg-[#F0EDEE] text-[#52646C] hover:bg-[#E2E8F0]'
                      }`}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#253740] mb-1">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Martín Pérez"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-sm focus:outline-none focus:border-[#00BFB3] focus:ring-1 focus:ring-[#00BFB3]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#253740] mb-1">
                    Nombre de tu negocio / marca
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Ej. Veterinaria Norte"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-sm focus:outline-none focus:border-[#00BFB3] focus:ring-1 focus:ring-[#00BFB3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#253740] mb-1">
                  Contanos brevemente qué tenés en mente (opcional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej. Necesito una tienda para vender indumentaria con Mercado Pago..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-sm focus:outline-none focus:border-[#00BFB3] focus:ring-1 focus:ring-[#00BFB3]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#253740] hover:bg-[#00BFB3] hover:text-[#1A2830] transition-colors duration-200 shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar consulta por WhatsApp</span>
                </button>

                {sentSuccess && (
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> ¡Abriendo chat!
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Right: Direct Studio Information in Dark Petroleum Blue */}
          <div className="lg:col-span-5 bg-[#1A2830] text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between border border-[#253740] shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00BFB3]" />
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                  Contacto Directo
                </span>
              </div>

              <h4 className="text-2xl font-bold tracking-tight text-white mb-2">
                TuWeb Studio
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed mb-8">
                Estamos en Olavarría, Provincia de Buenos Aires, y trabajamos para toda la Argentina de forma 100% remota y ágil.
              </p>

              <div className="space-y-5 text-sm">
                <a
                  href="https://wa.me/5492284230375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-neutral-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#253740] flex items-center justify-center text-[#00BFB3] group-hover:bg-[#00BFB3] group-hover:text-[#1A2830] transition-colors">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">Teléfono / WhatsApp</p>
                    <p className="font-semibold text-neutral-100">+54 9 2284 230375</p>
                  </div>
                </a>

                <a
                  href="mailto:tuwebstudioolav@gmail.com"
                  className="flex items-center gap-3.5 text-neutral-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#253740] flex items-center justify-center text-[#00BFB3] group-hover:bg-[#00BFB3] group-hover:text-[#1A2830] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">Correo Electrónico</p>
                    <p className="font-semibold text-neutral-100">tuwebstudioolav@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-neutral-200">
                  <div className="w-10 h-10 rounded-xl bg-[#253740] flex items-center justify-center text-neutral-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">Ubicación</p>
                    <p className="font-semibold text-neutral-100">Olavarría, Buenos Aires, Argentina</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-neutral-200">
                  <div className="w-10 h-10 rounded-xl bg-[#253740] flex items-center justify-center text-neutral-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">Horarios de atención</p>
                    <p className="font-semibold text-neutral-100">Lunes a Viernes de 9 a 18 hs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#253740] text-xs text-neutral-300 flex items-center justify-between">
              <span>Lorena Planes · Fundadora y directora</span>
              <span className="text-[#00BFB3] font-semibold">Trato directo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

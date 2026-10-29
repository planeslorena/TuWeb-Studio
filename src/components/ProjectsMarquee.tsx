import React, { useState } from 'react';
import { ExternalLink, Pause, Play, Sparkles } from 'lucide-react';
import { FadeIn } from './FadeIn';
import polyBackground from '../assets/images/mockup_peluditos_poly_1792675444333.jpg';
import neneBackground from '../assets/images/mockup_nene_kids_1792675446562.jpg';
import doctorBackground from '../assets/images/mockup_dr_barbieri_1792675445198.jpg';
import shopBackground from '../assets/images/mockup_ecommerce_store_1792675445400.jpg';

const projects = [
  { id: 'poly', title: 'Peluditos Poly', category: 'Web + Sistema de Turnos', image: polyBackground, url: 'https://peluditospoly.com.ar', highlight: 'Gestión ágil para peluquería canina' },
  { id: 'nene', title: 'Nené Kids', category: 'Web + Reservas Online', image: neneBackground, url: 'https://pelunenekids.com.ar', highlight: 'Reservas para toda la familia' },
  { id: 'barbieri', title: 'Dra. Florencia Barbieri', category: 'Sistema de turnos + Web profesional', image: doctorBackground, url: 'https://draflorenciabarbieri.com.ar', highlight: 'Ginecología funcional e integrativa' },
  { id: 'jbem', title: 'JBEM', category: 'Tienda Online · Próximamente', image: shopBackground, url: undefined, highlight: 'Tienda online en desarrollo' },
];

export const ProjectsMarquee: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const rows = [projects, [projects[2], projects[0], projects[3], projects[1]]];
  return (
    <section id="proyectos" aria-labelledby="projects-title" className="py-12 md:py-20 bg-[#1A2830] text-white rounded-t-[2.5rem] md:rounded-t-[5rem] overflow-hidden border-b border-[#253740]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 md:mb-16 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#253740] border border-[#3A4E58] text-xs font-semibold text-[#00BFB3] mb-4">
            <Sparkles className="w-3.5 h-3.5" /><span>Casos de Éxito Reales</span>
          </div>
          <h2 id="projects-title" className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.98] text-white">PROYECTOS QUE HABLAN<br /><span className="brand-gradient-text brand-gradient-text-light">POR NOSOTROS</span></h2>
          <p className="mt-6 text-neutral-300 text-sm md:text-lg leading-relaxed max-w-5xl mx-auto">Cada proyecto es una solución a medida desarrollada con foco en diseño, usabilidad y resultados de negocio.</p>
        </FadeIn>
      </div>
      <div className="project-gallery space-y-6" data-paused={paused}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="project-row" role="region" aria-label={`Galería de proyectos, fila ${rowIndex + 1}`} tabIndex={0}>
            <div className={`project-track ${rowIndex === 0 ? 'project-track-right' : ''}`}>
              {[0, 1].map(copy => (
                <div className="project-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                  {row.map(project => (
                    <article key={project.id} data-project={project.id} className={`project-card group relative rounded-2xl overflow-hidden border transition-shadow hover:shadow-lg ${project.id === 'jbem' ? 'bg-[#1A2830] border-[#253740]' : 'bg-white border-[#E2E8F0]'}`}>
                      <div className={`project-card-bar px-3.5 py-2 flex items-center justify-between gap-2 border-b text-[11px] ${project.id === 'jbem' ? 'bg-[#253740] border-[#3A4E58] text-neutral-200' : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#52646C]'}`}>
                        <div className="flex items-center gap-1.5 min-w-0"><span className="flex gap-1.5 shrink-0" aria-hidden="true"><span className="w-2.5 h-2.5 rounded-full bg-red-400/80" /><span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" /></span><h3 className="ml-2 font-sans font-semibold text-xs truncate">{project.title}</h3></div>
                        <span className="project-category text-[10px] font-mono text-[#00857D] font-bold shrink-0">{project.category}</span>
                      </div>
                      <div className="relative flex-1 overflow-hidden"><img src={project.image} alt={`Proyecto ${project.title}`} className="absolute inset-0 w-full h-full object-cover object-top" loading="lazy" />
                        <div className="project-overlay absolute inset-0 bg-gradient-to-t from-[#1A2830]/95 via-[#1A2830]/35 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                          <p className="text-xs font-bold text-[#00BFB3]">{project.category}</p><h4 className="text-lg font-bold">{project.title}</h4><p className="text-xs text-neutral-200 mt-0.5">{project.highlight}</p>
                          {project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer" tabIndex={copy === 1 ? -1 : undefined} aria-label={`Ver sitio oficial de ${project.title}`} className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#1A2830] bg-[#00BFB3] px-3 py-1.5 rounded-full w-max">Ver sitio oficial <ExternalLink className="w-3.5 h-3.5" /></a> : <span className="mt-3 text-xs font-bold text-[#00BFB3]">Próximamente</span>}
                        </div>
                        {project.id === 'jbem' && <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#1A2830]/90 text-white text-[10px] font-semibold pointer-events-none group-hover:opacity-0">Próximamente</span>}
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-4 flex justify-center">
        <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} className="project-motion-toggle inline-flex items-center gap-2 text-xs text-neutral-300 hover:text-[#00BFB3] py-2">{paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}{paused ? 'Reanudar movimiento' : 'Pausar movimiento'}</button>
      </div>
    </section>
  );
};

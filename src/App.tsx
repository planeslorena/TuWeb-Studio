/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsMarquee } from './components/ProjectsMarquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { Magnet } from './components/Magnet';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#253740] selection:bg-[#00BFB3] selection:text-white relative">
      {/* Top Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Animated Projects Marquee */}
        <ProjectsMarquee />

        {/* 3. About TuWeb Studio */}
        <About />

        {/* 4. Services Section */}
        <Services />

        {/* 5. Featured Projects (Dark Petroleum section with sticky-stacking cards) */}
        <FeaturedProjects />

        {/* 6. Contact / Final CTA */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Floating Fast WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <Magnet strength={0.35}>
          <a
            href="https://wa.me/5492284230375?text=Hola%20TuWeb%20Studio!%20Quisiera%20hacerles%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="w-14 h-14 rounded-full bg-[#00BFB3] text-[#1A2830] flex items-center justify-center shadow-lg shadow-[#00BFB3]/25 hover:shadow-xl hover:shadow-[#00BFB3]/35 hover:scale-105 transition-all duration-200 group"
          >
            <MessageCircle className="w-7 h-7 fill-[#1A2830]/20" />
            <span className="sr-only">WhatsApp TuWeb Studio</span>
          </a>
        </Magnet>
      </div>
    </div>
  );
}

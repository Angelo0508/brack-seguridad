import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OperationsHub } from './components/OperationsHub';
import { HawthorneSection } from './components/HawthorneSection';
import { VideoShowcase } from './components/VideoShowcase';
import { Footer } from './components/Footer';
import { BRACK_DATA } from './data/brackData';
import { MessageSquare, PhoneCall, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('asesor-interactivo');

  const scrollToConsole = (tabId?: string) => {
    if (tabId) {
      setActiveTab(tabId);
    }
    const el = document.getElementById('consola-operativa');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100 font-sans selection:bg-orange-600 selection:text-white">
      {/* Dark Glass Navigation with smooth tab glider */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. High-Impact Dark Hero with Staggered animations & Spring metrics */}
        <Hero
          onExploreConsole={scrollToConsole}
        />

        {/* 2. Operations Console (AI Advisor, Simple Protocol, Services, and Hawthorne) */}
        <OperationsHub
          activeTab={activeTab}
          onSelectTab={setActiveTab}
        />

        {/* 3. Live Video Showcase (YouTube Short Demo with Mute Controls) */}
        <VideoShowcase />

        {/* 4. Dedicated Hawthorne Effect Section with Interactive Physics */}
        <HawthorneSection />

        {/* 4. High-Impact Conversion Banner with Direct Action */}
        <section className="py-14 bg-gradient-to-b from-[#09090b] to-[#050507] border-t border-zinc-800/80 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4"
          >
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-orange-400">
              ¿Tu sistema de seguridad solo graba lo que sucede?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white leading-tight">
              Conviértelo en una solución que pueda{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
                detectar, disuadir y responder
              </span>
              .
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed text-justify">
              Solicita una evaluación técnica de tus cámaras actuales sin compromiso y reduce hasta un 40% tu gasto en seguridad.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.03, boxShadow: '0 12px 30px -5px rgba(194, 65, 12, 0.45)' }}
                whileTap={{ scale: 0.97 }}
                href={`https://wa.me/${BRACK_DATA.phoneInternational}?text=${encodeURIComponent(
                  'Hola BRACK Seguridad, solicito un diagnóstico técnico sin costo para mis cámaras.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-orange-700 hover:bg-orange-600 rounded-xl transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Solicitar Diagnóstico Sin Costo por WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${BRACK_DATA.phoneInternational}?text=${encodeURIComponent(
                  'Hola Brack Seguridad, me comunico desde la página web para solicitar una propuesta de seguridad.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/60 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-orange-400" />
                <span>WhatsApp: {BRACK_DATA.phone}</span>
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Floating Tactical WhatsApp Action with Spring Physics & Radar Pulse */}
      <motion.aside
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4, type: 'spring', stiffness: 350 }}
        aria-label="Contacto directo"
        className="fixed bottom-5 right-5 z-40"
      >
        <motion.a
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href={`https://wa.me/${BRACK_DATA.phoneInternational}?text=${encodeURIComponent(
            'Hola Brack Seguridad, deseo cotizar el servicio de Guardia Virtual para mi propiedad.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-orange-700 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white rounded-full shadow-2xl shadow-orange-950/80 transition-all cursor-pointer group border border-orange-500/60"
          title="Hablar con Guardia Virtual BRACK"
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute w-full h-full rounded-full bg-orange-400 opacity-40 animate-ping" />
            <PhoneCall className="w-4 h-4 text-white relative z-10" />
          </div>
          <span className="text-xs font-semibold font-mono pr-1 hidden sm:inline tracking-tight">
            CIV 24/7 ({BRACK_DATA.phone})
          </span>
        </motion.a>
      </motion.aside>

      {/* Quiet Dark Footer */}
      <Footer />
    </div>
  );
}

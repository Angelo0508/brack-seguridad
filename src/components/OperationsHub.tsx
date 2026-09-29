import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldAlert,
  DoorClosed,
  Video,
  Zap,
  Network,
  Wrench,
  Users,
  Megaphone,
  ShieldCheck,
  ChevronRight,
  Check,
  Bot,
} from 'lucide-react';
import { BRACK_DATA, ServiceItem } from '../data/brackData';
import { InteractiveAdvisor } from './InteractiveAdvisor';
import { HawthorneInteractiveCard } from './HawthorneSection';

interface OperationsHubProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onOpenQuote?: (serviceOrTopic?: string) => void;
}

export const OperationsHub: React.FC<OperationsHubProps> = ({
  activeTab,
  onSelectTab,
}) => {
  // Service Detail Modal State
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const navTabs = [
    {
      id: 'asesor-interactivo',
      label: 'Asesor con IA',
      subtitle: 'Diagnóstico inteligente',
      icon: Bot,
      highlight: true,
    },
    {
      id: 'protocolo',
      label: '¿Cómo Funciona?',
      subtitle: '4 Fases Guardia Virtual',
      icon: ShieldCheck,
      highlight: false,
    },
    {
      id: 'servicios',
      label: 'Servicios',
      subtitle: 'CCTV, Accesos & IA',
      icon: Video,
      highlight: false,
    },
    {
      id: 'hawthorne',
      label: 'Efecto Disuasivo',
      subtitle: 'Efecto Hawthorne',
      icon: Users,
      highlight: false,
    },
  ];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'guardia-virtual':
        return ShieldAlert;
      case 'control-accesos':
        return DoorClosed;
      case 'cctv-ia':
        return Video;
      case 'alarmas-perimetral':
        return Zap;
      case 'redes-infraestructura':
        return Network;
      case 'mantenimiento-diagnostico':
        return Wrench;
      default:
        return Video;
    }
  };

  return (
    <section id="consola-operativa" className="py-7 md:py-10 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-orange-400 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span>Plataforma Operativa BRACK</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display mt-0.5">
              Información y Soluciones Integradas
            </h2>
          </div>
          <p className="text-[11px] sm:text-xs text-zinc-400 max-w-md">
            Describe lo que necesitas a nuestro Asesor con IA, conoce el protocolo táctico y explora los servicios.
          </p>
        </div>

        {/* Executive Segmented Control Deck (Compact & responsive) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 p-1.5 bg-zinc-950/95 rounded-xl border border-zinc-800/80 mb-4 relative shadow-inner">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className="relative group p-2.5 rounded-lg text-left transition-all cursor-pointer focus-visible:outline-hidden"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeHubGlider"
                    className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-zinc-900/95 rounded-lg border border-orange-500/60 shadow-md shadow-black/60 z-0"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
                <div className="relative z-10 flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isActive
                        ? 'bg-orange-700 text-white shadow-md shadow-orange-950/80'
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-zinc-200 group-hover:border-zinc-700'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <span
                        className={`text-xs font-bold truncate transition-colors ${
                          isActive ? 'text-white font-display' : 'text-zinc-300 group-hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </span>
                      {tab.highlight && !isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shrink-0" />
                      )}
                    </div>
                    <p
                      className={`text-[10px] font-mono truncate transition-colors hidden sm:block ${
                        isActive ? 'text-orange-400 font-semibold' : 'text-zinc-400 group-hover:text-zinc-300'
                      }`}
                    >
                      {tab.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Panel with fluid ease-out animation */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-3.5 sm:p-5 shadow-xl relative overflow-hidden backdrop-blur-xs">
          <AnimatePresence mode="wait">
            {/* TAB 1: ASESOR CON IA ESTRUCTURADO */}
            {activeTab === 'asesor-interactivo' && (
              <motion.div
                key="tab-asesor-interactivo"
                initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <InteractiveAdvisor />
              </motion.div>
            )}

            {/* TAB 2: GUARDIA VIRTUAL & CÓMO FUNCIONA (Simplified and Crystal Clear as requested) */}
            {activeTab === 'protocolo' && (
              <motion.div
                key="tab-protocolo-simple"
                initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="border-b border-zinc-800 pb-4">
                  <h3 className="text-xl font-bold font-display text-white">
                    ¿Cómo Funciona la Guardia Virtual BRACK?
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Un proceso sencillo, transparente y 100% efectivo para proteger tu propiedad las 24 horas del día.
                  </p>
                </div>

                {/* 4 Simple, Clear Step Cards with Spring Physics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    {
                      num: '01',
                      title: 'Monitoreo CIV 24/7',
                      desc: 'Operadores despiertos supervisan tus accesos día y noche desde la central.',
                      highlight: false,
                    },
                    {
                      num: '02',
                      title: 'Detección Inmediata',
                      desc: 'Identificación de conductas sospechosas en menos de 5 segundos.',
                      highlight: false,
                    },
                    {
                      num: '03',
                      title: 'Perifoneo 110 dB',
                      desc: 'El operador advierte por altavoz en vivo provocando la huida del sospechoso.',
                      highlight: true,
                    },
                    {
                      num: '04',
                      title: 'Despacho Policial',
                      desc: 'Enlace prioritario directo con patrullas del UPC y notificación a dueños.',
                      highlight: false,
                    },
                  ].map((step) => (
                    <motion.div
                      key={step.num}
                      whileHover={{
                        y: -4,
                        transition: { type: 'spring', stiffness: 400, damping: 20 },
                      }}
                      className={`p-4 rounded-xl border space-y-2 relative group transition-colors ${
                        step.highlight
                          ? 'bg-orange-950/20 border-orange-500/50 hover:border-orange-500/80 shadow-lg shadow-orange-950/40'
                          : 'bg-zinc-950 border-zinc-800 hover:border-orange-500/50'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs font-mono shadow-md ${
                        step.highlight ? 'bg-orange-600 text-white shadow-orange-950' : 'bg-orange-700 text-white shadow-orange-950'
                      }`}>
                        {step.num}
                      </div>
                      <h4 className="text-xs font-bold text-white">
                        {step.title}
                      </h4>
                      <p className={`text-[11px] leading-relaxed ${step.highlight ? 'text-zinc-300' : 'text-zinc-400'}`}>
                        {step.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Intervención por Voz Humana Real (Informativo, sin bot) */}
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/90 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-950 border border-orange-700/60 text-orange-400 flex items-center justify-center shrink-0 shadow-md">
                      <Megaphone className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-white font-display">
                        Voz Humana en Tiempo Real (110 dB)
                      </h4>
                      <p className="text-[11px] text-zinc-400 max-w-xl">
                        Operadores entrenados que advierten situacionalmente en directo, logrando disuasión efectiva antes de cualquier delito.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={`https://wa.me/${BRACK_DATA.phoneInternational}?text=${encodeURIComponent('Hola BRACK Seguridad, me interesa cotizar el servicio de Guardia Virtual 24/7.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-orange-700 hover:bg-orange-600 text-white text-xs font-semibold cursor-pointer transition-colors shadow-md shadow-orange-950/60"
                    >
                      Pedir Cotización por WhatsApp
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: SERVICIOS Y SOLUCIONES */}
            {activeTab === 'servicios' && (
              <motion.div
                key="tab-servicios"
                initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="border-b border-zinc-800 pb-4">
                  <h3 className="text-xl font-bold font-display text-white">
                    Catálogo de Servicios y Soluciones Tecnológicas
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Equipos certificados e instalados a medida para edificios, empresas y residencias en Ecuador.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {BRACK_DATA.services.map((serv) => {
                    const Icon = getServiceIcon(serv.id);
                    return (
                      <motion.div
                        key={serv.id}
                        whileHover={{
                          y: -5,
                          boxShadow: '0 12px 28px -8px rgba(0, 0, 0, 0.6)',
                          transition: { type: 'spring', stiffness: 400, damping: 22 },
                        }}
                        className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-orange-500/70 transition-colors flex flex-col justify-between group"
                      >
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <div className="w-9 h-9 rounded-lg bg-orange-950/80 border border-orange-700/50 text-orange-400 flex items-center justify-center group-hover:bg-orange-700 group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-mono text-zinc-500 uppercase">
                              {serv.category}
                            </span>
                          </div>

                          <div>
                            <h4 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                              {serv.title}
                            </h4>
                            <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                              {serv.summary}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* TAB 4: EFECTO DISUASIVO (HAWTHORNE) */}
            {activeTab === 'hawthorne' && (
              <motion.div
                key="tab-hawthorne"
                initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <div className="border-b border-zinc-800 pb-2.5">
                  <h3 className="text-lg font-bold font-display text-white">
                    Efecto Disuasivo en Tiempo Real
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5 text-justify">
                    Selecciona una opción para ver la reacción inmediata del intruso.
                  </p>
                </div>

                <HawthorneInteractiveCard />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowRight, CheckCircle2, Megaphone, Bot } from 'lucide-react';
import { BRACK_DATA } from '../data/brackData';

interface HeroProps {
  onOpenQuote?: () => void;
  onExploreConsole: (tab?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreConsole }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-12 md:pb-14 bg-[#09090b] border-b border-zinc-800/80">
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-1/4 -z-0 w-96 h-96 bg-orange-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Punchy Core Proposition with Staggered Reveal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-5"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/70 border border-orange-700/60 text-orange-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="uppercase font-semibold">
                Centro Integral de Vigilancia (CIV) · Activo 24/7
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-white font-display leading-[1.1]"
              style={{ textWrap: 'balance' }}
            >
              Tu seguridad{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
                no puede esperar
              </span>
              .
            </motion.h1>

            <motion.p variants={itemVariants} className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-xl text-justify">
              Transformamos las cámaras pasivas en un sistema de defensa activo. Nuestros operadores vigilan tus instalaciones en vivo, atienden visitas, disuaden sospechosos con <strong className="text-orange-400 font-semibold">perifoneo en tiempo real</strong> y coordinan el despacho policial directo.
            </motion.p>

            {/* Quick Action CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-1">
              <motion.a
                whileHover={{ scale: 1.03, boxShadow: '0 12px 30px -5px rgba(194, 65, 12, 0.45)' }}
                whileTap={{ scale: 0.97 }}
                href={`https://wa.me/${BRACK_DATA.phoneInternational}?text=${encodeURIComponent('Hola BRACK Seguridad, deseo solicitar asesoría y cotización para mi propiedad.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-orange-700 hover:bg-orange-600 active:bg-orange-800 rounded-xl transition-colors shadow-md shadow-orange-950/60 cursor-pointer flex items-center gap-2 group"
              >
                <span>Escribir por WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onExploreConsole('asesor-interactivo')}
                className="px-4 py-3 text-xs sm:text-sm font-semibold text-orange-400 hover:text-white bg-orange-950/40 hover:bg-orange-950/70 border border-orange-800/80 rounded-xl transition-all cursor-pointer flex items-center gap-2"
              >
                <Bot className="w-4 h-4 text-orange-400" />
                <span>Consultar al Asesor con IA</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Cover Image Card (High Resolution CIV Bunker) */}
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative group bg-zinc-950 aspect-4/3 sm:aspect-16/10 lg:aspect-auto lg:h-[380px]"
          >
            <img
              src="/images/portada.jpeg"
              alt="BRACK Seguridad Inteligente - Guardia Virtual 24/7"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
            
            {/* Top Operational Pill Badge */}
            <div className="absolute top-3.5 left-3.5 flex items-center gap-2 bg-zinc-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-orange-500/40 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                CIV Operativo 24/7
              </span>
            </div>

            {/* Bottom Overlay Info */}
            <div className="absolute bottom-4 left-4 right-4 space-y-1.5 text-white">
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-orange-400 font-semibold uppercase">
                <span className="bg-orange-950/90 border border-orange-700/60 px-2 py-0.5 rounded-md">
                  Vigilancia Activa
                </span>
                <span className="bg-zinc-900/90 border border-zinc-800 px-2 py-0.5 rounded-md text-emerald-400">
                  Respuesta &lt; 15s
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold font-display leading-snug">
                Centro Integral de Vigilancia (CIV)
              </h3>
              <p className="text-xs text-zinc-300 leading-snug line-clamp-2 text-justify">
                Monitoreo continuo en vivo con disuasión inmediata por altavoces de potencia.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quantified Metrics HUD Strip with Spring Hover Physics */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-zinc-800/70">
          {BRACK_DATA.metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              whileHover={{
                y: -5,
                transition: { type: 'spring', stiffness: 400, damping: 22 },
              }}
              className="p-3.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/70 border border-zinc-800/80 hover:border-orange-500/60 space-y-1 cursor-default transition-colors"
            >
              <div className="text-xl sm:text-2xl font-black tracking-tight text-orange-400 font-display tabular-nums">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-white">{metric.label}</div>
              <div className="text-[11px] text-zinc-400 leading-snug">{metric.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

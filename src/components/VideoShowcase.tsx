import React from 'react';
import { motion } from 'motion/react';
import { VolumeX, ShieldAlert, Zap, Radio, CheckCircle2 } from 'lucide-react';
import { BRACK_DATA } from '../data/brackData';

export const VideoShowcase: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#07070a] border-t border-zinc-800/80 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/70 border border-orange-800/60 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span>Demostración de Seguridad en Vivo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight">
            Mira la <span className="text-orange-500">Guardia Virtual</span> en Acción
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 text-justify max-w-xl mx-auto">
            Observa el funcionamiento real de nuestros sistemas de videovigilancia activa y perifoneo disuasivo en directo.
          </p>
        </div>

        {/* Videos + Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Two Vertical YouTube Shorts Frames (3JZNeV5-sJQ on left, QAZBUvtgWAw on right) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
              {/* Video 1 (New): 3JZNeV5-sJQ */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-3 shadow-2xl space-y-2.5 relative group"
              >
                <div className="flex items-center justify-between px-1.5 text-[10px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1 text-orange-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                    DEMO EN VIVO 1
                  </span>
                  <span className="flex items-center gap-1 text-zinc-400">
                    <VolumeX className="w-3 h-3 text-orange-400" />
                    Mute
                  </span>
                </div>

                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-inner border border-zinc-800">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/3JZNeV5-sJQ?autoplay=1&mute=1&loop=1&playlist=3JZNeV5-sJQ&controls=1&rel=0&modestbranding=1"
                    title="Demostración de Guardia Virtual BRACK Seguridad 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover border-0"
                  />
                </div>
              </motion.div>

              {/* Video 2: QAZBUvtgWAw */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-3 shadow-2xl space-y-2.5 relative group"
              >
                <div className="flex items-center justify-between px-1.5 text-[10px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1 text-orange-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                    DEMO EN VIVO 2
                  </span>
                  <span className="flex items-center gap-1 text-zinc-400">
                    <VolumeX className="w-3 h-3 text-orange-400" />
                    Mute
                  </span>
                </div>

                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-inner border border-zinc-800">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/QAZBUvtgWAw?autoplay=1&mute=1&loop=1&playlist=QAZBUvtgWAw&controls=1&rel=0&modestbranding=1"
                    title="Demostración de Guardia Virtual BRACK Seguridad 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover border-0"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Key Operational Highlights */}
          <div className="lg:col-span-6 space-y-5 bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 sm:p-8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-orange-400 font-bold tracking-wider">
                Tecnología de Vanguardia en Ecuador
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                ¿Por qué la Guardia Virtual supera al guardia tradicional?
              </h3>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: ShieldAlert,
                  title: 'Disuasión Inmediata por Voz',
                  desc: 'El operador advierte situacionalmente en directo provocando la huida del sospechoso antes del delito.',
                },
                {
                  icon: Zap,
                  title: 'Respuesta en Menos de 15 Segundos',
                  desc: 'Operadores especializados en nuestro Centro Integral de Vigilancia para disuadir amenazas.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Ahorro del 40% Garantizado',
                  desc: 'Reducción drástica de costos operativos sin riesgos de vulnerabilidad ni distracciones.',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/90 flex items-start gap-3.5 hover:border-orange-500/50 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-orange-950 border border-orange-700/60 text-orange-400 flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs sm:text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed text-justify">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${BRACK_DATA.phoneInternational}?text=${encodeURIComponent(
                  'Hola BRACK Seguridad, vi la demostración en video y me interesa solicitar asesoría.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-orange-700 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold cursor-pointer transition-colors shadow-lg shadow-orange-950/60 gap-2"
              >
                <span>Solicitar Asesoría por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

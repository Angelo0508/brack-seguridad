import React from 'react';
import { motion } from 'motion/react';
import { Building, ArrowUpRight } from 'lucide-react';
import { BRACK_DATA } from '../data/brackData';

export const TrustedClients: React.FC = () => {
  return (
    <section className="py-12 bg-[#09090b] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-orange-400">
              Respaldo Comprobado en Ecuador
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
              ¿Quién confía en BRACK Seguridad?
            </h3>
          </div>
          <p className="text-xs text-zinc-400 max-w-sm">
            Empresas, complejos deportivos, planteles educativos y conjuntos residenciales protegidos activamente 24/7.
          </p>
        </div>

        {/* Compact Dark Tiles with Icons & Spring Hover */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {BRACK_DATA.trustedClients.slice(0, 6).map((client) => (
            <motion.div
              key={client.name}
              whileHover={{
                y: -5,
                transition: { type: 'spring', stiffness: 400, damping: 22 },
              }}
              className="p-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800/90 hover:border-orange-500/60 transition-colors group flex flex-col justify-between cursor-default"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-6 h-6 rounded-md bg-orange-950 text-orange-400 flex items-center justify-center text-[10px] font-bold group-hover:bg-orange-700 group-hover:text-white transition-colors">
                  <Building className="w-3.5 h-3.5" />
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Monitoreado" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white group-hover:text-orange-400 transition-colors truncate">
                  {client.name}
                </h4>
                <p className="text-[10px] text-zinc-400 truncate mt-0.5">
                  {client.sector}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Trust Banner from PDF page 15 with Spring Physics */}
        <div className="mt-8 bg-zinc-900/60 rounded-2xl p-5 sm:p-6 border border-zinc-800/80 hover:border-orange-500/40 transition-colors flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-orange-700 text-white flex items-center justify-center font-black text-lg shadow-md shrink-0">
              ER
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-sm text-white font-display">
                  {BRACK_DATA.leadership.ceo}
                </h4>
                <span className="text-[10px] font-mono text-orange-400 bg-orange-950 px-2 py-0.5 rounded border border-orange-800/60">
                  CEO BRACK
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                {BRACK_DATA.leadership.title} · {BRACK_DATA.leadership.experience}
              </p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`https://wa.me/${BRACK_DATA.phoneInternational}?text=${encodeURIComponent(
              'Hola Ing. Esteban Ramos, me gustaría agendar una reunión o diagnóstico de seguridad con el equipo directivo de Brack.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-orange-500/60 rounded-xl transition-all cursor-pointer group"
          >
            <span>Hablar con Dirección Operativa</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

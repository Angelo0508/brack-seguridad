import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ShieldCheck, CheckCheck, Clock, MapPin, Quote, Star, AlertTriangle, Radio } from 'lucide-react';
import { BRACK_DATA, WhatsAppCase } from '../data/brackData';

export const RealProtocolsEvidence: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState<string>(BRACK_DATA.whatsappCases[0].id);
  const activeCase = BRACK_DATA.whatsappCases.find((c) => c.id === activeCaseId) || BRACK_DATA.whatsappCases[0];

  return (
    <section id="evidencia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-orange-700 uppercase font-mono">
            06 · Casos Reales y Respuestas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 font-display">
            Evidencia Real de Prevención y Reacción Inmediata
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Así opera la Guardia Virtual de BRACK en la vida real. Registros de intervenciones de madrugada coordinadas directamente con la Policía Nacional (UPC y ECU-911).
          </p>
        </div>

        {/* Case Studies Tabs & WhatsApp Visualizer */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Case Selector */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-2">
              Bitácoras de Intervención Recientes:
            </h3>

            {BRACK_DATA.whatsappCases.map((item) => {
              const isSelected = item.id === activeCaseId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCaseId(item.id)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-orange-50/70 border-orange-700/60 shadow-sm ring-1 ring-orange-700/40'
                      : 'bg-white border-zinc-200/80 hover:border-zinc-300 hover:bg-zinc-50/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-semibold text-orange-700 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Disuasión Exitosa
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-950 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3 text-zinc-400 shrink-0" />
                    <span>{item.sector}</span>
                  </p>
                </button>
              );
            })}

            {/* Quick trust note */}
            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200/80 space-y-2 mt-4 text-xs text-zinc-600">
              <div className="font-semibold text-zinc-900 flex items-center gap-2">
                <Radio className="w-4 h-4 text-orange-700" />
                <span>Enlace Directo Policial</span>
              </div>
              <p>
                El Centro Integral de Vigilancia cuenta con contacto directo con los oficiales de circuito UPC para despacho de patrullas prioritarias.
              </p>
            </div>
          </div>

          {/* Right: WhatsApp-style Simulated Operational Evidence Feed */}
          <div className="lg:col-span-7 bg-zinc-100 rounded-3xl p-5 sm:p-7 border border-zinc-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  CIV
                </div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-900 leading-tight">
                    Canal Operativo · {activeCase.sector.split('(')[0]}
                  </h4>
                  <p className="text-xs text-emerald-600 font-medium">
                    Operadores BRACK + Central Policial Nacional
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-zinc-400">Verificado</span>
            </div>

            {/* Simulated WhatsApp Chat Stream */}
            <div className="space-y-3 bg-[#efeae2] p-4 sm:p-5 rounded-2xl border border-[#e2dacd] max-h-96 overflow-y-auto">
              <div className="text-center">
                <span className="text-[10px] font-mono bg-white/90 text-zinc-600 px-2.5 py-1 rounded-md shadow-xs">
                  Canal de Intervención Inmediata BRACK SEGURIDAD
                </span>
              </div>

              {activeCase.chatSnippet.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${
                    msg.isAuthority ? 'items-start' : 'items-end'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl p-3 shadow-xs text-xs space-y-1 ${
                      msg.isAuthority
                        ? 'bg-white text-zinc-800 rounded-tl-xs'
                        : 'bg-[#d9fdd3] text-zinc-900 rounded-tr-xs'
                    }`}
                  >
                    <div className="text-[10px] font-bold text-zinc-500">
                      {msg.sender}
                    </div>
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    <div className="flex items-center justify-end gap-1 text-[9px] text-zinc-400 font-mono">
                      <span>{msg.time}</span>
                      <CheckCheck className="w-3 h-3 text-sky-600 inline" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Outcome Summary */}
            <div className="bg-white p-4 rounded-xl border border-zinc-200 space-y-1.5">
              <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Resultado de la Intervención:</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {activeCase.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* Real Customer Reviews Section from PDF */}
        <div className="mt-16 pt-12 border-t border-zinc-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-700">
              Testimonios Reales
            </span>
            <h3 className="text-2xl font-bold font-display text-zinc-950 mt-1">
              ¿Qué opinan quienes ya confían en BRACK?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRACK_DATA.testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200/80 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex gap-1 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-200/80">
                  <div className="font-bold text-xs text-zinc-950">{t.client}</div>
                  <div className="text-[11px] text-orange-800 font-medium">{t.buildingOrRole}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

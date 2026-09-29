import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Eye, BellOff, CheckCircle2, XCircle, ArrowRight, UserX, Cpu, Radio, Siren } from 'lucide-react';

export const ConceptBrack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparativa' | 'formula'>('comparativa');

  return (
    <section id="guardia-virtual" className="py-20 bg-zinc-50/70 border-y border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-orange-700 uppercase font-mono">
            01 · El Concepto BRACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 font-display">
            De una cámara que graba, a un equipo que vigila
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Una cámara tradicional solo registra lo que ya ocurrió. Una alarma emite un pitido que nadie atiende.
            Cuando un equipo profesional observa, analiza y disuade en vivo, el delito no se consuma.
          </p>

          {/* Interactive Mode Toggle */}
          <div className="inline-flex p-1 bg-zinc-200/70 rounded-xl mt-4">
            <button
              onClick={() => setActiveTab('comparativa')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'comparativa'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Comparativa: Físico vs Virtual
            </button>
            <button
              onClick={() => setActiveTab('formula')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'formula'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              La Fórmula BRACK (4 Capas)
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {activeTab === 'comparativa' ? (
              <motion.div
                key="comparativa"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
              >
                {/* Traditional Security Box */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-xs space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-600 flex items-center justify-center">
                        <UserX className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-zinc-900">Seguridad Tradicional</h3>
                        <p className="text-xs text-zinc-500">Guardia físico en garita + cámaras pasivas</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-md">
                      Reactiva
                    </span>
                  </div>

                  <ul className="space-y-4 text-sm text-zinc-600">
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-zinc-900 font-medium">Personal vulnerable:</strong> El guardia puede ser amenazado, agredido, sobornado o dormirse en turnos nocturnos.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-zinc-900 font-medium">Solo graba el delito:</strong> Las cámaras sirven como evidencia forense tras los hechos, no para evitarlos en el momento.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-zinc-900 font-medium">Costos elevados:</strong> Absorbe hasta el 60-70% de la recaudación mensual de alícuotas con riesgo de pasivos laborales.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-zinc-900 font-medium">Visión limitada:</strong> Una sola persona en garita no puede ver los 4 costados del predio simultáneamente.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* BRACK Intelligent Security Box */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-orange-700/80 shadow-md space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-orange-700 text-white text-[11px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    Solución Activa
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-700 text-white flex items-center justify-center shadow-xs">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-zinc-900">BRACK Guardia Virtual 24/7</h3>
                        <p className="text-xs text-orange-800 font-medium">Centro Integral de Vigilancia (CIV)</p>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 text-sm text-zinc-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-700 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-zinc-950 font-semibold">Cero riesgo en sitio:</strong> Monitoreo desde el búnker CIV. Ningún delincuente puede amedrentar a nuestros operadores.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-700 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-zinc-950 font-semibold">Disuasión por voz en vivo:</strong> Altavoces IP de alta potencia que advierten al intruso antes de que vulnere las puertas.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-700 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-zinc-950 font-semibold">Hasta 40% de ahorro directo:</strong> Elimina cargas laborales y optimiza el presupuesto del condominio o empresa.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-700 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-zinc-950 font-semibold">Cobertura total con IA:</strong> Cámaras PTZ 360°, lectura de placas y enlace inmediato con UPC / ECU-911.
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="formula"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl mx-auto"
              >
                <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-xs space-y-8">
                  <div className="text-center max-w-xl mx-auto">
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wider font-mono">
                      La Arquitectura BRACK
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mt-1 font-display">
                      Tecnología + Operadores + Protocolos + Respuesta
                    </h3>
                    <p className="text-sm text-zinc-600 mt-2">
                      Ningún eslabón queda al azar. Los 4 pilares se integran para blindar tu propiedad las 24 horas del día.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-zinc-900 text-base">1. Tecnología</h4>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Cámaras IP con analítica de video, PTZ, visión infrarroja nocturna y control de accesos automatizado.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold">
                        <Eye className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-zinc-900 text-base">2. Operadores CIV</h4>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Personal técnico entrenado en perfiles delictivos y monitoreo táctico activo los 365 días del año.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold">
                        <Radio className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-zinc-900 text-base">3. Protocolos</h4>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Pasos claros de verificación y disuasión por altavoz para no perder ni un segundo ante eventos reales.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold">
                        <Siren className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-zinc-900 text-base">4. Respuesta</h4>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Coordinación directa con patrullas policiales del UPC más cercano y notificación inmediata a propietarios.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

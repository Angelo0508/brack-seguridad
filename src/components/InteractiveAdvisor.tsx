import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bot,
  Send,
  ShieldAlert,
  DoorClosed,
  Video,
  Zap,
  Network,
  Wrench,
  CheckCircle2,
  MessageSquare,
  Megaphone,
  Copy,
  Check,
  AlertTriangle,
  RotateCcw,
  Lock,
} from 'lucide-react';
import { BRACK_DATA } from '../data/brackData';

interface ActionStep {
  stepTitle: string;
  stepDetail: string;
}

interface AdvisorResult {
  isValidSecurityQuery: boolean;
  detectedPropertyType: string;
  riskLevel: 'Crítico' | 'Alto' | 'Moderado';
  diagnosisSummary: string;
  recommendedServiceIds: string[];
  actionPlan: ActionStep[];
  deterrenceExplanation: string;
  whatsappSummary: string;
}

const INITIAL_DEMO_RESULT: AdvisorResult = {
  isValidSecurityQuery: true,
  detectedPropertyType: 'Edificio / Condominio',
  riskLevel: 'Alto',
  diagnosisSummary:
    'Ahorro del 40% frente a guardia físico. Monitoreo activo en vivo desde el CIV 24/7 con respuesta en tiempo real.',
  recommendedServiceIds: ['guardia-virtual', 'control-accesos', 'cctv-ia'],
  actionPlan: [
    {
      stepTitle: '1. Enlace CIV 24/7',
      stepDetail: 'Vigilancia activa de accesos y perímiteros sin puntos ciegos.',
    },
    {
      stepTitle: '2. Accesos Remotos',
      stepDetail: 'Validación por interfono y apertura segura de portones.',
    },
    {
      stepTitle: '3. Altavoces 110 dB',
      stepDetail: 'Disuasión por voz en vivo y alerta directa a la Policía.',
    },
  ],
  deterrenceExplanation:
    'Disuasión por voz humana en directo: el intruso escucha la advertencia y se retira de inmediato.',
  whatsappSummary:
    'Hola BRACK Seguridad, me interesa cotizar Guardia Virtual 24/7 y Control de Accesos para mi propiedad.',
};

interface InteractiveAdvisorProps {}

export const InteractiveAdvisor: React.FC<InteractiveAdvisorProps> = () => {
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [result, setResult] = useState<AdvisorResult | null>(null);
  const [isCustomResult, setIsCustomResult] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

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
        return ShieldAlert;
    }
  };

  const handleAnalyze = async () => {
    const textToAnalyze = query.trim();
    if (textToAnalyze.length < 8) {
      setErrorMsg('Por favor describe brevemente tu propiedad o requerimiento.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: textToAnalyze }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMsg(data.error || 'No se pudo generar el diagnóstico. Intenta nuevamente.');
        setLoading(false);
        return;
      }

      setResult(data as AdvisorResult);
      setIsCustomResult(true);
    } catch {
      setErrorMsg('Error de conexión al consultar con el asesor. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const matchedServices = result
    ? result.recommendedServiceIds
        .map((id) => BRACK_DATA.services.find((s) => s.id === id))
        .filter((s): s is NonNullable<typeof s> => Boolean(s))
    : [];

  const whatsappText = result
    ? [
        result.whatsappSummary || 'Hola BRACK Seguridad, solicito una cotización según el diagnóstico IA:',
        '',
        `• Propiedad: ${result.detectedPropertyType}`,
        `• Servicios recomendados: ${matchedServices.map((s) => s.title).join(', ')}`,
      ].join('\n')
    : '';

  const whatsappUrl = `https://wa.me/${BRACK_DATA.phoneInternational}?text=${encodeURIComponent(
    whatsappText
  )}`;

  const handleCopy = () => {
    if (!whatsappText) return;
    navigator.clipboard.writeText(whatsappText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const riskBadgeStyle = result
    ? result.riskLevel === 'Crítico'
      ? 'bg-rose-950/90 text-rose-300 border-rose-700/70'
      : result.riskLevel === 'Alto'
      ? 'bg-orange-950/90 text-orange-300 border-orange-700/70'
      : 'bg-emerald-950/90 text-emerald-300 border-emerald-700/70'
    : '';

  return (
    <div className="space-y-3">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800/90 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-orange-950 border border-orange-700/60 text-orange-400 flex items-center justify-center shrink-0">
            <Bot className="w-3.5 h-3.5" />
          </div>
          <h3 className="text-sm font-bold font-display text-white">
            Asesor de Seguridad con IA
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded-lg border border-zinc-800">
          <Lock className="w-3 h-3 text-emerald-400" />
          <span>IA Protegida</span>
        </div>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* LEFT COLUMN: Input */}
        <div className="lg:col-span-5 bg-zinc-950/90 border border-zinc-800/90 rounded-xl p-3 sm:p-3.5 flex flex-col justify-between space-y-2.5">
          <div className="space-y-2">
            <label
              htmlFor="ai-advisor-input"
              className="text-xs font-bold text-orange-400 font-mono block"
            >
              ¿Qué propiedad deseas proteger?
            </label>

            <div>
              <textarea
                id="ai-advisor-input"
                rows={3}
                maxLength={600}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (errorMsg) setErrorMsg(null);
                }}
                onKeyDown={(e) => {
                  if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                    e.preventDefault();
                    handleAnalyze();
                  }
                }}
                placeholder="Ej: Edificio en Quito, queremos monitorear accesos y parqueaderos..."
                className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-hidden focus:border-orange-500 transition-colors resize-none leading-relaxed"
              />
              <div className="flex items-center justify-between mt-1 px-0.5 text-[10px] font-mono text-zinc-500">
                <span>Escribe con tus palabras</span>
                <span>{query.length}/600</span>
              </div>
            </div>

            {errorMsg && (
              <div className="p-2 rounded-lg bg-rose-950/60 border border-rose-800/80 text-[11px] text-rose-200 flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 pt-0.5">
            <motion.button
              type="button"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.01 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              onClick={handleAnalyze}
              className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-orange-700 to-orange-600 hover:from-orange-600 hover:to-orange-500 disabled:opacity-60 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-orange-950/60 cursor-pointer transition-all"
            >
              {loading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Analizando...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Recomendar Servicio</span>
                </>
              )}
            </motion.button>

            {query.length > 0 && !loading && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setErrorMsg(null);
                  setIsCustomResult(false);
                  setResult(null);
                }}
                title="Limpiar"
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Results only when analyzed */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {!isCustomResult || !result ? (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-5 shadow-xl h-full flex flex-col items-center justify-center text-center space-y-2.5 min-h-[210px]"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-950/60 border border-orange-700/50 text-orange-400 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="space-y-1 max-w-sm">
                  <h4 className="text-xs font-bold text-white font-display">
                    Diagnóstico Inteligente
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Escribe la descripción de tu propiedad a la izquierda y presiona <strong>Recomendar Servicio</strong> para ver tu plan personalizado.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={result.diagnosisSummary}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 space-y-2.5 shadow-xl h-full flex flex-col justify-between"
              >
                {/* Top Row */}
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-zinc-800/80 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-mono font-bold text-white uppercase">
                        Diagnóstico Personalizado
                      </span>
                    </div>

                    {result.isValidSecurityQuery && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-zinc-300 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                          {result.detectedPropertyType}
                        </span>
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${riskBadgeStyle}`}
                        >
                          Prioridad {result.riskLevel}
                        </span>
                      </div>
                    )}
                  </div>

                  {!result.isValidSecurityQuery ? (
                    <div className="p-3 rounded-xl bg-zinc-900/90 border border-orange-800/60 space-y-1.5 text-center">
                      <ShieldAlert className="w-5 h-5 text-orange-400 mx-auto" />
                      <h4 className="text-xs font-bold text-white">
                        Asesor Exclusivo BRACK
                      </h4>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {result.diagnosisSummary}
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Diagnosis */}
                      <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800/90 space-y-1">
                        <p className="text-xs text-zinc-200 leading-relaxed">
                          {result.diagnosisSummary}
                        </p>
                        {result.deterrenceExplanation && (
                          <div className="pt-1 border-t border-zinc-800/80 flex items-start gap-1.5 text-[11px] text-orange-300">
                            <Megaphone className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                            <span>{result.deterrenceExplanation}</span>
                          </div>
                        )}
                      </div>

                      {/* Recommended Services */}
                      {matchedServices.length > 0 && (
                        <div className="space-y-1">
                          <div className="text-[10px] font-mono uppercase text-zinc-400 font-bold">
                            Servicios Recomendados:
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
                            {matchedServices.map((service) => {
                              const Icon = getServiceIcon(service.id);
                              return (
                                <a
                                  key={service.id}
                                  href={`https://wa.me/${BRACK_DATA.phoneInternational}?text=${encodeURIComponent(`Hola BRACK Seguridad, me interesa cotizar: ${service.title}.`)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-orange-500/30 hover:border-orange-500/70 transition-colors cursor-pointer flex items-center gap-2"
                                >
                                  <div className="w-5 h-5 rounded bg-orange-950 border border-orange-700/60 text-orange-400 flex items-center justify-center shrink-0">
                                    <Icon className="w-3 h-3" />
                                  </div>
                                  <h5 className="text-[11px] font-bold text-white leading-tight truncate">
                                    {service.title}
                                  </h5>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* 3-Step Plan */}
                      {result.actionPlan.length > 0 && (
                        <div className="p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/70 space-y-1">
                          {result.actionPlan.map((step, index) => (
                            <div key={index} className="flex items-start gap-2 text-[11px]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <div className="leading-snug">
                                <strong className="text-white">{step.stepTitle}:</strong>{' '}
                                <span className="text-zinc-400">{step.stepDetail}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Bottom CTA Row */}
                {result.isValidSecurityQuery && (
                  <div className="pt-2 border-t border-zinc-900 flex items-center gap-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">Enviar a WhatsApp ({BRACK_DATA.phone})</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopy}
                      title="Copiar resumen"
                      className="py-2 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 hidden sm:inline">Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

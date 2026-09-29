import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Eye,
  Scan,
  CheckCheck,
  Megaphone,
  ShieldAlert,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
  Radio,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  UserCheck
} from 'lucide-react';

export const CivSimulator: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'intrusion' | 'visita'>('intrusion');
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Steps definition based on Section 4 of the document
  const steps = [
    {
      num: '01',
      name: 'OBSERVAMOS',
      icon: Eye,
      tag: 'Supervisión Continua',
      desc: 'Nuestros operadores supervisan las cámaras de seguridad en tiempo real desde el Centro Integral de Vigilancia (CIV).',
      radarState: 'Escaneo de cuadrante normal',
      log: 'Cámaras 1 a 16 transmitiendo en 4K sin novedades.',
    },
    {
      num: '02',
      name: 'DETECTAMOS',
      icon: Scan,
      tag: 'Inteligencia Artificial',
      desc: 'La IA identifica de inmediato siluetas humanas, vehículos en perímetro o comportamientos anómalos.',
      radarState: 'ALERTA: Detección perimetral en Calle Cipreses',
      log: 'Evento clasificado: Sujeto sospechoso en zona restringida.',
    },
    {
      num: '03',
      name: 'VERIFICAMOS',
      icon: CheckCheck,
      tag: 'Cero Falsa Alarma',
      desc: 'El operador CIV amplía la imagen con cámara PTZ 360°, valida que no sea un residente o mascota y clasifica el riesgo.',
      radarState: 'Zoom óptico PTZ 360° · Evento Positivo Verificado',
      log: 'Confirmado intento de vulneración. Protocolo disuasivo habilitado.',
    },
    {
      num: '04',
      name: 'DISUADIMOS',
      icon: Megaphone,
      tag: 'Perifoneo en Vivo',
      desc: 'Activamos altavoces IP remotos de alta potencia: advertimos por voz en vivo directamente al intruso.',
      radarState: 'Audio remoto transmitiendo en sitio a 110 dB',
      log: 'Mensaje emitido: "ATENCIÓN. Área monitoreada 24/7. Retírese inmediatamente."',
    },
    {
      num: '05',
      name: 'ACTUAMOS',
      icon: ShieldAlert,
      tag: 'Coordinación & Cierre',
      desc: 'Activación de sirenas si es necesario, despacho coordinado con UPC/ECU-911 y reporte al comité de seguridad.',
      radarState: 'Coordinación policial finalizada · Predio asegurado',
      log: 'Sospechoso se retiró a la carrera. Unidad policial verificando perímetro.',
    },
  ];

  // Web Audio chime generator for realistic speaker broadcast
  const playChime = () => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.12); // A5

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.48);
    } catch {
      // Audio context might be restricted before user gesture
    }
  };

  // Speak synthesized message when reaching Disuasión step if sound is enabled
  useEffect(() => {
    if (currentStep === 3 && soundEnabled && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(
          activeScenario === 'intrusion'
            ? 'Atención. Usted se encuentra dentro de un área restringida. El lugar está siendo monitoreado en tiempo real. Retírese inmediatamente.'
            : 'Buenas noches. Se comunica el operador de Brack Guardia Virtual. Identifíquese por favor.'
        );
        utterance.lang = 'es-EC';
        utterance.rate = 1.05;
        window.speechSynthesis.speak(utterance);
      } catch {
        // Fallback gracefully
      }
    }
  }, [currentStep, soundEnabled, activeScenario]);

  // Handle step progression
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (currentStep < steps.length - 1) {
          playChime();
          setCurrentStep((prev) => prev + 1);
        } else {
          setIsPlaying(false);
        }
      }, 3600);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep]);

  const handleStartSim = () => {
    setCurrentStep(0);
    setIsPlaying(true);
    playChime();
  };

  const handleResetSim = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <section id="protocolo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-orange-700 uppercase font-mono">
            02 · Protocolo de Acción en Tiempo Real
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 font-display">
            ¿Cómo Funciona la Guardia Virtual 24/7?
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            No esperamos a que ocurra el delito para reaccionar. Observamos, detectamos con inteligencia artificial, verificamos, disuadimos por voz y coordinamos respuesta inmediata.
          </p>

          {/* Scenario Selector & Sound Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <div className="inline-flex p-1 bg-zinc-100 rounded-xl border border-zinc-200/80">
              <button
                onClick={() => {
                  setActiveScenario('intrusion');
                  handleResetSim();
                }}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeScenario === 'intrusion'
                    ? 'bg-orange-700 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Escenario 1: Intrusión Nocturna
              </button>
              <button
                onClick={() => {
                  setActiveScenario('visita');
                  handleResetSim();
                }}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeScenario === 'visita'
                    ? 'bg-orange-700 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Escenario 2: Control de Visitas
              </button>
            </div>

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                soundEnabled
                  ? 'bg-orange-50 border-orange-200 text-orange-800'
                  : 'bg-zinc-100 border-zinc-200 text-zinc-500'
              }`}
              title={soundEnabled ? 'Silenciar audio de perifoneo' : 'Activar audio de perifoneo'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline">{soundEnabled ? 'Audio disuasivo activo' : 'Silenciado'}</span>
            </button>
          </div>
        </div>

        {/* The 5-Step Process Visual Flow Header */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = currentStep === idx;
            const isCompleted = currentStep > idx;

            return (
              <button
                key={step.num}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStep(idx);
                  playChime();
                }}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-orange-700 text-white border-orange-800 shadow-md ring-2 ring-orange-400/50'
                    : isCompleted
                    ? 'bg-orange-50/80 border-orange-200 text-zinc-900'
                    : 'bg-zinc-50 border-zinc-200/80 text-zinc-600 hover:bg-zinc-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-orange-200' : 'text-zinc-400'}`}>
                    {step.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-orange-700'}`} />
                </div>
                <div className="font-bold text-xs sm:text-sm tracking-tight truncate">
                  {step.name}
                </div>
                <div className={`text-[11px] truncate ${isActive ? 'text-orange-100' : 'text-zinc-500'}`}>
                  {step.tag}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Tactical Demonstration Console */}
        <div className="mt-6 bg-zinc-950 text-white rounded-2xl border border-zinc-800 p-6 sm:p-8 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Visual Screen Simulator */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-zinc-300">
                    CANAL CIV-04 · {activeScenario === 'intrusion' ? 'PERÍMETRO NORTE / CALLE MARINO ANDRADE' : 'RECEPCIÓN Y GARITA PEATONAL'}
                  </span>
                </div>
                <span className="text-xs font-mono text-orange-400 font-semibold">
                  FASE {steps[currentStep].num} DE 05
                </span>
              </div>

              {/* Simulation Visual Window */}
              <div className="relative aspect-16/9 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 flex items-center justify-center p-6 text-center">
                {/* Sonar / Radar effect in the background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-72 h-72 rounded-full border border-orange-500/50" />
                  <div className="w-48 h-48 rounded-full border border-orange-500/60" />
                  <div className="w-24 h-24 rounded-full border border-orange-500/70" />
                  <div className="absolute w-72 h-0.5 bg-orange-500/40 radar-sweep" />
                </div>

                {/* Animated content according to current step */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeScenario}-${currentStep}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 max-w-md space-y-3"
                  >
                    {currentStep === 0 && (
                      <div className="space-y-3">
                        <div className="w-14 h-14 mx-auto rounded-full bg-orange-950/80 border border-orange-700/60 text-orange-400 flex items-center justify-center">
                          <Eye className="w-7 h-7" />
                        </div>
                        <p className="text-sm text-zinc-300 font-mono">
                          [VISTA NORMAL] Operador supervisa flujo perimetral sin anomalías.
                        </p>
                      </div>
                    )}

                    {currentStep === 1 && (
                      <div className="space-y-3">
                        <div className="w-14 h-14 mx-auto rounded-full bg-amber-950/80 border border-amber-500 text-amber-400 flex items-center justify-center animate-bounce">
                          <Scan className="w-7 h-7" />
                        </div>
                        <div className="p-3 bg-amber-950/60 border border-amber-500/40 rounded-lg text-xs font-mono text-amber-200">
                          {activeScenario === 'intrusion'
                            ? 'ALERTA IA: Silueta humana detectada saltando cerramiento exterior.'
                            : 'TIMBRE ACTIVO: Visitante tocando interfono fuera de horario habitual.'}
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-3">
                        <div className="w-14 h-14 mx-auto rounded-full bg-blue-950/80 border border-blue-500 text-blue-400 flex items-center justify-center">
                          <CheckCheck className="w-7 h-7" />
                        </div>
                        <p className="text-sm text-zinc-200 font-mono">
                          Zoom óptico PTZ 360° enfocado. Operador descarta falsa alarma y confirma requerimiento de acción inmediata.
                        </p>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-3">
                        <div className="w-16 h-16 mx-auto rounded-full bg-orange-700 text-white flex items-center justify-center shadow-lg shadow-orange-700/50 animate-pulse">
                          <Megaphone className="w-8 h-8" />
                        </div>
                        <div className="p-4 bg-orange-950/90 border-2 border-orange-500 rounded-xl text-left space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-mono text-orange-400">
                            <span>ALTAVOZ PERIFONEO ACTIVO</span>
                            <span className="flex gap-1">
                              <span className="w-1 h-3 bg-orange-500 animate-pulse" />
                              <span className="w-1 h-4 bg-orange-500 animate-pulse" />
                              <span className="w-1 h-2 bg-orange-500 animate-pulse" />
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-white font-mono">
                            {activeScenario === 'intrusion'
                              ? '«ATENCIÓN. Usted se encuentra dentro de un área restringida. El lugar está siendo monitoreado en tiempo real. Retírese inmediatamente.»'
                              : '«Buenas noches, habla el operador de guardia virtual. Por favor indique a qué departamento se dirige para solicitar autorización al propietario.»'}
                          </p>
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="space-y-3">
                        <div className="w-14 h-14 mx-auto rounded-full bg-emerald-950/80 border border-emerald-500 text-emerald-400 flex items-center justify-center">
                          {activeScenario === 'intrusion' ? (
                            <ShieldCheck className="w-7 h-7" />
                          ) : (
                            <UserCheck className="w-7 h-7" />
                          )}
                        </div>
                        <p className="text-sm text-emerald-300 font-mono">
                          {activeScenario === 'intrusion'
                            ? 'Intruso disuadido con éxito. Enlace radial con UPC policial completado y registro de bitácora generado.'
                            : 'Identidad validada con propietario por teléfono. Apertura remota de puerta ejecutada de forma segura.'}
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Bottom ticker inside screen */}
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>ESTADO: {steps[currentStep].radarState}</span>
                  <span className="text-orange-400">BRACK CIV ECUADOR</span>
                </div>
              </div>

              {/* Simulation Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={isPlaying ? handleResetSim : handleStartSim}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-orange-700 hover:bg-orange-800 rounded-lg transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <>
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Detener</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        <span>Reproducir Simulación</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      if (currentStep < steps.length - 1) {
                        playChime();
                        setCurrentStep((prev) => prev + 1);
                      } else {
                        setCurrentStep(0);
                      }
                    }}
                    className="px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg transition-colors cursor-pointer"
                  >
                    Siguiente paso →
                  </button>
                </div>

                <span className="text-xs text-zinc-400 font-mono">
                  {isPlaying ? 'Ejecutando protocolo en tiempo real...' : 'Pausa manual · Haz clic para explorar'}
                </span>
              </div>
            </div>

            {/* Right Column: Explanatory Breakdown of Active Step */}
            <div className="lg:col-span-5 bg-zinc-900/90 rounded-xl p-6 border border-zinc-800 space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-orange-400 text-xs font-mono font-semibold uppercase">
                  <span>PASO {steps[currentStep].num}</span>
                  <span>·</span>
                  <span>{steps[currentStep].tag}</span>
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  {steps[currentStep].name}
                </h3>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {steps[currentStep].desc}
              </p>

              <div className="pt-3 border-t border-zinc-800 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Registro de Consola CIV:
                </span>
                <div className="bg-black/60 p-3 rounded-lg border border-zinc-800 text-xs font-mono text-orange-300">
                  &gt; {steps[currentStep].log}
                </div>
              </div>

              {/* Distinction highlight */}
              <div className="p-3.5 bg-orange-950/40 border border-orange-700/30 rounded-lg text-xs text-orange-200 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Diferencia clave:</strong> Ningún guardia físico se arriesga a confrontar agresores. La disuasión remota evita el delito con 100% de efectividad y cero bajas.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

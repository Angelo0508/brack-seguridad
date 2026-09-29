import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRACK_DATA } from '../data/brackData';
import {
  Eye,
  Megaphone,
  ShieldCheck,
  VideoOff,
  UserCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  MessageSquareWarning,
  Shield,
  Users,
  Clock,
  Cpu,
  Phone,
  Mail,
  Globe,
} from 'lucide-react';

type ScenarioId = 'camaras-solas' | 'guardia-fisico' | 'brack-activo';

interface ScenarioData {
  id: ScenarioId;
  stepNumber: string;
  shortTitle: string;
  subtitle: string;
  badgeText: string;
  badgeColor: string;
  icon: React.ElementType;
  whatHappens: string;
  whatPersonThinks: string;
  finalResult: string;
  deterrenceLabel: string;
  deterrenceScore: number;
  barColor: string;
  statusIcon: React.ElementType;
  statusColor: string;
}

export const HAWTHORNE_SCENARIOS: ScenarioData[] = [
  {
    id: 'camaras-solas',
    stepNumber: '1',
    shortTitle: 'Solo Cámaras Comunes',
    subtitle: 'Graban en silencio sin monitoreo en vivo',
    badgeText: 'Sin Disuasión',
    badgeColor: 'bg-rose-950/80 text-rose-300 border-rose-800/70',
    icon: VideoOff,
    whatHappens:
      'Las cámaras graban el hecho en silencio pero nadie interviene en el momento.',
    whatPersonThinks:
      '"Nadie está mirando en vivo. Entro rápido y no me atrapan."',
    finalResult:
      'El delito ocurre igual. Solo queda el video de lo que ya pasó.',
    deterrenceLabel: 'Bajo (0% presión al intruso)',
    deterrenceScore: 15,
    barColor: 'bg-rose-500',
    statusIcon: XCircle,
    statusColor: 'text-rose-400',
  },
  {
    id: 'guardia-fisico',
    stepNumber: '2',
    shortTitle: 'Guardia Físico en Sitio',
    subtitle: 'Una sola persona sujeta a cansancio o rondas',
    badgeText: 'Disuasión Limitada',
    badgeColor: 'bg-amber-950/80 text-amber-300 border-amber-800/70',
    icon: UserCheck,
    whatHappens:
      'La seguridad depende de que el guardia no esté en ronda, distraído o descansando.',
    whatPersonThinks:
      '"Esperaré a que se distraiga o se vaya a otro sector para entrar."',
    finalResult:
      'Cobertura parcial vulnerable en madrugadas o cambios de turno.',
    deterrenceLabel: 'Medio (Vulnerable a distracciones)',
    deterrenceScore: 50,
    barColor: 'bg-amber-500',
    statusIcon: AlertTriangle,
    statusColor: 'text-amber-400',
  },
  {
    id: 'brack-activo',
    stepNumber: '3',
    shortTitle: 'Guardia Virtual BRACK',
    subtitle: 'Supervisión en vivo + Voz inmediata a 110 dB',
    badgeText: 'Disuasión Máxima',
    badgeColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/70',
    icon: Megaphone,
    whatHappens:
      'Al menor movimiento sospechoso, el operador lo ve y le advierte en vivo por altavoces.',
    whatPersonThinks:
      '"¡Me están viendo en vivo y ya llamaron a la Policía! Me voy ya."',
    finalResult:
      'El sospechoso huye en segundos antes de causar daños o pérdidas.',
    deterrenceLabel: 'Máximo (95% huida inmediata)',
    deterrenceScore: 96,
    barColor: 'bg-emerald-500',
    statusIcon: CheckCircle2,
    statusColor: 'text-emerald-400',
  },
];

export const HawthorneInteractiveCard: React.FC = () => {
  const [selectedId, setSelectedId] = useState<ScenarioId>('brack-activo');

  const current =
    HAWTHORNE_SCENARIOS.find((s) => s.id === selectedId) || HAWTHORNE_SCENARIOS[2];
  const StatusIcon = current.statusIcon;

  return (
    <div className="bg-zinc-900/90 rounded-xl p-3.5 sm:p-4 border border-zinc-800 space-y-3">
      {/* 3 Option Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {HAWTHORNE_SCENARIOS.map((item) => {
          const Icon = item.icon;
          const isSelected = item.id === selectedId;
          const isBrack = item.id === 'brack-activo';

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(item.id)}
              className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                isSelected
                  ? isBrack
                    ? 'bg-orange-950/60 border-orange-500 text-white'
                    : 'bg-zinc-800 border-zinc-500 text-white'
                  : 'bg-zinc-950/70 border-zinc-800/80 text-zinc-400 hover:border-zinc-700'
              }`}
            >
              <div className="min-w-0">
                <div className="text-xs font-bold truncate">{item.shortTitle}</div>
                <div className="text-[10px] text-zinc-400 truncate">{item.badgeText}</div>
              </div>
              <Icon
                className={`w-4 h-4 shrink-0 ${
                  isSelected
                    ? isBrack
                      ? 'text-orange-400'
                      : 'text-white'
                    : 'text-zinc-500'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Active Compact Scenario Result */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          className="bg-zinc-950 rounded-lg p-3 sm:p-3.5 border border-zinc-800/80 space-y-2.5"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-2 border-b border-zinc-900 pb-2">
            <div className="flex items-center gap-2">
              <StatusIcon className={`w-4 h-4 ${current.statusColor}`} />
              <span className="text-xs font-bold text-white">{current.shortTitle}</span>
            </div>
            <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${current.badgeColor}`}>
              {current.badgeText}
            </span>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div className="p-2.5 rounded-md bg-orange-950/20 border border-orange-900/40 space-y-1">
              <span className="text-[10px] font-mono uppercase text-orange-400 font-bold block">
                Reacción / Pensamiento:
              </span>
              <p className="text-orange-100 italic text-[11px] leading-snug">
                {current.whatPersonThinks}
              </p>
            </div>

            <div className="p-2.5 rounded-md bg-zinc-900/60 border border-zinc-800/60 space-y-1">
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">
                Resultado en Tu Propiedad:
              </span>
              <p className="text-white font-medium text-[11px] leading-snug">
                {current.finalResult}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[10px] font-mono">
              <span className="text-zinc-400">Poder Disuasivo:</span>
              <span className="font-semibold text-zinc-200">{current.deterrenceLabel}</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${current.barColor}`}
                initial={{ width: 0 }}
                animate={{ width: `${current.deterrenceScore}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Static, well-organized section containing the non-duplicated SEGULLAURI CIA. LTDA. PDF information
export const HawthorneSection: React.FC = () => {
  const physicalPillars = [
    {
      num: '01',
      title: 'Control de Accesos',
      desc: 'Verificación y supervisión del ingreso y salida de personas, vehículos y proveedores.',
    },
    {
      num: '02',
      title: 'Rondas Preventivas',
      desc: 'Recorridos estratégicos para detectar novedades y reducir riesgos.',
    },
    {
      num: '03',
      title: 'Vigilancia Permanente',
      desc: 'Presencia activa del personal para fortalecer la seguridad y el orden.',
    },
    {
      num: '04',
      title: 'Respuesta Inmediata',
      desc: 'Actuación oportuna ante incidentes, alertas o situaciones de emergencia.',
    },
  ];

  const hybridBenefits = [
    {
      num: '1',
      title: 'Mayor cobertura y control',
      icon: Users,
    },
    {
      num: '2',
      title: 'Respuesta más rápida',
      icon: Clock,
    },
    {
      num: '3',
      title: 'Protección integral con apoyo tecnológico',
      icon: Cpu,
    },
  ];

  return (
    <section
      id="segullauri-info"
      className="py-12 sm:py-16 bg-[#050507] text-white border-t border-zinc-800/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Main Operational Blocks Grid: Seguridad Física (con Alianza SEGULLAURI) & Seguridad Híbrida */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Seguridad Física con Alianza SEGULLAURI CIA. LTDA. */}
          <div className="lg:col-span-7 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 space-y-5 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase text-orange-400 font-bold tracking-wider bg-orange-950/60 px-3 py-1 rounded-lg border border-orange-900/60 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-orange-500" />
                  Alianza Estratégica · SEGULLAURI CIA. LTDA.
                </span>
                <span className="text-[11px] font-mono text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
                  Constituida desde 2002 (+24 años)
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Protección Presencial Certificada &amp; Seguridad Física
                </h3>
                <p className="text-xs text-orange-400 font-mono font-semibold">
                  Guardias armados · Cobertura 12h y 24h
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed text-justify">
                En alianza estratégica con <strong>SEGULLAURI CIA. LTDA.</strong> (empresa legalmente constituida desde 2002 bajo cumplimiento estricto de la Ley de Vigilancia y Seguridad Privada en Ecuador), proveemos servicio de guardias presenciales armados en modalidades de 12 y 24 horas, respaldados por supervisión constante y capacitación táctica de alto nivel.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {physicalPillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800/90 space-y-1 hover:border-orange-500/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-orange-700 text-white font-mono text-xs font-bold shadow-xs">
                      {pillar.num}
                    </span>
                    <h4 className="text-xs font-bold text-white">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed text-justify">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Seguridad Híbrida (Seguridad Física + Seguridad Virtual) */}
          <div className="lg:col-span-5 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 space-y-5 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              {/* Image hibrida.jpeg embedded compactly */}
              <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-md relative h-40 sm:h-44 bg-zinc-950 group">
                <img
                  src="/images/hibrida.jpeg"
                  alt="Seguridad Híbrida - SEGULLAURI & BRACK"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-[10px] font-mono text-orange-400 font-bold bg-zinc-950/80 px-2.5 py-0.5 rounded border border-zinc-800">
                  Operación Híbrida en Sitio &amp; Remota
                </span>
              </div>

              <span className="text-xs font-mono uppercase text-orange-400 font-bold tracking-wider block">
                Seguridad Física + Seguridad Virtual
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Seguridad Híbrida
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed text-justify">
                Integra la presencia estratégica del personal en sitio con la vigilancia remota y el monitoreo tecnológico, logrando prevención, control y respuesta inmediata en un solo servicio.
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed text-justify">
                Esta combinación fortalece la cobertura, reduce riesgos y permite actuar con mayor eficiencia ante cualquier novedad.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {hybridBenefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800/90 flex items-center gap-3 hover:border-orange-500/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-orange-950 border border-orange-700/60 text-orange-400 flex items-center justify-center shrink-0 shadow-md">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {item.num}. {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4. Contact & Free Security Study Strip */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-5 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 max-w-xl">
            <div className="text-base sm:text-lg font-bold text-white font-display">
              Estudio Integral de Seguridad <span className="text-orange-400">Sin Costo</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 text-justify">
              Construimos la mejor oferta ajustada a tus necesidades operativas, físicas o híbridas.
            </p>
          </div>

          <div>
            <a
              href={`https://wa.me/${BRACK_DATA.phoneInternational}?text=${encodeURIComponent(
                'Hola BRACK Seguridad, solicito un estudio integral de seguridad sin costo.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-orange-700 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold cursor-pointer transition-colors shadow-lg shadow-orange-950/60 gap-2 shrink-0"
            >
              <span>Escribir por WhatsApp ({BRACK_DATA.phone})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldAlert,
  DoorClosed,
  Video,
  Zap,
  Network,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  X
} from 'lucide-react';
import { BRACK_DATA, ServiceItem } from '../data/brackData';

interface ServicesGridProps {}

export const ServicesGrid: React.FC<ServicesGridProps> = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos los Servicios' },
    { id: 'guardia', label: 'Guardia Virtual 24/7' },
    { id: 'cctv', label: 'CCTV & Accesos' },
    { id: 'infra', label: 'Redes e Infraestructura' },
  ];

  const filteredServices = BRACK_DATA.services.filter((s) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'guardia') return s.id === 'guardia-virtual';
    if (activeCategory === 'cctv') return s.id === 'control-accesos' || s.id === 'cctv-ia' || s.id === 'alarmas-perimetral';
    if (activeCategory === 'infra') return s.id === 'redes-infraestructura' || s.id === 'mantenimiento-diagnostico';
    return true;
  });

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
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-orange-700 uppercase font-mono">
            04 · Portafolio de Soluciones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 font-display">
            Servicios Integrales de Seguridad Electrónica
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed text-justify">
            Desde la vigilancia remota activa hasta redes de telecomunicaciones blindadas. Soluciones a la medida para urbanizaciones, edificios, empresas y predios extensos.
          </p>

          {/* Clean Segmented Filter */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-zinc-100 rounded-xl max-w-xl mx-auto mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento / Asymmetric Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => {
            const Icon = getServiceIcon(service.id);
            const isFeatured = service.id === 'guardia-virtual';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group ${
                  isFeatured
                    ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-orange-50/60 to-white border-orange-200/90 shadow-sm'
                    : 'bg-white border-zinc-200/80 hover:border-orange-300/80 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center group-hover:bg-orange-700 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-medium text-zinc-400">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-zinc-950 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4 text-justify">
                    {service.summary}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6 text-xs text-zinc-600">
                    {service.details.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Showcase: 2 High Quality Photographic Assets with context */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: PTZ Surveillance */}
          <div className="rounded-2xl overflow-hidden border border-zinc-200/90 relative group shadow-xs">
            <div className="aspect-16/10 relative overflow-hidden bg-zinc-100">
              <img
                src="/images/camera_ptz_guard.jpg"
                alt="Cámaras PTZ de alta resolución para seguridad perimetral"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-semibold">
                  Hardware Certificado · Videovigilancia
                </span>
                <h4 className="text-lg font-bold font-display">
                  Cámaras PTZ 360° & Analítica Facial y LPR
                </h4>
                <p className="text-xs text-zinc-300 line-clamp-2">
                  Seguimiento visual continuo, zoom óptico de alta precisión y discriminación de amenazas con inteligencia artificial.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Smart Access */}
          <div className="rounded-2xl overflow-hidden border border-zinc-200/90 relative group shadow-xs">
            <div className="aspect-16/10 relative overflow-hidden bg-zinc-100">
              <img
                src="/images/smart_access_entry.jpg"
                alt="Control de acceso inteligente y recepción remota"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-semibold">
                  Acceso Supervisado · Recepción Remota
                </span>
                <h4 className="text-lg font-bold font-display">
                  Gestión Inteligente de Accesos y Visitantes
                </h4>
                <p className="text-xs text-zinc-300 line-clamp-2">
                  Atención remota desde el CIV, verificación de identidad y apertura autorizada de puertas peatonales y vehiculares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

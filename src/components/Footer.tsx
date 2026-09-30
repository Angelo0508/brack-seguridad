import React from 'react';
import { Shield, Phone, MapPin, Instagram, ArrowUp, Mail } from 'lucide-react';
import { BRACK_DATA } from '../data/brackData';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] text-white border-t border-zinc-900 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-zinc-900">
          {/* Brand & Slogan */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-orange-500/40 p-1 flex items-center justify-center text-white shrink-0">
                <img
                  src="/brack_logo.png"
                  alt="BRACK Centauro Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_1px_3px_rgba(234,88,12,0.4)]"
                />
              </div>
              <span className="font-display font-black text-lg tracking-tight text-white leading-none">
                BRACK<span className="text-orange-500">.</span>
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase">
                {BRACK_DATA.company}
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm text-justify">
              Seguridad activa con Guardia Virtual 24/7, disuasión por perifoneo en tiempo real y centro de operaciones CIV.
            </p>
          </div>

          {/* Locations */}
          <div className="lg:col-span-4 space-y-2 text-xs text-zinc-400">
            <div className="font-mono text-white text-[11px] uppercase tracking-wider mb-2">
              Sedes Operativas
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
              <span><strong>Oficina:</strong> {BRACK_DATA.locations.office}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
              <span><strong>CIV:</strong> {BRACK_DATA.locations.civ}</span>
            </div>
          </div>

          {/* Direct Line */}
          <div className="lg:col-span-3 space-y-2 text-xs text-zinc-400">
            <div className="font-mono text-white text-[11px] uppercase tracking-wider mb-2">
              Contacto 24/7
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <a
                href={`https://wa.me/${BRACK_DATA.phoneInternational}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:underline font-mono"
              >
                {BRACK_DATA.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <a
                href="mailto:ventas@brackseguridad.com"
                className="hover:text-white truncate"
              >
                ventas@brackseguridad.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <a
                href="https://instagram.com/brackseguridad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {BRACK_DATA.instagram}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 fill-current text-orange-400 shrink-0" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.05a8.16 8.16 0 0 0 4.91 1.62V7.22a4.85 4.85 0 0 1-1-.53z" />
              </svg>
              <a
                href="https://www.tiktok.com/@brackseguridad.ec?lang=es"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                @brackseguridad.ec
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <p>© 2026 BRACKSEGURIDAD S.A.S. Quito, Ecuador · Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${BRACK_DATA.phoneInternational}?text=${encodeURIComponent('Hola BRACK Seguridad, deseo solicitar información y cotización de sus servicios.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 font-medium cursor-pointer"
            >
              Contactar por WhatsApp
            </a>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

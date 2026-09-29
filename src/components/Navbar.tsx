import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ArrowRight, Bot } from 'lucide-react';
import { BRACK_DATA } from '../data/brackData';

interface NavbarProps {
  onOpenQuote?: () => void;
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'asesor-interactivo', label: 'Asesor con IA', isInteractive: true },
    { id: 'protocolo', label: '¿Cómo Funciona?' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'hawthorne', label: 'Efecto Disuasivo' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    const consoleEl = document.getElementById('consola-operativa');
    if (consoleEl) {
      consoleEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/92 backdrop-blur-md border-b border-zinc-800/90 shadow-xl shadow-black/50'
          : 'bg-[#09090b] border-b border-zinc-800/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Wordmark with spring hover */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2.5 group focus-visible:outline-hidden"
          aria-label="BRACK Seguridad Inteligente"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-950/80 to-zinc-950 border border-orange-500/40 p-1 flex items-center justify-center text-white shadow-md shadow-orange-950/60 group-hover:border-orange-500 transition-colors shrink-0">
            <img
              src="/brack_logo.png"
              alt="BRACK Centauro Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(234,88,12,0.4)]"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-xl tracking-tight text-white leading-none">
                BRACK<span className="text-orange-500">.</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-0.5" title="CIV Operativo" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase mt-0.5">
              Seguridad Inteligente
            </span>
          </div>
        </motion.a>

        {/* Navigation Tabs with Spring Glider Animation */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-950/90 border border-zinc-800/90 p-1.5 rounded-xl relative shadow-inner">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 focus-visible:outline-hidden ${
                  isActive
                    ? 'text-white font-bold'
                    : item.isInteractive
                    ? 'text-orange-400 hover:text-white font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navTabActiveGlider"
                    className="absolute inset-0 bg-gradient-to-b from-orange-700 to-orange-800 rounded-lg shadow-md shadow-orange-950/80 z-0"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.isInteractive && (
                    <Bot className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-orange-400'}`} />
                  )}
                  <span>{item.label}</span>
                </span>
              </button>
            );
          })}
        </nav>

        {/* Actions with Spring Hover */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/${BRACK_DATA.phoneInternational}?text=${encodeURIComponent(
              'Hola Brack Seguridad, solicito información sobre el servicio de Guardia Virtual.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-mono font-medium text-zinc-300 hover:text-orange-400 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-orange-500/60 rounded-xl transition-all whitespace-nowrap shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-orange-500" />
            <span>{BRACK_DATA.phone}</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(194, 65, 12, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            href={`https://wa.me/${BRACK_DATA.phoneInternational}?text=${encodeURIComponent('Hola BRACK Seguridad, me gustaría cotizar sus servicios.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-orange-700 hover:bg-orange-600 rounded-xl transition-all cursor-pointer whitespace-nowrap group"
          >
            <span>Cotizar</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={`https://wa.me/${BRACK_DATA.phoneInternational}?text=${encodeURIComponent('Hola BRACK Seguridad, me gustaría cotizar sus servicios.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs font-semibold text-white bg-orange-700 rounded-lg"
          >
            Cotizar
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-b border-zinc-800 bg-[#09090b] px-4 pt-3 pb-5 space-y-2 overflow-hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left px-3 py-2 text-sm font-medium text-zinc-300 hover:text-orange-400 hover:bg-zinc-900 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
              >
                {item.isInteractive && <Bot className="w-4 h-4 text-orange-400" />}
                <span>{item.label}</span>
              </button>
            ))}
            <div className="pt-2 border-t border-zinc-800/80">
              <a
                href={`https://wa.me/${BRACK_DATA.phoneInternational}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-mono text-zinc-300 bg-zinc-900 rounded-xl border border-zinc-800"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                Llamar al {BRACK_DATA.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

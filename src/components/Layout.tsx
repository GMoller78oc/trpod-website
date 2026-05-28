import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Cloud, BarChart, Settings, Database, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0A0A0B]/90 backdrop-blur-md shadow-sm border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            {/* TPROD Logo abstraction or text */}
            <div className="font-bold text-2xl tracking-tighter text-white flex items-center">
              TPR<span className="relative inline-block w-8 h-8 mx-0.5">
                  <Cloud className="absolute inset-0 text-brand-teal w-full h-full" strokeWidth={1.5} />
                  <Database className="absolute inset-0 m-auto text-brand-red w-4 h-4" strokeWidth={2} />
              </span>D
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-xs font-bold hover:text-white transition-colors uppercase tracking-[0.2em] text-zinc-400">About</a>
            <a href="#services" className="text-xs font-bold hover:text-white transition-colors uppercase tracking-[0.2em] text-zinc-400">Services</a>
            <a href="#work" className="text-xs font-bold hover:text-white transition-colors uppercase tracking-[0.2em] text-zinc-400">Work</a>
            <a href="#contact" className="text-xs font-bold bg-brand-teal/10 border border-brand-teal/30 text-brand-teal px-5 py-2.5 rounded hover:bg-brand-teal hover:text-white transition-colors uppercase tracking-[0.2em]">
              Get in Touch
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0B] shadow-lg py-4 px-6 flex flex-col gap-4 border-t border-white/10"
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 py-2">About</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 py-2">Services</a>
            <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 py-2">Work</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal py-2">Contact Us</a>
          </motion.div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-transparent border-t border-white/10 text-white py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-bold text-3xl tracking-tighter flex items-center mb-6">
              TPR<span className="relative inline-block w-10 h-10 mx-0.5">
                  <Cloud className="absolute inset-0 text-brand-teal w-full h-full" strokeWidth={1.5} />
              </span>D
            </div>
            <p className="text-zinc-500 max-w-sm mb-8 text-lg font-light leading-relaxed">
              Driving digital transformation through intelligent cloud architecture and process automation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-zinc-500">
              <li><a href="#" className="hover:text-brand-teal transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Power Platform</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">CRM Administration</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Fabric Data Architecture</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-zinc-500">
              <li>Centurion, South Africa</li>
              <li><a href="tel:0845565797" className="hover:text-brand-teal transition-colors">084 556 5797</a></li>
              <li><a href="mailto:diederik@tprod.co.za" className="hover:text-brand-teal transition-colors">diederik@tprod.co.za</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} TPROD Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

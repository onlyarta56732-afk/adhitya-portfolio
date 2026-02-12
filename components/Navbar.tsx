import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Home, User, Briefcase, Code, Mail, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (label: string) => {
    switch (label) {
      case 'Home': return <Home size={18} />;
      case 'About': return <User size={18} />;
      case 'Certificates': return <Award size={18} />;
      case 'Experience': return <Briefcase size={18} />;
      case 'Projects': return <Code size={18} />;
      case 'Contact': return <Mail size={18} />;
      default: return <Cpu size={18} />;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none`}
      >
        <div className={`pointer-events-auto transition-all duration-300 ${scrolled ? 'w-auto' : 'w-full max-w-7xl'}`}>
          <div className={`${scrolled ? 'glass rounded-full px-6 py-3' : 'px-4 py-4'} flex items-center justify-between transition-all duration-300`}>

            {/* Logo */}
            <div className={`flex items-center gap-2 cursor-pointer ${scrolled ? 'mr-8' : ''}`} onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gradient-to-tr from-primary to-secondary p-1.5 rounded-lg">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className={`font-bold text-lg tracking-wide ${scrolled ? 'hidden md:block' : 'block'}`}>
                ADHITYA<span className="text-primary">.DEV</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group rounded-full hover:bg-white/5"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {scrolled && getIcon(item.label)}
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-white/10 text-slate-200 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-24 px-4 bg-black/60 backdrop-blur-xl md:hidden"
          >
            <div className="glass rounded-2xl overflow-hidden p-2 space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-white/10 text-slate-200 transition-colors"
                >
                  <div className="p-2 bg-white/5 rounded-lg text-primary">
                    {getIcon(item.label)}
                  </div>
                  <span className="font-medium text-lg">{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
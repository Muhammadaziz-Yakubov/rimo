import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = ({ onOpenWaitlist }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Muammo', href: '#problem' },
    { name: 'Yechim', href: '#solution' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Imkoniyatlar', href: '#features' },
    { name: 'Qanday ishlaydi', href: '#how-it-works' },
    { name: 'Xavfsizlik', href: '#security' },
    { name: 'FAQ', href: '#faq' },
    { name: "Bog'lanish", href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white/50 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group" id="nav-logo">
          <img
            src="/rimo.png"
            alt="Rimo Logo"
            className="w-36 h-36 rounded-lg object-contain group-hover:scale-105 transition-transform duration-200"
          />

        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-[#111111] transition-colors duration-200"
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onOpenWaitlist}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black transition-all duration-300 shadow-sm hover:shadow flex items-center gap-1 group cursor-pointer"
            id="nav-cta-btn"
          >
            <span>Bepul boshlash</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
          id="nav-mobile-toggle"
        >
          {isOpen ? <X className="w-5 h-5 text-[#111111]" /> : <Menu className="w-5 h-5 text-[#111111]" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 pt-2 pb-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-600 hover:text-[#111111] py-1.5 transition-colors"
                  id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-100 my-2" />
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full py-3 rounded-xl bg-[#111111] text-white text-center font-medium text-sm flex items-center justify-center gap-2 cursor-pointer"
                id="mobile-nav-cta"
              >
                <span>Bepul boshlash</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

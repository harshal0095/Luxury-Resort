
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-widest flex items-center space-x-2">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`serif ${isScrolled ? 'text-stone-900' : 'text-white'}`}
          >
            Trinetra <span className="gold-text"></span>
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative group text-sm font-medium tracking-widest uppercase transition-colors ${
                isScrolled ? 'text-stone-700 hover:text-stone-900' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 gold-bg transition-all duration-300 group-hover:w-full"
                layoutId={location.pathname === link.path ? "underline" : ""}
              />
            </Link>
          ))}
          <Link
            to="/rooms"
            className={`px-6 py-2 border text-xs tracking-widest uppercase font-bold transition-all duration-300 ${
              isScrolled
                ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-stone-900'
            }`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-stone-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-stone-900 z-50 flex flex-col items-center justify-center space-y-8"
          >
            <button
              className="absolute top-8 right-8 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white text-2xl font-light tracking-widest uppercase hover:gold-text transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/rooms"
              className="px-10 py-4 border border-white text-white text-lg tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070"
          alt="Luxury Resort"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ opacity }}
        >
          <span className="text-white/80 uppercase tracking-[0.4em] text-sm mb-6 block font-medium">
            Welcome to Paradise
          </span>
          <h1 className="text-5xl md:text-8xl text-white mb-8 font-serif italic tracking-tight leading-tight">
            Escape to Luxury <br />
            <span className="gold-text not-italic">& Comfort</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience world-class stays at breathtaking destinations where the horizon meets the ocean.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/rooms"
              className="px-10 py-4 gold-bg text-stone-900 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 w-full sm:w-auto"
            >
              Book Your Stay
            </Link>
            <Link
              to="/gallery"
              className="px-10 py-4 border border-white text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-stone-900 transition-all duration-300 w-full sm:w-auto"
            >
              Explore Resort
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-stone-900 flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-white text-4xl md:text-6xl font-serif tracking-[0.3em] mb-4">
          Trinetra <span className="gold-text"></span>
        </h1>
        <div className="relative h-px w-48 mx-auto overflow-hidden bg-white/10">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 bottom-0 w-24 gold-bg"
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/40 text-[10px] uppercase tracking-[0.5em] mt-8 font-bold"
        >
          Luxury is Awaiting
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;

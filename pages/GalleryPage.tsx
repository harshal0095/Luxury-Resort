
import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';

const GalleryPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2070" 
          alt="Gallery Header"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white mt-16">
          <h1 className="text-4xl md:text-6xl font-serif italic mb-2">Moments</h1>
          <p className="text-xs uppercase tracking-[0.4em] font-medium opacity-80">Captured through our lens</p>
        </div>
      </section>
      
      <Gallery />

      <section className="py-24 bg-[#fdfbf7] text-center">
        <h3 className="text-3xl font-serif italic mb-8">Follow Our Journey On Instagram</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="w-40 h-40 overflow-hidden relative group cursor-pointer">
              <img 
                src={`https://picsum.photos/400/400?random=${i}`} 
                alt="Instagram feed" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <span className="text-xs tracking-widest font-bold">@trinetra</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default GalleryPage;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?auto=format&fit=crop&q=80&w=800",
];

const Gallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % images.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="gold-text uppercase tracking-widest text-xs font-bold mb-4 block">Visual Journey</span>
        <h2 className="text-4xl md:text-6xl font-serif italic">Immerse Yourself</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedIdx(i)}
            className={`overflow-hidden cursor-pointer ${i === 1 || i === 4 ? 'md:row-span-2' : ''}`}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={img}
              alt="Resort Life"
              className="w-full h-full object-cover aspect-square md:aspect-auto min-h-[300px]"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedIdx(null)}
            >
              <X size={40} strokeWidth={1} />
            </motion.button>

            <button
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={prevImage}
            >
              <ChevronLeft size={60} strokeWidth={1} />
            </button>

            <button
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={nextImage}
            >
              <ChevronRight size={60} strokeWidth={1} />
            </button>

            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
            >
              <img
                src={images[selectedIdx]}
                alt="Gallery preview"
                className="max-w-full max-h-full object-contain shadow-2xl pointer-events-none"
              />
              <div className="absolute bottom-[-40px] left-0 right-0 text-center">
                <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-bold">
                  Image {selectedIdx + 1} of {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

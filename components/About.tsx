
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const AnimatedCounter: React.FC<{ value: string; duration?: number }> = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Extract the numeric part and the suffix (e.g., "150+" -> { num: 150, suffix: "+" })
  const numPart = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numPart;
      const totalFrames = duration * 60;
      const increment = end / totalFrames;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, numPart, duration]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
};

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [1, 1.1]);

  const stats = [
    { label: 'Luxury Rooms', value: '150+' },
    { label: 'Global Awards', value: '42' },
    { label: 'Happy Guests', value: '25k' },
    { label: 'Years Excellence', value: '15' }
  ];

  return (
    <section className="relative py-24 bg-stone-900 text-white overflow-hidden">
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 opacity-20 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Architecture"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="gold-text uppercase tracking-widest text-xs font-bold mb-4 block">Our Legacy</span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-8 leading-tight">Crafting Moments <br />Of Pure Serenity</h2>
            <p className="text-stone-400 font-light text-lg leading-relaxed mb-10">
              Founded on the principles of timeless elegance and unparalleled service, Trinetra has been a sanctuary for discerning travelers for over a decade. We believe that true luxury lies in the details—the softest linens, the freshest ingredients, and the warmth of a genuine welcome.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-3xl font-serif gold-text">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden border-[12px] border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800" 
                alt="Hospitality"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-10 hidden md:block">
              <span className="text-stone-900 text-3xl font-serif italic">100% Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

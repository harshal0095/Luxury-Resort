
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Home as HomeIcon, CheckCircle } from 'lucide-react';

const BookingPanel: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="relative z-20 max-w-6xl mx-auto -mt-16 px-4">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white p-8 shadow-2xl rounded-sm grid grid-cols-1 md:grid-cols-4 gap-6 items-end"
      >
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold flex items-center">
            <Calendar size={12} className="mr-2 gold-text" /> Check In
          </label>
          <input
            type="date"
            className="w-full border-b border-stone-200 py-2 focus:border-stone-900 outline-none text-sm bg-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold flex items-center">
            <Calendar size={12} className="mr-2 gold-text" /> Check Out
          </label>
          <input
            type="date"
            className="w-full border-b border-stone-200 py-2 focus:border-stone-900 outline-none text-sm bg-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold flex items-center">
            <Users size={12} className="mr-2 gold-text" /> Guests
          </label>
          <select className="w-full border-b border-stone-200 py-2 focus:border-stone-900 outline-none text-sm bg-transparent">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>3 Adults</option>
            <option>4 Adults</option>
          </select>
        </div>
        <button
          onClick={handleCheck}
          disabled={loading || success}
          className={`h-[45px] px-8 gold-bg text-stone-900 text-[10px] font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all flex items-center justify-center ${
            loading || success ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-4 h-4 border-2 border-stone-900 border-t-transparent rounded-full"
            />
          ) : success ? (
            <span className="flex items-center"><CheckCircle size={16} className="mr-2" /> Available</span>
          ) : (
            'Check Availability'
          )}
        </button>
      </motion.div>
    </div>
  );
};

export default BookingPanel;


import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ConciergeAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Good evening. I am Azure, your virtual concierge. How may I assist you with your luxury stay today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: "You are Azure, a sophisticated and highly professional concierge for 'Trinetra Luxury Resort'. Your tone is elegant, helpful, hospitable, and refined. You provide details about local attractions, room service, booking assistance, and general luxury advice. Keep responses concise and extremely polite.",
          temperature: 0.7,
        }
      });

      const botText = response.text || "I apologize, but I am experiencing a momentary lapse. How else may I assist you?";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Forgive me, my connection is momentarily interrupted. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 gold-bg text-stone-900 rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
      >
        <Sparkles size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-28 right-8 z-50 w-[350px] md:w-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-100"
          >
            {/* Header */}
            <div className="bg-stone-900 p-6 text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 gold-bg rounded-full flex items-center justify-center text-stone-900">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="font-serif italic text-lg leading-none">Azure</h4>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Virtual Concierge</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="h-[400px] overflow-y-auto p-6 space-y-4 bg-stone-50/50"
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-stone-900 text-white rounded-tr-none' 
                      : 'bg-white shadow-sm border border-stone-100 text-stone-700 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex space-x-1">
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 gold-bg rounded-full" />
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 gold-bg rounded-full" />
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 gold-bg rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-stone-100">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="How may I assist you?"
                  className="flex-grow bg-stone-100 px-4 py-3 rounded-full text-sm outline-none focus:bg-stone-200 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 gold-bg text-stone-900 rounded-full flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConciergeAI;

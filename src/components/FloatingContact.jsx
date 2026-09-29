import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, ArrowUp, X } from 'lucide-react';
import { companyDetails } from '../data/navigation';

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
      
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={scrollToTop}
            title="Scroll to Top"
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-white text-slate-700 hover:text-brand-600 border border-slate-200 shadow-md flex items-center justify-center transition-colors focus:outline-none"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded Quick Contact Popover */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-4 shadow-dropdown border border-slate-200 w-72 mb-1"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold text-slate-900">Contact Smart Word Dubai</span>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-slate-400 hover:text-slate-600 text-xs p-1"
                aria-label="Close contact popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-2">
              <a
                href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20need%20assistance%20with%20translation%20or%20documentation%20services`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 transition-colors text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Direct Chat</span>
              </a>

              <a
                href={`tel:${companyDetails.phoneRaw}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100/80 text-blue-800 transition-colors text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call: {companyDetails.phone}</span>
              </a>
            </div>

            <p className="text-[10px] text-slate-500 text-center mt-2.5">
              Mon-Fri: 8:30am - 5:00pm • Sat: 9:30am - 1:00pm
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Floating Trigger */}
      <div className="flex items-center gap-2">
        <motion.a
          href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20need%20a%20quote`}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with Smart Word on WhatsApp"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-3 rounded-full gradient-brand text-white font-bold text-xs shadow-card hover:shadow-card-hover transition-shadow focus:outline-none"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </motion.a>
      </div>

    </div>
  );
}


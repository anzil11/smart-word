import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

export default function MainLayout() {
  const location = useLocation();

  // Scroll to top automatically when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFDFE] text-slate-900 selection:bg-brand-500 selection:text-white">
      {/* Header / Sticky Navigation */}
      <Navbar />

      {/* Main Page Content with smooth page transition */}
      <main className="flex-grow overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating WhatsApp / Quick Contact Dock */}
      <FloatingContact />

      {/* Full Multi-Column Footer */}
      <Footer />
    </div>
  );
}


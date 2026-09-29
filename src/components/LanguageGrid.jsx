import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supportedLanguages, commonLanguagePairs } from '../data/languages';
import { Globe, ArrowRightLeft, Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function LanguageGrid({ onOpenQuote, className = '' }) {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = [
    { id: 'all', name: 'All Languages' },
    { id: 'Middle East', name: 'Middle East' },
    { id: 'Europe', name: 'Europe' },
    { id: 'Asia', name: 'Asia' }
  ];

  const filteredLanguages = supportedLanguages.filter(lang => {
    if (selectedRegion === 'all') return true;
    return lang.region.toLowerCase().includes(selectedRegion.toLowerCase());
  });

  return (
    <section className={`py-16 sm:py-24 bg-white overflow-hidden ${className}`}>
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5 text-brand-600" />
            Global Linguistic Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certified Translations in 50+ Global Languages
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            From Arabic and English to Russian, French, German, Chinese, and Hindi—our native linguists ensure flawless legal and business precision.
          </p>
        </motion.div>

        {/* Common Language Pairs Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10 bg-slate-50/90 rounded-2xl p-5 sm:p-6 border border-slate-200"
        >
          <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-slate-600">
            <ArrowRightLeft className="w-4 h-4 text-brand-600" />
            <span>High-Demand Translation Pairs in Dubai</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {commonLanguagePairs.map((pair, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-subtle flex items-center justify-between gap-3 hover:border-brand-400 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                    <span>{pair.from}</span>
                    <span className="text-brand-500 font-normal">➔</span>
                    <span>{pair.to}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{pair.note}</p>
                </div>
                {pair.popular && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 flex-shrink-0">
                    High Volume
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Region Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {regions.map((region) => (
            <button
              key={region.id}
              type="button"
              onClick={() => setSelectedRegion(region.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedRegion === region.id
                  ? 'bg-navy-950 text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Languages Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredLanguages.map((lang) => (
              <motion.div
                layout
                key={lang.code}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-brand-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl sm:text-3xl select-none" role="img" aria-label={lang.name}>
                      {lang.flag}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-500">
                      {lang.code.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                    {lang.name}
                  </h3>
                  
                  <p className="text-sm font-semibold text-brand-600 font-sans mt-0.5" dir="auto">
                    {lang.nativeName}
                  </p>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {lang.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <button
                    type="button"
                    onClick={() => onOpenQuote ? onOpenQuote(lang.name) : null}
                    className="w-full text-center text-xs font-semibold text-slate-700 hover:text-brand-700 transition-colors"
                  >
                    Quote in {lang.name} →
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center bg-navy-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-card"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Need a language not listed here?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-6">
              Smart Word works with an international network of certified native translators covering over 50 language combinations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <CTAButton
                to="/contact"
                variant="primary"
                size="md"
                showArrow
              >
                Inquire for Your Language Pair
              </CTAButton>
              <CTAButton
                href="https://wa.me/971522402909?text=Hello%20Smart%20Word,%20I%20need%20a%20translation%20quote"
                variant="secondary"
                size="md"
              >
                Chat on WhatsApp (+971 52 240 2909)
              </CTAButton>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import CTAButton from './CTAButton';
import { companyDetails, heroSlides } from '../data/navigation';
import { serviceCategories } from '../data/services';

const SLIDE_DURATION = 6500; // ms

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCat, setSelectedCat] = useState('translation');
  const [targetLang, setTargetLang] = useState('Arabic');

  // Auto-advance slider every 6.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, activeSlide]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const currentSlide = heroSlides[activeSlide];

  return (
    <div
      className="relative w-full min-h-[660px] lg:min-h-[740px] xl:min-h-[790px] flex items-center overflow-hidden bg-navy-950 text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 4 Full-Image Slides with smooth cross-fade & slow ambient zoom */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={currentSlide.id || activeSlide}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {/* Background High-Res Image */}
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />

          {/* Multi-layered Cinematic Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
          <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none z-10" />

      {/* Main Content Layer */}
      <div className="relative z-20 w-full max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Animated Slide Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-5"
              >
                {/* Trust Pill & Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse"></span>
                  <span className="text-lime-300 font-extrabold">{currentSlide.badge}</span>
                </div>

                {/* Tagline */}
                <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-emerald-400">
                  {currentSlide.tagline}
                </p>

                {/* H1 Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] text-white drop-shadow-md">
                  {currentSlide.title}
                </h1>

                {/* Slide Description */}
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  {currentSlide.description}
                </p>

                {/* CTA Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                  <CTAButton
                    to={currentSlide.primaryCta.path}
                    variant="gradient"
                    size="lg"
                    showArrow
                    className="w-full sm:w-auto shadow-xl"
                  >
                    {currentSlide.primaryCta.label}
                  </CTAButton>

                  {currentSlide.secondaryCta.isExternal ? (
                    <a
                      href={currentSlide.secondaryCta.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-bold backdrop-blur-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>{currentSlide.secondaryCta.label}</span>
                    </a>
                  ) : (
                    <CTAButton
                      to={currentSlide.secondaryCta.path}
                      variant="white"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      {currentSlide.secondaryCta.label}
                    </CTAButton>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Trust Checklist Footer */}
            <div className="pt-5 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-200 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <span>MOJ Sworn Translators</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <span>100% MOFA Accepted</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <span>Express Same-Day Option</span>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Document Service Selector with Motion */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/40 shadow-2xl text-slate-800 z-10"
            >
              
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl gradient-brand text-white flex items-center justify-center shadow-sm">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Instant Service Selector</h3>
                    <p className="text-[11px] text-slate-500">Fixed quote in under 15 minutes</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Online 24/7
                </span>
              </div>

              {/* Service Type Buttons */}
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    1. Select Service Category
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {serviceCategories.slice(0, 6).map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCat(cat.id)}
                        className={`p-2 rounded-xl text-center text-xs font-bold transition-all border ${
                          selectedCat === cat.id
                            ? 'bg-navy-950 text-white border-navy-950 shadow-md ring-2 ring-emerald-400/40'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                        }`}
                      >
                        <span className="truncate block">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Requirement Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    2. Target Requirement
                  </label>
                  <select
                    value={targetLang}
                    onChange={(e) => setTargetLang(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Arabic">Official Arabic Translation (Dubai Courts & Ministries)</option>
                    <option value="English">Official English Translation (Banking & Global Embassies)</option>
                    <option value="MOFA">UAE MOFA Attestation & Document Legalization</option>
                    <option value="Embassy">Foreign Embassy & Consular Stamping</option>
                    <option value="Notary">Dubai Courts Notary Public & POA Drafting</option>
                    <option value="Setup">Mainland & Freezone Company Formation</option>
                  </select>
                </div>

                {/* Value Guarantee Box */}
                <div className="bg-emerald-50/60 rounded-2xl p-3 border border-emerald-100 space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Certification Level:</span>
                    <span className="font-bold text-emerald-800">MOJ Licensed / Sworn</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Standard Turnaround:</span>
                    <span className="font-bold text-slate-800">24h (Express 3h Available)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Delivery:</span>
                    <span className="font-bold text-slate-800">PDF + UAE Courier Delivery</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-2 pt-1">
                  <Link
                    to={`/contact?category=${selectedCat}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold gradient-brand text-white shadow-md hover:brightness-105 transition-all"
                  >
                    <span>Proceed to Free Document Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20need%20a%20quote%20for%20${encodeURIComponent(selectedCat)}%20services`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Send Documents via WhatsApp</span>
                  </a>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Slider Left & Right Arrow Buttons */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 focus:outline-none"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 focus:outline-none"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Slider Navigation Tabs & Timer Progress Bar */}
      <div className="absolute bottom-4 sm:bottom-6 inset-x-0 z-30 flex flex-col items-center gap-2 px-4">
        
        {/* Slide Selector Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {heroSlides.map((slide, idx) => {
            const isActive = activeSlide === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlide(idx)}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md transition-all ${
                  isActive
                    ? 'bg-white text-navy-950 shadow-lg scale-105'
                    : 'bg-black/50 text-white/80 hover:bg-black/70 hover:text-white border border-white/10'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    isActive ? 'bg-lime-500' : 'bg-white/50 group-hover:bg-white'
                  }`}
                />
                <span className="hidden md:inline truncate max-w-[140px]">
                  {slide.title.split(' ')[0]} {slide.title.split(' ')[1] || ''}
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated Slide Progress Bar */}
        <div className="w-48 sm:w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            key={activeSlide}
            initial={{ width: '0%' }}
            animate={{ width: isPaused ? '0%' : '100%' }}
            transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
            className="h-full gradient-brand"
          />
        </div>

      </div>

    </div>
  );
}

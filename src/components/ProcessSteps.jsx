import React from 'react';
import { motion } from 'framer-motion';
import { processTimeline } from '../data/faq';
import { FileUp, SearchCheck, Stamp, CheckCheck, ArrowRight, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const stepIcons = [FileUp, SearchCheck, Stamp, CheckCheck];

export default function ProcessSteps({ className = '' }) {
  return (
    <section className={`py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80 overflow-hidden ${className}`}>
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-lime-600" />
            Simple 4-Step Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Smart Word Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            From initial document review to certified ministry delivery—our streamlined workflow guarantees accuracy, speed, and full legal compliance.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={{ stagger: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {processTimeline.map((item, index) => {
            const Icon = stepIcons[index] || FileUp;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-subtle hover:shadow-card hover:border-brand-300 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Step number badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-brand-600/70 group-hover:text-brand-600 transition-colors">
                      {item.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Status Pill */}
                  <div className="mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 inline-block">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-700">
                  <span>Step {index + 1} of 4</span>
                  {index < 3 && (
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-1.5 transition-all hidden lg:block" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}


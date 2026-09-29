import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Lock, Zap, FileText, Building, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const trustCards = [
  {
    icon: ShieldCheck,
    title: "MOJ Licensed Sworn Translators",
    description: "Translations executed by sworn translators officially certified by the UAE Ministry of Justice for 100% court admissibility.",
    badge: "Official Legal Weight",
    accent: "text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:text-white"
  },
  {
    icon: CheckCircle2,
    title: "100% UAE Ministry & Embassy Acceptance",
    description: "Guaranteed compliance with MOFA, Dubai Courts, GDRFA Immigration, KHDA, Ministry of Education, and international embassies.",
    badge: "Government Approved",
    accent: "text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white"
  },
  {
    icon: Lock,
    title: "Strict Confidentiality & NDAs",
    description: "Enterprise-grade data protection and non-disclosure standards safeguarding your sensitive legal, corporate, and financial records.",
    badge: "Data Secure",
    accent: "text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white"
  },
  {
    icon: Zap,
    title: "Fast Turnaround & Express Delivery",
    description: "Standard 24-hour turnaround with express same-day services available for urgent court filings, visa deadlines, and board meetings.",
    badge: "Same-Day Option",
    accent: "text-amber-600 bg-amber-50 border-amber-100 group-hover:bg-amber-600 group-hover:text-white"
  },
  {
    icon: FileText,
    title: "End-to-End Legal Documentation",
    description: "Single-window solution handling bilingual legal drafting, official court notarization, translation, and ministry attestation.",
    badge: "All-In-One Service",
    accent: "text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-600 group-hover:text-white"
  },
  {
    icon: Building,
    title: "Individual & Corporate Business Support",
    description: "Dedicated assistance tailored for expatriate residents, multinational corporations, law firms, and UAE startups.",
    badge: "UAE Wide Coverage",
    accent: "text-teal-600 bg-teal-50 border-teal-100 group-hover:bg-teal-600 group-hover:text-white"
  }
];

export default function TrustSection({ className = '' }) {
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
            Why Clients Choose Smart Word
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted UAE Documentation & Translation Partner
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Delivering precision, legal compliance, and reliable service across Dubai and all seven Emirates.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={{ stagger: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-subtle hover:shadow-card hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 shadow-sm ${card.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-2.5 leading-snug">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified UAE Standards</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}


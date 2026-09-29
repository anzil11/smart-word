import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Scale, GraduationCap, Building2, Globe2, Shield } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const authorities = [
  { name: "Dubai Courts & MOJ", role: "Ministry of Justice Certified", icon: Scale },
  { name: "MOFA UAE", role: "Ministry of Foreign Affairs Legalization", icon: Landmark },
  { name: "GDRFA & ICP", role: "UAE Immigration & Residency", icon: Shield },
  { name: "KHDA & MOE", role: "Education & Degree Equivalency", icon: GraduationCap },
  { name: "Dubai DET", role: "Mainland & Freezone Licensing", icon: Building2 },
  { name: "Foreign Embassies", role: "Consular Stamping & Legalization", icon: Globe2 }
];

export default function StatsSection({ className = '' }) {
  return (
    <div className={`w-full bg-white border-y border-slate-200/90 py-8 overflow-hidden ${className}`}>
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Official Document Acceptance Across All UAE Government Authorities
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={{ stagger: 0.08 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {authorities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-100/90 hover:border-brand-200/60 hover:shadow-subtle transition-all cursor-default group"
              >
                <div className="w-10 h-10 rounded-lg bg-white shadow-subtle border border-slate-200/80 flex items-center justify-center text-brand-600 group-hover:text-brand-500 group-hover:scale-110 transition-transform mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-800">{item.name}</h4>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">{item.role}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Users, FileCheck2, Award, ArrowRight, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { companyDetails } from '../data/navigation';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function WorldConnectionSection({ className = '' }) {
  const stats = [
    {
      label: "Languages Supported",
      value: "50+",
      desc: "Accredited native linguists & sworn legal translators",
      icon: Globe,
      color: "text-lime-600 bg-lime-50 border-lime-200"
    },
    {
      label: "Happy Clients",
      value: "10,000+",
      desc: "Individuals, legal counsels & UAE multinational firms",
      icon: Users,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200"
    },
    {
      label: "Words Translated",
      value: "25M+",
      desc: "Flawless legal, medical, corporate & technical records",
      icon: FileCheck2,
      color: "text-teal-600 bg-teal-50 border-teal-200"
    },
    {
      label: "Client Satisfaction",
      value: "99.8%",
      desc: "100% acceptance by Dubai Courts, MOJ & MOFA",
      icon: Award,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200"
    }
  ];

  return (
    <section className={`py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900 text-white relative overflow-hidden ${className}`}>
      {/* Background ambient elements */}
      <div className="absolute inset-0 subtle-grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <span>UAE Linguistic Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            Connecting the World with Words
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            At Smart Word, we bridge language barriers and connect cultures through professional translation and documentation services. Our mission is to provide accurate, reliable, and timely language solutions across Dubai and the UAE.
          </p>
        </motion.div>

        {/* 4 Core Stat Cards with Framer Motion Stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={{ stagger: 0.12 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-emerald-400/40 hover:bg-white/10 transition-colors duration-300 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${stat.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Smart Word UAE
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-black tracking-tight text-white group-hover:text-emerald-300 transition-colors mb-1.5">
                    {stat.value}
                  </div>

                  <h3 className="text-base font-bold text-slate-200 mb-2">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-semibold text-lime-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified UAE Benchmark</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl gradient-brand hover:brightness-105 text-white text-sm font-bold shadow-lg shadow-emerald-600/25 transition-all"
          >
            <span>Start Your Translation Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20need%20a%20quote`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/15 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Our Dubai Team</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

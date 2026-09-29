import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

const categoryColorStyles = {
  translation: {
    badge: 'bg-lime-50 text-lime-800 border-lime-200/80',
    iconBg: 'bg-lime-50 text-lime-700 group-hover:bg-emerald-600 group-hover:text-white',
    borderHover: 'hover:border-lime-300'
  },
  attestation: {
    badge: 'bg-amber-50 text-amber-800 border-amber-200/80',
    iconBg: 'bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white',
    borderHover: 'hover:border-amber-300'
  },
  notarization: {
    badge: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    iconBg: 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white',
    borderHover: 'hover:border-emerald-300'
  },
  drafting: {
    badge: 'bg-purple-50 text-purple-800 border-purple-200/80',
    iconBg: 'bg-purple-50 text-purple-700 group-hover:bg-purple-600 group-hover:text-white',
    borderHover: 'hover:border-purple-300'
  },
  'business-setup': {
    badge: 'bg-sky-50 text-sky-800 border-sky-200/80',
    iconBg: 'bg-sky-50 text-sky-700 group-hover:bg-sky-600 group-hover:text-white',
    borderHover: 'hover:border-sky-300'
  },
  'emirati-pension': {
    badge: 'bg-teal-50 text-teal-800 border-teal-200/80',
    iconBg: 'bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white',
    borderHover: 'hover:border-teal-300'
  }
};

const categoryIcons = {
  translation: 'Languages',
  attestation: 'Award',
  notarization: 'FileCheck2',
  drafting: 'ScrollText',
  'business-setup': 'Building2',
  'emirati-pension': 'ShieldCheck'
};

export default function ServiceCard({ service, compact = false }) {
  if (!service) return null;

  const { slug, category, title, shortTitle, description, features, tagline } = service;
  const styles = categoryColorStyles[category] || categoryColorStyles.translation;
  const iconName = categoryIcons[category] || 'FileText';
  const detailUrl = `/services/${category}/${slug}`;

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={`group relative flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-card-hover transition-all duration-300 ${styles.borderHover} ${compact ? 'p-5' : 'p-6 sm:p-7'}`}
    >
      {/* Top row: Icon & Category pill */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200 shadow-sm ${styles.iconBg}`}>
          <DynamicIcon name={iconName} className="w-5 h-5" />
        </div>
        
        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border uppercase tracking-wider ${styles.badge}`}>
          {category.replace('-', ' ')}
        </span>
      </div>

      {/* Title & Tagline */}
      <div className="mb-3">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
          <Link to={detailUrl} className="focus:outline-none focus:underline">
            {shortTitle || title}
          </Link>
        </h3>
        {tagline && (
          <p className="text-xs text-emerald-600 font-medium mt-1 line-clamp-1">
            {tagline}
          </p>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-5 flex-grow">
        {description}
      </p>

      {/* Key features preview if available */}
      {features && features.length > 0 && !compact && (
        <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
          {features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-lime-600 mt-0.5 flex-shrink-0" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      )}

      {/* Footer / CTA link */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
        <Link
          to={detailUrl}
          className="inline-flex items-center gap-1.5 hover:text-emerald-800 transition-colors focus:outline-none"
        >
          <span>View Details & Requirements</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}

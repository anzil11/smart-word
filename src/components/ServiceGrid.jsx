import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Layers } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { serviceCategories } from '../data/services';
import { staggerContainer, fadeInUp } from '../utils/animations';

export default function ServiceGrid({
  services = [],
  initialCategory = 'all',
  showFilters = true,
  showSearch = true,
  title,
  subtitle,
  limit
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    let result = services;

    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter(s => s.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(s =>
        s.title.toLowerCase().includes(query) ||
        (s.shortTitle && s.shortTitle.toLowerCase().includes(query)) ||
        (s.description && s.description.toLowerCase().includes(query)) ||
        (s.tagline && s.tagline.toLowerCase().includes(query))
      );
    }

    if (limit && limit > 0) {
      result = result.slice(0, limit);
    }

    return result;
  }, [services, selectedCategory, searchQuery, limit]);

  return (
    <div className="w-full">
      {/* Optional Header */}
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          {title && <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{title}</h2>}
          {subtitle && <p className="mt-3 text-base text-slate-600 leading-relaxed">{subtitle}</p>}
        </motion.div>
      )}

      {/* Filter & Search Bar */}
      {(showFilters || showSearch) && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-subtle mb-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Category Filter Pills */}
          {showFilters && (
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-navy-950 text-white shadow-sm ring-2 ring-emerald-400/30'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Services ({services.length})
              </button>
              
              {serviceCategories.map((cat) => {
                const count = services.filter(s => s.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'gradient-brand text-white shadow-sm font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>
          )}

          {/* Search Input */}
          {showSearch && (
            <div className="relative w-full md:w-72 flex-shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search UAE services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          )}
        </motion.div>
      )}

      {/* Animated Services Grid */}
      {filteredServices.length > 0 ? (
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id || service.slug}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.3) }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8"
        >
          <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800">No matching services found</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            We couldn't find any service matching "{searchQuery}". Try searching for terms like "Legal", "MOFA", "Attestation", "POA", or "Pension".
          </p>
          <button
            type="button"
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="mt-4 inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            Reset Filters
          </button>
        </motion.div>
      )}
    </div>
  );
}

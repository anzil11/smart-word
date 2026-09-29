import React from 'react';
import { allServices } from '../data/services';
import ServiceCard from './ServiceCard';

export default function RelatedServices({ currentSlug, category, relatedSlugs = [], className = '' }) {
  // Find related services by slugs or fallback to same category
  let related = [];

  if (relatedSlugs && relatedSlugs.length > 0) {
    related = allServices.filter(s => relatedSlugs.includes(s.slug) && s.slug !== currentSlug);
  }

  if (related.length < 3) {
    const categoryMatches = allServices.filter(s => s.category === category && s.slug !== currentSlug && !related.some(r => r.slug === s.slug));
    related = [...related, ...categoryMatches].slice(0, 3);
  } else {
    related = related.slice(0, 3);
  }

  if (related.length === 0) return null;

  return (
    <section className={`py-12 sm:py-16 bg-slate-50/60 border-t border-slate-200/80 ${className}`}>
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Related UAE Documentation Services
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Explore complementary translations, attestations, and corporate legal services.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map(service => (
            <ServiceCard key={service.slug} service={service} compact />
          ))}
        </div>

      </div>
    </section>
  );
}

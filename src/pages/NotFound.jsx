import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, ArrowRight, Home, Search } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import { serviceCategories } from '../data/services';

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found (404) | Smart Word UAE";
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6">
      <div className="max-w-xl w-full text-center space-y-6">
        
        <div className="w-20 h-20 rounded-3xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto shadow-subtle border border-brand-100">
          <FileQuestion className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-md mx-auto">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-subtle text-left space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Browse Popular Service Categories:
          </h2>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/services/${cat.id}`}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-brand-50 hover:text-brand-700 text-slate-700 font-semibold transition-colors flex items-center justify-between"
              >
                <span>{cat.name}</span>
                <span>→</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <CTAButton to="/" variant="primary" size="md" icon={Home}>
            Back to Homepage
          </CTAButton>
          <CTAButton to="/services" variant="secondary" size="md">
            View All 50+ Services
          </CTAButton>
        </div>

      </div>
    </div>
  );
}

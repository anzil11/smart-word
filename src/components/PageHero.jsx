import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import CTAButton from './CTAButton';
import { ShieldCheck, MessageSquare } from 'lucide-react';
import { companyDetails } from '../data/navigation';

export default function PageHero({
  breadcrumbs = [],
  badge,
  title,
  subtitle,
  description,
  showCTA = true,
  ctaText = "Get a Free Quote",
  ctaLink = "/contact",
  category = "",
  className = ""
}) {
  return (
    <div className={`relative bg-gradient-to-b from-slate-50 via-white to-slate-50/60 border-b border-slate-200/80 pt-8 pb-12 sm:pt-10 sm:pb-16 ${className}`}>
      
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        <div className="max-w-4xl">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-subtle">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight leading-tight mb-4">
            {title}
          </h1>

          {/* Subtitle / Description */}
          {(subtitle || description) && (
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-3xl">
              {subtitle || description}
            </p>
          )}

          {/* Quick CTA Actions */}
          {showCTA && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <CTAButton
                to={category ? `/contact?category=${category}` : ctaLink}
                variant="primary"
                size="md"
                showArrow
              >
                {ctaText}
              </CTAButton>

              <CTAButton
                href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20need%20assistance%20with%20${encodeURIComponent(title)}`}
                variant="secondary"
                size="md"
                icon={MessageSquare}
              >
                WhatsApp Inquiry
              </CTAButton>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

import React from 'react';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import LanguageGrid from '../components/LanguageGrid';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import CTAButton from '../components/CTAButton';
import { allServices } from '../data/services';
import { ShieldCheck, CheckCircle2, Scale, Clock, Globe } from 'lucide-react';
import { companyDetails } from '../data/navigation';

export default function TranslationServices() {
  const translationServices = allServices.filter(s => s.category === 'translation');

  const translationFaqs = [
    {
      q: "Are Smart Word legal translations accepted by Dubai Courts?",
      a: "Yes, our legal translations are performed by translators licensed by the UAE Ministry of Justice (MOJ), carrying the official seal and registration numbers required by Dubai Courts, Public Prosecution, and federal judicial authorities."
    },
    {
      q: "What is the standard turnaround time for translation?",
      a: "Standard turnaround is 24 hours. We also offer express rush translation (3-4 hours) for urgent filings, immigration appointments, and board meetings."
    },
    {
      q: "How many languages do you translate in Dubai?",
      a: "We support over 50 global languages paired with Arabic or English, including Russian, French, German, Spanish, Chinese, Hindi, Urdu, Italian, and Turkish."
    },
    {
      q: "Can I submit documents online without visiting your Dubai office?",
      a: "Yes, you can upload clear PDF scans or photos through our website or WhatsApp. We deliver stamped digital copies instantly and can courier physical stamped copies anywhere across the UAE."
    }
  ];

  return (
    <div className="w-full">
      
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Services", to: "/services" },
          { label: "Translation Services" }
        ]}
        badge="Ministry of Justice (MOJ) Certified"
        title="Professional Translation Services in Dubai"
        subtitle="Accurate, certified, and sworn translations in 50+ languages. Accepted by Dubai Courts, MOFA, embassies, and UAE government departments."
        category="translation"
      />

      {/* Overview Highlights Bar */}
      <div className="bg-white border-b border-slate-200/80 py-6">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-brand-600">50+</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Global Languages</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600">100%</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">MOJ & Court Acceptance</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-indigo-600">24h</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Standard Turnaround</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-amber-600">3-Hour</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Express Rush Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Catalog Grid */}
      <section className="py-16 bg-slate-50/50">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              All Translation Services ({translationServices.length})
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Browse our complete catalog of specialized legal, medical, corporate, academic, and technical translation services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {translationServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Languages Grid Section */}
      <LanguageGrid />

      {/* Process Steps */}
      <ProcessSteps />

      {/* FAQs */}
      <FAQ
        faqs={translationFaqs}
        title="Translation Services FAQ"
        subtitle="Common questions regarding UAE sworn translations, turnaround times, and court acceptance."
      />

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Ready to Translate Your Documents?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Get an exact price quote and guaranteed completion time from our Dubai legal translation team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="/contact?category=translation" variant="primary" size="md" showArrow>
              Get a Free Translation Quote
            </CTAButton>
            <CTAButton
              href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20need%20a%20translation%20quote`}
              variant="secondary"
              size="md"
            >
              WhatsApp Support (+971 52 240 2909)
            </CTAButton>
          </div>
        </div>
      </section>

    </div>
  );
}

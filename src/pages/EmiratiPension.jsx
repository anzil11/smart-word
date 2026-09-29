import React from 'react';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import CTAButton from '../components/CTAButton';
import { allServices } from '../data/services';
import { ShieldCheck, Users, FileCheck, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/navigation';

export default function EmiratiPension() {
  const pensionServices = allServices.filter(s => s.category === 'emirati-pension');

  const pensionFaqs = [
    {
      q: "What is GPSSA and who is required to register?",
      a: "The General Pension and Social Security Authority (GPSSA) is the federal body administering pensions for UAE Nationals. Any company in the UAE (Mainland or Freezone) employing even a single Emirati national must register with GPSSA within 30 days of hiring."
    },
    {
      q: "What happens if an employer fails to register Emirati employees with GPSSA?",
      a: "Delays or failures to register employees or pay monthly contributions result in severe statutory fines, penalties, and compliance flags under the Nafis program and MOHRE regulations."
    },
    {
      q: "What are the standard monthly GPSSA contribution rates?",
      a: "Under UAE Federal Pension Law, contributions are split between the employer (typically 12.5% to 15%) and the Emirati employee (typically 5% to 11%), depending on applicable government subsidy schemes and registration dates."
    },
    {
      q: "How does Smart Word assist employers with GPSSA compliance?",
      a: "We manage employer file setup, new employee registration, monthly contribution proforma generation, legacy arrears settlement, employee data updates, and final end-of-service cancellation clearances."
    }
  ];

  return (
    <div className="w-full">
      
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Services", to: "/services" },
          { label: "Emirati Pension (GPSSA)" }
        ]}
        badge="General Pension & Social Security Authority (GPSSA) Compliance"
        title="GPSSA Emirati Pension & Social Security Support"
        subtitle="Expert compliance assistance for UAE employers: establishment registration, national employee enrollment, contribution proformas, and end-of-service clearances."
        category="emirati-pension"
      />

      {/* Highlights Bar */}
      <div className="bg-white border-b border-slate-200/80 py-6">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-teal-700">GPSSA</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Portal Certified Support</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-brand-600">30-Day</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Statutory Enrollment</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600">Nafis</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Emiratisation Compliant</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-amber-600">Zero Fines</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Timely Proforma Filing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Catalog Grid */}
      <section className="py-16 bg-slate-50/50">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              All GPSSA Pension Services ({pensionServices.length})
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Browse our complete catalog of Emirati pension administration and social security filings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pensionServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* FAQs */}
      <FAQ
        faqs={pensionFaqs}
        title="GPSSA Emirati Pension FAQ"
        subtitle="Key legal requirements for UAE employers regarding national pension registration and contribution rules."
      />

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Need Assistance with GPSSA Registration or Contributions?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Ensure full legal compliance with UAE Pension laws and avoid delay fines.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="/contact?category=emirati-pension" variant="primary" size="md" showArrow>
              Request GPSSA Compliance Support
            </CTAButton>
            <CTAButton
              href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20need%20assistance%20with%20GPSSA%20pension`}
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

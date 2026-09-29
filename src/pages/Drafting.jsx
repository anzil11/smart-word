import React from 'react';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import CTAButton from '../components/CTAButton';
import { allServices } from '../data/services';
import { ScrollText, Scale, ShieldCheck } from 'lucide-react';
import { companyDetails } from '../data/navigation';

export default function Drafting() {
  const draftingServices = allServices.filter(s => s.category === 'drafting');

  const draftingFaqs = [
    {
      q: "Why should commercial agreements in Dubai be drafted in both English and Arabic?",
      a: "While English is common in business negotiations, the UAE legal and judicial system is exclusively Arabic. A bilingual agreement ensures mutual understanding while guaranteeing that the Arabic text controls in the event of court litigation."
    },
    {
      q: "Can Smart Word draft customized Joint Venture or Partnership agreements?",
      a: "Yes! We draft bespoke contracts customized to your commercial terms, including equity splits, capital contribution deadlines, management deadlock solutions, and exit buy-outs."
    },
    {
      q: "What makes a Legal Notice effective in the UAE?",
      a: "A legal notice drafted in precise Arabic legal terms establishes undeniable formal legal default, fixes a statutory cure period, and is mandatory before filing commercial lawsuits or rental eviction petitions."
    }
  ];

  return (
    <div className="w-full">
      
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Services", to: "/services" },
          { label: "Legal Drafting" }
        ]}
        badge="UAE Federal Law Compliant Contracts"
        title="Legal & Commercial Drafting Services in Dubai"
        subtitle="Watertight legal drafting for Joint Venture Agreements, Legal Notices, Loan Contracts, Partnership Deeds, and Tenancy Agreements."
        category="drafting"
      />

      {/* Highlights Bar */}
      <div className="bg-white border-b border-slate-200/80 py-6">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-purple-700">Civil & Commercial</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">UAE Law Aligned</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-brand-600">Bilingual</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Arabic & English Drafters</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600">Notary Ready</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Dubai Courts Format</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-amber-600">Tailored</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Custom Commercial Terms</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Catalog Grid */}
      <section className="py-16 bg-slate-50/50">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              All Legal Drafting Services ({draftingServices.length})
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Explore our legal contract drafting options protecting your assets and commercial rights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {draftingServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* FAQs */}
      <FAQ
        faqs={draftingFaqs}
        title="Legal Drafting FAQ"
        subtitle="Important details regarding agreement drafting and legal enforceability in Dubai."
      />

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Need a Legal Agreement or Notice Drafted?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Consult with our drafting specialists to craft watertight commercial agreements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="/contact?category=drafting" variant="primary" size="md" showArrow>
              Request Drafting Quote
            </CTAButton>
            <CTAButton
              href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20need%20a%20legal%20agreement%20drafted`}
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

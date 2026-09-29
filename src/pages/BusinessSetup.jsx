import React from 'react';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import CTAButton from '../components/CTAButton';
import { allServices } from '../data/services';
import { Building2, Globe2, Landmark, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/navigation';

export default function BusinessSetup() {
  const businessServices = allServices.filter(s => s.category === 'business-setup');

  const businessFaqs = [
    {
      q: "What is the difference between a Mainland and a Freezone business setup in Dubai?",
      a: "A Mainland license (DET) allows you to trade directly anywhere across the UAE and bid on government contracts. A Freezone license offers 100% foreign ownership, 0% customs duties within the zone, and lower initial setup costs, but requires local distributors to sell goods directly into the mainland market."
    },
    {
      q: "Can a foreign national own 100% of a UAE Mainland company?",
      a: "Yes! Recent UAE commercial law reforms permit 100% foreign ownership for over 1,000 commercial and industrial activities without needing a 51% UAE national partner."
    },
    {
      q: "How long does it take to obtain a UAE trade license?",
      a: "Freezone licenses can be issued in 2-4 working days. Mainland licenses typically take 3-7 working days depending on activity approvals and office lease (Ejari) registration."
    },
    {
      q: "Do you assist with opening corporate bank accounts in Dubai?",
      a: "Yes, Smart Word provides complete corporate banking assistance, preparing your business profile, CVs, and transaction documents for Tier-1 banks (Emirates NBD, Mashreq, FAB) and digital banks (Wio, NeoBiz)."
    }
  ];

  return (
    <div className="w-full">
      
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Services", to: "/services" },
          { label: "Business Setup" }
        ]}
        badge="Mainland, Freezone & Offshore Setup"
        title="UAE Company Formation & Corporate Services"
        subtitle="Turnkey company registration, trade licensing, Local Service Agent coordination, and corporate bank account opening in Dubai."
        category="business-setup"
      />

      {/* Highlights Bar */}
      <div className="bg-white border-b border-slate-200/80 py-6">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-sky-600">100%</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Foreign Ownership</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-brand-600">Freezone</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">IFZA, DMCC, Meydan, Shams</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600">Mainland</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Dubai DET Trade Licensing</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-indigo-600">Banking</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Fast Corporate Account Opening</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Catalog Grid */}
      <section className="py-16 bg-slate-50/50">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Business Setup Services ({businessServices.length})
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Select your preferred corporate structure or banking service to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* FAQs */}
      <FAQ
        faqs={businessFaqs}
        title="Business Setup FAQ"
        subtitle="Common questions on establishing and operating a successful business in Dubai."
      />

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Ready to Form Your Company in Dubai?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Speak with our business setup consultants for a custom quote on trade licenses and visa allocations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="/contact?category=business-setup" variant="primary" size="md" showArrow>
              Request Free Consultation
            </CTAButton>
            <CTAButton
              href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20want%20to%20start%20a%20business%20in%20Dubai`}
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

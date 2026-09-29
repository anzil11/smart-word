import React from 'react';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import CTAButton from '../components/CTAButton';
import { allServices } from '../data/services';
import { FileCheck2, Scale, Building2 } from 'lucide-react';
import { companyDetails } from '../data/navigation';

export default function NotarizationServices() {
  const notarizationServices = allServices.filter(s => s.category === 'notarization');

  const notarizationFaqs = [
    {
      q: "Can I notarize a Power of Attorney (POA) online via video call in Dubai?",
      a: "Yes! Dubai Courts provides an electronic notarization system via video link for individuals holding a valid Emirates ID and UAE Pass, allowing notarization without physical court visits."
    },
    {
      q: "Why is an official bilingual Arabic/English format required for notary documents?",
      a: "Arabic is the official language of UAE courts and government entities. The Notary Public requires legal instruments (POAs, MOAs, Board Resolutions) to be in standard bilingual format so both the non-Arabic speaker and Dubai Courts can authenticate the content."
    },
    {
      q: "What is the difference between a General POA and a Special POA?",
      a: "A General POA grants broad authority to handle multiple personal, banking, and business affairs. A Special POA restricts the agent's power to a specific transaction, such as selling a specific vehicle or purchasing a particular real estate property."
    },
    {
      q: "How long does it take to draft and notarize an MOA or Board Resolution?",
      a: "Smart Word typically completes bilingual drafting within 2-4 hours. Notarization can be finalized on the same day or next business day depending on shareholder availability."
    }
  ];

  return (
    <div className="w-full">
      
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Services", to: "/services" },
          { label: "Notarization Services" }
        ]}
        badge="Dubai Courts & Notary Public Standards"
        title="Professional Notarization & Legal Documentation Services"
        subtitle="Flawless bilingual drafting, Arabic legal translation, and official notary public processing for Power of Attorney, MOA, Board Resolutions, and legal declarations."
        category="notarization"
      />

      {/* Highlights Bar */}
      <div className="bg-white border-b border-slate-200/80 py-6">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-emerald-700">Dubai Courts</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Compliant Formatting</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-brand-600">Video Notary</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Remote Signing Support</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-purple-600">Bilingual</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Arabic & English Drafters</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-amber-600">Same-Day</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Drafting & Review</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Catalog Grid */}
      <section className="py-16 bg-slate-50/50">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              All Notarization Services ({notarizationServices.length})
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Browse our complete catalog of Power of Attorney drafting, MOA amendments, corporate resolutions, and legal declarations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notarizationServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* FAQs */}
      <FAQ
        faqs={notarizationFaqs}
        title="Notarization & POA FAQ"
        subtitle="Key legal questions about Power of Attorney, MOA notarization, and Dubai Courts notary public procedures."
      />

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Need a Power of Attorney or Notary Document Drafted?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Our experienced legal drafters will prepare your bilingual legal document and guide you through Dubai Courts execution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="/contact?category=notarization" variant="primary" size="md" showArrow>
              Request Notary Document Drafting
            </CTAButton>
            <CTAButton
              href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20need%20assistance%20with%20Power%20of%20Attorney%20or%20Notarization`}
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

import React from 'react';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import CTAButton from '../components/CTAButton';
import { allServices } from '../data/services';
import { Award, Landmark, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/navigation';

export default function AttestationServices() {
  const attestationServices = allServices.filter(s => s.category === 'attestation');

  const attestationFaqs = [
    {
      q: "What is the complete document attestation chain for foreign documents in the UAE?",
      a: "The standard legalization chain consists of: 1) Notary & Home Department in origin country, 2) Ministry of External/Foreign Affairs in origin country, 3) UAE Embassy in origin country, and 4) UAE Ministry of Foreign Affairs (MOFA) in the UAE."
    },
    {
      q: "Can Smart Word handle home country attestation while I am already located in Dubai?",
      a: "Yes! You can hand over your original documents at our Dubai office, and our international logistics team handles the overseas embassy and ministry procedures and returns them fully legalized."
    },
    {
      q: "Do birth and marriage certificates need Arabic translation after MOFA attestation?",
      a: "Yes, for UAE residency visa applications (GDRFA / ICP), foreign birth and marriage certificates must be translated into Arabic by an MOJ licensed legal translator following MOFA stamping."
    },
    {
      q: "How fast is MOFA attestation completed?",
      a: "Standard MOFA processing takes 1-2 business days. Express same-day service is available for urgent applications."
    }
  ];

  return (
    <div className="w-full">
      
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Services", to: "/services" },
          { label: "Attestation Services" }
        ]}
        badge="Official MOFA & Embassy Legalization"
        title="Document Attestation Services in the UAE"
        subtitle="End-to-end legalization and certificate attestation from the UAE Ministry of Foreign Affairs (MOFA), foreign embassies, KHDA, and MOE."
        category="attestation"
      />

      {/* Attestation Authority Highlights */}
      <div className="bg-white border-b border-slate-200/80 py-6">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-amber-700">100+</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Countries Covered</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600">100%</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">MOFA Acceptance</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-brand-600">Door-to-Door</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Dubai Courier Pickup</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-indigo-600">24-48h</span>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">Express MOFA Service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Catalog Grid */}
      <section className="py-16 bg-slate-50/50">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              All Attestation Services ({attestationServices.length})
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Browse our complete catalog of personal, educational, and commercial document attestation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attestationServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Attestation Process Steps */}
      <ProcessSteps />

      {/* FAQs */}
      <FAQ
        faqs={attestationFaqs}
        title="Attestation Services FAQ"
        subtitle="Important information about document attestation procedures in Dubai and abroad."
      />

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Need Document Attestation in Dubai?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Contact our legalization experts for free document pre-verification and fast pickup.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="/contact?category=attestation" variant="primary" size="md" showArrow>
              Request Attestation Quote
            </CTAButton>
            <CTAButton
              href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20need%20MOFA%20attestation%20assistance`}
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

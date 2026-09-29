import React from 'react';
import PageHero from '../components/PageHero';
import ServiceGrid from '../components/ServiceGrid';
import { allServices, serviceCategories } from '../data/services';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import CTAButton from '../components/CTAButton';
import { companyDetails } from '../data/navigation';

export default function Services() {
  return (
    <div className="w-full">
      
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "All Services" }
        ]}
        badge="Official UAE Documentation Directory"
        title="Complete Services Directory"
        subtitle="Explore our comprehensive catalog of 50+ certified translation, MOFA attestation, registered notarization, corporate setup, legal drafting, and pension services in Dubai."
        showCTA={false}
      />

      {/* Main Service Directory Grid with Search & Filter Pills */}
      <section className="py-14 sm:py-20 bg-slate-50/50">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceGrid
            services={allServices}
            showFilters={true}
            showSearch={true}
          />
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* Global FAQs */}
      <FAQ showSearch={true} />

      {/* Bottom CTA */}
      <section className="py-14 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Can't find the exact service you need?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Contact our Dubai documentation consultants. We handle bespoke legal, consular, and government procedures across all UAE authorities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="/contact" variant="primary" size="md" showArrow>
              Request Custom Quote
            </CTAButton>
            <CTAButton
              href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20have%20a%20specific%20documentation%20inquiry`}
              variant="secondary"
              size="md"
            >
              WhatsApp Us (+971 52 240 2909)
            </CTAButton>
          </div>
        </div>
      </section>

    </div>
  );
}

import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import { companyDetails } from '../data/navigation';

export default function Terms() {
  useEffect(() => {
    document.title = "Terms & Conditions | Smart Word UAE";
  }, []);

  return (
    <div className="w-full">
      
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Terms & Conditions" }
        ]}
        badge="Legal Agreement & Service Terms"
        title="Terms & Conditions"
        subtitle="Standard terms and conditions governing translation, attestation, notarization, and documentation services by Smart Word UAE."
        showCTA={false}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-slate-700 space-y-8 text-sm sm:text-base leading-relaxed">
          
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-xs sm:text-sm text-slate-600">
            <p className="font-bold text-slate-900 mb-1">Last Updated: January 1, 2026</p>
            <p>Please read these Terms and Conditions carefully before ordering services from {companyDetails.legalName} ("Smart Word"). By requesting a quote or ordering services, you agree to be legally bound by these terms.</p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              1. Scope of Services
            </h2>
            <p>
              Smart Word provides certified legal translation, sworn translation, document attestation, legal drafting, and corporate documentation facilitation in Dubai and across the United Arab Emirates. Services are performed according to standards established by the UAE Ministry of Justice (MOJ), Ministry of Foreign Affairs (MOFA), and Dubai Courts.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              2. Document Accuracy & Client Responsibilities
            </h2>
            <p className="mb-2">
              Clients are responsible for providing clear, legible, and authentic copies or originals of source documents. Where proper nouns (e.g. personal names, company names) have established transliterations on passports or trade licenses, the client is responsible for specifying the desired spelling prior to translation completion.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              3. Turnaround Times & Delivery
            </h2>
            <p>
              Delivery time estimates are calculated from the moment of document receipt and confirmation of order specifications. While Smart Word makes every effort to meet or exceed promised turnaround times (including same-day express options), Smart Word is not liable for delays caused by third-party government ministry outages, embassy closures, or courier delays.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              4. Government Authority Fees & Changes
            </h2>
            <p>
              For document attestation and notarization services, official government fees (e.g. MOFA, MOJ, Embassy consular fees) are subject to change by respective government bodies. Any official fee adjustments made by the authorities prior to execution will be communicated to the client.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the Federal Laws of the United Arab Emirates and the local laws applicable in the Emirate of Dubai. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of Dubai Courts.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              6. Contact Details
            </h2>
            <p>
              For any questions regarding our terms of service, please contact:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
              <p><strong>{companyDetails.legalName}</strong></p>
              <p>Dubai, United Arab Emirates</p>
              <p>Email: {companyDetails.email} | Phone: {companyDetails.phone}</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

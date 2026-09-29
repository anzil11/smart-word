import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import { companyDetails } from '../data/navigation';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Smart Word UAE";
  }, []);

  return (
    <div className="w-full">
      
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Privacy Policy" }
        ]}
        badge="UAE Federal Data Protection Compliant"
        title="Privacy Policy"
        subtitle="How Smart Word protects and manages your confidential documents, personal data, and business records."
        showCTA={false}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-slate-700 space-y-8 text-sm sm:text-base leading-relaxed">
          
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-xs sm:text-sm text-slate-600">
            <p className="font-bold text-slate-900 mb-1">Effective Date: January 1, 2026</p>
            <p>This Privacy Policy applies to {companyDetails.legalName} ("Smart Word", "we", "our", or "us") and covers our operations in Dubai, UAE and our website at <span className="font-semibold text-brand-700">smartword.ae</span>.</p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              1. Commitment to Confidentiality & Client Data
            </h2>
            <p>
              Smart Word recognizes that the documents entrusted to us—including legal contracts, court judgments, identity papers, medical files, and corporate resolutions—are highly confidential and sensitive. We adhere strictly to the UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection (PDPL) and international data privacy benchmarks.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-2">We collect only information necessary to evaluate, translate, attest, notarize, and deliver your requested services, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Contact Information:</strong> Name, phone number, email address, and physical delivery address in the UAE.</li>
              <li><strong>Document Data:</strong> Source files, scanned certificates, identification copies, and specific linguistic instructions provided by you.</li>
              <li><strong>Technical Metadata:</strong> Standard web analytics (IP address, browser type) used solely to enhance website usability.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              3. Use of Information & Non-Disclosure
            </h2>
            <p className="mb-2">Your information is used strictly to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Perform certified legal translation, sworn translation, attestation, or drafting services.</li>
              <li>Communicate quotes, order progress, and delivery timelines.</li>
              <li>Liaise with designated UAE government authorities (e.g. MOFA, Dubai Courts Notary, KHDA) upon your explicit authorization.</li>
            </ul>
            <p className="mt-3">
              We never sell, rent, or commercialize your personal data or document contents to any third parties. All staff, translators, and legal drafters are bound by mandatory, signed Non-Disclosure Agreements (NDAs).
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              4. Document Security & Retention
            </h2>
            <p>
              Uploaded documents are transmitted via SSL/TLS encryption and stored on secure servers with restricted access. Following successful completion and delivery of your project, source and target files are archived in secure custody solely for your future re-issuance requests or deleted upon written request, subject to UAE statutory accounting and court audit requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              5. Contact Us Regarding Your Privacy
            </h2>
            <p>
              If you have any questions or wish to request the deletion or retrieval of your records, please contact our privacy compliance officer in Dubai:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
              <p><strong>Email:</strong> {companyDetails.email}</p>
              <p><strong>Phone:</strong> {companyDetails.phone}</p>
              <p><strong>Location:</strong> {companyDetails.location}</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug, getCategoryMeta, allServices } from '../data/services';
import Breadcrumbs from '../components/Breadcrumbs';
import CTAButton from '../components/CTAButton';
import FAQ from '../components/FAQ';
import RelatedServices from '../components/RelatedServices';
import ContactForm from '../components/ContactForm';
import DynamicIcon from '../components/DynamicIcon';
import { ShieldCheck, Award, CheckCircle2, FileText, ArrowRight, Clock, MapPin, Users, HelpCircle, FileCheck, MessageSquare } from 'lucide-react';
import { companyDetails } from '../data/navigation';

export default function ServiceDetail() {
  const { category, slug } = useParams();
  const service = getServiceBySlug(slug);
  const categoryMeta = getCategoryMeta(category || (service ? service.category : 'translation'));

  // Update dynamic page title
  useEffect(() => {
    if (service) {
      document.title = `${service.shortTitle || service.title} in Dubai | Smart Word UAE`;
    } else {
      document.title = `Service Not Found | Smart Word UAE`;
    }
  }, [service]);

  // Fallback if service not found
  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Service Not Found</h1>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          We couldn't locate the specific service page requested. Browse through our complete catalog below or contact our team directly.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <CTAButton to="/services" variant="primary" size="md">
            View All Services
          </CTAButton>
          <CTAButton to="/" variant="secondary" size="md">
            Go to Homepage
          </CTAButton>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", to: "/" },
    { label: categoryMeta ? categoryMeta.name : "Services", to: `/services/${category}` },
    { label: service.shortTitle || service.title }
  ];

  return (
    <div className="w-full">
      
      {/* 1. RushTranslate-Inspired Conversion Hero */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/70 border-b border-slate-200/80 pt-8 pb-14 sm:pt-10 sm:pb-20">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-700 text-xs font-bold uppercase tracking-wider shadow-subtle">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                <span>{categoryMeta ? categoryMeta.name : category} • Official UAE Service</span>
              </div>

              {/* Main Title (H1) */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight leading-tight">
                {service.title}
              </h1>

              {/* Tagline */}
              {service.tagline && (
                <p className="text-sm sm:text-base font-bold text-brand-600">
                  {service.tagline}
                </p>
              )}

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {service.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                <CTAButton
                  to={`/contact?category=${category}&service=${slug}`}
                  variant="primary"
                  size="lg"
                  showArrow
                  className="w-full sm:w-auto shadow-md"
                >
                  Get a Free Quote
                </CTAButton>

                <CTAButton
                  href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20need%20a%20quote%20for%20${encodeURIComponent(service.shortTitle || service.title)}`}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={MessageSquare}
                >
                  WhatsApp Fast Track
                </CTAButton>
              </div>

              {/* Trust Checkmarks */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Legal Acceptance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>24h Fast Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Confidential & Secure</span>
                </div>
              </div>

            </div>

            {/* Right Column: High-Trust Document Card Preview (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-card relative overflow-hidden">
                
                {/* Header of Preview Card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Service Specification</h4>
                      <p className="text-[11px] text-slate-500">Dubai, UAE Standards</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Verified
                  </span>
                </div>

                {/* Specification Items */}
                <div className="space-y-3 text-xs mb-6">
                  <div className="flex items-start justify-between py-1.5 border-b border-slate-100 gap-2">
                    <span className="text-slate-500 font-medium">Service Category:</span>
                    <span className="font-bold text-slate-900 text-right capitalize">{category.replace('-', ' ')}</span>
                  </div>
                  <div className="flex items-start justify-between py-1.5 border-b border-slate-100 gap-2">
                    <span className="text-slate-500 font-medium">Certification Level:</span>
                    <span className="font-bold text-brand-700 text-right">MOJ / MOFA / Court Standard</span>
                  </div>
                  <div className="flex items-start justify-between py-1.5 border-b border-slate-100 gap-2">
                    <span className="text-slate-500 font-medium">Turnaround Time:</span>
                    <span className="font-bold text-slate-900 text-right">Standard 24 Hours (Express 3-4 Hours)</span>
                  </div>
                  <div className="flex items-start justify-between py-1.5 border-b border-slate-100 gap-2">
                    <span className="text-slate-500 font-medium">Delivery Format:</span>
                    <span className="font-bold text-slate-900 text-right">High-Res Signed PDF + Stamped Hard Copy</span>
                  </div>
                  <div className="flex items-start justify-between py-1.5 gap-2">
                    <span className="text-slate-500 font-medium">Authority Acceptance:</span>
                    <span className="font-bold text-emerald-700 text-right">Dubai Courts, Ministries & Embassies</span>
                  </div>
                </div>

                {/* Direct quote mini prompt */}
                <Link
                  to={`/contact?category=${category}&service=${slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-brand-700 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <span>Request Official Quote for this Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Detailed Service Overview */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Detailed Overview */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                  About {service.shortTitle || service.title}
                </h2>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4 text-sm sm:text-base">
                  <p>{service.overview || service.description}</p>
                </div>
              </div>

              {/* Key Features & Benefits */}
              {service.features && service.features.length > 0 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Key Features & Advantages
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Who Needs This Service? */}
              {service.targetAudience && service.targetAudience.length > 0 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Who Needs This Service?
                  </h3>
                  <div className="space-y-3">
                    {service.targetAudience.map((audience, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-center gap-3.5"
                      >
                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                          <Users className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-700">
                          {audience}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Required Documents Checklist */}
              {service.documentsRequired && service.documentsRequired.length > 0 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Required Documents Checklist
                  </h3>
                  <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-200/70 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
                      Please have clear scans or copies ready:
                    </p>
                    {service.documentsRequired.map((doc, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-950 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0"></span>
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process Steps for this specific service */}
              {service.processSteps && service.processSteps.length > 0 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Execution Process & Timeline
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.processSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl p-5 border border-slate-200 shadow-subtle flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-xs font-black text-brand-600 mb-1 block">
                            STEP {step.step}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 mb-1">
                            {step.title}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Service-Specific FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div>
                  <FAQ
                    faqs={service.faqs}
                    title={`${service.shortTitle || service.title} FAQs`}
                    subtitle="Common inquiries specific to this service in Dubai, UAE."
                  />
                </div>
              )}

            </div>

            {/* Sidebar Sticky Quote Form (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <ContactForm
                  defaultCategory={category}
                  defaultService={slug}
                />

                {/* Direct Phone & WhatsApp Box */}
                <div className="bg-navy-950 text-white rounded-3xl p-6 border border-slate-800 shadow-card text-center">
                  <h4 className="text-base font-bold mb-1.5">Have an Urgent Court or Visa Deadline?</h4>
                  <p className="text-xs text-slate-300 mb-4">
                    Call our Dubai documentation center directly or connect instantly on WhatsApp.
                  </p>
                  <div className="space-y-2">
                    <a
                      href={`tel:${companyDetails.phoneRaw}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-navy-950 font-bold text-xs hover:bg-slate-100 transition-colors"
                    >
                      <span>Call: {companyDetails.phone}</span>
                    </a>
                    <a
                      href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20have%20an%20urgent%20inquiry%20for%20${encodeURIComponent(service.shortTitle || service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Urgent Desk</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Related Services */}
      <RelatedServices
        currentSlug={slug}
        category={category}
        relatedSlugs={service.relatedSlugs}
      />

    </div>
  );
}

import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/navigation';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Smart Word | Translation & Attestation Office in Dubai, UAE";
  }, []);

  const contactFaqs = [
    {
      q: "Can I drop off original documents at your Dubai office?",
      a: "Yes, you can drop off your documents at our Dubai office during business hours (Mon-Fri 8:30 AM to 5:00 PM, Sat 9:30 AM to 1:00 PM). We also provide convenient courier pickup and delivery across Dubai and all UAE Emirates."
    },
    {
      q: "How fast do you respond to online quote requests?",
      a: "Our Dubai documentation team reviews submissions and provides fixed price quotes within 15 to 30 minutes during standard business hours."
    },
    {
      q: "Can I send documents directly via WhatsApp for an instant estimate?",
      a: "Yes! You can message us on WhatsApp at +971 52 240 2909 with photos or PDF scans of your documents for instant evaluation."
    }
  ];

  return (
    <div className="w-full">
      
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Contact Us" }
        ]}
        badge="Dubai, UAE Head Office"
        title="Contact Smart Word UAE"
        subtitle="Get in touch with our legal translation and attestation specialists in Dubai for immediate assistance or request a free quote online."
        showCTA={false}
      />

      {/* Main Contact Grid */}
      <section className="py-14 sm:py-20 bg-slate-50/50">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Office Details & Direct Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-subtle space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Get in Touch
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Reach our documentation team via phone, email, or WhatsApp.
                  </p>
                </div>

                <div className="space-y-4 text-sm text-slate-700">
                  
                  {/* Location */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Office Location</span>
                      <span className="text-xs text-slate-600 leading-snug">{companyDetails.location}</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Direct Phone Line</span>
                      <a href={`tel:${companyDetails.phoneRaw}`} className="text-xs text-brand-700 font-semibold hover:underline">
                        {companyDetails.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Official Email</span>
                      <a href={`mailto:${companyDetails.email}`} className="text-xs text-brand-700 font-semibold hover:underline">
                        {companyDetails.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-slate-600 space-y-0.5">
                      <span className="font-bold text-slate-900 block">Working Hours</span>
                      <p>{companyDetails.workingHours.weekdays}</p>
                      <p>{companyDetails.workingHours.saturday}</p>
                      <p className="text-slate-400">{companyDetails.workingHours.sunday}</p>
                    </div>
                  </div>

                </div>

                {/* WhatsApp Quick Action Button */}
                <a
                  href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20would%20like%20to%20inquire%20about%20your%20services`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+971 52 240 2909)</span>
                </a>

              </div>

              {/* Trust Badge Box */}
              <div className="bg-navy-950 text-white rounded-3xl p-6 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-brand-300 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Guaranteed Acceptance</span>
                </div>
                <h4 className="text-sm font-bold text-white">
                  Accredited by UAE Ministry of Justice (MOJ) & MOFA
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All translations and document attestations adhere to strict federal formatting guidelines, guaranteeing recognition by Dubai Courts, GDRFA, and foreign embassies.
                </p>
              </div>

            </div>

            {/* Right Column: Contact & Quote Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>

      {/* FAQs */}
      <FAQ
        faqs={contactFaqs}
        title="Contact & Submission FAQ"
        subtitle="Frequently asked questions about visiting our office, submitting documents, and courier delivery."
      />

    </div>
  );
}

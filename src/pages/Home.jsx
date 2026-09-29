import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Languages, Award, FileCheck2, Building2, ScrollText, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import TrustSection from '../components/TrustSection';
import WorldConnectionSection from '../components/WorldConnectionSection';
import ServiceGrid from '../components/ServiceGrid';
import ProcessSteps from '../components/ProcessSteps';
import LanguageGrid from '../components/LanguageGrid';
import FAQ from '../components/FAQ';
import CTAButton from '../components/CTAButton';
import AnimatedSection from '../components/AnimatedSection';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { allServices, serviceCategories } from '../data/services';
import { companyDetails } from '../data/navigation';

export default function Home() {
  return (
    <div className="w-full">
      
      {/* 1. Hero Section with 4 Slides & Instant Estimate Selector */}
      <Hero />

      {/* 2. Official UAE Ministry / Authority Recognition Bar */}
      <StatsSection />

      {/* 3. Core Service Categories Cards (Primary Hubs) */}
      <section className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-lime-600" />
              Comprehensive UAE Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Primary Service Categories
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore specialized translation, document legalization, and corporate documentation services across Dubai and the UAE.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={{ stagger: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {serviceCategories.map((category) => {
              const servicesInCat = allServices.filter(s => s.category === category.id);
              return (
                <motion.div
                  key={category.id}
                  variants={fadeInUp}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-subtle hover:shadow-card hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-200 flex items-center justify-center shadow-sm">
                        {category.id === 'translation' && <Languages className="w-6 h-6" />}
                        {category.id === 'attestation' && <Award className="w-6 h-6" />}
                        {category.id === 'notarization' && <FileCheck2 className="w-6 h-6" />}
                        {category.id === 'business-setup' && <Building2 className="w-6 h-6" />}
                        {category.id === 'drafting' && <ScrollText className="w-6 h-6" />}
                        {category.id === 'emirati-pension' && <ShieldCheck className="w-6 h-6" />}
                      </div>

                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {servicesInCat.length} Services
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-2">
                      {category.name} Services
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Popular Services Mini-List */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100 text-xs">
                      {servicesInCat.slice(0, 3).map((item) => (
                        <Link
                          key={item.slug}
                          to={`/services/${category.id}/${item.slug}`}
                          className="flex items-center justify-between text-slate-600 hover:text-brand-700 font-medium py-0.5 group/item"
                        >
                          <span className="truncate">{item.shortTitle || item.title}</span>
                          <span className="text-slate-400 group-hover/item:text-brand-600">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/services/${category.id}`}
                    className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-brand-50 text-xs font-bold text-brand-800 border border-slate-200/80 hover:border-brand-200 transition-all"
                  >
                    <span>Explore {category.name} Catalog</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* 4. "Connecting the World with Words" Mission & 4 Key Metrics */}
      <WorldConnectionSection />

      {/* 5. Trust Credibility Section */}
      <TrustSection />

      {/* 6. Featured / Popular Services Grid */}
      <section className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceGrid
            services={allServices}
            limit={9}
            title="Popular UAE Services"
            subtitle="Explore our most frequently requested legal translations, MOFA attestations, and corporate documentation solutions."
            showFilters={true}
            showSearch={true}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <CTAButton
              to="/services"
              variant="outline"
              size="lg"
              showArrow
            >
              Browse Complete Directory of 50+ Services
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* 7. 4-Step Process Timeline */}
      <ProcessSteps />

      {/* 8. Languages Supported Section */}
      <LanguageGrid />

      {/* 9. Conversion Quote Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid-bg opacity-10 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-300 text-xs font-bold uppercase tracking-wider mb-5 backdrop-blur-sm border border-white/10">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Fast Turnaround • Dubai Office Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Need an Official Translation or Document Attestation?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Send us your document requirements today. Our team will review your files, verify UAE authority requirements, and provide a clear quote within 15–30 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <CTAButton
              to="/contact"
              variant="white"
              size="lg"
              showArrow
            >
              Request a Free Quote Now
            </CTAButton>
            <CTAButton
              href={`https://wa.me/${companyDetails.whatsapp}?text=Hello%20Smart%20Word,%20I%20need%20a%20quote`}
              variant="navy"
              size="lg"
              className="bg-white/15 hover:bg-white/25 text-white border-white/20"
              icon={MessageSquare}
            >
              WhatsApp Us (+971 52 240 2909)
            </CTAButton>
          </div>
        </motion.div>
      </section>

      {/* 10. FAQs Section */}
      <FAQ />

    </div>
  );
}


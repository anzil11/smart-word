import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import StatsSection from '../components/StatsSection';
import WorldConnectionSection from '../components/WorldConnectionSection';
import TrustSection from '../components/TrustSection';
import FAQ from '../components/FAQ';
import CTAButton from '../components/CTAButton';
import { ShieldCheck, Award, Users, Target, HeartHandshake, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { companyDetails } from '../data/navigation';

export default function About() {
  useEffect(() => {
    document.title = "About Smart Word | Professional Translation & Legal Documentation in Dubai";
  }, []);

  return (
    <div className="w-full">
      
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "About Us" }
        ]}
        badge="Official UAE Documentation Partner"
        title="About Smart Word UAE"
        subtitle="Your trusted partner for certified legal translation, MOFA document attestation, and corporate legal solutions in Dubai."
        showCTA={true}
        ctaText="Get a Free Quote"
      />

      {/* Stats / Authorities Banner */}
      <StatsSection />

      {/* Main Story & Company Overview */}
      <section className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-lime-600" />
                Who We Are
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Empowering Individuals & Businesses Across the UAE
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Smart Word is a premier translation and legal documentation agency based in Dubai, United Arab Emirates. We specialize in providing Ministry of Justice (MOJ) certified translations, Ministry of Foreign Affairs (MOFA) attestations, court notarization coordination, and corporate legal drafting.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                In a dynamic, multicultural commercial capital like Dubai, navigating official government documentation, court submissions, and consular legalization requires exact legal precision. Smart Word bridges linguistic and regulatory divides, ensuring your personal and corporate paperwork is 100% compliant with UAE federal regulations.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <motion.div whileHover={{ scale: 1.03 }} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-subtle">
                  <span className="text-2xl font-black text-brand-600">50+</span>
                  <p className="text-[11px] font-bold text-slate-800 mt-1">Languages</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-subtle">
                  <span className="text-2xl font-black text-emerald-600">10k+</span>
                  <p className="text-[11px] font-bold text-slate-800 mt-1">Happy Clients</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-subtle">
                  <span className="text-2xl font-black text-indigo-600">25M+</span>
                  <p className="text-[11px] font-bold text-slate-800 mt-1">Words</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-subtle">
                  <span className="text-2xl font-black text-amber-600">99.8%</span>
                  <p className="text-[11px] font-bold text-slate-800 mt-1">Satisfaction</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Visual Feature Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="bg-gradient-to-br from-navy-950 to-navy-900 text-white rounded-3xl p-8 sm:p-10 shadow-card relative overflow-hidden space-y-6">
                
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center border border-brand-500/30">
                  <Award className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Our Mission & Vision
                </h3>

                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <div>
                    <h4 className="font-bold text-brand-300 text-base mb-1">Our Mission</h4>
                    <p>At Smart Word, we bridge language barriers and connect cultures through professional translation and documentation services. Our mission is to provide accurate, reliable, and timely language solutions across the UAE.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-300 text-base mb-1">Our Vision</h4>
                    <p>To be the UAE's most trusted, technologically streamlined, and accessible partner for cross-border documentation and linguistic excellence.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Dubai, United Arab Emirates</span>
                  <span className="text-emerald-400 font-semibold">Strict Data Privacy & NDA</span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Connecting the World with Words Banner */}
      <WorldConnectionSection />

      {/* Trust Credibility Section */}
      <TrustSection />

      {/* Core Principles Grid */}
      <section className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Core Principles
            </h2>
            <p className="mt-3 text-base text-slate-600">
              The fundamental standards guiding every translation, attestation, and client interaction.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={{ stagger: 0.12 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-subtle hover:shadow-card hover:border-brand-300 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-brand-700 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Uncompromising Precision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Legal terminology requires zero ambiguity. Every sworn translation and agreement draft is rigorously checked against UAE statutory terminology.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-subtle hover:shadow-card hover:border-brand-300 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Total Confidentiality</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your contracts, financial statements, and identification papers are handled under strict non-disclosure agreements with encrypted digital custody.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-subtle hover:shadow-card hover:border-brand-300 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Client-First Speed</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We understand that court deadlines and visa appointments cannot wait. We deliver consistent, reliable, and expedited services on time, every time.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Global FAQs */}
      <FAQ />

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24 bg-navy-950 text-white text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4 sm:px-6"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Partner with Smart Word UAE
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6">
            Get in touch with our Dubai team to discuss your documentation, attestation, or translation needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="/contact" variant="primary" size="md" showArrow>
              Contact Our Dubai Office
            </CTAButton>
            <CTAButton
              href={`https://wa.me/${companyDetails.whatsapp}`}
              variant="secondary"
              size="md"
            >
              WhatsApp Us (+971 52 240 2909)
            </CTAButton>
          </div>
        </motion.div>
      </section>

    </div>
  );
}


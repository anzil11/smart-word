import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ExternalLink, MessageCircle } from 'lucide-react';
import SocialLinks from './SocialIcons';
import { companyDetails, footerLinks, importantGovernmentLinks, socialLinks } from '../data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand, Contact Summary & Accreditations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800/80">
          
          {/* Brand & Post Address (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center group focus:outline-none py-1">
              <img
                src="/images/logo-white.png"
                alt="SmartWord - Where precision meets compliance"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Smart Word is a leading UAE translation and documentation consultancy in Dubai. Providing official Ministry of Justice (MOJ) sworn translations, MOFA attestations, Dubai Courts notarization, and company setup solutions.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span><strong>Post Address:</strong> {companyDetails.postAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href={`tel:${companyDetails.phoneRaw}`} className="hover:text-white transition-colors">
                  <strong>Phone:</strong> {companyDetails.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-white transition-colors">
                  <strong>Email:</strong> {companyDetails.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-slate-200 block">Operation Hours:</span>
                  <p>{companyDetails.workingHours.weekdays}</p>
                  <p>{companyDetails.workingHours.saturday}</p>
                  <p className="text-slate-500">{companyDetails.workingHours.sunday}</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp & Social Links */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Connect With Us:</span>
              </div>
              <SocialLinks links={socialLinks} variant="dark" iconSize="w-4 h-4" />
            </div>
          </div>


          {/* Nav Columns (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Translation Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Translation
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {footerLinks.translation.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-white transition-colors hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Attestation Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Attestation
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {footerLinks.attestation.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-white transition-colors hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notarization Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Notarization
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {footerLinks.notarization.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-white transition-colors hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Corporate & Setup Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Corporate & Setup
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {footerLinks.corporate.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-white transition-colors hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Important Links: UAE Official Government Portals */}
        <div className="py-8 border-b border-slate-800/80">
          <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-slate-200">
            <ExternalLink className="w-3.5 h-3.5 text-brand-400" />
            <span>Important UAE Government & Authority Links</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 text-xs">
            {importantGovernmentLinks.map((gov, i) => (
              <a
                key={i}
                href={gov.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors group"
              >
                <span className="truncate">{gov.name}</span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-brand-400 flex-shrink-0 ml-1.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Middle Tier: Ministry Accreditations Bar */}
        <div className="py-6 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-slate-300">UAE Official Accreditations:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] font-medium text-slate-300">
            {companyDetails.accreditations.map((acc, index) => (
              <span key={index} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                {acc}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Tier: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {companyDetails.name} UAE. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  FileCheck2,
  Building2,
  ScrollText,
  MessageCircle,
  FileText,
  Landmark,
  Sparkles,
  ChevronRight,
  Layers,
  GraduationCap,
  Heart,
  Baby,
  FileSignature,
  CopyCheck,
  Globe,
  FileSpreadsheet,
  FileEdit,
  Users,
  Handshake,
  AlertCircle,
  CreditCard,
  Home as HomeIcon,
  CalendarCheck,
  UserPlus,
  Stethoscope,
  Code2,
  Video,
  FlaskConical,
  Building,
  Scale,
  Car,
  CheckCircle2,
  Briefcase
} from 'lucide-react';
import {
  companyDetails,
  serviceCategoriesNavigation,
  solutionsMenuData
} from '../data/navigation';
import CTAButton from './CTAButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Active desktop dropdown: 'services' | 'solutions' | null
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Services menu active category tab in mega menu
  const [activeServicesCategorySlug, setActiveServicesCategorySlug] = useState('translation');

  // Solutions menu active tab (RushTranslate clone)
  const [activeSolutionTab, setActiveSolutionTab] = useState('documents');
  
  // Mobile accordions state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileExpandedServiceCategory, setMobileExpandedServiceCategory] = useState(null);
  const [mobileExpandedSolutionTab, setMobileExpandedSolutionTab] = useState(null);

  const location = useLocation();
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileServicesOpen(false);
    setMobileSolutionsOpen(false);
    setMobileExpandedServiceCategory(null);
    setMobileExpandedSolutionTab(null);
  }, [location.pathname]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (menuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleMobileServiceCategory = (cat) => {
    setMobileExpandedServiceCategory(mobileExpandedServiceCategory === cat ? null : cat);
  };

  const toggleMobileSolutionTab = (tabKey) => {
    setMobileExpandedSolutionTab(mobileExpandedSolutionTab === tabKey ? null : tabKey);
  };

  // Category Icon helper
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'translation': return ShieldCheck;
      case 'attestation': return Award;
      case 'notarization': return FileCheck2;
      case 'drafting': return ScrollText;
      case 'business-setup': return Building2;
      case 'emirati-pension': return Landmark;
      default: return FileText;
    }
  };

  // Category Theme helper
  const getCategoryTheme = (category) => {
    switch (category) {
      case 'translation':
        return {
          badge: 'bg-blue-50 text-blue-700 border-blue-200',
          activeBg: 'bg-blue-50/90 text-blue-950 border-blue-300 font-bold',
          iconBg: 'bg-blue-100 text-blue-700',
          hoverText: 'group-hover:text-blue-700',
          bottomBg: 'bg-blue-50/40',
          bottomText: 'text-blue-800'
        };
      case 'attestation':
        return {
          badge: 'bg-amber-50 text-amber-700 border-amber-200',
          activeBg: 'bg-amber-50/90 text-amber-950 border-amber-300 font-bold',
          iconBg: 'bg-amber-100 text-amber-700',
          hoverText: 'group-hover:text-amber-700',
          bottomBg: 'bg-amber-50/40',
          bottomText: 'text-amber-800'
        };
      case 'notarization':
        return {
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          activeBg: 'bg-emerald-50/90 text-emerald-950 border-emerald-300 font-bold',
          iconBg: 'bg-emerald-100 text-emerald-700',
          hoverText: 'group-hover:text-emerald-700',
          bottomBg: 'bg-emerald-50/40',
          bottomText: 'text-emerald-800'
        };
      case 'drafting':
        return {
          badge: 'bg-purple-50 text-purple-700 border-purple-200',
          activeBg: 'bg-purple-50/90 text-purple-950 border-purple-300 font-bold',
          iconBg: 'bg-purple-100 text-purple-700',
          hoverText: 'group-hover:text-purple-700',
          bottomBg: 'bg-purple-50/40',
          bottomText: 'text-purple-800'
        };
      case 'business-setup':
        return {
          badge: 'bg-sky-50 text-sky-700 border-sky-200',
          activeBg: 'bg-sky-50/90 text-sky-950 border-sky-300 font-bold',
          iconBg: 'bg-sky-100 text-sky-700',
          hoverText: 'group-hover:text-sky-700',
          bottomBg: 'bg-sky-50/40',
          bottomText: 'text-sky-800'
        };
      case 'emirati-pension':
        return {
          badge: 'bg-teal-50 text-teal-700 border-teal-200',
          activeBg: 'bg-teal-50/90 text-teal-950 border-teal-300 font-bold',
          iconBg: 'bg-teal-100 text-teal-700',
          hoverText: 'group-hover:text-teal-700',
          bottomBg: 'bg-teal-50/40',
          bottomText: 'text-teal-800'
        };
      default:
        return {
          badge: 'bg-slate-50 text-slate-700 border-slate-200',
          activeBg: 'bg-slate-100 text-slate-900 border-slate-300 font-bold',
          iconBg: 'bg-slate-100 text-slate-700',
          hoverText: 'group-hover:text-brand-600',
          bottomBg: 'bg-slate-50',
          bottomText: 'text-brand-700'
        };
    }
  };

  // Specific service icon helper
  const getServiceItemIcon = (subItem, category) => {
    const p = subItem.path.toLowerCase();
    if (p.includes('medical')) return Stethoscope;
    if (p.includes('legal-translation') || p.includes('poa-translation') || p.includes('court')) return Scale;
    if (p.includes('educational') || p.includes('academic') || p.includes('equivalency') || p.includes('khda') || p.includes('degree')) return GraduationCap;
    if (p.includes('marriage')) return Heart;
    if (p.includes('birth')) return Baby;
    if (p.includes('death')) return FileText;
    if (p.includes('salary') || p.includes('bank-account')) return CreditCard;
    if (p.includes('true-copy')) return CopyCheck;
    if (p.includes('notary') || p.includes('affidavit') || p.includes('declaration')) return FileSignature;
    if (p.includes('mofa') || p.includes('moj') || p.includes('embassy')) return Landmark;
    if (p.includes('memorandum') || p.includes('moa')) return FileSpreadsheet;
    if (p.includes('amendment')) return FileEdit;
    if (p.includes('board-resolution') || p.includes('minutes')) return Users;
    if (p.includes('joint-venture') || p.includes('partnership') || p.includes('agreement')) return Handshake;
    if (p.includes('legal-notice')) return AlertCircle;
    if (p.includes('rental') || p.includes('tenancy')) return HomeIcon;
    if (p.includes('freezone') || p.includes('mainland') || p.includes('offshore')) return Building;
    if (p.includes('software') || p.includes('website') || p.includes('digital')) return Globe;
    if (p.includes('subtitling') || p.includes('video')) return Video;
    if (p.includes('scientific')) return FlaskConical;
    if (p.includes('pension') || p.includes('gpssa')) return Landmark;
    if (p.includes('employee') || p.includes('registration')) return UserPlus;
    if (p.includes('proforma')) return CalendarCheck;
    if (p.includes('driving')) return Car;
    if (p.includes('police') || p.includes('sworn') || p.includes('certified')) return ShieldCheck;
    return getCategoryIcon(category);
  };

  // Generic Icon Component for solutions data
  const getSolutionIconComponent = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'FileSignature': return FileSignature;
      case 'Award': return Award;
      case 'CreditCard': return CreditCard;
      case 'Baby': return Baby;
      case 'Scale': return Scale;
      case 'FileText': return FileText;
      case 'Heart': return Heart;
      case 'Stethoscope': return Stethoscope;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'ScrollText': return ScrollText;
      case 'Home': return HomeIcon;
      case 'ShieldCheck': return ShieldCheck;
      case 'Building2': return Building2;
      case 'Building': return Building;
      case 'Landmark': return Landmark;
      case 'Globe': return Globe;
      case 'Code2': return Code2;
      case 'Video': return Video;
      case 'FlaskConical': return FlaskConical;
      case 'FileCheck2': return FileCheck2;
      case 'Users': return Users;
      case 'Handshake': return Handshake;
      case 'Briefcase': return Briefcase;
      default: return FileText;
    }
  };

  const activeServicesCategoryData =
    serviceCategoriesNavigation.find((cat) => cat.category === activeServicesCategorySlug) ||
    serviceCategoriesNavigation[0];

  const ActiveServicesIcon = getCategoryIcon(activeServicesCategoryData.category);
  const activeServicesTheme = getCategoryTheme(activeServicesCategoryData.category);

  const currentSolution = solutionsMenuData[activeSolutionTab] || solutionsMenuData.documents;

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3'
      }`}
    >
      {/* Top Micro Bar */}
      <div className="hidden lg:block border-b border-slate-100/80 pb-2 mb-2 text-[11px] font-medium text-slate-500">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Dubai Office Open: {companyDetails.workingHours.weekdays}
            </span>
            <span className="text-slate-300">|</span>
            <span>MOJ & MOFA Certified Services</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${companyDetails.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-brand-600 transition-colors font-semibold text-slate-700"
            >
              <Phone className="w-3 h-3 text-brand-600" />
              <span>{companyDetails.phone}</span>
            </a>
            <span className="text-slate-300">|</span>
            <a
              href={`https://wa.me/${companyDetails.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold"
            >
              <MessageCircle className="w-3 h-3 text-emerald-600" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center focus:outline-none flex-shrink-0 group py-1">
            <img
              src="/images/logo.png"
              alt="SmartWord - Where precision meets compliance"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-brand-700 bg-brand-50/60 font-bold'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                }`
              }
            >
              Home
            </NavLink>

            {/* 1. SINGLE CONSOLIDATED "SERVICES" DROPDOWN (Lists all 6 categories & related services) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                  activeDropdown === 'services'
                    ? 'text-brand-700 bg-brand-50/70 shadow-xs font-bold'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180 text-brand-600' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Services Mega Dropdown Container */}
              {activeDropdown === 'services' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[960px] xl:w-[1020px] shadow-dropdown z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl overflow-hidden">
                    
                    {/* Top Mega Menu Header */}
                    <div className="bg-slate-50/90 px-6 py-3 border-b border-slate-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-brand-600" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          Smart Word Official Services Catalog
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-100 text-brand-800">
                          50+ UAE Services
                        </span>
                      </div>
                      <Link
                        to="/services"
                        className="text-xs font-bold text-brand-700 hover:text-brand-800 hover:underline flex items-center gap-1"
                      >
                        <span>Explore Full Directory</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Mega Menu Body: 2-Pane Tabbed Layout */}
                    <div className="grid grid-cols-12 min-h-[420px]">
                      
                      {/* Left Pane: Service Categories Selector */}
                      <div className="col-span-4 bg-slate-50/70 p-3 border-r border-slate-100 space-y-1.5 flex flex-col justify-between">
                        <div className="space-y-1">
                          <p className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Service Categories
                          </p>
                          {serviceCategoriesNavigation.map((cat) => {
                            const CatIcon = getCategoryIcon(cat.category);
                            const isSelected = activeServicesCategorySlug === cat.category;
                            const theme = getCategoryTheme(cat.category);

                            return (
                              <button
                                key={cat.category}
                                type="button"
                                onMouseEnter={() => setActiveServicesCategorySlug(cat.category)}
                                onClick={() => setActiveServicesCategorySlug(cat.category)}
                                className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between group cursor-pointer ${
                                  isSelected
                                    ? `${theme.activeBg} shadow-sm border`
                                    : 'text-slate-700 hover:bg-white hover:text-slate-900 border border-transparent'
                                }`}
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div
                                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-200/60 ${
                                      isSelected ? 'bg-white shadow-xs' : theme.iconBg
                                    }`}
                                  >
                                    <CatIcon className="w-4 h-4" />
                                  </div>
                                  <div className="min-w-0">
                                    <span className="text-xs font-bold block truncate leading-tight">
                                      {cat.name}
                                    </span>
                                    <span className="text-[10px] text-slate-500 font-medium block truncate">
                                      {cat.items.length} Services • {cat.badge}
                                    </span>
                                  </div>
                                </div>
                                <ChevronRight
                                  className={`w-4 h-4 flex-shrink-0 transition-transform ${
                                    isSelected
                                      ? 'text-brand-600 translate-x-0.5'
                                      : 'text-slate-300 group-hover:text-slate-500'
                                  }`}
                                />
                              </button>
                            );
                          })}
                        </div>

                        {/* Bottom Catalog Quick Link */}
                        <div className="pt-3 border-t border-slate-200/80 px-2">
                          <Link
                            to="/services"
                            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white border border-slate-200 hover:border-brand-300 hover:bg-brand-50/40 text-xs font-bold text-slate-700 hover:text-brand-700 transition-colors shadow-xs"
                          >
                            <span>Browse All 50+ Services</span>
                            <ArrowRight className="w-3.5 h-3.5 text-brand-600" />
                          </Link>
                        </div>
                      </div>

                      {/* Right Pane: Selected Category Services Showcase */}
                      <div className="col-span-8 p-6 flex flex-col justify-between bg-white">
                        
                        <div>
                          {/* Active Category Header */}
                          <div className="flex items-start justify-between pb-3.5 border-b border-slate-100 mb-4">
                            <div className="pr-4">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-base font-extrabold text-navy-950">
                                  {activeServicesCategoryData.name} Services
                                </h4>
                                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${activeServicesTheme.badge}`}>
                                  {activeServicesCategoryData.badge}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 leading-relaxed max-w-lg">
                                {activeServicesCategoryData.description}
                              </p>
                            </div>
                            <Link
                              to={activeServicesCategoryData.path}
                              className={`text-xs font-bold ${activeServicesTheme.bottomText} hover:underline flex items-center gap-1 flex-shrink-0 mt-1`}
                            >
                              <span>View All ({activeServicesCategoryData.items.length})</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>

                          {/* Services Items Grid */}
                          <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 max-h-[290px] overflow-y-auto pr-1">
                            {activeServicesCategoryData.items.map((subItem) => {
                              const ItemIcon = getServiceItemIcon(subItem, activeServicesCategoryData.category);

                              return (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className="p-2 rounded-xl hover:bg-slate-50 transition-colors group flex items-start gap-2.5 border border-transparent hover:border-slate-100"
                                >
                                  <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${activeServicesTheme.iconBg} transition-colors`}>
                                    <ItemIcon className="w-3 h-3" />
                                  </div>
                                  <div className="min-w-0">
                                    <span className="text-xs font-semibold text-slate-800 group-hover:text-brand-600 block leading-snug line-clamp-2 transition-colors">
                                      {subItem.shortName || subItem.name}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Bottom Action / Trust Footer */}
                        <div className={`mt-4 pt-3 border-t border-slate-100 ${activeServicesTheme.bottomBg} -mx-6 -mb-6 px-6 py-3 flex items-center justify-between text-xs`}>
                          <span className="text-slate-600 font-medium truncate pr-2 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                            <span>100% Accepted by UAE Ministries & Dubai Courts • Express Delivery</span>
                          </span>
                          <Link
                            to="/contact"
                            className={`font-bold ${activeServicesTheme.bottomText} hover:underline flex-shrink-0 flex items-center gap-1`}
                          >
                            <span>Get Free Quote</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* 2. SOLUTIONS MENU (RushTranslate Clone Mega Menu) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                  activeDropdown === 'solutions'
                    ? 'text-brand-700 bg-brand-50/70 shadow-xs font-bold'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'solutions' ? 'rotate-180 text-brand-600' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Solutions Mega Menu Panel (RushTranslate Clone) */}
              {activeDropdown === 'solutions' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[960px] xl:w-[1040px] shadow-dropdown z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
                    
                    <div className="grid grid-cols-12 min-h-[400px]">
                      
                      {/* Left: solution-nav vertical tabs */}
                      <div className="col-span-3 bg-slate-50/90 p-3.5 border-r border-slate-200 flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <p className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Solutions by
                          </p>
                          {Object.keys(solutionsMenuData).map((tabKey) => {
                            const tab = solutionsMenuData[tabKey];
                            const isActive = activeSolutionTab === tabKey;

                            return (
                              <button
                                key={tabKey}
                                type="button"
                                onMouseEnter={() => setActiveSolutionTab(tabKey)}
                                onClick={() => setActiveSolutionTab(tabKey)}
                                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between group cursor-pointer ${
                                  isActive
                                    ? 'bg-brand-600 text-white shadow-sm'
                                    : 'text-slate-700 hover:bg-white hover:text-brand-700'
                                }`}
                              >
                                <span>{tab.tabLabel}</span>
                                <ArrowRight
                                  className={`w-3.5 h-3.5 transition-transform ${
                                    isActive
                                      ? 'text-white translate-x-0.5'
                                      : 'text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5'
                                  }`}
                                />
                              </button>
                            );
                          })}
                        </div>

                        {/* Bottom Catalog Quick Button */}
                        <div className="pt-3 border-t border-slate-200">
                          <Link
                            to="/services"
                            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white border border-slate-200 hover:border-brand-300 hover:bg-brand-50/50 text-xs font-bold text-slate-700 hover:text-brand-700 transition-colors shadow-xs"
                          >
                            <span>Browse All 50+ Services</span>
                            <ArrowRight className="w-3.5 h-3.5 text-brand-600" />
                          </Link>
                        </div>
                      </div>

                      {/* Right: solution-options */}
                      <div className="col-span-9 p-6 bg-white flex flex-col justify-between">
                        
                        <div>
                          {/* Heading */}
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                              {currentSolution.heading}
                            </p>
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                              {currentSolution.items.length} Options
                            </span>
                          </div>

                          {/* Items Grid */}
                          <div className="grid grid-cols-3 gap-x-4 gap-y-2 max-h-[290px] overflow-y-auto pr-1">
                            {currentSolution.items.map((item) => {
                              const ItemIcon = getSolutionIconComponent(item.icon);

                              return (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className="p-1.5 rounded-lg hover:bg-slate-50 flex items-center gap-2 text-xs text-slate-700 hover:text-brand-700 transition-colors group"
                                >
                                  {item.flag ? (
                                    <span className="text-base flex-shrink-0 leading-none">
                                      {item.flag}
                                    </span>
                                  ) : (
                                    <span className="w-5 h-5 rounded bg-slate-100 text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-600 flex items-center justify-center flex-shrink-0 transition-colors">
                                      <ItemIcon className="w-3 h-3" />
                                    </span>
                                  )}
                                  <span className="font-medium truncate group-hover:font-semibold">
                                    {item.name}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Bottom Category Link & CTA */}
                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                          <Link
                            to={currentSolution.seeAllPath}
                            className="font-bold text-brand-700 hover:text-brand-800 hover:underline flex items-center gap-1.5"
                          >
                            <span>{currentSolution.seeAllText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          <div className="flex items-center gap-3">
                            <span className="text-slate-500 text-[11px] hidden sm:inline">
                              MOJ & MOFA Certified Official Services
                            </span>
                            <Link
                              to="/contact"
                              className="font-bold px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-brand-600 text-white transition-colors"
                            >
                              Get Free Quote
                            </Link>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-brand-700 bg-brand-50/60 font-bold'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                }`
              }
            >
              About Us
            </NavLink>

            {/* Contact Us */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-brand-700 bg-brand-50/60 font-bold'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                }`
              }
            >
              Contact Us
            </NavLink>

          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-2.5">
            <CTAButton
              to="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex text-xs px-3.5 py-2 shadow-sm"
            >
              Get a Free Quote
            </CTAButton>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[56px] sm:top-[64px] bg-slate-900/60 backdrop-blur-sm z-50 animate-in fade-in duration-200">
          <div className="bg-white h-full max-w-sm w-full ml-auto shadow-2xl p-5 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Header Info */}
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation Menu</span>
                <a href={`tel:${companyDetails.phoneRaw}`} className="text-xs font-bold text-brand-600 hover:underline">
                  {companyDetails.phone}
                </a>
              </div>

              {/* Main Links List */}
              <div className="space-y-1.5">
                
                {/* Home */}
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  Home
                </Link>

                {/* 1. Services Accordion with 6 categories */}
                <div className="pt-1 pb-1">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-bold transition-colors ${
                      mobileServicesOpen ? 'bg-brand-50 text-brand-800' : 'text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-brand-600" />
                      <span>Services (50+ Services)</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileServicesOpen ? 'rotate-180 text-brand-600' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="pl-3 pr-2 py-2 space-y-2 bg-slate-50/80 rounded-xl my-1 border border-slate-100">
                      <Link
                        to="/services"
                        className="block py-1.5 px-2 text-xs font-bold text-brand-700 hover:underline border-b border-slate-200/80 mb-1"
                      >
                        → Browse Full Services Directory
                      </Link>

                      {serviceCategoriesNavigation.map((cat) => {
                        const isCatExpanded = mobileExpandedServiceCategory === cat.category;
                        const CatIcon = getCategoryIcon(cat.category);

                        return (
                          <div key={cat.category} className="border-b border-slate-200/60 pb-1.5 last:border-0 last:pb-0">
                            <button
                              type="button"
                              onClick={() => toggleMobileServiceCategory(cat.category)}
                              className="w-full flex items-center justify-between py-1 px-1.5 text-xs font-bold text-slate-700 hover:text-brand-700"
                            >
                              <div className="flex items-center gap-1.5">
                                <CatIcon className="w-3.5 h-3.5 text-brand-600" />
                                <span>{cat.name} ({cat.items.length})</span>
                              </div>
                              <ChevronRight
                                className={`w-3 h-3 transition-transform ${
                                  isCatExpanded ? 'rotate-90 text-brand-600' : 'text-slate-400'
                                }`}
                              />
                            </button>

                            {isCatExpanded && (
                              <div className="pl-3 pr-1 pt-1 space-y-1">
                                <Link
                                  to={cat.path}
                                  className="block py-1 text-[11px] font-bold text-brand-700 hover:underline"
                                >
                                  → View All {cat.name} Services
                                </Link>
                                {cat.items.map((subItem) => (
                                  <Link
                                    key={subItem.path}
                                    to={subItem.path}
                                    className="block py-0.5 text-[11px] text-slate-600 hover:text-brand-600 truncate"
                                  >
                                    • {subItem.shortName || subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 2. Solutions Accordion (RushTranslate Clone) */}
                <div className="pt-1 pb-1">
                  <button
                    type="button"
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-bold transition-colors ${
                      mobileSolutionsOpen ? 'bg-brand-50 text-brand-800' : 'text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-brand-600" />
                      <span>Solutions</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileSolutionsOpen ? 'rotate-180 text-brand-600' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {mobileSolutionsOpen && (
                    <div className="pl-3 pr-2 py-2 space-y-2 bg-slate-50/80 rounded-xl my-1 border border-slate-100 max-h-72 overflow-y-auto">
                      {Object.keys(solutionsMenuData).map((tabKey) => {
                        const tab = solutionsMenuData[tabKey];
                        const isTabExpanded = mobileExpandedSolutionTab === tabKey;

                        return (
                          <div key={tabKey} className="border-b border-slate-200/60 pb-1.5 last:border-0 last:pb-0">
                            <button
                              type="button"
                              onClick={() => toggleMobileSolutionTab(tabKey)}
                              className="w-full flex items-center justify-between py-1 px-1.5 text-xs font-bold text-slate-700 hover:text-brand-700"
                            >
                              <span>{tab.tabLabel}</span>
                              <ChevronRight
                                className={`w-3 h-3 transition-transform ${
                                  isTabExpanded ? 'rotate-90 text-brand-600' : 'text-slate-400'
                                }`}
                              />
                            </button>

                            {isTabExpanded && (
                              <div className="pl-2 pr-1 pt-1 space-y-1">
                                {tab.items.slice(0, 8).map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.path}
                                    className="block py-1 text-[11px] text-slate-600 hover:text-brand-600 truncate"
                                  >
                                    {item.flag ? `${item.flag} ` : '• '}
                                    {item.name}
                                  </Link>
                                ))}
                                <Link
                                  to={tab.seeAllPath}
                                  className="block pt-1 text-[11px] font-bold text-brand-700 hover:underline"
                                >
                                  {tab.seeAllText} →
                                </Link>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* About Us */}
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  About Us
                </Link>

                {/* Contact Us */}
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <CTAButton
                to="/contact"
                variant="primary"
                size="md"
                className="w-full text-center justify-center"
              >
                Get a Free Quote
              </CTAButton>
              <a
                href={`https://wa.me/${companyDetails.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: {companyDetails.phone}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

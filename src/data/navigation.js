// Navigation data structure for Smart Word UAE
// Supports Header Mega Menus, Mobile Nav Drawer, and Footer links

export const companyDetails = {
  name: "Smart Word",
  legalName: "Smart Word Legal Translation & Documentation Services",
  location: "Dubai, United Arab Emirates",
  address: "Dubai, UAE",
  postAddress: "Dubai, UAE",
  phone: "+971 52 240 2909",
  phoneRaw: "+971522402909",
  email: "info@smartword.ae",
  whatsapp: "+971522402909",
  whatsappDisplay: "+971 52 240 2909",
  workingHours: {
    weekdays: "Mon - Fri: 8:30 am to 5:00 pm",
    saturday: "Saturday: 9:30 am to 1:00 pm",
    sunday: "Sunday: Closed",
    formatted: "Mon - Fri: 8:30 am to 5:00 pm | Sat: 9:30 am to 1:00 pm | Sun: Closed"
  },
  accreditations: [
    "UAE Ministry of Justice (MOJ)",
    "UAE Ministry of Foreign Affairs (MOFA)",
    "Dubai Courts Approved",
    "KHDA & MOE Verified",
    "General Pension and Social Security Authority (GPSSA) Compliant"
  ]
};

export const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/smartword.ae", key: "facebook" },
  { name: "Instagram", url: "https://www.instagram.com/smartword.ae", key: "instagram" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/smartword.ae", key: "linkedin" },
  { name: "Twitter", url: "https://www.twitter.com/smartword.ae", key: "twitter" },
  { name: "WhatsApp", url: "https://wa.me/971522402909", key: "whatsapp" },
  { name: "YouTube", url: "https://www.youtube.com/@smartword.ae", key: "youtube" }
];


export const importantGovernmentLinks = [
  { name: "Dubai Government Portal", url: "https://www.dubai.ae" },
  { name: "Ministry of Foreign Affairs (MOFA)", url: "https://www.mofaic.gov.ae" },
  { name: "Ministry of Justice (MOJ)", url: "https://www.moj.gov.ae" },
  { name: "Knowledge and Human Development Authority (KHDA)", url: "https://www.khda.gov.ae" },
  { name: "Ministry of Education (MOE)", url: "https://www.moe.gov.ae" },
  { name: "General Pension and Social Security Authority (GPSSA)", url: "https://www.gpssa.gov.ae" },
  { name: "Dubai Department of Economic Development (DED)", url: "https://www.ded.gov.ae" },
  { name: "Dubai Courts", url: "https://www.dubai.ae/en/government/entities/dubai-courts" }
];

export const companyStats = [
  { label: "Languages Supported", value: "50+", desc: "Global certified language pairs", icon: "Languages" },
  { label: "Happy Clients", value: "10,000+", desc: "Individuals & corporate enterprises", icon: "Users" },
  { label: "Words Translated", value: "25M+", desc: "Accurate sworn & technical translations", icon: "FileCheck" },
  { label: "Client Satisfaction", value: "99.8%", desc: "Accepted by UAE courts & ministries", icon: "Award" }
];

export const heroSlides = [
  {
    id: "translation",
    tagline: "Your Trusted Partner for Accurate Language Solutions",
    title: "Professional Translation Services in Dubai",
    description: "Expert translation, attestation, and documentation services for individuals and businesses across the UAE.",
    image: "/images/hero/slide1-translation.jpg",
    badge: "MOJ Certified Sworn Translators",
    primaryCta: { label: "Get Started", path: "/contact" },
    secondaryCta: { label: "Explore Services", path: "/services/translation" }
  },
  {
    id: "attestation",
    tagline: "Quick & Reliable Document Legalization",
    title: "Certified Document Attestation Services",
    description: "Professional MOFA attestation, embassy services, and document legalization for all your business and personal needs in the UAE.",
    image: "/images/hero/slide2-attestation.jpg",
    badge: "100% MOFA & Embassy Accepted",
    primaryCta: { label: "Learn More", path: "/services/attestation" },
    secondaryCta: { label: "Get Attestation Quote", path: "/contact" }
  },
  {
    id: "notarization",
    tagline: "Your Complete Legal Solutions Partner",
    title: "Legal Notarization & Business Setup",
    description: "From Power of Attorney to company formation, we provide comprehensive legal documentation and business setup services in Dubai.",
    image: "/images/hero/slide3-business-setup.jpg",
    badge: "Dubai Courts & Notary Certified",
    primaryCta: { label: "Get Quote", path: "/services/notarization" },
    secondaryCta: { label: "Business Setup Guide", path: "/services/business-setup" }
  },
  {
    id: "clients",
    tagline: "Excellence in Every Translation",
    title: "Trusted by Thousands of Clients",
    description: "Professional translation services serving individuals and businesses with accurate, certified translations in 50+ languages.",
    image: "/images/hero/slide4-clients.jpg",
    badge: "50+ Global Languages • 99.8% Satisfaction",
    primaryCta: { label: "Contact Us", path: "/contact" },
    secondaryCta: { label: "WhatsApp Specialist", path: "https://wa.me/971522402909", isExternal: true }
  }
];

export const serviceCategoriesNavigation = [
  {
    name: "Translation",
    path: "/services/translation",
    category: "translation",
    badge: "MOJ Sworn",
    description: "Official, certified, and sworn legal translations in Dubai accepted by UAE courts, ministries, and foreign embassies.",
    items: [
      { name: "Affordable Normal Translation Services in Dubai", path: "/services/translation/normal-translation", shortName: "Normal Translation" },
      { name: "Smart Word Translation", path: "/services/translation/financial-and-business-translation", shortName: "Financial & Business Translation" },
      { name: "Best Dubai Medical Translation Online", path: "/services/translation/medical-translation", shortName: "Medical Translation" },
      { name: "Best Legal Translation Services in Dubai", path: "/services/translation/legal-translation", shortName: "Legal Translation" },
      { name: "Best Power of Attorney Translation Services in Dubai - Smart Word", path: "/services/translation/poa-translation", shortName: "POA Translation" },
      { name: "Best Trademark Registration and Brand Protection", path: "/services/translation/trademark-registration", shortName: "Trademark Registration & Translation" },
      { name: "Certified Official Sworn Legal Translation Services in Dubai", path: "/services/translation/sworn-translation", shortName: "Sworn Legal Translation" },
      { name: "Expert Educational Certificate Attestation in UAE", path: "/services/translation/educational-certificates-attestation", shortName: "Educational Certificate Translation" },
      { name: "Expert Marketing Translation Services in Dubai", path: "/services/translation/commercial-and-marketing-translation", shortName: "Marketing & Commercial Translation" },
      { name: "Expert Multilingual Subtitling Services in Dubai", path: "/services/translation/subtitling-services", shortName: "Multilingual Subtitling" },
      { name: "Expert Technical Translation Services in Dubai", path: "/services/translation/technical-translation", shortName: "Technical Translation" },
      { name: "Multilingual Translation Services for Business in Dubai", path: "/services/translation/multilingual-transcription-services", shortName: "Multilingual Transcription" },
      { name: "Professional Academic Translation Services in Dubai", path: "/services/translation/educational-academic-translation", shortName: "Academic Translation" },
      { name: "Professional Legal Video and Voice Translation Services", path: "/services/translation/video-translation-voice-translation", shortName: "Video & Voice Translation" },
      { name: "Professional Scientific Translation Services in UAE", path: "/services/translation/scientific-translation", shortName: "Scientific Translation" },
      { name: "Top Certified Translation Company in Dubai", path: "/services/translation/certified-translation", shortName: "Certified Translation" },
      { name: "Top Digital Content Translation Services in Dubai", path: "/services/translation/website-and-digital-content-translation", shortName: "Digital Content Translation" },
      { name: "Top Software Localization and Translation Services in Dubai", path: "/services/translation/software-localization", shortName: "Software Localization" },
      { name: "Website Localization Services in Dubai", path: "/services/translation/website-localization", shortName: "Website Localization" }
    ]
  },
  {
    name: "Attestation",
    path: "/services/attestation",
    category: "attestation",
    badge: "100% MOFA Accepted",
    description: "End-to-end legalization and attestation from MOFA, UAE Embassies, MOJ, KHDA, and Home Country Embassies.",
    items: [
      { name: "Easy Registered Notary Attestation Services in UAE", path: "/services/attestation/notary-attestation", shortName: "Notary Attestation" },
      { name: "Equivalency Attestation MOE and Transcript Support UAE", path: "/services/attestation/equivalency-attestation-services", shortName: "MOE Equivalency Attestation" },
      { name: "Expert KHDA Attestation Services in Dubai UAE", path: "/services/attestation/khda-attestation", shortName: "KHDA Attestation Services" },
      { name: "Expert Marriage Certificate Attestation in Dubai UAE", path: "/services/attestation/marriage-certificate-attestation", shortName: "Marriage Certificate Attestation" },
      { name: "Fastest MOFA Attestation for Documents in Dubai UAE", path: "/services/attestation/mofa-attestation", shortName: "MOFA Attestation Dubai" },
      { name: "MOFA and Embassy Salary Certificate Attestation Dubai", path: "/services/attestation/salary-certificate-attestation", shortName: "Salary Certificate Attestation" },
      { name: "Quick Expert MOJ Attestation Services in Dubai UAE", path: "/services/attestation/moj-attestation", shortName: "MOJ Attestation Services" },
      { name: "Quick Home Country Embassy Document Attestation UAE", path: "/services/attestation/home-country-attestation", shortName: "Home Country Embassy Attestation" },
      { name: "Quick licensed True Copy Attestation in Dubai UAE", path: "/services/attestation/true-copy-attestation", shortName: "Licensed True Copy Attestation" },
      { name: "Top Birth Certificate Attestation in Dubai UAE", path: "/services/attestation/birth-certificate-attestation", shortName: "Birth Certificate Attestation" },
      { name: "Top Official Death Certificate Attestation in UAE", path: "/services/attestation/death-certificate-attestation", shortName: "Death Certificate Attestation" },
      { name: "UAE Embassy Attestation Services MOFA and Document in Dubai", path: "/services/attestation/uae-embassy-consulate-attestation", shortName: "UAE Embassy & Consulate Attestation" }
    ]
  },
  {
    name: "Notarization",
    path: "/services/notarization",
    category: "notarization",
    badge: "Dubai Courts Approved",
    description: "Bilingual drafting and notarization for POA, MOA, Board Resolutions, and legal declarations across Dubai Courts.",
    items: [
      { name: "Minutes of Meeting UAE", path: "/services/notarization/minutes-of-meeting", shortName: "Minutes of Meeting UAE" },
      { name: "Affidavit & Certified Arabic Translation Services in Dubai, UAE", path: "/services/notarization/affidavit-declaration", shortName: "Affidavit & Declaration" },
      { name: "Board Resolution & Notarization Services in UAE", path: "/services/notarization/board-resolution", shortName: "Board Resolution Notarization" },
      { name: "Company Liquidation Resolution in UAE", path: "/services/notarization/company-liquidation-resolution", shortName: "Company Liquidation Resolution" },
      { name: "Husband Sponsorship NOC in UAE", path: "/services/notarization/husband-sponsorship-noc", shortName: "Husband Sponsorship NOC" },
      { name: "Local Service Agent Agreement UAE", path: "/services/notarization/local-service-agent-agreement", shortName: "Local Service Agent Agreement" },
      { name: "Memorandum of Association (MOA) Drafting & Notarization in UAE", path: "/services/notarization/memorandum-of-association-moa", shortName: "Memorandum of Association (MOA)" },
      { name: "MOA Amendment & Company Structure Change", path: "/services/notarization/amendment-to-the-moa", shortName: "MOA Amendment & Modification" },
      { name: "No Objection Certificate (NOC) Services in UAE", path: "/services/notarization/no-objection-certificates-noc", shortName: "No Objection Certificate (NOC)" },
      { name: "Notary & Translation Services in Dubai", path: "/services/notarization/acknowledgment-declaration", shortName: "Acknowledgment & Declaration" },
      { name: "POA Revocation & Cancellation in Dubai", path: "/services/notarization/declaration-of-cancelling", shortName: "POA Revocation & Cancellation" },
      { name: "Power of Attorney Notary Services in Dubai", path: "/services/notarization/power-of-attorney-poa", shortName: "Power of Attorney (POA)" },
      { name: "Will & Testament Services Dubai", path: "/services/notarization/will-testament-services", shortName: "Will & Testament Services" }
    ]
  },
  {
    name: "Drafting",
    path: "/services/drafting",
    category: "drafting",
    badge: "UAE Law Compliant",
    description: "Flawless legal agreement drafting conforming strictly to UAE Federal Commercial and Civil Laws.",
    items: [
      { name: "Joint Venture Agreement UAE", path: "/services/drafting/joint-venture-agreement", shortName: "Joint Venture Agreement" },
      { name: "Legal Notice Drafting Dubai", path: "/services/drafting/legal-notice", shortName: "Legal Notice Drafting" },
      { name: "Loan Agreement Drafting & Legalization UAE", path: "/services/drafting/loan-agreement-drafting-legalization", shortName: "Loan Agreement Drafting" },
      { name: "Partnership Agreement UAE", path: "/services/drafting/partnership-agreement", shortName: "Partnership Agreement" },
      { name: "Rental Agreement & Tenancy Contract Services in Dubai, UAE", path: "/services/drafting/rental-agreement-services", shortName: "Rental Agreement & Tenancy Contract" }
    ]
  },
  {
    name: "Business Setup",
    path: "/services/business-setup",
    category: "business-setup",
    badge: "Mainland & Freezone",
    description: "Complete incorporation support for Mainland, Freezone, and Offshore entities across Dubai and all Emirates.",
    items: [
      { name: "Freezone Business Setup", path: "/services/business-setup/freezone-business-setup", shortName: "Freezone Business Setup" },
      { name: "Mainland Business Setup", path: "/services/business-setup/mainland-business-setup", shortName: "Mainland Business Setup" },
      { name: "Offshore Business Setup", path: "/services/business-setup/offshore-business-setup", shortName: "Offshore Business Setup" },
      { name: "Open Company Bank Account", path: "/services/business-setup/open-company-bank-account", shortName: "Open Company Bank Account" }
    ]
  },
  {
    name: "Emirati Pension",
    path: "/services/emirati-pension",
    category: "emirati-pension",
    badge: "GPSSA Authority",
    description: "Expert administrative compliance for General Pension and Social Security Authority (GPSSA) filings.",
    items: [
      { name: "GPSSA Employer Registration Cancellation UAE", path: "/services/emirati-pension/cancel-employer-registration", shortName: "GPSSA Employer Cancellation" },
      { name: "GPSSA Employer Registration UAE", path: "/services/emirati-pension/employer-registration-with-gpssa", shortName: "GPSSA Employer Registration" },
      { name: "Legacy Contribution Proforma Services UAE", path: "/services/emirati-pension/legacy-contribution-proforma-creation", shortName: "Legacy Contribution Proforma" },
      { name: "Monthly Contribution Proforma UAE", path: "/services/emirati-pension/monthly-contribution-proforma-creation", shortName: "Monthly Contribution Proforma" },
      { name: "Register New Emirati Employees with GPSSA", path: "/services/emirati-pension/registration-of-new-emirati-employees", shortName: "Register New Emirati Employees" },
      { name: "Request Pension Certificate Online", path: "/services/emirati-pension/request-for-pension-certificate", shortName: "Request Pension Certificate Online" },
      { name: "Top Pension Services in Dubai", path: "/services/emirati-pension/pension-end-of-service-application", shortName: "Pension End of Service Application" },
      { name: "Update Employee Data & Employment Status", path: "/services/emirati-pension/update-of-employee-data-employment-status", shortName: "Update Employee Data & Status" }
    ]
  }
];

export const serviceOfferingCards = [
  {
    title: "Certified Legal Translation",
    tagline: "MOJ Sworn Legal Translators",
    description: "Word-for-word official legal translations certified by UAE Ministry of Justice, accepted by Dubai Courts, Ministries, and foreign embassies.",
    path: "/services/translation",
    badge: "Official MOJ",
    delivery: "Same-Day Express Available",
    category: "translation"
  },
  {
    title: "Document Attestation & MOFA",
    tagline: "100% MOFA & Embassy Accepted",
    description: "End-to-end legalization from UAE Ministry of Foreign Affairs (MOFA), foreign embassies, KHDA, MOE, and Dubai Courts notary.",
    path: "/services/attestation",
    badge: "100% Verified",
    delivery: "Full Government Stamping",
    category: "attestation"
  },
  {
    title: "Dubai Courts Notarization",
    tagline: "Dubai Courts & Notary Certified",
    description: "Bilingual legal drafting and official notarization for Power of Attorney (POA), MOA, Board Resolutions, and legal declarations.",
    path: "/services/notarization",
    badge: "Courts Approved",
    delivery: "Digital & In-Person Notary",
    category: "notarization"
  }
];

export const businessOfferings = [
  {
    title: "Business Setup & Company Formation",
    description: "Mainland, Freezone & Offshore licensing, company bank accounts, and local service agent agreements in Dubai.",
    path: "/services/business-setup",
    icon: "Building2"
  },
  {
    title: "Commercial & Legal Agreement Drafting",
    description: "Flawless legal agreement drafting conforming strictly to UAE Federal Commercial and Civil Laws.",
    path: "/services/drafting",
    icon: "ScrollText"
  },
  {
    title: "Emirati Pension (GPSSA) Compliance",
    description: "Employer registration, national employee enrollment, contribution proforma generation, and end-of-service filings.",
    path: "/services/emirati-pension",
    icon: "Landmark"
  }
];

export const solutionsMenuData = {
  documents: {
    name: "Documents",
    tabLabel: "By document",
    heading: "Commonly Translated & Legalized Documents",
    seeAllText: "See all documents",
    seeAllPath: "/services",
    items: [
      { name: "Academic Transcripts", path: "/services/translation/educational-academic-translation", icon: "GraduationCap" },
      { name: "Affidavit & Declarations", path: "/services/notarization/affidavit-declaration", icon: "FileSignature" },
      { name: "Apostille & Legalization", path: "/services/attestation/mofa-attestation", icon: "Award" },
      { name: "Bank Statements", path: "/services/translation/financial-and-business-translation", icon: "CreditCard" },
      { name: "Birth Certificate", path: "/services/attestation/birth-certificate-attestation", icon: "Baby" },
      { name: "Commercial Contracts", path: "/services/translation/legal-translation", icon: "Scale" },
      { name: "Death Certificate", path: "/services/attestation/death-certificate-attestation", icon: "FileText" },
      { name: "Diploma & Degree", path: "/services/translation/educational-certificates-attestation", icon: "GraduationCap" },
      { name: "Divorce Documents", path: "/services/translation/legal-translation", icon: "FileText" },
      { name: "Driver's License", path: "/services/translation/normal-translation", icon: "FileText" },
      { name: "Marriage Certificate", path: "/services/attestation/marriage-certificate-attestation", icon: "Heart" },
      { name: "Medical Records", path: "/services/translation/medical-translation", icon: "Stethoscope" },
      { name: "MOA & Articles of Association", path: "/services/notarization/memorandum-of-association-moa", icon: "FileSpreadsheet" },
      { name: "Passport & Emirates ID", path: "/services/translation/normal-translation", icon: "FileText" },
      { name: "Power of Attorney (POA)", path: "/services/notarization/power-of-attorney-poa", icon: "ScrollText" },
      { name: "Salary Certificate", path: "/services/attestation/salary-certificate-attestation", icon: "CreditCard" },
      { name: "Tax Returns & Audits", path: "/services/translation/financial-and-business-translation", icon: "CreditCard" },
      { name: "Tenancy Contracts (Ejari)", path: "/services/drafting/rental-agreement-services", icon: "Home" }
    ]
  },
  useCases: {
    name: "Use Cases",
    tabLabel: "By use case",
    heading: "Popular Documentation & Translation Use Cases",
    seeAllText: "See all use cases",
    seeAllPath: "/services",
    items: [
      { name: "Dubai Courts & Ministry Filings", path: "/services/translation/legal-translation", icon: "Scale" },
      { name: "UAE Residency & Visa Applications", path: "/services/attestation/mofa-attestation", icon: "ShieldCheck" },
      { name: "Corporate Business Formation", path: "/services/business-setup/mainland-business-setup", icon: "Building2" },
      { name: "Foreign Embassy Legalization", path: "/services/attestation/uae-embassy-consulate-attestation", icon: "Landmark" },
      { name: "University & KHDA Equivalency", path: "/services/attestation/equivalency-attestation-services", icon: "GraduationCap" },
      { name: "Legal Proceedings & Arbitrations", path: "/services/translation/sworn-translation", icon: "Scale" },
      { name: "DHA / MOH Medical Licensing", path: "/services/translation/medical-translation", icon: "Stethoscope" },
      { name: "Family & Spouse Sponsorship NOC", path: "/services/notarization/husband-sponsorship-noc", icon: "Heart" },
      { name: "Real Estate & Tenancy Deals", path: "/services/drafting/rental-agreement-services", icon: "Home" },
      { name: "Company Bank Account Opening", path: "/services/business-setup/open-company-bank-account", icon: "CreditCard" },
      { name: "Trademark Registration in UAE", path: "/services/translation/trademark-registration", icon: "Award" },
      { name: "GPSSA Pension Authority Compliance", path: "/services/emirati-pension/employer-registration-with-gpssa", icon: "ShieldCheck" }
    ]
  },
  industries: {
    name: "Industries",
    tabLabel: "By industry",
    heading: "Industry-Specific Documentation Services",
    seeAllText: "See all industries",
    seeAllPath: "/services",
    items: [
      { name: "Legal & Law Firms", path: "/services/translation/legal-translation", icon: "Scale" },
      { name: "Corporate & Enterprise", path: "/services/business-setup/freezone-business-setup", icon: "Building2" },
      { name: "Healthcare & Hospitals", path: "/services/translation/medical-translation", icon: "Stethoscope" },
      { name: "Government & Consulates", path: "/services/attestation/mofa-attestation", icon: "Landmark" },
      { name: "Immigration & Relocation", path: "/services/attestation/home-country-attestation", icon: "Globe" },
      { name: "Banking & Financial Services", path: "/services/translation/financial-and-business-translation", icon: "CreditCard" },
      { name: "Real Estate & Construction", path: "/services/drafting/rental-agreement-services", icon: "Home" },
      { name: "Education & Universities", path: "/services/translation/educational-academic-translation", icon: "GraduationCap" },
      { name: "Technology & Software", path: "/services/translation/software-localization", icon: "Code2" },
      { name: "Media & Advertising", path: "/services/translation/commercial-and-marketing-translation", icon: "Video" },
      { name: "Retail & E-commerce", path: "/services/translation/website-localization", icon: "Globe" },
      { name: "Energy & Manufacturing", path: "/services/translation/technical-translation", icon: "FlaskConical" }
    ]
  },
  languages: {
    name: "Languages",
    tabLabel: "By language",
    heading: "Certified Legal Translation in 50+ Languages",
    seeAllText: "See all languages",
    seeAllPath: "/services/translation",
    items: [
      { name: "Arabic Translation (MOJ)", path: "/services/translation/sworn-translation", code: "AR", flag: "🇦🇪" },
      { name: "English Translation", path: "/services/translation/certified-translation", code: "EN", flag: "🇬🇧" },
      { name: "French Translation", path: "/services/translation/certified-translation", code: "FR", flag: "🇫🇷" },
      { name: "German Translation", path: "/services/translation/certified-translation", code: "DE", flag: "🇩🇪" },
      { name: "Russian Translation", path: "/services/translation/certified-translation", code: "RU", flag: "🇷🇺" },
      { name: "Chinese Translation", path: "/services/translation/certified-translation", code: "ZH", flag: "🇨🇳" },
      { name: "Spanish Translation", path: "/services/translation/certified-translation", code: "ES", flag: "🇪🇸" },
      { name: "Italian Translation", path: "/services/translation/certified-translation", code: "IT", flag: "🇮🇹" },
      { name: "Farsi / Persian Translation", path: "/services/translation/certified-translation", code: "FA", flag: "🇮🇷" },
      { name: "Hindi Translation", path: "/services/translation/certified-translation", code: "HI", flag: "🇮🇳" },
      { name: "Urdu Translation", path: "/services/translation/certified-translation", code: "UR", flag: "🇵🇰" },
      { name: "Turkish Translation", path: "/services/translation/certified-translation", code: "TR", flag: "🇹🇷" },
      { name: "Portuguese Translation", path: "/services/translation/certified-translation", code: "PT", flag: "🇧🇷" },
      { name: "Japanese Translation", path: "/services/translation/certified-translation", code: "JA", flag: "🇯🇵" },
      { name: "Korean Translation", path: "/services/translation/certified-translation", code: "KO", flag: "🇰🇷" },
      { name: "Polish Translation", path: "/services/translation/certified-translation", code: "PL", flag: "🇵🇱" },
      { name: "Dutch Translation", path: "/services/translation/certified-translation", code: "NL", flag: "🇳🇱" },
      { name: "Tagalog / Filipino Translation", path: "/services/translation/certified-translation", code: "TL", flag: "🇵🇭" }
    ]
  },
  services: {
    name: "Services",
    tabLabel: "By service",
    heading: "Explore Smart Word UAE Service Domains",
    seeAllText: "See all services",
    seeAllPath: "/services",
    items: [
      { name: "Legal Translation (MOJ Sworn)", path: "/services/translation", icon: "Scale" },
      { name: "Document Attestation & MOFA", path: "/services/attestation", icon: "Award" },
      { name: "Dubai Courts Notarization & POA", path: "/services/notarization", icon: "FileCheck2" },
      { name: "Legal Agreement Drafting", path: "/services/drafting", icon: "ScrollText" },
      { name: "Business Setup & Formation", path: "/services/business-setup", icon: "Building2" },
      { name: "Emirati Pension (GPSSA)", path: "/services/emirati-pension", icon: "Landmark" },
      { name: "Medical Translation Online", path: "/services/translation/medical-translation", icon: "Stethoscope" },
      { name: "Power of Attorney Translation", path: "/services/translation/poa-translation", icon: "ScrollText" },
      { name: "Marriage Certificate Attestation", path: "/services/attestation/marriage-certificate-attestation", icon: "Heart" },
      { name: "Birth Certificate Attestation", path: "/services/attestation/birth-certificate-attestation", icon: "Baby" },
      { name: "Educational Certificate Attestation", path: "/services/translation/educational-certificates-attestation", icon: "GraduationCap" },
      { name: "Memorandum of Association (MOA)", path: "/services/notarization/memorandum-of-association-moa", icon: "FileSpreadsheet" },
      { name: "Board Resolution Notarization", path: "/services/notarization/board-resolution", icon: "Users" },
      { name: "Affidavit & Declarations Notary", path: "/services/notarization/affidavit-declaration", icon: "FileSignature" },
      { name: "Joint Venture Agreement Drafting", path: "/services/drafting/joint-venture-agreement", icon: "Handshake" },
      { name: "Freezone Business Setup", path: "/services/business-setup/freezone-business-setup", icon: "Building" },
      { name: "Mainland Business Setup", path: "/services/business-setup/mainland-business-setup", icon: "Building2" },
      { name: "GPSSA Employer Registration", path: "/services/emirati-pension/employer-registration-with-gpssa", icon: "ShieldCheck" }
    ]
  }
};

export const navigationMenuData = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Services",
    path: "/services",
    hasDropdown: true,
    dropdownType: "services",
    categories: serviceCategoriesNavigation
  },
  {
    name: "Solutions",
    path: "/services",
    hasDropdown: true,
    dropdownType: "solutions"
  },
  {
    name: "About Us",
    path: "/about"
  },
  {
    name: "Contact Us",
    path: "/contact"
  }
];

export const mainNavigation = navigationMenuData;

export const footerLinks = {
  company: [
    { name: "About Smart Word", path: "/about" },
    { name: "Our Services Directory", path: "/services" },
    { name: "Contact & Dubai Office", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms" }
  ],
  translation: [
    { name: "Legal Translation in Dubai", path: "/services/translation/legal-translation" },
    { name: "Certified Translation Company", path: "/services/translation/certified-translation" },
    { name: "Sworn Legal Translation", path: "/services/translation/sworn-translation" },
    { name: "Medical Translation Online", path: "/services/translation/medical-translation" },
    { name: "Power of Attorney Translation", path: "/services/translation/poa-translation" },
    { name: "Technical Translation Services", path: "/services/translation/technical-translation" },
    { name: "Financial & Business Translation", path: "/services/translation/financial-and-business-translation" },
    { name: "Website & Digital Localization", path: "/services/translation/website-localization" }
  ],
  attestation: [
    { name: "MOFA Attestation Dubai", path: "/services/attestation/mofa-attestation" },
    { name: "Marriage Certificate Attestation", path: "/services/attestation/marriage-certificate-attestation" },
    { name: "Birth Certificate Attestation", path: "/services/attestation/birth-certificate-attestation" },
    { name: "Degree & Educational Attestation", path: "/services/translation/educational-certificates-attestation" },
    { name: "MOE Equivalency Attestation", path: "/services/attestation/equivalency-attestation-services" },
    { name: "KHDA Attestation Services", path: "/services/attestation/khda-attestation" },
    { name: "Embassy & Consulate Attestation", path: "/services/attestation/uae-embassy-consulate-attestation" },
    { name: "Licensed True Copy Attestation", path: "/services/attestation/true-copy-attestation" }
  ],
  notarization: [
    { name: "Power of Attorney (POA) Notary", path: "/services/notarization/power-of-attorney-poa" },
    { name: "Memorandum of Association (MOA)", path: "/services/notarization/memorandum-of-association-moa" },
    { name: "MOA Amendment & Share Transfer", path: "/services/notarization/amendment-to-the-moa" },
    { name: "Board Resolution Notarization", path: "/services/notarization/board-resolution" },
    { name: "Will & Testament Services", path: "/services/notarization/will-and-testament" },
    { name: "No Objection Certificate (NOC)", path: "/services/notarization/no-objection-certificates-noc" },
    { name: "POA Revocation & Cancellation", path: "/services/notarization/declaration-of-cancelling" },
    { name: "Company Liquidation Resolution", path: "/services/notarization/company-liquidation-resolution" }
  ],
  corporate: [
    { name: "Freezone Business Setup", path: "/services/business-setup/freezone-business-setup" },
    { name: "Mainland Business Setup", path: "/services/business-setup/mainland-business-setup" },
    { name: "Corporate Bank Account Opening", path: "/services/business-setup/open-company-bank-account" },
    { name: "Joint Venture Agreement Drafting", path: "/services/drafting/joint-venture-agreement" },
    { name: "Legal Notice Drafting Dubai", path: "/services/drafting/legal-notice" },
    { name: "Tenancy & Rental Agreement", path: "/services/drafting/rental-agreement-services" },
    { name: "GPSSA Employer Registration", path: "/services/emirati-pension/employer-registration-with-gpssa" },
    { name: "Monthly Pension Proforma", path: "/services/emirati-pension/monthly-contribution-proforma-creation" }
  ]
};

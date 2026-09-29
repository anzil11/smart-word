// Smart Word UAE - Centralized Comprehensive Services Catalog
// Covering all 6 primary categories and all official Smart Word services

export const serviceCategories = [
  {
    id: "translation",
    slug: "translation",
    name: "Translation",
    heroTitle: "Professional Translation Services in Dubai",
    heroSubtitle: "Accurate, certified, and sworn translations accepted by UAE courts, ministries, embassies, and global organizations.",
    description: "Smart Word delivers certified multilingual translations for legal, medical, academic, business, and technical documents in Dubai and across the UAE.",
    icon: "Languages",
    accentColor: "from-blue-600 to-indigo-700",
    badge: "Official & Certified"
  },
  {
    id: "attestation",
    slug: "attestation",
    name: "Attestation",
    heroTitle: "Document Attestation Services in the UAE",
    heroSubtitle: "End-to-end legalization and attestation from MOFA, UAE Embassies, MOJ, KHDA, and Home Country Embassies.",
    description: "Reliable certificate and document attestation for personal, educational, and commercial papers required for UAE residency, employment, and business operations.",
    icon: "Award",
    accentColor: "from-amber-600 to-orange-700",
    badge: "100% MOFA Accepted"
  },
  {
    id: "notarization",
    slug: "notarization",
    name: "Notarization",
    heroTitle: "Notarization & Legal Documentation Services",
    heroSubtitle: "Seamless drafting, Arabic legal translation, and official notary public processing across Dubai Courts.",
    description: "Expert assistance with Power of Attorney (POA), MOA, Board Resolutions, Affidavits, NOCs, and formal company resolutions.",
    icon: "FileCheck2",
    accentColor: "from-emerald-600 to-teal-700",
    badge: "Dubai Courts & Notary"
  },
  {
    id: "drafting",
    slug: "drafting",
    name: "Drafting",
    heroTitle: "Legal & Commercial Drafting Services in Dubai",
    heroSubtitle: "Flawless legal agreement drafting conforming strictly to the UAE Federal Commercial and Civil Laws.",
    description: "Bespoke legal drafting for Joint Venture Agreements, Legal Notices, Loan Agreements, Partnership Deeds, and Tenancy Contracts.",
    icon: "ScrollText",
    accentColor: "from-purple-600 to-indigo-800",
    badge: "UAE Law Compliant"
  },
  {
    id: "business-setup",
    slug: "business-setup",
    name: "Business Setup",
    heroTitle: "UAE Company Formation & Corporate Services",
    heroSubtitle: "Complete incorporation support for Mainland, Freezone, and Offshore entities across Dubai and all Emirates.",
    description: "Hassle-free business setup, licensing, Local Service Agent coordination, corporate structuring, and bank account assistance.",
    icon: "Building2",
    accentColor: "from-sky-600 to-blue-800",
    badge: "Mainland & Freezone"
  },
  {
    id: "emirati-pension",
    slug: "emirati-pension",
    name: "Emirati Pension",
    heroTitle: "GPSSA Emirati Pension & Social Security Support",
    heroSubtitle: "Expert administrative compliance for General Pension and Social Security Authority (GPSSA) filings.",
    description: "Employer registration, national employee enrollment, contribution proforma generation, end-of-service applications, and data updates.",
    icon: "ShieldCheck",
    accentColor: "from-teal-600 to-emerald-800",
    badge: "GPSSA Authority Compliant"
  }
];

export const allServices = [
  // ==========================================
  // TRANSLATION SERVICES
  // ==========================================
  {
    id: "legal-translation",
    slug: "legal-translation",
    category: "translation",
    title: "Best Legal Translation Services in Dubai",
    shortTitle: "Legal Translation",
    tagline: "Ministry of Justice (MOJ) Certified Legal Translations",
    description: "Legal translation in Dubai is a critical service that ensures seamless communication across the UAE’s diverse legal and corporate environment. Our licensed legal translators produce sworn translations accepted by Dubai Courts, Ministries, Police, and government authorities.",
    overview: "Smart Word provides accurate, Ministry of Justice certified legal translation services in Dubai. Legal translation demands exact terminological precision, deep knowledge of UAE civil and commercial jurisprudence, and formal notarization. From contracts and court judgments to corporate statutes and powers of attorney, our legal translation team ensures flawless bilingual documents.",
    features: [
      "Accepted by UAE Ministry of Justice (MOJ) & Dubai Courts",
      "Sworn translators registered with the UAE government",
      "Strict legal terminology and formatting compliance",
      "Bilingual legal certified stamp and official signature",
      "Same-day expedited delivery available for urgent court filings"
    ],
    targetAudience: [
      "Law firms and legal counsels in the UAE",
      "Corporations executing cross-border commercial contracts",
      "Litigants submitting court evidence, petitions, and arbitrations",
      "Individuals submitting personal legal records to UAE authorities"
    ],
    documentsRequired: [
      "Clear original or high-resolution digital copy of the legal document",
      "Valid passport / Emirates ID copies of involved parties (for identity match)",
      "Any previous certified translations if maintaining legal precedents"
    ],
    processSteps: [
      { step: "01", title: "Document Submission", desc: "Upload or submit your legal contracts, court records, or agreements securely." },
      { step: "02", title: "Legal Review & Quote", desc: "Our legal linguists assess complexity, court jurisdiction, and provide a clear quote." },
      { step: "03", title: "Certified Legal Translation", desc: "Sworn legal translators translate, review, and stamp the document under MOJ guidelines." },
      { step: "04", title: "Official Delivery", desc: "Receive digitally signed PDFs and official hard copies with physical stamps." }
    ],
    faqs: [
      {
        q: "What makes a translation legally valid in Dubai?",
        a: "A legal translation in Dubai must be executed by a translator licensed by the UAE Ministry of Justice (MOJ), stamped with the official seal, and signed to be legally admissible in Dubai Courts, ministries, and government departments."
      },
      {
        q: "Which languages are supported for legal translation?",
        a: "We support Arabic, English, French, Russian, German, Spanish, Italian, Chinese, Hindi, Urdu, and over 50 global language pairs paired with official Arabic or English."
      },
      {
        q: "How long does legal translation take?",
        a: "Standard standard turnaround is 24 hours. We also provide urgent same-day or 3-4 hour express services depending on document volume."
      }
    ],
    relatedSlugs: ["sworn-translation", "poa-translation", "certified-translation", "moj-attestation"]
  },
  {
    id: "certified-translation",
    slug: "certified-translation",
    category: "translation",
    title: "Top Certified Translation Company in Dubai",
    shortTitle: "Certified Translation",
    tagline: "Official Certified Translations for Government & Embassies",
    description: "Certified translation is essential when documents must be officially recognized by government authorities, courts, embassies, immigration departments, and academic institutions in the UAE and worldwide.",
    overview: "At Smart Word, our certified translations come with a Certificate of Accuracy, official seals, and signatures confirming that the translation is a complete and true representation of the original text. We assist clients with immigration dossiers, visa applications, academic admissions, and embassy submissions.",
    features: [
      "Official Statement / Certificate of Accuracy included",
      "Guaranteed acceptance by Embassies, Consulates, and Visa Centers",
      "Accurate transliteration of proper nouns, names, and dates",
      "Digital verification and physical stamped hard copies",
      "Strict data confidentiality and NDAs"
    ],
    targetAudience: [
      "Visa applicants and expatriates relocating to or from the UAE",
      "Students applying to UAE or overseas universities",
      "Professionals submitting licenses and background checks",
      "Multinational companies registering regional branches"
    ],
    documentsRequired: [
      "Birth, marriage, or divorce certificates",
      "Academic diplomas, degrees, and transcripts",
      "Police clearance certificates and bank statements",
      "Identification documents and driving licenses"
    ],
    processSteps: [
      { step: "01", title: "Submit Documents", desc: "Upload scans or photos of your certificates and personal credentials." },
      { step: "02", title: "Linguistic Certification", desc: "Accredited translators complete the translation and formatting." },
      { step: "03", title: "Certification Stamping", desc: "Official seal and Certificate of Accuracy are applied." },
      { step: "04", title: "Delivery", desc: "Instant high-res PDF and courier delivery anywhere in the UAE." }
    ],
    faqs: [
      {
        q: "What is the difference between certified and normal translation?",
        a: "Certified translation includes a formal declaration, translator signature, and company stamp certifying accuracy, making it legally accepted by government and immigration bodies."
      },
      {
        q: "Will this translation be accepted by foreign embassies in Dubai?",
        a: "Yes, our certified translations strictly follow the requirements set by foreign embassies, consulates, and VFS/TLS visa centers in the UAE."
      }
    ],
    relatedSlugs: ["legal-translation", "sworn-translation", "educational-certificates-attestation", "mofa-attestation"]
  },
  {
    id: "sworn-translation",
    slug: "sworn-translation",
    category: "translation",
    title: "Certified Official Sworn Legal Translation Services in Dubai",
    shortTitle: "Sworn Translation",
    tagline: "Official Sworn Translators for UAE Government & Judiciary",
    description: "Sworn translation—also known as certified or official translation—is essential when dealing with legal, governmental, and judicial institutions in the UAE.",
    overview: "Sworn translations in the UAE are completed exclusively by translators who have taken the official oath before the UAE judicial authorities. These documents carry full legal weight and evidentiary value before the Public Prosecution, Dubai Courts, Federal Courts, and Ministry of Foreign Affairs.",
    features: [
      "Executed by sworn, court-registered linguists",
      "Direct legal validity across all UAE Emirates",
      "Official seal registered with the Ministry of Justice",
      "Tamper-evident document binding and digital archiving"
    ],
    targetAudience: [
      "Parties involved in litigation and arbitration proceedings",
      "Foreign investors establishing UAE corporate partnerships",
      "Individuals registering foreign marriages, wills, or adoptions"
    ],
    documentsRequired: [
      "Original document or certified copy",
      "Proof of origin or prior foreign attestation where applicable"
    ],
    processSteps: [
      { step: "01", title: "Intake Review", desc: "Verification of document authenticity and jurisdiction requirements." },
      { step: "02", title: "Sworn Translation", desc: "Translation by a sworn linguist adhering to UAE legal terminology." },
      { step: "03", title: "Sealing & Attestation", desc: "Application of official sworn stamps and registration numbers." },
      { step: "04", title: "Dispatch", desc: "Secure dispatch to your office or residence." }
    ],
    faqs: [
      {
        q: "Is a sworn translation mandatory for Dubai Courts?",
        a: "Yes, Arabic is the official language of Dubai Courts and all legal documentation submitted in a foreign language must be accompanied by a sworn translation into Arabic."
      }
    ],
    relatedSlugs: ["legal-translation", "poa-translation", "moj-attestation"]
  },
  {
    id: "normal-translation",
    slug: "normal-translation",
    category: "translation",
    title: "Affordable Normal Translation Services in Dubai",
    shortTitle: "Standard Translation",
    tagline: "Fast, Fluent & Cost-Effective Document Translation",
    description: "Normal translation plays a vital role in facilitating everyday communication across different languages in Dubai’s multicultural business environment.",
    overview: "For non-court, non-governmental documentation such as emails, business correspondence, internal presentations, product descriptions, blogs, and marketing collateral, our standard translation service provides rapid, fluent, and economical human translation.",
    features: [
      "Natural linguistic flow and contextual accuracy",
      "Quick turnaround times (as fast as 2-4 hours)",
      "Cost-effective per-word or per-page pricing",
      "Native speaker review and proofreading"
    ],
    targetAudience: [
      "Businesses translating internal communications & manuals",
      "E-commerce brands translating product listings",
      "Individuals translating letters, resumes, and personal notes"
    ],
    documentsRequired: ["Editable files (Word, Excel, PPT) or PDF documents"],
    processSteps: [
      { step: "01", title: "Send Text", desc: "Provide your text or documents via form or email." },
      { step: "02", title: "Native Translation", desc: "A native speaker translates your content for tone and clarity." },
      { step: "03", title: "Quality Check", desc: "Proofreading for grammar, syntax, and cultural resonance." },
      { step: "04", title: "Final Delivery", desc: "Delivered in your preferred document format." }
    ],
    faqs: [
      {
        q: "Does normal translation include an official stamp?",
        a: "Normal translation is uncertified and tailored for general business, informational, or personal use. If you need court or ministry acceptance, choose our Certified or Legal Translation service."
      }
    ],
    relatedSlugs: ["financial-and-business-translation", "commercial-and-marketing-translation", "website-localization"]
  },
  {
    id: "financial-and-business-translation",
    slug: "financial-and-business-translation",
    category: "translation",
    title: "Smart Word Financial & Business Translation",
    shortTitle: "Financial Translation",
    tagline: "Precision Financial, Banking & Corporate Reporting Translation",
    description: "In Dubai's fast-paced and globally connected business environment, accurate financial and business translation services are indispensable for cross-border investments and audits.",
    overview: "We translate annual reports, balance sheets, audit statements, investor prospectuses, merger documents, and tax filings with 100% numerical and financial terminology accuracy. Our translators have dedicated backgrounds in corporate finance and accounting standards (IFRS, GAAP).",
    features: [
      "Rigorous numerical verification and cross-checking",
      "Familiarity with IFRS, UAE Corporate Tax, and VAT regulations",
      "Complete non-disclosure agreement (NDA) protection",
      "Maintained document layout, tables, and financial formatting"
    ],
    targetAudience: [
      "CFOs, Finance Directors, and Accounting Firms",
      "Investment banks, private equity firms, and asset managers",
      "Companies filing Corporate Tax and VAT returns in the UAE"
    ],
    documentsRequired: ["Audited financial reports, spreadsheets, prospectuses, or tax records"],
    processSteps: [
      { step: "01", title: "Security & NDA", desc: "Confidential intake under strict data privacy protocols." },
      { step: "02", title: "Financial Linguist", desc: "Assigned to a translator with financial and accounting credentials." },
      { step: "03", title: "Audit & QA", desc: "Numerical reconciliation against original statements." },
      { step: "04", title: "Ready for Filing", desc: "Delivered in formatted print-ready file formats." }
    ],
    faqs: [
      {
        q: "How do you guarantee accuracy with complex numbers and tables?",
        a: "Our specialized financial translators use side-by-side verification and dual QA to ensure every number, currency symbol, footnote, and accounting classification matches the source precisely."
      }
    ],
    relatedSlugs: ["legal-translation", "commercial-and-marketing-translation", "technical-translation"]
  },
  {
    id: "medical-translation",
    slug: "medical-translation",
    category: "translation",
    title: "Best Dubai Medical Translation Online",
    shortTitle: "Medical Translation",
    tagline: "Certified Translations for Healthcare, Clinical & Patient Records",
    description: "Medical translation in Dubai plays a critical role in ensuring effective communication between healthcare providers, insurance companies, and patients from diverse linguistic backgrounds.",
    overview: "Smart Word provides accurate medical translations adhering to international healthcare standards. We translate clinical trials, medical reports, patient histories, pharmaceutical inserts, and hospital discharge summaries, facilitating regulatory approvals from the UAE Ministry of Health and Prevention (MOHAP) and Dubai Health Authority (DHA).",
    features: [
      "Translators with medical, clinical, or pharmacological degrees",
      "Compliant with DHA, MOHAP, and international health protocols",
      "Strict HIPAA and patient privacy compliance",
      "Accepted by insurance companies for overseas claims"
    ],
    targetAudience: [
      "Hospitals, clinics, and diagnostic laboratories in the UAE",
      "Patients seeking medical treatment abroad or in the UAE",
      "Pharmaceutical companies registering drugs and medical devices"
    ],
    documentsRequired: ["Medical reports, discharge summaries, prescriptions, or clinical files"],
    processSteps: [
      { step: "01", title: "Confidential Upload", desc: "Secure encrypted transmission of sensitive patient files." },
      { step: "02", title: "Medical Specialist Review", desc: "Translation by a medically trained linguist." },
      { step: "03", title: "Terminology Check", desc: "Verification of pharmaceutical names, dosages, and diagnoses." },
      { step: "04", title: "Certified Delivery", desc: "Final stamped medical translation for insurance or DHA submission." }
    ],
    faqs: [
      {
        q: "Are your medical translations accepted by UAE health authorities and insurers?",
        a: "Yes, our certified medical translations are recognized by DHA, MOHAP, local hospitals, and health insurance providers across the UAE."
      }
    ],
    relatedSlugs: ["scientific-translation", "certified-translation", "sworn-translation"]
  },
  {
    id: "poa-translation",
    slug: "poa-translation",
    category: "translation",
    title: "Best Power of Attorney Translation Services in Dubai",
    shortTitle: "Power of Attorney Translation",
    tagline: "Court-Certified POA Arabic & English Translation",
    description: "In Dubai, a Power of Attorney (POA) is a critical legal document that authorizes someone to act on your behalf in personal, property, or business matters.",
    overview: "To execute or notarize a foreign Power of Attorney in the UAE, or to utilize a UAE POA in another country, official sworn translation between Arabic and the foreign language is legally mandatory. We ensure accurate legal terminology so your POA is accepted immediately by the Dubai Courts Notary Public, Land Department (DLD), and banks.",
    features: [
      "Exact legal clauses for property sale, company management, or vehicle transfer",
      "Direct compliance with Dubai Courts Notary guidelines",
      "Fast turnaround for urgent real estate and banking transactions",
      "MOJ certified stamp and legal registration"
    ],
    targetAudience: [
      "Property buyers and sellers represented by agents in Dubai",
      "Business partners delegating managerial authority",
      "Expatriates appointing legal representatives in their home country"
    ],
    documentsRequired: ["Copy of the draft or signed Power of Attorney", "Passport / Emirates ID of Principal and Agent"],
    processSteps: [
      { step: "01", title: "Submit POA", desc: "Provide your POA draft or attested document." },
      { step: "02", title: "Legal Clauses Check", desc: "Legal linguist verifies all delegation powers and legal terms." },
      { step: "03", title: "Sworn Translation", desc: "Official translation in standard Dubai Courts bilingual format." },
      { step: "04", title: "Ready for Notary", desc: "Ready for immediate notarization or online court submission." }
    ],
    faqs: [
      {
        q: "Can you assist with both POA translation and notarization in Dubai?",
        a: "Yes! We provide end-to-end services, from drafting the POA in Arabic/English to translation and notarization at the Dubai Courts Notary Public."
      }
    ],
    relatedSlugs: ["power-of-attorney-poa", "legal-translation", "notary-attestation"]
  },
  {
    id: "trademark-registration",
    slug: "trademark-registration",
    category: "translation",
    title: "Best Trademark Registration and Brand Protection",
    shortTitle: "Trademark & Brand Protection",
    tagline: "IP Translation & Brand Protection Services in the UAE",
    description: "Trademark registration is a vital step in protecting your brand identity, products, and intellectual property in the United Arab Emirates.",
    overview: "Smart Word assists brand owners, IP attorneys, and corporations with the translation and preparation of trademark applications, patent filings, and brand protection documents required by the UAE Ministry of Economy (MOE).",
    features: [
      "Specialized IP and patent terminology",
      "Arabic brand transliteration and classification matching (Nice Classification)",
      "Preparation of trademark gazette publications",
      "Comprehensive IP protection documentation support"
    ],
    targetAudience: [
      "Global brands launching in the UAE and Middle East",
      "E-commerce startups protecting logos and slogans",
      "IP law firms and patent agents"
    ],
    documentsRequired: ["Trademark logo image, list of goods/services, power of attorney"],
    processSteps: [
      { step: "01", title: "IP Document Review", desc: "Examine trademark descriptions and goods/services classes." },
      { step: "02", title: "Arabic Transliteration", desc: "Ensure precise phonetics and legal protection in Arabic script." },
      { step: "03", title: "Ministry Formatting", desc: "Format according to UAE Ministry of Economy guidelines." },
      { step: "04", title: "Filing Support", desc: "Provide certified translations for official trademark filing." }
    ],
    faqs: [
      {
        q: "Why is Arabic translation required for UAE trademark filings?",
        a: "The UAE Ministry of Economy requires all trademark applications, descriptions of goods/services, and brand names to have official Arabic translations for gazette publication and legal registration."
      }
    ],
    relatedSlugs: ["legal-translation", "commercial-and-marketing-translation", "technical-translation"]
  },
  {
    id: "educational-certificates-attestation",
    slug: "educational-certificates-attestation",
    category: "translation",
    title: "Expert Educational Certificate Attestation in UAE",
    shortTitle: "Educational Certificate Translation",
    tagline: "Certified Academic Translation for UAE Equivalency & Visas",
    description: "Educational certificate attestation and translation is a critical process for verifying the authenticity of academic documents issued outside or inside the UAE for employment and higher education.",
    overview: "Whether you need a degree, diploma, transcript, or school leaving certificate translated into Arabic or English for the UAE Ministry of Education (MOE), MOHRE employment visa, or KHDA approval, Smart Word delivers certified translations with guaranteed acceptance.",
    features: [
      "Accepted by MOHRE, MOE, and Dubai Immigration (GDRFA)",
      "Precise academic grading and course title translations",
      "Complete package with MOFA attestation assistance",
      "Expedited turnaround for urgent employment visa processing"
    ],
    targetAudience: [
      "Expatriates relocating to Dubai for corporate jobs",
      "Doctors, engineers, and teachers undergoing professional licensing",
      "Students enrolling in UAE universities"
    ],
    documentsRequired: ["University degree, diploma, mark sheet, or transcript"],
    processSteps: [
      { step: "01", title: "Upload Certificate", desc: "Submit clear scans of your degree or diploma front and back." },
      { step: "02", title: "Academic Translation", desc: "Certified translation following UAE Ministry of Education terminology." },
      { step: "03", title: "Official Certification", desc: "Certified stamp and statement of accuracy attached." },
      { step: "04", title: "Attestation Ready", desc: "Ready for MOFA or Equivalency submission." }
    ],
    faqs: [
      {
        q: "Do I translate my degree before or after MOFA attestation?",
        a: "Typically, the document is attested by the home country embassy and UAE MOFA first, and then translated into Arabic with official certified stamps. Smart Word handles both steps seamlessly."
      }
    ],
    relatedSlugs: ["equivalency-attestation-services", "khda-attestation", "mofa-attestation", "certified-translation"]
  },
  {
    id: "commercial-and-marketing-translation",
    slug: "commercial-and-marketing-translation",
    category: "translation",
    title: "Expert Marketing Translation Services in Dubai",
    shortTitle: "Marketing & Commercial Translation",
    tagline: "Creative Transcreation & Culturally Resonant Copy in Arabic & 50+ Languages",
    description: "In a global hub like Dubai, where diverse cultures and languages intersect, commercial and marketing translation plays a pivotal role in connecting brands with their target audiences.",
    overview: "Standard translation isn't enough for advertising campaigns, slogans, brochures, and brand storytelling. Our marketing transcreation team adapts your message culturally and persuasively so it resonates powerfully with GCC Arab consumers while preserving your brand's unique identity.",
    features: [
      "Creative transcreation rather than literal word-for-word translation",
      "Cultural adaptation tailored to UAE and Gulf consumer preferences",
      "Copywriting by native Arabic and international creative writers",
      "Branded brochures, social media copy, PR releases, and ad scripts"
    ],
    targetAudience: [
      "Advertising agencies and marketing departments in the MENA region",
      "Luxury brands, hospitality groups, and retail chains",
      "Tech startups launching consumer apps in the Middle East"
    ],
    documentsRequired: ["Marketing briefs, brochures, digital ad copy, brand guidelines, or video scripts"],
    processSteps: [
      { step: "01", title: "Creative Brief", desc: "Understand brand tone, target demographic, and campaign goals." },
      { step: "02", title: "Transcreation", desc: "Native creative copywriters craft compelling localized messaging." },
      { step: "03", title: "Brand Review", desc: "Collaborative refinement to ensure perfect brand alignment." },
      { step: "04", title: "Campaign Launch", desc: "Final polished copy delivered in your desired layout." }
    ],
    faqs: [
      {
        q: "What is the difference between marketing translation and transcreation?",
        a: "Transcreation is creative translation that recreates the emotional impact, humor, and intent of the source text rather than simply translating words literally."
      }
    ],
    relatedSlugs: ["website-localization", "software-localization", "subtitling-services"]
  },
  {
    id: "subtitling-services",
    slug: "subtitling-services",
    category: "translation",
    title: "Expert Multilingual Subtitling Services in Dubai",
    shortTitle: "Subtitling Services",
    tagline: "Time-Synced Multilingual Subtitles & Closed Captions",
    description: "Subtitling is a powerful tool that connects visual content to global audiences by delivering accurate, synchronized translations for films, commercials, e-learning, and corporate videos.",
    overview: "Smart Word provides professional subtitling, closed captioning, and time-coded transcription in Arabic, English, French, Spanish, and over 40 languages. We ensure subtitle readability, proper reading speeds, character limits per line, and perfect audio synchronization.",
    features: [
      "Time-coded SRT, VTT, ASS, and broadcast formats",
      "Burnt-in (open captions) or soft subtitle file delivery",
      "Frame-accurate synchronization with audio cues",
      "Cultural adaptation for dialogue, humor, and idioms"
    ],
    targetAudience: [
      "Media production houses and film distributors in Dubai Studio City",
      "Corporate communications teams producing executive videos",
      "E-learning providers and online course creators"
    ],
    documentsRequired: ["Video file (MP4, MOV) or URL link and optional source script"],
    processSteps: [
      { step: "01", title: "Audio Transcription", desc: "High-fidelity time-coded transcript generation." },
      { step: "02", title: "Translation & Spotting", desc: "Translation crafted to fit optimal reading speed and screen limits." },
      { step: "03", title: "Sync QA", desc: "Reviewing video playback to guarantee frame-by-frame precision." },
      { step: "04", title: "File Delivery", desc: "Exported as standalone caption files or hardcoded video." }
    ],
    faqs: [
      {
        q: "What subtitle formats can you deliver?",
        a: "We deliver .SRT, .VTT, .DFXP, .SCC, .SBV, and burnt-in hardcoded MP4/MOV videos formatted for YouTube, TikTok, broadcast TV, and cinema."
      }
    ],
    relatedSlugs: ["video-translation-&-voice-translation", "multilingual-transcription-services", "commercial-and-marketing-translation"]
  },
  {
    id: "technical-translation",
    slug: "technical-translation",
    category: "translation",
    title: "Expert Technical Translation Services in Dubai",
    shortTitle: "Technical Translation",
    tagline: "Engineering, Oil & Gas, IT, Construction & Scientific Manuals",
    description: "Technical translation in Dubai is vital for businesses operating in sectors like engineering, manufacturing, IT, telecommunications, oil & gas, and construction.",
    overview: "Our technical translators hold domain-specific degrees and deep industrial experience. We handle complex user manuals, standard operating procedures (SOPs), safety datasheets (MSDS), CAD drawings, engineering specifications, and architectural documentation.",
    features: [
      "Subject-matter expert translators with engineering/technical backgrounds",
      "Rigorous adherence to international standards (ISO, DIN, ASTM)",
      "Translation Memory (TM) tools for terminology consistency",
      "Desktop publishing (DTP) for complex technical diagrams and CAD schematics"
    ],
    targetAudience: [
      "Engineering, construction, and infrastructure contractors",
      "Oil & Gas and energy companies operating in the Gulf",
      "IT hardware and software enterprise manufacturers"
    ],
    documentsRequired: ["User guides, technical datasheets, schematics, or CAD/PDF documents"],
    processSteps: [
      { step: "01", title: "Technical Terminology Mapping", desc: "Create or import domain-specific glossaries." },
      { step: "02", title: "Specialist Translation", desc: "Translated by an engineer-linguist in the specific field." },
      { step: "03", title: "Technical Review & DTP", desc: "Re-integrating text into complex schematics and layouts." },
      { step: "04", title: "Delivery", desc: "Print-ready technical manuals." }
    ],
    faqs: [
      {
        q: "How do you handle technical schematics and diagrams?",
        a: "Our in-house Desktop Publishing (DTP) specialists handle InDesign, Illustrator, AutoCAD, and FrameMaker files directly to replace text while preserving diagrams."
      }
    ],
    relatedSlugs: ["scientific-translation", "software-localization", "financial-and-business-translation"]
  },
  {
    id: "multilingual-transcription-services",
    slug: "multilingual-transcription-services",
    category: "translation",
    title: "Multilingual Translation Services for Business in Dubai",
    shortTitle: "Business Transcription & Translation",
    tagline: "High-Accuracy Audio & Video Transcription in 50+ Languages",
    description: "In today's fast-paced, globalized world, converting audio and video content into accurate written text across multiple languages is a necessity for modern enterprises.",
    overview: "Smart Word provides transcription and translation for boardroom meetings, shareholder conferences, legal arbitrations, court hearings, interviews, and focus groups. We deliver verbatim or clean transcripts paired with certified translations.",
    features: [
      "Human transcriptionists ensuring 99%+ accuracy",
      "Speaker identification and timestamping",
      "Verbatim or edited/clean transcript options",
      "Direct translation into Arabic, English, and other languages"
    ],
    targetAudience: [
      "Corporate boards, auditors, and legal teams",
      "Market research agencies conducting qualitative focus groups",
      "Journalists, media networks, and podcast producers"
    ],
    documentsRequired: ["Audio / Video files (WAV, MP3, MP4, M4A, etc.)"],
    processSteps: [
      { step: "01", title: "Audio Ingestion", desc: "Upload audio or video securely." },
      { step: "02", title: "Transcription", desc: "Linguist transcribes with speaker tags and timestamps." },
      { step: "03", title: "Translation", desc: "Written transcript is translated into your requested target language." },
      { step: "04", title: "Delivery", desc: "Formatted Word or PDF document delivered." }
    ],
    faqs: [
      {
        q: "Can you transcribe poor quality audio or heavy regional accents?",
        a: "Yes, our native human linguists use specialized audio enhancement software and regional dialect knowledge to transcribe challenging audio accurately."
      }
    ],
    relatedSlugs: ["subtitling-services", "video-translation-&-voice-translation", "minutes-of-meeting"]
  },
  {
    id: "educational-&-academic-translation",
    slug: "educational-&-academic-translation",
    category: "translation",
    title: "Professional Academic Translation Services in Dubai",
    shortTitle: "Academic Translation",
    tagline: "Scholarly Research, Dissertations & University Publishing",
    description: "With Dubai being a thriving hub for international education and global academia, the need for accurate educational and academic translation is paramount.",
    overview: "We translate academic research papers, peer-reviewed journal submissions, PhD dissertations, textbooks, university syllabi, and student theses across all scientific and humanities disciplines.",
    features: [
      "Academic linguists with Master's and PhD degrees",
      "Adherence to academic citation styles (APA, MLA, Chicago, Harvard)",
      "Rigorous subject-specific terminology verification",
      "Journal-ready formatting and proofreading"
    ],
    targetAudience: [
      "University professors, researchers, and PhD candidates",
      "Academic publishing houses and institutional libraries",
      "Higher education institutions in Dubai Knowledge Park & DIAC"
    ],
    documentsRequired: ["Research manuscripts, abstracts, thesis chapters, or academic courseware"],
    processSteps: [
      { step: "01", title: "Academic Matching", desc: "Assigned to a linguist in your specific academic field." },
      { step: "02", title: "Scholarly Translation", desc: "Translation maintaining rigor and scientific tone." },
      { step: "03", title: "Citation & Reference QA", desc: "Verifying bibliographies and footnotes." },
      { step: "04", title: "Publication Ready", desc: "Final submission-ready manuscript." }
    ],
    faqs: [
      {
        q: "Do you maintain citation formatting in academic translations?",
        a: "Yes, we preserve all in-text citations, footnotes, bibliographies, and formatting according to your target journal's style guide."
      }
    ],
    relatedSlugs: ["scientific-translation", "educational-certificates-attestation", "certified-translation"]
  },
  {
    id: "video-translation-&-voice-translation",
    slug: "video-translation-&-voice-translation",
    category: "translation",
    title: "Professional Legal Video and Voice Translation Services",
    shortTitle: "Video & Voice Translation",
    tagline: "Evidentiary Audio/Video Translation & Voiceover Localization",
    description: "Audio translation plays a vital role in breaking linguistic barriers in an increasingly digital and globalized world, especially for legal evidence and corporate media.",
    overview: "Smart Word provides sworn audio/video translation for legal depositions, wiretaps, surveillance recordings, and court evidence, as well as multilingual voiceover localization and dubbing for corporate training and marketing videos in Dubai.",
    features: [
      "Court-certified evidentiary transcripts for legal proceedings",
      "Professional native voiceover artists in Arabic and 30+ languages",
      "Time-synced voiceover and audio dubbing",
      "Studio quality audio mastering"
    ],
    targetAudience: [
      "Litigation attorneys requiring court evidence translation",
      "Corporate HR teams translating video training modules",
      "Broadcasters and digital marketing agencies"
    ],
    documentsRequired: ["Video / Audio recording files or digital cloud links"],
    processSteps: [
      { step: "01", title: "Media Review", desc: "Audit audio quality, timestamps, and legal requirements." },
      { step: "02", title: "Transcript & Translation", desc: "Linguist translates and stamps certified transcript." },
      { step: "03", title: "Voiceover Recording", desc: "Studio voiceover recording if dubbing is requested." },
      { step: "04", title: "Final Deliverable", desc: "Certified transcript or localized audio file delivered." }
    ],
    faqs: [
      {
        q: "Can you provide a certified translation of audio evidence for Dubai Courts?",
        a: "Yes, we produce sworn, timestamped written translations of audio/video recordings with official MOJ stamps for submission to Dubai Courts and Police."
      }
    ],
    relatedSlugs: ["subtitling-services", "multilingual-transcription-services", "legal-translation"]
  },
  {
    id: "scientific-translation",
    slug: "scientific-translation",
    category: "translation",
    title: "Professional Scientific Translation Services in UAE",
    shortTitle: "Scientific Translation",
    tagline: "Biotechnology, Chemistry, Physics & Environmental Science",
    description: "Scientific translation plays a critical role in facilitating global collaboration, research dissemination, and innovation across scientific disciplines.",
    overview: "From laboratory reports and clinical research protocols to patent filings and environmental impact assessments, Smart Word ensures exact scientific nomenclature and mathematical notation in translation.",
    features: [
      "Specialists in biotechnology, chemistry, environmental science, and physics",
      "Exact mathematical, chemical formula, and nomenclature accuracy",
      "Strict peer-review quality control process",
      "Confidential handling of proprietary research and inventions"
    ],
    targetAudience: [
      "Scientific research centers and government laboratories",
      "Biotech and pharmaceutical innovators",
      "Environmental consultancies and energy developers"
    ],
    documentsRequired: ["Scientific papers, patent descriptions, lab test reports"],
    processSteps: [
      { step: "01", title: "Scientific Analysis", desc: "Determine technical domain and terminology standards." },
      { step: "02", title: "Specialist Translation", desc: "Translated by a scientific domain expert." },
      { step: "03", title: "Peer QA", desc: "Checked for formula precision and scientific nomenclature." },
      { step: "04", title: "Delivery", desc: "Clean publication-grade document." }
    ],
    faqs: [
      {
        q: "Do you translate chemical formulas and mathematical equations accurately?",
        a: "Yes, our scientific specialists preserve all LaTeX syntax, mathematical equations, chemical formulae, and scientific diagrams without corruption."
      }
    ],
    relatedSlugs: ["technical-translation", "medical-translation", "educational-&-academic-translation"]
  },
  {
    id: "website-and-digital-content-translation",
    slug: "website-and-digital-content-translation",
    category: "translation",
    title: "Top Digital Content Translation Services in Dubai",
    shortTitle: "Digital Content Translation",
    tagline: "SEO-Optimized Multilingual Content for UAE & Global Audiences",
    description: "In today’s digital-first world, your website and digital channels are often the first impression you make. At Smart Word, we help businesses expand their online presence.",
    overview: "We translate blog articles, landing pages, digital ad copy, email newsletters, and social media posts, combining linguistic fluency with keyword research in target languages so your brand ranks high on Google UAE and across the MENA region.",
    features: [
      "Integrated multilingual SEO and Arabic keyword optimization",
      "CMS-friendly exports (WordPress, Shopify, Webflow, HTML)",
      "Engaging, high-converting digital copywriting",
      "Fast turnarounds for daily digital marketing needs"
    ],
    targetAudience: [
      "Digital marketing agencies and media buying teams",
      "E-commerce stores targeting Gulf shoppers",
      "SaaS and mobile app companies scaling regionally"
    ],
    documentsRequired: ["Content export, Word doc, Google Docs, or CMS access"],
    processSteps: [
      { step: "01", title: "SEO Strategy", desc: "Identify target search intent and regional keywords." },
      { step: "02", title: "Content Translation", desc: "Craft engaging copy optimized for digital readers." },
      { step: "03", title: "On-Page SEO QA", desc: "Verify title tags, meta descriptions, and alt text." },
      { step: "04", title: "CMS Ready", desc: "Deliver structured content ready for upload." }
    ],
    faqs: [
      {
        q: "Do you provide localized Arabic keywords for UAE search engines?",
        a: "Yes, our team performs localized Arabic keyword research to ensure your content matches the actual search terms used by consumers in the UAE and GCC."
      }
    ],
    relatedSlugs: ["website-localization", "software-localization", "commercial-and-marketing-translation"]
  },
  {
    id: "software-localization",
    slug: "software-localization",
    category: "translation",
    title: "Top Software Localization and Translation Services in Dubai",
    shortTitle: "Software Localization",
    tagline: "UI/UX, Mobile Apps, SaaS Platforms & String Localization",
    description: "Software localization is a specialized service that goes beyond simple translation—it involves adapting your software's user interface, strings, and workflows to the linguistic, cultural, and technical requirements of target users.",
    overview: "We localize iOS and Android mobile apps, SaaS dashboards, enterprise software, and video games. We handle string resource files (.json, .xml, .po, .strings, .yaml), manage character length constraints, and ensure right-to-left (RTL) layout compatibility for Arabic.",
    features: [
      "Direct support for resource file formats (JSON, XML, PO, XLIFF, YAML)",
      "Right-to-Left (RTL) Arabic UI optimization & bidirectional testing",
      "Character length limitation management for buttons and menus",
      "Linguistic and functional in-context QA testing"
    ],
    targetAudience: [
      "Fintech, healthtech, and logistics startups in the UAE",
      "Global software vendors expanding into the Middle East",
      "Mobile game developers and app publishers"
    ],
    documentsRequired: ["String resource files (.json, .po, .strings) or repository access"],
    processSteps: [
      { step: "01", title: "File Extraction", desc: "Ingest developer resource files and setup terminology glossary." },
      { step: "02", title: "UI String Localization", desc: "Translating strings with awareness of variables and UI limits." },
      { step: "03", title: "LQA & RTL Testing", desc: "Testing on actual devices for truncation and RTL alignment." },
      { step: "04", title: "Code Ready", desc: "Exporting validated localization files ready for deployment." }
    ],
    faqs: [
      {
        q: "How do you handle Right-to-Left (RTL) Arabic UI design?",
        a: "We ensure Arabic strings fit neatly into localized layouts and advise on mirroring icons, navigation elements, and form inputs for seamless RTL user experiences."
      }
    ],
    relatedSlugs: ["website-localization", "website-and-digital-content-translation", "technical-translation"]
  },
  {
    id: "website-localization",
    slug: "website-localization",
    category: "translation",
    title: "Website Localization Services in Dubai",
    shortTitle: "Website Localization",
    tagline: "Full-Funnel Multilingual Web Experiences & E-commerce Localization",
    description: "As businesses expand globally and target multicultural audiences, having a localized website becomes essential—not just for communication, but for conversion.",
    overview: "Smart Word provides end-to-end website localization. We adapt web copy, graphics, currency formats, payment methods, navigation hierarchy, and SEO for the UAE, Middle East, and international markets.",
    features: [
      "Compatibility with WordPress, Shopify, Magento, Webflow, Next.js",
      "Multilingual SEO and localized meta descriptions",
      "RTL CSS layout advisory for Arabic web versions",
      "Complete end-to-end linguistic testing prior to launch"
    ],
    targetAudience: [
      "E-commerce brands selling across the GCC",
      "Hospitality, tourism, and real estate developers in Dubai",
      "Corporate enterprises operating multilingual portals"
    ],
    documentsRequired: ["Website URL, sitemap, CMS export, or code repository access"],
    processSteps: [
      { step: "01", title: "Sitemap Audit", desc: "Analyze site structure, word count, and dynamic strings." },
      { step: "02", title: "Localization & Transcreation", desc: "Translating pages, menus, forms, and error states." },
      { step: "03", title: "Staging Testing", desc: "Reviewing on staging server for UI layout and font rendering." },
      { step: "04", title: "Go-Live Support", desc: "Final verification and SEO validation." }
    ],
    faqs: [
      {
        q: "Can you translate directly within WordPress (WPML) or Shopify?",
        a: "Yes, our team can work directly inside your CMS translation plugins or via standardized XLIFF/CSV exports to make publishing frictionless."
      }
    ],
    relatedSlugs: ["software-localization", "website-and-digital-content-translation", "commercial-and-marketing-translation"]
  },

  // ==========================================
  // ATTESTATION SERVICES
  // ==========================================
  {
    id: "mofa-attestation",
    slug: "mofa-attestation",
    category: "attestation",
    title: "Fastest MOFA Attestation for Documents in Dubai UAE",
    shortTitle: "MOFA Attestation",
    tagline: "Ministry of Foreign Affairs (MOFAIC) Official Legalization",
    description: "MOFA (Ministry of Foreign Affairs) attestation is an essential process for validating documents for official use within the UAE. It is the mandatory final legalization step for visas, employment, business formation, and legal transactions.",
    overview: "Smart Word provides express MOFA attestation services in Dubai and across the UAE. We manage the online submission, fee payments, and physical ministry stamping for personal certificates (birth, marriage, degrees) and commercial documents (board resolutions, power of attorney, trade licenses).",
    features: [
      "Official UAE Ministry of Foreign Affairs (MOFA) electronic & physical stamp",
      "Fast-track processing with express return within 24 to 48 hours",
      "Door-to-door secure document pickup and courier delivery across Dubai",
      "Complete verification of prior embassy and ministry stamps"
    ],
    targetAudience: [
      "New residents completing UAE employment or family visa procedures",
      "Students seeking UAE Ministry of Education degree equivalency",
      "Corporations submitting foreign corporate resolutions or powers of attorney"
    ],
    documentsRequired: [
      "Original document with Home Country Embassy attestation (for foreign documents)",
      "Passport and Emirates ID copy of the applicant",
      "Prior UAE Ministry stamps if issued inside the country"
    ],
    processSteps: [
      { step: "01", title: "Document Review", desc: "We inspect your certificates to ensure all prerequisite seals are present." },
      { step: "02", title: "MOFA Submission", desc: "We register and process your file through the official MOFA portal." },
      { step: "03", title: "Official Legalization", desc: "MOFA verifies and affixes the official QR/physical attestation stamp." },
      { step: "04", title: "Handover", desc: "Delivered securely to your doorstep in Dubai or any Emirate." }
    ],
    faqs: [
      {
        q: "What is required before a foreign document can be attested by MOFA in Dubai?",
        a: "The document must first be attested in its country of origin (Notary, Ministry of External/Foreign Affairs) and by the UAE Embassy in that country."
      },
      {
        q: "How fast is MOFA attestation completed?",
        a: "Standard processing takes 1-2 business days. Express same-day service is available for eligible documents."
      }
    ],
    relatedSlugs: ["uae-embassy-consulate-attestation", "home-country-attestation", "marriage-certificate-attestation", "birth-certificate-attestation"]
  },
  {
    id: "notary-attestation",
    slug: "notary-attestation",
    category: "attestation",
    title: "Registered Notary & Attestation Services in UAE",
    shortTitle: "Notary Attestation",
    tagline: "Official Notary Public Certification & Document Verification",
    description: "Notary attestation is a crucial process that verifies the authenticity of documents for official and legal use within the United Arab Emirates.",
    overview: "Smart Word facilitates private and public notary attestation services across Dubai. We guide clients through document drafting, sworn Arabic translation, appointment scheduling, and online or in-person notarization at Dubai Courts Notary Public branches.",
    features: [
      "Full Dubai Courts Notary Public liaison and appointment handling",
      "Assistance with private notary electronic signatures and verification",
      "Bilingual Arabic/English document formatting compliant with notary rules",
      "Guidance for both individual applicants and corporate entities"
    ],
    targetAudience: [
      "Company directors signing Board Resolutions, MOA, or LSA agreements",
      "Individuals granting Power of Attorney to relatives or lawyers",
      "Expatriates executing declarations, affidavits, or NOC letters"
    ],
    documentsRequired: [
      "Original Emirates ID and Passports of all signing parties",
      "Draft document in bilingual format (Arabic/English)",
      "Trade license and memorandum if signing on behalf of a company"
    ],
    processSteps: [
      { step: "01", title: "Drafting & Translation", desc: "Prepare the legal text in mandatory Dubai Courts bilingual format." },
      { step: "02", title: "Verification", desc: "Verify identity documents and legal signing capacity." },
      { step: "03", title: "Notary Execution", desc: "Sign before the Notary Public (in person or via video notary)." },
      { step: "04", title: "Official Stamp", desc: "Document receives official Dubai Courts Notary seal and serial number." }
    ],
    faqs: [
      {
        q: "Can notary attestation be done online via video conference in Dubai?",
        a: "Yes! Dubai Courts provides remote electronic notarization via Botim/video link for holders of valid UAE Pass and Emirates IDs. Smart Word manages the full online process."
      }
    ],
    relatedSlugs: ["moj-attestation", "power-of-attorney-poa", "board-resolution", "true-copy-attestation"]
  },
  {
    id: "equivalency-attestation-services",
    slug: "equivalency-attestation-services",
    category: "attestation",
    title: "Equivalency Attestation MOE and Transcript Support UAE",
    shortTitle: "Equivalency Attestation",
    tagline: "Ministry of Education (MOE) University Degree Equivalency",
    description: "Equivalency attestation is an official recognition process by the UAE Ministry of Education that certifies the academic equality of foreign degrees with UAE national standards.",
    overview: "Obtaining MOE Equivalency is mandatory for engineers, doctors, teachers, university professors, and candidates applying for government or Golden Visa positions. Smart Word guides you through every step: home country verification, Genuineness Verification (DataFlow / QuadraBay), and MOE portal submission.",
    features: [
      "Complete assistance with UAE Ministry of Education (MOE) portal filing",
      "DataFlow & QuadraBay verification tracking",
      "Certified translation of transcripts and graduation certificates",
      "Prompt handling of ministry inquiries and requests for additional documentation"
    ],
    targetAudience: [
      "Engineers registering with the Society of Engineers (SOE UAE)",
      "Medical professionals seeking DHA / MOHAP / DOH licensing",
      "Educators and teachers joining UAE schools and universities",
      "Professionals applying for the UAE Golden Visa"
    ],
    documentsRequired: [
      "Original Degree & Official Transcripts (fully attested by MOFA)",
      "High school certificate copy",
      "Genuineness letter / verification report",
      "Emirates ID and passport copy"
    ],
    processSteps: [
      { step: "01", title: "Document Audit", desc: "Review all stamps (Embassy, MOFA) and transcript completeness." },
      { step: "02", title: "Genuineness Verification", desc: "Initiate DataFlow / primary source verification." },
      { step: "03", title: "MOE Application", desc: "Submit application on the UAE Ministry of Education system." },
      { step: "04", title: "Equivalency Certificate", desc: "Receive the official MOE Certificate of Equivalency." }
    ],
    faqs: [
      {
        q: "Why is degree equivalency required in the UAE?",
        a: "It proves to UAE authorities, regulatory licensing boards (such as SOE and DHA), and employers that your foreign academic qualification meets the educational standards of the UAE."
      }
    ],
    relatedSlugs: ["educational-certificates-attestation", "khda-attestation", "mofa-attestation"]
  },
  {
    id: "khda-attestation",
    slug: "khda-attestation",
    category: "attestation",
    title: "Expert KHDA Attestation Services in Dubai UAE",
    shortTitle: "KHDA Attestation",
    tagline: "Knowledge and Human Development Authority Dubai Validation",
    description: "KHDA (Knowledge and Human Development Authority) attestation is a critical step in validating educational certificates, diplomas, training certificates, and school records issued by private educational institutions in Dubai.",
    overview: "Smart Word streamlines KHDA attestation for students transferring between schools, graduates applying for university admissions, and professionals with Dubai-issued vocational or training diplomas needing official governmental recognition.",
    features: [
      "Official KHDA verification for Dubai private schools and universities",
      "Validation of training center certificates and professional diplomas",
      "Fast turnaround through direct liaison with KHDA authorities",
      "Complimentary MOFA attestation packaging for overseas use"
    ],
    targetAudience: [
      "Students transferring to overseas schools or universities",
      "Graduates from universities based in Dubai Academic City / Knowledge Park",
      "Employees submitting Dubai professional training certificates to employers"
    ],
    documentsRequired: [
      "Original school transfer certificate, report card, or diploma",
      "Student Emirates ID and passport copy",
      "Institution authorization reference"
    ],
    processSteps: [
      { step: "01", title: "Institution Verification", desc: "Verify that the issuing school or institute is KHDA-licensed." },
      { step: "02", title: "KHDA Portal Filing", desc: "Submit through the official KHDA certification service." },
      { step: "03", title: "Stamping & Approval", desc: "Attestation stamp applied by KHDA officers." },
      { step: "04", title: "Delivery", desc: "Delivered to your residence or forwarded to MOFA." }
    ],
    faqs: [
      {
        q: "Which documents require KHDA attestation?",
        a: "School report cards, transfer certificates (TC), graduation certificates from Dubai private universities, and certificates from KHDA-permitted training institutes."
      }
    ],
    relatedSlugs: ["equivalency-attestation-services", "educational-certificates-attestation", "mofa-attestation"]
  },
  {
    id: "marriage-certificate-attestation",
    slug: "marriage-certificate-attestation",
    category: "attestation",
    title: "Expert Marriage Certificate Attestation in Dubai UAE",
    shortTitle: "Marriage Certificate Attestation",
    tagline: "Complete Legalization for Spouse Visas & Family Sponsorship",
    description: "Marriage certificate attestation is a vital legal process that verifies the authenticity of a marriage document issued outside the UAE for spouse visa sponsorship, maternity registration, and legal family matters.",
    overview: "To sponsor your spouse for UAE residency (GDRFA / ICP) or register a newborn child, your marriage certificate must undergo a chain of attestations: Home Country Notary & Foreign Ministry, UAE Embassy in your home country, and the UAE Ministry of Foreign Affairs (MOFA). Smart Word manages this entire end-to-end chain.",
    features: [
      "Complete chain attestation across 100+ countries and UAE MOFA",
      "Certified Arabic translation included for Dubai immigration authorities",
      "Guaranteed approval by GDRFA, ICP, and UAE Courts",
      "Safe and insured global courier handling of your precious original certificate"
    ],
    targetAudience: [
      "Expatriates sponsoring husband or wife for UAE residency visas",
      "Couples registering maternity hospital files and newborn birth certificates",
      "Joint property buyers and bank mortgage applicants in Dubai"
    ],
    documentsRequired: [
      "Original Marriage Certificate",
      "Passport and Emirates ID copies of both husband and wife"
    ],
    processSteps: [
      { step: "01", title: "Home Country Legalization", desc: "Attestation at State/Foreign Affairs & UAE Embassy abroad (if not done)." },
      { step: "02", title: "UAE MOFA Attestation", desc: "Official stamping by the UAE Ministry of Foreign Affairs." },
      { step: "03", title: "Certified Legal Translation", desc: "Translation into official Arabic with MOJ stamps." },
      { step: "04", title: "Visa Ready", desc: "Complete dossier ready for immediate GDRFA spouse visa filing." }
    ],
    faqs: [
      {
        q: "Can I sponsor my spouse in Dubai without an attested marriage certificate?",
        a: "No, Dubai Immigration (GDRFA) strictly mandates a fully attested and Arabic-translated marriage certificate to issue a spouse residence visa."
      }
    ],
    relatedSlugs: ["birth-certificate-attestation", "mofa-attestation", "husband-sponsorship-noc", "legal-translation"]
  },
  {
    id: "salary-certificate-attestation",
    slug: "salary-certificate-attestation",
    category: "attestation",
    title: "MOFA and Embassy Salary Certificate Attestation Dubai",
    shortTitle: "Salary Certificate Attestation",
    tagline: "Official Income & Employment Verification Legalization",
    description: "Salary certificate attestation is a crucial process that verifies the authenticity of a salary certificate or employment contract issued by a company in the UAE or abroad.",
    overview: "Attested salary certificates are required when applying for foreign country travel visas (Schengen, US, UK), sponsoring family members in the UAE, taking international bank loans, or resolving cross-border financial matters. We manage Chamber of Commerce, Ministry, and Embassy stamps.",
    features: [
      "Dubai Chamber of Commerce & Industry (DCCI) attestation",
      "Ministry of Foreign Affairs (MOFA) attestation",
      "Foreign Embassy and Consulate stamping in Dubai",
      "Same-day or next-day turnaround"
    ],
    targetAudience: [
      "Employees applying for foreign tourist or business visas",
      "Individuals meeting GDRFA minimum salary criteria for family sponsorship",
      "Expatriates securing overseas bank mortgages or property loans"
    ],
    documentsRequired: [
      "Original salary certificate on company letterhead signed & stamped",
      "Valid UAE Trade License copy of the employer",
      "Applicant passport and Emirates ID copy"
    ],
    processSteps: [
      { step: "01", title: "Chamber Attestation", desc: "Verify employer signature with Dubai Chamber." },
      { step: "02", title: "MOFA Verification", desc: "Legalize through the Ministry of Foreign Affairs." },
      { step: "03", title: "Embassy Attestation", desc: "Submit to foreign consulate/embassy if needed." },
      { step: "04", title: "Delivery", desc: "Ready for visa or banking submission." }
    ],
    faqs: [
      {
        q: "Does the salary certificate need to be stamped by Dubai Chamber first?",
        a: "Yes, for UAE private sector companies, the signature on the salary certificate must be attested by the Dubai Chamber of Commerce before MOFA will stamp it."
      }
    ],
    relatedSlugs: ["mofa-attestation", "true-copy-attestation", "uae-embassy-consulate-attestation"]
  },
  {
    id: "moj-attestation",
    slug: "moj-attestation",
    category: "attestation",
    title: "Quick Expert MOJ Attestation Services in Dubai UAE",
    shortTitle: "MOJ Attestation",
    tagline: "Ministry of Justice Legal Attestation & Verification",
    description: "MOJ (Ministry of Justice) attestation is a vital process that verifies the authenticity of legal documents, court rulings, and certified legal translations for use within UAE courts and foreign jurisdictions.",
    overview: "Smart Word provides direct liaison with the UAE Ministry of Justice in Dubai and Abu Dhabi. We attest sworn translations, legal contracts, court judgments, and judicial power of attorneys, ensuring full compliance with UAE procedural laws.",
    features: [
      "Official UAE Ministry of Justice stamp and electronic validation",
      "Verification of legal translators' licenses and seals",
      "Expedited processing for pending court and litigation dates",
      "Bilingual legal attestation formats"
    ],
    targetAudience: [
      "Attorneys and law firms preparing court bundles in the UAE",
      "Litigants presenting foreign documents to Dubai Courts",
      "Companies formalizing cross-border arbitration agreements"
    ],
    documentsRequired: [
      "Original document and certified legal translation by an MOJ-licensed translator",
      "Case details or reference if related to ongoing court proceedings"
    ],
    processSteps: [
      { step: "01", title: "Legal Translation", desc: "Execute translation by an MOJ licensed sworn translator." },
      { step: "02", title: "MOJ Filing", desc: "Submit to the Ministry of Justice legal affairs department." },
      { step: "03", title: "Official Stamp", desc: "MOJ inspects and applies official justice ministry stamps." },
      { step: "04", title: "Court Filing", desc: "Delivered ready for electronic court filing." }
    ],
    faqs: [
      {
        q: "When is MOJ attestation required?",
        a: "When a foreign legal document or certified translation is being submitted as official evidence to Dubai Courts, Public Prosecution, or when authenticating documents for use in foreign courts."
      }
    ],
    relatedSlugs: ["legal-translation", "sworn-translation", "notary-attestation", "mofa-attestation"]
  },
  {
    id: "home-country-attestation",
    slug: "home-country-attestation",
    category: "attestation",
    title: "Quick Home Country Embassy Document Attestation UAE",
    shortTitle: "Home Country Attestation",
    tagline: "Origin Country Verification & Foreign Affairs Legalization",
    description: "Home Country Attestation is the initial and essential step in validating documents issued in your home country for official use within the United Arab Emirates.",
    overview: "Before a foreign birth certificate, degree, or power of attorney can be stamped by UAE authorities, it must be legalized in its country of origin by the local Notary Public, State Department/Home Ministry, Ministry of External/Foreign Affairs (MEA/FCO/State Dept), and the UAE Embassy located in that capital. Smart Word handles this entire international pipeline for over 100 countries.",
    features: [
      "International network covering India, UK, USA, Pakistan, Philippines, Egypt, Europe, and more",
      "Full coverage of Notary, State HRD/Apostille, and Ministry of External Affairs",
      "Direct stamping at UAE Embassy abroad",
      "Insured international diplomatic courier tracking"
    ],
    targetAudience: [
      "New expats coming to the UAE with foreign educational certificates",
      "Foreign companies setting up branches in Dubai with home country certificates of incorporation",
      "Parents moving to Dubai with foreign birth certificates for children"
    ],
    documentsRequired: [
      "Original document to be attested",
      "Clear passport copy of the document holder"
    ],
    processSteps: [
      { step: "01", title: "Home Country Collection", desc: "Secure courier pickup in your home country or drop-off in Dubai." },
      { step: "02", title: "State & Foreign Ministry", desc: "Verification by home country educational/state bodies and Foreign Ministry." },
      { step: "03", title: "UAE Embassy Legalization", desc: "Official seal by the UAE Embassy in that country." },
      { step: "04", title: "Arrival in Dubai", desc: "Returned to Dubai ready for UAE MOFA attestation." }
    ],
    faqs: [
      {
        q: "Can Smart Word handle home country attestation while I am already in Dubai?",
        a: "Yes! You can hand over your original documents at our Dubai office, and we manage the entire overseas attestation cycle and return the completed documents directly to you."
      }
    ],
    relatedSlugs: ["uae-embassy-consulate-attestation", "mofa-attestation", "educational-certificates-attestation"]
  },
  {
    id: "true-copy-attestation",
    slug: "true-copy-attestation",
    category: "attestation",
    title: "Quick Licensed True Copy Attestation in Dubai UAE",
    shortTitle: "True Copy Attestation",
    tagline: "Certified True Copies for Passports, IDs & Corporate Records",
    description: "True Copy Attestation is an official process that certifies a photocopy of an original document as a genuine and accurate reproduction of the original without parting with the master original.",
    overview: "Smart Word provides certified true copy attestation for passports, Emirates IDs, utility bills, tenancy contracts, certificates of incorporation, and board resolutions. Certified true copies are widely required by UAE banks, offshore jurisdictions, compliance officers, and foreign institutions.",
    features: [
      "Certified by registered UAE legal practitioners and notary witnesses",
      "Side-by-side original document physical verification",
      "Official 'Certified True Copy of the Original' stamp with date and signature",
      "Completed in under 30 minutes in person or same-day courier"
    ],
    targetAudience: [
      "Corporate account opening applicants providing director passport copies",
      "Immigration and foreign visa applicants preserving original documents",
      "Real estate investors and KYC compliance verification"
    ],
    documentsRequired: [
      "Original document (for visual inspection) and clear colour photocopy"
    ],
    processSteps: [
      { step: "01", title: "Inspect Original", desc: "Legal certifier examines original document authenticity." },
      { step: "02", title: "Match Photocopy", desc: "Verify 100% visual match of all text, watermarks, and photos." },
      { step: "03", title: "Affix True Copy Stamp", desc: "Apply legal True Copy stamp, signature, and registration log." },
      { step: "04", title: "Handover", desc: "Original returned immediately with certified copies." }
    ],
    faqs: [
      {
        q: "Do I need to leave my original passport with you for true copy attestation?",
        a: "No. The original is inspected on the spot and returned to you immediately along with your certified true copies."
      }
    ],
    relatedSlugs: ["notary-attestation", "salary-certificate-attestation", "open-company-bank-account"]
  },
  {
    id: "birth-certificate-attestation",
    slug: "birth-certificate-attestation",
    category: "attestation",
    title: "Top Birth Certificate Attestation in Dubai UAE",
    shortTitle: "Birth Certificate Attestation",
    tagline: "Legalization for Child Visa Sponsorship & School Admissions",
    description: "Birth certificate attestation is a vital legal process required for validating a birth certificate issued outside the UAE for child residency sponsorship, school admission, and passport issuance.",
    overview: "To sponsor a child in the UAE or enroll them into private/public schools under KHDA regulations, foreign-issued birth certificates must be fully attested by the country of origin, UAE Embassy abroad, and the UAE Ministry of Foreign Affairs (MOFA), followed by certified Arabic translation.",
    features: [
      "Accepted by GDRFA, ICP, KHDA, and international embassies",
      "Full global chain attestation and Dubai MOFA completion",
      "Certified legal translation into Arabic included",
      "Express service available for newborn emergency visa filings"
    ],
    targetAudience: [
      "Parents sponsoring child residency visas in Dubai and UAE",
      "Families enrolling children in Dubai schools under KHDA guidelines",
      "Applying for passports or foreign citizenship for children"
    ],
    documentsRequired: [
      "Original birth certificate of the child",
      "Passport copies of the child, father, and mother",
      "Parents' marriage certificate copy"
    ],
    processSteps: [
      { step: "01", title: "Verification", desc: "Review origin country stamps." },
      { step: "02", title: "Embassy & MOFA Attestation", desc: "Complete UAE Embassy and MOFA stamping." },
      { step: "03", title: "Legal Arabic Translation", desc: "Translate with certified MOJ stamps." },
      { step: "04", title: "Ready for Visa", desc: "Ready for child Emirates ID & residency visa issuance." }
    ],
    faqs: [
      {
        q: "Is Arabic translation required for a child's birth certificate in Dubai?",
        a: "Yes, Dubai Immigration (GDRFA) requires an official Arabic translation stamped by an MOJ licensed legal translator alongside the MOFA attestation."
      }
    ],
    relatedSlugs: ["marriage-certificate-attestation", "mofa-attestation", "khda-attestation"]
  },
  {
    id: "death-certificate-attestation",
    slug: "death-certificate-attestation",
    category: "attestation",
    title: "Top Official Death Certificate Attestation in UAE",
    shortTitle: "Death Certificate Attestation",
    tagline: "Legalization for Estate Settlement, Inheritance & Repatriation",
    description: "Death certificate attestation is a crucial legal process that verifies the authenticity of a death certificate issued outside or inside the UAE for estate settlement, inheritance cases, bank account closures, and insurance claims.",
    overview: "Smart Word handles compassionate, expedited attestation of death certificates and succession documents through the Ministry of Health, Ministry of Foreign Affairs, UAE Courts, and foreign embassies, facilitating smooth inheritance, probate, and insurance claims.",
    features: [
      "Compassionate, expedited priority processing",
      "Recognized by Dubai Courts Probate division and UAE banks",
      "Complete embassy attestation for repatriation of remains or estate distribution",
      "Sworn legal translation into Arabic and home country languages"
    ],
    targetAudience: [
      "Family members executing inheritance claims in Dubai Courts",
      "Heirs claiming bank balances, property transfers, and life insurance",
      "Embassies and legal representatives managing estate probate"
    ],
    documentsRequired: [
      "Original death certificate issued by hospital/health ministry",
      "Passport copies of deceased and legal heirs / death notification"
    ],
    processSteps: [
      { step: "01", title: "Priority Intake", desc: "Dedicated urgent case review." },
      { step: "02", title: "Ministry Stamping", desc: "Process through MOHAP / Foreign Affairs." },
      { step: "03", title: "Court Legal Translation", desc: "Certified Arabic translation for probate courts." },
      { step: "04", title: "Direct Delivery", desc: "Handover to family or legal counsel." }
    ],
    faqs: [
      {
        q: "Why do Dubai banks require an attested death certificate?",
        a: "Under UAE banking regulations, accounts of a deceased person are frozen until Dubai Courts issues a succession / probate order, which requires fully attested death and heirship certificates."
      }
    ],
    relatedSlugs: ["will-and-testament", "mofa-attestation", "legal-translation"]
  },
  {
    id: "uae-embassy-consulate-attestation",
    slug: "uae-embassy-consulate-attestation",
    category: "attestation",
    title: "UAE Embassy Attestation Services MOFA and Document in Dubai",
    shortTitle: "Embassy & Consulate Attestation",
    tagline: "Foreign Embassy Legalization in UAE & UAE Embassies Worldwide",
    description: "UAE Embassy or Consulate Attestation is a crucial step in the process of legalizing documents for official use in the United Arab Emirates or when taking UAE documents for use overseas.",
    overview: "Smart Word provides direct liaison with foreign embassies and consulates in Dubai and Abu Dhabi (USA, UK, Canada, Australia, India, Pakistan, Philippines, Egypt, Germany, France, etc.) and manages UAE Embassy attestations abroad for inbound documents.",
    features: [
      "Accredited liaison with all major embassies & consulates in UAE",
      "Commercial invoice and certificate of origin embassy legalization",
      "Personal diploma and power of attorney legalization",
      "Clear tracking and transparent consular fee breakdowns"
    ],
    targetAudience: [
      "UAE businesses exporting goods requiring legalized shipping documents",
      "Expatriates returning to their home countries with UAE experience certificates",
      "Students planning to study abroad with UAE educational qualifications"
    ],
    documentsRequired: [
      "Original document with prerequisite Chamber or MOFA stamps",
      "Emirates ID / passport copy and embassy authorization form"
    ],
    processSteps: [
      { step: "01", title: "Consular Pre-Check", desc: "Check specific embassy requirements, fees, and appointment rules." },
      { step: "02", title: "Submission", desc: "Physical submission to the designated Embassy/Consulate." },
      { step: "03", title: "Consular Stamping", desc: "Consular officer verifies and affixes the official diplomatic stamp." },
      { step: "04", title: "Return", desc: "Delivered securely back to the client." }
    ],
    faqs: [
      {
        q: "What is the difference between MOFA attestation and Embassy attestation?",
        a: "Embassy attestation is performed by the foreign diplomatic mission in the UAE (or the UAE embassy abroad), whereas MOFA attestation is done by the host government's Ministry of Foreign Affairs. Both are usually required in sequence."
      }
    ],
    relatedSlugs: ["home-country-attestation", "mofa-attestation", "salary-certificate-attestation"]
  },

  // ==========================================
  // NOTARIZATION SERVICES
  // ==========================================
  {
    id: "power-of-attorney-poa",
    slug: "power-of-attorney-poa",
    category: "notarization",
    title: "Power of Attorney Notary Services in Dubai",
    shortTitle: "Power of Attorney (POA)",
    tagline: "Bilingual Drafting, Notarization & Legal Execution",
    description: "Smart Word provides full-service Power of Attorney (POA) preparation in Dubai, including legal drafting in compliant bilingual format (Arabic/English), legal translation, and coordination with Dubai Courts Notary Public.",
    overview: "Whether you need a General Power of Attorney, Special POA for Property Sale/Purchase, Vehicle POA, Business Management POA, or Court Litigation POA, we ensure all statutory clauses comply strictly with UAE Civil Code, protecting your interests and ensuring instant acceptance by government bodies.",
    features: [
      "Bespoke drafting tailored to your exact authorization requirements",
      "Dubai Courts Notary Public and online video notary support",
      "Standard bilingual format conforming to UAE legal precedents",
      "Same-day drafting and notarization scheduling"
    ],
    targetAudience: [
      "Property owners delegating sale or rental management in Dubai",
      "Business owners delegating operational authority to General Managers",
      "Non-resident investors managing UAE assets remotely"
    ],
    documentsRequired: [
      "Principal and Attorney passport copies & Emirates IDs",
      "Title Deed (for property POA) / Trade License (for corporate POA)"
    ],
    processSteps: [
      { step: "01", title: "Requirement Intake", desc: "Define powers to grant and review relevant property/business documents." },
      { step: "02", title: "Bilingual Drafting", desc: "Drafting the legal POA in standardized Arabic and English." },
      { step: "03", title: "Notary Signing", desc: "Sign before Dubai Courts Notary (in-person or remote video call)." },
      { step: "04", title: "Notarized POA", desc: "Receive officially sealed and numbered Dubai Courts POA." }
    ],
    faqs: [
      {
        q: "Can I notarize a POA online from outside the UAE?",
        a: "Yes! If you hold a valid UAE Pass or if your passport is registered, Dubai Courts allows video notarization. Otherwise, we assist with home country embassy attestation."
      }
    ],
    relatedSlugs: ["poa-translation", "declaration-of-cancelling", "board-resolution", "memorandum-of-association-moa"]
  },
  {
    id: "memorandum-of-association-moa",
    slug: "memorandum-of-association-moa",
    category: "notarization",
    title: "Memorandum of Association (MOA) Drafting & Notarization in UAE",
    shortTitle: "MOA Drafting & Notarization",
    tagline: "Official Corporate Statutes & LLC Formation Notarization",
    description: "The Memorandum of Association (MOA) is the constitutional foundation of any company in the UAE, defining shareholder rights, profit distributions, management powers, and corporate governance.",
    overview: "Smart Word drafts and notarizes MOAs and Articles of Association (AOA) for LLCs, Sole Proprietorships, and Civil Companies under UAE Federal Decree-Law on Commercial Companies. We ensure seamless execution at Dubai Courts Notary Public and Department of Economy and Tourism (DET).",
    features: [
      "Compliant with the latest UAE Commercial Companies Law",
      "Custom clauses for 100% foreign ownership structures",
      "Dubai Courts Notary Public electronic signing support",
      "Fast turnaround for new business incorporations"
    ],
    targetAudience: [
      "Entrepreneurs founding LLCs or Sole Establishments in Dubai",
      "Foreign investors establishing mainland UAE joint ventures",
      "Corporate restructuring and multi-partner business formations"
    ],
    documentsRequired: [
      "Initial Approval from Dubai DET (or other Emirate DED)",
      "Trade Name reservation certificate",
      "Passports, Emirates IDs, and residency status of all shareholders"
    ],
    processSteps: [
      { step: "01", title: "Structure Review", desc: "Review DET initial approval and shareholder share allocations." },
      { step: "02", title: "MOA Drafting", desc: "Drafting bilingual legal MOA with manager authority clauses." },
      { step: "03", title: "Shareholder Execution", desc: "Electronic signing via UAE Pass or Dubai Courts Notary." },
      { step: "04", title: "Commercial License", desc: "Notarized MOA ready for immediate trade license issuance." }
    ],
    faqs: [
      {
        q: "Can an MOA be notarized digitally using UAE Pass?",
        a: "Yes, Dubai DET and Dubai Courts allow direct digital signing of standard MOAs using UAE Pass without visiting the notary public in person."
      }
    ],
    relatedSlugs: ["amendment-to-the-moa", "local-service-agent-agreement", "board-resolution", "mainland-business-setup"]
  },
  {
    id: "amendment-to-the-moa",
    slug: "amendment-to-the-moa",
    category: "notarization",
    title: "MOA Amendment & Company Structure Change",
    shortTitle: "MOA Amendment",
    tagline: "Share Transfers, Capital Changes, Name Changes & Manager Updates",
    description: "Whenever an LLC in Dubai modifies its shareholders, transfers shares, changes company name, adds commercial activities, or alters managers, an MOA Amendment (Addendum) must be legally drafted and notarized.",
    overview: "Smart Word prepares comprehensive MOA Amendments and Share Sale Agreements. We guide shareholders through Dubai DET requirements, board resolution drafting, and notarization at Dubai Courts.",
    features: [
      "Share transfer agreements & new partner onboarding",
      "Manager resignation and appointment amendments",
      "Capital increase / decrease addendums",
      "Full compliance with Dubai Courts Notary standards"
    ],
    targetAudience: [
      "Existing UAE companies buying or selling shares",
      "Companies changing trade names or adding business activities",
      "Partners restructuring profit/loss share percentages"
    ],
    documentsRequired: [
      "Current Commercial License and original MOA / previous amendments",
      "DET Change of Activity or Share Transfer Initial Approval",
      "Passports and Emirates IDs of outgoing and incoming partners"
    ],
    processSteps: [
      { step: "01", title: "DET Pre-Approval", desc: "Verify DET initial approval for the requested corporate change." },
      { step: "02", title: "Drafting Amendment", desc: "Prepare bilingual MOA Addendum and Share Sale Agreement." },
      { step: "03", title: "Notarization", desc: "Partners execute the amendment before the Notary Public." },
      { step: "04", title: "License Update", desc: "Submit notarized amendment to DET to issue updated Trade License." }
    ],
    faqs: [
      {
        q: "Do all shareholders need to sign the MOA Amendment before the notary?",
        a: "Yes, all current and incoming shareholders (or their authorized POA holders) must sign the amendment before the Dubai Courts Notary."
      }
    ],
    relatedSlugs: ["memorandum-of-association-moa", "board-resolution", "company-liquidation-resolution"]
  },
  {
    id: "board-resolution",
    slug: "board-resolution",
    category: "notarization",
    title: "Board Resolution & Notarization Services in UAE",
    shortTitle: "Board Resolution & Notarization",
    tagline: "Corporate Resolutions for Banking, Expansion & Asset Management",
    description: "A Board Resolution is a formal corporate instrument recording decisions made by a company’s Board of Directors or shareholders, including opening bank accounts, appointing signatories, acquiring assets, or entering joint ventures.",
    overview: "Smart Word drafts watertight, bilingual Board Resolutions that meet the stringent compliance standards of UAE banks, freezone authorities, and Dubai Courts Notary Public.",
    features: [
      "Bank-compliant account opening and signatory resolutions",
      "Authorization for legal representatives and managers",
      "Freezone and Mainland authority resolution templates",
      "Certified Arabic translation and notary attestation"
    ],
    targetAudience: [
      "Corporate directors establishing new bank accounts in Dubai",
      "Parent companies opening branch offices or subsidiaries in the UAE",
      "Shareholders approving major asset acquisitions or disposals"
    ],
    documentsRequired: [
      "Company Trade License and Memorandum of Association (MOA)",
      "Passports and Emirates IDs of all directors/shareholders",
      "Details of resolution objectives and authorized representatives"
    ],
    processSteps: [
      { step: "01", title: "Consultation", desc: "Determine resolution objectives (banking, share sale, branch opening)." },
      { step: "02", title: "Legal Drafting", desc: "Drafting in formal bilingual legal format." },
      { step: "03", title: "Execution & Notary", desc: "Directors sign and notarize with Dubai Courts if required." },
      { step: "04", title: "Filing Ready", desc: "Ready for bank submission or government filing." }
    ],
    faqs: [
      {
        q: "Do UAE banks require board resolutions to be notarized?",
        a: "For foreign parent companies or complex multi-shareholder entities, UAE banks frequently require board resolutions to be notarized and attested by MOFA."
      }
    ],
    relatedSlugs: ["open-company-bank-account", "minutes-of-meeting", "memorandum-of-association-moa"]
  },
  {
    id: "minutes-of-meeting",
    slug: "minutes-of-meeting",
    category: "notarization",
    title: "Minutes of Meeting UAE",
    shortTitle: "Minutes of Meeting",
    tagline: "Formal Corporate Minutes for AGM, EGM & Statutory Filings",
    description: "Minutes of Meeting serve as the official written record of Annual General Meetings (AGM), Extraordinary General Meetings (EGM), and Board discussions.",
    overview: "Smart Word drafts and legalizes official Minutes of Meetings for UAE Mainland and Freezone companies. We ensure statutory meeting agendas, voting results, and shareholder quorum meet UAE Commercial Companies Law requirements.",
    features: [
      "Statutory AGM and EGM meeting minutes drafting",
      "Quorum calculation, vote recording, and agenda structuring",
      "Ready for submission to Dubai DET and Freezone authorities",
      "Bilingual Arabic/English formal documentation"
    ],
    targetAudience: [
      "Corporate secretariats and legal departments",
      "Companies conducting annual statutory dividend distributions",
      "Entities filing for company restructuring or capital changes"
    ],
    documentsRequired: [
      "Trade License, MOA, and list of attendees with shareholdings",
      "Meeting agenda and adopted resolutions"
    ],
    processSteps: [
      { step: "01", title: "Agenda Capture", desc: "Collect agenda items, attendees, and decisions made." },
      { step: "02", title: "Formal Drafting", desc: "Draft legal minutes conforming to company statutes." },
      { step: "03", title: "Chairman Review", desc: "Signatures by Meeting Chairman and Secretary." },
      { step: "04", title: "Archive / Notary", desc: "Archived in company records or submitted to authorities." }
    ],
    faqs: [
      {
        q: "Are company minutes required to be in Arabic for UAE mainland companies?",
        a: "When submitting minutes of meetings to Dubai DET or government regulators, an official bilingual Arabic version is legally required."
      }
    ],
    relatedSlugs: ["board-resolution", "company-liquidation-resolution", "multilingual-transcription-services"]
  },
  {
    id: "affidavit-&-declaration",
    slug: "affidavit-&-declaration",
    category: "notarization",
    title: "Affidavit & Certified Arabic Translation Services in Dubai, UAE",
    shortTitle: "Affidavits & Declarations",
    tagline: "Sworn Statements, Name Variations & Relationship Declarations",
    description: "An affidavit is a formal sworn statement of fact made under oath. In Dubai, affidavits are commonly required for name discrepancy clarifications, marital status declarations, proof of financial support, and single status certificates.",
    overview: "Smart Word drafts legally binding affidavits in bilingual Arabic and English, prepares supporting evidence, and arranges notary public swearing and attestation.",
    features: [
      "Affidavits of Name Change / One and the Same Person",
      "Sponsorship & Financial Support Affidavits",
      "Single Status / Bachelorhood Declarations for marriage",
      "Full Dubai Courts Notary Public swearing support"
    ],
    targetAudience: [
      "Individuals with name discrepancies across passports and certificates",
      "Expatriates getting married in Dubai or abroad",
      "Applicants proving relationship ties for family visa sponsorship"
    ],
    documentsRequired: [
      "Applicant passport and Emirates ID",
      "Relevant certificates / evidence supporting the factual declaration"
    ],
    processSteps: [
      { step: "01", title: "Fact Finding", desc: "Understand the factual declaration and intended receiving authority." },
      { step: "02", title: "Legal Drafting", desc: "Drafting sworn affidavit with standardized legal declarations." },
      { step: "03", title: "Notary Oath", desc: "Deponent takes oath and signs before the Notary Public." },
      { step: "04", title: "Notarized Seal", desc: "Affidavit sealed and certified for immediate legal submission." }
    ],
    faqs: [
      {
        q: "How do I fix different spellings of my name on my passport and degrees in Dubai?",
        a: "You can execute a 'One and the Same Person' affidavit drafted by Smart Word and notarized at Dubai Courts, which legally confirms both names refer to the same individual."
      }
    ],
    relatedSlugs: ["acknowledgment-&-declaration", "notary-attestation", "sworn-translation"]
  },
  {
    id: "company-liquidation-resolution",
    slug: "company-liquidation-resolution",
    category: "notarization",
    title: "Company Liquidation Resolution in UAE",
    shortTitle: "Company Liquidation Resolution",
    tagline: "Official Shareholder Resolutions & Liquidator Appointments",
    description: "Closing or winding down a business in Dubai requires a formal Shareholder Resolution for Company Liquidation, appointing a registered liquidator and initiating the statutory notice period.",
    overview: "Smart Word drafts mandatory Liquidation Resolutions for Dubai Mainland (DET) and Freezone entities (JAFZA, DMCC, DAFZA, IFZA, etc.), ensuring proper wording to dissolve the legal entity, publish gazette notices, and obtain clearance letters.",
    features: [
      "Compliant with Dubai DET and Freezone closure procedures",
      "Appointment of certified UAE registered liquidator",
      "Notarization at Dubai Courts Notary Public",
      "Preparation of required creditor newspaper notice texts"
    ],
    targetAudience: [
      "Company partners dissolving an LLC or Freezone business",
      "Liquidators and audit firms executing formal corporate closures",
      "Shareholders restructuring group subsidiaries"
    ],
    documentsRequired: [
      "Valid Trade License copy and MOA",
      "Passports and Emirates IDs of all shareholders",
      "Liquidator acceptance letter and registration certificate"
    ],
    processSteps: [
      { step: "01", title: "Closure Assessment", desc: "Review company jurisdiction (Mainland vs Freezone) and requirements." },
      { step: "02", title: "Drafting Resolution", desc: "Drafting formal bilingual Liquidation Resolution." },
      { step: "03", title: "Notarization", desc: "Shareholders sign and notarize the resolution at Dubai Courts." },
      { step: "04", title: "Filing & Gazette", desc: "Ready for DET initial dissolution certificate and 45-day gazette ad." }
    ],
    faqs: [
      {
        q: "What happens after the liquidation resolution is notarized?",
        a: "The resolution is submitted to DET or the Freezone to receive an Initial Liquidation Certificate. A 45-day public advertisement period then runs for creditor claims before final cancellation."
      }
    ],
    relatedSlugs: ["board-resolution", "memorandum-of-association-moa", "minutes-of-meeting"]
  },
  {
    id: "husband-sponsorship-noc",
    slug: "husband-sponsorship-noc",
    category: "notarization",
    title: "Husband Sponsorship NOC in UAE",
    shortTitle: "Husband Sponsorship NOC",
    tagline: "Legal NOC Letters for Wife Sponsoring Husband / Children",
    description: "When an employed woman in Dubai sponsors her husband or children for UAE residency, or when a father provides consent for family visas, an officially drafted and notarized No Objection Certificate (NOC) is often required by GDRFA / ICP.",
    overview: "Smart Word drafts clear, legally approved Husband Sponsorship NOCs and Parental Consent NOCs adhering strictly to Dubai General Directorate of Residency and Foreigners Affairs (GDRFA) guidelines.",
    features: [
      "GDRFA and ICP immigration compliant wording",
      "Bilingual Arabic/English format",
      "Notarization coordination with Dubai Courts Notary Public",
      "Fast turnaround in 1-2 hours"
    ],
    targetAudience: [
      "Working women sponsoring their spouse or family members in Dubai",
      "Fathers granting consent for mothers to sponsor children",
      "Couples completing GDRFA residence visa applications"
    ],
    documentsRequired: [
      "Passports and Emirates IDs of husband and wife",
      "Attested marriage certificate and wife's salary certificate / MOHRE contract"
    ],
    processSteps: [
      { step: "01", title: "Document Review", desc: "Check salary contract and marital documentation." },
      { step: "02", title: "NOC Drafting", desc: "Draft bilingual NOC letter for GDRFA immigration." },
      { step: "03", title: "Signing & Notary", desc: "Sign before Notary Public if requested by immigration officer." },
      { step: "04", title: "Immigration Submission", desc: "Submit directly to Amer / GDRFA portal." }
    ],
    faqs: [
      {
        q: "Can a wife sponsor her husband in Dubai?",
        a: "Yes, subject to meeting GDRFA salary and profession requirements (such as holding a managerial, engineering, medical, or educational role and earning the minimum monthly salary threshold)."
      }
    ],
    relatedSlugs: ["no-objection-certificates-noc", "marriage-certificate-attestation", "salary-certificate-attestation"]
  },
  {
    id: "local-service-agent-agreement",
    slug: "local-service-agent-agreement",
    category: "notarization",
    title: "Local Service Agent Agreement UAE",
    shortTitle: "Local Service Agent (LSA) Agreement",
    tagline: "Professional Civil Business LSA Drafting & Notarization",
    description: "For professional licenses, civil companies, and foreign branch offices in the UAE mainland, appointing a UAE National as a Local Service Agent (LSA) requires a formal notarized agreement.",
    overview: "Smart Word drafts and notarizes protective LSA Agreements clearly outlining that the Local Service Agent holds zero equity, management, or financial liability, safeguarding 100% of the foreign investor's operational control and profits.",
    features: [
      "Protects 100% foreign investor ownership and financial rights",
      "Clearly defined annual fixed agent fee structures",
      "Compliant with Dubai DET and Dubai Courts Notary regulations",
      "Direct notary appointment and electronic execution"
    ],
    targetAudience: [
      "Foreign professionals setting up consultancies, clinics, or design agencies",
      "Multinational companies opening branch offices in Dubai",
      "Investors switching from traditional sponsorship to LSA structures"
    ],
    documentsRequired: [
      "DET Initial Approval and Trade Name certificate",
      "Foreign investor passport copies and UAE National Agent passport & Family Book copy"
    ],
    processSteps: [
      { step: "01", title: "Terms Agreement", desc: "Define annual fee and representation scope." },
      { step: "02", title: "Bilingual Drafting", desc: "Draft protective LSA contract in Arabic/English." },
      { step: "03", title: "Notarization", desc: "Sign with UAE National agent before Dubai Courts Notary." },
      { step: "04", title: "License Issuance", desc: "Submit to DET for commercial license issuance." }
    ],
    faqs: [
      {
        q: "Does the Local Service Agent have any ownership in my company?",
        a: "No. A Local Service Agent holds zero percentage of company shares and has no management role or financial liability. Their role is strictly administrative liaison with government authorities."
      }
    ],
    relatedSlugs: ["mainland-business-setup", "memorandum-of-association-moa", "partnership-agreement"]
  },
  {
    id: "no-objection-certificates-noc",
    slug: "no-objection-certificates-noc",
    category: "notarization",
    title: "No Objection Certificate (NOC) Services in UAE",
    shortTitle: "NOC Services",
    tagline: "Custom NOCs for Travel, Work, Driving License & Trade Licenses",
    description: "No Objection Certificates (NOCs) are standard legal letters required across UAE ministries, banks, employers, and immigration bodies to confirm permission for specific actions.",
    overview: "Smart Word prepares customized, legally sound NOCs for employer job changes, partner business activities, driving license applications, international child travel, and property renovations.",
    features: [
      "Tailored wording for specific UAE government entities (RTA, DLD, DET, GDRFA)",
      "Bilingual Arabic/English formatting",
      "Same-day drafting within 1 hour",
      "Notary swearing assistance where required"
    ],
    targetAudience: [
      "Employees seeking employer consent for secondary business licenses",
      "Parents authorizing international travel for minors",
      "Property tenants and landlords seeking developer NOCs"
    ],
    documentsRequired: ["Passports and Emirates IDs of issuer and recipient, purpose details"],
    processSteps: [
      { step: "01", title: "Determine Purpose", desc: "Select specific recipient entity (RTA, Employer, DLD)." },
      { step: "02", title: "Drafting", desc: "Draft formal bilingual letter." },
      { step: "03", title: "Signature & Stamping", desc: "Issuer signs and company stamps." },
      { step: "04", title: "Ready to Use", desc: "Delivered immediately in Word/PDF." }
    ],
    faqs: [
      {
        q: "Do all NOCs need to be notarized by Dubai Courts?",
        a: "Not all NOCs require court notarization; company letterhead with official seal is sufficient for many banking and employer procedures. For immigration and court matters, we assist with notary public stamping."
      }
    ],
    relatedSlugs: ["husband-sponsorship-noc", "affidavit-&-declaration", "power-of-attorney-poa"]
  },
  {
    id: "acknowledgment-&-declaration",
    slug: "acknowledgment-&-declaration",
    category: "notarization",
    title: "Notary & Translation Services in Dubai",
    shortTitle: "Acknowledgment & Declarations",
    tagline: "Official Acknowledgments of Debt, Settlement & Fact",
    description: "An Acknowledgment & Declaration is a formal legal instrument where an individual or corporate officer officially acknowledges a debt, financial settlement, receipt of payment, or legal obligation before the Notary Public.",
    overview: "Smart Word drafts and notarizes Acknowledgments of Debt, Settlement Agreements, and Release of Liability Declarations, providing incontestable proof of legal commitments in UAE Courts.",
    features: [
      "Legally binding acknowledgment of debts and payment plans",
      "Full waiver and discharge declarations upon final settlement",
      "Bilingual Arabic/English format matching court standards",
      "Notary Public execution in Dubai"
    ],
    targetAudience: [
      "Creditors and debtors establishing structured repayment plans",
      "Business partners settling disputes out of court",
      "Contractors confirming full and final payment receipts"
    ],
    documentsRequired: ["Passports and Emirates IDs of parties, proof of underlying transaction/debt"],
    processSteps: [
      { step: "01", title: "Terms Intake", desc: "Record settlement amount, schedule, and waivers." },
      { step: "02", title: "Legal Drafting", desc: "Drafting bilingual deed of acknowledgment." },
      { step: "03", title: "Notary Signing", desc: "Both parties sign before the Notary Public." },
      { step: "04", title: "Legal Security", desc: "Officially registered legal title enforceable in court." }
    ],
    faqs: [
      {
        q: "Is a notarized acknowledgment of debt enforceable in Dubai Courts without a lawsuit?",
        a: "Yes, a notarized acknowledgment of debt serves as an executive deed under UAE Civil Procedure Law, allowing expedited enforcement procedures."
      }
    ],
    relatedSlugs: ["loan-agreement-drafting-&-legalization", "affidavit-&-declaration", "legal-notice"]
  },
  {
    id: "declaration-of-cancelling",
    slug: "declaration-of-cancelling",
    category: "notarization",
    title: "POA Revocation & Cancellation in Dubai",
    shortTitle: "POA Revocation & Cancellation",
    tagline: "Formal Notary Revocation of Powers of Attorney",
    description: "When you no longer wish an agent, lawyer, or business partner to act on your behalf, a formal Declaration of POA Revocation must be notarized at Dubai Courts and officially served.",
    overview: "Smart Word assists with the drafting, notarization, and formal legal notification of Power of Attorney cancellations across Dubai Courts and other Emirates.",
    features: [
      "Immediate legal termination of agent's authority",
      "Registered in the Dubai Courts Notary electronic database",
      "Bilingual Arabic/English formal revocation notice",
      "Assistance with serving notice via Dubai Courts Bailiff / registered mail"
    ],
    targetAudience: [
      "Property owners changing real estate broker representatives",
      "Business owners terminating former managers' signing authority",
      "Individuals revoking general or special family POAs"
    ],
    documentsRequired: [
      "Copy of the original notarized Power of Attorney to be revoked",
      "Principal's Emirates ID and passport copy",
      "Agent's name and contact details for official service"
    ],
    processSteps: [
      { step: "01", title: "POA Verification", desc: "Locate original POA serial number and issuing notary." },
      { step: "02", title: "Drafting Revocation", desc: "Draft formal Declaration of Cancellation." },
      { step: "03", title: "Notary Execution", desc: "Principal signs revocation before Dubai Courts Notary." },
      { step: "04", title: "Legal Notification", desc: "Serve official copy to the revoked agent to prevent unauthorized use." }
    ],
    faqs: [
      {
        q: "Is a POA automatically cancelled when I sign a revocation?",
        a: "The revocation is registered in the court system immediately upon notary signing, but the principal must also legally notify the agent and relevant third parties (banks, DLD) to prevent unauthorized transactions."
      }
    ],
    relatedSlugs: ["power-of-attorney-poa", "legal-notice", "notary-attestation"]
  },
  {
    id: "will-and-testament",
    slug: "will-and-testament",
    category: "notarization",
    title: "Will & Testament Services Dubai",
    shortTitle: "Will & Testament Services",
    tagline: "DIFC & Dubai Courts Wills for Expatriates and Residents",
    description: "Registering a legally binding Will in Dubai ensures that your real estate, bank accounts, business shares, and guardianship of minor children are distributed strictly according to your personal wishes.",
    overview: "Smart Word provides end-to-end assistance with drafting and registering Non-Muslim Wills at the DIFC Wills Service Centre and Dubai Courts Notary Public. We ensure complete asset protection for expatriates in the UAE.",
    features: [
      "Full Property, Financial Assets, and Guardianship Wills",
      "DIFC Wills Service Centre and Dubai Courts registration support",
      "Single and Mirror Wills for married couples",
      "Compliant with UAE Federal Personal Status Law changes"
    ],
    targetAudience: [
      "Expatriate property owners and investors in Dubai and UAE",
      "Parents with minor children residing in the UAE",
      "Business owners with corporate shares and bank accounts in Dubai"
    ],
    documentsRequired: [
      "Testator and Executor passport and Emirates ID copies",
      "Title deeds, bank statements, and trade licenses of assets to include",
      "Guardians' passport copies for minor children"
    ],
    processSteps: [
      { step: "01", title: "Asset Inventory", desc: "Review real estate, shares, bank accounts, and guardianship wishes." },
      { step: "02", title: "Will Drafting", desc: "Legal drafting conforming to DIFC / Dubai Courts Will standards." },
      { step: "03", title: "Review & Approval", desc: "Testator reviews and finalizes clauses with our legal team." },
      { step: "04", title: "Registration", desc: "Official swearing and registration at DIFC or Dubai Courts." }
    ],
    faqs: [
      {
        q: "Why do expatriates need a registered Will in Dubai?",
        a: "Without a registered Will, local courts apply default statutory inheritance rules, which may freeze bank accounts and distribute real estate differently than you intended."
      }
    ],
    relatedSlugs: ["power-of-attorney-poa", "death-certificate-attestation", "affidavit-&-declaration"]
  },
  {
    id: "will-&-testament-services",
    slug: "will-&-testament-services",
    category: "notarization",
    title: "Will & Testament Legal Documentation UAE",
    shortTitle: "Will Legal Documentation",
    tagline: "Comprehensive Estate Planning & Guardianship Documents",
    description: "Ensure complete protection of your family and investments in the UAE through tailored estate planning and certified bilingual Will documentation.",
    overview: "Smart Word delivers comprehensive estate documentation, including Mirror Wills, Business Succession Plans, and Guardianship Declarations for expatriates and investors across all Emirates.",
    features: [
      "Mirror Wills for married couples",
      "Interim and permanent guardianship declarations for minors",
      "Corporate share succession planning",
      "Bilingual Arabic/English court-ready drafting"
    ],
    targetAudience: [
      "High net worth individuals and family offices",
      "Expatriate couples with young children",
      "Real estate portfolio investors"
    ],
    documentsRequired: ["Passports, Emirates IDs, asset schedule, and beneficiary details"],
    processSteps: [
      { step: "01", title: "Estate Planning", desc: "Structure asset distribution and guardianship." },
      { step: "02", title: "Bilingual Drafting", desc: "Draft legal Will according to court rules." },
      { step: "03", title: "Registration Liaison", desc: "Coordinate appointment with registry officers." },
      { step: "04", title: "Secure Custody", desc: "Receive certified registered copy." }
    ],
    faqs: [
      {
        q: "What is a Mirror Will?",
        a: "A Mirror Will allows spouses to create identical wills leaving assets to each other in the first instance, and then to children or named beneficiaries thereafter."
      }
    ],
    relatedSlugs: ["will-and-testament", "power-of-attorney-poa", "board-resolution"]
  },

  // ==========================================
  // DRAFTING SERVICES
  // ==========================================
  {
    id: "joint-venture-agreement",
    slug: "joint-venture-agreement",
    category: "drafting",
    title: "Joint Venture Agreement UAE",
    shortTitle: "Joint Venture Agreement",
    tagline: "Commercial JV Contracts & Strategic Partnership Agreements",
    description: "A Joint Venture (JV) Agreement governs the commercial relationship between two or more business entities collaborating on a specific project or forming a new joint venture in the UAE.",
    overview: "Smart Word drafts robust, bespoke Joint Venture Agreements tailored to UAE Federal Commercial Law. We cover capital contributions, governance, profit distribution, intellectual property rights, non-compete clauses, and dispute resolution via Dubai Courts or DIAC arbitration.",
    features: [
      "Detailed capital contribution and profit-sharing terms",
      "Management board composition and veto rights",
      "Clear exit mechanisms, deadlock resolution, and drag-along / tag-along rights",
      "Bilingual Arabic/English drafting ready for notarization"
    ],
    targetAudience: [
      "International companies partnering with local UAE businesses",
      "Real estate developers and construction joint ventures",
      "Tech startups and corporate investors co-launching products"
    ],
    documentsRequired: ["Trade licenses of participating entities, agreed term sheet or MOU, partner IDs"],
    processSteps: [
      { step: "01", title: "Term Sheet Analysis", desc: "Review commercial objectives, capital, and governance." },
      { step: "02", title: "Drafting Agreement", desc: "Draft comprehensive bilingual JV contract." },
      { step: "03", title: "Partner Review", desc: "Incorporate revisions and align all commercial terms." },
      { step: "04", title: "Execution", desc: "Ready for formal signing and notary execution." }
    ],
    faqs: [
      {
        q: "Can a Joint Venture Agreement be structured without forming a new company?",
        a: "Yes, an unincorporated (contractual) joint venture can be established via a detailed agreement without incorporating a separate legal entity, depending on project requirements."
      }
    ],
    relatedSlugs: ["partnership-agreement", "memorandum-of-association-moa", "board-resolution"]
  },
  {
    id: "legal-notice",
    slug: "legal-notice",
    category: "drafting",
    title: "Legal Notice Drafting Dubai",
    shortTitle: "Legal Notice Drafting",
    tagline: "Formal Pre-Litigation Demands & Breach of Contract Notices",
    description: "A formal Legal Notice is the mandatory first step before initiating commercial litigation, debt recovery, eviction proceedings, or breach of contract lawsuits in Dubai.",
    overview: "Smart Word drafts impactful, legally precise Legal Notices in bilingual Arabic and English. We formulate clear statements of facts, specify breach clauses, demand statutory remedies, set firm deadlines, and assist with formal service through Dubai Courts Notary / registered post.",
    features: [
      "Drafted in precise legal terminology conforming to UAE Civil Procedures",
      "Covers commercial breach, unpaid debt, tenancy eviction, and defamation",
      "Formal service via Dubai Courts Bailiff or registered mail",
      "High rate of pre-litigation amicable settlement"
    ],
    targetAudience: [
      "Creditors seeking recovery of unpaid commercial invoices or loans",
      "Landlords issuing statutory 12-month eviction or default notices",
      "Companies notifying partners or vendors of contract termination"
    ],
    documentsRequired: [
      "Underlying contract / invoice / bounced cheque / tenancy agreement",
      "Summary of defaults, timeline of communications, and debtor contact details"
    ],
    processSteps: [
      { step: "01", title: "Claim Assessment", desc: "Review evidence, contract terms, and statutory deadlines." },
      { step: "02", title: "Notice Drafting", desc: "Draft forceful legal notice in Arabic and English." },
      { step: "03", title: "Review & Sign", desc: "Client approves formal notice." },
      { step: "04", title: "Service & Delivery", desc: "Serve via Dubai Courts Notary or registered Aramex/DHL delivery." }
    ],
    faqs: [
      {
        q: "Why is an Arabic legal notice required before filing a court case in Dubai?",
        a: "Dubai Courts operates exclusively in Arabic. Serving a formal notice in Arabic provides unassailable proof of formal legal demand prior to filing a court petition."
      }
    ],
    relatedSlugs: ["loan-agreement-drafting-&-legalization", "rental-agreement-services", "acknowledgment-&-declaration"]
  },
  {
    id: "loan-agreement-drafting-&-legalization",
    slug: "loan-agreement-drafting-&-legalization",
    category: "drafting",
    title: "Loan Agreement Drafting & Legalization UAE",
    shortTitle: "Loan Agreement Drafting",
    tagline: "Corporate & Personal Loan Contracts with Notary Enforcement",
    description: "Lending money between corporate entities or individuals in the UAE requires a comprehensive, legally enforceable Loan Agreement with clear repayment terms and collateral provisions.",
    overview: "Smart Word drafts and legalizes Loan Agreements and Promissory Notes conforming to UAE Civil Code. We incorporate repayment schedules, interest provisions (where legally compliant), security pledges, default clauses, and notarization at Dubai Courts.",
    features: [
      "Watertight repayment schedules and default remedies",
      "Collateral, guarantee, and security pledge integration",
      "Dubai Courts Notary Public execution for direct enforceability",
      "Bilingual Arabic/English format"
    ],
    targetAudience: [
      "Companies extending shareholder or inter-company loans",
      "Individuals lending funds to business ventures or acquaintances",
      "Investors structuring convertible debt instruments"
    ],
    documentsRequired: [
      "Passports and Emirates IDs of Lender and Borrower",
      "Trade license copies (if corporate), bank details, and collateral documents"
    ],
    processSteps: [
      { step: "01", title: "Loan Terms Structure", desc: "Define principal amount, repayment milestones, and collateral." },
      { step: "02", title: "Drafting", desc: "Draft legal loan contract with default escalation terms." },
      { step: "03", title: "Notary Execution", desc: "Sign before Dubai Courts Notary Public." },
      { step: "04", title: "Enforceable Contract", desc: "Delivered ready for disbursement." }
    ],
    faqs: [
      {
        q: "How can I ensure my personal loan to someone in Dubai is legally recoverable?",
        a: "Having a bilingual Loan Agreement drafted by Smart Word and notarized at Dubai Courts creates an official executive deed that can be directly enforced through execution courts in case of default."
      }
    ],
    relatedSlugs: ["acknowledgment-&-declaration", "legal-notice", "partnership-agreement"]
  },
  {
    id: "partnership-agreement",
    slug: "partnership-agreement",
    category: "drafting",
    title: "Partnership Agreement UAE",
    shortTitle: "Partnership Agreement",
    tagline: "Commercial Partnership Deeds & Silent Partner Agreements",
    description: "A comprehensive Partnership Agreement clearly defines capital contributions, operational responsibilities, profit sharing, and exit terms between business partners in the UAE.",
    overview: "Smart Word drafts protective Partnership Deeds and Side Agreements for Mainland and Freezone companies. We protect minority and majority partners with clear dispute resolution, non-compete, and share buy-out valuations.",
    features: [
      "Customized profit/loss sharing ratios",
      "Clear day-to-day managerial duties and signing authority",
      "Dispute resolution and buy-sell deadlock provisions",
      "Bilingual Arabic/English formatting"
    ],
    targetAudience: [
      "Co-founders launching a new commercial business in Dubai",
      "Investors entering existing UAE operating companies",
      "Partners seeking written clarity on profit distribution"
    ],
    documentsRequired: [
      "Trade license / initial approval, partner IDs, and agreed commercial terms"
    ],
    processSteps: [
      { step: "01", title: "Partner Consultation", desc: "Align on equity, roles, capital, and dissolution terms." },
      { step: "02", title: "Deed Drafting", desc: "Draft bilingual legal partnership agreement." },
      { step: "03", title: "Review & Alignment", desc: "Finalize clauses with all partners." },
      { step: "04", title: "Signing & Execution", desc: "Ready for private execution or court notarization." }
    ],
    faqs: [
      {
        q: "What is the difference between an MOA and a Partnership Agreement?",
        a: "An MOA is the public statutory document registered with the government (DET), while a Partnership Agreement (or Side Agreement) can contain deeper internal operational, governance, and private commercial understandings between partners."
      }
    ],
    relatedSlugs: ["joint-venture-agreement", "memorandum-of-association-moa", "local-service-agent-agreement"]
  },
  {
    id: "rental-agreement-services",
    slug: "rental-agreement-services",
    category: "drafting",
    title: "Rental Agreement & Tenancy Contract Services in Dubai, UAE",
    shortTitle: "Tenancy & Rental Agreement",
    tagline: "Ejari-Compliant Commercial & Residential Tenancy Contracts",
    description: "Drafting clear commercial leases, warehouse agreements, office sub-leases, and residential tenancy contracts protects landlords and tenants from disputes under Dubai Real Estate Regulatory Agency (RERA) Law.",
    overview: "Smart Word drafts detailed commercial and residential tenancy addendums, maintenance obligations, subleasing terms, security deposit rules, and termination clauses compliant with Dubai RERA guidelines and Ejari registration.",
    features: [
      "Fully compliant with Dubai RERA Law (Law No. 26 of 2007 & Law No. 33 of 2008)",
      "Specialized terms for commercial warehouses, retail shops, and offices",
      "Clear maintenance liability and fit-out period clauses",
      "Bilingual Arabic and English format"
    ],
    targetAudience: [
      "Commercial landlords leasing retail spaces, buildings, or warehouses",
      "Tenants negotiating corporate office leases in Dubai",
      "Property management companies standardizing lease contracts"
    ],
    documentsRequired: [
      "Title Deed / affection plan, Landlord passport/Emirates ID, Tenant trade license/Emirates ID"
    ],
    processSteps: [
      { step: "01", title: "Property & Lease Review", desc: "Inspect Title Deed and commercial terms (rent, cheques, fit-out)." },
      { step: "02", title: "Addendum Drafting", desc: "Draft comprehensive bilingual tenancy contract addendum." },
      { step: "03", title: "RERA Compliance Check", desc: "Ensure compliance with Dubai rental caps and notice periods." },
      { step: "04", title: "Execution Ready", desc: "Ready for Ejari registration." }
    ],
    faqs: [
      {
        q: "Why is a custom addendum recommended alongside the standard unified Ejari contract?",
        a: "The standard Ejari contract contains basic terms; a custom bilingual addendum covers vital details like fit-out conditions, maintenance liability caps, sub-leasing rights, and penalty clauses."
      }
    ],
    relatedSlugs: ["legal-notice", "power-of-attorney-poa", "joint-venture-agreement"]
  },

  // ==========================================
  // BUSINESS SETUP SERVICES
  // ==========================================
  {
    id: "freezone-business-setup",
    slug: "freezone-business-setup",
    category: "business-setup",
    title: "Freezone Business Setup",
    shortTitle: "Freezone Business Setup",
    tagline: "100% Foreign Ownership, 0% Corporate Tax Incentives & Easy Licensing",
    description: "UAE Freezones offer 100% foreign ownership, zero customs duties within the zone, 100% repatriation of capital and profits, and streamlined company registration.",
    overview: "Smart Word assists international entrepreneurs and startups in choosing the right UAE Freezone (IFZA, DMCC, Meydan, Dubai South, DAFZA, Shams, RAKEZ, etc.), securing trade licenses, residency visas, and corporate banking.",
    features: [
      "100% foreign ownership with no local sponsor required",
      "Selection of top Freezones based on business activity and budget",
      "Fast-track licensing in 2 to 5 working days",
      "Complete package: license, lease agreement, establishment card, and investor visas"
    ],
    targetAudience: [
      "E-commerce, consulting, IT, and media entrepreneurs",
      "International businesses wanting regional hubs in Dubai",
      "Remote founders seeking UAE tax residency and Golden Visas"
    ],
    documentsRequired: [
      "Passport copies of shareholders and managers",
      "Passport size photos (white background)",
      "Three proposed company name options"
    ],
    processSteps: [
      { step: "01", title: "Freezone Selection", desc: "Select optimal freezone based on budget, visa quota, and activities." },
      { step: "02", title: "Name & Initial Approval", desc: "Reserve company name and submit security clearance." },
      { step: "03", title: "License Issuance", desc: "Sign digital incorporation forms and receive Trade License." },
      { step: "04", title: "Visas & Bank Account", desc: "Process investor visas and corporate bank account." }
    ],
    faqs: [
      {
        q: "Can a Freezone company do business in the UAE mainland?",
        a: "Freezone companies can trade globally, conduct B2B transactions with mainland companies, or sell goods in the mainland via local distributors or mainland branches."
      }
    ],
    relatedSlugs: ["mainland-business-setup", "offshore-business-setup", "open-company-bank-account"]
  },
  {
    id: "mainland-business-setup",
    slug: "mainland-business-setup",
    category: "business-setup",
    title: "Mainland Business Setup",
    shortTitle: "Mainland Business Setup",
    tagline: "Trade Directly Across UAE & Bid for Government Tenders",
    description: "A Dubai Mainland license (Department of Economy and Tourism - DET) allows you to trade freely anywhere across the UAE, open offices anywhere, and bid on lucrative government contracts.",
    overview: "With recent UAE law reforms allowing 100% foreign ownership for over 1,000 commercial and industrial activities, Smart Word makes mainland company incorporation seamless, from initial approval and MOA drafting to physical office leasing and corporate banking.",
    features: [
      "100% foreign ownership for eligible commercial and industrial activities",
      "No territorial restrictions on trading inside Dubai and across the UAE",
      "Eligibility for UAE government and semi-government tenders",
      "Unlimited employment visa allocation based on office size"
    ],
    targetAudience: [
      "Retail shops, restaurants, construction firms, and logistics operators",
      "Companies bidding on government and municipal tenders",
      "Enterprises requiring large physical offices and warehouse networks"
    ],
    documentsRequired: [
      "Shareholders' passport copies and Emirates IDs (if resident)",
      "Three company name options",
      "Ejari tenancy contract for physical office / business center"
    ],
    processSteps: [
      { step: "01", title: "Activity & Name Approval", desc: "Select DET business activities and reserve trade name." },
      { step: "02", title: "MOA Drafting & Signing", desc: "Draft bilingual MOA and execute via Dubai Courts Notary." },
      { step: "03", title: "Office Ejari", desc: "Lease office space and register Ejari tenancy contract." },
      { step: "04", title: "Commercial License", desc: "DET issues Trade License with immediate visa processing." }
    ],
    faqs: [
      {
        q: "Do I still need a 51% UAE national partner for mainland business setup?",
        a: "For the vast majority of commercial and trading activities, 100% foreign ownership is now permitted without needing a 51% local partner."
      }
    ],
    relatedSlugs: ["memorandum-of-association-moa", "local-service-agent-agreement", "freezone-business-setup", "open-company-bank-account"]
  },
  {
    id: "offshore-business-setup",
    slug: "offshore-business-setup",
    category: "business-setup",
    title: "Offshore Business Setup",
    shortTitle: "Offshore Business Setup",
    tagline: "International Asset Protection, Holding Companies & Confidentiality",
    description: "UAE Offshore companies (such as JAFZA Offshore and RAK ICC) are ideal vehicles for holding international assets, real estate in Dubai, intellectual property, and conducting global trade with zero local taxes.",
    overview: "Smart Word provides registered agent services for JAFZA and RAK ICC offshore formations. We ensure complete confidentiality, fast structuring, and compliant multi-jurisdictional holding company setups.",
    features: [
      "100% foreign ownership with complete privacy of shareholding",
      "Permitted to hold freehold real estate properties in Dubai",
      "No requirement for physical office space in the UAE",
      "Zero corporate tax and zero capital requirements"
    ],
    targetAudience: [
      "High net worth individuals holding international assets and real estate",
      "Multinational groups structuring holding company pyramids",
      "International traders conducting cross-border commerce"
    ],
    documentsRequired: [
      "Shareholder passport copies, proof of address (utility bill), bank reference letter, CV"
    ],
    processSteps: [
      { step: "01", title: "Structure Consultation", desc: "Choose between JAFZA Offshore and RAK ICC." },
      { step: "02", title: "Due Diligence", desc: "Collect KYC documents and shareholder verification." },
      { step: "03", title: "Incorporation", desc: "Submit Articles of Association to the offshore registry." },
      { step: "04", title: "Certificate of Incorporation", desc: "Receive official Certificate of Incorporation and share certificates." }
    ],
    faqs: [
      {
        q: "Can a UAE Offshore company hold real estate in Dubai?",
        a: "Yes, JAFZA Offshore and RAK ICC companies with designated Land Department approvals are legally authorized to own freehold real estate in Dubai."
      }
    ],
    relatedSlugs: ["freezone-business-setup", "open-company-bank-account", "will-and-testament"]
  },
  {
    id: "open-company-bank-account",
    slug: "open-company-bank-account",
    category: "business-setup",
    title: "Open Company Bank Account",
    shortTitle: "Corporate Bank Account Opening",
    tagline: "Corporate Banking Assistance with Leading UAE Banks",
    description: "Opening a corporate bank account in the UAE is essential for commercial operations, but requires navigating stringent KYC, AML compliance, and document verification standards.",
    overview: "Smart Word assists newly incorporated and existing UAE companies with corporate bank account opening across major Tier-1 and digital UAE banks (Emirates NBD, Mashreq, Wio, FAB, ADCB, RAKBANK). We ensure all corporate documents, business plans, and invoices are compliance-ready.",
    features: [
      "Direct introductions to dedicated corporate relationship managers",
      "Comprehensive KYC file and business profile preparation",
      "Multi-currency accounts (AED, USD, EUR, GBP)",
      "High success rate through pre-screening compliance checks"
    ],
    targetAudience: [
      "Newly registered Mainland and Freezone companies",
      "Foreign companies opening subsidiary accounts in Dubai",
      "Entrepreneurs requiring digital and traditional banking solutions"
    ],
    documentsRequired: [
      "Valid UAE Trade License, MOA, and Share Certificate",
      "Emirates ID and passport with UAE entry stamp of signatories",
      "6-month personal/company bank statements, business profile, and sample supplier invoices"
    ],
    processSteps: [
      { step: "01", title: "Banking Assessment", desc: "Review company activities and choose suitable bank partner." },
      { step: "02", title: "File Preparation", desc: "Assemble attested corporate documents, CVs, and business profile." },
      { step: "03", title: "Bank Application Meeting", desc: "Liaison with banker for physical or digital KYC interview." },
      { step: "04", title: "Account Activation", desc: "Receive IBAN, online banking tokens, and debit cards." }
    ],
    faqs: [
      {
        q: "How long does it take to open a corporate bank account in the UAE?",
        a: "Digital business banks (such as Wio or Mashreq NeoBiz) can open accounts in 3-5 working days. Traditional Tier-1 banks typically take 2-4 weeks depending on shareholder background and document verification."
      }
    ],
    relatedSlugs: ["mainland-business-setup", "freezone-business-setup", "board-resolution", "true-copy-attestation"]
  },

  // ==========================================
  // EMIRATI PENSION SERVICES (GPSSA)
  // ==========================================
  {
    id: "employer-registration-with-gpssa",
    slug: "employer-registration-with-gpssa",
    category: "emirati-pension",
    title: "GPSSA Employer Registration UAE",
    shortTitle: "GPSSA Employer Registration",
    tagline: "Mandatory UAE Pension Authority Registration for Companies",
    description: "Any private or public entity in the UAE that employs UAE National (Emirati) workers is legally mandated to register with the General Pension and Social Security Authority (GPSSA).",
    overview: "Smart Word guides UAE employers through the entire GPSSA registration process, setting up official company portal profiles, obtaining establishment pension codes, and ensuring compliance with UAE Federal Pension Law.",
    features: [
      "Complete establishment file setup with GPSSA",
      "Avoid statutory fines and Nafis compliance penalties",
      "Direct integration with monthly contribution systems",
      "Expert assistance for Mainland and Freezone employers"
    ],
    targetAudience: [
      "Companies hiring UAE national employees under Nafis Emiratisation quotas",
      "HR Directors and payroll managers in Dubai and the Northern Emirates",
      "Newly established entities onboarding national talent"
    ],
    documentsRequired: [
      "Valid Trade License and Commercial Register",
      "Memorandum of Association (MOA) / Authorized Signatory power",
      "Company bank account details (IBAN) and establishment card"
    ],
    processSteps: [
      { step: "01", title: "Employer File Review", desc: "Verify trade license and establishment card records." },
      { step: "02", title: "GPSSA Portal Filing", desc: "Register company profile on the official GPSSA portal." },
      { step: "03", title: "Verification & Approval", desc: "Submit authorized signatory credentials and obtain Pension ID." },
      { step: "04", title: "System Activation", desc: "Company activated to enroll Emirati employees and pay contributions." }
    ],
    faqs: [
      {
        q: "Is GPSSA registration mandatory if I only have one Emirati employee?",
        a: "Yes. The law requires mandatory GPSSA registration within one month of hiring any UAE National employee."
      }
    ],
    relatedSlugs: ["registration-of-new-emirati-employees", "monthly-contribution-proforma-creation", "cancel-employer-registration"]
  },
  {
    id: "registration-of-new-emirati-employees",
    slug: "registration-of-new-emirati-employees",
    category: "emirati-pension",
    title: "Register New Emirati Employees with GPSSA",
    shortTitle: "Register Emirati Employees",
    tagline: "National Employee Onboarding & Pension Enrollment",
    description: "Employers must register newly hired UAE National employees with the GPSSA within thirty (30) days of their employment start date.",
    overview: "Smart Word handles all paperwork and portal submissions for enrolling Emirati professionals into the pension system, verifying MOHRE contracts, salary breakdowns, and social security numbers.",
    features: [
      "Fast 30-day statutory enrollment compliance",
      "Accurate calculation of pensionable contributory salary",
      "Alignment with MOHRE employment contracts and Nafis benefits",
      "Confirmation receipt and employee pension registration card"
    ],
    targetAudience: [
      "HR teams onboarding UAE National staff",
      "Emiratis seeking official verification of active pension enrollment",
      "Companies fulfilling Ministry of Human Resources (MOHRE) Emiratisation mandates"
    ],
    documentsRequired: [
      "Employee Emirates ID, Passport, and Family Book (Khulasat Al Qaid)",
      "MOHRE registered employment contract",
      "Educational qualification certificate"
    ],
    processSteps: [
      { step: "01", title: "Contract Audit", desc: "Verify gross salary and basic salary + allowances breakdown." },
      { step: "02", title: "Employee Enrollment", desc: "Submit employee dossier to GPSSA electronic portal." },
      { step: "03", title: "Validation", desc: "GPSSA verifies citizenship and social security eligibility." },
      { step: "04", title: "Active Status", desc: "Employee linked to company pension roster." }
    ],
    faqs: [
      {
        q: "What is the deadline for registering an Emirati employee with GPSSA?",
        a: "The employer must complete registration within 30 days from the date the employee joins the organization."
      }
    ],
    relatedSlugs: ["employer-registration-with-gpssa", "monthly-contribution-proforma-creation", "update-of-employee-data-&-employment-status"]
  },
  {
    id: "monthly-contribution-proforma-creation",
    slug: "monthly-contribution-proforma-creation",
    category: "emirati-pension",
    title: "Monthly Contribution Proforma UAE",
    shortTitle: "Monthly Contribution Proforma",
    tagline: "Monthly Pension Calculation, Filing & Payment Guidance",
    description: "Every month, employers must calculate and transfer the correct pension contributions (employer share + employee share) to the GPSSA.",
    overview: "Smart Word generates accurate monthly contribution proformas, reconciling monthly payroll changes, salary adjustments, and new additions, ensuring zero late payment penalties.",
    features: [
      "Precise calculation of statutory percentage contributions",
      "Reconciliation of payroll changes and allowances",
      "Generation of official GPSSA payment advice and proformas",
      "Protection against monthly delay fines"
    ],
    targetAudience: [
      "Payroll departments and accountants in private firms",
      "HR managers managing expanding Emirati workforce rosters"
    ],
    documentsRequired: ["Monthly payroll sheet, list of active Emirati employees, salary changes"],
    processSteps: [
      { step: "01", title: "Payroll Ingestion", desc: "Reconcile monthly contributory salary figures." },
      { step: "02", title: "Proforma Generation", desc: "Calculate employer (12.5% or 15%) and employee (5% or 11%) shares." },
      { step: "03", title: "GPSSA Upload", desc: "Submit proforma to GPSSA system and generate payment bill." },
      { step: "04", title: "Settlement Proof", desc: "Provide confirmation of compliant payment." }
    ],
    faqs: [
      {
        q: "When must monthly GPSSA pension contributions be paid?",
        a: "Contributions must be paid within the first 15 days of the month following the due month to avoid late interest charges."
      }
    ],
    relatedSlugs: ["legacy-contribution-proforma-creation", "employer-registration-with-gpssa", "update-of-employee-data-&-employment-status"]
  },
  {
    id: "legacy-contribution-proforma-creation",
    slug: "legacy-contribution-proforma-creation",
    category: "emirati-pension",
    title: "Legacy Contribution Proforma Services UAE",
    shortTitle: "Legacy Contribution Proforma",
    tagline: "Historical Pension Arrears Calculation & Settlement Plans",
    description: "When a company has delayed or missed historical pension contributions for Emirati staff, a Legacy Contribution Proforma is required to audit arrears and settle dues with GPSSA.",
    overview: "Smart Word conducts comprehensive historical payroll audits, liaises with GPSSA auditors, drafts legacy settlement schedules, and helps companies eliminate or mitigate accumulated penalty fines.",
    features: [
      "Comprehensive retroactive salary and contribution audit",
      "Negotiation and alignment on installment settlement plans",
      "Penalty recalculation and waiver petition assistance",
      "Formal clearance certificate issuance upon payment"
    ],
    targetAudience: [
      "Companies with historical unfiled pension contributions",
      "Enterprises undergoing GPSSA corporate audits",
      "Firms clearing liabilities before merger or acquisition"
    ],
    documentsRequired: [
      "Historical payroll records, bank salary transfer (WPS) statements, past employment contracts"
    ],
    processSteps: [
      { step: "01", title: "Historical Audit", desc: "Review retroactive periods and salary data." },
      { step: "02", title: "Legacy Calculations", desc: "Calculate exact principal contributions and statutory interest." },
      { step: "03", title: "GPSSA Reconciliation", desc: "Submit legacy proforma to GPSSA audit committee." },
      { step: "04", title: "Settlement & Clearance", desc: "Complete payment and receive official clean status." }
    ],
    faqs: [
      {
        q: "Can past unpaid pension penalties be reduced or waived?",
        a: "With a properly audited legacy submission and formal justification petition, GPSSA may review and facilitate structured settlement plans."
      }
    ],
    relatedSlugs: ["monthly-contribution-proforma-creation", "employer-registration-with-gpssa", "update-of-employee-data-&-employment-status"]
  },
  {
    id: "update-of-employee-data-&-employment-status",
    slug: "update-of-employee-data-&-employment-status",
    category: "emirati-pension",
    title: "Update Employee Data & Employment Status",
    shortTitle: "Update Employee Data",
    tagline: "Salary Amendments, Role Promotions & Status Updates",
    description: "Whenever an Emirati employee's salary changes, promotion occurs, or family/marital details update, the changes must be officially registered on the GPSSA portal.",
    overview: "Smart Word manages seamless updates to employee profiles, salary revisions, job title amendments, and maternity or educational leaves in full compliance with GPSSA regulations.",
    features: [
      "Annual salary review adjustments on GPSSA portal",
      "Job role and title amendments aligned with MOHRE contracts",
      "Unpaid leave and career break reporting",
      "Family data and marital status updates"
    ],
    targetAudience: [
      "Corporate HR managers during annual appraisal and promotion cycles",
      "Emirati employees ensuring their future pension calculations reflect current salaries"
    ],
    documentsRequired: [
      "Updated MOHRE contract / internal promotion letter, revised salary breakdown, employee ID"
    ],
    processSteps: [
      { step: "01", title: "Review Change", desc: "Check updated employment contract and effective date." },
      { step: "02", title: "Portal Update", desc: "Submit amendment on the GPSSA employer portal." },
      { step: "03", title: "Verification", desc: "Upload supporting documentation." },
      { step: "04", title: "Confirmation", desc: "Receive updated record confirmation from GPSSA." }
    ],
    faqs: [
      {
        q: "When should annual salary increments be reported to GPSSA?",
        a: "Under GPSSA rules, regular annual salary increases implemented in January should be updated in the system during the designated January adjustment window."
      }
    ],
    relatedSlugs: ["monthly-contribution-proforma-creation", "registration-of-new-emirati-employees", "pension-end-of-service-application"]
  },
  {
    id: "pension-end-of-service-application",
    slug: "pension-end-of-service-application",
    category: "emirati-pension",
    title: "Top Pension Services in Dubai",
    shortTitle: "End of Service Application",
    tagline: "Official End of Service, Retirement & Gratuity Filing",
    description: "When an Emirati employee resigns, retires, or is terminated, the employer must submit a formal End of Service application to GPSSA within thirty (30) days.",
    overview: "Smart Word prepares complete End of Service dossiers, calculating final service durations, verifying contribution clearance, and submitting the official EOS application to ensure the employee receives their monthly retirement pension or lump-sum gratuity without delay.",
    features: [
      "Fast 30-day statutory End of Service deregistration",
      "Calculation of service years and entitlement eligibility",
      "Issuance of official GPSSA Service Clearance Certificate",
      "Assistance with transfer of pension files between government and private entities"
    ],
    targetAudience: [
      "Companies completing exit procedures for departing Emirati personnel",
      "Emirati professionals transitioning to retirement or new roles"
    ],
    documentsRequired: [
      "Resignation letter / termination notice, final settlement sheet, MOHRE work permit cancellation"
    ],
    processSteps: [
      { step: "01", title: "Exit File Review", desc: "Review end of service date, reason for exit, and last working day." },
      { step: "02", title: "EOS Application", desc: "File End of Service application on the GPSSA portal." },
      { step: "03", title: "Contribution Reconciliation", desc: "Verify all contributions up to the last working day are paid." },
      { step: "04", title: "Clearance Issuance", desc: "GPSSA approves exit and processes retirement pension or gratuity payout." }
    ],
    faqs: [
      {
        q: "How does GPSSA determine if an employee gets a monthly pension or a lump sum?",
        a: "It depends on the number of completed contributory service years and age criteria set by UAE Federal Pension Law (typically minimum 15 to 20 years for monthly pension entitlement)."
      }
    ],
    relatedSlugs: ["request-for-pension-certificate", "cancel-employer-registration", "monthly-contribution-proforma-creation"]
  },
  {
    id: "request-for-pension-certificate",
    slug: "request-for-pension-certificate",
    category: "emirati-pension",
    title: "Request Pension Certificate Online",
    shortTitle: "Request Pension Certificate",
    tagline: "Official GPSSA Pension Statements & Contribution Certificates",
    description: "Official GPSSA Pension Certificates are required for housing loans, bank finance, judicial matters, and verifying accumulated service years.",
    overview: "Smart Word assists national employees and retirees in obtaining official, digitally verified GPSSA Pension Certificates, Salary Statements, and Contribution Records.",
    features: [
      "Official GPSSA digital certificate with QR verification",
      "Accepted by all UAE banks, courts, and housing loan programs",
      "Detailed statement of accumulated contributory months and salaries",
      "Fast processing within 24 to 48 hours"
    ],
    targetAudience: [
      "Emirati citizens applying for bank mortgages or personal loans",
      "Retirees verifying active pension disbursement records",
      "Individuals applying for government housing grants (Sheikh Zayed Housing)"
    ],
    documentsRequired: ["Emirates ID copy and UAE Pass access authorization"],
    processSteps: [
      { step: "01", title: "Identify Requirement", desc: "Determine specific certificate type (Salary Certificate, Service Statement)." },
      { step: "02", title: "Portal Request", desc: "Submit request on GPSSA system." },
      { step: "03", title: "Authentication", desc: "Verify identity via UAE Pass." },
      { step: "04", title: "Certificate Delivery", desc: "Deliver official PDF with digital QR code." }
    ],
    faqs: [
      {
        q: "Are GPSSA certificates recognized by UAE banks for loan approval?",
        a: "Yes, official GPSSA Pension Certificates with QR codes are universally accepted by all UAE banks as proof of verified income and service."
      }
    ],
    relatedSlugs: ["pension-end-of-service-application", "update-of-employee-data-&-employment-status", "true-copy-attestation"]
  },
  {
    id: "cancel-employer-registration",
    slug: "cancel-employer-registration",
    category: "emirati-pension",
    title: "GPSSA Employer Registration Cancellation UAE",
    shortTitle: "Cancel Employer Registration",
    tagline: "Company Closure & GPSSA File Cancellation Clearance",
    description: "When a company ceases operations, liquidates, or transitions out of hiring national employees, the employer file with GPSSA must be formally closed to avoid ongoing administrative penalties.",
    overview: "Smart Word audits final pension accounts, verifies that all Emirati employees have received formal EOS clearances, submits the deregistration file to GPSSA, and secures the final GPSSA Clearance Certificate required to finalize company license cancellation with the DET or Freezone.",
    features: [
      "Full audit of historical contributions prior to closure",
      "Official GPSSA No Liability / Clearance Certificate",
      "Mandatory requirement for complete trade license cancellation",
      "Smooth coordination with liquidation procedures"
    ],
    targetAudience: [
      "Companies undergoing formal trade license cancellation in the UAE",
      "Liquidators and legal advisors completing corporate dissolution"
    ],
    documentsRequired: [
      "Trade license cancellation initial approval / liquidation resolution",
      "Proof that all Emirati staff have had End of Service completed",
      "Authorized signatory Emirates ID and letter of request"
    ],
    processSteps: [
      { step: "01", title: "Final Account Audit", desc: "Verify all employee accounts are closed with zero balance." },
      { step: "02", title: "Cancellation Petition", desc: "Submit formal file cancellation request to GPSSA." },
      { step: "03", title: "Inspection & Approval", desc: "GPSSA reviews and releases file." },
      { step: "04", title: "Clearance Certificate", desc: "Receive official GPSSA clearance for DET license cancellation." }
    ],
    faqs: [
      {
        q: "Can I cancel my Dubai trade license without cancelling my GPSSA file?",
        a: "No. If your company ever registered with GPSSA, Dubai DET and Freezones require an official GPSSA Clearance Certificate before granting final trade license cancellation."
      }
    ],
    relatedSlugs: ["company-liquidation-resolution", "employer-registration-with-gpssa", "pension-end-of-service-application"]
  }
];

// Helper functions for easy lookup across components
export const getServiceBySlug = (slug) => {
  if (!slug) return null;
  const cleanSlug = decodeURIComponent(slug).toLowerCase().replace(/\/$/, '');
  const directMatch = allServices.find(s => s.slug === cleanSlug || s.id === cleanSlug);
  if (directMatch) return directMatch;
  
  // Try normalizing & and multiple hyphens
  const normalized = cleanSlug.replace(/&/g, '').replace(/--+/g, '-').replace(/^-|-$/g, '');
  return allServices.find(s => {
    const sNorm = s.slug.replace(/&/g, '').replace(/--+/g, '-').replace(/^-|-$/g, '');
    return sNorm === normalized || s.slug === cleanSlug || s.id === cleanSlug;
  });
};

export const getServicesByCategory = (category) => {
  return allServices.filter(s => s.category === category);
};

export const getCategoryMeta = (categoryId) => {
  return serviceCategories.find(c => c.id === categoryId || c.slug === categoryId);
};

// Languages supported by Smart Word UAE
// Curated list highlighting major language capabilities with native typography

export const supportedLanguages = [
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇦🇪", region: "Middle East & North Africa", featured: true, description: "Official UAE government, court, and MOJ sworn legal translation language." },
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", region: "Global / Business", featured: true, description: "Primary international commercial and corporate documentation language." },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", region: "Europe & Africa", featured: true, description: "Legal and certified translations for European, Canadian & African embassies." },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", region: "Eastern Europe & CIS", featured: true, description: "High-demand certified translations for UAE investment, real estate & visas." },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", region: "Europe & Americas", featured: true, description: "Commercial and personal certificate translations for Latin America and Spain." },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", region: "Central Europe", featured: true, description: "Precision technical, engineering, and German consulate attestations." },
  { code: "zh", name: "Chinese (Mandarin)", nativeName: "中文 (简体)", flag: "🇨🇳", region: "East Asia", featured: true, description: "Trade contracts, corporate statutes, and Chinese embassy notarizations." },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", region: "South Asia", featured: true, description: "Affidavits, Indian certificates, and consular documentation." },
  { code: "ur", name: "Urdu", nativeName: "اردو", flag: "🇵🇰", region: "South Asia", featured: true, description: "Pakistani diplomas, marriage certificates, and legal affidavits." },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", region: "Southern Europe", featured: false, description: "Commercial, luxury, and consular document translations." },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹", region: "Europe & South America", featured: false, description: "Official documentation for Brazilian and Portuguese consular filings." },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", region: "East Asia", featured: false, description: "Automotive, industrial, and official Japanese corporate filings." },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷", region: "Eurasia", featured: false, description: "Commercial agreements and Turkish embassy legalizations in the UAE." },
  { code: "fa", name: "Farsi / Persian", nativeName: "فارسی", flag: "🇮🇷", region: "Middle East", featured: false, description: "Certified translations for personal records and regional commerce." },
  { code: "tl", name: "Tagalog", nativeName: "Filipino", flag: "🇵🇭", region: "Southeast Asia", featured: false, description: "Philippine consular records, diplomas, and employment contracts." },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "🇧🇩", region: "South Asia", featured: false, description: "Educational certificates and civil status documents." }
];

export const commonLanguagePairs = [
  { from: "English", to: "Arabic", popular: true, note: "Mandatory for UAE Courts & Ministries" },
  { from: "Arabic", to: "English", popular: true, note: "Standard for Global & Banking Submissions" },
  { from: "Russian", to: "Arabic", popular: true, note: "Popular for Dubai Property & Visas" },
  { from: "French", to: "Arabic", popular: true, note: "Accepted by MOFA & GCC Embassies" },
  { from: "German", to: "Arabic", popular: true, note: "Technical & Legal Precision" },
  { from: "Chinese", to: "English / Arabic", popular: true, note: "Corporate & Trade Documentation" }
];

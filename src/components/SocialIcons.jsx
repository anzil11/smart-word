import React from 'react';

export const FacebookIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

export const InstagramIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

export const LinkedInIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path fillRule="evenodd" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd" />
  </svg>
);

export const TwitterXIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const WhatsAppIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path fillRule="evenodd" d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.844.5 3.57 1.373 5.064L2 22l5.086-1.334a9.96 9.96 0 0 0 4.918 1.298h.004c5.524 0 10.004-4.48 10.004-10.004C22.012 6.48 17.528 2 12.004 2zm5.836 14.28c-.244.688-1.42 1.32-1.956 1.37-.506.046-1.162.066-3.753-1.008-3.118-1.292-5.11-4.482-5.266-4.69-.15-.208-1.254-1.67-1.254-3.186 0-1.516.79-2.26 1.074-2.55.283-.29.62-.363.828-.363.208 0 .416.002.598.012.193.01.452-.073.707.54.26.623.884 2.158.962 2.314.078.156.13.338.026.545-.104.208-.156.338-.312.52-.156.182-.328.406-.468.546-.156.155-.318.323-.136.634.182.312.81 1.336 1.737 2.16 1.192 1.06 2.197 1.39 2.51 1.545.312.156.494.13.676-.078.182-.208.78-9.08.988-1.22.208-.312.416-.26.702-.156.286.104 1.82.858 2.132 1.014.312.156.52.234.598.364.078.13.078.754-.166 1.442z" clipRule="evenodd" />
  </svg>
);

export const YouTubeIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
  </svg>
);

export const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterXIcon,
  x: TwitterXIcon,
  whatsapp: WhatsAppIcon,
  youtube: YouTubeIcon
};

export default function SocialLinks({ links, className = "flex items-center gap-2", iconSize = "w-4 h-4", variant = "default" }) {
  if (!links || !links.length) return null;

  const getVariantStyles = (key) => {
    switch (variant) {
      case "dark":
        return "bg-slate-900 hover:bg-brand-600 text-slate-400 hover:text-white border border-slate-800 shadow-sm";
      case "brand":
        return "bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white border border-brand-200 shadow-subtle";
      case "light":
        return "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200";
      case "color":
        switch (key) {
          case 'facebook':
            return 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white border-blue-200';
          case 'instagram':
            return 'bg-pink-50 text-pink-600 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white border-pink-200';
          case 'linkedin':
            return 'bg-sky-50 text-sky-700 hover:bg-sky-700 hover:text-white border-sky-200';
          case 'twitter':
          case 'x':
            return 'bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white border-slate-300';
          case 'whatsapp':
            return 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white border-emerald-200';
          case 'youtube':
            return 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white border-red-200';
          default:
            return 'bg-slate-100 text-slate-700 hover:bg-brand-600 hover:text-white border-slate-200';
        }
      case "default":
      default:
        return "bg-white hover:bg-brand-50 text-slate-600 hover:text-brand-700 border border-slate-200 shadow-subtle";
    }
  };

  return (
    <div className={className}>
      {links.map((social) => {
        const Icon = socialIconMap[social.key?.toLowerCase()] || socialIconMap[social.name?.toLowerCase()] || FacebookIcon;
        return (
          <a
            key={social.key || social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow Smart Word on ${social.name}`}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-500 ${getVariantStyles(social.key?.toLowerCase())}`}
            title={social.name}
          >
            <Icon className={iconSize} />
          </a>
        );
      })}
    </div>
  );
}

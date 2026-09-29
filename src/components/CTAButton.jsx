import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const MotionLink = motion.create(Link);

export default function CTAButton({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  icon: Icon,
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 rounded-lg gap-1.5 font-semibold',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2 font-semibold',
    lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5 font-bold shadow-sm',
    xl: 'text-lg px-8 py-4 rounded-2xl gap-3 font-bold shadow-md'
  };

  const variants = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-sm hover:shadow-glow focus:ring-emerald-500 border border-emerald-600',
    gradient: 'gradient-brand hover:brightness-105 active:brightness-95 text-white font-bold shadow-md hover:shadow-glow focus:ring-emerald-400 border border-emerald-500/40',
    secondary: 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 shadow-subtle focus:ring-slate-400',
    outline: 'bg-transparent hover:bg-emerald-50 text-emerald-800 border border-emerald-300 hover:border-emerald-500 focus:ring-emerald-400',
    navy: 'bg-navy-900 hover:bg-navy-850 text-white shadow-sm hover:shadow-md focus:ring-navy-800 border border-navy-800',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 focus:ring-slate-300',
    white: 'bg-white hover:bg-slate-100 text-slate-900 font-bold shadow-card focus:ring-white border border-white'
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {Icon && <Icon className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className={`transition-transform duration-200 group-hover:translate-x-1 ${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02, transition: { duration: 0.15 } },
    whileTap: { scale: 0.98 }
  };

  if (to) {
    return (
      <MotionLink to={to} className={`group ${combinedClass}`} {...motionProps} {...props}>
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a href={href} className={`group ${combinedClass}`} {...motionProps} {...props}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} disabled={disabled} className={`group ${combinedClass}`} {...motionProps} {...props}>
      {content}
    </motion.button>
  );
}


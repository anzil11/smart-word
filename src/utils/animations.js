import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Framer Motion Animation Variants Preset
 */
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || 0.6,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || 0.6,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration || 0.6,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration || 0.6,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (custom = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: custom.duration || 0.5,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger || 0.1,
      delayChildren: custom.delayChildren || 0.05
    }
  })
};

export const cardHoverVariants = {
  rest: { y: 0, scale: 1, transition: { duration: 0.25, ease: 'easeOut' } },
  hover: { y: -6, scale: 1.015, transition: { duration: 0.25, ease: 'easeOut' } }
};

export const modalOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

export const modalContentVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } }
};

/**
 * GSAP Helper Functions
 */

// Animate numbers counting up on scroll
export const animateCounter = (element, targetValue, duration = 2) => {
  if (!element) return;
  
  const isNumber = !isNaN(parseFloat(targetValue));
  if (!isNumber) return;

  const num = parseFloat(targetValue);
  const suffix = targetValue.toString().replace(/^[0-9.]+/, '');
  const prefix = targetValue.toString().match(/^[^0-9.]+/)?.[0] || '';

  const obj = { val: 0 };
  return gsap.to(obj, {
    val: num,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      once: true
    },
    onUpdate: () => {
      const decimals = num % 1 !== 0 ? 1 : 0;
      element.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
    }
  });
};

// Parallax element on scroll
export const parallaxElement = (element, speed = 0.3) => {
  if (!element) return;
  return gsap.to(element, {
    y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
};

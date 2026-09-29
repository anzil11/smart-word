import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn } from '../utils/animations';

export default function AnimatedSection({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  viewport = { once: true, amount: 0.15 },
  ...props
}) {
  const getVariants = () => {
    switch (animation) {
      case 'fadeDown':
        return fadeInDown;
      case 'fadeLeft':
        return fadeInLeft;
      case 'fadeRight':
        return fadeInRight;
      case 'scale':
        return scaleIn;
      case 'fadeUp':
      default:
        return fadeInUp;
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      custom={{ delay, duration }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Centralized Framer Motion Animation Variants & Helpers.
 * Provides GPU-accelerated motion presets for fade, slide, stagger, and hover interactions.
 * Adheres to Rules.md Section 9 and Architecture.md Section 16.
 */

// Standard smooth cubic-bezier easing
export const easeSmooth = [0.22, 1, 0.36, 1];

// Staggered Container Variant
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Fade In Up Variant
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeSmooth
    }
  }
};

// Simple Fade In Variant
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easeSmooth
    }
  }
};

// Scale Up Entrance Variant
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeSmooth
    }
  }
};

// Hover & Tap Motion Props for Buttons and Cards
export const hoverTapProps = {
  whileHover: { y: -3, transition: { duration: 0.2, ease: easeSmooth } },
  whileTap: { scale: 0.98 }
};

export const hoverScaleProps = {
  whileHover: { scale: 1.02, transition: { duration: 0.2, ease: easeSmooth } },
  whileTap: { scale: 0.98 }
};

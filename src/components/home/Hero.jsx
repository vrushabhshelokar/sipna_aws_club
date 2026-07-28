import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import { homeContent } from '../../data/site';
import { HiArrowRight } from 'react-icons/hi2';
import { staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation';

/**
 * Hero Section Component with Framer Motion Entrance Animations.
 * Introduces Sipna AWS Club with ambient glow, badge, gradient title, and primary CTA.
 * Consumes data dynamically from src/data/site.js.
 */
function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative py-12 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-[500px] h-[250px] sm:h-[300px] bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <Container className="relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge Pill */}
          {hero.badge && (
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4 sm:mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              {hero.badge}
            </motion.div>
          )}

          {/* Hero Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-100 tracking-tight max-w-4xl mx-auto leading-[1.15] mb-4 sm:mb-6"
          >
            {hero.title}
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-slate-400 text-sm sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10"
          >
            {hero.subtitle}
          </motion.p>

          {/* Call To Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              to={hero.primaryCtaPath || '/team'}
              variant="primary"
              size="lg"
              icon={HiArrowRight}
            >
              {hero.primaryCtaText || 'Explore Team'}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { homeContent } from '../../data/site';
import { HiArrowRight, HiSparkles } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 overflow-hidden">
      {/* Linear Ambient Backdrop */}
      <div className="absolute inset-0 bg-radial-purple pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none -z-10" />

      {/* Radial purple glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Status Badge Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-6 backdrop-blur-md shadow-lg shadow-purple-950/20"
          >
            <HiSparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>Sipna AWS Club Chapter 2025/26</span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gradient-purple tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6"
          >
            {hero.title || 'Architecting Cloud Leaders of Tomorrow'}
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-zinc-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
          >
            {hero.subtitle || 'Empowering student developers, cloud architects, and builders at Sipna COET with hands-on AWS bootcamps, workshops, and real-world projects.'}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Team</span>
              <HiArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#events"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#181820] hover:bg-[#20202A] text-zinc-200 hover:text-white border border-white/10 font-semibold text-sm transition-all duration-200 hover:border-purple-500/30"
            >
              <span>View Workshops & Events</span>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;

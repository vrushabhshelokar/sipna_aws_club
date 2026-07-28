import React from 'react';
import { motion } from 'framer-motion';
import { homeContent } from '../../data/site';
import { HiRocketLaunch } from 'react-icons/hi2';
import { fadeInUp } from '../../hooks/useScrollAnimation';

/**
 * Mission Section Component with Framer Motion Scroll Reveals.
 * Presents the mission statement of Sipna AWS Club.
 * Consumes data dynamically from src/data/site.js.
 */
function Mission() {
  const { mission } = homeContent;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 relative overflow-hidden h-full transition-colors duration-300"
    >
      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
        <HiRocketLaunch className="w-6 h-6" />
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
        {mission.badge || 'Mission'}
      </div>
      <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-100 mb-4">
        {mission.title}
      </h3>
      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
        {mission.description}
      </p>
    </motion.div>
  );
}

export default Mission;

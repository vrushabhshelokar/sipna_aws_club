import React from 'react';
import { motion } from 'framer-motion';
import TeamCard from './TeamCard';
import { staggerContainer } from '../../hooks/useScrollAnimation';

/**
 * TeamGrid Component with Staggered Framer Motion Reveal.
 * Responsive grid container for rendering member cards.
 */
function TeamGrid({ members = [], emptyMessage = 'No team members found.' }) {
  if (!members || members.length === 0) {
    return (
      <div className="glass-panel rounded-2xl p-8 text-center border border-slate-800">
        <p className="text-slate-400 text-sm">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
    >
      {members.map((member) => (
        <TeamCard key={member.id || member.slug} member={member} />
      ))}
    </motion.div>
  );
}

export default TeamGrid;

import React from 'react';
import { motion } from 'framer-motion';
import TeamCard from './TeamCard';

function TeamGrid({ members = [], emptyMessage = 'No team members found.' }) {
  if (!members || members.length === 0) {
    return (
      <div className="glass-panel rounded-3xl p-8 text-center border border-white/10 max-w-lg mx-auto">
        <p className="text-zinc-400 text-sm">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      {members.map((member) => (
        <TeamCard key={member.id || member.slug} member={member} />
      ))}
    </motion.div>
  );
}

export default TeamGrid;

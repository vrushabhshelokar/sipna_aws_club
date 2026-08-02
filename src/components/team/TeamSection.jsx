import React from 'react';
import Container from '../common/Container';
import TeamGrid from './TeamGrid';

function TeamSection({
  title,
  badge,
  description,
  members = [],
  emptyMessage
}) {
  if (!members || members.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mb-10 text-center max-w-2xl mx-auto">
          {badge && (
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-3">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-zinc-400 text-xs sm:text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <TeamGrid members={members} emptyMessage={emptyMessage} />
      </Container>
    </section>
  );
}

export default TeamSection;

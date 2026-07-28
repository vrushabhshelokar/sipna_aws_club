import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import TeamGrid from './TeamGrid';

/**
 * TeamSection Component.
 * Wraps section headers and renders TeamGrid.
 */
function TeamSection({
  title,
  badge,
  description,
  members = [],
  emptyMessage
}) {
  return (
    <section className="py-12">
      <Container>
        <SectionTitle
          badge={badge}
          title={title}
          subtitle={description}
        />
        <TeamGrid members={members} emptyMessage={emptyMessage} />
      </Container>
    </section>
  );
}

export default TeamSection;

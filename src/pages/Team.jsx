import React from 'react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import TeamSection from '../components/team/TeamSection';
import SEO from '../components/seo/SEO';
import { getCoreTeam, getGeneralTeam } from '../data/team';

/**
 * Team Page Component.
 * Displays Core Team leadership and general Team Members.
 * Consumes data exclusively from src/data/team.js.
 * Uses as="h1" on primary section title for WCAG heading hierarchy compliance.
 */
function Team() {
  const coreTeam = getCoreTeam();
  const generalTeam = getGeneralTeam();

  return (
    <div className="py-12 md:py-20 space-y-12">
      {/* Team SEO Metadata */}
      <SEO
        title="Team | Sipna AWS Club"
        description="Meet the core leadership and student team members of Sipna AWS Club at Sipna COET."
      />

      {/* Page Header (Single h1 for Team Page) */}
      <Container>
        <SectionTitle
          as="h1"
          badge="Sipna AWS Club Team"
          title="Meet Our Team"
          subtitle="Passionate student leaders, cloud enthusiasts, and developers driving AWS awareness, bootcamps, and technical workshops across Sipna COET."
          centered
        />
      </Container>

      {/* Core Team Section */}
      <TeamSection
        badge="Leadership"
        title="Core Team"
        description="The executive leadership managing club operations, technical sessions, and community growth."
        members={coreTeam}
        emptyMessage="Core team members will be announced soon."
      />

      {/* Team Members Section */}
      <TeamSection
        badge="Contributors"
        title="Team Members"
        description="Active associates and student contributors assisting in cloud projects and event execution."
        members={generalTeam}
        emptyMessage="General team members will be listed soon."
      />
    </div>
  );
}

export default Team;

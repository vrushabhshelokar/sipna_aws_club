import React from 'react';
import Container from '../components/common/Container';
import LeaderCard from '../components/team/LeaderCard';
import TeamSection from '../components/team/TeamSection';
import SEO from '../components/seo/SEO';
import { getClubLeader, getCoreTeam, getGeneralTeam } from '../data/team';
import { HiSparkles } from 'react-icons/hi2';

function Team() {
  const leader = getClubLeader();
  const coreTeam = getCoreTeam();
  const generalTeam = getGeneralTeam();

  return (
    <div className="py-12 md:py-20 space-y-16">
      {/* Team SEO Metadata */}
      <SEO
        title="Team | Sipna AWS Club"
        description="Meet the core leadership and student team members of Sipna AWS Club at Sipna COET."
      />

      {/* Page Header */}
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
            <HiSparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Sipna AWS Club Roster</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Meet Our Leadership & Team
          </h1>
          <p className="text-zinc-400 text-sm sm:text-lg leading-relaxed">
            Passionate student leaders, cloud architects, and developers driving AWS awareness, bootcamps, and technical workshops across Sipna COET.
          </p>
        </div>
      </Container>

      {/* Leader Section */}
      {leader && (
        <Container>
          <div className="mb-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
              Club Lead
            </span>
          </div>
          <LeaderCard member={leader} />
        </Container>
      )}

      {/* Core Team Section (3-Column Grid) */}
      <TeamSection
        badge="Executive Board"
        title="Core Team Leadership"
        description="The executive leadership managing club operations, technical tracks, and community growth."
        members={coreTeam}
        emptyMessage="Core team members will be announced soon."
      />

      {/* General Team Section */}
      {generalTeam && generalTeam.length > 0 && (
        <TeamSection
          badge="Contributors"
          title="Team Associates & Members"
          description="Active associates assisting in cloud projects, event organization, and design."
          members={generalTeam}
          emptyMessage="General team members will be listed soon."
        />
      )}
    </div>
  );
}

export default Team;

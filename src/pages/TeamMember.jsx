import React from 'react';
import { useParams } from 'react-router-dom';
import MemberProfile from '../components/team/MemberProfile';
import NotFound from './NotFound';
import SEO from '../components/seo/SEO';
import { getMemberBySlug, getRelatedMembers } from '../data/team';

/**
 * Dynamic TeamMember Page Container.
 * Handles URL parameter lookup (`:slug`), data retrieval from team.js,
 * renders NotFound for invalid member slugs (Rules.md Section 17),
 * generates dynamic SEO metadata, and passes resolved member data to MemberProfile component.
 */
function TeamMember() {
  const { slug } = useParams();

  const member = getMemberBySlug(slug);

  // Handle Invalid Slug per Rules.md Section 17
  if (!member) {
    return <NotFound />;
  }

  const relatedMembers = getRelatedMembers(slug, 4);

  return (
    <>
      {/* Dynamic Member Profile SEO Metadata */}
      <SEO
        title={`${member.name} | Sipna AWS Club`}
        description={`${member.name} - ${member.position} at Sipna AWS Club. ${member.department}, ${member.year}.`}
        image={member.image || '/og-image.png'}
        type="profile"
      />

      <MemberProfile
        member={member}
        relatedMembers={relatedMembers}
      />
    </>
  );
}

export default TeamMember;

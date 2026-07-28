/**
 * Centralized Single Source of Truth for Sipna AWS Club Team Members.
 * Strictly adheres to schema rules defined in Rules.md Section 6.
 */

export const teamMembers = [
  // Core Team Leadership
  {
    id: 'core-1',
    slug: 'vrushabh',
    category: 'core',
    name: 'Vrushabh',
    position: 'Club Lead / Chairperson',
    department: 'Computer Science & Engineering',
    year: 'Final Year',
    image: '/src/assets/team/vrushabh.webp',
    linkedin: 'https://linkedin.com/in/',
    github: 'https://github.com/',
    instagram: 'https://instagram.com/'
  },
  {
    id: 'core-2',
    slug: 'vice-chair',
    category: 'core',
    name: 'Vice Chair Lead',
    position: 'Vice Chairperson',
    department: 'Information Technology',
    year: 'Final Year',
    image: '/src/assets/team/placeholder.webp',
    linkedin: 'https://linkedin.com/in/',
    github: 'https://github.com/',
    instagram: 'https://instagram.com/'
  },
  {
    id: 'core-3',
    slug: 'tech-lead',
    category: 'core',
    name: 'Technical Lead',
    position: 'Technical Lead',
    department: 'Computer Science & Engineering',
    year: 'Third Year',
    image: '/src/assets/team/placeholder.webp',
    linkedin: 'https://linkedin.com/in/',
    github: 'https://github.com/',
    instagram: ''
  },
  {
    id: 'core-4',
    slug: 'design-lead',
    category: 'core',
    name: 'Design Lead',
    position: 'Design Lead',
    department: 'Computer Technology',
    year: 'Third Year',
    image: '/src/assets/team/placeholder.webp',
    linkedin: 'https://linkedin.com/in/',
    github: '',
    instagram: 'https://instagram.com/'
  },

  // Team Members
  {
    id: 'member-1',
    slug: 'cloud-member-1',
    category: 'member',
    name: 'Cloud Engineer Member',
    position: 'Cloud Associate',
    department: 'Computer Science & Engineering',
    year: 'Second Year',
    image: '/src/assets/team/placeholder.webp',
    linkedin: 'https://linkedin.com/in/',
    github: 'https://github.com/',
    instagram: ''
  },
  {
    id: 'member-2',
    slug: 'devops-member-2',
    category: 'member',
    name: 'DevOps Member',
    position: 'DevOps Associate',
    department: 'Information Technology',
    year: 'Second Year',
    image: '/src/assets/team/placeholder.webp',
    linkedin: 'https://linkedin.com/in/',
    github: 'https://github.com/',
    instagram: 'https://instagram.com/'
  },
  {
    id: 'member-3',
    slug: 'event-member-3',
    category: 'member',
    name: 'Events Co-ordinator',
    position: 'Event Associate',
    department: 'Electronics & Telecommunication',
    year: 'Second Year',
    image: '/src/assets/team/placeholder.webp',
    linkedin: 'https://linkedin.com/in/',
    github: '',
    instagram: 'https://instagram.com/'
  },
  {
    id: 'member-4',
    slug: 'community-member-4',
    category: 'member',
    name: 'Community Outreach Member',
    position: 'Outreach Associate',
    department: 'Computer Science & Engineering',
    year: 'First Year',
    image: '/src/assets/team/placeholder.webp',
    linkedin: 'https://linkedin.com/in/',
    github: 'https://github.com/',
    instagram: 'https://instagram.com/'
  }
];

/**
 * Returns all members categorized as Core Team.
 */
export function getCoreTeam() {
  return teamMembers.filter((member) => member.category === 'core');
}

/**
 * Returns all members categorized as general Team Members.
 */
export function getGeneralTeam() {
  return teamMembers.filter((member) => member.category === 'member');
}

/**
 * Resolves a team member by URL slug.
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getMemberBySlug(slug) {
  if (!slug) return undefined;
  return teamMembers.find(
    (member) => member.slug.toLowerCase() === slug.toLowerCase()
  );
}

/**
 * Validates if a member slug exists in the team dataset.
 * @param {string} slug
 * @returns {boolean}
 */
export function isValidMemberSlug(slug) {
  return Boolean(getMemberBySlug(slug));
}

/**
 * Returns suggested/other team members excluding the current profile slug.
 * @param {string} currentSlug
 * @param {number} limit
 * @returns {Array}
 */
export function getRelatedMembers(currentSlug, limit = 3) {
  return teamMembers
    .filter((member) => member.slug.toLowerCase() !== (currentSlug || '').toLowerCase())
    .slice(0, limit);
}

/**
 * Centralized Single Source of Truth for Sipna AWS Club Team Members.
 * Dynamically parses, standardizes, and sorts the official dataset from src/data/realData.json.
 * Strictly adheres to schema rules defined in Rules.md Section 6.
 */

import realDataText from './realData.json?raw';

function slugify(name) {
  return (name || '')
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Standardizes academic year values to '1st Year' | '2nd Year' | '3rd Year' | '4th Year'
 * Handles typos and inconsistent casing while preserving factual year data.
 */
function normalizeYear(yearStr) {
  if (!yearStr) return '';
  const y = yearStr.trim().toLowerCase();
  
  if (y.includes('1') || y.includes('first')) return '1st Year';
  if (y.includes('2') || y.includes('second')) return '2nd Year';
  if (y.includes('3') || y.includes('third') || y.includes('thired')) return '3rd Year';
  if (y.includes('4') || y.includes('fourth') || y.includes('final')) return '4th Year';
  
  return yearStr.trim();
}

/**
 * Standardizes department names to official full titles.
 * Corrects spelling mistakes and inconsistent abbreviations.
 */
function normalizeDepartment(deptStr) {
  if (!deptStr) return '';
  const d = deptStr.trim();
  const dLower = d.toLowerCase();

  if (dLower === 'it' || dLower === 'it-a' || dLower.includes('information')) {
    return 'Information Technology';
  }
  if (dLower === 'cse' || dLower.includes('computer science')) {
    return 'Computer Science & Engineering';
  }
  if (dLower.includes('ai') || dLower.includes('ds')) {
    return 'Artificial Intelligence & Data Science';
  }
  if (dLower.includes('civil')) {
    return 'Civil Engineering';
  }
  if (dLower.includes('entc') || dLower.includes('electronics')) {
    return 'Electronics & Telecommunication Engineering';
  }
  if (dLower.includes('mech')) {
    return 'Mechanical Engineering';
  }

  return d;
}

function parseRealData(text) {
  const blocks = [];
  const regex = /\{([\s\S]*?)\}/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    blocks.push(match[1]);
  }

  const rawMembers = blocks.map((blockText, index) => {
    let rawObj = {};

    let normalizedText = blockText
      .replace(/\s{3,}(linkedin|github|instagram|insta|position|dept|department|year|image|name)\s*[:-]/gi, '\n$1:');

    const lines = normalizedText.split(/\r?\n/);

    let currentKey = null;

    lines.forEach(line => {
      let trimmed = line.trim();
      if (!trimmed) return;

      let cleaned = trimmed.replace(/^[*%\d.•\-\s]+/, '').trim();

      const kvMatch = cleaned.match(/^([a-zA-Z\s]+)[*\s]*[:-]\s*(.*)$/);

      if (kvMatch) {
        let rawKey = kvMatch[1].trim().toLowerCase();
        let val = kvMatch[2].trim();
        val = val.replace(/[*,\s}]+$/, '').trim();
        val = val.replace(/^\*/, '').trim();

        if (rawKey.includes('name')) currentKey = 'name';
        else if (rawKey.includes('position')) currentKey = 'position';
        else if (rawKey.includes('department') || rawKey.includes('dept')) currentKey = 'department';
        else if (rawKey.includes('year')) currentKey = 'year';
        else if (rawKey.includes('image')) currentKey = 'image';
        else if (rawKey.includes('linkedin')) currentKey = 'linkedin';
        else if (rawKey.includes('github')) currentKey = 'github';
        else if (rawKey.includes('instagram') || rawKey.includes('insta')) currentKey = 'instagram';
        else currentKey = null;

        if (currentKey) {
          rawObj[currentKey] = val;
        }
      } else if (currentKey && trimmed) {
        let val = trimmed.replace(/[*,\s}]+$/, '').trim();
        val = val.replace(/^\*/, '').trim();
        if (val) {
          if (rawObj[currentKey]) {
            rawObj[currentKey] += ' ' + val;
          } else {
            rawObj[currentKey] = val;
          }
        }
      }
    });

    const posLower = (rawObj.position || '').toLowerCase();
    const isCore = posLower.includes('lead') || posLower.includes('sbgl') || posLower.includes('chair');
    const category = isCore ? 'core' : 'member';

    const slug = slugify(rawObj.name);

    let imagePath = rawObj.image || '';
    if (imagePath.includes('below') || imagePath.includes('http') || imagePath.includes(':')) {
      imagePath = '';
    }

    let linkedin = rawObj.linkedin || '';
    if (linkedin && linkedin !== '--') {
      if (linkedin.startsWith('https:https://')) linkedin = linkedin.replace('https:https://', 'https://');
      if (linkedin.startsWith('www.')) linkedin = 'https://' + linkedin;
    } else {
      linkedin = '';
    }

    let github = rawObj.github || '';
    if (github && github !== '--') {
      if (github.startsWith('https:https://')) github = github.replace('https:https://', 'https://');
      if (github.startsWith('GitHub.com')) github = 'https://' + github;
    } else {
      github = '';
    }

    let instagram = rawObj.instagram || '';
    if (instagram && instagram !== '--') {
      if (instagram.startsWith('https:https://')) instagram = instagram.replace('https:https://', 'https://');
    } else {
      instagram = '';
    }

    return {
      id: `real-${index + 1}`,
      slug: slug,
      category: category,
      name: rawObj.name || '',
      position: rawObj.position || '',
      department: normalizeDepartment(rawObj.department),
      year: normalizeYear(rawObj.year),
      image: imagePath,
      linkedin: linkedin,
      github: github,
      instagram: instagram,
      originalIndex: index
    };
  });

  /**
   * Sort Member Ordering:
   * Primary Sort: 3rd Year -> 2nd Year -> 1st Year -> 4th Year
   * Secondary Sort: Preserve existing order from realData.json (originalIndex)
   */
  const yearPriority = {
    '3rd Year': 1,
    '2nd Year': 2,
    '1st Year': 3,
    '4th Year': 4
  };

  rawMembers.sort((a, b) => {
    const prioA = yearPriority[a.year] || 99;
    const prioB = yearPriority[b.year] || 99;
    if (prioA !== prioB) {
      return prioA - prioB;
    }
    return a.originalIndex - b.originalIndex;
  });

  return rawMembers;
}

// Single Source of Truth Team Members Dataset (Standardized & Sorted)
export const teamMembers = parseRealData(realDataText);

/**
 * Returns all members categorized as Core Team Leadership.
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
 * Supports exact match, prefix match, or partial slug lookup.
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getMemberBySlug(slug) {
  if (!slug) return undefined;
  const s = slug.toLowerCase();
  return teamMembers.find(
    (member) =>
      member.slug.toLowerCase() === s ||
      member.slug.toLowerCase().startsWith(s) ||
      s.startsWith(member.slug.toLowerCase())
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
export function getRelatedMembers(currentSlug, limit = 4) {
  const current = (currentSlug || '').toLowerCase();
  return teamMembers
    .filter((member) => {
      const ms = member.slug.toLowerCase();
      return ms !== current && !ms.startsWith(current) && !current.startsWith(ms);
    })
    .slice(0, limit);
}

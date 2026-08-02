/**
 * Centralized Single Source of Truth for Sipna AWS Club Team Members.
 * Dynamically parses, standardizes, and sorts the official dataset from src/data/realData.json.
 * Resolves member photos dynamically from src/assets/team/ using Vite eager glob matching.
 * Strictly adheres to schema rules defined in Rules.md Section 6.
 */

import realDataText from './realData.json?raw';

// Eagerly import all images from src/assets/team/ directory
const teamImagesMap = import.meta.glob('../assets/team/*', {
  eager: true,
  import: 'default'
});

function cleanForMatching(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[^\w]/g, '');
}

/**
 * Resiliently matches a team member's name against image files in src/assets/team/
 */
function resolveMemberImage(memberName, rawImagePath) {
  const cleanMemberName = cleanForMatching(memberName);
  const firstName = cleanForMatching((memberName || '').split(/\s+/)[0]);

  const imageEntries = Object.entries(teamImagesMap).map(([path, url]) => {
    const filenameWithExt = path.split('/').pop() || '';
    const filenameNoExt = filenameWithExt.substring(0, filenameWithExt.lastIndexOf('.'));
    const cleanFilename = cleanForMatching(filenameNoExt);
    return { path, url, cleanFilename };
  });

  // 1. Check if rawImagePath matches any imported image
  if (rawImagePath) {
    const cleanRaw = cleanForMatching(rawImagePath);
    if (cleanRaw) {
      const directMatch = imageEntries.find(
        (e) => e.cleanFilename === cleanRaw || cleanRaw.includes(e.cleanFilename)
      );
      if (directMatch) return directMatch.url;
    }
  }

  // 2. Exact match on first name
  if (firstName) {
    const exactFirstNameMatch = imageEntries.find(
      (e) => e.cleanFilename === firstName
    );
    if (exactFirstNameMatch) return exactFirstNameMatch.url;
  }

  // 3. Fuzzy / Spelling variation matching
  const fuzzyMatch = imageEntries.find((e) => {
    if (!e.cleanFilename || e.cleanFilename === 'gitkeep') return false;
    
    // Prevent 'Harsh' from matching 'Harshdeep'
    if (firstName === 'harsh' && e.cleanFilename === 'harshdeep') return false;

    if (cleanMemberName.includes(e.cleanFilename) || e.cleanFilename.includes(firstName)) {
      return true;
    }

    // Phonetic spelling variations (e.g., Shrushti <-> Shrusthti)
    if (firstName.startsWith('shrus') && e.cleanFilename.startsWith('shrus')) {
      return true;
    }

    return false;
  });

  if (fuzzyMatch) return fuzzyMatch.url;

  return '';
}

function slugify(name) {
  return (name || '')
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Standardizes member names by removing middle/father's names.
 * Ensures strict 'FirstName Surname' format while preserving original casing and spelling.
 */
function cleanName(nameStr) {
  if (!nameStr) return '';
  const parts = nameStr.trim().split(/\s+/);
  if (parts.length <= 2) {
    return nameStr.trim();
  }
  return `${parts[0]} ${parts[parts.length - 1]}`;
}

/**
 * Standardizes academic year values to '1st Year' | '2nd Year' | '3rd Year' | '4th Year'
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

    const formattedName = cleanName(rawObj.name || '');
    const slug = slugify(formattedName);

    let rawImage = rawObj.image || '';
    if (rawImage.includes('below') || rawImage.includes('http') || rawImage.includes(':')) {
      rawImage = '';
    }

    const resolvedImage = resolveMemberImage(formattedName, rawImage);

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
      name: formattedName,
      position: rawObj.position || '',
      department: normalizeDepartment(rawObj.department),
      year: normalizeYear(rawObj.year),
      image: resolvedImage,
      linkedin: linkedin,
      github: github,
      instagram: instagram,
      originalIndex: index
    };
  });

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
 * Returns the primary Club Leader.
 */
export function getClubLeader() {
  return (
    teamMembers.find(
      (m) =>
        m.position.toLowerCase().includes('sbgl') ||
        m.position.toLowerCase().includes('club lead') ||
        m.position.toLowerCase().includes('president')
    ) || teamMembers[0]
  );
}

/**
 * Returns all members categorized as Core Team Leadership (excluding the primary leader).
 * Sorted strictly by domain priority: Technical Head -> Management -> Design -> Marketing -> Content -> Sponsorship.
 */
export function getCoreTeam() {
  const leader = getClubLeader();
  const coreMembers = teamMembers.filter(
    (member) => member.category === 'core' && member.id !== leader?.id
  );

  function getDomainPriority(position) {
    const pos = (position || '').toLowerCase();
    if (pos.includes('teachnical') || pos.includes('technical')) return 1;
    if (pos.includes('management')) return 2;
    if (pos.includes('design')) return 3;
    if (pos.includes('marketing')) return 4;
    if (pos.includes('content') || pos.includes('social media')) return 5;
    if (pos.includes('spons')) return 6;
    return 99;
  }

  return coreMembers.sort(
    (a, b) => getDomainPriority(a.position) - getDomainPriority(b.position)
  );
}

/**
 * Returns all members categorized as general Team Members.
 * Positions Vidhi Manjare at 1st position and Chinmay Barad at 2nd position in the grid.
 */
export function getGeneralTeam() {
  const members = teamMembers.filter(
    (member) => member.category === "member"
  );

  const vidhi = members.find((m) =>
    m.name.toLowerCase().includes("vidhi")
  );
  const chinmay = members.find((m) =>
    m.name.toLowerCase().includes("chinmay")
  );
  const krutika = members.find((m) =>
    m.name.toLowerCase().includes("krutika")
  );

  const aman = members.find((m) =>
    m.name.toLowerCase().includes("aman")
  );
  const ritesh = members.find((m) =>
    m.name.toLowerCase().includes("ritesh")
  );
  const prajakta = members.find((m) =>
    m.name.toLowerCase().includes("prajakta")
  );
  const devanshu = members.find((m) =>
    m.name.toLowerCase().includes("devanshu")
  );

  const rest = members.filter(
    (m) =>
      m.id !== vidhi?.id &&
      m.id !== chinmay?.id &&
      m.id !== krutika?.id &&
      m.id !== aman?.id &&
      m.id !== ritesh?.id &&
      m.id !== prajakta?.id &&
      m.id !== devanshu?.id
  );

  return [
    vidhi,
    chinmay,
    krutika,
    aman,
    ritesh,
    prajakta,
    devanshu,
    ...rest,
  ].filter(Boolean);
}

/**
 * Resolves a team member by URL slug.
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
 */
export function isValidMemberSlug(slug) {
  return Boolean(getMemberBySlug(slug));
}

/**
 * Returns suggested/other team members excluding the current profile slug.
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

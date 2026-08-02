import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import TeamGrid from './TeamGrid';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';
import { HiArrowLeft, HiBuildingLibrary, HiAcademicCap, HiSparkles } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function MemberProfile({ member, relatedMembers = [] }) {
  const [imageError, setImageError] = useState(false);

  if (!member) return null;

  const {
    name,
    position,
    department,
    year,
    image,
    linkedin,
    github,
    instagram
  } = member;

  const hasSocials = Boolean(linkedin || github || instagram);

  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase()
    : 'AWS';

  return (
    <div className="py-8 sm:py-16 space-y-16">
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 font-semibold text-xs transition-all"
          >
            <HiArrowLeft className="w-4 h-4 text-purple-400" />
            <span>Back to Team Roster</span>
          </Link>
        </div>

        {/* Member Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl p-8 sm:p-12 border border-purple-500/20 relative overflow-hidden shadow-2xl"
        >
          {/* Ambient Purple Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Profile Image Frame with 3:4 Aspect Ratio */}
            <div className="md:col-span-5 lg:col-span-4 max-w-sm mx-auto md:max-w-none w-full">
              <div className="relative w-full aspect-[3/4] rounded-2xl bg-[#121216] overflow-hidden border-2 border-purple-500/30 flex items-center justify-center shadow-xl">
                {image && !imageError ? (
                  <img
                    src={image}
                    alt={name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top sm:object-center"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-purple-900/40 to-indigo-950/60 text-purple-200">
                    <span className="font-heading font-extrabold text-5xl tracking-widest">
                      {initials}
                    </span>
                  </div>
                )}

                {/* Academic Year Badge */}
                {year && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#0D0D0E]/90 backdrop-blur-md text-purple-300 border border-purple-500/30 shadow-md">
                    {year}
                  </div>
                )}
              </div>
            </div>

            {/* Member Details */}
            <div className="md:col-span-7 lg:col-span-8 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-3">
                  <HiSparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>{position || 'Team Member'}</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {name}
                </h1>
              </div>

              {/* Department & Academic Details */}
              <div className="space-y-3 text-zinc-300 text-sm sm:text-base">
                {department && (
                  <div className="flex items-center gap-3 text-zinc-300">
                    <HiBuildingLibrary className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>{department}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-zinc-400">
                  <HiAcademicCap className="w-5 h-5 text-purple-400 shrink-0" />
                  <span>Sipna College of Engineering & Technology</span>
                </div>
              </div>

              {/* Social Media Link Buttons */}
              {hasSocials && (
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-purple-300 mb-4">
                    Connect & Social Links
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    {linkedin && (
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/30 text-xs font-semibold transition-all"
                      >
                        <FaLinkedin className="w-4 h-4" />
                        <span>LinkedIn Profile</span>
                      </a>
                    )}
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/30 text-xs font-semibold transition-all"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                    {instagram && (
                      <a
                        href={instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/30 text-xs font-semibold transition-all"
                      >
                        <FaInstagram className="w-4 h-4" />
                        <span>Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Related Team Members Section */}
        {relatedMembers && relatedMembers.length > 0 && (
          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="mb-10 text-center max-w-xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
                Community
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                Explore Other Team Members
              </h2>
            </div>
            <TeamGrid members={relatedMembers} />
          </div>
        )}
      </Container>
    </div>
  );
}

export default MemberProfile;

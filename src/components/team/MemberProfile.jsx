import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';
import TeamGrid from './TeamGrid';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';
import { HiUser, HiArrowLeft, HiBuildingLibrary, HiAcademicCap } from 'react-icons/hi2';
import { fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';

/**
 * Presentational MemberProfile Component with Framer Motion Reveals.
 * Displays detailed member profile card, photo with error fallback,
 * conditional social link buttons, and suggested related members grid.
 * Optimized with decoding="async" for Phase 10 performance.
 */
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

  return (
    <div className="py-8 sm:py-12 md:py-20 space-y-12 sm:space-y-16">
      <Container>
        {/* Navigation Action */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-6 sm:mb-8"
        >
          <Button
            to="/team"
            variant="secondary"
            size="sm"
            icon={HiArrowLeft}
            aria-label="Back to Team members list"
          >
            Back to Team
          </Button>
        </motion.div>

        {/* Large Member Profile Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="glass-card rounded-3xl p-5 sm:p-10 md:p-12 border border-slate-800/80 relative overflow-hidden"
        >
          {/* Subtle Ambient Background Lighting */}
          <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
            {/* Member Profile Photo Frame */}
            <motion.div variants={fadeInUp} className="md:col-span-5 lg:col-span-4 max-w-sm mx-auto md:max-w-none w-full">
              <div className="relative w-full aspect-square rounded-2xl bg-slate-900 overflow-hidden border border-slate-800 flex items-center justify-center shadow-xl">
                {image && !imageError ? (
                  <img
                    src={image}
                    alt={name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-600 space-y-2 sm:space-y-3">
                    <HiUser className="w-20 sm:w-24 h-20 sm:h-24 text-slate-700" aria-hidden="true" />
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">Sipna AWS Club</span>
                  </div>
                )}

                {/* Academic Year Badge */}
                {year && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/20 shadow-md">
                    {year}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Member Information Details */}
            <motion.div variants={fadeInUp} className="md:col-span-7 lg:col-span-8 space-y-5 sm:space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3 sm:mb-4">
                  {position}
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-100 tracking-tight leading-tight">
                  {name}
                </h1>
              </div>

              {/* Department & Academic Details */}
              <div className="space-y-2.5 sm:space-y-3 text-slate-300 text-sm sm:text-base">
                <div className="flex items-center gap-2.5 sm:gap-3 text-slate-400">
                  <HiBuildingLibrary className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400 shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-base">{department}</span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 text-slate-400">
                  <HiAcademicCap className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400 shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-base">Sipna College of Engineering & Technology</span>
                </div>
              </div>

              {/* Social Media Link Buttons (Rules.md Section 18) */}
              {hasSocials && (
                <div className="pt-4 border-t border-slate-800/80">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Connect with {name.split(' ')[0]}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    {linkedin && (
                      <Button
                        href={linkedin}
                        external
                        variant="secondary"
                        size="sm"
                        icon={FaLinkedin}
                        aria-label={`Visit ${name}'s LinkedIn profile`}
                      >
                        LinkedIn
                      </Button>
                    )}
                    {github && (
                      <Button
                        href={github}
                        external
                        variant="secondary"
                        size="sm"
                        icon={FaGithub}
                        aria-label={`Visit ${name}'s GitHub profile`}
                      >
                        GitHub
                      </Button>
                    )}
                    {instagram && (
                      <Button
                        href={instagram}
                        external
                        variant="secondary"
                        size="sm"
                        icon={FaInstagram}
                        aria-label={`Visit ${name}'s Instagram profile`}
                      >
                        Instagram
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Related Team Members Section */}
        {relatedMembers && relatedMembers.length > 0 && (
          <div className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-slate-800/80">
            <SectionTitle
              badge="Community"
              title="Explore Other Team Members"
              subtitle="Discover fellow leaders and members of the Sipna AWS Club."
            />
            <TeamGrid members={relatedMembers} />
          </div>
        )}
      </Container>
    </div>
  );
}

export default MemberProfile;

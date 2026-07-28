import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';
import { HiUser, HiArrowRight } from 'react-icons/hi2';
import { fadeInUp } from '../../hooks/useScrollAnimation';

/**
 * TeamCard Component with Framer Motion Entrance & Hover Animations.
 * Renders member card details, photo with fallback handling, position,
 * department, academic year, conditional social icons, and profile CTA.
 * Memoized with React.memo and optimized with decoding="async" for Phase 10 performance.
 */
function TeamCard({ member }) {
  const [imageError, setImageError] = useState(false);

  if (!member) return null;

  const {
    slug,
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
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-800/80 flex flex-col justify-between h-full transition-colors duration-300 hover:border-amber-500/30 group"
    >
      <div>
        {/* Profile Image Frame with Fallback Handling */}
        <div className="relative w-full aspect-square rounded-xl bg-slate-900 overflow-hidden mb-4 sm:mb-5 border border-slate-800 flex items-center justify-center">
          {image && !imageError ? (
            <img
              src={image}
              alt={name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-slate-600 space-y-2">
              <HiUser className="w-14 sm:w-16 h-14 sm:h-16 text-slate-700" aria-hidden="true" />
              <span className="text-[11px] text-slate-500 font-medium">AWS Club</span>
            </div>
          )}

          {/* Academic Year Badge */}
          {year && (
            <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/20">
              {year}
            </div>
          )}
        </div>

        {/* Member Details */}
        <div className="space-y-1 sm:space-y-1.5 mb-4">
          <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-100 group-hover:text-amber-400 transition-colors">
            {name}
          </h3>
          <p className="text-amber-400 font-medium text-xs sm:text-sm">
            {position}
          </p>
          <p className="text-slate-400 text-xs line-clamp-1">
            {department}
          </p>
        </div>
      </div>

      {/* Footer Actions & Social Icons */}
      <div className="pt-3.5 sm:pt-4 border-t border-slate-800/80 space-y-3.5 sm:space-y-4 mt-auto">
        {/* Conditional Social Link Icons (Rules.md Section 18) */}
        {hasSocials && (
          <div className="flex items-center gap-2">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}'s LinkedIn profile`}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors min-w-[32px] min-h-[32px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
              >
                <FaLinkedin className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}'s GitHub profile`}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors min-w-[32px] min-h-[32px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
              >
                <FaGithub className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}'s Instagram profile`}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors min-w-[32px] min-h-[32px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
              >
                <FaInstagram className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        )}

        {/* View Profile Navigation Button */}
        {slug && (
          <Button
            to={`/team/${slug}`}
            variant="secondary"
            size="sm"
            className="w-full"
            icon={HiArrowRight}
            aria-label={`View profile of ${name}`}
          >
            View Profile
          </Button>
        )}
      </div>
    </motion.div>
  );
}

export default memo(TeamCard);

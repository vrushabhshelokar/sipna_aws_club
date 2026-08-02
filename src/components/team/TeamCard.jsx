import React, { useState, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';
import { HiArrowRight, HiBuildingOffice2, HiAcademicCap } from 'react-icons/hi2';

function TeamCard({ member }) {
  const [imageError, setImageError] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

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

  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase()
    : 'AWS';

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-3xl bg-gradient-to-b from-[#16161D] via-[#121217] to-[#0E0E12] border border-white/10 p-5 sm:p-6 lg:p-7 flex flex-col justify-between h-full group overflow-hidden transition-all duration-300 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.2)] hover:border-purple-500/40"
    >
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
          background: isHovered
            ? `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 80%)`
            : 'none'
        }}
      />

      {/* Top Border Light Trail */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Profile Avatar Frame with 3:4 Aspect Ratio */}
        <div className="relative w-full aspect-[3/4] rounded-2xl bg-[#0D0D10] overflow-hidden mb-5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/40 transition-colors shadow-inner">
          {image && !imageError ? (
            <img
              src={image}
              alt={name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-purple-900/30 via-[#14141E] to-[#0A0A0E] text-purple-300">
              <div className="w-16 h-16 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-2xl font-extrabold font-heading text-purple-300 shadow-md">
                {initials}
              </div>
            </div>
          )}

          {/* Academic Year Glass Badge */}
          {year && (
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#0D0D0E]/85 backdrop-blur-md text-purple-300 border border-purple-500/30 shadow-md flex items-center gap-1.5">
              <HiAcademicCap className="w-3.5 h-3.5 text-purple-400" />
              <span>{year}</span>
            </div>
          )}
        </div>

        {/* Member Details */}
        <div className="space-y-2 mb-6">
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white group-hover:text-purple-200 transition-colors leading-tight tracking-tight">
            {name}
          </h3>

          <div className="inline-block">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20">
              {position || 'Core Team'}
            </span>
          </div>

          {department && (
            <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
              <HiBuildingOffice2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span className="line-clamp-1">{department}</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Actions & Touch-Optimized Social Links */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3 mt-auto relative z-20">
        {/* Social Link Icons with 44px min touch target */}
        <div className="flex items-center gap-2">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${name}'s LinkedIn profile`}
              className="w-10 h-10 rounded-xl bg-[#1B1B24] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/25 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${name}'s GitHub profile`}
              className="w-10 h-10 rounded-xl bg-[#1B1B24] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/25 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${name}'s Instagram profile`}
              className="w-10 h-10 rounded-xl bg-[#1B1B24] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/25 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* View Profile Action Link */}
        {slug && (
          <Link
            to={`/team/${slug}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/30 font-semibold text-xs transition-all shadow-sm group/btn focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[44px]"
          >
            <span>Profile</span>
            <HiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default memo(TeamCard);

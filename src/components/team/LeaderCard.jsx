import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';
import { HiArrowRight, HiSparkles, HiAcademicCap, HiBuildingOffice2 } from 'react-icons/hi2';

function LeaderCard({ member }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  if (!member) return null;

  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-b from-[#181822] via-[#121217] to-[#0E0E12] border border-purple-500/30 shadow-[0_20px_60px_-15px_rgba(168,85,247,0.2)] group transition-all duration-300 hover:border-purple-500/50"
    >
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
          background: isHovered
            ? `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.18), transparent 80%)`
            : 'none'
        }}
      />

      {/* Subtle Background Wave Visualizer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity duration-700">
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-48 text-purple-500 animate-wave-slow"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M0,30 C200,100 450,10 700,70 C950,130 1100,20 1200,80 L1200,120 L0,120 Z"
            fill="currentColor"
            opacity="0.15"
          />
        </svg>
      </div>

      {/* Radial Purple Glow Behind Avatar */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 p-6 sm:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Avatar Container with 3:4 Aspect Ratio */}
        <div className="md:col-span-5 flex flex-col items-center justify-center">
          <div className="relative group/avatar w-48 sm:w-56 aspect-[3/4]">
            {/* Glowing Ring */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-purple-400 opacity-75 blur-md group-hover/avatar:opacity-100 transition duration-500" />

            <div className="relative w-full h-full rounded-3xl bg-[#121216] border-2 border-purple-400/50 flex items-center justify-center overflow-hidden shadow-2xl">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top sm:object-center group-hover/avatar:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div
                className={`w-full h-full bg-gradient-to-br from-purple-900/60 to-indigo-950/80 flex items-center justify-center text-purple-200 font-extrabold text-4xl font-heading ${member.image ? 'hidden' : 'flex'
                  }`}
              >
                {initials}
              </div>
            </div>
          </div>
        </div>

        {/* Info Content */}
        <div className="md:col-span-7 space-y-4 text-center md:text-left">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 border border-purple-500/40 shadow-sm">
            <HiSparkles className="w-4 h-4 text-purple-400" />
            <span>Club Leadership</span>
          </div> */}

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {member.name}
          </h2>

          <p className="text-lg font-semibold text-purple-300">
            {member.position || 'AWS Club Leader'}
          </p>

          {/* Department & Year Tags */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
            {member.department && (
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                <HiBuildingOffice2 className="w-3.5 h-3.5 text-purple-400" />
                {member.department}
              </span>
            )}
            {member.year && (
              <span className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                <HiAcademicCap className="w-3.5 h-3.5 text-purple-400" />
                {member.year}
              </span>
            )}
          </div>

          {/* Social Links & CTA */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 pt-4 border-t border-white/10">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
                className="w-11 h-11 rounded-xl bg-[#1B1B24] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/25 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} GitHub`}
                className="w-11 h-11 rounded-xl bg-[#1B1B24] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/25 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} Instagram`}
                className="w-11 h-11 rounded-xl bg-[#1B1B24] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/25 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            )}

            <Link
              to={`/team/${member.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-lg shadow-purple-600/30 min-h-[44px]"
            >
              <span>View Profile</span>
              <HiArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LeaderCard;

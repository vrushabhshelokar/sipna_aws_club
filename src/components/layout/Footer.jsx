import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { siteConfig } from '../../data/site';
import { FaLinkedin, FaGithub, FaInstagram, FaAws } from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { socialLinks, contact, footerInfo } = siteConfig;

  return (
    <footer className="relative bg-[#0A0A0C] border-t border-white/10 text-zinc-400 py-16 mt-auto overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-600/10 blur-[100px] pointer-events-none rounded-full" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 pb-12 border-b border-white/5 relative z-10">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-purple-400 p-[1px] shadow-lg shadow-purple-500/20">
                <div className="w-full h-full bg-[#0D0D0E] rounded-[11px] flex items-center justify-center text-purple-400">
                  <FaAws className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-[#141418] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 transition-all duration-200"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              )}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-xl bg-[#141418] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 transition-all duration-200"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-[#141418] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 transition-all duration-200"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-widest text-purple-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-purple-300 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-purple-300 transition-colors">
                  Team Roster & Leadership
                </Link>
              </li>
              <li>
                <a href="#events" className="hover:text-purple-300 transition-colors">
                  Bootcamps & Workshops
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-widest text-purple-300">
              Institution & Contact
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {siteConfig.college}
            </p>
            {contact?.email && (
              <p className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-lg border border-purple-500/20 inline-block">
                {contact.email}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4 relative z-10">
          <p>
            &copy; {currentYear} {footerInfo?.copyright || `${siteConfig.name}. All rights reserved.`}
          </p>
          <p className="text-zinc-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {footerInfo?.subtext || 'Active Student Cloud Chapter'}
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

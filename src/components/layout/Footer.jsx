import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { siteConfig } from '../../data/site';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';

/**
 * Reusable Footer component providing brand identity, quick navigation links,
 * copyright notice, and community details.
 * Consumes siteConfig dynamically from src/data/site.js.
 */
function Footer() {
  const currentYear = new Date().getFullYear();
  const { socialLinks, contact, footerInfo } = siteConfig;

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 pb-8 border-b border-slate-900">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="flex items-center gap-3 inline-flex">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-extrabold font-heading text-base shadow-md">
                AWS
              </div>
              <span className="font-heading font-extrabold text-xl text-slate-100">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
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
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
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
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
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
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-slate-200 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-amber-400 transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-slate-200 text-sm uppercase tracking-wider">
              College & Contact
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              {siteConfig.college}
            </p>
            {contact?.email && (
              <p className="text-xs text-amber-400/90 font-medium">
                {contact.email}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} {footerInfo?.copyright || `${siteConfig.name}. All rights reserved.`}
          </p>
          <p className="text-slate-500">
            {footerInfo?.subtext || 'Student Community Chapter'}
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

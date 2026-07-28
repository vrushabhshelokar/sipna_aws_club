import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';
import Container from '../common/Container';

/**
 * Sticky top navigation bar.
 * Primary navigation contains strictly Home and Team per Rules.md Section 14.
 * Accessible with ARIA state attributes, focus states, and landmark navigation.
 */
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' }
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Close mobile drawer menu on desktop viewport resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 transition-all duration-200">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 rounded-xl min-h-[44px]"
            aria-label="Sipna AWS Club Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-extrabold font-heading text-base sm:text-lg shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200" aria-hidden="true">
              AWS
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg text-slate-100 group-hover:text-amber-400 transition-colors leading-tight">
                Sipna AWS Club
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-wider uppercase">
                Cloud Community
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 min-h-[40px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-700/50 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <HiOutlineXMark className="w-6 h-6" aria-hidden="true" />
            ) : (
              <HiOutlineBars3 className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-slate-800/80 backdrop-blur-xl bg-slate-950/95 rounded-b-2xl animate-fadeIn">
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 ${
                      isActive
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;

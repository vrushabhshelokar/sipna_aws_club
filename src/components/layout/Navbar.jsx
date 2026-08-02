import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';
import { FaAws } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' }
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className="sticky top-0 z-50 pt-3 px-4 sm:px-6 transition-all duration-300">
      <div className={`max-w-5xl mx-auto rounded-2xl border transition-all duration-300 ${
        scrolled 
          ? 'bg-[#121216]/90 backdrop-blur-xl border-purple-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.5)] shadow-purple-950/10' 
          : 'bg-[#121216]/60 backdrop-blur-md border-white/10'
      }`}>
        <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Sipna AWS Club Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-purple-400 p-[1px] shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0D0D0E] rounded-[11px] flex items-center justify-center text-purple-400">
                <FaAws className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-purple-300 transition-colors leading-tight">
                Sipna AWS Club
              </span>
              <span className="text-[10px] text-zinc-400 font-medium tracking-wider uppercase">
                Student Chapter
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#0D0D0E]/60 p-1 rounded-xl border border-white/5" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors duration-200 min-h-[36px] flex items-center ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 bg-purple-600/20 border border-purple-500/40 rounded-lg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Quick Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#events"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 hover:text-white border border-purple-500/30 text-xs font-semibold tracking-wide transition-all duration-200 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              Join Club
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-zinc-300 hover:text-white bg-white/5 border border-white/10 flex items-center justify-center focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <HiOutlineXMark className="w-5 h-5 text-purple-400" />
              ) : (
                <HiOutlineBars3 className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-white/10 px-4 py-3 bg-[#0D0D0E]/95 rounded-b-2xl"
            >
              <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <a
                  href="#events"
                  onClick={closeMobileMenu}
                  className="mt-2 text-center py-2.5 rounded-xl bg-purple-600 text-white font-medium text-sm shadow-lg shadow-purple-600/30"
                >
                  Join Club
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navbar;

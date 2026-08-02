import React from 'react';
import { HiHome } from 'react-icons/hi2';
import Container from '../components/common/Container';
import SEO from '../components/seo/SEO';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="py-20 md:py-32 flex items-center justify-center min-h-[60vh]">
      <SEO
        title="404 - Page Not Found | Sipna AWS Club"
        description="The page you are looking for does not exist on the Sipna AWS Club website."
      />

      <Container className="text-center">
        <div className="glass-card rounded-3xl p-10 md:p-16 max-w-xl mx-auto border border-purple-500/20">
          <div className="w-20 h-20 rounded-2xl bg-purple-600/15 border border-purple-500/30 text-purple-300 flex items-center justify-center text-3xl font-extrabold mx-auto mb-6">
            404
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Page Not Found
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            The page you are looking for does not exist or has been moved. Return to the home page to explore the Sipna AWS Club.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 transition-all"
          >
            <HiHome className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default NotFound;

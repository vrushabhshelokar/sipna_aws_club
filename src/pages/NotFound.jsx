import React from 'react';
import { HiHome } from 'react-icons/hi2';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import SEO from '../components/seo/SEO';

/**
 * NotFound 404 fallback page.
 * Rendered for unrecognized routes with clear user feedback and return action.
 */
function NotFound() {
  return (
    <div className="py-20 md:py-32 flex items-center justify-center min-h-[60vh]">
      {/* 404 SEO Metadata */}
      <SEO
        title="404 - Page Not Found | Sipna AWS Club"
        description="The page you are looking for does not exist on the Sipna AWS Club website."
      />

      <Container className="text-center">
        <div className="glass-card rounded-3xl p-8 md:p-14 max-w-2xl mx-auto border border-slate-800">
          <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-3xl font-extrabold mx-auto mb-6">
            404
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 mb-3">
            Page Not Found
          </h1>
          <p className="text-slate-400 text-base mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved. Return to the home page to explore the Sipna AWS Club.
          </p>
          <Button to="/" variant="primary" size="md" icon={HiHome}>
            Back to Home
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default NotFound;

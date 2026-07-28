import React from 'react';
import Container from '../components/common/Container';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Mission from '../components/home/Mission';
import Vision from '../components/home/Vision';
import Benefits from '../components/home/Benefits';
import Timeline from '../components/home/Timeline';
import SEO from '../components/seo/SEO';
import { siteConfig } from '../data/site';

/**
 * Home Page Component.
 * Assembles all Home section components (Hero, About, Mission, Vision, Benefits, Timeline).
 * Consumes data exclusively from centralized data files via child section components.
 */
function Home() {
  return (
    <div className="space-y-4">
      {/* Home SEO Metadata */}
      <SEO
        title="Sipna AWS Club | Official Website"
        description={siteConfig.description}
      />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Mission & Vision Combined Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Mission />
            <Vision />
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <Benefits />

      {/* Upcoming Events Timeline */}
      <Timeline />
    </div>
  );
}

export default Home;

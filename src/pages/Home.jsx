import React from 'react';
import Hero from '../components/home/Hero';
import StatsBento from '../components/home/StatsBento';
import MissionVisionBento from '../components/home/MissionVisionBento';
import Timeline from '../components/home/Timeline';
import SEO from '../components/seo/SEO';
import { siteConfig } from '../data/site';
import Container from '../components/common/Container';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';

function Home() {
  return (
    <div className="space-y-6">
      {/* Home SEO Metadata */}
      <SEO
        title="Sipna AWS Club | Official Website"
        description={siteConfig.description}
      />

      {/* Hero Hub */}
      <Hero />

      {/* Stats Bento Grid */}
      <StatsBento />

      {/* Mission & Vision Bento */}
      <MissionVisionBento />

      {/* Timeline Roadmap & Workshops */}
      <Timeline />

      {/* High-Conversion Footer CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <Container>
          <div className="glass-panel p-10 sm:p-16 rounded-3xl relative overflow-hidden text-center max-w-4xl mx-auto border border-purple-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-purple-600/10 pointer-events-none" />
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 relative z-10">
              Ready to Accelerate Your Cloud Career?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-lg max-w-xl mx-auto mb-8 relative z-10">
              Join Sipna AWS Club today and connect with student leaders, mentors, and fellow cloud enthusiasts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              <Link
                to="/team"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Meet Our Team</span>
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;

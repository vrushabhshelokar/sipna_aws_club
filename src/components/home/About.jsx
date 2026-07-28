import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { homeContent } from '../../data/site';
import { HiCheckCircle } from 'react-icons/hi2';
import { staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation';

/**
 * About Section Component with Framer Motion Scroll Reveals.
 * Explains Sipna AWS Club objectives, focus areas, and overview.
 * Consumes data dynamically from src/data/site.js.
 */
function About() {
  const { about } = homeContent;

  return (
    <section className="py-16 bg-slate-950/40 border-y border-slate-800/60">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <SectionTitle
            badge={about.badge}
            title={about.title}
            subtitle={about.overview}
          />

          {/* Objectives List */}
          {about.objectives && about.objectives.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {about.objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  className="glass-card p-5 rounded-2xl flex items-start gap-3.5 border border-slate-800/80 transition-colors duration-200"
                >
                  <HiCheckCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                    {objective}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

export default About;

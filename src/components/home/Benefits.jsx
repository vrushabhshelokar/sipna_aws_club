import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { homeContent } from '../../data/site';
import { HiAcademicCap, HiWrenchScrewdriver, HiUserGroup, HiBriefcase } from 'react-icons/hi2';
import { staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation';

/**
 * Benefits Section Component with Staggered Framer Motion Reveals.
 * Highlights member advantages of joining Sipna AWS Club.
 * Consumes data dynamically from src/data/site.js.
 */
function Benefits() {
  const { benefits } = homeContent;

  const benefitIcons = [
    HiAcademicCap,
    HiWrenchScrewdriver,
    HiUserGroup,
    HiBriefcase
  ];

  return (
    <section className="py-16 bg-slate-950/60 border-t border-slate-800/60">
      <Container>
        <SectionTitle
          badge="Why Join Us"
          title="Benefits of Joining Sipna AWS Club"
          subtitle="Gain practical skills, industry exposure, and build real-world cloud projects alongside fellow engineering students."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefitIcons[index % benefitIcons.length];
            return (
              <motion.div
                key={benefit.id || index}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between transition-colors duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-100 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default Benefits;
